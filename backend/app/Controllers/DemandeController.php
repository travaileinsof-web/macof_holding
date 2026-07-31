<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Core\Request;
use App\Core\Response;
use App\Models\DemandeModel;
use App\Services\EmailService;
use App\Services\WhatsAppService;

class DemandeController
{
    public function index(Request $request)
    {
        $user = $_SERVER['AUTH_USER'] ?? null;
        $conditions = [];

        // Si l'admin n'a accès qu'à une seule filiale
        if ($user && isset($user['filiale_attribuee']) && $user['filiale_attribuee']) {
            $conditions['filiale'] = $user['filiale_attribuee'];
        }

        $demandes = DemandeModel::findAll($conditions);
        return Response::success($demandes);
    }

    public function store(Request $request)
    {
        // Validation basique
        $required = ['filiale', 'type_demande', 'nom_complet', 'email', 'telephone', 'objet', 'message'];
        $data = $request->all();

        foreach ($required as $field) {
            if (empty($data[$field])) {
                return Response::error("Le champ $field est requis.");
            }
        }

        // type_demande validation
        $allowedTypes = ['devis', 'reservation', 'partenariat', 'contact', 'commande'];
        if (!in_array($data['type_demande'], $allowedTypes)) {
            Response::error('Type de demande invalide', 422);
            return;
        }

        // Email validation
        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            Response::error('Format d\'email invalide', 422);
            return;
        }

        // Insertion
        $id = DemandeModel::createDemande($data);

        // Récupération pour avoir la référence générée
        $demande = DemandeModel::findById($id);

        if ($demande) {
            // Triple Notification
            EmailService::sendNotificationNouveauLead($demande);
            WhatsAppService::sendNotificationNouveauLead($demande);

            return Response::success($demande, "Demande envoyée avec succès.", null);
        }

        return Response::error("Erreur lors de la création de la demande.", 500);
    }

    public function show(Request $request, $id)
    {
        $demande = DemandeModel::findById((int)$id);

        if (!$demande) {
            return Response::error("Demande introuvable.", 404);
        }

        $user = $_SERVER['AUTH_USER'] ?? null;
        if ($user && isset($user['filiale_attribuee']) && $user['filiale_attribuee']) {
            if ($demande['filiale'] !== $user['filiale_attribuee']) {
                return Response::error("Accès non autorisé.", 403);
            }
        }

        return Response::success($demande);
    }

    public function updateStatus(Request $request, $id)
    {
        $statut = $request->input('statut');
        $validStatuses = ['nouveau', 'en_cours', 'traite', 'rejete', 'archive'];

        if (!in_array($statut, $validStatuses)) {
            return Response::error("Statut invalide.");
        }

        $demande = DemandeModel::findById((int)$id);
        if (!$demande) {
            return Response::error("Demande introuvable.", 404);
        }

        $authUser = $_SERVER['AUTH_USER'] ?? null;
        if ($authUser) {
            if ($authUser['role'] !== 'admin' && $authUser['filiale_attribuee'] && $authUser['filiale_attribuee'] !== $demande['filiale']) {
                Response::error('Accès non autorisé', 403);
                return;
            }
        }

        $success = DemandeModel::update((int)$id, ['statut' => $statut]);

        if ($success) {
            return Response::success(null, "Statut mis à jour.");
        }

        return Response::error("Erreur lors de la mise à jour.", 500);
    }

    public function destroy(Request $request, $id)
    {
        $success = DemandeModel::archive((int)$id);
        if ($success) {
            Response::success(null, 'Demande supprimée avec succès');
        } else {
            Response::error('Demande non trouvée', 404);
        }
    }
}

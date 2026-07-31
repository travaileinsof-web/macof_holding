<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Core\Request;
use App\Core\Response;
use App\Models\CatalogueModel;
use App\Services\UploadService;

class CatalogueController
{
    public function index(Request $request)
    {
        // Optionnel : filtre par filiale
        $filiale = $request->input('filiale');
        $conditions = [];
        
        if ($filiale) {
            $conditions['filiale'] = $filiale;
        }

        $catalogues = CatalogueModel::findAll($conditions);
        return Response::success($catalogues);
    }

    public function store(Request $request)
    {
        $titre = $request->input('titre');
        $filiale = $request->input('filiale');
        $typeDocument = $request->input('type_document');
        $file = $request->file('document');

        if (!$titre || !$filiale || !$typeDocument || !$file) {
            return Response::error("Toutes les informations et le fichier sont requis.");
        }

        $filePath = UploadService::upload($file, 'catalogues');

        if (!$filePath) {
            return Response::error("Erreur lors de l'upload du fichier.", 500);
        }

        $data = [
            'titre' => $titre,
            'filiale' => $filiale,
            'type_document' => $typeDocument,
            'file_path' => $filePath,
            'taille_ko' => round($file['size'] / 1024),
            'format' => pathinfo($file['name'], PATHINFO_EXTENSION)
        ];

        $id = CatalogueModel::create($data);
        return Response::success(['id' => $id], "Catalogue ajouté avec succès.");
    }

    public function update(Request $request, $id)
    {
        $titre = $request->input('titre');
        $description = $request->input('description');
        $filiale = $request->input('filiale');

        $data = array_filter([
            'titre' => htmlspecialchars($titre),
            'description' => htmlspecialchars($description),
            'filiale' => htmlspecialchars($filiale),
        ], fn($v) => $v !== null);

        $success = CatalogueModel::update((int)$id, $data);
        if ($success) {
            Response::success(null, 'Catalogue mis à jour');
        } else {
            Response::error('Catalogue non trouvé', 404);
        }
    }

    public function destroy(Request $request, $id)
    {
        $success = CatalogueModel::softDelete((int)$id);
        
        if ($success) {
            return Response::success(null, "Catalogue supprimé.");
        }
        
        return Response::error("Erreur ou catalogue introuvable.", 404);
    }
}

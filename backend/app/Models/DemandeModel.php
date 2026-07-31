<?php
declare(strict_types=1);

namespace App\Models;

class DemandeModel extends BaseModel
{
    protected static string $table = 'demandes_contact';

    public static function createDemande(array $data): int
    {
        // Génération automatique d'une référence (ex: IMMO-20260623-001)
        $prefix = strtoupper(substr($data['filiale'], 0, 4));
        $date = date('Ymd');
        $uniq = bin2hex(random_bytes(4)); // 8 hex chars = 4 billion combinations
        $reference = "{$prefix}-{$date}-{$uniq}";

        $data['reference'] = $reference;

        if (isset($data['details_json']) && is_array($data['details_json'])) {
            $data['details_json'] = json_encode($data['details_json']);
        }

        return self::create($data);
    }

    public static function archive(int $id): bool
    {
        return self::update($id, ['statut' => 'archive']);
    }
}

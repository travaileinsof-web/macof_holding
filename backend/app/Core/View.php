<?php
declare(strict_types=1);

namespace App\Core;

class View
{
    public static function render(string $view, array $data = []): void
    {
        // Key sanitization - protect extract() from overwriting critical variables
        $protectedKeys = ['viewFile', 'view'];
        foreach ($protectedKeys as $key) {
            unset($data[$key]);
        }
        extract($data);

        // Path traversal protection
        $view = str_replace(['../', '..\\'], '', $view);
        $viewFile = __DIR__ . '/../Views/' . $view . '.php';
        $viewFile = realpath($viewFile);
        if ($viewFile === false || strpos($viewFile, realpath(__DIR__ . '/../Views/')) !== 0) {
            Response::error('Vue non trouvée', 404);
            return;
        }

        // Si ce n'est pas le layout lui-même ou le login (qui peut avoir un layout spécifique),
        // on charge le layout et on met le contenu dedans
        if (strpos($view, 'layout') === false && strpos($view, 'login') === false) {
            ob_start();
            require $viewFile;
            $content = ob_get_clean();

            require __DIR__ . '/../Views/admin/layout.php';
        } else {
            require $viewFile;
        }
    }
}

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?? 'Connexion | MACOF Admin' ?></title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/admin/assets/css/admin.css">
</head>
<body class="bg-slate-900 text-gray-800 font-sans antialiased flex items-center justify-center min-h-screen">

    <div class="w-full max-w-md">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-bold uppercase tracking-wider text-blue-400">MACOF <span class="text-white">Admin</span></h1>
            <p class="text-slate-400 mt-2">Connectez-vous pour accéder au tableau de bord</p>
        </div>

        <div class="bg-white rounded-lg shadow-xl p-8">
            <div id="login-error" class="hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                <span class="block sm:inline" id="login-error-text">Identifiants incorrects.</span>
            </div>

            <form id="login-form" class="space-y-6">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Adresse Email</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-envelope text-gray-400"></i>
                        </div>
                        <input type="email" name="email" id="email" class="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border" placeholder="admin@macof-holding.com" required>
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-lock text-gray-400"></i>
                        </div>
                        <input type="password" name="password" id="password" class="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border" placeholder="••••••••" required>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                            Se souvenir de moi
                        </label>
                    </div>
                </div>

                <div>
                    <button type="submit" id="btn-submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                        Se connecter
                    </button>
                </div>
            </form>
        </div>
        
        <p class="text-center text-slate-500 text-xs mt-6">
            &copy; <?= date('Y') ?> MACOF Holding. Tous droits réservés.
        </p>
    </div>

    <script src="/admin/assets/js/admin.js"></script>
    <script>
        // Si déjà connecté, rediriger
        if (AdminApp.isAuthenticated()) {
            window.location.href = '/admin/dashboard';
        }

        document.getElementById('login-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const btn = document.getElementById('btn-submit');
            const errorDiv = document.getElementById('login-error');
            
            errorDiv.classList.add('hidden');
            btn.disabled = true;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Connexion...';
            
            try {
                const response = await fetch('/api/v1/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });
                
                const data = await response.json();
                
                if (data.success) {
                    localStorage.setItem('macof_admin_token', data.data.token);
                    localStorage.setItem('macof_admin_user', JSON.stringify(data.data.user));
                    window.location.href = '/admin/dashboard';
                } else {
                    document.getElementById('login-error-text').textContent = data.message || 'Identifiants incorrects.';
                    errorDiv.classList.remove('hidden');
                    btn.disabled = false;
                    btn.innerHTML = 'Se connecter';
                }
            } catch (error) {
                document.getElementById('login-error-text').textContent = 'Erreur de connexion au serveur.';
                errorDiv.classList.remove('hidden');
                btn.disabled = false;
                btn.innerHTML = 'Se connecter';
            }
        });
    </script>
</body>
</html>

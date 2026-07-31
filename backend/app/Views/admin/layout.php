<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?? 'MACOF Holding | Administration' ?></title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Montserrat', 'sans-serif'],
                        serif: ['"Cormorant Garamond"', 'serif'],
                    },
                    colors: {
                        macof: {
                            dark: '#0f172a',
                            gold: '#cda434',
                            light: '#f8fafc',
                            card: '#ffffff'
                        }
                    }
                }
            }
        }
    </script>
    
    <!-- FontAwesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="/admin/assets/css/admin.css">
</head>
<body class="bg-[#f3f4f6] text-slate-800 font-sans antialiased hidden" id="app-body">

    <div class="flex h-screen overflow-hidden">
        
        <!-- Sidebar -->
        <aside class="w-64 bg-macof-dark text-white flex flex-col transition-all duration-300 shadow-2xl relative z-20">
            <div class="h-20 flex items-center justify-center border-b border-slate-800">
                <h1 class="text-2xl font-serif font-bold tracking-widest text-macof-gold uppercase">
                    MACOF <span class="text-white text-sm tracking-widest font-sans opacity-80 block text-center mt-1">Admin</span>
                </h1>
            </div>
            
            <nav class="flex-1 overflow-y-auto py-6">
                <ul class="space-y-2 px-4">
                    <li>
                        <a href="/admin/dashboard" class="flex items-center px-4 py-3 rounded-lg transition-all duration-200 <?= strpos($_SERVER['REQUEST_URI'], '/admin/dashboard') !== false ? 'bg-macof-gold/10 text-macof-gold shadow-[inset_4px_0_0_0_#cda434]' : 'text-slate-400 hover:bg-slate-800 hover:text-white' ?>">
                            <i class="fas fa-tachometer-alt w-6"></i>
                            <span class="font-medium">Tableau de bord</span>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/demandes" class="flex items-center px-4 py-3 rounded-lg transition-all duration-200 <?= strpos($_SERVER['REQUEST_URI'], '/admin/demandes') !== false ? 'bg-macof-gold/10 text-macof-gold shadow-[inset_4px_0_0_0_#cda434]' : 'text-slate-400 hover:bg-slate-800 hover:text-white' ?>">
                            <i class="fas fa-envelope w-6"></i>
                            <span class="font-medium">Demandes</span>
                            <span class="ml-auto bg-macof-gold text-macof-dark text-xs font-bold px-2 py-0.5 rounded-full shadow-sm" id="new-demandes-count">0</span>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/catalogues" class="flex items-center px-4 py-3 rounded-lg transition-all duration-200 <?= strpos($_SERVER['REQUEST_URI'], '/admin/catalogues') !== false ? 'bg-macof-gold/10 text-macof-gold shadow-[inset_4px_0_0_0_#cda434]' : 'text-slate-400 hover:bg-slate-800 hover:text-white' ?>">
                            <i class="fas fa-file-pdf w-6"></i>
                            <span class="font-medium">Catalogues</span>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/galerie" class="flex items-center px-4 py-3 rounded-lg transition-all duration-200 <?= strpos($_SERVER['REQUEST_URI'], '/admin/galerie') !== false ? 'bg-macof-gold/10 text-macof-gold shadow-[inset_4px_0_0_0_#cda434]' : 'text-slate-400 hover:bg-slate-800 hover:text-white' ?>">
                            <i class="fas fa-images w-6"></i>
                            <span class="font-medium">Galerie</span>
                        </a>
                    </li>
                    
                    <li class="pt-4 pb-1">
                        <p class="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Pages du site</p>
                    </li>
                    <li>
                        <a href="/admin/pages/home" class="flex items-center px-4 py-3 rounded-lg transition-all duration-200 <?= strpos($_SERVER['REQUEST_URI'], '/admin/pages/home') !== false ? 'bg-macof-gold/10 text-macof-gold shadow-[inset_4px_0_0_0_#cda434]' : 'text-slate-400 hover:bg-slate-800 hover:text-white' ?>">
                            <i class="fas fa-home w-6"></i>
                            <span class="font-medium">Accueil</span>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/pages/about" class="flex items-center px-4 py-3 rounded-lg transition-all duration-200 <?= strpos($_SERVER['REQUEST_URI'], '/admin/pages/about') !== false ? 'bg-macof-gold/10 text-macof-gold shadow-[inset_4px_0_0_0_#cda434]' : 'text-slate-400 hover:bg-slate-800 hover:text-white' ?>">
                            <i class="fas fa-info-circle w-6"></i>
                            <span class="font-medium">À Propos</span>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/filiales" class="flex items-center px-4 py-3 rounded-lg transition-all duration-200 <?= strpos($_SERVER['REQUEST_URI'], '/admin/filiales') !== false ? 'bg-macof-gold/10 text-macof-gold shadow-[inset_4px_0_0_0_#cda434]' : 'text-slate-400 hover:bg-slate-800 hover:text-white' ?>">
                            <i class="fas fa-building w-6"></i>
                            <span class="font-medium">Filiales</span>
                        </a>
                    </li>
                </ul>
            </nav>
            
            <div class="p-4 border-t border-slate-800">
                <div class="bg-slate-800/50 rounded-lg p-4 flex items-center mb-4">
                    <div class="w-10 h-10 rounded-full bg-macof-gold text-macof-dark flex items-center justify-center font-bold shadow-lg shadow-macof-gold/20">
                        A
                    </div>
                    <div class="ml-3 overflow-hidden">
                        <p class="text-sm font-semibold text-white truncate" id="user-name">Admin</p>
                        <p class="text-xs text-slate-400 truncate">Super Admin</p>
                    </div>
                </div>
                <button id="logout-btn" class="flex items-center justify-center w-full px-4 py-2 text-sm text-red-400 border border-red-900/30 hover:bg-red-900/20 hover:text-red-300 rounded-lg transition-all duration-200">
                    <i class="fas fa-power-off mr-2"></i>
                    <span class="font-medium">Déconnexion</span>
                </button>
            </div>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col h-screen overflow-hidden bg-macof-light relative">
            
            <!-- Header Glow Effect -->
            <div class="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white/80 to-transparent pointer-events-none z-0"></div>

            <!-- Topbar -->
            <header class="h-20 flex items-center justify-between px-8 relative z-10">
                <div class="flex items-center">
                    <button class="text-slate-500 hover:text-macof-gold focus:outline-none lg:hidden transition-colors">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                    <div class="ml-4 lg:ml-0">
                        <h2 class="text-2xl font-serif font-bold text-slate-800"><?= $title ?? 'Administration' ?></h2>
                    </div>
                </div>
                
                <div class="flex items-center space-x-6">
                    <button class="relative text-slate-400 hover:text-macof-gold transition-colors">
                        <i class="fas fa-bell text-xl"></i>
                        <span class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-macof-light"></span>
                    </button>
                </div>
            </header>

            <!-- Content -->
            <main class="flex-1 overflow-x-hidden overflow-y-auto p-8 relative z-10" id="main-content">
                <!-- Les notifications (Toasts) -->
                <div id="notification-area" class="fixed top-4 right-4 z-50 flex flex-col gap-2"></div>
                
                <?= $content ?? '' ?>
            </main>
        </div>
    </div>

    <!-- Scripts -->
    <script src="/admin/assets/js/admin.js"></script>
    <script>
        // Protection de la session
        if (!AdminApp.isAuthenticated()) {
            window.location.href = '/admin/login';
        } else {
            // Affichage avec fade-in
            const body = document.getElementById('app-body');
            body.classList.remove('hidden');
            body.classList.add('animate-fade-in');
            
            // Hydratation user
            const user = JSON.parse(localStorage.getItem('macof_admin_user') || '{}');
            if (user.nom) {
                document.getElementById('user-name').textContent = user.nom;
            }

            // Déconnexion
            document.getElementById('logout-btn').addEventListener('click', () => {
                AdminApp.logout();
            });
        }
    </script>
</body>
</html>

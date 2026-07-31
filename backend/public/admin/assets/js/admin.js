/**
 * MACOF Holding - Admin Dashboard Core JavaScript
 */

const AdminApp = {
    // URL de base de l'API (à adapter selon l'environnement)
    apiBase: '/api/v1',
    
    // Vérifie si l'utilisateur est connecté via la présence d'un token
    isAuthenticated: function() {
        return localStorage.getItem('macof_admin_token') !== null;
    },
    
    // Déconnexion
    logout: function() {
        localStorage.removeItem('macof_admin_token');
        localStorage.removeItem('macof_admin_user');
        window.location.href = '/admin/login';
    },

    // Wrapper générique pour les appels API avec le token
    apiCall: async function(endpoint, method = 'GET', body = null) {
        const token = localStorage.getItem('macof_admin_token');
        
        if (!token && endpoint !== '/auth/login') {
            this.logout();
            throw new Error('Non authentifié');
        }

        const headers = {
            'Accept': 'application/json'
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const options = {
            method,
            headers
        };

        if (body) {
            if (body instanceof FormData) {
                // Fetch gère automatiquement le Content-Type avec boundary pour FormData
                options.body = body;
            } else {
                headers['Content-Type'] = 'application/json';
                options.body = JSON.stringify(body);
            }
        }

        try {
            const response = await fetch(`${this.apiBase}${endpoint}`, options);
            
            // Si 401 Unauthorized, forcer la déconnexion
            if (response.status === 401) {
                this.logout();
                return null;
            }
            
            return await response.json();
        } catch (error) {
            console.error('API Call Error:', error);
            throw error;
        }
    },

    // Système de notification type Toast
    showNotification: function(message, type = 'success') {
        const container = document.getElementById('notification-area');
        if (!container) return;

        const colorClasses = type === 'success' 
            ? 'bg-green-100 border-green-400 text-green-700' 
            : 'bg-red-100 border-red-400 text-red-700';

        const iconClass = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';

        const toast = document.createElement('div');
        toast.className = `border px-4 py-3 rounded relative mb-4 flex items-center transition-opacity duration-500 shadow-sm ${colorClasses}`;
        toast.innerHTML = `
            <i class="fas ${iconClass} mr-3 text-lg"></i>
            <span class="block sm:inline font-medium">${message}</span>
            <button class="absolute top-0 bottom-0 right-0 px-4 py-3" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;

        container.appendChild(toast);

        // Auto-disparition après 4 secondes
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                if(toast.parentElement) toast.remove();
            }, 500);
        }, 4000);
    }
};

<div class="mb-8 flex justify-between items-center animate-slide-up" style="animation-delay: 0.1s;">
    <div>
        <h2 class="text-3xl font-serif font-bold text-slate-800">Vue d'ensemble</h2>
        <p class="text-slate-500 mt-1">Bienvenue sur votre espace d'administration MACOF Holding.</p>
    </div>
    <button onclick="window.location.reload()" class="macof-btn-gold">
        <i class="fas fa-sync-alt mr-2"></i>Actualiser
    </button>
</div>

<!-- KPIs -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-slide-up" style="animation-delay: 0.2s;">
    
    <div class="glass-card rounded-xl p-6 relative overflow-hidden group">
        <div class="absolute right-0 top-0 w-24 h-24 bg-macof-gold/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
        <div class="flex items-center">
            <div class="w-12 h-12 rounded-lg bg-macof-gold/20 text-macof-gold flex items-center justify-center mr-4 shadow-sm">
                <i class="fas fa-envelope text-xl"></i>
            </div>
            <div>
                <p class="text-xs text-slate-500 font-bold uppercase tracking-wider">Demandes (Total)</p>
                <p class="text-3xl font-bold text-macof-dark mt-1" id="kpi-total-demandes">0</p>
            </div>
        </div>
    </div>

    <div class="glass-card rounded-xl p-6 relative overflow-hidden group">
        <div class="absolute right-0 top-0 w-24 h-24 bg-green-500/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
        <div class="flex items-center">
            <div class="w-12 h-12 rounded-lg bg-green-500/20 text-green-600 flex items-center justify-center mr-4 shadow-sm">
                <i class="fas fa-check-circle text-xl"></i>
            </div>
            <div>
                <p class="text-xs text-slate-500 font-bold uppercase tracking-wider">Demandes traitées</p>
                <p class="text-3xl font-bold text-macof-dark mt-1" id="kpi-traitees">0</p>
            </div>
        </div>
    </div>

    <div class="glass-card rounded-xl p-6 relative overflow-hidden group">
        <div class="absolute right-0 top-0 w-24 h-24 bg-blue-500/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
        <div class="flex items-center">
            <div class="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-600 flex items-center justify-center mr-4 shadow-sm">
                <i class="fas fa-clock text-xl"></i>
            </div>
            <div>
                <p class="text-xs text-slate-500 font-bold uppercase tracking-wider">Nouvelles demandes</p>
                <p class="text-3xl font-bold text-macof-dark mt-1" id="kpi-nouvelles">0</p>
            </div>
        </div>
    </div>

    <div class="glass-card rounded-xl p-6 relative overflow-hidden group">
        <div class="absolute right-0 top-0 w-24 h-24 bg-purple-500/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
        <div class="flex items-center">
            <div class="w-12 h-12 rounded-lg bg-purple-500/20 text-purple-600 flex items-center justify-center mr-4 shadow-sm">
                <i class="fas fa-building text-xl"></i>
            </div>
            <div>
                <p class="text-xs text-slate-500 font-bold uppercase tracking-wider">Filiales actives</p>
                <p class="text-3xl font-bold text-macof-dark mt-1" id="kpi-filiales">0</p>
            </div>
        </div>
    </div>

</div>

<!-- Recent Activity & Charts -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-up" style="animation-delay: 0.3s;">
    
    <div class="lg:col-span-2 glass-card rounded-xl overflow-hidden">
        <div class="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-white/50">
            <h3 class="font-serif font-bold text-xl text-macof-dark">Dernières demandes reçues</h3>
            <a href="/admin/demandes" class="text-sm text-macof-gold hover:text-macof-dark font-medium transition-colors">Voir tout &rarr;</a>
        </div>
        <div class="">
            <div class="overflow-x-auto">
                <table class="min-w-full text-left macof-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Contact</th>
                            <th>Filiale</th>
                            <th>Statut</th>
                        </tr>
                    </thead>
                    <tbody id="recent-demandes-list">
                        <tr>
                            <td colspan="4" class="text-center py-8 text-slate-400">
                                <i class="fas fa-spinner fa-spin text-2xl mb-2"></i>
                                <p>Chargement des données...</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="glass-card rounded-xl overflow-hidden">
        <div class="px-6 py-5 border-b border-slate-100 bg-white/50">
            <h3 class="font-serif font-bold text-xl text-macof-dark">Statut du système</h3>
        </div>
        <div class="p-6">
            <ul class="space-y-5">
                <li class="flex justify-between items-center p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-green-500 mr-3 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                        <span class="text-sm font-medium text-slate-700">API Backend</span>
                    </div>
                    <span class="px-2.5 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold">En ligne</span>
                </li>
                <li class="flex justify-between items-center p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-green-500 mr-3 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                        <span class="text-sm font-medium text-slate-700">Base de données</span>
                    </div>
                    <span class="px-2.5 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold">Connectée</span>
                </li>
                <li class="flex justify-between items-center p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-macof-gold mr-3 shadow-[0_0_8px_rgba(205,164,52,0.6)]"></div>
                        <span class="text-sm font-medium text-slate-700">Espace Stockage</span>
                    </div>
                    <span class="px-2.5 py-1 bg-macof-gold/20 text-macof-dark text-xs rounded-full font-bold">Actif</span>
                </li>
            </ul>
            
            <div class="mt-8 p-5 bg-gradient-to-br from-macof-dark to-slate-800 rounded-xl text-white shadow-lg relative overflow-hidden">
                <div class="absolute -right-4 -bottom-4 opacity-10">
                    <i class="fas fa-shield-alt text-8xl"></i>
                </div>
                <h4 class="font-serif font-bold text-lg mb-2 text-macof-gold">Sécurité</h4>
                <p class="text-xs text-slate-300 mb-4 leading-relaxed">Toutes les communications sont chiffrées. Votre session expirera automatiquement après inactivité.</p>
                <div class="text-xs font-mono bg-black/30 px-3 py-2 rounded border border-white/10">
                    Dernière connexion: <span class="text-macof-gold"><?= date('d/m/Y H:i') ?></span>
                </div>
            </div>
        </div>
    </div>

</div>

<script>
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Demandes
        const response = await AdminApp.apiCall('/admin/demandes');
        if (response && response.data) {
            const demandes = response.data;
            
            // MAJ KPIs
            document.getElementById('kpi-total-demandes').textContent = demandes.length;
            const nouvelles = demandes.filter(d => d.statut === 'nouveau').length;
            document.getElementById('kpi-nouvelles').textContent = nouvelles;
            document.getElementById('kpi-traitees').textContent = demandes.filter(d => d.statut === 'traite').length;
            document.getElementById('new-demandes-count').textContent = nouvelles;
            
            // Remplir tableau
            const tbody = document.getElementById('recent-demandes-list');
            tbody.innerHTML = '';
            
            const recent = demandes.slice(0, 5);
            if (recent.length === 0) {
                tbody.innerHTML = '<tr><td colspan="4" class="px-6 py-8 text-center text-sm text-slate-500 italic">Aucune demande reçue pour le moment.</td></tr>';
            } else {
                recent.forEach(d => {
                    let statusClass = 'bg-slate-100 text-slate-700';
                    let statusIcon = 'fa-circle';
                    
                    if (d.statut === 'nouveau') {
                        statusClass = 'bg-blue-100 text-blue-700';
                        statusIcon = 'fa-star';
                    }
                    if (d.statut === 'en_cours') {
                        statusClass = 'bg-yellow-100 text-yellow-700';
                        statusIcon = 'fa-spinner fa-spin';
                    }
                    if (d.statut === 'traite') {
                        statusClass = 'bg-green-100 text-green-700';
                        statusIcon = 'fa-check';
                    }
                    if (d.statut === 'rejete') {
                        statusClass = 'bg-red-100 text-red-700';
                        statusIcon = 'fa-times';
                    }
                    
                    const date = new Date(d.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
                    
                    tbody.innerHTML += `
                        <tr class="transition-colors">
                            <td class="font-medium">${date}</td>
                            <td>
                                <div class="font-bold text-macof-dark">${d.nom_complet}</div>
                                <div class="text-xs text-slate-500 mt-0.5">${d.email}</div>
                            </td>
                            <td>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded border border-slate-200 bg-white text-xs font-medium text-slate-600">
                                    ${d.filiale}
                                </span>
                            </td>
                            <td>
                                <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${statusClass}">
                                    <i class="fas ${statusIcon} mr-1.5 opacity-70 text-[10px]"></i>
                                    ${d.statut.toUpperCase().replace('_', ' ')}
                                </span>
                            </td>
                        </tr>
                    `;
                });
            }
        }

        // Filiales
        const filialesResp = await AdminApp.apiCall('/admin/filiales');
        if (filialesResp && filialesResp.data) {
            document.getElementById('kpi-filiales').textContent = filialesResp.data.length;
        }

    } catch (e) {
        console.error("Erreur chargement dashboard", e);
        AdminApp.showNotification("Erreur lors du chargement des données", "error");
    }
});
</script>

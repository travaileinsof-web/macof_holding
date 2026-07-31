<div class="mb-8 flex justify-between items-center animate-slide-up" style="animation-delay: 0.1s;">
    <div>
        <h2 class="text-3xl font-serif font-bold text-slate-800">Gestion des Demandes</h2>
        <p class="text-slate-500 mt-1">Consultez et traitez les demandes de contact reçues depuis le site vitrine.</p>
    </div>
    <div class="flex space-x-3">
        <button onclick="loadDemandes()" class="macof-btn-primary bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 shadow-none">
            <i class="fas fa-sync-alt mr-2"></i>Actualiser
        </button>
        <button class="macof-btn-gold">
            <i class="fas fa-download mr-2"></i>Exporter CSV
        </button>
    </div>
</div>

<div class="glass-card rounded-xl overflow-hidden animate-slide-up" style="animation-delay: 0.2s;">
    
    <!-- Filtres -->
    <div class="px-6 py-4 border-b border-slate-100 bg-white/50 flex flex-wrap gap-4 items-center">
        <div class="flex-1 min-w-[200px] relative">
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
            <input type="text" id="search-demandes" placeholder="Rechercher par nom, email ou référence..." class="macof-input pl-10 bg-white">
        </div>
        <select id="filter-statut" class="macof-input w-auto bg-white cursor-pointer">
            <option value="">Tous les statuts</option>
            <option value="nouveau">Nouveau</option>
            <option value="en_cours">En cours</option>
            <option value="traite">Traité</option>
            <option value="rejete">Rejeté</option>
        </select>
        <select id="filter-filiale" class="macof-input w-auto bg-white cursor-pointer">
            <option value="">Toutes les filiales</option>
            <!-- Rempli dynamiquement -->
        </select>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto min-h-[400px]">
        <table class="min-w-full text-left macof-table">
            <thead>
                <tr>
                    <th>Réf. / Date</th>
                    <th>Contact</th>
                    <th>Demande</th>
                    <th>Statut</th>
                    <th class="text-right">Actions</th>
                </tr>
            </thead>
            <tbody id="demandes-list">
                <tr>
                    <td colspan="5" class="text-center py-12 text-slate-400">
                        <i class="fas fa-spinner fa-spin text-3xl mb-4 text-macof-gold"></i>
                        <p class="font-medium">Chargement des demandes...</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <!-- Pagination (simplifiée) -->
    <div class="px-6 py-4 border-t border-slate-100 bg-white/50 flex items-center justify-between">
        <span class="text-sm text-slate-500">Affichage de <span class="font-bold text-slate-800" id="demandes-count">0</span> demande(s)</span>
    </div>
</div>

<!-- Modal Vue Détail Demande -->
<div id="demande-modal" class="fixed inset-0 z-50 hidden modal-overlay flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col modal-content overflow-hidden">
        
        <div class="px-8 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <div>
                <h3 class="text-xl font-serif font-bold text-macof-dark" id="modal-nom">Détail de la demande</h3>
                <p class="text-sm text-slate-500 mt-1">Référence: <span id="modal-ref" class="font-mono text-macof-gold font-bold"></span></p>
            </div>
            <button onclick="closeModal('demande-modal')" class="text-slate-400 hover:text-red-500 transition-colors bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm border border-slate-200">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div class="p-8 overflow-y-auto flex-1 bg-white">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Info Contact -->
                <div>
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Informations Contact</h4>
                    <ul class="space-y-4">
                        <li>
                            <p class="text-xs text-slate-500 mb-1">Email</p>
                            <a href="" id="modal-email-link" class="font-medium text-blue-600 hover:underline"><i class="fas fa-envelope mr-2 opacity-50"></i><span id="modal-email"></span></a>
                        </li>
                        <li>
                            <p class="text-xs text-slate-500 mb-1">Téléphone</p>
                            <a href="" id="modal-tel-link" class="font-medium text-slate-800"><i class="fas fa-phone-alt mr-2 opacity-50"></i><span id="modal-tel"></span></a>
                        </li>
                        <li id="modal-societe-container">
                            <p class="text-xs text-slate-500 mb-1">Société</p>
                            <p class="font-medium text-slate-800"><i class="fas fa-building mr-2 opacity-50"></i><span id="modal-societe"></span></p>
                        </li>
                    </ul>
                </div>
                
                <!-- Info Demande -->
                <div>
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Détails de la demande</h4>
                    <ul class="space-y-4">
                        <li>
                            <p class="text-xs text-slate-500 mb-1">Date</p>
                            <p class="font-medium text-slate-800"><i class="far fa-calendar-alt mr-2 opacity-50"></i><span id="modal-date"></span></p>
                        </li>
                        <li>
                            <p class="text-xs text-slate-500 mb-1">Filiale & Type</p>
                            <p class="font-medium text-slate-800">
                                <span class="bg-slate-100 px-2 py-0.5 rounded text-xs border border-slate-200 mr-2" id="modal-filiale"></span>
                                <span class="capitalize" id="modal-type"></span>
                            </p>
                        </li>
                        <li>
                            <p class="text-xs text-slate-500 mb-1">Objet</p>
                            <p class="font-medium text-slate-800" id="modal-objet"></p>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="mt-8">
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Message</h4>
                <div class="bg-slate-50 p-5 rounded-lg border border-slate-100 text-slate-700 text-sm leading-relaxed whitespace-pre-wrap font-sans" id="modal-message"></div>
            </div>
        </div>
        
        <div class="px-8 py-5 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
            <div class="flex items-center space-x-3">
                <label class="text-sm font-medium text-slate-600">Changer le statut :</label>
                <select id="update-statut-select" class="macof-input py-1.5 px-3 bg-white w-auto font-bold text-sm">
                    <option value="nouveau">Nouveau</option>
                    <option value="en_cours">En cours</option>
                    <option value="traite">Traité</option>
                    <option value="rejete">Rejeté</option>
                </select>
                <button onclick="updateStatutDemande()" class="macof-btn-primary py-1.5 px-4 text-xs">Mettre à jour</button>
            </div>
            <a href="#" id="btn-reply-email" class="macof-btn-gold py-2">
                <i class="fas fa-reply mr-2"></i>Répondre par Email
            </a>
        </div>
    </div>
</div>

<script>
let allDemandes = [];
let currentDemandeId = null;

function renderStatusBadge(statut) {
    let statusClass = 'bg-slate-100 text-slate-700';
    let statusIcon = 'fa-circle';
    
    if (statut === 'nouveau') {
        statusClass = 'bg-blue-100 text-blue-700 border-blue-200';
        statusIcon = 'fa-star';
    }
    if (statut === 'en_cours') {
        statusClass = 'bg-yellow-100 text-yellow-700 border-yellow-200';
        statusIcon = 'fa-spinner fa-spin';
    }
    if (statut === 'traite') {
        statusClass = 'bg-green-100 text-green-700 border-green-200';
        statusIcon = 'fa-check';
    }
    if (statut === 'rejete') {
        statusClass = 'bg-red-100 text-red-700 border-red-200';
        statusIcon = 'fa-times';
    }
    
    return `<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${statusClass}">
        <i class="fas ${statusIcon} mr-1.5 opacity-70 text-[10px]"></i>
        ${statut.toUpperCase().replace('_', ' ')}
    </span>`;
}

async function loadDemandes() {
    try {
        const response = await AdminApp.apiCall('/demandes');
        if (response && response.data) {
            allDemandes = response.data;
            renderDemandes(allDemandes);
            
            // Remplir le filtre de filiales
            const filiales = [...new Set(allDemandes.map(d => d.filiale))].filter(Boolean);
            const select = document.getElementById('filter-filiale');
            const currentVal = select.value;
            select.innerHTML = '<option value="">Toutes les filiales</option>';
            filiales.forEach(f => {
                select.innerHTML += `<option value="${f}">${f}</option>`;
            });
            select.value = currentVal;
        }
    } catch (e) {
        console.error("Erreur", e);
        AdminApp.showNotification("Erreur de chargement", "error");
    }
}

function renderDemandes(demandes) {
    const tbody = document.getElementById('demandes-list');
    tbody.innerHTML = '';
    document.getElementById('demandes-count').textContent = demandes.length;
    
    if (demandes.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center py-12 text-slate-500 italic">Aucune demande trouvée.</td></tr>';
        return;
    }
    
    demandes.forEach(d => {
        const date = new Date(d.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute:'2-digit' });
        const typeDemande = d.type_demande ? d.type_demande.toUpperCase() : '-';
        
        // Truncate message
        const shortMessage = d.message && d.message.length > 50 ? d.message.substring(0, 50) + '...' : (d.message || '-');
        
        tbody.innerHTML += `
            <tr class="transition-colors hover:bg-slate-50">
                <td>
                    <div class="font-mono text-xs font-bold text-macof-gold mb-1">${d.reference}</div>
                    <div class="text-xs text-slate-500"><i class="far fa-clock mr-1 opacity-50"></i>${date}</div>
                </td>
                <td>
                    <div class="font-bold text-macof-dark">${d.nom_complet}</div>
                    <div class="text-xs text-slate-500 mt-1"><a href="mailto:${d.email}" class="hover:text-blue-600">${d.email}</a></div>
                </td>
                <td>
                    <div class="mb-1">
                        <span class="bg-slate-100 border border-slate-200 text-slate-600 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">${typeDemande}</span>
                        <span class="text-xs font-medium text-slate-600 ml-1">${d.filiale}</span>
                    </div>
                    <div class="text-sm text-slate-600 truncate max-w-[250px]" title="${d.objet}">
                        <strong>${d.objet}</strong>: <span class="italic text-slate-500">${shortMessage}</span>
                    </div>
                </td>
                <td>
                    ${renderStatusBadge(d.statut)}
                </td>
                <td class="text-right">
                    <button onclick="viewDemande(${d.id})" class="macof-btn-primary py-1.5 px-3 text-xs shadow-none inline-flex items-center">
                        <i class="fas fa-eye mr-1.5"></i> Détails
                    </button>
                </td>
            </tr>
        `;
    });
}

function filterDemandes() {
    const search = document.getElementById('search-demandes').value.toLowerCase();
    const statut = document.getElementById('filter-statut').value;
    const filiale = document.getElementById('filter-filiale').value;
    
    const filtered = allDemandes.filter(d => {
        const matchSearch = (d.nom_complet && d.nom_complet.toLowerCase().includes(search)) || 
                            (d.email && d.email.toLowerCase().includes(search)) ||
                            (d.reference && d.reference.toLowerCase().includes(search));
        const matchStatut = statut === '' || d.statut === statut;
        const matchFiliale = filiale === '' || d.filiale === filiale;
        return matchSearch && matchStatut && matchFiliale;
    });
    
    renderDemandes(filtered);
}

function viewDemande(id) {
    const d = allDemandes.find(x => x.id === id);
    if (!d) return;
    
    currentDemandeId = id;
    
    document.getElementById('modal-ref').textContent = d.reference;
    document.getElementById('modal-nom').textContent = (d.civilite ? d.civilite + ' ' : '') + d.nom_complet;
    
    document.getElementById('modal-email').textContent = d.email;
    document.getElementById('modal-email-link').href = 'mailto:' + d.email;
    
    document.getElementById('modal-tel').textContent = d.telephone;
    document.getElementById('modal-tel-link').href = 'tel:' + d.telephone;
    
    if (d.societe) {
        document.getElementById('modal-societe-container').style.display = 'block';
        document.getElementById('modal-societe').textContent = d.societe + (d.fonction ? ' (' + d.fonction + ')' : '');
    } else {
        document.getElementById('modal-societe-container').style.display = 'none';
    }
    
    document.getElementById('modal-date').textContent = new Date(d.created_at).toLocaleString('fr-FR');
    document.getElementById('modal-filiale').textContent = d.filiale;
    document.getElementById('modal-type').textContent = d.type_demande;
    document.getElementById('modal-objet').textContent = d.objet;
    document.getElementById('modal-message').textContent = d.message;
    
    document.getElementById('update-statut-select').value = d.statut;
    
    // Preparation bouton reponse
    const bodyText = `Bonjour ${d.nom_complet},\n\nSuite à votre demande concernant "${d.objet}", ...`;
    document.getElementById('btn-reply-email').href = `mailto:${d.email}?subject=RE: ${encodeURIComponent(d.objet)}&body=${encodeURIComponent(bodyText)}`;
    
    openModal('demande-modal');
}

async function updateStatutDemande() {
    if (!currentDemandeId) return;
    
    const statut = document.getElementById('update-statut-select').value;
    try {
        const response = await AdminApp.apiCall(`/demandes/${currentDemandeId}/status`, 'PATCH', { statut });
        if (response && response.success) {
            AdminApp.showNotification("Statut mis à jour avec succès", "success");
            closeModal('demande-modal');
            loadDemandes(); // Recharger la liste
        }
    } catch (e) {
        AdminApp.showNotification("Erreur lors de la mise à jour", "error");
    }
}

function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('hidden');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    loadDemandes();
    
    document.getElementById('search-demandes').addEventListener('input', filterDemandes);
    document.getElementById('filter-statut').addEventListener('change', filterDemandes);
    document.getElementById('filter-filiale').addEventListener('change', filterDemandes);
    
    // Fermer modal si on clique en dehors
    document.getElementById('demande-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal('demande-modal');
        }
    });
});
</script>

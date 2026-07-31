<div class="mb-8 flex justify-between items-center animate-slide-up" style="animation-delay: 0.1s;">
    <div>
        <h2 class="text-3xl font-serif font-bold text-slate-800">Gestion des Filiales</h2>
        <p class="text-slate-500 mt-1">Administrez les entreprises du groupe MACOF Holding.</p>
    </div>
    <button onclick="openModal('filiale-modal'); resetFilialeForm();" class="macof-btn-primary">
        <i class="fas fa-plus mr-2"></i>Ajouter une filiale
    </button>
</div>

<div class="glass-card rounded-xl overflow-hidden animate-slide-up" style="animation-delay: 0.2s;">
    <div class="px-6 py-4 border-b border-slate-100 bg-white/50">
        <div class="flex items-center">
            <i class="fas fa-search text-slate-400 mr-3"></i>
            <input type="text" id="search-filiales" placeholder="Rechercher une filiale..." class="bg-transparent border-none focus:outline-none text-sm w-full font-medium text-slate-700">
        </div>
    </div>
    
    <div class="overflow-x-auto min-h-[300px]">
        <table class="min-w-full text-left macof-table">
            <thead>
                <tr>
                    <th>Nom de la filiale</th>
                    <th>Secteur d'activité</th>
                    <th>Description</th>
                    <th class="text-right">Actions</th>
                </tr>
            </thead>
            <tbody id="filiales-list">
                <tr>
                    <td colspan="4" class="text-center py-12 text-slate-400">
                        <i class="fas fa-spinner fa-spin text-3xl mb-4 text-macof-gold"></i>
                        <p class="font-medium">Chargement des filiales...</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!-- Modal Filiale (Ajout / Modif) -->
<div id="filiale-modal" class="fixed inset-0 z-50 hidden modal-overlay flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg modal-content overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <h3 class="text-lg font-serif font-bold text-macof-dark" id="modal-filiale-title">Ajouter une filiale</h3>
            <button onclick="closeModal('filiale-modal')" class="text-slate-400 hover:text-red-500 transition-colors">
                <i class="fas fa-times text-lg"></i>
            </button>
        </div>
        
        <form id="form-filiale" class="p-6">
            <input type="hidden" id="filiale-id" value="">
            
            <div class="space-y-4">
                <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nom de la filiale <span class="text-red-500">*</span></label>
                    <input type="text" id="filiale-nom" required class="macof-input" placeholder="Ex: MACOF Immobilier">
                </div>
                
                <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Secteur d'activité</label>
                    <input type="text" id="filiale-secteur" class="macof-input" placeholder="Ex: Promotion immobilière, IT, Conseil...">
                </div>
                
                <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Image de couverture</label>
                    <input type="file" id="filiale-image" class="macof-input" accept="image/*">
                    <p class="text-xs text-slate-400 mt-1">Image utilisée sur la page "Domaines" (laissée vide = image par défaut).</p>
                </div>
                
                <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Description <span class="text-red-500">*</span></label>
                    <textarea id="filiale-description" required class="macof-input h-24" placeholder="Description détaillée visible sur le site..."></textarea>
                </div>

                <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Détails (Services / Points forts)</label>
                    <textarea id="filiale-details" class="macof-input h-24" placeholder="Listez les points forts (1 par ligne)"></textarea>
                    <p class="text-xs text-slate-400 mt-1">Séparez chaque point par un saut de ligne. Ils s'afficheront sous forme de liste sur le site.</p>
                </div>
            </div>
            
            <div class="mt-8 flex justify-end space-x-3">
                <button type="button" onclick="closeModal('filiale-modal')" class="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Annuler</button>
                <button type="submit" class="macof-btn-gold" id="btn-submit-filiale">
                    <i class="fas fa-check mr-2"></i>Enregistrer
                </button>
            </div>
        </form>
    </div>
</div>

<script>
let allFiliales = [];

async function loadFiliales() {
    try {
        const response = await AdminApp.apiCall('/admin/filiales');
        if (response && response.data) {
            allFiliales = response.data;
            renderFiliales(allFiliales);
        }
    } catch (e) {
        console.error("Erreur", e);
        AdminApp.showNotification("Erreur de chargement des filiales", "error");
    }
}

function renderFiliales(filiales) {
    const tbody = document.getElementById('filiales-list');
    tbody.innerHTML = '';
    
    if (filiales.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center py-12 text-slate-500 italic">Aucune filiale enregistrée.</td></tr>';
        return;
    }
    
    filiales.forEach(f => {
        tbody.innerHTML += `
            <tr class="transition-colors hover:bg-slate-50">
                <td>
                    <div class="flex items-center">
                        <div class="w-10 h-10 rounded bg-macof-dark text-macof-gold flex items-center justify-center font-bold text-lg mr-4 shadow-sm">
                            ${f.nom.charAt(0)}
                        </div>
                        <span class="font-bold text-macof-dark">${f.nom}</span>
                    </div>
                </td>
                <td>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded border border-slate-200 bg-white text-xs font-medium text-slate-600">
                        ${f.secteur || '-'}
                    </span>
                </td>
                <td><p class="text-sm text-slate-500 max-w-xs truncate" title="${f.description || ''}">${f.description || '-'}</p></td>
                <td class="text-right">
                    <div class="flex justify-end space-x-2">
                        <button onclick="editFiliale(${f.id})" class="w-8 h-8 rounded bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors" title="Modifier">
                            <i class="fas fa-pen text-xs"></i>
                        </button>
                        <button onclick="deleteFiliale(${f.id})" class="w-8 h-8 rounded bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors" title="Supprimer">
                            <i class="fas fa-trash-alt text-xs"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
}

function filterFiliales() {
    const search = document.getElementById('search-filiales').value.toLowerCase();
    const filtered = allFiliales.filter(f => 
        (f.nom && f.nom.toLowerCase().includes(search)) || 
        (f.secteur && f.secteur.toLowerCase().includes(search))
    );
    renderFiliales(filtered);
}

function resetFilialeForm() {
    document.getElementById('filiale-id').value = '';
    document.getElementById('filiale-nom').value = '';
    document.getElementById('filiale-secteur').value = '';
    document.getElementById('filiale-description').value = '';
    document.getElementById('filiale-details').value = '';
    document.getElementById('filiale-image').value = '';
    document.getElementById('modal-filiale-title').textContent = 'Ajouter une filiale';
}

function editFiliale(id) {
    const f = allFiliales.find(x => x.id === id);
    if (!f) return;
    
    document.getElementById('filiale-id').value = f.id;
    document.getElementById('filiale-nom').value = f.nom;
    document.getElementById('filiale-secteur').value = f.secteur || '';
    document.getElementById('filiale-description').value = f.description || '';
    
    let detailsStr = '';
    try {
        if (f.details_json) {
            const arr = typeof f.details_json === 'string' ? JSON.parse(f.details_json) : f.details_json;
            if (Array.isArray(arr)) detailsStr = arr.join('\n');
        }
    } catch(e) {}
    document.getElementById('filiale-details').value = detailsStr;
    document.getElementById('filiale-image').value = '';
    
    document.getElementById('modal-filiale-title').textContent = 'Modifier la filiale';
    openModal('filiale-modal');
}

document.getElementById('form-filiale').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const id = document.getElementById('filiale-id').value;
    const formData = new FormData();
    formData.append('nom', document.getElementById('filiale-nom').value);
    formData.append('secteur', document.getElementById('filiale-secteur').value);
    formData.append('description', document.getElementById('filiale-description').value);
    formData.append('details', document.getElementById('filiale-details').value);
    
    const fileInput = document.getElementById('filiale-image');
    if (fileInput.files[0]) {
        formData.append('image', fileInput.files[0]);
    }
    
    const btn = document.getElementById('btn-submit-filiale');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Enregistrement...';
    btn.disabled = true;
    
    try {
        let response;
        if (id) {
            response = await fetch(`http://localhost:8000/api/v1/admin/filiales/${id}`, {
                method: 'POST', // POST parce qu'on utilise FormData et multipart/form-data
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('macof_admin_token') },
                body: formData
            }).then(r => r.json());
        } else {
            response = await fetch('http://localhost:8000/api/v1/admin/filiales', {
                method: 'POST',
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('macof_admin_token') },
                body: formData
            }).then(r => r.json());
        }
        
        if (response && response.success) {
            AdminApp.showNotification(`Filiale ${id ? 'modifiée' : 'ajoutée'} avec succès`, "success");
            closeModal('filiale-modal');
            loadFiliales();
        } else {
            AdminApp.showNotification(response?.message || "Erreur lors de l'enregistrement", "error");
        }
    } catch (err) {
        AdminApp.showNotification("Erreur réseau", "error");
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
});

async function deleteFiliale(id) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette filiale ?')) return;
    
    try {
        const response = await AdminApp.apiCall(`/admin/filiales/${id}`, 'DELETE');
        if (response && response.success) {
            AdminApp.showNotification("Filiale supprimée", "success");
            loadFiliales();
        }
    } catch (e) {
        AdminApp.showNotification("Erreur lors de la suppression", "error");
    }
}

function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    loadFiliales();
    document.getElementById('search-filiales').addEventListener('input', filterFiliales);
    
    document.getElementById('filiale-modal').addEventListener('click', function(e) {
        if (e.target === this) closeModal('filiale-modal');
    });
});
</script>

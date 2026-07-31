<div class="mb-8 flex justify-between items-center animate-slide-up" style="animation-delay: 0.1s;">
    <div>
        <h2 class="text-3xl font-serif font-bold text-slate-800">Gestion des Catalogues</h2>
        <p class="text-slate-500 mt-1">Gérez les plaquettes commerciales et catalogues téléchargeables par vos clients.</p>
    </div>
    <button onclick="openModal('add-catalogue-modal')" class="macof-btn-primary">
        <i class="fas fa-plus mr-2"></i>Nouveau Document
    </button>
</div>

<div class="glass-card rounded-xl overflow-hidden animate-slide-up" style="animation-delay: 0.2s;">
    <div class="px-6 py-4 border-b border-slate-100 bg-white/50">
        <div class="flex items-center">
            <i class="fas fa-search text-slate-400 mr-3"></i>
            <input type="text" id="search-catalogues" placeholder="Rechercher un catalogue..." class="bg-transparent border-none focus:outline-none text-sm w-full font-medium text-slate-700">
        </div>
    </div>
    
    <div class="overflow-x-auto min-h-[300px]">
        <table class="min-w-full text-left macof-table">
            <thead>
                <tr>
                    <th>Titre du document</th>
                    <th>Type</th>
                    <th>Filiale</th>
                    <th>Informations</th>
                    <th class="text-right">Actions</th>
                </tr>
            </thead>
            <tbody id="catalogues-list">
                <tr>
                    <td colspan="5" class="text-center py-12 text-slate-400">
                        <i class="fas fa-spinner fa-spin text-3xl mb-4 text-macof-gold"></i>
                        <p class="font-medium">Chargement des catalogues...</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<!-- Modal Ajouter Catalogue -->
<div id="add-catalogue-modal" class="fixed inset-0 z-50 hidden modal-overlay flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg modal-content overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <h3 class="text-lg font-serif font-bold text-macof-dark">Ajouter un nouveau document</h3>
            <button onclick="closeModal('add-catalogue-modal')" class="text-slate-400 hover:text-red-500 transition-colors">
                <i class="fas fa-times text-lg"></i>
            </button>
        </div>
        
        <form id="form-catalogue" class="p-6">
            <div class="space-y-4">
                <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Titre du document <span class="text-red-500">*</span></label>
                    <input type="text" id="cat-titre" required class="macof-input" placeholder="Ex: Plaquette Commerciale 2026">
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Filiale <span class="text-red-500">*</span></label>
                        <select id="cat-filiale" required class="macof-input">
                            <option value="MACOF Holding">MACOF Holding</option>
                            <option value="MACOF Immobilier">MACOF Immobilier</option>
                            <option value="MACOF Consulting">MACOF Consulting</option>
                            <option value="MACOF IT">MACOF IT</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Type <span class="text-red-500">*</span></label>
                        <select id="cat-type" required class="macof-input">
                            <option value="Plaquette">Plaquette</option>
                            <option value="Catalogue">Catalogue</option>
                            <option value="Fiche Technique">Fiche Technique</option>
                            <option value="Contrat">Contrat Type</option>
                        </select>
                    </div>
                </div>
                
                <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Fichier (PDF, DOCX) <span class="text-red-500">*</span></label>
                    <div class="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer relative" id="file-drop-area">
                        <input type="file" id="cat-file" required class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.doc,.docx">
                        <div id="file-preview">
                            <i class="fas fa-cloud-upload-alt text-3xl text-slate-400 mb-2"></i>
                            <p class="text-sm text-slate-600 font-medium">Cliquez ou glissez un fichier ici</p>
                            <p class="text-xs text-slate-400 mt-1">Taille max: 10 Mo</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-8 flex justify-end space-x-3">
                <button type="button" onclick="closeModal('add-catalogue-modal')" class="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Annuler</button>
                <button type="submit" class="macof-btn-gold" id="btn-submit-cat">
                    <i class="fas fa-check mr-2"></i>Enregistrer
                </button>
            </div>
        </form>
    </div>
</div>

<script>
let allCatalogues = [];

async function loadCatalogues() {
    try {
        const response = await AdminApp.apiCall('/admin/catalogues'); // L'API renvoie les catalogues
        if (response && response.data) {
            allCatalogues = response.data;
            renderCatalogues(allCatalogues);
        }
    } catch (e) {
        console.error("Erreur", e);
        AdminApp.showNotification("Erreur de chargement des catalogues", "error");
    }
}

function renderCatalogues(catalogues) {
    const tbody = document.getElementById('catalogues-list');
    tbody.innerHTML = '';
    
    if (catalogues.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center py-12 text-slate-500 italic">Aucun document dans la base.</td></tr>';
        return;
    }
    
    catalogues.forEach(c => {
        const date = new Date(c.created_at).toLocaleDateString('fr-FR');
        let icon = 'fa-file-alt text-slate-400';
        if (c.format && c.format.toLowerCase() === 'pdf') icon = 'fa-file-pdf text-red-500';
        if (c.format && (c.format.toLowerCase() === 'doc' || c.format.toLowerCase() === 'docx')) icon = 'fa-file-word text-blue-500';

        tbody.innerHTML += `
            <tr class="transition-colors hover:bg-slate-50">
                <td>
                    <div class="flex items-center">
                        <i class="fas ${icon} text-2xl mr-4"></i>
                        <div>
                            <p class="font-bold text-macof-dark">${c.titre}</p>
                            <p class="text-xs text-slate-500 mt-0.5">Ajouté le ${date}</p>
                        </div>
                    </div>
                </td>
                <td><span class="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded font-medium border border-slate-200">${c.type_document}</span></td>
                <td><span class="font-medium text-slate-700">${c.filiale}</span></td>
                <td>
                    <p class="text-xs text-slate-600"><span class="font-bold">${c.taille_ko}</span> Ko</p>
                    <p class="text-xs text-slate-500 mt-0.5"><i class="fas fa-download mr-1"></i> ${c.telechargements || 0} fois</p>
                </td>
                <td class="text-right">
                    <div class="flex justify-end space-x-2">
                        <a href="${c.file_path}" target="_blank" class="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors" title="Télécharger">
                            <i class="fas fa-download"></i>
                        </a>
                        <button onclick="deleteCatalogue(${c.id})" class="w-8 h-8 rounded bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors" title="Supprimer">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
}

function filterCatalogues() {
    const search = document.getElementById('search-catalogues').value.toLowerCase();
    const filtered = allCatalogues.filter(c => 
        (c.titre && c.titre.toLowerCase().includes(search)) || 
        (c.filiale && c.filiale.toLowerCase().includes(search))
    );
    renderCatalogues(filtered);
}

document.getElementById('cat-file').addEventListener('change', function(e) {
    const preview = document.getElementById('file-preview');
    if (this.files && this.files[0]) {
        const file = this.files[0];
        preview.innerHTML = `
            <i class="fas fa-check-circle text-3xl text-green-500 mb-2"></i>
            <p class="text-sm font-bold text-macof-dark truncate px-4">${file.name}</p>
            <p class="text-xs text-slate-500 mt-1">${Math.round(file.size / 1024)} Ko</p>
        `;
    } else {
        preview.innerHTML = `
            <i class="fas fa-cloud-upload-alt text-3xl text-slate-400 mb-2"></i>
            <p class="text-sm text-slate-600 font-medium">Cliquez ou glissez un fichier ici</p>
            <p class="text-xs text-slate-400 mt-1">Taille max: 10 Mo</p>
        `;
    }
});

document.getElementById('form-catalogue').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const fileInput = document.getElementById('cat-file');
    if (!fileInput.files[0]) {
        AdminApp.showNotification("Veuillez sélectionner un fichier", "error");
        return;
    }
    
    const formData = new FormData();
    formData.append('titre', document.getElementById('cat-titre').value);
    formData.append('filiale', document.getElementById('cat-filiale').value);
    formData.append('type_document', document.getElementById('cat-type').value);
    formData.append('document', fileInput.files[0]);
    
    const btn = document.getElementById('btn-submit-cat');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Envoi...';
    btn.disabled = true;
    
    try {
        const token = localStorage.getItem('macof_admin_token');
        const response = await fetch('/api/v1/admin/catalogues', {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + token },
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            AdminApp.showNotification("Catalogue ajouté avec succès", "success");
            closeModal('add-catalogue-modal');
            document.getElementById('form-catalogue').reset();
            document.getElementById('file-preview').innerHTML = `
                <i class="fas fa-cloud-upload-alt text-3xl text-slate-400 mb-2"></i>
                <p class="text-sm text-slate-600 font-medium">Cliquez ou glissez un fichier ici</p>
                <p class="text-xs text-slate-400 mt-1">Taille max: 10 Mo</p>
            `;
            loadCatalogues();
        } else {
            AdminApp.showNotification(result.message || "Erreur lors de l'ajout", "error");
        }
    } catch (err) {
        AdminApp.showNotification("Erreur réseau", "error");
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
});

async function deleteCatalogue(id) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce catalogue ?')) return;
    
    try {
        const response = await AdminApp.apiCall(`/admin/catalogues/${id}`, 'DELETE');
        if (response && response.success) {
            AdminApp.showNotification("Catalogue supprimé", "success");
            loadCatalogues();
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
    loadCatalogues();
    document.getElementById('search-catalogues').addEventListener('input', filterCatalogues);
    
    // Fermer modal au clic extérieur
    document.getElementById('add-catalogue-modal').addEventListener('click', function(e) {
        if (e.target === this) closeModal('add-catalogue-modal');
    });
});
</script>

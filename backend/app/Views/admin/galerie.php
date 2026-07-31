<div class="mb-8 flex justify-between items-center animate-slide-up" style="animation-delay: 0.1s;">
    <div>
        <h2 class="text-3xl font-serif font-bold text-slate-800">Galerie Photos</h2>
        <p class="text-slate-500 mt-1">Gérez les images de vos réalisations et projets pour chaque filiale.</p>
    </div>
    <button onclick="openModal('add-photo-modal')" class="macof-btn-primary">
        <i class="fas fa-plus mr-2"></i>Ajouter une photo
    </button>
</div>

<div class="glass-card rounded-xl p-6 animate-slide-up" style="animation-delay: 0.2s;">
    
    <!-- Filtres -->
    <div class="flex flex-wrap gap-4 mb-8">
        <select id="filter-filiale-galerie" class="macof-input w-auto bg-white cursor-pointer min-w-[200px]">
            <option value="">Toutes les catégories</option>
            <option value="MACOF Immobilier">MACOF Immobilier</option>
            <option value="MACOF Consulting">MACOF Consulting</option>
            <option value="MACOF IT">MACOF IT</option>
            <option value="MACOF Restauration">MACOF Restauration</option>
            <option value="MACOF Transit">MACOF Transit</option>
            <option value="MACOF Mining">MACOF Mining</option>
        </select>
        <div class="flex-1 min-w-[200px] relative">
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
            <input type="text" id="search-galerie" placeholder="Rechercher une image..." class="macof-input pl-10 bg-white">
        </div>
    </div>

    <!-- Grille -->
    <div id="galerie-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div class="col-span-full text-center py-12 text-slate-400">
            <i class="fas fa-spinner fa-spin text-3xl mb-4 text-macof-gold"></i>
            <p class="font-medium">Chargement de la galerie...</p>
        </div>
    </div>
</div>

<!-- Modal Ajouter Photo -->
<div id="add-photo-modal" class="fixed inset-0 z-50 hidden modal-overlay flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg modal-content overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <h3 class="text-lg font-serif font-bold text-macof-dark">Ajouter une nouvelle photo</h3>
            <button onclick="closeModal('add-photo-modal')" class="text-slate-400 hover:text-red-500 transition-colors">
                <i class="fas fa-times text-lg"></i>
            </button>
        </div>
        
        <form id="form-galerie" class="p-6">
            <div class="space-y-4">
                <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Titre de l'image <span class="text-red-500">*</span></label>
                    <input type="text" id="gal-titre" required class="macof-input" placeholder="Ex: Résidence Les Palmiers - Façade">
                </div>
                
                <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Catégorie <span class="text-red-500">*</span></label>
                    <select id="gal-filiale" required class="macof-input">
                        <option value="MACOF Immobilier">MACOF Immobilier</option>
                        <option value="MACOF Consulting">MACOF Consulting</option>
                        <option value="MACOF IT">MACOF IT</option>
                        <option value="MACOF Restauration">MACOF Restauration</option>
                        <option value="MACOF Transit">MACOF Transit</option>
                        <option value="MACOF Mining">MACOF Mining</option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Image (JPG, PNG, WEBP) <span class="text-red-500">*</span></label>
                    <div class="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer relative" id="img-drop-area">
                        <input type="file" id="gal-image" required class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*">
                        <div id="img-preview" class="flex flex-col items-center">
                            <i class="fas fa-image text-3xl text-slate-400 mb-2"></i>
                            <p class="text-sm text-slate-600 font-medium">Cliquez ou glissez une image ici</p>
                            <p class="text-xs text-slate-400 mt-1">Format recommandé: 1920x1080px (Max 5 Mo)</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-8 flex justify-end space-x-3">
                <button type="button" onclick="closeModal('add-photo-modal')" class="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">Annuler</button>
                <button type="submit" class="macof-btn-gold" id="btn-submit-gal">
                    <i class="fas fa-check mr-2"></i>Enregistrer
                </button>
            </div>
        </form>
    </div>
</div>

<script>
let allPhotos = [];

async function loadGalerie() {
    try {
        const response = await AdminApp.apiCall('/admin/galerie');
        if (response && response.data) {
            allPhotos = response.data;
            renderGalerie(allPhotos);
        }
    } catch (e) {
        console.error("Erreur galerie", e);
        AdminApp.showNotification("Erreur de chargement", "error");
    }
}

function renderGalerie(photos) {
    const grid = document.getElementById('galerie-grid');
    grid.innerHTML = '';
    
    if (photos.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center py-12 text-slate-500 italic">Aucune image dans la galerie.</div>';
        return;
    }
    
    photos.forEach(p => {
        grid.innerHTML += `
            <div class="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-slate-100">
                <div class="aspect-w-16 aspect-h-12 bg-slate-100 overflow-hidden">
                    <img src="${p.image_path}" alt="${p.titre}" class="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-4">
                    <h4 class="font-bold text-macof-dark text-sm truncate" title="${p.titre}">${p.titre}</h4>
                    <p class="text-xs text-macof-gold font-medium mt-1">${p.filiale}</p>
                </div>
                <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onclick="deletePhoto(${p.id})" class="w-8 h-8 rounded-full bg-white text-red-500 shadow-lg flex items-center justify-center hover:bg-red-50 transition-colors">
                        <i class="fas fa-trash-alt text-xs"></i>
                    </button>
                </div>
            </div>
        `;
    });
}

function filterGalerie() {
    const search = document.getElementById('search-galerie').value.toLowerCase();
    const filiale = document.getElementById('filter-filiale-galerie').value;
    
    const filtered = allPhotos.filter(p => {
        const matchSearch = p.titre && p.titre.toLowerCase().includes(search);
        const matchFiliale = filiale === '' || p.filiale === filiale;
        return matchSearch && matchFiliale;
    });
    
    renderGalerie(filtered);
}

document.getElementById('gal-image').addEventListener('change', function(e) {
    const preview = document.getElementById('img-preview');
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.innerHTML = `<img src="${e.target.result}" class="max-h-32 rounded-lg object-contain">`;
        }
        reader.readAsDataURL(this.files[0]);
    } else {
        preview.innerHTML = `
            <i class="fas fa-image text-3xl text-slate-400 mb-2"></i>
            <p class="text-sm text-slate-600 font-medium">Cliquez ou glissez une image ici</p>
            <p class="text-xs text-slate-400 mt-1">Format recommandé: 1920x1080px (Max 5 Mo)</p>
        `;
    }
});

document.getElementById('form-galerie').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const fileInput = document.getElementById('gal-image');
    if (!fileInput.files[0]) {
        AdminApp.showNotification("Veuillez sélectionner une image", "error");
        return;
    }
    
    const formData = new FormData();
    formData.append('titre', document.getElementById('gal-titre').value);
    formData.append('filiale', document.getElementById('gal-filiale').value);
    formData.append('image', fileInput.files[0]);
    
    const btn = document.getElementById('btn-submit-gal');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Envoi...';
    btn.disabled = true;
    
    try {
        const token = localStorage.getItem('macof_admin_token');
        const response = await fetch('/api/v1/admin/galerie', {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + token },
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            AdminApp.showNotification("Image ajoutée avec succès", "success");
            closeModal('add-photo-modal');
            document.getElementById('form-galerie').reset();
            document.getElementById('img-preview').innerHTML = `
                <i class="fas fa-image text-3xl text-slate-400 mb-2"></i>
                <p class="text-sm text-slate-600 font-medium">Cliquez ou glissez une image ici</p>
                <p class="text-xs text-slate-400 mt-1">Format recommandé: 1920x1080px (Max 5 Mo)</p>
            `;
            loadGalerie();
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

async function deletePhoto(id) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette photo ?')) return;
    
    try {
        const response = await AdminApp.apiCall(`/admin/galerie/${id}`, 'DELETE');
        if (response && response.success) {
            AdminApp.showNotification("Photo supprimée", "success");
            loadGalerie();
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
    loadGalerie();
    document.getElementById('search-galerie').addEventListener('input', filterGalerie);
    document.getElementById('filter-filiale-galerie').addEventListener('change', filterGalerie);
    
    document.getElementById('add-photo-modal').addEventListener('click', function(e) {
        if (e.target === this) closeModal('add-photo-modal');
    });
});
</script>

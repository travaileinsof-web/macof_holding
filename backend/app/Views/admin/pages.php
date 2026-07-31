<div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
    <div class="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
        <div>
            <h3 class="text-lg font-semibold text-slate-800">
                Éditeur de Page : <span class="text-macof-gold uppercase"><?= htmlspecialchars($title) ?></span>
            </h3>
            <p class="text-sm text-slate-500 mt-1">Chaque modification est appliquée et visible en temps réel sur le site public.</p>
        </div>
    </div>

    <div class="p-6 bg-[#f8fafc]">
        <div id="loader" class="flex justify-center items-center py-12">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-macof-gold"></div>
        </div>
        
        <div id="content-form-container" class="hidden space-y-8">
            <!-- Les sections seront générées ici -->
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const slug = '<?= $slug ?>';
    const container = document.getElementById('content-form-container');
    const loader = document.getElementById('loader');

    // Configuration des blocs visuels selon la page
    const pageStructure = {
        'home': [
            { 
                title: 'Bannière Principale (Héro)', 
                icon: 'fa-image',
                keys: ['hero_title_small', 'hero_title_main', 'hero_desc', 'hero_bg'],
                desc: 'Modifiez l\'image d\'arrière-plan et le gros titre d\'accroche visible en haut de la page d\'accueil.'
            },
            { 
                title: 'Section "Vision Ambitieuse"', 
                icon: 'fa-eye',
                keys: ['vision_title_small', 'vision_desc_1', 'vision_desc_2'],
                desc: 'Textes de présentation globale du groupe juste en dessous de la bannière.'
            }
        ],
        'about': [
            {
                title: 'Bannière Principale',
                icon: 'fa-image',
                keys: ['hero_title', 'hero_desc', 'hero_img'],
                desc: 'L\'en-tête de la page À Propos avec sa photo de couverture.'
            },
            {
                title: 'Vision, Mission et Valeurs',
                icon: 'fa-bullseye',
                keys: ['vision_text', 'mission_text', 'valeurs_text'],
                desc: 'Les fondements idéologiques du groupe. (Pour les valeurs, passez à la ligne entre chaque point).'
            },
            {
                title: 'Historique et Parcours',
                icon: 'fa-history',
                keys: ['historique_2018', 'historique_2023', 'historique_2026'],
                desc: 'Les textes correspondants aux dates clés de la timeline.'
            },
            {
                title: 'Organisation et Gouvernance',
                icon: 'fa-sitemap',
                keys: ['org_text_1', 'org_text_2'],
                desc: 'Textes décrivant la structure de gestion de MACOF Holding.'
            }
        ]
    };

    let apiData = [];

    const fetchPageContent = async () => {
        try {
            const res = await AdminApp.apiCall(`/admin/pages/${slug}`);
            if (res.success) {
                apiData = res.data;
                renderPageBuilder(res.data);
            }
        } catch (error) {
            console.error('Erreur:', error);
            AdminApp.showNotification('Erreur lors du chargement', 'error');
        } finally {
            loader.classList.add('hidden');
            container.classList.remove('hidden');
        }
    };

    const findItemData = (key) => apiData.find(item => item.section_key === key);

    const getHumanLabel = (key) => {
        const labels = {
            'hero_title_small': 'Petit Titre',
            'hero_title_main': 'Grand Titre Principal',
            'hero_desc': 'Texte de Description',
            'hero_bg': 'Image d\'arrière-plan',
            'vision_title_small': 'Petit Titre de Section',
            'vision_desc_1': 'Paragraphe 1',
            'vision_desc_2': 'Paragraphe 2',
            'hero_title': 'Grand Titre',
            'hero_img': 'Image de couverture',
            'vision_text': 'Texte de la Vision',
            'mission_text': 'Texte de la Mission',
            'valeurs_text': 'Liste des Valeurs',
            'historique_2018': 'Texte 2018',
            'historique_2023': 'Texte 2023',
            'historique_2026': 'Texte 2026',
            'org_text_1': 'Paragraphe 1 (Gouvernance)',
            'org_text_2': 'Paragraphe 2 (Gouvernance)'
        };
        return labels[key] || key.replace(/_/g, ' ').toUpperCase();
    };

    const buildInputHtml = (item, label) => {
        if (!item) return '<p class="text-red-500 text-sm">Clé non trouvée dans la BDD.</p>';
        
        let inputHtml = '';
        if (item.content_type === 'image') {
            inputHtml = `
                <div class="flex items-center space-x-6">
                    <div class="w-1/4">
                        <img src="${item.content_value}" alt="${label}" class="w-full h-24 rounded-lg shadow-sm border border-slate-300 object-cover">
                    </div>
                    <div class="w-3/4">
                        <input type="file" name="image" accept="image/*" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-macof-gold/10 file:text-macof-gold hover:file:bg-macof-gold/20 transition-all cursor-pointer">
                        <p class="mt-1 text-xs text-slate-400">Formats: JPG, PNG, WEBP. L'upload remplacera l'image actuelle.</p>
                    </div>
                </div>
            `;
        } else if (item.content_type === 'html' || item.content_value.length > 80) {
            inputHtml = `
                <textarea name="content_value" rows="4" class="w-full rounded-md border-slate-300 shadow-sm focus:border-macof-gold focus:ring focus:ring-macof-gold/50 p-3 bg-white text-slate-700 border text-sm">${item.content_value}</textarea>
                ${item.content_type === 'html' ? '<p class="text-xs text-slate-400 mt-1"><i class="fas fa-code mr-1"></i> Balises HTML autorisées (ex: &lt;br/&gt;, &lt;span class="text-red-500"&gt;).</p>' : ''}
            `;
        } else {
            inputHtml = `
                <input type="text" name="content_value" value="${item.content_value.replace(/"/g, '&quot;')}" class="w-full rounded-md border-slate-300 shadow-sm focus:border-macof-gold focus:ring focus:ring-macof-gold/50 p-3 bg-white text-slate-700 border text-sm">
            `;
        }

        return `
            <form class="content-update-form bg-white border border-slate-200 rounded-lg p-4 transition-all hover:border-macof-gold/30 hover:shadow-sm" enctype="multipart/form-data">
                <input type="hidden" name="page_slug" value="${slug}">
                <input type="hidden" name="section_key" value="${item.section_key}">
                
                <div class="flex justify-between items-start mb-3">
                    <label class="block text-sm font-semibold text-slate-700">${label}</label>
                    <button type="submit" class="text-xs bg-slate-800 hover:bg-macof-gold hover:text-white text-slate-200 px-3 py-1.5 rounded transition-colors flex items-center">
                        <i class="fas fa-save mr-1.5"></i> Sauvegarder
                    </button>
                </div>
                ${inputHtml}
            </form>
        `;
    };

    const renderPageBuilder = (data) => {
        container.innerHTML = '';
        const structure = pageStructure[slug];

        if (!structure) {
            container.innerHTML = '<div class="p-4 bg-red-50 text-red-600 rounded-lg">Structure non définie pour cette page.</div>';
            return;
        }

        structure.forEach(section => {
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden';
            
            let fieldsHtml = '';
            section.keys.forEach(key => {
                const item = findItemData(key);
                fieldsHtml += buildInputHtml(item, getHumanLabel(key));
            });

            sectionDiv.innerHTML = `
                <div class="px-6 py-4 border-b border-slate-100 bg-slate-50 flex items-center">
                    <div class="w-10 h-10 rounded-full bg-macof-gold/10 text-macof-gold flex items-center justify-center mr-4">
                        <i class="fas ${section.icon} text-lg"></i>
                    </div>
                    <div>
                        <h4 class="text-lg font-bold text-slate-800">${section.title}</h4>
                        <p class="text-xs text-slate-500 mt-0.5">${section.desc}</p>
                    </div>
                </div>
                <div class="p-6 space-y-4 bg-slate-50/50">
                    ${fieldsHtml}
                </div>
            `;
            
            container.appendChild(sectionDiv);
        });

        // Attacher events submits
        document.querySelectorAll('.content-update-form').forEach(form => {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = form.querySelector('button[type="submit"]');
                const originalHtml = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
                btn.disabled = true;

                try {
                    const formData = new FormData(form);
                    
                    const res = await fetch('http://localhost:8000/api/v1/admin/pages', {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('macof_admin_token')
                        },
                        body: formData
                    });

                    const data = await res.json();
                    
                    if (data.success) {
                        AdminApp.showNotification('Mise à jour réussie', 'success');
                        if (formData.has('image') && formData.get('image').size > 0) {
                            fetchPageContent(); // Recharger pour voir la nouvelle image
                        }
                    } else {
                        AdminApp.showNotification(data.message || 'Erreur', 'error');
                    }
                } catch (error) {
                    console.error(error);
                    AdminApp.showNotification('Erreur serveur', 'error');
                } finally {
                    btn.innerHTML = originalHtml;
                    btn.disabled = false;
                }
            });
        });
    };

    fetchPageContent();
});
</script>

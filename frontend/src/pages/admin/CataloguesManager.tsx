import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Search,
  Plus,
  Trash2,
  X,
  Upload,
  RefreshCw,
  Download,
  FileText,
} from 'lucide-react';
import axios from 'axios';

interface Catalogue {
  id: number;
  titre: string;
  filiale: string;
  type_document: string;
  format: string;
  taille: string;
  file_url: string;
  created_at: string;
}

interface FilialeOption {
  id: number;
  nom: string;
}

const api = axios.create();
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const documentTypes = ['Brochure', 'Devis', 'Catalogue', 'Autre'];

export default function CataloguesManager() {
  const [catalogues, setCatalogues] = useState<Catalogue[]>([]);
  const [filiales, setFiliales] = useState<FilialeOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [formTitre, setFormTitre] = useState('');
  const [formFiliale, setFormFiliale] = useState('');
  const [formType, setFormType] = useState('Catalogue');
  const [formFile, setFormFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchData = useCallback(async () => {
    try {
      const [catRes, filialesRes] = await Promise.all([
        api.get('/api/v1/admin/catalogues'),
        api.get('/api/v1/admin/filiales'),
      ]);
      if (catRes.data.success) setCatalogues(catRes.data.data || []);
      if (filialesRes.data.success) setFiliales(filialesRes.data.data || []);
    } catch (err) {
      console.error('Erreur fetch catalogues:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredCatalogues = catalogues.filter((cat) => {
    return (
      !search ||
      cat.titre.toLowerCase().includes(search.toLowerCase()) ||
      cat.filiale.toLowerCase().includes(search.toLowerCase()) ||
      cat.type_document.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormFile(file);
    }
  };

  const openModal = () => {
    setFormTitre('');
    setFormFiliale(filiales[0]?.nom || '');
    setFormType('Catalogue');
    setFormFile(null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleUpload = async () => {
    if (!formTitre || !formFile) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('titre', formTitre);
      formData.append('filiale', formFiliale);
      formData.append('type_document', formType);
      formData.append('file', formFile);

      await api.post('/api/v1/admin/catalogues', formData);
      closeModal();
      fetchData();
    } catch (err) {
      console.error('Erreur upload catalogue:', err);
      alert("Erreur lors de l'upload du document.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Supprimer ce catalogue ?')) return;
    try {
      await api.delete(`/api/v1/admin/catalogues/${id}`);
      fetchData();
    } catch (err) {
      console.error('Erreur suppression:', err);
    }
  };

  const formatFileSize = (size: string) => {
    if (!size) return '-';
    const num = parseInt(size, 10);
    if (isNaN(num)) return size;
    if (num < 1024) return `${num} o`;
    if (num < 1024 * 1024) return `${(num / 1024).toFixed(1)} Ko`;
    return `${(num / (1024 * 1024)).toFixed(1)} Mo`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="h-8 w-8 text-[#cda434] animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-200">Catalogues</h2>
          <p className="text-slate-400 text-sm mt-1">Gerez les documents et catalogues.</p>
        </div>
        <button
          onClick={openModal}
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <Plus className="h-4 w-4" />
          Ajouter un catalogue
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-slate-800 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
        />
      </div>

      {/* Table */}
      <div className="bg-[#1e293b] border border-slate-700 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase text-slate-400 bg-slate-800/50">
              <tr>
                <th className="px-6 py-3">Titre</th>
                <th className="px-6 py-3">Filiale</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Format</th>
                <th className="px-6 py-3">Taille</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {filteredCatalogues.map((cat) => (
                <tr key={cat.id} className="hover:bg-slate-700/30 transition-colors">
                  <td className="px-6 py-4 text-slate-200 font-medium">{cat.titre}</td>
                  <td className="px-6 py-4 text-slate-400">{cat.filiale}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block bg-[#cda434]/10 text-[#cda434] rounded-full px-2.5 py-0.5 text-xs font-medium">
                      {cat.type_document}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400 uppercase text-xs">{cat.format || '-'}</td>
                  <td className="px-6 py-4 text-slate-400">{formatFileSize(cat.taille)}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {cat.file_url && (
                        <a
                          href={cat.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-amber-500 hover:text-amber-400 text-xs font-medium transition-colors"
                        >
                          <Download className="h-3.5 w-3.5" />
                          Telecharger
                        </a>
                      )}
                      <button
                        onClick={() => handleDelete(cat.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredCatalogues.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Aucun catalogue trouve.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Catalogue Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-[#1e293b] border border-slate-700 rounded-lg w-full max-w-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700">
              <h3 className="text-lg font-semibold text-slate-200">Ajouter un catalogue</h3>
              <button onClick={closeModal} className="text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-6 py-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Titre *</label>
                <input
                  type="text"
                  value={formTitre}
                  onChange={(e) => setFormTitre(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Filiale</label>
                <select
                  value={formFiliale}
                  onChange={(e) => setFormFiliale(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  {filiales.map((f) => (
                    <option key={f.id} value={f.nom}>
                      {f.nom}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Type de document</label>
                <select
                  value={formType}
                  onChange={(e) => setFormType(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  {documentTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Fichier (PDF, DOC, DOCX) *</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-400 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-amber-600 file:text-white hover:file:bg-amber-500"
                />
                {formFile && (
                  <p className="mt-2 text-xs text-slate-400">Fichier selectionne: {formFile.name}</p>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-700">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleUpload}
                disabled={!formTitre || !formFile || uploading}
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                {uploading ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="h-4 w-4" />
                )}
                {uploading ? 'Envoi...' : 'Enregistrer'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

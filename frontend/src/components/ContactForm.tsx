import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import axios from 'axios';
import { MessageCircle } from 'lucide-react';

interface ContactFormProps {
  filiale?: string;
  typeDemande?: string;
  titre?: string;
}

export function ContactForm({ filiale = 'MACOF Holding', typeDemande = 'information', titre = "Nous Contacter" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nom_complet: '',
    email: '',
    telephone: '',
    objet: '',
    message: '',
    type_demande: typeDemande,
    filiale: filiale
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [reference, setReference] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const response = await axios.post('/api/v1/demandes', {
        ...formData,
        type_demande: typeDemande,
        filiale: filiale
      });
      if (response.data.success) {
        setReference(response.data.data?.reference || '');
        setWhatsappUrl(response.data.data?.whatsapp_url || '');
        setFormStatus('success');
        setFormData({
          nom_complet: '',
          email: '',
          telephone: '',
          objet: '',
          message: '',
          type_demande: typeDemande,
          filiale: filiale
        });
      } else {
        setFormStatus('error');
      }
    } catch (err: any) {
      console.error('Erreur formulaire:', err);
      const backendMsg = err?.response?.data?.message;
      setErrorMsg(backendMsg || '');
      setFormStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (formStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <p className="text-green-800 font-medium">Votre demande a été envoyée !</p>
        <p className="text-green-600 text-sm">Référence: {reference}</p>
        <p className="text-green-700 font-light text-sm mt-1">Notre équipe {filiale} vous contactera dans les plus brefs délais.</p>
        {whatsappUrl && (
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            <MessageCircle size={18} />
            Envoyer via WhatsApp
          </a>
        )}
        <div className="mt-4">
          <Button variant="outline" className="text-green-700 border-green-300 hover:bg-green-100" onClick={() => { setFormStatus('idle'); setReference(''); setWhatsappUrl(''); }}>Nouveau message</Button>
        </div>
      </div>
    );
  }

  if (formStatus === 'error') {
    return (
      <div className="bg-red-900/10 p-8 border border-red-500/30 rounded-sm text-center">
        <h3 className="text-2xl font-serif text-red-400 mb-4">Erreur lors de l'envoi</h3>
        <p className="text-white/70 font-light mb-4">
          {errorMsg || 'Une erreur est survenue. Veuillez réessayer.'}
        </p>
        <Button variant="outline" className="text-white border-red-400 hover:bg-red-900 hover:text-white" onClick={() => { setFormStatus('idle'); setErrorMsg(''); }}>Réessayer</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-transparent">
      {titre && <h3 className="text-3xl font-serif text-black mb-8">{titre}</h3>}

      {filiale === "Holding" && (
        <div className="space-y-2 mb-6">
          <label className="text-xs font-sans uppercase tracking-widest text-gray-500">Département Destinataire</label>
          <select
            name="departement"
            value={formData.filiale}
            onChange={(e) => setFormData({ ...formData, filiale: e.target.value })}
            className="flex h-10 w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:border-primary"
          >
            <option value="MACOF Holding">Direction Générale</option>
            <option value="MACOF Immobilier">MACOF Immobilier</option>
            <option value="MACOF Restauration">MACOF Restauration</option>
            <option value="MACOF Transit">MACOF Transit & Logistique</option>
            <option value="MACOF Mining">MACOF Mining</option>
            <option value="MACOF Print & Com">MACOF Print & Com</option>
            <option value="MACOF Fishing">MACOF Fishing</option>
          </select>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label className="text-xs font-sans uppercase tracking-widest text-gray-500">Nom Complet</label>
          <Input required name="nom_complet" value={formData.nom_complet} onChange={handleChange} placeholder="Jean Dupont" className="border-gray-200 text-black placeholder:text-gray-400" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-sans uppercase tracking-widest text-gray-500">Téléphone</label>
          <Input required name="telephone" value={formData.telephone} onChange={handleChange} placeholder="+224 00 00 00 00" className="border-gray-200 text-black placeholder:text-gray-400" />
        </div>
      </div>
      <div className="space-y-2 mb-6">
        <label className="text-xs font-sans uppercase tracking-widest text-gray-500">Adresse Email</label>
        <Input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="jean@exemple.com" className="border-gray-200 text-black placeholder:text-gray-400" />
      </div>
      <div className="space-y-2 mb-6">
        <label className="text-xs font-sans uppercase tracking-widest text-gray-500">Objet de la demande</label>
        <Input required name="objet" value={formData.objet} onChange={handleChange} placeholder="Demande de devis..." className="border-gray-200 text-black placeholder:text-gray-400" />
      </div>
      <div className="space-y-2 mb-8">
        <label className="text-xs font-sans uppercase tracking-widest text-gray-500">Votre Message</label>
        <textarea
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="flex w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:border-primary transition-all placeholder:text-gray-400"
          placeholder="Décrivez votre projet..."
        />
      </div>
      <Button variant="luxury" size="lg" className="w-full bg-primary text-white hover:bg-primary/90" disabled={formStatus === 'loading'}>
        {formStatus === 'loading' ? 'Envoi en cours...' : 'Envoyer la demande'}
      </Button>
    </form>
  );
}

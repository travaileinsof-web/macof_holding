import React, { useState, useEffect, useRef } from 'react';
import {
  Save,
  RefreshCw,
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Eye,
  EyeOff,
} from 'lucide-react';
import axios from 'axios';

interface SettingsData {
  smtp_host: string;
  smtp_port: number;
  smtp_email: string;
  smtp_password: string;
  whatsapp_number: string;
}

const api = axios.create();
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const maskedPassword = '\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022';

export default function Settings() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [sendingTest, setSendingTest] = useState<'email' | 'whatsapp' | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const [form, setForm] = useState<SettingsData>({
    smtp_host: '',
    smtp_port: 587,
    smtp_email: '',
    smtp_password: '',
    whatsapp_number: '',
  });

  const originalPasswordRef = useRef('');

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const res = await api.get('/api/v1/admin/settings');
      if (res.data.success && res.data.data) {
        const data = res.data.data;
        originalPasswordRef.current = data.smtp_password || '';
        setForm({
          smtp_host: data.smtp_host || '',
          smtp_port: data.smtp_port || 587,
          smtp_email: data.smtp_email || '',
          smtp_password: data.smtp_password ? maskedPassword : '',
          whatsapp_number: data.whatsapp_number || '',
        });
        setPasswordChanged(false);
      }
    } catch (err) {
      console.error('Erreur fetch settings:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const updateForm = (key: keyof SettingsData, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (key === 'smtp_password') {
      setPasswordChanged(true);
    }
  };

  const getPasswordValue = (): string => {
    if (!passwordChanged) return '';
    if (form.smtp_password === maskedPassword) return '';
    return form.smtp_password;
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const payload: Record<string, string | number> = {
        smtp_host: form.smtp_host,
        smtp_port: form.smtp_port,
        smtp_email: form.smtp_email,
        whatsapp_number: form.whatsapp_number,
      };
      // Only send password if it was changed and is not the masked value
      const pwd = getPasswordValue();
      if (pwd) {
        payload.smtp_password = pwd;
      }

      await api.put('/api/v1/admin/settings', payload);
      setNotification({ type: 'success', message: 'Parametres sauvegardes avec succes.' });
      fetchSettings(); // Refresh to get masked password
    } catch (err) {
      console.error('Erreur sauvegarde:', err);
      setNotification({ type: 'error', message: 'Erreur lors de la sauvegarde.' });
    } finally {
      setSaving(false);
    }
  };

  const handleTestEmail = async () => {
    setSendingTest('email');
    try {
      await api.post('/api/v1/admin/settings/test-email');
      setNotification({ type: 'success', message: 'Email de test envoye avec succes.' });
    } catch (err: any) {
      const msg = err.response?.data?.message || 'Erreur lors de l\'envoi de l\'email de test.';
      setNotification({ type: 'error', message: msg });
    } finally {
      setSendingTest(null);
    }
  };

  const handleTestWhatsApp = () => {
    setSendingTest('whatsapp');
    const number = form.whatsapp_number.replace(/\s/g, '');
    const message = encodeURIComponent('Test depuis le panel d\'administration MACOF.');
    const url = `https://wa.me/${number}?text=${message}`;
    window.open(url, '_blank');
    setSendingTest(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="h-8 w-8 text-[#cda434] animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-6">
      {/* Notification */}
      {notification && (
        <div
          className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm ${
            notification.type === 'success'
              ? 'bg-green-500/10 border-green-500/30 text-green-400'
              : 'bg-red-500/10 border-red-500/30 text-red-400'
          }`}
        >
          {notification.type === 'success' ? (
            <CheckCircle className="h-4 w-4 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
          )}
          {notification.message}
        </div>
      )}

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-200">Parametres</h2>
        <p className="text-slate-400 text-sm mt-1">Configuration SMTP, WhatsApp et systeme.</p>
      </div>

      {/* SMTP Configuration */}
      <div className="bg-[#1e293b] border border-slate-700 rounded-lg overflow-hidden">
        <div className="px-5 py-3 bg-slate-800/50 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-slate-400" />
            <h3 className="text-sm font-semibold text-slate-200">Configuration SMTP</h3>
          </div>
        </div>
        <div className="px-5 py-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Hote SMTP</label>
            <input
              type="text"
              value={form.smtp_host}
              onChange={(e) => updateForm('smtp_host', e.target.value)}
              placeholder="smtp.example.com"
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Port SMTP</label>
            <input
              type="number"
              value={form.smtp_port}
              onChange={(e) => updateForm('smtp_port', parseInt(e.target.value, 10) || 587)}
              min={1}
              max={65535}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email expediteur</label>
            <input
              type="email"
              value={form.smtp_email}
              onChange={(e) => updateForm('smtp_email', e.target.value)}
              placeholder="contact@macof-holding.com"
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Mot de passe SMTP</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={form.smtp_password}
                onChange={(e) => updateForm('smtp_password', e.target.value)}
                placeholder="Laisser vide pour ne pas modifier"
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 pr-10 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {!passwordChanged && form.smtp_password && (
              <p className="text-xs text-slate-500 mt-1">
                Mot de passe masque. Modifiez le champ pour le mettre a jour.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* WhatsApp Configuration */}
      <div className="bg-[#1e293b] border border-slate-700 rounded-lg overflow-hidden">
        <div className="px-5 py-3 bg-slate-800/50 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-slate-400" />
            <h3 className="text-sm font-semibold text-slate-200">Configuration WhatsApp</h3>
          </div>
        </div>
        <div className="px-5 py-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Numero WhatsApp</label>
            <input
              type="text"
              value={form.whatsapp_number}
              onChange={(e) => updateForm('whatsapp_number', e.target.value)}
              placeholder="+224XXXXXXXX"
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Test Section */}
      <div className="bg-[#1e293b] border border-slate-700 rounded-lg overflow-hidden">
        <div className="px-5 py-3 bg-slate-800/50 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <Send className="h-4 w-4 text-slate-400" />
            <h3 className="text-sm font-semibold text-slate-200">Tests</h3>
          </div>
        </div>
        <div className="px-5 py-5 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleTestEmail}
              disabled={sendingTest === 'email'}
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {sendingTest === 'email' ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <Mail className="h-4 w-4" />
              )}
              {sendingTest === 'email' ? 'Envoi...' : 'Envoyer email test'}
            </button>
            <button
              onClick={handleTestWhatsApp}
              disabled={sendingTest === 'whatsapp' || !form.whatsapp_number}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <Phone className="h-4 w-4" />
              Tester WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          {saving ? (
            <RefreshCw className="h-4 w-4 animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          {saving ? 'Sauvegarde...' : 'Sauvegarder les parametres'}
        </button>
      </div>
    </div>
  );
}

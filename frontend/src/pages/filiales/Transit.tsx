import { useEffect, useRef, useState } from 'react';
import { AnimatedPage } from '../../components/layout/AnimatedPage';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';
import { MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SLUG = 'transit';

const fallbackContent: Record<string, string> = {
  hero_title: 'MACOF Transit & Logistique',
  hero_subtitle: "Domaine d'Excellence 05",
  hero_desc: "La maîtrise globale de votre Supply Chain. Fluidité, sécurité et conformité douanière absolue.",
  hero_bg: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
  vision_title: 'Notre Vocation',
  vision_text_1: "MACOF Transit garantit le franchissement transparent et rapide des frontières pour vos marchandises à travers le monde.",
  vision_text_2: "De l'organisation du fret à la livraison sur site, nous maîtrisons chaque maillon de la chaîne logistique avec une expertise reconnue par les douanes guinéennes.",
  contact_email: 'cotation.transit@macofholding.com',
  contact_phone: '+224 624 00 00 00',
};

const fallbackServices = [
  { title: "Dédouanement", desc: "Commissionnaire en douane agréé. Gestion de vos déclarations Import/Export et régimes économiques spéciaux avec zéro friction.", icon: "" },
  { title: "Fret Maritime & Aérien", desc: "Réseau mondial de partenaires pour assurer le transport multimodal de vos conteneurs et cargaisons urgentes.", icon: "" },
  { title: "Logistique Terrestre", desc: "Flotte de camions sécurisés pour l'acheminement post-acheminement et gestion d'entrepôts sous douane.", icon: "" },
  { title: "MACOF Travel", desc: "Service billetterie et réservation de vols pour les professionnels. Organisation complète de vos voyages d'affaires.", icon: "" },
];

export default function Transit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(true);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ nom_complet: '', email: '', telephone: '', objet: '', message: '' });
  const [reference, setReference] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Fetch page content
  useEffect(() => {
    axios.get(`/api/v1/pages/${SLUG}`)
      .then(res => { if (res.data.success) setContent(res.data.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Polling every 30s
  useEffect(() => {
    const poll = setInterval(() => {
      axios.get(`/api/v1/pages/${SLUG}`)
        .then(res => { if (res.data.success) setContent(res.data.data); })
        .catch(() => {});
    }, 30000);
    return () => clearInterval(poll);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    try {
      const response = await axios.post('/api/v1/demandes', { ...formData, filiale: 'MACOF Transit', type_demande: 'devis' });
      if (response.data.success) {
        setReference(response.data.data?.reference || '');
        setWhatsappUrl(response.data.data?.whatsapp_url || '');
      }
      setFormStatus('success');
      setFormData({ nom_complet: '', email: '', telephone: '', objet: '', message: '' });
    } catch (err) {
      console.error('Erreur formulaire:', err);
      setFormStatus('error');
    }
  };

  const services: any[] = content?.services ? JSON.parse(content.services) : fallbackServices;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".header-img", { yPercent: 20, ease: "none", scrollTrigger: { trigger: ".header-section", start: "top top", end: "bottom top", scrub: true } });
      gsap.utils.toArray(".reveal-up").forEach((el: any) => {
        gsap.from(el, { y: 60, opacity: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <AnimatedPage className="bg-background">
      <div ref={containerRef}>
        
        {/* Header Filiale */}
        <section className="header-section relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-900/40 to-background z-10" />
            <img src={content?.hero_bg || fallbackContent.hero_bg} alt="Port maritime et conteneurs" className="header-img w-full h-[120%] object-cover -top-[10%] absolute opacity-80" />
          </div>
          <div className="relative z-20 text-center px-4 max-w-5xl mt-20">
            <p className="text-white text-xs uppercase tracking-[0.4em] font-sans mb-6 reveal-up">{content?.hero_subtitle || fallbackContent.hero_subtitle}</p>
            <h1 className="text-7xl md:text-9xl font-serif text-white mb-8 font-light leading-none reveal-up">{content?.hero_title || fallbackContent.hero_title}</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light font-sans max-w-3xl mx-auto leading-relaxed reveal-up">
              {content?.hero_desc || fallbackContent.hero_desc}
            </p>
            <div className="mt-12 reveal-up">
              <Button variant="luxury" size="lg" className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white hover:text-black transition-all duration-500 text-sm tracking-widest uppercase">
                Suivre une expédition
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
             <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
        </section>

        {/* Présentation */}
        <section className="content-section py-32 bg-secondary relative z-20">
          <div className="max-w-4xl mx-auto px-6 text-center reveal-up">
            <h2 className="text-sm font-sans tracking-[0.3em] text-red-200 uppercase mb-6">{content?.vision_title || fallbackContent.vision_title}</h2>
            <p className="text-2xl font-serif text-white leading-relaxed font-light mb-8">
              {content?.vision_text_1 || fallbackContent.vision_text_1}
            </p>
            <p className="text-red-100 font-light text-lg">
              {content?.vision_text_2 || fallbackContent.vision_text_2}
            </p>
          </div>
        </section>

        {/* L'Excellence Opérationnelle (Nouveau contenu) */}
        <section className="py-32 bg-background border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20 reveal-up">
              <h2 className="text-sm font-sans tracking-[0.3em] text-red-200 uppercase mb-4">Notre Ingénierie Logistique</h2>
              <h3 className="text-4xl font-serif text-white">L'Excellence Opérationnelle</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { n: "01", t: "Anticipation Douanière", d: "Pré-dédouanement électronique et classification tarifaire anticipée pour réduire drastiquement les délais de passage en douane." },
                { n: "02", t: "Optimisation des Flux", d: "Consolidation de groupages et routing intelligent pour minimiser vos coûts de transport maritimes et terrestres." },
                { n: "03", t: "Sécurité & Traçabilité", d: "Tracking satellitaire de nos convois terrestres et suivi documentaire rigoureux de bout en bout." }
              ].map((step, i) => (
                <div key={i} className="relative p-10 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-primary/50 transition-all duration-500 reveal-up group text-center md:text-left">
                  <span className="absolute -top-6 right-6 md:-left-6 text-7xl font-serif text-white/5 group-hover:text-primary/20 transition-colors duration-500">{step.n}</span>
                  <h4 className="text-2xl font-serif text-white mb-4 relative z-10">{step.t}</h4>
                  <p className="text-white/60 font-light leading-relaxed relative z-10">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-32 bg-background border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-serif text-white mb-16 text-center reveal-up">Nos Piliers Opérationnels</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((serv, i) => (
                <div key={i} className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors reveal-up">
                  <h3 className="text-2xl font-serif text-white mb-4">{serv.title}</h3>
                  <p className="text-blue-100 font-light leading-relaxed">{serv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suivi d'expéditions (Tracking) */}
        <section className="py-24 bg-primary text-white relative z-20">
          <div className="max-w-4xl mx-auto px-6 text-center reveal-up">
            <h2 className="text-3xl font-serif mb-6">Suivi d'Expéditions</h2>
            <p className="font-light mb-8 max-w-xl mx-auto">Entrez votre numéro de connaissement (Bill of Lading) ou votre numéro de suivi interne pour voir le statut de votre cargaison.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <Input placeholder="Ex: MAC-2026-987654" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-14 text-lg" />
              <Button variant="outline" className="h-14 px-8 border-white text-white hover:bg-white hover:text-primary transition-colors whitespace-nowrap">
                Suivre mon fret
              </Button>
            </div>
          </div>
        </section>

        {/* Réseau Global & Agréments */}
        <section className="py-32 bg-card relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up relative">
              <div className="aspect-[4/3] bg-black/50 border border-white/10 relative overflow-hidden flex items-center justify-center group">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" alt="Carte Réseau" className="absolute inset-0 w-full h-full object-cover filter grayscale-[40%] opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative z-10 text-center">
                  <span className="text-5xl font-serif text-white mb-2 block">120+</span>
                  <span className="text-xs uppercase tracking-widest text-blue-200">Destinations Couvertes</span>
                </div>
              </div>
            </div>
            
            <div className="reveal-up">
              <h2 className="text-3xl font-serif text-white mb-6">Agréments Douaniers & Tracking</h2>
              <p className="text-white font-light leading-relaxed mb-8">
                En tant que commissionnaire agréé par les douanes, nous offrons une sécurisation juridique totale de vos opérations. Notre système d'information vous permet de suivre l'évolution de vos dossiers en temps réel.
              </p>
              <ul className="space-y-6 text-white font-light">
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1">✦</span>
                  <div><strong className="text-white font-serif">Agrément Commissionnaire en Douane</strong><br/><span className="text-sm text-blue-200">Liaison directe avec le système douanier SYDONIA World.</span></div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1">✦</span>
                  <div><strong className="text-white font-serif">Portail Tracking Client</strong><br/><span className="text-sm text-blue-200">Visibilité temps réel : statut du navire, BAD, liquidation et enlèvement.</span></div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary mt-1">✦</span>
                  <div><strong className="text-white font-serif">Assurance Fret Complète</strong><br/><span className="text-sm text-blue-200">Couverture "Tous Risques" de bout en bout.</span></div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-32 border-t border-white/10 pt-16 reveal-up text-center">
            <h3 className="text-sm font-sans tracking-[0.3em] text-red-200 uppercase mb-8">Partenaires Logistiques Mondiaux</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="text-2xl font-serif font-bold text-white">CMA CGM</div>
              <div className="text-2xl font-serif font-bold text-white">MAERSK</div>
              <div className="text-2xl font-serif font-bold text-white">MSC</div>
              <div className="text-2xl font-serif font-bold text-white">BOLLORÉ</div>
              <div className="text-2xl font-serif font-bold text-white">HAPAG-LLOYD</div>
            </div>
          </div>
        </section>

        {/* Formulaire */}
        <section className="py-32 bg-background relative overflow-hidden border-t border-white/5">
          <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-1/2 h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start reveal-up">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Cotation <br/>Logistique Express.</h2>
                <p className="text-white font-light max-w-md mb-12">
                  Décrivez les spécificités de votre expédition. Nos experts cotateurs vous fourniront une solution optimisée (délais/coûts) sous 24h ouvrées.
                </p>
                <div className="bg-white/5 p-8 border border-white/10">
                  <h4 className="text-xl font-serif text-white mb-4">Contact Cotation</h4>
                  <p className="text-blue-200 font-light text-sm mb-2">Email: {content?.contact_email || fallbackContent.contact_email}</p>
                  <p className="text-blue-200 font-light text-sm">Téléphone: {content?.contact_phone || fallbackContent.contact_phone}</p>
                </div>
              </div>
              
              <div>
                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <p className="text-green-800 font-medium">Votre demande a été envoyée !</p>
                    <p className="text-green-600 text-sm">Référence: {reference}</p>
                    <p className="text-green-700 text-sm mt-1">Un expert logistique MACOF est assigné à votre dossier et vous contactera sous peu.</p>
                    {whatsappUrl && (
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                        <MessageCircle size={18} />
                        Envoyer via WhatsApp
                      </a>
                    )}
                    <div className="mt-4">
                      <Button variant="outline" className="text-green-700 border-green-300 hover:bg-green-100" onClick={() => { setFormStatus('idle'); setReference(''); setWhatsappUrl(''); }}>Nouvelle demande</Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="bg-white p-8 border border-white/10 shadow-2xl">
                    <h3 className="text-2xl font-serif text-black mb-8">Détails de l'expédition</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Nom / Société</label>
                        <Input required placeholder="Votre structure" className="border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Email pro</label>
                        <Input required type="email" placeholder="contact@..." className="border-gray-200" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Port de Départ</label>
                        <Input required placeholder="Ex: Shanghai, Anvers..." className="border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Port d'Arrivée</label>
                        <Input required placeholder="Ex: Port Autonome de Conakry" className="border-gray-200" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Incoterm</label>
                        <select className="flex h-10 w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:border-primary">
                          <option>FOB</option>
                          <option>CIF</option>
                          <option>EXW</option>
                          <option>DAP</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Volume</label>
                        <Input placeholder="Ex: 2x 40' HC" className="border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Poids</label>
                        <Input placeholder="Ex: 24 Tonnes" className="border-gray-200" />
                      </div>
                    </div>

                    <div className="space-y-2 mb-8">
                      <label className="text-xs uppercase tracking-widest text-gray-500">Type de marchandise & spécificités</label>
                      <textarea
                        required
                        rows={3}
                        className="flex w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:border-primary"
                        placeholder="Marchandise générale, périssable, dangereuse (IMO)..."
                      />
                    </div>
                    <Button variant="luxury" size="lg" className="w-full bg-primary text-white hover:bg-primary/90" disabled={formStatus === 'loading'}>
                      {formStatus === 'loading' ? 'Calcul...' : 'Demander la cotation'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </div>
    </AnimatedPage>
  );
}

import { useEffect, useRef, useState } from 'react';
import { AnimatedPage } from '../../components/layout/AnimatedPage';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';
import { MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SLUG = 'mining';

const fallbackContent: Record<string, string> = {
  hero_title: 'MACOF Mining',
  hero_subtitle: "Domaine d'Excellence 04",
  hero_desc: "Extraction, logistique et exploitation minière responsable. Un acteur majeur en République de Guinée.",
  hero_bg: '/plaquette-mining.jpeg',
  vision_title: 'Notre Vision',
  vision_text_1: "MACOF Mining intervient dans l'exploration et l'exploitation des ressources minérales avec une rigueur opérationnelle absolue.",
  vision_text_2: "Nous opérons principalement sur des gisements de bauxite, d'or et de fer, en garantissant un équilibre parfait entre rentabilité économique, respect de l'environnement et développement des communautés locales.",
  contact_email: 'mining@macofholding.com',
  contact_phone: '+224 623 00 00 00',
};

const fallbackServices = [
  { title: "Forage & Dynamitage", desc: "Interventions de haute précision avec des équipements dernière génération pour optimiser le rendement.", icon: "" },
  { title: "Extraction & Terrassement", desc: "Capacité d'extraction massive grâce à une flotte d'engins lourds adaptés aux terrains difficiles.", icon: "" },
  { title: "Logistique & Transport", desc: "Acheminement sécurisé du minerai depuis les zones d'extraction jusqu'aux terminaux portuaires.", icon: "" },
];

export default function Mining() {
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
      const response = await axios.post('/api/v1/demandes', { ...formData, filiale: 'MACOF Mining', type_demande: 'devis' });
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
            <img src={content?.hero_bg || fallbackContent.hero_bg} alt="Mine de classe mondiale" className="header-img w-full h-[120%] object-cover -top-[10%] absolute opacity-80" />
          </div>
          <div className="relative z-20 text-center px-4 max-w-5xl mt-20">
            <p className="text-white text-xs uppercase tracking-[0.4em] font-sans mb-6 reveal-up">{content?.hero_subtitle || fallbackContent.hero_subtitle}</p>
            <h1 className="text-7xl md:text-9xl font-serif text-white mb-8 font-light leading-none reveal-up">{content?.hero_title || fallbackContent.hero_title}</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light font-sans max-w-3xl mx-auto leading-relaxed reveal-up">
              {content?.hero_desc || fallbackContent.hero_desc}
            </p>
            <div className="mt-12 reveal-up">
              <Button variant="luxury" size="lg" className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white hover:text-black transition-all duration-500 text-sm tracking-widest uppercase">
                Explorer nos Concessions
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

        {/* Engagement HSE (Nouveau contenu) */}
        <section className="py-32 bg-background border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20 reveal-up">
              <h2 className="text-sm font-sans tracking-[0.3em] text-red-200 uppercase mb-4">La Responsabilité avant tout</h2>
              <h3 className="text-4xl font-serif text-white">Engagement H.S.E & Communautaire</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { n: "01", t: "Santé & Sécurité", d: "Objectif zéro incident. Nos protocoles de sécurité sont stricts, avec des formations continues et des équipements de protection individuelle de pointe." },
                { n: "02", t: "Respect Environnemental", d: "Réhabilitation progressive des sites miniers, gestion de l'eau et réduction de l'empreinte carbone à travers des technologies d'extraction optimisées." },
                { n: "03", t: "Développement Local", d: "Création d'emplois directs, construction d'infrastructures scolaires et sanitaires pour les communautés riveraines de nos concessions." }
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

        {/* Expertise Minière */}
        <section className="py-32 bg-background border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-sm font-sans tracking-[0.3em] text-red-200 uppercase mb-4 text-center">Opérations</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-16 text-center">Expertise Minière</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((serv, i) => (
                <div key={i} className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors reveal-up text-center">
                  <h3 className="text-2xl font-serif text-white mb-4">{serv.title}</h3>
                  <p className="text-blue-100 font-light leading-relaxed">{serv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parc d'engins */}
        <section className="py-32 bg-card relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 reveal-up">
              <img src="https://images.unsplash.com/photo-1587393855524-087f83d95bc9?q=80&w=800&auto=format&fit=crop" alt="Engin 1" className="w-full h-64 object-cover filter grayscale-[30%]" />
              <img src="https://images.unsplash.com/photo-1621689973873-1004bb152843?q=80&w=800&auto=format&fit=crop" alt="Engin 2" className="w-full h-64 object-cover filter grayscale-[30%] mt-8" />
            </div>
            <div className="order-1 lg:order-2 reveal-up">
              <h2 className="text-3xl font-serif text-white mb-6">Parc d'Engins Lourdes</h2>
              <p className="text-white font-light leading-relaxed mb-8">
                Pour soutenir nos opérations à grande échelle, nous disposons d'une flotte exclusive et récente de pelles excavatrices, dumpers articulés, niveleuses et chargeuses de classe mondiale.
              </p>
              <div className="flex gap-12 border-t border-white/10 pt-8">
                <div>
                  <span className="text-4xl font-serif text-primary block mb-2">150+</span>
                  <span className="text-xs uppercase tracking-widest text-blue-200">Engins Actifs</span>
                </div>
                <div>
                  <span className="text-4xl font-serif text-primary block mb-2">24/7</span>
                  <span className="text-xs uppercase tracking-widest text-blue-200">Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RSE & HSE */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="bg-[#050B14] p-12 border border-white/5 reveal-up mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-serif text-white mb-6">Responsabilité Sociale (RSE)</h2>
                  <p className="text-white font-light leading-relaxed mb-4">
                    Notre croissance s'accompagne d'un engagement indéfectible envers les communautés locales : construction d'écoles, forages d'eau potable et soutien aux initiatives agricoles locales. Le Contenu Local est au cœur de notre stratégie RH.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-white mb-6">Certifications HSE & ISO</h2>
                  <ul className="space-y-4 text-white font-light">
                    <li className="flex gap-4 items-center"><span className="text-primary font-bold">ISO 14001</span> Management Environnemental</li>
                    <li className="flex gap-4 items-center"><span className="text-primary font-bold">ISO 45001</span> Santé & Sécurité au Travail</li>
                    <li className="flex gap-4 items-center"><span className="text-primary font-bold">0%</span> Objectif Zéro Accident</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="reveal-up text-center border-t border-white/5 pt-16">
               <h2 className="text-sm font-sans tracking-[0.3em] text-red-200 uppercase mb-6">Confiance</h2>
               <h3 className="text-3xl font-serif text-white mb-12">Nos Partenaires & Concessions</h3>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
                  {/* Logos placeholders */}
                  <div className="text-xl font-serif text-white">MINING CO.</div>
                  <div className="text-xl font-serif text-white">GUINEA ALUMINA</div>
                  <div className="text-xl font-serif text-white">BOKE MINERALS</div>
                  <div className="text-xl font-serif text-white">GLOBAL EXTRACT</div>
               </div>
            </div>
          </div>
        </section>

        {/* Formulaire */}
        <section className="py-32 bg-background relative overflow-hidden border-t border-white/5">
          <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-1/2 h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start reveal-up">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Collaborez avec <br/>nos équipes.</h2>
                <p className="text-white font-light max-w-md mb-12">
                  Que ce soit pour une demande de sous-traitance, de location d'engins ou un partenariat d'exploitation, contactez notre direction des opérations minières.
                </p>
                <div className="bg-white/5 p-8 border border-white/10">
                  <h4 className="text-xl font-serif text-white mb-4">Direction des Opérations</h4>
                  <p className="text-blue-200 font-light text-sm mb-2">Email: {content?.contact_email || fallbackContent.contact_email}</p>
                  <p className="text-blue-200 font-light text-sm">Téléphone: {content?.contact_phone || fallbackContent.contact_phone}</p>
                </div>
              </div>
              
              <div>
                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <p className="text-green-800 font-medium">Votre demande a été envoyée !</p>
                    <p className="text-green-600 text-sm">Référence: {reference}</p>
                    <p className="text-green-700 text-sm mt-1">Notre département minier analysera votre demande et vous contactera sous peu.</p>
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
                    <h3 className="text-2xl font-serif text-black mb-8">Demande de Partenariat Minier</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Société / Nom</label>
                        <Input required placeholder="Nom de l'entreprise" className="border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Email professionnel</label>
                        <Input required type="email" placeholder="contact@..." className="border-gray-200" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Type de minerai ciblé</label>
                        <select className="flex h-10 w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:border-primary">
                          <option>Bauxite</option>
                          <option>Or</option>
                          <option>Fer</option>
                          <option>Diamant</option>
                          <option>Autre / Non applicable</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Nature du besoin</label>
                        <select className="flex h-10 w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:border-primary">
                          <option>Sous-traitance d'exploitation</option>
                          <option>Location d'engins (Terrassement)</option>
                          <option>Transport & Logistique</option>
                          <option>Partenariat stratégique</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <label className="text-xs uppercase tracking-widest text-gray-500">Localisation du site minier</label>
                      <Input required placeholder="Ex: Région de Boké, Siguiri..." className="border-gray-200" />
                    </div>

                    <div className="space-y-2 mb-8">
                      <label className="text-xs uppercase tracking-widest text-gray-500">Précisions (volumes, délais)</label>
                      <textarea
                        required
                        rows={4}
                        className="flex w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:border-primary"
                        placeholder="Détaillez votre besoin opérationnel..."
                      />
                    </div>
                    <Button variant="luxury" size="lg" className="w-full bg-primary text-white hover:bg-primary/90" disabled={formStatus === 'loading'}>
                      {formStatus === 'loading' ? 'Transmission...' : 'Envoyer la requête'}
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

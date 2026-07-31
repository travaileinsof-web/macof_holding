import { useEffect, useRef, useState } from 'react';
import { AnimatedPage } from '../../components/layout/AnimatedPage';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SLUG = 'print';

const fallbackContent: Record<string, string> = {
  hero_title: 'MACOF Print & Com',
  hero_subtitle: "Domaine d'Excellence 03",
  hero_desc: "Communication visuelle & Impression. La valorisation absolue de votre image de marque.",
  hero_bg: '/plaquette-print.jpeg',
  vision_title: 'Notre Mission',
  vision_text_1: "MACOF Print & Com est la filiale experte en imprimerie de précision, communication visuelle grand format et création d'identités institutionnelles fortes.",
  vision_text_2: "Nous accompagnons les grandes entreprises et institutions gouvernementales dans le déploiement de leur stratégie d'image, en garantissant un rendu colorimétrique parfait et des finitions haut de gamme.",
  contact_email: 'print@macofholding.com',
  contact_phone: '+224 622 00 00 00',
};

const fallbackServices = [
  { title: "Création & Design", desc: "Logos, chartes graphiques, packaging et conception de rapports annuels institutionnels.", icon: "" },
  { title: "Impression Offset & Numérique", desc: "Tirages de haute qualité, brochures, magazines, papeterie d'entreprise.", icon: "" },
  { title: "Signalétique & Grand Format", desc: "Enseignes lumineuses, habillage de façades, PLV, banderoles et totems.", icon: "" },
  { title: "Événementiel Corporate", desc: "Montage technique de stands, scénographie, coordination et production visuelle pour salons et congrès.", icon: "" },
];

export default function Print() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Tous');
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ nom_complet: '', email: '', telephone: '', objet: '', message: '' });
  const [reference, setReference] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const portfolio = [
    { cat: 'Institutionnel', title: 'Rapport Annuel 2025', img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop' },
    { cat: 'Événementiel', title: 'Signalétique Sommet Éco', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop' },
    { cat: 'Identité', title: 'Charte Graphique B2B', img: 'https://images.unsplash.com/photo-1626785773579-c13f6cf557ad?q=80&w=800&auto=format&fit=crop' },
    { cat: 'Institutionnel', title: 'Brochure Corporate', img: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?q=80&w=800&auto=format&fit=crop' },
  ];

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
      const response = await axios.post('/api/v1/demandes', { ...formData, filiale: 'MACOF Print & Com', type_demande: 'devis' });
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
            <img src={content?.hero_bg || fallbackContent.hero_bg} alt="Imprimerie de pointe" className="header-img w-full h-[120%] object-cover -top-[10%] absolute opacity-80" />
          </div>
          <div className="relative z-20 text-center px-4 max-w-5xl mt-20">
            <p className="text-white text-xs uppercase tracking-[0.4em] font-sans mb-6 reveal-up">{content?.hero_subtitle || fallbackContent.hero_subtitle}</p>
            <h1 className="text-7xl md:text-9xl font-serif text-white mb-8 font-light leading-none reveal-up">{content?.hero_title || fallbackContent.hero_title}</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light font-sans max-w-3xl mx-auto leading-relaxed reveal-up">
              {content?.hero_desc || fallbackContent.hero_desc}
            </p>
            <div className="mt-12 reveal-up">
              <Button variant="luxury" size="lg" className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white hover:text-black transition-all duration-500 text-sm tracking-widest uppercase">
                Découvrir nos créations
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

        {/* L'Excellence Visuelle (Nouveau contenu) */}
        <section className="py-32 bg-background border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20 reveal-up">
              <h2 className="text-sm font-sans tracking-[0.3em] text-red-200 uppercase mb-4">Notre Processus Créatif</h2>
              <h3 className="text-4xl font-serif text-white">L'Excellence Visuelle</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { n: "01", t: "Direction Artistique", d: "Conception graphique et définition de charte visuelle par des designers experts pour sublimer l'identité de votre marque." },
                { n: "02", t: "Prépresse & Calibrage", d: "Vérification rigoureuse des fichiers et profilage colorimétrique pour assurer une restitution parfaite des couleurs lors de l'impression." },
                { n: "03", t: "Façonnage & Finition", d: "Dorure à chaud, pelliculage, vernis sélectif ou reliure premium : la touche finale qui confère un caractère luxueux à vos supports." }
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

        {/* Services & Équipements */}
        <section className="py-32 bg-background border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="reveal-up">
                <h2 className="text-3xl font-serif text-white mb-12">Nos Prestations B2B</h2>
                <div className="space-y-6">
                  {services.map((serv, i) => (
                    <div key={i} className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                      <h3 className="text-xl font-serif text-white mb-3">{serv.title}</h3>
                      <p className="text-blue-100 font-light text-sm">{serv.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="reveal-up">
                <h2 className="text-3xl font-serif text-white mb-8">Un parc machine à la pointe</h2>
                <p className="text-white font-light leading-relaxed mb-8">
                  La qualité de notre production repose sur des investissements continus dans les technologies d'impression les plus avancées du marché mondial.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 p-6 border border-white/10 text-center">
                    <h4 className="text-primary font-serif text-2xl mb-2">Offset HD</h4>
                    <p className="text-xs text-white uppercase tracking-widest">Tirages massifs</p>
                  </div>
                  <div className="bg-white/5 p-6 border border-white/10 text-center">
                    <h4 className="text-primary font-serif text-2xl mb-2">Tracé UV</h4>
                    <p className="text-xs text-white uppercase tracking-widest">Grand format 5m+</p>
                  </div>
                </div>
                
                <div className="bg-white/[0.03] p-8 border border-white/5">
                  <h3 className="text-sm font-sans tracking-widest text-red-200 uppercase mb-4">Témoignage Client</h3>
                  <p className="text-white font-light italic leading-relaxed mb-4">"Le rebranding complet de notre institution a été géré de main de maître par l'équipe Print & Com. Qualité des supports et respect strict des délais."</p>
                  <span className="text-xs font-sans tracking-widest uppercase text-blue-200">— DGA, Banque Panafricaine</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Filtrable */}
        <section className="py-32 bg-secondary border-t border-white/5">
          <div className="max-w-[100rem] mx-auto px-6 lg:px-12 reveal-up">
            <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8 mb-16">
              <div>
                <h2 className="text-sm font-sans tracking-[0.3em] text-red-200 uppercase mb-4">Nos Réalisations</h2>
                <h3 className="text-4xl font-serif text-white">Portfolio</h3>
              </div>
              <div className="flex gap-4 mt-8 md:mt-0">
                {['Tous', 'Institutionnel', 'Événementiel', 'Identité'].map((f) => (
                  <button 
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`text-xs uppercase tracking-widest px-4 py-2 border transition-colors ${filter === f ? 'border-primary text-primary bg-primary/10' : 'border-white/20 text-white hover:border-white'}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolio.filter(p => filter === 'Tous' || p.cat === filter).map((item, idx) => (
                <div key={idx} className="group relative overflow-hidden aspect-[3/4] border border-white/10">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 filter grayscale-[20%]" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary text-xs font-sans tracking-widest uppercase mb-2">{item.cat}</span>
                    <h4 className="text-white text-xl font-serif">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulaire & Simulateur de devis factice */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-1/2 h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start reveal-up">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Briefez votre <br/>projet d'impression.</h2>
                <p className="text-white font-light max-w-md mb-12">
                  Décrivez-nous les spécifications techniques de votre projet. Nos experts pré-presse vous répondront avec un devis détaillé.
                </p>
                <div className="bg-white/5 p-8 border border-white/10">
                  <h4 className="text-xl font-serif text-white mb-4">Contact Direct Print</h4>
                  <p className="text-blue-200 font-light text-sm mb-2">Email: {content?.contact_email || fallbackContent.contact_email}</p>
                  <p className="text-blue-200 font-light text-sm">Téléphone: {content?.contact_phone || fallbackContent.contact_phone}</p>
                </div>
              </div>
              
              <div>
                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <p className="text-green-800 font-medium">Votre demande a été envoyée !</p>
                    <p className="text-green-600 text-sm">Référence: {reference}</p>
                    <p className="text-green-700 text-sm mt-1">Notre équipe commerciale analysera votre besoin et vous contactera sous 24h.</p>
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
                    <h3 className="text-2xl font-serif text-black mb-8">Simulateur / Demande de Devis</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Nom / Société</label>
                        <Input required placeholder="Votre nom" className="border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                        <Input required type="email" placeholder="contact@..." className="border-gray-200" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Type de Support</label>
                        <select className="flex h-10 w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:border-primary">
                          <option>Papier (Brochure, Magazine...)</option>
                          <option>Grand Format (Bâche, Vinyle...)</option>
                          <option>Signalétique Rigide (Alucobond, PVC...)</option>
                          <option>Identité Visuelle / Design</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Finition souhaitée</label>
                        <select className="flex h-10 w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:border-primary">
                          <option>Standard</option>
                          <option>Vernis sélectif 3D</option>
                          <option>Dorure à chaud</option>
                          <option>Pelliculage Mat/Brillant</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Quantité / Format</label>
                        <Input placeholder="Ex: 5000 ex, format A4" className="border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Date limite souhaitée</label>
                        <Input type="date" required className="border-gray-200" />
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <label className="text-xs uppercase tracking-widest text-gray-500">Détails spécifiques</label>
                      <textarea
                        required
                        rows={3}
                        className="flex w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:border-primary"
                        placeholder="Précisez le grammage, l'utilisation finale..."
                      />
                    </div>
                    
                    <div className="space-y-2 mb-8">
                      <label className="text-xs uppercase tracking-widest text-gray-500">Upload de fichier (Maquette / Brief)</label>
                      <Input type="file" className="border-gray-200 pt-1.5" accept=".pdf,.ai,.psd,.zip" />
                    </div>
                    <Button variant="luxury" size="lg" className="w-full bg-primary text-white hover:bg-primary/90" disabled={formStatus === 'loading'}>
                      {formStatus === 'loading' ? 'Calcul en cours...' : 'Solliciter un devis précis'}
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

import { useEffect, useRef, useState } from 'react';
import { AnimatedPage } from '../../components/layout/AnimatedPage';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';
import { MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SLUG = 'immobilier';

const fallbackContent: Record<string, string> = {
  hero_title: 'MACOF Immobilier',
  hero_subtitle: 'Domaine d\'Excellence 01',
  hero_desc: 'Bâtir l\'avenir avec élégance. Promotion immobilière de prestige, ingénierie de pointe et gestion de biens d\'exception.',
  hero_bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
  vision_title: 'Notre Vision',
  vision_text_1: 'Depuis sa création, MACOF Immobilier redéfinit les standards de l\'immobilier de luxe et du BTP en République de Guinée. Nous concevons des espaces de vie uniques qui allient design contemporain, matériaux nobles et intégration environnementale.',
  vision_text_2: 'Que vous recherchiez une résidence principale d\'exception, un écrin pour vos bureaux ou un investissement stratégique, nos architectes et ingénieurs vous accompagnent avec une rigueur absolue de la conception à la remise des clés.',
  stat_1_value: '50+',
  stat_1_label: 'Projets Réalisés',
  stat_2_value: '100%',
  stat_2_label: 'Sur-mesure',
  contact_email: 'immobilier@macofholding.com',
  contact_phone: '+224 620 00 00 00',
};

const fallbackServices = [
  { title: "Résidentiel Haut de Gamme", desc: "Villas de luxe, résidences sécurisées, appartements de standing.", icon: "" },
  { title: "Espaces Commerciaux", desc: "Centres commerciaux, boutiques, showrooms sur-mesure.", icon: "" },
  { title: "Complexes Administratifs", desc: "Sièges sociaux, bureaux modernes, espaces de coworking.", icon: "" },
  { title: "Infrastructures Publiques", desc: "Aménagements urbains, routes, équipements collectifs.", icon: "" },
];

const fallbackProjets = [
  { title: "Cité des Anges", lieu: "Kipé, Conakry", progression: "75%", image: "" },
  { title: "Tour MACOF Business", lieu: "Kaloum, Conakry", progression: "40%", image: "" },
  { title: "Domaine de Coyah", lieu: "Coyah", progression: "90%", image: "" },
];

export default function Immobilier() {
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
      const response = await axios.post('/api/v1/demandes', { ...formData, filiale: 'MACOF Immobilier', type_demande: 'devis' });
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

  // Parse JSON arrays from CMS
  const services: any[] = content?.services ? JSON.parse(content.services) : fallbackServices;
  const projets: any[] = content?.projets ? JSON.parse(content.projets) : fallbackProjets;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Parallax
      gsap.to(".header-img", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".header-section",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Text Reveal
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
            <img
              src={content?.hero_bg || fallbackContent.hero_bg}
              alt="Architecture ultra premium"
              className="header-img w-full h-[120%] object-cover -top-[10%] absolute opacity-80"
            />
          </div>
          <div className="relative z-20 text-center px-4 max-w-5xl mt-20">
            <p className="text-white text-xs uppercase tracking-[0.4em] font-sans mb-6 reveal-up">{content?.hero_subtitle || fallbackContent.hero_subtitle}</p>
            <h1 className="text-7xl md:text-9xl font-serif text-white mb-8 font-light leading-none reveal-up">
              {content?.hero_title || fallbackContent.hero_title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light font-sans max-w-3xl mx-auto leading-relaxed reveal-up">
              {content?.hero_desc || fallbackContent.hero_desc}
            </p>
            <div className="mt-12 reveal-up">
              <Button variant="luxury" size="lg" className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white hover:text-black transition-all duration-500 text-sm tracking-widest uppercase">
                Découvrir nos projets
              </Button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
             <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
        </section>

        {/* Vision & Expertise */}
        <section className="content-section py-32 bg-background relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="reveal-up">
                <h2 className="text-sm font-sans tracking-[0.3em] text-red-200 uppercase mb-6">{content?.vision_title || fallbackContent.vision_title}</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">L'Architecture <br/><span className="italic text-blue-200">comme art de vivre.</span></h3>
                <div className="space-y-6 text-white font-light leading-relaxed font-sans text-lg">
                  <p>
                    {content?.vision_text_1 || fallbackContent.vision_text_1}
                  </p>
                  <p>
                    {content?.vision_text_2 || fallbackContent.vision_text_2}
                  </p>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
                  <div>
                    <h4 className="text-5xl font-serif text-white mb-2">{content?.stat_1_value || fallbackContent.stat_1_value}</h4>
                    <p className="text-xs text-blue-200 uppercase tracking-widest font-sans">{content?.stat_1_label || fallbackContent.stat_1_label}</p>
                  </div>
                  <div>
                    <h4 className="text-5xl font-serif text-white mb-2">{content?.stat_2_value || fallbackContent.stat_2_value}</h4>
                    <p className="text-xs text-blue-200 uppercase tracking-widest font-sans">{content?.stat_2_label || fallbackContent.stat_2_label}</p>
                  </div>
                </div>
              </div>
              
              <div className="relative reveal-up">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop" 
                    alt="Interior Design" 
                    className="w-full h-full object-cover filter grayscale-[20%]"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-card p-8 border border-white/5 max-w-xs hidden md:block">
                  <p className="text-sm font-sans text-foreground leading-relaxed">
                    "Bâtir des infrastructures solides, esthétiques et durables pour les générations futures."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre Approche (Nouveau contenu) */}
        <section className="py-32 bg-background border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20 reveal-up">
              <h2 className="text-sm font-sans tracking-[0.3em] text-red-200 uppercase mb-4">Notre Méthodologie</h2>
              <h3 className="text-4xl font-serif text-white">L'Excellence à chaque étape</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { n: "01", t: "Étude & Conception", d: "Nos architectes et ingénieurs modélisent votre vision en intégrant les contraintes topographiques, climatiques et esthétiques pour un design avant-gardiste." },
                { n: "02", t: "Ingénierie & BTP", d: "Déploiement des équipes sur le terrain avec un suivi de chantier rigoureux, utilisant des matériaux premium et des techniques de construction modernes." },
                { n: "03", t: "Gestion & Valorisation", d: "Au-delà de la livraison, nous assurons la gestion locative et la maintenance de vos actifs immobiliers pour garantir leur pérennité et rentabilité." }
              ].map((step, i) => (
                <div key={i} className="relative p-10 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-primary/50 transition-all duration-500 reveal-up group">
                  <span className="absolute -top-6 -left-6 text-7xl font-serif text-white/5 group-hover:text-primary/20 transition-colors duration-500">{step.n}</span>
                  <h4 className="text-2xl font-serif text-white mb-4 relative z-10">{step.t}</h4>
                  <p className="text-white/60 font-light leading-relaxed relative z-10">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types de constructions */}
        <section className="py-32 bg-secondary border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center reveal-up">
             <h2 className="text-sm font-sans tracking-[0.3em] text-red-200 uppercase mb-6">Nos Domaines d'Intervention</h2>
             <h3 className="text-4xl md:text-5xl font-serif text-white mb-20">Types de Constructions</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {services.map((serv, i) => (
                   <div key={i} className="group relative overflow-hidden bg-card border border-white/5 cursor-pointer">
                   <div className="aspect-[4/3] overflow-hidden">
                     <img src={serv.icon || serv.image || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=500&auto=format&fit=crop"} alt={serv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   </div>
                   <div className="p-6 bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-left">
                     <h3 className="text-xl font-serif text-white mb-2 group-hover:text-primary transition-colors">{serv.title}</h3>
                     <p className="text-blue-100 font-light text-sm leading-relaxed">{serv.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Projets en cours & Certifications */}
        <section className="py-32 bg-background relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="reveal-up">
                <h2 className="text-3xl font-serif text-white mb-8">Projets en cours (Localisation)</h2>
                <div className="aspect-video relative bg-card border border-white/10 overflow-hidden mb-6 flex items-center justify-center">
                   <div className="absolute inset-0 bg-blue-900/20" />
                   {/* Placeholder for Interactive Map */}
                   <div className="text-center relative z-10 p-6">
                      <span className="text-4xl mb-4 block">🗺️</span>
                      <p className="text-white font-serif text-xl">Carte Interactive des Chantiers (Guinée)</p>
                      <p className="text-blue-200 text-sm mt-2">API MapBox / Google Maps à intégrer</p>
                   </div>
                </div>
                <div className="space-y-4">
                  {projets.map((projet, i) => (
                    <div key={i} className="p-4 border border-white/5 bg-white/[0.02] flex justify-between items-center">
                      <div>
                        <h4 className="text-md font-serif text-white mb-1">{projet.title || projet.nom}</h4>
                        <p className="text-xs font-light text-blue-200">{projet.lieu || ''}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-serif text-primary">{projet.progression || ''}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-12 reveal-up">
                <div className="bg-white/[0.02] p-10 border border-white/10">
                  <h2 className="text-3xl font-serif text-white mb-6">Certifications & Conformités</h2>
                  <p className="text-white font-light leading-relaxed mb-6">
                    La qualité et la sécurité sont au cœur de notre démarche.
                  </p>
                  <ul className="space-y-4 text-white font-light text-sm">
                    <li className="flex gap-4"><span className="text-primary">✓</span> Normes ISO 9001 (Management qualité)</li>
                    <li className="flex gap-4"><span className="text-primary">✓</span> Respect des normes environnementales HQE</li>
                    <li className="flex gap-4"><span className="text-primary">✓</span> Agréments professionnels BTP / Assurances</li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-10 border border-primary/20">
                  <h2 className="text-2xl font-serif text-white mb-6">Témoignages Partenaires</h2>
                  <div className="space-y-6">
                    <blockquote className="border-l-2 border-primary pl-4">
                      <p className="text-white/80 font-light italic mb-2">"MACOF Immobilier a su délivrer notre siège social avec une rigueur exceptionnelle."</p>
                      <footer className="text-sm text-primary">— Directeur, Banque Partenaire</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section className="py-32 bg-card border-t border-white/5">
          <div className="max-w-[100rem] mx-auto px-6 lg:px-12 text-center reveal-up">
            <h2 className="text-sm font-sans tracking-[0.3em] text-red-200 uppercase mb-6">Aperçu</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-16">Galerie Réalisations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop" alt="Real estate 1" className="w-full h-80 object-cover hover:opacity-80 transition-opacity" />
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" alt="Real estate 2" className="w-full h-80 object-cover hover:opacity-80 transition-opacity" />
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" alt="Real estate 3" className="w-full h-80 object-cover hover:opacity-80 transition-opacity" />
            </div>
          </div>
        </section>

        {/* Formulaire Spécifique */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-1/2 h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start reveal-up">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Lançons votre <br/>projet d'exception.</h2>
                <p className="text-white font-light max-w-md mb-12">
                  Que ce soit pour une construction neuve, un aménagement sur-mesure ou une opportunité d'investissement, nos experts sont à votre écoute.
                </p>
                <div className="bg-white/5 p-8 border border-white/10">
                  <h4 className="text-xl font-serif text-white mb-4">Contact Direct Immobilier</h4>
                  <p className="text-blue-200 font-light text-sm mb-2">Email: {content?.contact_email || fallbackContent.contact_email}</p>
                  <p className="text-blue-200 font-light text-sm">Téléphone: {content?.contact_phone || fallbackContent.contact_phone}</p>
                </div>
              </div>
              
              <div>
                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <p className="text-green-800 font-medium">Votre demande a été envoyée !</p>
                    <p className="text-green-600 text-sm">Référence: {reference}</p>
                    <p className="text-green-700 text-sm mt-1">Nos experts en immobilier vous recontacteront sous 24h ouvrées.</p>
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
                    <h3 className="text-2xl font-serif text-black mb-8">Demande de Consultation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Nom Complet</label>
                        <Input required placeholder="Votre nom" className="border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Téléphone</label>
                        <Input required placeholder="+224 ..." className="border-gray-200" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Type de projet</label>
                        <select className="flex h-10 w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:border-primary">
                          <option>Résidentiel Haut de Gamme</option>
                          <option>Commercial</option>
                          <option>Administratif</option>
                          <option>Infrastructure</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Budget Estimé</label>
                        <select className="flex h-10 w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:border-primary">
                          <option>&lt; 1 Milliard GNF</option>
                          <option>1 - 5 Milliards GNF</option>
                          <option>5 - 10 Milliards GNF</option>
                          <option>&gt; 10 Milliards GNF</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Surface souhaitée (m²)</label>
                        <Input placeholder="Ex: 500m²" className="border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Localisation souhaitée</label>
                        <Input placeholder="Ex: Kaloum, Conakry" className="border-gray-200" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Délai estimé</label>
                        <Input placeholder="Ex: Dans 6 mois" className="border-gray-200" />
                      </div>
                    </div>

                    <div className="space-y-2 mb-8">
                      <label className="text-xs uppercase tracking-widest text-gray-500">Détails du projet</label>
                      <textarea
                        required
                        rows={4}
                        className="flex w-full rounded-sm border border-gray-200 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:border-primary"
                        placeholder="Décrivez vos besoins (surface, spécificités)..."
                      />
                    </div>
                    <Button variant="luxury" size="lg" className="w-full bg-primary text-white hover:bg-primary/90" disabled={formStatus === 'loading'}>
                      {formStatus === 'loading' ? 'Envoi en cours...' : 'Envoyer la demande'}
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

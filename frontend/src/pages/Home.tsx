import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { AnimatedPage } from '../components/layout/AnimatedPage';
import axios from 'axios';
import { MessageCircle } from 'lucide-react';
import DOMPurify from 'dompurify';

gsap.registerPlugin(ScrollTrigger);

const routeMap: Record<string, string> = {
  'MACOF Immobilier': '/immobilier',
  'MACOF Restauration': '/restauration',
  'MACOF Transit': '/transit',
  'MACOF Mining': '/mining',
  'MACOF Fishing': '/fishing',
  'MACOF Print & Com': '/print',
};

const FILIALES = [
  { title: "MACOF Immobilier", subtitle: "Immobilier & BTP", img: "/plaquette-construction.jpeg", link: "/immobilier" },
  { title: "MACOF Restauration", subtitle: "Restauration & Traiteur", img: "/plaquette-resto.jpeg", link: "/restauration" },
  { title: "MACOF Print & Com", subtitle: "Communication & Impression", img: "/plaquette-print.jpeg", link: "/print" },
  { title: "MACOF Mining", subtitle: "Activités minières", img: "/plaquette-mining.jpeg", link: "/mining" },
  { title: "MACOF Transit", subtitle: "Transit, Logistique & Voyages", img: "/plaquette-logistics.jpeg", link: "/transit" },
  { title: "MACOF Fishing", subtitle: "Pêche & Ressources", img: "/plaquette-fishing.jpeg", link: "/fishing" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const filialesRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<any>(null);
  const [filiales, setFiliales] = useState<any[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [resContent, resFiliales] = await Promise.all([
          axios.get('/api/v1/pages/home'),
          axios.get('/api/v1/filiales')
        ]);
        
        if (resContent.data.success) {
          setContent(resContent.data.data);
        }
        
        if (resFiliales.data.success) {
          const formatted = resFiliales.data.data.map((f: any) => {
            return {
              title: f.nom,
              subtitle: f.secteur || 'Expertise',
              img: f.image_path || "/plaquette-building.jpeg",
              link: routeMap[f.nom] || '/domaines'
            };
          });
          setFiliales(formatted);
        }
      } catch (error) {
        console.error("Failed to load home data", error);
        // Fallback pour afficher l'interface même si l'API échoue (ex: Netlify)
        setContent({
          hero_title_small: 'MACOF Holding',
          hero_title_main: "L'Art de façonner <br/><span class=\"italic text-red-500 font-light\">l'avenir.</span>",
          hero_desc: "Groupe guinéen multi-sectoriel, MACOF Holding construit et transforme durablement des secteurs stratégiques de l'économie à travers six filiales spécialisées : Immobilier, Restauration, Communication, Mining, Transit et Pêche.",
          vision_title_small: 'Notre Vision',
          vision_desc_1: "MACOF Holding est un groupe de droit guinéen, structuré autour d'une vision ambitieuse : construire, développer et transformer durablement des secteurs stratégiques de l'économie.",
          vision_desc_2: "À travers une organisation moderne et une gouvernance rigoureuse, le groupe incarne « l'art de façonner l'avenir » en créant de la valeur durable pour ses partenaires, ses collaborateurs et la nation.",
          hero_bg: "/plaquette-banner.jpeg"
        }); 
        setFiliales(FILIALES);
      }
    };
    fetchContent();
  }, []);

  // Polling for real-time data sync
  useEffect(() => {
    const pollInterval = setInterval(async () => {
      try {
        const resFiliales = await axios.get('/api/v1/filiales');
        if (resFiliales.data.success) {
          const formatted = resFiliales.data.data.map((f: any) => {
            return {
              title: f.nom,
              subtitle: f.secteur || 'Expertise',
              img: f.image_path || "/plaquette-building.jpeg",
              link: routeMap[f.nom] || '/domaines'
            };
          });
          setFiliales(formatted);
        }
      } catch (e) { /* silently ignore polling errors */ }
    }, 30000);
    return () => clearInterval(pollInterval);
  }, []);

  useEffect(() => {
    if (!content) return; // Wait for content before animating

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(".hero-title", 
        { y: 150, opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
        { y: 0, opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 2, ease: "power4.out", delay: 1.2 }
      );
      
      gsap.fromTo(".hero-desc", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 1.8, stagger: 0.2 }
      );

      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      const cards = gsap.utils.toArray('.reveal-card');
      cards.forEach((card: any) => {
        gsap.fromTo(card, 
          { y: 100, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1.5, ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%"
            }
          }
        );
      });
    });
    return () => ctx.revert();
  }, [content]);

  if (!content) {
    return <div className="h-screen bg-background flex items-center justify-center text-white">Chargement...</div>;
  }

  return (
    <AnimatedPage className="bg-background">
      {/* 1. Bandeau Hero Plein Écran (Bleu vif 20%) */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900/60 z-10" />
          <img 
            src={content.hero_bg || "/plaquette-banner.jpeg"}
            alt="MACOF Building" 
            className="hero-bg w-full h-[120%] object-cover object-center -top-[10%]"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center">
          <div className="hero-title overflow-hidden mb-8">
            <p className="text-white text-xs tracking-[0.4em] uppercase font-sans mb-8">{content.hero_title_small || 'MACOF Holding'}</p>
            <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-serif text-white tracking-tight leading-[1.1]" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.hero_title_main || "L'Art de façonner <br/><span class=\"italic text-red-500 font-light\">l'avenir.</span>") }}>
            </h1>
          </div>
          <p className="hero-desc text-sm md:text-lg text-white max-w-2xl mx-auto font-sans font-light leading-relaxed mb-12">
            {content.hero_desc || "Construire, développer et transformer durablement des secteurs stratégiques de l'économie guinéenne et internationale."}
          </p>
          <div className="hero-desc flex gap-6">
            <Link to="/domaines">
              <Button variant="luxury" size="lg" className="bg-red-600 text-white hover:bg-red-700 shadow-none">Découvrir le groupe</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 hover:text-white">Nous contacter</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Présentation Synthétique (Rouge 15%) */}
      <section className="py-32 bg-secondary relative z-30">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center reveal-card">
          <h2 className="text-sm font-sans tracking-[0.3em] text-white uppercase mb-8">{content.vision_title_small || 'Une Vision Ambitieuse'}</h2>
          <p className="text-2xl md:text-4xl font-serif text-white leading-relaxed font-light mb-8">
            {content.vision_desc_1}
          </p>
          <p className="text-red-100 font-light text-lg leading-relaxed">
            {content.vision_desc_2}
          </p>
        </div>
      </section>

      {/* 3. Nos domaines d'activité (Bleu Nuit 20%) */}
      <section ref={filialesRef} className="py-32 px-6 lg:px-12 max-w-[100rem] mx-auto bg-background">
        <div className="flex justify-between items-end border-b border-white/10 pb-8 mb-16 reveal-card">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Nos <span className="text-primary italic">Expertises</span></h2>
          <Link to="/domaines" className="text-xs font-sans tracking-widest text-muted-foreground hover:text-foreground uppercase">Voir tout →</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(filiales.length > 0 ? filiales : FILIALES).map((item, i) => (
            <Link 
              to={item.link} 
              key={i} 
              className="reveal-card filiale-card group relative block overflow-hidden aspect-[4/5] border border-white/5"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-out filter grayscale-[40%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent group-hover:from-blue-900/80 transition-colors duration-700" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-xs uppercase tracking-[0.2em] font-sans mb-3 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-red-500 block"></span> 
                  {item.subtitle}
                </p>
                <h3 className="text-3xl font-serif text-white font-light">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Chiffres Clés (Blanc 10%) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {(content?.stats ? JSON.parse(content.stats) : [
              { value: '2018', label: 'Création' },
              { value: '6', label: 'Filiales' },
              { value: '120+', label: 'Projets réalisés' },
              { value: '2500', label: 'Collaborateurs' }
            ]).map((stat: any, i: number) => (
              <div key={i} className="reveal-card">
                <div className="text-5xl md:text-7xl font-serif text-black mb-4">{stat.value}</div>
                <div className="text-xs font-sans tracking-widest text-primary uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pourquoi nous choisir (Rouge 15%) */}
      <section className="py-32 px-6 lg:px-12 w-full bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal-card">
            <h2 className="text-sm font-sans tracking-[0.3em] text-red-200 uppercase mb-6">Notre ADN</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white font-light">L'excellence comme standard</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(content?.reasons ? JSON.parse(content.reasons) : [
              { title: "Diversification Stratégique", desc: "Une présence forte dans 6 secteurs clés de l'économie guinéenne et internationale, assurant résilience et croissance continue." },
              { title: "Gouvernance Rigoureuse", desc: "Des processus de décision structurés et une éthique professionnelle irréprochable garantissant transparence et confiance." },
              { title: "Expertise Sectorielle", desc: "Une maîtrise pointue de chaque domaine d'activité grâce à des équipes spécialisées et expérimentées." },
              { title: "Ancrage Local", desc: "Une connaissance profonde du marché local couplée à des standards internationaux de qualité et de sécurité." }
            ]).map((arg: any, i: number) => (
              <div key={i} className="reveal-card p-8 border border-white/20 bg-white/[0.05] hover:bg-white/[0.1] transition-colors">
                <div className="text-white text-4xl font-serif mb-6">0{i+1}.</div>
                <h4 className="text-xl font-serif text-white mb-4">{arg.title}</h4>
                <p className="text-red-100 font-light leading-relaxed text-sm">{arg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Réalisations (Background Noir) */}
      <section className="py-32 px-6 lg:px-12 bg-background">
        <div className="max-w-[100rem] mx-auto">
          <div className="flex justify-between items-end border-b border-white/10 pb-8 mb-16 reveal-card">
            <h2 className="text-3xl md:text-5xl font-serif text-white">Nos <span className="text-primary italic">Réalisations</span> phares</h2>
            <Link to="/galerie" className="text-xs font-sans tracking-widest text-muted-foreground hover:text-white uppercase">Explorer la galerie →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(content?.realisations ? JSON.parse(content.realisations) : [
              { title: "Cité MACOF Résidence", category: "Immobilier", image: "/plaquette-construction.jpeg" },
              { title: "SEBA International", category: "Restauration", image: "/plaquette-resto.jpeg" },
              { title: "Opérations Minières", category: "Mining", image: "/plaquette-mining.jpeg" },
              { title: "Impression Offset", category: "Print & Com", image: "/plaquette-print.jpeg" },
              { title: "Logistique Portuaire", category: "Transit", image: "/plaquette-logistics.jpeg" },
              { title: "Flotte Côtière", category: "Fishing", image: "/plaquette-fishing.jpeg" },
            ]).map((item: any, idx: number) => (
              <div key={idx} className="group relative overflow-hidden aspect-video reveal-card">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-red-500 text-xs font-sans tracking-widest uppercase mb-2">{item.category}</span>
                  <h4 className="text-white text-xl font-serif">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Témoignages (Bleu Nuit 20%) */}
      <section className="py-32 px-6 lg:px-12 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 reveal-card">
            <h2 className="text-sm font-sans tracking-[0.3em] text-blue-200 uppercase mb-6">Confiance</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white font-light">Ce qu'ils disent de nous</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content?.temoignages ? JSON.parse(content.temoignages) : [
              { text: "L'expertise de MACOF dans l'accompagnement de nos projets immobiliers a été déterminante. Une rigueur et un professionnalisme exemplaires.", auteur: "Directeur Général", entreprise: "Banque d'Investissement" },
              { text: "Nous travaillons avec MACOF Transit pour toutes nos importations. Leur efficacité logistique et leur suivi en temps réel sont inégalés sur le marché.", auteur: "Responsable Achats", entreprise: "Société Industrielle" },
              { text: "La qualité du service traiteur de SEBA International a grandement contribué au succès de notre gala annuel. Une prestation haut de gamme.", auteur: "Directrice Communication", entreprise: "Multinationale Minière" }
            ]).map((testi: any, i: number) => (
              <div key={i} className="reveal-card p-10 bg-white/[0.03] border border-white/10 backdrop-blur-sm relative">
                <div className="text-6xl font-serif text-red-500/20 absolute top-6 left-6">"</div>
                <p className="text-white font-light leading-relaxed mb-8 relative z-10">
                  {testi.text}
                </p>
                <div>
                  <h4 className="text-white font-serif">{testi.auteur}</h4>
                  <p className="text-blue-200 text-sm font-light">{testi.entreprise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Actualités (Blanc) */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end border-b border-black/10 pb-8 mb-16 reveal-card">
            <h2 className="text-3xl md:text-5xl font-serif text-black">Dernières <span className="text-primary italic">Actualités</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(content?.actualites ? JSON.parse(content.actualites) : [
              { date: "12 Juin 2026", category: "Institutionnel", title: "MACOF Holding inaugure son nouveau siège à Conakry", image: "/plaquette-building.jpeg" },
              { date: "05 Juin 2026", category: "Immobilier", title: "Lancement du projet résidentiel haut de gamme 'Les Perles de Kaloum'", image: "/plaquette-construction.jpeg" },
              { date: "28 Mai 2026", category: "Restauration", title: "SEBA International remporte le prix du meilleur traiteur B2B", image: "/plaquette-resto.jpeg" },
            ]).map((news: any, i: number) => (
              <div key={i} className="group cursor-pointer reveal-card">
                <div className="overflow-hidden aspect-video mb-6 relative">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 uppercase tracking-widest font-sans">
                    {news.category}
                  </div>
                </div>
                <div className="text-sm font-sans tracking-widest text-gray-500 mb-3">{news.date}</div>
                <h3 className="text-xl font-serif text-black leading-tight group-hover:text-primary transition-colors">{news.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA Final (Bleu Corporate 10%) */}
      <section className="py-32 bg-primary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 blur-[100px] rounded-full pointer-events-none w-1/2 h-1/2 left-1/4 top-1/4 opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 font-light">Prêt à façonner <span className="text-white italic">l'avenir</span> avec nous ?</h2>
          <p className="text-white mb-12 text-lg font-light">Discutons de vos projets, de vos investissements ou de vos ambitions.</p>
          <Link to="/contact">
            <Button variant="luxury" size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-none">Contactez le groupe</Button>
          </Link>
          <a href="https://wa.me/224625744626" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 mt-6 px-6 py-3 border border-white/30 text-white rounded hover:bg-white/10 transition-colors">
            <MessageCircle size={20} />
            <span className="text-sm tracking-widest uppercase">WhatsApp</span>
          </a>
        </div>
      </section>

    </AnimatedPage>
  );
}




import { useEffect, useRef, useState } from 'react';
import { AnimatedPage } from '../components/layout/AnimatedPage';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

const FALLBACK_DOMAINES = [
  {
    id: '01', title: "MACOF Immobilier", subtitle: "Immobilier & BTP", desc: "Investissement immobilier, promotion, construction, travaux publics, infrastructures.", details: ["Promotion", "Construction", "Infrastructures"], link: "/immobilier", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '02', title: "MACOF Restauration", subtitle: "Restauration & Traiteur", desc: "Restauration premium, collective, événementielle, boulangerie-pâtisserie.", details: ["Premium", "Collective", "Traiteur"], link: "/restauration", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '03', title: "MACOF Print & Com", subtitle: "Communication & Impression", desc: "Impression, identité visuelle, signalétique, organisation d'événements.", details: ["Impression", "Identité Visuelle", "Événementiel"], link: "/print", img: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '04', title: "MACOF Mining", subtitle: "Activités minières", desc: "Exploration, exploitation, sous-traitance, transport et commercialisation de produits miniers.", details: ["Exploration", "Exploitation", "Commercialisation"], link: "/mining", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '05', title: "MACOF Transit", subtitle: "Transit, Logistique & Voyages", desc: "Dédouanement, transport, logistique, import-export, billetterie.", details: ["Dédouanement", "Fret", "Billetterie"], link: "/transit", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '06', title: "MACOF Fishing", subtitle: "Pêche & Ressources", desc: "Pêche artisanale et industrielle, transformation, distribution produits de la mer.", details: ["Pêche", "Transformation", "Distribution"], link: "/fishing", img: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Domaines() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [domaines, setDomaines] = useState<any[]>([]);

  useEffect(() => {
    axios.get('/api/v1/filiales')
      .then(res => {
        if (res.data.success) {
          if (res.data.data && res.data.data.length > 0) {
            const formatted = res.data.data.map((f: any, i: number) => {
              let parsedDetails: any[] = [];
              if (f.details_json) {
                try {
                  parsedDetails = typeof f.details_json === 'string' ? JSON.parse(f.details_json) : f.details_json;
                  if (!Array.isArray(parsedDetails)) parsedDetails = [];
                } catch (e) {
                  parsedDetails = [];
                }
              }

              const routeMap: Record<string, string> = {
                'MACOF Immobilier': '/immobilier',
                'MACOF Restauration': '/restauration',
                'MACOF Print & Com': '/print',
                'MACOF Mining': '/mining',
                'MACOF Transit': '/transit',
                'MACOF Fishing': '/fishing'
              };

              return {
                id: String(i + 1).padStart(2, '0'),
                title: f.nom,
                subtitle: f.secteur || 'Pôle d\'expertise',
                desc: f.description,
                details: parsedDetails,
                link: routeMap[f.nom] || '/domaines',
                img: f.image_path ? `${f.image_path}` : "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
              };
            });
            setDomaines(formatted);
          } else {
            setDomaines(FALLBACK_DOMAINES);
          }
        }
      })
      .catch(err => {
        console.error("Erreur de chargement des filiales", err);
        setDomaines(FALLBACK_DOMAINES);
      });
  }, []);

  // Polling for real-time data sync
  useEffect(() => {
    const pollInterval = setInterval(async () => {
      try {
        const res = await axios.get('/api/v1/filiales');
        if (res.data.success) setDomaines(res.data.data);
      } catch (e) { /* silently ignore polling errors */ }
    }, 30000);
    return () => clearInterval(pollInterval);
  }, []);

  useEffect(() => {
    if (domaines.length > 0) {
    const ctx = gsap.context(() => {
      // Reveal animations for each domain block
      gsap.utils.toArray('.domain-block').forEach((block: any) => {
        const textContent = block.querySelector('.text-content');
        const imgContent = block.querySelector('.img-content');
        
        gsap.from(textContent, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 75%",
          }
        });

        gsap.from(imgContent, {
          scale: 0.95,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
    }
  }, [domaines]);

  return (
    <AnimatedPage className="bg-background">
      <div ref={containerRef}>
        
        {/* Header Ultra-Luxe */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-blue-950/80 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Pôles d'expertise" 
              className="w-full h-full object-cover filter grayscale-[30%]" 
            />
          </div>
          <div className="relative z-20 text-center px-4 max-w-5xl mt-20">
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 font-light">
              Nos Pôles <br/><span className="text-gradient-corporate italic">d'Expertise</span>
            </h1>
            <p className="text-xl text-white font-light font-sans max-w-2xl mx-auto leading-relaxed mt-8">
              Une galaxie de six filiales indépendantes et complémentaires, unies par la même exigence de perfection pour façonner l'économie guinéenne de demain.
            </p>
          </div>
        </section>

        {/* Liste détaillée des domaines (Sticky / Alternating Layout) */}
        <section className="py-24 bg-background">
          <div className="max-w-[100rem] mx-auto px-6 lg:px-12 space-y-32">
            {domaines.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-xl">Aucun domaine trouvé</p>
              </div>
            )}
            {domaines.map((domaine, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={domaine.id} className={`domain-block flex flex-col lg:flex-row gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image Side */}
                  <div className="img-content w-full lg:w-1/2 relative">
                    <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full z-0 pointer-events-none" />
                    <div className="relative z-10 aspect-[4/3] overflow-hidden border border-white/10 group">
                      <img 
                        src={domaine.img} 
                        alt={domaine.title} 
                        className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-[2s] ease-out" 
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="text-content w-full lg:w-1/2 relative">
                    {/* Big Background Number */}
                    <div className="absolute -top-24 -left-12 text-[12rem] font-serif font-black text-white/[0.03] select-none pointer-events-none leading-none z-0">
                      {domaine.id}
                    </div>
                    
                    <div className="relative z-10 pl-0 lg:pl-8">
                      <span className="text-sm font-sans tracking-[0.3em] text-primary uppercase mb-4 block">Pôle {domaine.id}</span>
                      <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">{domaine.title}</h2>
                      <h3 className="text-xl font-serif text-white/50 mb-8 italic">{domaine.subtitle}</h3>
                      
                      <p className="text-white/80 font-light leading-relaxed mb-8 text-lg">
                        {domaine.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {domaine.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <span className="text-primary text-xs">◈</span>
                            <span className="text-white font-light text-sm tracking-wide">{detail}</span>
                          </div>
                        ))}
                      </div>

                      <Link to={domaine.link}>
                        <Button variant="outline" className="text-white border-white/30 hover:border-white hover:bg-white hover:text-black transition-all">
                          Découvrir la filiale
                        </Button>
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="py-32 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
             <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Architecture" />
             <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Un Projet Multidisciplinaire ?</h2>
            <p className="text-white/90 font-light mb-12 text-xl leading-relaxed">
              La force de MACOF Holding réside dans la synergie de ses pôles. Confiez-nous vos projets d'envergure, nous déploierons notre expertise transversale pour en garantir le succès.
            </p>
            <Link to="/contact">
              <Button variant="luxury" size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-2xl px-12">
                Consulter la Direction Générale
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </AnimatedPage>
  );
}

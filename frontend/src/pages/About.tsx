import { useEffect, useRef, useState } from 'react';
import { AnimatedPage } from '../components/layout/AnimatedPage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';
import DOMPurify from 'dompurify';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get('/api/v1/pages/about');
        if (res.data.success) {
          setContent(res.data.data);
        }
      } catch (error) {
        console.error("Failed to load page content", error);
        setContent({
          hero_title: "MACOF <span class=\"italic text-gradient-corporate\">Holding</span>",
          hero_desc: "MACOF Holding est un groupe de droit guinéen, structuré autour d'une vision ambitieuse : construire, développer et transformer durablement des secteurs stratégiques de l'économie. À travers une organisation moderne et une gouvernance rigoureuse, le groupe incarne « l'art de façonner l'avenir » en créant de la valeur durable pour ses partenaires, ses collaborateurs et la nation.",
          vision_text: "Devenir un groupe de référence, reconnu pour son excellence, sa performance durable et sa contribution au développement économique de la Guinée et au-delà de la sous-région ouest-africaine.",
          mission_text: "Structurer, piloter et développer ses filiales à travers une gouvernance rigoureuse, une stratégie claire et une gestion centralisée, afin de garantir une croissance durable et créatrice de valeur pour l'ensemble des parties prenantes — actionnaires, collaborateurs, partenaires, clients et la collectivité nationale.",
          valeurs_text: "Excellence - Viser l'excellence dans tout ce que nous entreprenons\nInnovation - Innover en permanence pour rester à la pointe\nIntégrité - Opérer avec transparence et respect de nos engagements\nEngagement - S'engager envers nos clients, partenaires et communauté\nResponsabilité - Contribuer au développement durable\nEsprit d'équipe - Travailler ensemble pour atteindre l'excellence collective",
          historique_2018: "Fondation de MACOF SARL sous la forme d'une Société à Responsabilité Limitée (SARL) en République de Guinée, marquant le point de départ des activités du groupe.",
          historique_2023: "Évolution vers une Société Anonyme (SA), traduisant une phase d'expansion et de structuration renforcée, avec une gouvernance formelle et une capacité d'investissement élargie.",
          historique_2026: "Adoption d'un modèle de Holding afin d'optimiser la gouvernance, la coordination stratégique et le développement sectoriel du groupe, dans une logique de spécialisation par filiale.",
          org_text_1: "MACOF Holding développe ses activités à travers six filiales expertes dans leurs domaines respectifs, chacune dédiée à un secteur stratégique de l'économie guinéenne : Immobilier & BTP, Restauration & Traiteur, Communication & Impression, Activités minières, Transit & Logistique, et Pêche & Ressources halieutiques.",
          org_text_2: "La structure holding permet une coordination stratégique efficace tout en offrant à chaque filiale l'autonomie nécessaire pour exceller dans son domaine d'expertise spécifique.",
          hero_img: "/plaquette-building.jpeg"
        });
      }
    };
      fetchContent();
  }, []);

  // Polling for real-time data sync
  useEffect(() => {
    const pollInterval = setInterval(async () => {
      try {
        const res = await axios.get('/api/v1/pages/about');
        if (res.data.success) setContent(res.data.data);
      } catch (e) { /* silently ignore polling errors */ }
    }, 30000);
    return () => clearInterval(pollInterval);
  }, []);

  useEffect(() => {
    if (!content) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-text").forEach((el: any) => {
        gsap.from(el, { y: 50, opacity: 0, duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
      });
      
      gsap.utils.toArray(".timeline-item").forEach((el: any) => {
        gsap.from(el, { x: -50, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
      });
    }, containerRef);
    return () => ctx.revert();
  }, [content]);

  if (!content) {
    return <div className="h-screen bg-background flex items-center justify-center text-white">Chargement...</div>;
  }

  return (
    <AnimatedPage className="bg-background pt-32 pb-24">
      <div ref={containerRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="mb-24 reveal-text">
            <h1 className="text-5xl md:text-7xl font-serif text-foreground font-light mb-8" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.hero_title || 'MACOF <span class="italic text-gradient-corporate">Holding</span>') }}>
            </h1>
            <p className="text-xl text-white font-sans font-light max-w-3xl leading-relaxed">
              {content.hero_desc || ''}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-start reveal-text">
            <div className="space-y-12 border-l border-primary/20 pl-8">
              <div>
                <h3 className="text-2xl font-serif text-primary mb-4">Vision</h3>
                <p className="text-white font-light leading-relaxed">
                  {content.vision_text || ''}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-primary mb-4">Mission</h3>
                <p className="text-white font-light leading-relaxed">
                  {content.mission_text || ''}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-primary mb-4">Valeurs</h3>
                <ul className="text-white font-light leading-relaxed list-disc list-inside space-y-2">
                  {(content.valeurs_text || "").split('\n').map((val: string, i: number) => (
                    val.trim() && <li key={i}>{val}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <img 
                src={content.hero_img || "/plaquette-building.jpeg"}
                alt="Gouvernance" 
                className="w-full h-full object-cover filter grayscale-[20%]"
              />
            </div>
          </div>

          {/* Timeline Historique */}
          <div className="border-t border-white/10 pt-24 mb-32 timeline-container">
            <h2 className="text-sm font-sans tracking-[0.3em] text-primary uppercase mb-16 text-center">Historique & Parcours</h2>
            
            <div className="space-y-16 relative">
              <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>
              
              <div className="timeline-item flex flex-col md:flex-row gap-8 md:gap-16 relative">
                <div className="md:w-32 flex-shrink-0 relative z-10">
                  <div className="text-3xl font-serif text-primary bg-background inline-block py-2 pr-4">2018</div>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-foreground mb-2">Création de MACOF SARL</h4>
                  <p className="text-white font-light">{content.historique_2018}</p>
                </div>
              </div>

              <div className="timeline-item flex flex-col md:flex-row gap-8 md:gap-16 relative">
                <div className="md:w-32 flex-shrink-0 relative z-10">
                  <div className="text-3xl font-serif text-primary bg-background inline-block py-2 pr-4">2023</div>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-foreground mb-2">Transformation en MACOF SA</h4>
                  <p className="text-white font-light">{content.historique_2023}</p>
                </div>
              </div>

              <div className="timeline-item flex flex-col md:flex-row gap-8 md:gap-16 relative">
                <div className="md:w-32 flex-shrink-0 relative z-10">
                  <div className="text-3xl font-serif text-primary bg-background inline-block py-2 pr-4">2026</div>
                </div>
                <div>
                  <h4 className="text-xl font-serif text-foreground mb-2">Transition vers MACOF Holding</h4>
                  <p className="text-white font-light">{content.historique_2026}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-24 reveal-text grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-sans tracking-[0.3em] text-primary uppercase mb-8">Organisation & Gouvernance</h2>
              <p className="text-white font-light leading-relaxed mb-6">
                {content.org_text_1}
              </p>
              <p className="text-white font-light leading-relaxed">
                {content.org_text_2}
              </p>
            </div>
            
            <div className="bg-white/5 p-8 border border-white/10">
              <h2 className="text-sm font-sans tracking-[0.3em] text-green-400 uppercase mb-8">Engagements RSE</h2>
              <ul className="text-white font-light leading-relaxed space-y-4">
                <li className="flex gap-4">
                  <span className="text-green-400 text-xl">✓</span>
                  <span><strong>Contenu Local :</strong> Priorité accordée au recrutement et à la formation des talents guinéens.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-green-400 text-xl">✓</span>
                  <span><strong>Environnement :</strong> Intégration systématique de critères écologiques dans nos opérations minières et immobilières.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-green-400 text-xl">✓</span>
                  <span><strong>Social :</strong> Soutien actif aux communautés locales à travers des programmes d'éducation et de santé.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </AnimatedPage>
  );
}





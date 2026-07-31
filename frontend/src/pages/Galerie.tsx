import { useEffect, useRef, useState } from 'react';
import { AnimatedPage } from '../components/layout/AnimatedPage';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

const FILTERS = ["Tous", "MACOF Immobilier", "MACOF Restauration", "MACOF Print & Com", "MACOF Mining", "MACOF Transit", "MACOF Fishing"];

const FALLBACK_GALERIE = [
  { id: 1, filiale: "MACOF Immobilier", titre: "Cité MACOF", image_path: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop", desc: "Projet résidentiel d'envergure." },
  { id: 2, filiale: "MACOF Restauration", titre: "SEBA International", image_path: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop", desc: "Service traiteur premium." },
  { id: 3, filiale: "MACOF Print & Com", titre: "Offset Haute Qualité", image_path: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=1000&auto=format&fit=crop", desc: "Impression numérique grand format." },
  { id: 4, filiale: "MACOF Mining", titre: "Opérations Minières", image_path: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1000&auto=format&fit=crop", desc: "Site minier de Boke." },
  { id: 5, filiale: "MACOF Transit", titre: "Logistique Portuaire", image_path: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop", desc: "Gestion logistique et portuaire." },
  { id: 6, filiale: "MACOF Fishing", titre: "Flotte de Pêche", image_path: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=1000&auto=format&fit=crop", desc: "Distribution de produits de la mer." }
];

export default function Galerie() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedImage, setSelectedImage] = useState<any | null>(null);
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    axios.get('/api/v1/galerie')
      .then(res => {
        if (res.data.success) {
          if (res.data.data && res.data.data.length > 0) {
            setImages(res.data.data);
          } else {
            setImages(FALLBACK_GALERIE);
          }
        }
      })
      .catch(err => {
        console.error("Erreur de chargement de la galerie", err);
        setImages(FALLBACK_GALERIE);
      });
  }, []);

  // Polling for real-time data sync
  useEffect(() => {
    const pollInterval = setInterval(async () => {
      try {
        const res = await axios.get('/api/v1/galerie');
        if (res.data.success) setImages(res.data.data);
      } catch (e) { /* silently ignore polling errors */ }
    }, 30000);
    return () => clearInterval(pollInterval);
  }, []);

  const filteredImages = activeFilter === "Tous"
    ? images
    : images.filter(img => img.filiale === activeFilter);

  // Keyboard handler: Escape to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage !== null) {
        setSelectedImage(null);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 85%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, [activeFilter]); // Re-trigger anim on filter change only

  return (
    <AnimatedPage className="bg-background pt-32 pb-24 min-h-screen">
      <div ref={containerRef} className="max-w-[100rem] mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-white font-light mb-6">
            Notre <span className="italic text-gradient-corporate">Galerie</span>
          </h1>
          <p className="text-white font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Une sélection de nos réalisations illustrant l'excellence de MACOF Holding à travers ses six pôles d'expertise.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 border text-sm font-sans tracking-widest uppercase transition-all duration-300 ${
                activeFilter === f 
                  ? 'border-primary bg-primary/10 text-primary' 
                  : 'border-white/20 text-white hover:border-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grille Masonry */}
        <div className="gallery-grid columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className="gallery-item break-inside-avoid relative group overflow-hidden bg-card border border-white/5 cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.image_path.startsWith('http') ? img.image_path : `/uploads/${img.image_path}`}
                alt={img.titre} 
                className="w-full h-auto object-cover filter grayscale-[20%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-primary font-sans text-xs tracking-widest uppercase mb-2">{img.filiale}</span>
                <h3 className="text-white font-serif text-2xl">{img.titre}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12"
          onClick={(e) => { if (e.target === e.currentTarget) { setSelectedImage(null); document.body.style.overflow = ''; } }}>
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} strokeWidth={1} />
          </button>
          
          <div className="max-w-7xl w-full h-full flex flex-col items-center justify-center relative">
            <img
              src={selectedImage.image_path.startsWith('http') ? selectedImage.image_path : `/uploads/${selectedImage.image_path}`}
              alt={selectedImage.titre}
              className="max-h-[80vh] w-auto object-contain border border-white/10"
            />
            <div className="mt-8 text-center">
              <span className="text-primary font-sans text-xs tracking-[0.3em] uppercase block mb-3">{selectedImage.filiale}</span>
              <h3 className="text-3xl font-serif text-white mb-3">{selectedImage.titre}</h3>
              <p className="text-white/70 font-light font-sans max-w-lg mx-auto">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </AnimatedPage>
  );
}

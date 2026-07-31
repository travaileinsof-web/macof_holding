import { AnimatedPage } from '../components/layout/AnimatedPage';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <AnimatedPage className="bg-background pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* En-tête */}
        <div className="mb-20 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-serif text-white font-light mb-6">
            Contactez <br/><span className="italic text-gradient-corporate">MACOF Holding</span>
          </h1>
          <p className="text-xl text-white/80 font-sans font-light max-w-2xl leading-relaxed">
            Nos équipes dédiées sont à votre entière disposition pour répondre à vos demandes de partenariat, de cotation ou d'informations sur l'ensemble de nos pôles d'activités.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Informations de contact & Carte */}
          <div className="space-y-16">
            
            {/* Siège Social */}
            <div className="bg-white/[0.02] border border-white/10 p-8">
              <h3 className="text-xs font-sans tracking-[0.3em] text-primary uppercase mb-8">Siège Social & Direction Générale</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-serif text-xl mb-1">Siège MACOF Holding</p>
                    <p className="text-white/60 font-light text-sm leading-relaxed">
                      Manquepa en face de banc bleu<br/>
                      Kaloum, République de Guinée
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-primary w-5 h-5 flex-shrink-0" />
                  <p className="text-white font-light">+ 224 625 74 46 26 / 623 98 75 11</p>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-primary w-5 h-5 flex-shrink-0" />
                  <p className="text-white font-light">macofholding2018@gmail.com</p>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-primary mt-1 w-5 h-5 flex-shrink-0" />
                  <div className="text-white/60 font-light text-sm">
                    <p>Lundi - Vendredi : 08h00 - 18h00</p>
                    <p>Samedi : 09h00 - 13h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contacts par Filiales */}
            <div>
              <h3 className="text-2xl font-serif text-white mb-6">Lignes Directes Filiales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { n: "Immobilier", e: "immo@macofholding.com", t: "+224 620 00 00 01" },
                  { n: "Restauration", e: "seba@macofholding.com", t: "+224 620 00 00 02" },
                  { n: "Transit", e: "transit@macofholding.com", t: "+224 620 00 00 03" },
                  { n: "Mining", e: "mining@macofholding.com", t: "+224 620 00 00 04" },
                  { n: "Print", e: "print@macofholding.com", t: "+224 620 00 00 05" },
                  { n: "Fishing", e: "fishing@macofholding.com", t: "+224 620 00 00 06" },
                ].map(filiale => (
                  <div key={filiale.n} className="p-4 border border-white/5 bg-white/[0.01]">
                    <h4 className="text-white font-serif text-lg mb-2">{filiale.n}</h4>
                    <p className="text-blue-200 font-light text-xs mb-1">{filiale.e}</p>
                    <p className="text-white/60 font-light text-xs">{filiale.t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Carte Interactive (Google Maps iframe) */}
            <div className="h-80 w-full border border-white/10 relative bg-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.128795550267!2d-13.7153676!3d9.510001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzAnMzYuMCJOIDEzwrA0MicyNS4zIlc!5e0!3m2!1sfr!2s!4v1600000000000!5m2!1sfr!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Carte Siège MACOF"
              ></iframe>
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-4 py-2 border border-white/10">
                <span className="text-xs uppercase tracking-widest text-primary font-sans">Siège MACOF, Kaloum</span>
              </div>
            </div>

          </div>

          {/* Formulaire Global */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full z-0 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="bg-white p-8 md:p-12 border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-serif text-black mb-2">Envoyer un Message</h2>
                <p className="text-gray-500 font-light text-sm mb-8">Sélectionnez le département concerné pour un traitement rapide de votre demande.</p>
                <ContactForm filiale="Holding" titre="" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </AnimatedPage>
  );
}

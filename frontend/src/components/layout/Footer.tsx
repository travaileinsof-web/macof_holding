import { Link } from 'react-router-dom';

export function Footer() {
  // TODO: Récupérer ces infos depuis l'API /api/v1/pages/contact
  return (
    <footer className="bg-[#050b14] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <Link to="/" className="flex items-center mb-4">
            <img src="/logo-macof.png" alt="MACOF HOLDING" className="h-12 md:h-16 w-auto object-contain bg-white/5 p-2" />
          </Link>
          <p className="text-white/80 text-sm mt-4 max-w-xs font-light">
            L'excellence et le prestige à travers nos 6 filiales d'expertise.
          </p>
          <div className="mt-6 space-y-2 text-xs font-sans text-white/70">
            <p className="flex items-center gap-2">
              <span className="text-red-500">📞</span> +224 625 74 46 26 / 623 98 75 11
            </p>
            <p className="flex items-center gap-2">
              <span className="text-red-500">✉️</span> macofholding2018@gmail.com
            </p>
            <p className="flex items-start gap-2 max-w-[250px]">
              <span className="text-red-500">📍</span> Manquepa en face de banc bleu / Kaloum / République de Guinée
            </p>
          </div>
        </div>
        <div className="flex gap-8 text-sm text-white/80 font-light mt-8 md:mt-0">
          <div className="flex flex-col gap-3">
            <span className="text-white font-serif mb-2 uppercase tracking-widest text-xs">Filiales</span>
            <Link to="/immobilier" className="hover:text-white transition-colors">Immobilier</Link>
            <Link to="/restauration" className="hover:text-white transition-colors">Restauration</Link>
            <Link to="/transit" className="hover:text-white transition-colors">Transit</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-serif mb-2 uppercase tracking-widest text-xs">Informations</span>
            <Link to="/contact" className="hover:text-white transition-colors">Nous contacter</Link>
            <span className="text-white/50">Mentions Légales</span>
            <span className="text-white/50">Confidentialité</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 text-center text-white/50 text-xs font-light tracking-wider">
        &copy; {new Date().getFullYear()} MACOF Holding. Tous droits réservés.
      </div>
    </footer>
  );
}



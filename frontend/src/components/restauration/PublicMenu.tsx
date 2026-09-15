import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Plus, Check } from 'lucide-react';
import { api } from '../../lib/api';
import { useCart } from './CartContext';
import { getImageUrl, DEFAULT_FALLBACK_IMAGE } from '../../lib/utils';
import { toast } from 'sonner';

interface Product {
  id: number;
  nom: string;
  description?: string | null;
  categorie: string;
  prix_gnf: number;
  image_url?: string | null;
  disponible: boolean;
}

const CATEGORIES = [
  { id: 'all', label: 'Tout le Menu' },
  { id: 'plats', label: 'Plats & Spécialités' },
  { id: 'boulangerie', label: 'Boulangerie & Pâtisserie' },
  { id: 'boissons', label: 'Boissons & Cocktails' }
];

export default function PublicMenu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const { add } = useCart();
  const [addedItems, setAddedItems] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get('/api/v1/restauration/menu');
        if (response.data.success) {
          setProducts(response.data.data);
        }
      } catch (error) {
        console.error('Erreur chargement menu:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const handleAdd = (product: Product) => {
    add(product);
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    toast.success(`${product.nom} ajouté au panier`);
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.categorie === activeCategory);

  if (loading) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-[#0a0a0a]">
        <div className="w-12 h-12 border-4 border-white/10 border-t-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section id="menu-commande" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[100rem] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-white/80 font-sans">Menu Officiel SEBA</span>
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight">
              Nos Créations <span className="italic text-white/50">Gastronomiques</span>
            </h2>
            <p className="text-lg text-white/60 font-light max-w-2xl mx-auto font-sans">
              Explorez une carte pensée pour l'excellence, mêlant ingrédients nobles et 
              savoir-faire exceptionnel.
            </p>
          </motion.div>
        </div>

        {/* Categories Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-sans tracking-wide transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
                key={product.id}
                className="group relative flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-black/20">
                  <img
                    src={getImageUrl(product.image_url || DEFAULT_FALLBACK_IMAGE)}
                    alt={product.nom}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => { e.currentTarget.src = DEFAULT_FALLBACK_IMAGE; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/80 font-sans">
                      {product.categorie}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="text-xl font-serif text-white leading-tight">
                      {product.nom}
                    </h3>
                    <div className="text-right whitespace-nowrap">
                      <span className="text-lg font-sans font-light text-white">
                        {new Intl.NumberFormat('fr-FR').format(product.prix_gnf)} <span className="text-sm text-white/50">GNF</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-white/50 font-light font-sans line-clamp-2 mb-8 flex-grow">
                    {product.description || 'Une spécialité savoureuse, préparée avec des ingrédients soigneusement sélectionnés.'}
                  </p>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAdd(product)}
                    disabled={!product.disponible}
                    className={`w-full py-3.5 rounded-xl font-sans text-sm tracking-wide transition-all duration-300 flex items-center justify-center space-x-2 ${
                      !product.disponible
                        ? 'bg-white/5 text-white/30 cursor-not-allowed border border-white/5'
                        : addedItems[product.id]
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-white/10 text-white border border-white/10 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:border-white/30'
                    }`}
                  >
                    {addedItems[product.id] ? (
                      <>
                        <Check size={16} />
                        <span>Ajouté</span>
                      </>
                    ) : (
                      <>
                        <Plus size={16} className={!product.disponible ? '' : 'group-hover:rotate-90 transition-transform duration-300'} />
                        <span>{product.disponible ? 'Ajouter au panier' : 'Indisponible'}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <ShoppingBag className="mx-auto h-12 w-12 text-white/20 mb-4" />
            <h3 className="text-xl text-white font-serif mb-2">Aucun produit trouvé</h3>
            <p className="text-white/50 font-sans">Cette catégorie est actuellement vide.</p>
          </div>
        )}

      </div>
    </section>
  );
}

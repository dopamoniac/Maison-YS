import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-stone min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Details */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-6xl font-serif text-obsidian mb-8">Contactez<br/>La Maison</h1>
            <p className="text-obsidian/70 leading-relaxed mb-12 max-w-sm">
              Que vous souhaitiez vous renseigner sur une commande, explorer nos sélections cadeaux ou trouver votre signature olfactive, notre équipe est à votre service.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-gold mb-1">Téléphone</h3>
                  <a href="tel:+33626070850" className="text-obsidian font-serif text-xl hover:text-gold transition-colors">
                    +33 6 26 07 08 50
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={18} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-gold mb-1">Email</h3>
                  <a href="mailto:maisonys06@gmail.com" className="text-obsidian font-serif text-xl hover:text-gold transition-colors">
                    maisonys06@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-gold mb-1">Adresse</h3>
                  <p className="text-obsidian font-serif text-lg">
                    2 bd Raimbaldi<br/>
                    Nice, France 06000
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xs tracking-widest uppercase text-gold mb-3">Réseaux Sociaux</h3>
                <div className="flex gap-6">
                  <a
                    href="https://www.facebook.com/profile.php?id=61572084282268"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-obsidian font-serif text-lg hover:text-gold transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-obsidian p-8 md:p-12 text-stone"
          >
            <h2 className="text-2xl font-serif text-gold mb-8">Envoyer une Demande</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs tracking-widest uppercase text-stone/50 mb-2">Nom</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-stone/20 py-2 text-stone focus:outline-none focus:border-gold transition-colors"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-stone/50 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-stone/20 py-2 text-stone focus:outline-none focus:border-gold transition-colors"
                  placeholder="Votre adresse email"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-stone/50 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-stone/20 py-2 text-stone focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-gold text-obsidian tracking-[0.2em] uppercase text-sm mt-8 hover:bg-stone hover:text-obsidian transition-colors duration-500">
                Envoyer le Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

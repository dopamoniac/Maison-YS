import { motion } from "framer-motion";
import { Link } from "wouter";
import baccaratImage from "@assets/bakar_1776546438078.png";
import gridImage from "@assets/ok_1776546428398.jpeg";

export default function Gifting() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-obsidian min-h-screen text-stone pt-20">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img src={baccaratImage} alt="Cadeaux Maison YS" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gold tracking-[0.3em] uppercase text-sm mb-6"
          >
            L'Art de la Présentation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-8 leading-tight"
          >
            Le Don de<br/>la Pure Opulence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-stone/70 text-lg font-serif"
          >
            Extrait de Parfum — Le cadeau le plus rare qui soit.
          </motion.p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gold">La Collection Prestige</h2>
            <p className="text-stone/70 leading-relaxed mb-8">
              Un cadeau Maison YS est bien plus qu'un parfum. C'est un instant de révélation. Habillé de textures en marbre sombre et orné de notre emblème doré, chaque coffret élève l'acte d'offrir en un rituel inoubliable.
            </p>
            <p className="text-stone/70 leading-relaxed">
              Composez votre propre sélection ou choisissez parmi nos trilogies olfactives, soigneusement équilibrées pour explorer différentes facettes de notre univers parfumé.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-square bg-stone/5 p-8"
          >
            <img src={gridImage} alt="Sélection Maison YS" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-stone text-obsidian text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="w-px h-12 bg-gold/50 mx-auto mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Événements & Entreprises</h2>
            <p className="text-obsidian/70 leading-relaxed mb-10">
              Pour les grandes occasions et les cadeaux d'entreprise, Maison YS propose des services de sélection personnalisés. Contactez notre équipe pour organiser votre commande sur mesure.
            </p>
            <Link href="/contact">
              <span className="inline-block px-8 py-4 bg-obsidian text-stone font-sans tracking-[0.2em] uppercase text-sm hover:bg-gold hover:text-obsidian transition-colors duration-500 cursor-pointer">
                Nous Contacter
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

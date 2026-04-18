import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import coverImage from "@assets/couveture_fin_1776547222625.png";
import vanillaImage from "@assets/WhatsApp_Image_2026-04-18_at_21.08.14_1776548908841.jpeg";
import baccaratImage from "@assets/bakar_1776546438078.png";
import { fragrances } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const featuredFragrances = fragrances.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-obsidian">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={coverImage} alt="Maison YS Hero" className="w-full h-full object-cover" />
        </motion.div>

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-stone text-4xl md:text-6xl lg:text-7xl font-serif tracking-widest leading-tight mb-6 uppercase"
          >
            Rare par nature.<br/>
            <span className="text-gold italic normal-case">Raffiné avec intention.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 mt-12"
          >
            <Link href="/collection">
              <span className="px-8 py-4 bg-gold text-obsidian font-sans tracking-[0.2em] uppercase text-sm cursor-pointer hover:bg-white transition-colors duration-500">
                Découvrir la Collection
              </span>
            </Link>
            <Link href="/maison">
              <span className="px-8 py-4 border border-stone/30 text-stone font-sans tracking-[0.2em] uppercase text-sm cursor-pointer hover:bg-stone/10 transition-colors duration-500">
                Explorer Maison YS
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-32 bg-stone w-full">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <div className="w-px h-16 bg-gold/50 mb-12"></div>
            <h2 className="text-obsidian text-3xl md:text-5xl font-serif leading-relaxed mb-8">
              « L'art de l'invisible. Le don de la présence. »
            </h2>
            <p className="text-obsidian/70 tracking-widest uppercase text-sm leading-loose max-w-xl">
              Maison YS représente le summum de l'artisanat olfactif. Nous tissons la mémoire, la matière brute et l'émotion en extraits de parfum qui définissent celui qui les porte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 bg-obsidian text-stone w-full">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">La Sélection</h2>
              <p className="text-stone/60 tracking-widest uppercase text-sm">Expressions raffinées de parfumerie distinguée</p>
            </div>
            <Link href="/collection">
              <span className="group flex items-center gap-4 text-xs tracking-widest uppercase hover:text-gold transition-colors cursor-pointer border-b border-stone/20 pb-2">
                Voir tout <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredFragrances.map((fragrance, i) => (
              <motion.div
                key={fragrance.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <Link href={`/product/${encodeURIComponent(fragrance.name)}`}>
                  <div className="block h-full">
                    <div className="aspect-[3/4] overflow-hidden bg-stone/5 mb-6 relative">
                      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <img
                        src={fragrance.imageKey === "baccarat" ? baccaratImage : vanillaImage}
                        alt={fragrance.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <h3 className="font-serif text-2xl group-hover:text-gold transition-colors">{fragrance.name}</h3>
                        <span className="text-xs tracking-widest text-stone/50">{fragrance.volume}</span>
                      </div>
                      <p className="text-xs uppercase tracking-widest text-gold/80">{fragrance.family}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Editorial */}
      <section className="w-full relative h-[80vh] bg-stone overflow-hidden">
        <div className="absolute inset-0 md:w-1/2 ml-auto h-full">
          <img src={vanillaImage} alt="Vanilla Powder" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone via-stone/90 to-transparent md:to-transparent" />

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center max-w-7xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-xl"
          >
            <h2 className="text-obsidian text-4xl md:text-6xl font-serif leading-tight mb-8">
              Un voile soyeux de <span className="italic">vanille chaude</span>, doux comme le souvenir.
            </h2>
            <Link href="/product/Vanilla%20Powder">
              <span className="inline-flex items-center gap-4 text-xs tracking-widest uppercase text-obsidian hover:text-gold transition-colors cursor-pointer border-b border-obsidian/20 pb-2">
                Découvrir Vanilla Powder <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gifting Section */}
      <section className="py-32 bg-obsidian text-stone w-full">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-gold text-sm tracking-[0.3em] uppercase mb-6">Sélections Prestige</h2>
              <h3 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Le Don de<br/>la Pure Opulence</h3>
              <p className="text-stone/70 leading-relaxed mb-12 max-w-md">
                Découvrez les coffrets cadeaux Maison YS. Habillés de textures en marbre sombre et signés de notre sceau doré, chaque écrin renferme un voyage vers la perfection sensorielle.
              </p>
              <Link href="/gifting">
                <span className="px-8 py-4 border border-gold/50 text-gold font-sans tracking-[0.2em] uppercase text-sm cursor-pointer hover:bg-gold hover:text-obsidian transition-colors duration-500 inline-block">
                  Voir les Cadeaux
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gold/10 translate-x-4 translate-y-4"></div>
              <img src={baccaratImage} alt="Coffret Cadeau Maison YS" className="relative z-10 w-full h-full object-cover object-center border border-white/5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 bg-stone text-obsidian text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <div className="w-px h-16 bg-gold/50 mb-12"></div>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-relaxed">
              Votre signature olfactive vous attend.
            </h2>
            <Link href="/collection">
              <span className="px-10 py-4 bg-obsidian text-stone font-sans tracking-[0.2em] uppercase text-sm cursor-pointer hover:bg-gold hover:text-obsidian transition-colors duration-500 inline-block">
                Explorer la Collection
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import { fragrances } from "@/lib/data";
import vanillaImage from "@assets/WhatsApp_Image_2026-04-18_at_21.08.14_1776548908841.jpeg";
import baccaratImage from "@assets/bakar_1776546438078.png";

export default function Collection() {
  return (
    <div className="w-full bg-stone min-h-screen pt-32 pb-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <div className="w-px h-16 bg-obsidian/20 mb-8"></div>
          <h1 className="text-obsidian text-5xl md:text-7xl font-serif mb-6">La Collection</h1>
          <p className="text-obsidian/60 tracking-[0.2em] uppercase text-sm max-w-xl leading-relaxed">
            Extrait de Parfum — élaboré pour ceux qui comprennent la différence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {fragrances.map((fragrance, i) => (
            <motion.div
              key={fragrance.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              <Link href={`/product/${encodeURIComponent(fragrance.name)}`}>
                <div className="block cursor-pointer">
                  <div className="aspect-[4/5] bg-obsidian overflow-hidden relative mb-8">
                    <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                    <img
                      src={fragrance.imageKey === "baccarat" ? baccaratImage : vanillaImage}
                      alt={fragrance.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />
                  </div>
                  <div className="text-center flex flex-col items-center gap-3">
                    <p className="text-xs uppercase tracking-widest text-obsidian/50">{fragrance.family}</p>
                    <h2 className="text-2xl font-serif text-obsidian group-hover:text-gold transition-colors">{fragrance.name}</h2>
                    <p className="text-xs tracking-widest text-obsidian/70">{fragrance.volume} — Extrait de Parfum</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

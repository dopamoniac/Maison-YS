import { useParams } from "wouter";
import { motion } from "framer-motion";
import { fragrances } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import vanillaImage from "@assets/WhatsApp_Image_2026-04-18_at_21.08.14_1776548908841.jpeg";
import baccaratImage from "@assets/bakar_1776546438078.png";

export default function Product() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name || "");
  const fragrance = fragrances.find(f => f.name === decodedName) || fragrances[0];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const otherFragrances = fragrances.filter(f => f.name !== fragrance.name).slice(0, 3);
  const productImage = fragrance.imageKey === "baccarat" ? baccaratImage : vanillaImage;

  return (
    <div className="w-full bg-stone min-h-screen pt-24">
      {/* Product Hero */}
      <section className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] bg-obsidian/5 overflow-hidden"
          >
            <img
              src={productImage}
              alt={fragrance.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className="flex flex-col items-start max-w-lg"
          >
            <div className="w-px h-12 bg-obsidian/20 mb-8"></div>
            <h1 className="text-4xl md:text-6xl font-serif text-obsidian mb-4">{fragrance.name}</h1>
            <p className="text-obsidian/60 tracking-[0.2em] uppercase text-sm mb-2">Extrait de Parfum</p>
            <p className="text-obsidian/40 tracking-[0.1em] uppercase text-xs mb-8">{fragrance.volume} | {fragrance.family}</p>

            <p className="text-obsidian/80 leading-relaxed mb-12 text-lg italic font-serif">
              « {fragrance.description} »
            </p>

            <Link href="/contact">
              <button className="w-full py-4 bg-obsidian text-stone tracking-[0.2em] uppercase text-sm hover:bg-gold hover:text-obsidian transition-colors duration-500 cursor-pointer">
                Nous Contacter
              </button>
            </Link>

            <div className="w-full h-px bg-obsidian/10 my-12"></div>

            <div className="flex flex-col gap-4 w-full text-sm text-obsidian/70">
              <div className="flex justify-between py-2 border-b border-obsidian/5">
                <span className="tracking-widest uppercase text-xs">Famille</span>
                <span>{fragrance.family}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-obsidian/5">
                <span className="tracking-widest uppercase text-xs">Concentration</span>
                <span>Extrait de Parfum</span>
              </div>
              <div className="flex justify-between py-2 border-b border-obsidian/5">
                <span className="tracking-widest uppercase text-xs">Volume</span>
                <span>{fragrance.volume}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-obsidian/5">
                <span className="tracking-widest uppercase text-xs">Disponible chez</span>
                <span>Maison YS — Nice</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* You May Also Love */}
      <section className="bg-obsidian text-stone py-24 w-full">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gold mb-4">Vous aimerez aussi</h2>
            <p className="text-stone/50 tracking-widest uppercase text-xs">Expressions de la même maison</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherFragrances.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer text-center"
              >
                <Link href={`/product/${encodeURIComponent(f.name)}`}>
                  <div className="block">
                    <div className="aspect-square bg-stone/5 mb-6 overflow-hidden">
                      <img
                        src={f.imageKey === "baccarat" ? baccaratImage : vanillaImage}
                        alt={f.name}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <h3 className="font-serif text-xl group-hover:text-gold transition-colors mb-1">{f.name}</h3>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:text-gold transition-all mb-1" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-stone/50">{f.family}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

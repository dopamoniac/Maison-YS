import { motion } from "framer-motion";
import coverImage from "@assets/couveture_fin_1776547222625.png";
import vanillaImage from "@assets/WhatsApp_Image_2026-04-18_at_21.08.14_1776548908841.jpeg";

export default function Maison() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-stone min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-obsidian/40 z-10" />
          <img src={coverImage} alt="Maison YS Héritage" className="w-full h-full object-cover" />
        </motion.div>

        <div className="relative z-20 text-center text-stone px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            La Maison
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="tracking-[0.3em] uppercase text-sm"
          >
            Un héritage de raffinement sensoriel
          </motion.p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 container mx-auto px-6 max-w-4xl text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="w-px h-16 bg-gold/50 mx-auto mb-12"></div>
          <h2 className="text-3xl md:text-5xl font-serif text-obsidian leading-tight mb-12">
            Une sélection des parfums les plus désirables au monde.
          </h2>
          <div className="space-y-8 text-obsidian/70 leading-relaxed font-serif text-lg md:text-xl">
            <p>
              Maison YS est née d'une vision singulière : traiter le parfum non pas comme un accessoire, mais comme l'expression la plus intime de l'identité.
            </p>
            <p>
              Nous sélectionnons les matières premières les plus rares — des forêts d'oud ancestrales aux champs de jasmin baignés de soleil — pour créer des compositions qui s'imposent sans jamais s'imposer.
            </p>
            <p>
              Chaque flacon portant notre sceau doré est un Extrait de Parfum, formulé à la concentration la plus haute pour une présence durable et inoubliable.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Visual Break */}
      <section className="h-[60vh] bg-obsidian relative">
        <div className="absolute inset-0 md:w-2/3 mx-auto h-full">
          <img src={vanillaImage} alt="Savoir-faire" className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian" />

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
          <h3 className="text-stone text-4xl md:text-5xl font-serif italic text-center">
            « La signature invisible qui perdure longtemps après votre passage. »
          </h3>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-stone">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          >
            {[
              { title: "Rareté", text: "Chaque fragrance de notre collection est sélectionnée pour son caractère unique et son prestige inégalé." },
              { title: "Artisanat", text: "Des Extraits de Parfum formulés à la concentration maximale pour une expérience sensorielle d'exception." },
              { title: "Excellence", text: "Disponible à Nice, Maison YS apporte la haute parfumerie internationale au cœur de la Côte d'Azur." }
            ].map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-px h-12 bg-gold/50 mb-8"></div>
                <h3 className="font-serif text-2xl text-obsidian mb-4">{val.title}</h3>
                <p className="text-obsidian/60 leading-relaxed text-sm">{val.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

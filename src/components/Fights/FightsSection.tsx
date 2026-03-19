import { motion } from "framer-motion";
import { Swords } from "lucide-react";
import { FightCard } from "./FightCard";
import { fights } from "../../data/fights";

export function FightsSection() {
  const mainEvent = fights.find((f) => f.isMainEvent);
  const regularFights = fights.filter((f) => !f.isMainEvent);

  return (
    <section
      id="fights"
      className="relative py-16 sm:py-24 overflow-hidden flex flex-col items-center"
      style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="absolute inset-0 bg-velada-black" aria-hidden>
        <div className="absolute inset-0 bg-grid-subtle" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(201,162,39,0.04)_0%,transparent_100%)]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px velada-divider" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col items-center">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-20 sm:mb-24"
        >
          <div
            className="flex items-center justify-center gap-3 mb-6"
            style={{
              paddingBottom: "0.3rem",
            }}
          >
            <Swords className="w-5 h-5 text-velada-gold/60" />
            <span className="section-badge">Cartelera Oficial</span>
            <Swords className="w-5 h-5 text-velada-gold/60 scale-x-[-1]" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,8vw,5rem)] text-white leading-none mb-5">
            PELEA POR <span className="text-gold-gradient">LA GLORIA</span>
          </h2>
          <p className="font-body text-white/40 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-center">
            10 combates épicos entre los mejores creadores de habla hispana
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex-1 max-w-[100px] h-px bg-gradient-to-l from-velada-gold/30 to-transparent" />
            <div className="w-1.5 h-1.5 rotate-45 bg-velada-gold/50" />
            <div className="flex-1 max-w-[100px] h-px bg-gradient-to-r from-velada-gold/30 to-transparent" />
          </div>
        </motion.header>

        {/* Main Event */}
        {mainEvent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
            style={{ marginBottom: "2.5rem" }}
          >
            <FightCard fight={mainEvent} index={0} />
          </motion.div>
        )}

        {/* Divider */}
        <div
          className="flex items-center gap-4 w-full mb-6"
          style={{ margin: "1.5rem 0 0.5rem 0" }}
        >
          <div className="flex-1 h-px bg-gradient-to-l from-velada-gold/20 to-transparent" />
          <span className="font-ui text-[9px] font-bold tracking-[0.3em] uppercase text-velada-gold/40 px-2">
            Cartelera completa
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-velada-gold/20 to-transparent" />
        </div>

        {/* Regular fights — 3 col, generous gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 w-full">
          {regularFights.map((fight, index) => (
            <FightCard key={fight.id} fight={fight} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-16"
          style={{ paddingTop: "0.5rem" }}
        >
          <button
            className="group relative overflow-hidden px-10 py-4 border border-velada-gold/20 hover:border-velada-gold/50 text-velada-gold/60 hover:text-velada-gold font-heading font-bold text-sm tracking-widest transition-all duration-300"
            style={{
              boxShadow: "0 0 30px rgba(200,153,42,0.4)",
              padding: "0.1rem 0.2rem",
            }}
            type="button"
          >
            <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-gradient-to-r from-transparent via-velada-gold/8 to-transparent transition-transform duration-700 skew-x-12" />
            <span className="relative z-10">VER PELEAS ANTERIORES</span>
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px velada-divider" />
    </section>
  );
}

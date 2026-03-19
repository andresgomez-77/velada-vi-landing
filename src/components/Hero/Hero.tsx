import { motion, type Variants } from "framer-motion";
import { Ticket } from "lucide-react";
import { Countdown } from "../Countdown/Countdown";
import { eventInfo } from "../../data/fights";

const EVENT_DATE = new Date("2026-07-25T20:00:00+02:00");

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const STATS = [
  { value: "+60,000", label: "Espectadores" },
  { value: "10", label: "Combates" },
  { value: "Millones", label: "Streaming" },
] as const;

const META = [
  { icon: "📅", text: "25 Julio 2026", gold: true },
  { icon: "⏰", text: "20:00H CET", gold: true },
  { icon: "📍", text: "Estadio La Cartuja, Sevilla", gold: false },
] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 sm:px-8"
      style={{ paddingTop: "9rem", paddingBottom: "5rem" }}
    >
      {/* ── Layered background ── */}
      <div className="absolute inset-0 bg-velada-black" aria-hidden>
        {/* Central gold radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(200,153,42,0.11)_0%,transparent_65%)]" />
        {/* Bottom bronze hint */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(160,82,26,0.07)_0%,transparent_60%)]" />

        {/* Diagonal light shafts */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.12]">
          <div className="absolute top-0 bottom-0 left-[38%] w-px bg-gradient-to-b from-transparent via-velada-gold to-transparent rotate-[8deg]" />
          <div className="absolute top-0 bottom-0 left-[62%] w-px bg-gradient-to-b from-transparent via-velada-gold/70 to-transparent rotate-[-8deg]" />
        </div>

        {/* Fine grid */}
        <div className="absolute inset-0 bg-grid-subtle opacity-50" />

        {/* Bottom dark fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-velada-black to-transparent" />
      </div>

      {/* ── Content ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto text-center px-6 sm:px-10"
      >
        {/* Edition badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-velada-gold/30 bg-velada-gold/6 font-ui text-[11px] font-bold tracking-[4px] uppercase text-velada-gold-light">
            <span className="w-[5px] h-[5px] rounded-full bg-velada-gold animate-pulse flex-shrink-0" />
            Edición VI · Evento Especial
          </span>
        </motion.div>

        {/* Main title */}
        <motion.div variants={fadeUp} className="mb-6">
          <h1 className="font-display leading-none tracking-wide">
            <span
              className="block text-[clamp(72px,14vw,128px)] text-white"
              style={{
                textShadow:
                  "0 0 80px rgba(200,153,42,0.14), 0 0 160px rgba(200,153,42,0.06)",
              }}
            >
              LA VELADA
            </span>
            <span className="block text-[clamp(44px,9vw,80px)] text-gold-gradient mt-1">
              DEL AÑO VI
            </span>
          </h1>
        </motion.div>

        {/* Ornamental divider */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="flex-1 max-w-[130px] h-px bg-gradient-to-l from-velada-gold/50 to-transparent" />
          <div
            className="w-3 h-3 bg-velada-gold rotate-45 flex-shrink-0"
            style={{ boxShadow: "0 0 14px rgba(200,153,42,0.8)" }}
          />
          <div className="flex-1 max-w-[130px] h-px bg-gradient-to-r from-velada-gold/50 to-transparent" />
        </motion.div>

        {/* Date / Location meta row */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-x-0 gap-y-3 mb-12"
        >
          {META.map((m, i) => (
            <div key={m.text} className="flex items-center">
              <div
                className="flex items-center gap-2 px-5 font-ui text-[13px] font-semibold tracking-[2px] uppercase"
                style={{ paddingBottom: "0.5rem", paddingTop: "0.5rem" }}
              >
                <span className="text-velada-gold/60 text-[12px]">
                  {m.icon}
                </span>
                <span
                  className={
                    m.gold ? "text-velada-gold-light" : "text-white/65"
                  }
                >
                  {m.text}
                </span>
              </div>
              {i < META.length - 1 && (
                <div className="w-1 h-1 bg-velada-gold/25 rotate-45 hidden sm:block" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Countdown */}
        <motion.div variants={fadeUp} className="mb-14">
          <Countdown targetDate={EVENT_DATE} />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          style={{ paddingBottom: "0.5rem", paddingTop: "0.5rem" }}
        >
          {eventInfo.ticketsSoldOut ? (
            <div
              className="flex items-center gap-3 px-9 py-4 bg-velada-dark/40 border border-velada-gold/10 text-velada-gold/25 font-heading text-[15px] font-bold tracking-[3px] uppercase cursor-not-allowed"
              style={{
                background: "rgba(200,153,42,0.05)",
                padding: "1rem 2.25rem",
              }}
            >
              <Ticket className="w-5 h-5 flex-shrink-0" />
              Entradas Agotadas
            </div>
          ) : (
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden flex items-center gap-3 px-9 py-4 bg-velada-gold text-velada-black font-heading text-[15px] font-bold tracking-[3px] uppercase shadow-gold hover:shadow-gold-lg hover:bg-velada-gold-bright transition-all duration-300"
              style={{
                boxShadow: "0 0 30px rgba(200,153,42,0.4)",
                padding: "1rem 2.25rem",
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
              <Ticket className="w-5 h-5 relative z-10 flex-shrink-0" />
              <span className="relative z-10">Comprar Entradas</span>
            </motion.a>
          )}

          <motion.a
            href="#fights"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden flex items-center gap-3 px-9 py-4 bg-transparent border border-white/15 hover:border-velada-gold/40 text-white/65 hover:text-white font-heading text-[15px] font-bold tracking-[3px] uppercase transition-all duration-300"
            style={{
              padding: "1rem 2.25rem",
            }}
          >
            ⚔ Ver Peleas
          </motion.a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center w-full"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 px-7 py-3 bg-velada-gold/3 border border-velada-gold/10"
              style={{ padding: "0.75rem 1.75rem" }}
            >
              <span className="font-heading text-[18px] font-bold text-velada-gold-light tracking-wide">
                {s.value}
              </span>
              <span className="font-ui text-[11px] font-semibold tracking-[2px] uppercase text-white/30">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden
      >
        <motion.a
          href="#fights"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/20 hover:text-velada-gold/50 transition-colors"
        >
          <span className="font-ui text-[9px] tracking-[4px] uppercase">
            Scroll
          </span>
          <div className="w-px h-6 bg-gradient-to-b from-velada-gold/30 to-transparent" />
        </motion.a>
      </motion.div>
    </section>
  );
}

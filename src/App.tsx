import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Zap } from "lucide-react";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { FightsSection } from "./components/Fights/FightsSection";
import { StreamSection } from "./components/Stream/StreamSection";
import { CommentatorsSection } from "./components/Commentators/CommentatorsSection";
import { SponsorsSection } from "./components/Sponsors/SponsorsSection";
import { Footer } from "./components/Footer/Footer";
import { IntroScreen } from "./components/Intro/IntroScreen";
import { FightersGallery } from "./components/Fighters/FightersGallery";

// ─── Types ────────────────────────────────────────────────────────────────────

interface InfoCard {
  readonly icon: typeof Calendar;
  readonly label: string;
  readonly value: string;
  readonly sub: string;
  readonly accent: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const INFO_CARDS: InfoCard[] = [
  {
    icon: Calendar,
    label: "Fecha",
    value: "25 Julio 2026",
    sub: "20:00H CET · Hora peninsular",
    accent: "from-velada-gold/10 to-transparent",
  },
  {
    icon: MapPin,
    label: "Lugar",
    value: "La Cartuja",
    sub: "Estadio de La Cartuja, Sevilla",
    accent: "from-velada-bronze/10 to-transparent",
  },
  {
    icon: Users,
    label: "Capacidad",
    value: "+60,000",
    sub: "Espectadores en vivo",
    accent: "from-velada-gold/10 to-transparent",
  },
  {
    icon: Zap,
    label: "Peleas",
    value: "10 Combates",
    sub: "Incluyendo el Main Event",
    accent: "from-velada-bronze/10 to-transparent",
  },
];

// ─── Event Info Section ───────────────────────────────────────────────────────

function EventInfoSection() {
  return (
    <section
      id="info"
      className="relative py-16 sm:py-24 overflow-hidden w-full flex flex-col items-center"
      style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-velada-black" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(201,162,39,0.05)_0%,transparent_100%)]" />
        <div className="absolute inset-0 bg-grid-subtle opacity-40" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px velada-divider" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="section-badge mb-5 inline-flex"
            style={{
              paddingBottom: "0.3rem",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-velada-gold" />
            Información del Evento
          </span>
          <h2 className="font-display text-[clamp(2rem,6vw,4rem)] text-white leading-none mt-4">
            TODO LO QUE{" "}
            <span className="text-gold-gradient">NECESITAS SABER</span>
          </h2>
        </motion.header>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {INFO_CARDS.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative bg-velada-card border border-velada-gold/10 hover:border-velada-gold/30 rounded-2xl overflow-hidden transition-all duration-300"
              style={{ padding: "2rem" }}
            >
              {/* BG gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`}
              />
              {/* Top shine */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-velada-gold/0 group-hover:via-velada-gold/25 to-transparent transition-all duration-400" />

              {/* Icon box */}
              <div className="relative z-10 w-11 h-11 rounded-xl bg-velada-dark border border-velada-gold/15 group-hover:border-velada-gold/35 flex items-center justify-center mb-5 transition-colors duration-300">
                <card.icon className="w-5 h-5 text-velada-gold/60 group-hover:text-velada-gold transition-colors duration-300" />
              </div>

              {/* Label */}
              <p className="relative z-10 font-ui text-velada-gold/45 text-[10px] tracking-[0.25em] uppercase font-semibold mb-2">
                {card.label}
              </p>

              {/* Value */}
              <p className="relative z-10 font-heading font-bold text-white text-lg sm:text-xl leading-snug mb-1.5 group-hover:text-velada-gold/90 transition-colors duration-300">
                {card.value}
              </p>

              {/* Sub */}
              <p className="relative z-10 font-body text-white/35 text-sm leading-snug">
                {card.sub}
              </p>

              {/* Shimmer sweep */}
              <div className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-gradient-to-r from-transparent via-velada-gold/5 to-transparent transition-transform duration-700 skew-x-12 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center font-ui text-white/20 text-xs tracking-widest uppercase mt-10"
          style={{ paddingTop: "0.5rem" }}
        >
          Información sujeta a cambios · Sigue las redes oficiales para
          novedades
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px velada-divider" />
    </section>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleEnterEvent = () => setShowIntro(false);

  return (
    <div className="w-full min-h-screen bg-velada-black overflow-x-hidden">
      {/* Intro fullscreen overlay */}
      <IntroScreen onEnter={handleEnterEvent} />

      {/* Main content — fades in after intro exits */}
      <div
        className={`w-full transition-opacity duration-700 ${
          showIntro
            ? "opacity-0 pointer-events-none overflow-hidden h-0"
            : "opacity-100"
        }`}
      >
        <Navbar />

        <main className="w-full">
          <Hero />
          <FightersGallery />
          <FightsSection />
          <StreamSection />
          <CommentatorsSection />
          <EventInfoSection />
          <SponsorsSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;

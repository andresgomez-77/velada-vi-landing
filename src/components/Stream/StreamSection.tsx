import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Twitch, Youtube, Music2, Play, Radio } from "lucide-react";

type Platform = "twitch" | "youtube" | "tiktok";

interface PlatformConfig {
  readonly id: Platform;
  readonly name: string;
  readonly icon: typeof Twitch;
  readonly color: string;
  readonly handle: string;
}

const PLATFORMS: PlatformConfig[] = [
  {
    id: "twitch",
    name: "Twitch",
    icon: Twitch,
    color: "#9146ff",
    handle: "Twitch.tv/ibai",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: Youtube,
    color: "#ff0000",
    handle: "YouTube/@IbaiLlanos",
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: Music2,
    color: "#00f2ea",
    handle: "TikTok/@ibaillanos",
  },
];

const EMBEDS: Partial<Record<Platform, string>> = {
  twitch: "https://player.twitch.tv/?channel=ibai&parent=localhost&muted=true",
  youtube:
    "https://www.youtube.com/embed/live_stream?channel=UCv5K8yPcdS1tS4Dqcls1hvQ",
};

export function StreamSection() {
  const [activePlatform, setActivePlatform] = useState<Platform>("twitch");
  const activePlatformConfig = PLATFORMS.find((p) => p.id === activePlatform)!;

  return (
    <section
      id="stream"
      className="relative overflow-hidden flex flex-col items-center"
      style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-velada-dark/25" aria-hidden>
        <div className="absolute inset-0 bg-grid-subtle" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(201,162,39,0.05)_0%,transparent_100%)]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px velada-divider" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-12"
        >
          <div
            className="flex items-center justify-center gap-3 mb-5"
            style={{
              paddingBottom: "0.3rem",
            }}
          >
            <Radio className="w-4 h-4 text-velada-gold/60 animate-pulse" />
            <span className="section-badge">Transmisión en Vivo</span>
          </div>

          <h2 className="font-display text-[clamp(2.5rem,8vw,5rem)] text-white leading-none mb-4">
            EN <span className="text-gold-gradient">VIVO</span>
          </h2>
          <p
            className="font-body text-white/40 text-base sm:text-lg"
            style={{ maxWidth: "36rem", margin: "0 auto", textAlign: "center" }}
          >
            Elige tu plataforma favorita para seguir el evento en directo
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex-1 max-w-[80px] h-px bg-gradient-to-l from-velada-gold/30 to-transparent" />
            <div className="w-1.5 h-1.5 rotate-45 bg-velada-gold/50" />
            <div className="flex-1 max-w-[80px] h-px bg-gradient-to-r from-velada-gold/30 to-transparent" />
          </div>
        </motion.header>

        {/* Platform tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex justify-center mb-8"
          role="tablist"
          aria-label="Plataformas de streaming"
          style={{ paddingBottom: "0.5rem", paddingTop: "0.5rem" }}
        >
          <div className="inline-flex bg-velada-dark/70 border border-velada-gold/15 rounded-xl p-1.5 gap-1">
            {PLATFORMS.map((platform) => {
              const isActive = activePlatform === platform.id;
              return (
                <button
                  key={platform.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActivePlatform(platform.id)}
                  className={`relative flex items-center gap-2.5 px-5 sm:px-6 py-3 rounded-lg font-ui font-semibold text-sm tracking-wide transition-all duration-300 min-w-[100px] sm:min-w-[120px] justify-center ${
                    isActive
                      ? "bg-velada-gold text-velada-black shadow-gold-sm"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <platform.icon className="w-4 h-4 flex-shrink-0" />
                  <span>{platform.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Video embed container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlatform}
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-velada-gold/25 via-velada-gold/10 to-velada-bronze/10 pointer-events-none" />

            {/* Video wrapper */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-velada-dark border border-velada-gold/20 shadow-[0_0_60px_rgba(201,162,39,0.1)]">
              {/* Top shine */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-velada-gold/40 to-transparent z-10" />

              {activePlatform === "tiktok" ? (
                <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-velada-dark">
                  <div className="relative">
                    <Music2
                      className="w-16 h-16"
                      style={{ color: "#00f2ea" }}
                    />
                    <div
                      className="absolute inset-0 blur-2xl opacity-40"
                      style={{ background: "#00f2ea" }}
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-ui font-semibold text-white/70 text-lg mb-1">
                      TikTok Live
                    </p>
                    <p className="text-white/40 text-sm">
                      {activePlatformConfig.handle}
                    </p>
                  </div>
                  <a
                    href="https://www.tiktok.com/@ibaillanos/live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-8 py-3.5 font-heading font-bold text-black text-sm tracking-widest rounded-xl hover:scale-105 transition-transform"
                    style={{ background: "#00f2ea" }}
                    aria-label="Abrir TikTok Live"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    ABRIR TIKTOK
                  </a>
                </div>
              ) : (
                <iframe
                  src={EMBEDS[activePlatform]}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Stream en ${activePlatformConfig.name}`}
                  loading="lazy"
                />
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Live status pill */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-6"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-velada-dark/60 border border-velada-gold/10 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <span className="font-ui text-white/50 text-sm font-semibold">
              {activePlatformConfig.handle}
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px velada-divider" />
    </section>
  );
}

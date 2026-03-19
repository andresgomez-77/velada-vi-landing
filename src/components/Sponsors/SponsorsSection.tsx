import { motion } from "framer-motion";
import { Award } from "lucide-react";

type SponsorTier = "platinum" | "gold" | "silver";

interface Sponsor {
  readonly name: string;
  readonly tier: SponsorTier;
  readonly tagline: string;
}

const SPONSORS: Sponsor[] = [
  { name: "Red Bull", tier: "platinum", tagline: "Bebida oficial" },
  { name: "Movistar", tier: "platinum", tagline: "Telecomunicaciones" },
  { name: "InfoJobs", tier: "gold", tagline: "Empleo y talento" },
  { name: "El Corte Inglés", tier: "gold", tagline: "Retail oficial" },
  { name: "Spotify", tier: "silver", tagline: "Música oficial" },
  { name: "Samsung", tier: "silver", tagline: "Tecnología" },
];

const TIER_CONFIG: Record<
  SponsorTier,
  { text: string; sub: string; size: string; badge: string }
> = {
  platinum: {
    text: "text-white/75 hover:text-white",
    sub: "text-velada-gold/35 group-hover:text-velada-gold/65",
    size: "text-3xl sm:text-4xl",
    badge: "bg-velada-gold/10 border-velada-gold/30 text-velada-gold/70",
  },
  gold: {
    text: "text-white/45 hover:text-velada-gold/80",
    sub: "text-white/15 group-hover:text-velada-gold/35",
    size: "text-2xl sm:text-3xl",
    badge: "bg-velada-gold/5 border-velada-gold/15 text-velada-gold/45",
  },
  silver: {
    text: "text-white/22 hover:text-white/55",
    sub: "text-white/10 group-hover:text-white/30",
    size: "text-xl sm:text-2xl",
    badge: "bg-white/3 border-white/10 text-white/25",
  },
};

const TIER_LABELS: Record<SponsorTier, string> = {
  platinum: "Platino",
  gold: "Oro",
  silver: "Plata",
};

export function SponsorsSection() {
  const tiers: SponsorTier[] = ["platinum", "gold", "silver"];

  return (
    <section
      className="relative py-16 sm:py-20 overflow-hidden flex flex-col items-center"
      style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="absolute inset-0 bg-velada-dark/20" aria-hidden>
        <div className="absolute inset-0 bg-grid-subtle opacity-40" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px velada-divider" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="flex items-center justify-center gap-3 mb-5"
            style={{
              paddingBottom: "0.3rem",
            }}
          >
            <Award className="w-4 h-4 text-velada-gold/50" />
            <span className="section-badge">Patrocinadores</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,6vw,4rem)] text-white leading-none">
            MARCAS <span className="text-gold-gradient">OFICIALES</span>
          </h2>
          <p className="font-ui text-white/30 text-xs tracking-[0.3em] uppercase mt-3">
            Quienes hacen posible el evento más grande del año
          </p>
          <div className="flex items-center justify-center gap-4 mt-7">
            <div className="flex-1 max-w-[80px] h-px bg-gradient-to-l from-velada-gold/25 to-transparent" />
            <div className="w-1.5 h-1.5 rotate-45 bg-velada-gold/40" />
            <div className="flex-1 max-w-[80px] h-px bg-gradient-to-r from-velada-gold/25 to-transparent" />
          </div>
        </motion.header>

        {/* All tiers stacked with clear hierarchy */}
        <div className="flex flex-col gap-1">
          {tiers.map((tier, tierIndex) => {
            const sponsors = SPONSORS.filter((s) => s.tier === tier);
            const config = TIER_CONFIG[tier];

            return (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: tierIndex * 0.1, duration: 0.55 }}
                className="flex flex-col items-center gap-2"
                style={{ paddingTop: "0.5rem " }}
              >
                {/* Tier badge */}
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 border rounded-full font-ui font-bold text-[9px] tracking-[0.3em] uppercase ${config.badge}`}
                  style={{ padding: "0px 4px" }}
                >
                  <span className="w-1 h-1 rounded-full bg-current" />
                  {TIER_LABELS[tier]}
                </span>

                {/* Sponsors in a row — flex-row with wrap */}
                <div className="flex flex-row flex-wrap items-center justify-center gap-x-16 gap-y-6">
                  {sponsors.map((sponsor) => (
                    <div
                      key={sponsor.name}
                      className="group flex flex-col items-center gap-1.5 cursor-default"
                    >
                      <span
                        className={`font-heading font-bold tracking-wide transition-colors duration-300 ${config.text} ${config.size}`}
                      >
                        {sponsor.name}
                      </span>
                      <span
                        className={`font-ui text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 ${config.sub}`}
                      >
                        {sponsor.tagline}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider between tiers */}
                {tierIndex < tiers.length - 1 && (
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-velada-gold/12 to-transparent mt-2" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px velada-divider" />
    </section>
  );
}

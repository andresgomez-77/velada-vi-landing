import { motion } from "framer-motion";
import type { Fight } from "../../data/fights";

interface FightCardProps {
  readonly fight: Fight;
  readonly index: number;
}

const AVATAR_PALETTES = [
  { bg: "#1a0f2e", ring: "#7c3aed", text: "#c4b5fd" },
  { bg: "#1a1000", ring: "#d97706", text: "#fcd34d" },
  { bg: "#0a1f1a", ring: "#059669", text: "#6ee7b7" },
  { bg: "#1f0a0a", ring: "#dc2626", text: "#fca5a5" },
  { bg: "#0a1520", ring: "#2563eb", text: "#93c5fd" },
  { bg: "#1a0a1f", ring: "#db2777", text: "#f9a8d4" },
  { bg: "#0f1a0a", ring: "#16a34a", text: "#86efac" },
  { bg: "#1a1500", ring: "#ca8a04", text: "#fde047" },
];

const getPalette = (name: string) =>
  AVATAR_PALETTES[name.charCodeAt(0) % AVATAR_PALETTES.length];

interface FighterAvatarProps {
  readonly name: string;
  readonly isMainEvent: boolean;
}

function FighterAvatar({ name, isMainEvent }: FighterAvatarProps) {
  const palette = getPalette(name);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const size = isMainEvent ? 104 : 80;

  return (
    <div className="flex-1 flex flex-col items-center gap-3">
      <div
        className="relative flex-shrink-0 group-hover:scale-105 transition-transform duration-300 overflow-hidden rounded-full"
        style={{ width: size, height: size }}
      >
        {/* Outer glow */}
        <div
          className="absolute inset-0 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300"
          style={{
            background: palette.ring,
            filter: "blur(6px)",
            transform: "scale(1.05)",
          }}
        />
        <svg width={size} height={size} viewBox="0 0 96 96" fill="none">
          <circle cx="48" cy="48" r="46" fill={palette.bg} />
          {/* Outer ring */}
          <circle
            cx="48"
            cy="48"
            r="44"
            stroke={palette.ring}
            strokeWidth="2"
            strokeOpacity="0.8"
          />
          {/* Inner dashed ring */}
          <circle
            cx="48"
            cy="48"
            r="36"
            stroke={palette.ring}
            strokeWidth="0.8"
            strokeOpacity="0.4"
            strokeDasharray="3 3"
          />
          {/* Initials */}
          <text
            x="48"
            y="48"
            dominantBaseline="central"
            textAnchor="middle"
            fill={palette.text}
            fontSize={initials.length > 1 ? "24" : "30"}
            fontFamily="'Bebas Neue', Impact, sans-serif"
            letterSpacing="2"
          >
            {initials}
          </text>
        </svg>
      </div>
      <p
        className={`font-heading font-bold text-white text-center leading-tight px-2 ${
          isMainEvent ? "text-lg" : "text-sm"
        }`}
      >
        {name}
      </p>
    </div>
  );
}

export function FightCard({ fight, index }: FightCardProps) {
  const isMain = fight.isMainEvent ?? false;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
      className={`relative group transition-all duration-300 fight-card-line isolate ${
        isMain
          ? "col-span-full border border-velada-gold/40 hover:border-velada-gold/70 bg-gradient-to-br from-velada-gold/8 via-velada-dark to-velada-bronze/8 shadow-[0_0_40px_rgba(200,153,42,0.12)] hover:shadow-[0_0_60px_rgba(200,153,42,0.2)]"
          : "border border-velada-gold/12 hover:border-velada-gold/40 bg-velada-card hover:bg-velada-dark hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
      }`}
      style={{ borderRadius: 16 }}
    >
      {/* Top shimmer line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px ${
          isMain
            ? "bg-gradient-to-r from-velada-bronze via-velada-gold to-velada-bronze"
            : "bg-gradient-to-r from-transparent via-velada-gold/30 to-transparent"
        }`}
      />

      {/* Fight badge — positioned inside so it doesn't overlap outside */}
      <div className="flex justify-center pt-4">
        <div
          className={`px-5 py-1.5 text-[10px] font-ui font-bold tracking-[0.25em] uppercase ${
            isMain
              ? "bg-velada-gold text-velada-black"
              : "bg-velada-dark border border-velada-gold/20 text-velada-gold/70"
          }`}
          style={{
            clipPath: "polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%)",
          }}
        >
          {isMain ? "★ MAIN EVENT ★" : `PELEA ${fight.id}`}
        </div>
      </div>

      {/* Body */}
      <div className={`px-6 sm:px-10 pt-4 pb-10`}>
        {/* Fight category */}
        <p className="text-center font-ui text-velada-gold/40 text-[10px] tracking-[0.35em] uppercase mb-6">
          {fight.title}
        </p>

        {/* Fighters row */}
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          <FighterAvatar name={fight.fighter1.name} isMainEvent={isMain} />

          {/* VS */}
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <div
              className={`relative flex items-center justify-center rounded-full font-display font-bold text-velada-gold ${
                isMain ? "w-16 h-16 text-2xl" : "w-12 h-12 text-base"
              }`}
              style={{
                background: "rgba(5,5,10,0.8)",
                border: "1px solid rgba(200,153,42,0.3)",
                boxShadow: "0 0 20px rgba(200,153,42,0.15)",
              }}
            >
              VS
            </div>
          </div>

          <FighterAvatar name={fight.fighter2.name} isMainEvent={isMain} />
        </div>
      </div>

      {/* Hover shimmer sweep */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <div className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-gradient-to-r from-transparent via-velada-gold/5 to-transparent transition-transform duration-700 skew-x-12" />
      </div>
    </motion.article>
  );
}

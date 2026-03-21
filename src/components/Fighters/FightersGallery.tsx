import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Swords, MapPin, Trophy } from "lucide-react";
import { fighterProfiles, type FighterProfile } from "../../data/fighters";

function FighterAvatar({
  fighter,
  size = 120,
}: {
  fighter: FighterProfile;
  size?: number;
}) {
  const initials = fighter.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className="relative flex items-center justify-center rounded-full flex-shrink-0"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${fighter.accentColor}30, ${fighter.accentColor}10)`,
        border: `2px solid ${fighter.accentColor}60`,
        boxShadow: `0 0 30px ${fighter.accentColor}35`,
      }}
    >
      <span
        className="font-display font-bold"
        style={{
          fontSize: size * 0.32,
          color: fighter.accentColor,
          textShadow: `0 0 20px ${fighter.accentColor}80`,
        }}
      >
        {initials}
      </span>
    </div>
  );
}

// ── Desktop card — horizontal expand effect ─────────────────────────────────
function FighterCardDesktop({
  fighter,
  isActive,
  onClick,
}: {
  fighter: FighterProfile;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden cursor-pointer"
      style={{
        flex: isActive ? "5" : "1",
        minWidth: isActive ? "220px" : "44px",
        transition:
          "flex 0.5s cubic-bezier(0.4,0,0.2,1), min-width 0.5s cubic-bezier(0.4,0,0.2,1)",
        height: "280px",
        borderRadius: "12px",
        background: `linear-gradient(160deg, ${fighter.accentColor}20 0%, #0b0b12 70%)`,
        border: `1px solid ${isActive ? fighter.accentColor + "50" : fighter.accentColor + "15"}`,
        boxShadow: isActive ? `0 0 40px ${fighter.accentColor}25` : "none",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${fighter.accentColor}15 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${fighter.accentColor}, transparent)`,
          opacity: isActive ? 1 : 0.25,
        }}
      />

      {!isActive && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-heading font-bold text-[10px] tracking-[3px] uppercase whitespace-nowrap"
            style={{
              writingMode: "vertical-rl",
              color: fighter.accentColor,
              opacity: 0.6,
            }}
          >
            {fighter.name}
          </span>
        </div>
      )}

      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center"
        >
          <FighterAvatar fighter={fighter} size={72} />
          <div style={{ marginTop: "0.875rem" }}>
            <p
              className="font-ui font-bold uppercase tracking-[3px] text-[9px]"
              style={{ color: fighter.accentColor, marginBottom: "0.2rem" }}
            >
              {fighter.nickname}
            </p>
            <h3 className="font-display text-white text-xl leading-none">
              {fighter.name}
            </h3>
            <p className="font-body text-white/35 text-[11px] mt-1">
              {fighter.fightTitle} · vs {fighter.rival}
            </p>
          </div>
          <div
            className="grid grid-cols-2 gap-2 w-full"
            style={{ marginTop: "1rem" }}
          >
            {[
              { label: "Estilo", value: fighter.stats.style },
              { label: "Peso", value: fighter.stats.weight },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg p-2 text-center"
                style={{
                  background: `${fighter.accentColor}10`,
                  border: `1px solid ${fighter.accentColor}20`,
                }}
              >
                <p className="font-ui text-[8px] uppercase tracking-widest text-white/25">
                  {s.label}
                </p>
                <p className="font-heading text-white text-[11px] font-bold mt-0.5">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
          <button
            className="font-ui text-[9px] font-bold tracking-[2px] uppercase mt-3"
            style={{ color: fighter.accentColor, opacity: 0.6 }}
          >
            Ver perfil →
          </button>
        </motion.div>
      )}
    </div>
  );
}

// ── Mobile card — simple grid card ──────────────────────────────────────────
function FighterCardMobile({
  fighter,
  isActive,
  onClick,
}: {
  fighter: FighterProfile;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden cursor-pointer rounded-xl"
      style={{
        background: `linear-gradient(160deg, ${fighter.accentColor}20 0%, #0b0b12 80%)`,
        border: `1px solid ${isActive ? fighter.accentColor + "50" : fighter.accentColor + "20"}`,
        boxShadow: isActive ? `0 0 20px ${fighter.accentColor}30` : "none",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        textAlign: "center",
        transition: "all 0.3s",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${fighter.accentColor}, transparent)`,
          opacity: isActive ? 1 : 0.3,
        }}
      />
      <FighterAvatar fighter={fighter} size={56} />
      <div>
        <p className="font-heading font-bold text-white text-sm leading-tight">
          {fighter.name}
        </p>
        <p
          className="font-ui text-[9px] uppercase tracking-wider mt-0.5"
          style={{ color: fighter.accentColor, opacity: 0.7 }}
        >
          {fighter.nickname}
        </p>
      </div>
      {isActive && (
        <p className="font-ui text-[9px] text-white/40 uppercase tracking-wider">
          vs {fighter.rival}
        </p>
      )}
    </div>
  );
}

// ── Detail panel ─────────────────────────────────────────────────────────────
function FighterDetail({
  fighter,
  onClose,
}: {
  fighter: FighterProfile;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-2xl w-full"
      style={{
        marginTop: "1.5rem",
        background: `linear-gradient(135deg, ${fighter.accentColor}12 0%, #0b0b12 50%, #05050a 100%)`,
        border: `1px solid ${fighter.accentColor}25`,
        boxShadow: `0 0 60px ${fighter.accentColor}18`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${fighter.accentColor}, transparent)`,
        }}
      />

      {/* Responsive grid: 1 col on mobile, 2 col on md+ */}
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: "2rem", padding: "1.5rem" }}
      >
        {/* Left — Avatar + stats */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <FighterAvatar fighter={fighter} size={120} />
          <div style={{ marginTop: "1rem" }}>
            <span
              className="font-ui text-[10px] font-bold tracking-[4px] uppercase"
              style={{ color: fighter.accentColor }}
            >
              {fighter.nickname}
            </span>
            <h2
              className="font-display text-white leading-none mt-1"
              style={{ fontSize: "clamp(1.75rem,5vw,2.25rem)" }}
            >
              {fighter.name}
            </h2>
            <div className="flex items-center justify-center gap-2 mt-1.5">
              <MapPin className="w-3 h-3 text-white/30" />
              <span className="font-body text-white/40 text-sm">
                {fighter.origin}
              </span>
            </div>
          </div>

          <div
            className="grid grid-cols-2 gap-2 w-full"
            style={{ marginTop: "1rem" }}
          >
            {[
              { label: "Estilo", value: fighter.stats.style },
              { label: "Alcance", value: fighter.stats.reach },
              { label: "Peso", value: fighter.stats.weight },
              { label: "Récord", value: fighter.stats.record },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-2.5 text-center"
                style={{
                  background: `${fighter.accentColor}10`,
                  border: `1px solid ${fighter.accentColor}18`,
                }}
              >
                <p className="font-ui text-[8px] uppercase tracking-widest text-white/25">
                  {s.label}
                </p>
                <p className="font-heading text-white text-sm font-bold mt-0.5">
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          <div
            className="flex items-center gap-3 rounded-xl p-3 w-full"
            style={{
              marginTop: "0.75rem",
              background: `${fighter.accentColor}08`,
              border: `1px solid ${fighter.accentColor}15`,
            }}
          >
            <Swords
              className="w-4 h-4 flex-shrink-0"
              style={{ color: fighter.accentColor }}
            />
            <div className="text-left">
              <p className="font-ui text-[8px] uppercase tracking-widest text-white/25">
                Rival
              </p>
              <p className="font-heading text-white text-sm font-bold">
                {fighter.rival}
              </p>
              <p className="font-body text-white/30 text-xs">
                {fighter.fightTitle}
              </p>
            </div>
          </div>
        </div>

        {/* Right — Bio */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "0.875rem",
          }}
        >
          <div className="flex items-center gap-2">
            <Trophy
              className="w-4 h-4"
              style={{ color: fighter.accentColor }}
            />
            <span className="font-ui text-[10px] font-bold tracking-[3px] uppercase text-white/40">
              Perfil del luchador
            </span>
          </div>
          <p className="font-body text-white/65 text-sm leading-relaxed">
            {fighter.description}
          </p>
          <div
            className="rounded-xl p-4"
            style={{
              background: `${fighter.accentColor}08`,
              border: `1px solid ${fighter.accentColor}15`,
            }}
          >
            <p
              className="font-ui text-[9px] font-bold tracking-[3px] uppercase mb-2"
              style={{ color: fighter.accentColor }}
            >
              ¿Cómo es fuera del ring?
            </p>
            <p className="font-body text-white/45 text-sm leading-relaxed">
              {fighter.personality}
            </p>
          </div>
          <div
            className="rounded-xl p-3"
            style={{
              background: "rgba(200,153,42,0.05)",
              border: "1px solid rgba(200,153,42,0.12)",
            }}
          >
            <p
              className="font-ui text-[8px] uppercase tracking-widest mb-1"
              style={{ color: "rgba(200,153,42,0.5)" }}
            >
              Combate
            </p>
            <p className="font-heading text-velada-gold text-sm font-bold">
              {fighter.name} vs {fighter.rival}
            </p>
            <p className="font-body text-white/30 text-xs">
              25 Julio 2026 · La Cartuja, Sevilla
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onClose}
        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-white/40 hover:text-white transition-colors"
        style={{ background: "rgba(255,255,255,0.05)" }}
        aria-label="Cerrar perfil"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function FightersGallery() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [selectedFighter, setSelectedFighter] = useState<FighterProfile | null>(
    null,
  );

  const handleCardClick = (fighter: FighterProfile) => {
    if (activeId === fighter.id && selectedFighter?.id === fighter.id) {
      setSelectedFighter(null);
    } else {
      setActiveId(fighter.id);
      setSelectedFighter(fighter);
    }
  };

  const row1 = fighterProfiles.slice(0, 10);
  const row2 = fighterProfiles.slice(10);

  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div className="absolute inset-0 bg-velada-dark" aria-hidden>
        <div className="absolute inset-0 bg-grid-subtle opacity-20" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(200,153,42,0.04) 0%, transparent 100%)",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px velada-divider" />

      <div
        className="relative z-10 px-4 sm:px-8"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "80rem",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
        >
          <span
            className="section-badge"
            style={{ marginBottom: "1rem", display: "inline-flex" }}
          >
            Los Luchadores
          </span>
          <h2
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(2rem,7vw,5rem)" }}
          >
            CONOCE A LOS{" "}
            <span className="text-gold-gradient">COMBATIENTES</span>
          </h2>
          <p
            className="font-body text-white/40 text-sm sm:text-base"
            style={{ maxWidth: "36rem", margin: "0.75rem auto 0" }}
          >
            Toca un luchador para ver su perfil completo.
          </p>
        </motion.div>

        {/* Mobile grid */}
        {isMobile && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.625rem",
              width: "100%",
            }}
          >
            {fighterProfiles.map((f) => (
              <FighterCardMobile
                key={f.id}
                fighter={f}
                isActive={activeId === f.id}
                onClick={() => handleCardClick(f)}
              />
            ))}
          </div>
        )}

        {/* Desktop rows */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", gap: "6px", width: "100%" }}>
              {row1.map((f) => (
                <FighterCardDesktop
                  key={f.id}
                  fighter={f}
                  isActive={activeId === f.id}
                  onClick={() => handleCardClick(f)}
                />
              ))}
            </div>
            <div style={{ display: "flex", gap: "6px", width: "100%" }}>
              {row2.map((f) => (
                <FighterCardDesktop
                  key={f.id}
                  fighter={f}
                  isActive={activeId === f.id}
                  onClick={() => handleCardClick(f)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Detail panel */}
        <AnimatePresence>
          {selectedFighter && (
            <FighterDetail
              key={selectedFighter.id}
              fighter={selectedFighter}
              onClose={() => setSelectedFighter(null)}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px velada-divider" />
    </section>
  );
}

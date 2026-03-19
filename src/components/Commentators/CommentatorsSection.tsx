import { motion } from "framer-motion";
import { Mic, Volume2, Headphones, Users } from "lucide-react";

interface Commentator {
  readonly id: number;
  readonly name: string;
  readonly role: string;
  readonly icon: typeof Mic;
  readonly tag: string;
}

const COMMENTATORS: Commentator[] = [
  {
    id: 1,
    name: "Ibai",
    role: "Presentador Principal",
    icon: Mic,
    tag: "HOST",
  },
  {
    id: 2,
    name: "ElSpreen",
    role: "Analista",
    icon: Headphones,
    tag: "ANÁLISIS",
  },
  { id: 3, name: "Richi", role: "Analista", icon: Headphones, tag: "ANÁLISIS" },
  { id: 4, name: "Molu", role: "Reportero", icon: Mic, tag: "CAMPO" },
  {
    id: 5,
    name: "Shadoune",
    role: "Analista Invitado",
    icon: Volume2,
    tag: "INVITADO",
  },
];

const PALETTES = [
  "from-amber-400/15 to-orange-600/5",
  "from-violet-400/15 to-purple-600/5",
  "from-teal-400/15 to-emerald-600/5",
  "from-rose-400/15 to-red-600/5",
  "from-sky-400/15 to-blue-600/5",
];

export function CommentatorsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="absolute inset-0 bg-velada-black" aria-hidden>
        <div className="absolute inset-0 bg-grid-subtle opacity-40" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px velada-divider" />

      <div
        className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-12"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="w-full"
          style={{ textAlign: "center", marginBottom: "1rem", width: "100%" }}
        >
          <div
            className="flex items-center justify-center gap-3 mb-6"
            style={{
              paddingBottom: "0.3rem",
            }}
          >
            <Users className="w-4 h-4 text-velada-gold/60" />
            <span className="section-badge">Equipo</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,7vw,4.5rem)] text-white leading-none mb-4">
            EQUIPO DE <span className="text-gold-gradient">COMENTARISTAS</span>
          </h2>
          <p
            className="font-body text-white/40 text-base sm:text-lg"
            style={{ maxWidth: "36rem", margin: "0 auto", textAlign: "center" }}
          >
            Los mejores analistas te traen la cobertura más completa del evento
          </p>
          <div className="flex items-center justify-center gap-4 mt-7">
            <div className="flex-1 max-w-[80px] h-px bg-gradient-to-l from-velada-gold/30 to-transparent" />
            <div className="w-1.5 h-1.5 rotate-45 bg-velada-gold/50" />
            <div className="flex-1 max-w-[80px] h-px bg-gradient-to-r from-velada-gold/30 to-transparent" />
          </div>
        </motion.header>

        {/* Grid — 5 cols max, with real breathing room */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
          style={{ gap: "1.5rem", width: "100%" }}
        >
          {COMMENTATORS.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.09, duration: 0.5 }}
            >
              <div
                className="group relative bg-velada-card border border-velada-gold/8 hover:border-velada-gold/25 rounded-2xl overflow-hidden cursor-default h-full"
                style={{
                  padding: "2rem 1rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "all 0.3s",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-velada-gold/0 group-hover:via-velada-gold/25 to-transparent transition-all duration-400" />
                <div className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-gradient-to-r from-transparent via-velada-gold/4 to-transparent transition-transform duration-700 skew-x-12 pointer-events-none" />

                {/* Tag */}
                <div className="mb-5">
                  <span className="inline-block px-2.5 py-0.5 text-[9px] font-ui font-bold tracking-[0.2em] uppercase rounded border border-velada-gold/15 text-velada-gold/40 group-hover:text-velada-gold/70 group-hover:border-velada-gold/35 transition-colors duration-300">
                    {person.tag}
                  </span>
                </div>

                {/* Avatar */}
                <div
                  className={`relative rounded-full bg-gradient-to-br ${PALETTES[index % PALETTES.length]} border border-velada-gold/12 group-hover:border-velada-gold/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                  style={{
                    width: "6rem",
                    height: "6rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <person.icon className="w-7 h-7 sm:w-8 sm:h-8 text-velada-gold/60 group-hover:text-velada-gold transition-colors duration-300" />
                </div>

                {/* Name */}
                <h3 className="font-heading font-semibold text-white text-sm sm:text-base mb-1.5 group-hover:text-velada-gold/90 transition-colors duration-300">
                  {person.name}
                </h3>
                <p className="font-body text-white/30 text-xs leading-snug">
                  {person.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-ui text-white/20 text-xs tracking-widest mt-12 uppercase"
          style={{ paddingTop: "0.5rem" }}
        >
          + Muchos más invitados sorpresa
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px velada-divider" />
    </section>
  );
}

import { motion } from "framer-motion";
import {
  Twitch,
  Youtube,
  Twitter,
  Instagram,
  ExternalLink,
} from "lucide-react";

interface SocialLink {
  readonly icon: typeof Twitch;
  readonly href: string;
  readonly label: string;
  readonly color: string;
}

interface Sponsor {
  readonly name: string;
  readonly category: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Twitch,
    href: "https://twitch.tv/ibai",
    label: "Twitch",
    color: "#9146ff",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@IbaiLlanos",
    label: "YouTube",
    color: "#ff0000",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/IbaiLlanos",
    label: "Twitter / X",
    color: "#1DA1F2",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/ibaillanos",
    label: "Instagram",
    color: "#E1306C",
  },
];

const SPONSORS: Sponsor[] = [
  { name: "InfoJobs", category: "Empleo" },
  { name: "Red Bull", category: "Bebida oficial" },
  { name: "Movistar", category: "Telecomunicaciones" },
  { name: "El Corte Inglés", category: "Retail" },
];

const NAV_LINKS = [
  { href: "#", label: "Inicio" },
  { href: "#fights", label: "Peleas" },
  { href: "#stream", label: "Stream" },
  { href: "#info", label: "Info" },
];

export function Footer() {
  return (
    <footer className="relative bg-velada-dark border-t border-velada-gold/10 overflow-hidden w-full flex flex-col items-center">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px velada-divider" />

      {/* Background grain */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30" aria-hidden />

      {/* Sponsors */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-14 sm:pt-18 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-center font-ui text-velada-gold/30 text-[10px] tracking-[0.4em] uppercase mb-8">
            Patrocinadores oficiales
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {SPONSORS.map((sponsor) => (
              <div
                key={sponsor.name}
                className="group flex flex-col items-center gap-1 cursor-default"
              >
                <span className="font-heading font-bold text-white/20 hover:text-velada-gold/50 transition-colors duration-300 text-xl sm:text-2xl tracking-wider">
                  {sponsor.name}
                </span>
                <span className="font-ui text-[9px] text-white/15 tracking-widest uppercase">
                  {sponsor.category}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-velada-gold/15 to-transparent mb-12" />

        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 mb-12">
          {/* Brand column */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-velada-gold/40 rounded flex items-center justify-center">
                <span className="font-display text-velada-gold text-lg leading-none">
                  VI
                </span>
              </div>
              <span className="font-heading text-white text-lg tracking-widest">
                LA VELADA
              </span>
            </div>
            <p className="font-body text-white/35 text-sm leading-relaxed text-center sm:text-left max-w-[200px]">
              El evento de boxeo entre creadores de contenido más grande del
              mundo.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center gap-3">
            <p className="font-ui font-bold text-velada-gold/50 text-[10px] tracking-[0.3em] uppercase mb-1">
              Navegación
            </p>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-ui text-white/40 hover:text-velada-gold text-sm tracking-wider transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center sm:items-end gap-3">
            <p className="font-ui font-bold text-velada-gold/50 text-[10px] tracking-[0.3em] uppercase mb-1">
              Síguenos
            </p>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/40 hover:text-white transition-colors duration-200 group"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 group-hover:text-velada-gold transition-colors" />
                <span className="font-ui text-sm tracking-wide">
                  {social.label}
                </span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-40 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-velada-gold/10 to-transparent mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/25 text-xs">
            © 2026 La Velada del Año. Todos los derechos reservados.
          </p>
          <p className="font-body text-white/20 text-xs">
            Un evento de{" "}
            <a
              href="https://twitter.com/IbaiLlanos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-velada-gold/50 hover:text-velada-gold transition-colors"
            >
              Ibai Llanos
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Twitch, Youtube, Twitter, Ticket } from "lucide-react";

interface NavLink {
  readonly href: string;
  readonly label: string;
}
interface SocialLink {
  readonly icon: typeof Twitch;
  readonly href: string;
  readonly label: string;
  readonly color: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "#", label: "Inicio" },
  { href: "#fights", label: "Peleas" },
  { href: "#stream", label: "Stream" },
  { href: "#info", label: "Info" },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Twitch,
    href: "https://twitch.tv/ibai",
    label: "Twitch",
    color: "hover:text-[#9146FF]",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@IbaiLlanos",
    label: "YouTube",
    color: "hover:text-[#FF0000]",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/IbaiLlanos",
    label: "Twitter",
    color: "hover:text-[#1DA1F2]",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMobileToggle = () => setIsMobileOpen((p) => !p);
  const handleMobileClose = () => setIsMobileOpen(false);

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-velada-black/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-gradient-to-b from-velada-black/80 to-transparent backdrop-blur-sm"
      }`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-velada-bronze via-velada-gold to-velada-bronze" />

      {/* Bottom separator when scrolled */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-velada-gold/30 to-transparent" />
      )}

      {/* Main bar */}
      <div
        className="flex items-center justify-between w-full"
        style={{ height: "68px", padding: "0 1.25rem" }}
      >
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 flex-shrink-0"
          aria-label="La Velada VI"
        >
          <div className="relative flex items-center justify-center w-10 h-10 flex-shrink-0">
            <div
              className="absolute inset-0 bg-velada-gold group-hover:bg-velada-gold-bright transition-colors duration-300"
              style={{
                clipPath:
                  "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
              }}
            />
            <span className="relative font-display text-velada-black text-lg leading-none z-10">
              VI
            </span>
          </div>
          <div className="flex flex-col leading-none gap-0.5">
            <span
              className="font-ui text-[9px] font-bold uppercase text-velada-gold/60"
              style={{ letterSpacing: "4px" }}
            >
              Edición Especial
            </span>
            <span
              className="font-heading text-[16px] font-bold uppercase text-white group-hover:text-velada-gold transition-colors duration-300"
              style={{ letterSpacing: "3px" }}
            >
              La Velada
            </span>
          </div>
        </a>

        {/* Desktop nav links */}
        <div
          style={{
            display: isMobile ? "none" : "flex",
            alignItems: "center",
            gap: "0.25rem",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`relative group px-5 py-2 font-ui text-[11px] font-bold uppercase transition-all duration-200 ${
                  isActive
                    ? "text-velada-gold"
                    : "text-white/50 hover:text-white"
                }`}
                style={{ letterSpacing: "3px" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-velada-gold/8 border border-velada-gold/20"
                    style={{
                      clipPath:
                        "polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)",
                    }}
                    transition={{ duration: 0.25 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
                {!isActive && (
                  <span className="absolute bottom-0 left-5 right-5 h-px bg-velada-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop right: socials + CTA */}
        <div
          style={{
            display: isMobile ? "none" : "flex",
            alignItems: "center",
            gap: "0.25rem",
            flexShrink: 0,
          }}
        >
          <div
            className="flex items-center"
            style={{ gap: "2px", marginRight: "0.75rem" }}
          >
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`w-8 h-8 flex items-center justify-center text-white/30 ${s.color} transition-colors duration-200`}
              >
                <s.icon className="w-[15px] h-[15px]" />
              </a>
            ))}
          </div>
          <div
            className="w-px h-5 bg-velada-gold/20"
            style={{ marginRight: "0.75rem" }}
          />
          <a
            href="#stream"
            className="group relative overflow-hidden flex items-center gap-2 bg-velada-gold text-velada-black font-heading text-[12px] font-bold uppercase hover:bg-velada-gold-bright transition-colors duration-200"
            style={{
              padding: "0.625rem 1.25rem",
              letterSpacing: "2px",
              boxShadow: "0 0 20px rgba(200,153,42,0.35)",
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
            <Ticket className="w-3.5 h-3.5 relative z-10" />
            <span className="relative z-10">Entradas</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            className="relative w-10 h-10 flex items-center justify-center text-white hover:text-velada-gold transition-colors flex-shrink-0"
            onClick={handleMobileToggle}
            aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileOpen}
          >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="ham"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        )}
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobile && isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-velada-black/98 backdrop-blur-2xl border-t border-velada-gold/15"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-velada-gold/40 to-transparent" />
            <div style={{ padding: "1.5rem 1.5rem" }}>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center justify-between py-4 border-b border-velada-gold/8 last:border-0 font-ui text-[13px] font-bold uppercase text-white/50 hover:text-velada-gold transition-colors group"
                  style={{ letterSpacing: "1.5px" }}
                  onClick={handleMobileClose}
                >
                  <span>{link.label}</span>
                  <span className="text-velada-gold/0 group-hover:text-velada-gold/50 transition-colors text-xs">
                    →
                  </span>
                </motion.a>
              ))}
              <div
                className="flex items-center justify-between"
                style={{ paddingTop: "1.25rem", marginTop: "0.5rem" }}
              >
                <div className="flex gap-2">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className={`w-9 h-9 border border-velada-gold/15 flex items-center justify-center text-white/30 ${s.color} hover:border-velada-gold/40 transition-all`}
                    >
                      <s.icon className="w-[15px] h-[15px]" />
                    </a>
                  ))}
                </div>
                <a
                  href="#stream"
                  className="flex items-center gap-2 bg-velada-gold text-velada-black font-heading text-[12px] font-bold uppercase"
                  style={{
                    padding: "0.625rem 1.25rem",
                    letterSpacing: "2px",
                    boxShadow: "0 0 16px rgba(200,153,42,0.3)",
                  }}
                  onClick={handleMobileClose}
                >
                  <Ticket className="w-3.5 h-3.5" />
                  Entradas
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../../assets/img/imagen_prueba.png";

interface IntroScreenProps {
  readonly onEnter: () => void;
}

export function IntroScreen({ onEnter }: IntroScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageReady, setImageReady] = useState(false);

  // 1. Mostrar contenido después de 800ms
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(t);
  }, []);

  // 2. Bloquear scroll del body mientras intro está activo
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // 3. handleEnter — definido ANTES del useEffect que lo usa
  const handleEnter = useCallback(() => {
    if (!isVisible) return; // evitar doble disparo
    setIsVisible(false);
    document.body.style.overflow = "";
    setTimeout(onEnter, 800);
  }, [isVisible, onEnter]);

  // 4. Escuchar wheel, teclas y swipe DESPUÉS de definir handleEnter
  useEffect(() => {
    if (!isLoaded) return;

    const onWheel = () => handleEnter();
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "Space", "Enter"].includes(e.code)) handleEnter();
    };
    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchY - e.changedTouches[0].clientY > 40) handleEnter();
    };

    window.addEventListener("wheel", onWheel, { once: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-velada-black overflow-hidden"
          style={{ width: "100vw", height: "100vh" }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{ width: "100%", height: "100%" }}
          >
            <img
              src={heroImage}
              alt=""
              aria-hidden
              onLoad={() => setImageReady(true)}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                opacity: imageReady ? 1 : 0,
                transition: "opacity 0.8s ease",
                transform: "scale(1.04)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velada-black via-velada-black/55 to-velada-black/25" />
            <div className="absolute inset-0 bg-gradient-to-b from-velada-black/50 via-transparent to-velada-black/30" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-velada-black to-transparent" />
          </div>

          {/* Corner decorations */}
          {[
            "top-6 left-6 border-t-2 border-l-2",
            "top-6 right-6 border-t-2 border-r-2",
            "bottom-6 left-6 border-b-2 border-l-2",
            "bottom-6 right-6 border-b-2 border-r-2",
          ].map((cls) => (
            <div
              key={cls}
              className={`absolute w-10 h-10 border-velada-gold/35 ${cls}`}
            />
          ))}

          {/* Top gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 1.4, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-velada-gold/70 to-transparent origin-left"
          />

          {/* Main content */}
          <div
            className="relative z-10 flex flex-col items-center justify-center text-center px-6"
            style={{ width: "100%", height: "100%" }}
          >
            {/* Loading spinner */}
            {!isLoaded && (
              <div className="w-10 h-10 border-2 border-velada-gold/20 border-t-velada-gold rounded-full animate-spin" />
            )}

            <AnimatePresence>
              {isLoaded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center gap-7 max-w-4xl w-full"
                >
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="section-badge"
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-velada-gold animate-pulse" />
                    Edición VI · Evento Especial
                  </motion.div>

                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  >
                    <h1 className="font-display leading-none tracking-wide">
                      <span
                        className="block text-white"
                        style={{
                          fontSize: "clamp(4rem, 16vw, 11rem)",
                          textShadow: "0 0 80px rgba(200,153,42,0.2)",
                        }}
                      >
                        LA VELADA
                      </span>
                      <span
                        className="block text-gold-gradient"
                        style={{ fontSize: "clamp(2.5rem, 10vw, 7rem)" }}
                      >
                        DEL AÑO VI
                      </span>
                    </h1>
                  </motion.div>

                  {/* Date pill */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45, duration: 0.6 }}
                    className="flex items-center gap-4 px-6 py-3 bg-velada-black/60 border border-velada-gold/20"
                    style={{ backdropFilter: "blur(12px)" }}
                  >
                    <span className="font-ui font-bold text-velada-gold-light text-sm tracking-widest uppercase">
                      25 Jul 2026
                    </span>
                    <div className="w-px h-4 bg-velada-gold/30" />
                    <span className="font-ui text-white/60 text-sm tracking-wide">
                      20:00H CET · Estadio La Cartuja, Sevilla
                    </span>
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.6 }}
                  >
                    <motion.button
                      onClick={handleEnter}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="group relative overflow-hidden px-12 py-5 bg-velada-gold text-velada-black font-heading font-bold text-lg tracking-widest uppercase shadow-gold hover:bg-velada-gold-bright transition-all duration-300"
                      style={{
                        boxShadow: "0 0 40px rgba(200,153,42,0.5)",
                      }}
                      aria-label="Entrar al evento"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
                      <span className="relative z-10">ENTRAR AL EVENTO</span>
                    </motion.button>
                  </motion.div>

                  {/* Scroll hint */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className="flex flex-col items-center gap-2 cursor-pointer"
                    onClick={handleEnter}
                  >
                    <span className="font-ui text-white/25 text-[10px] tracking-[0.35em] uppercase">
                      o haz scroll para descubrir
                    </span>
                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                      className="w-px h-6 bg-gradient-to-b from-velada-gold/50 to-transparent"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.4, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-velada-gold/70 to-transparent origin-right"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

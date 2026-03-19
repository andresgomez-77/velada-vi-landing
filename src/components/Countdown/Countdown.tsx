import { AnimatePresence, motion } from "framer-motion";
import { useCountdown } from "../../hooks/useCountdown";

interface CountdownProps {
  readonly targetDate: Date;
}

interface UnitProps {
  readonly value: number;
  readonly label: string;
  readonly isLast?: boolean;
}

function Unit({ value, label, isLast = false }: UnitProps) {
  const display = String(value).padStart(2, "0");

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="flex flex-col items-center">
        {/* Card */}
        <div
          className="relative bg-velada-dark border border-velada-gold/22 overflow-hidden min-w-[80px] sm:min-w-[96px]"
          style={{
            clipPath: "polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%)",
          }}
        >
          {/* Top gold shimmer */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-velada-gold/55 to-transparent" />
          {/* Top inner glow */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-velada-gold/7 to-transparent pointer-events-none" />

          {/* Number */}
          <div className="h-[72px] sm:h-[88px] flex items-center justify-center overflow-hidden relative">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={display}
                initial={{ y: -32, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: 32, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute font-display text-[2.6rem] sm:text-[3.2rem] text-gold-gradient tabular-nums leading-none"
              >
                {display}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Label strip */}
          <div className="border-t border-velada-gold/12 py-2 bg-velada-black/50">
            <span className="block text-center font-ui text-[10px] sm:text-[11px] font-bold tracking-[3px] uppercase text-velada-gold/50">
              {label}
            </span>
          </div>
        </div>
      </div>

      {/* Colon separator */}
      {!isLast && (
        <motion.span
          animate={{ opacity: [1, 0.15, 1] }}
          transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
          className="font-display text-[1.8rem] sm:text-[2.2rem] text-velada-gold/35 pb-8"
        >
          :
        </motion.span>
      )}
    </div>
  );
}

export function Countdown({ targetDate }: CountdownProps) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  type UnitDef = { value: number; label: string; isLast?: boolean };
  const units: UnitDef[] = [
    { value: days, label: "Días" },
    { value: hours, label: "Horas" },
    { value: minutes, label: "Min" },
    { value: seconds, label: "Seg", isLast: true },
  ];

  return (
    <div
      className="flex items-center justify-center gap-0.5 sm:gap-1"
      role="timer"
      aria-label="Cuenta regresiva"
      aria-live="off"
    >
      {units.map((u) => (
        <Unit
          key={u.label}
          value={u.value}
          label={u.label}
          isLast={u.isLast ?? false}
        />
      ))}
    </div>
  );
}

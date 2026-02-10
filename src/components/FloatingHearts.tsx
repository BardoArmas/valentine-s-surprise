import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useCallback } from "react";

interface HeartBurst {
  id: number;
  x: number;
  y: number;
}

const MiniHearts = ({ x, y, onDone }: { x: number; y: number; onDone: () => void }) => {
  const particles = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      angle: (i / 10) * 360,
      distance: 40 + Math.random() * 60,
      size: 10 + Math.random() * 10,
      duration: 0.6 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <>
      {particles.map((p) => {
        const rad = (p.angle * Math.PI) / 180;
        return (
          <motion.div
            key={p.id}
            className="fixed z-[60] pointer-events-none"
            style={{ left: x, top: y }}
            initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            animate={{
              opacity: 0,
              scale: 0.5,
              x: Math.cos(rad) * p.distance,
              y: Math.sin(rad) * p.distance,
            }}
            transition={{ duration: p.duration, ease: "easeOut" }}
            onAnimationComplete={p.id === 0 ? onDone : undefined}
          >
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-primary"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        );
      })}
    </>
  );
};

const FloatingHearts = () => {
  const [bursts, setBursts] = useState<HeartBurst[]>([]);
  let burstCounter = 0;

  const handleHeartClick = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setBursts((prev) => [...prev, { id: Date.now() + Math.random(), x: cx, y: cy }]);
  }, []);

  const removeBurst = useCallback((id: number) => {
    setBursts((prev) => prev.filter((b) => b.id !== id));
  }, []);

  const hearts = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 5 + Math.random() * 90,
      delay: Math.random() * 2,
      duration: 4 + Math.random() * 3,
      size: 30 + Math.random() * 40,
      opacity: 0.3 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden z-40 pointer-events-none">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute cursor-pointer pointer-events-auto"
            style={{
              left: `${heart.x}%`,
              bottom: -100,
            }}
            onClick={handleHeartClick}
            animate={{
              y: [0, -window.innerHeight - 200],
              x: [0, Math.sin(heart.id) * 50, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            <svg
              width={heart.size}
              height={heart.size}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-primary"
              style={{ opacity: heart.opacity }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {bursts.map((burst) => (
          <MiniHearts key={burst.id} x={burst.x} y={burst.y} onDone={() => removeBurst(burst.id)} />
        ))}
      </AnimatePresence>
    </>
  );
};

export default FloatingHearts;
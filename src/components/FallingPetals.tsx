import { motion } from "framer-motion";
import { useMemo } from "react";

const FallingPetals = () => {
  const petals = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 4 + Math.random() * 4,
      size: 16 + Math.random() * 14,
      rotation: Math.random() * 360,
      swayAmount: 30 + Math.random() * 60,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{ left: `${petal.left}%`, top: -30 }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, petal.swayAmount, -petal.swayAmount, 0],
            rotate: [petal.rotation, petal.rotation + 360],
          }}
          transition={{
            y: { duration: petal.duration, repeat: Infinity, delay: petal.delay, ease: "linear" },
            x: { duration: petal.duration / 2, repeat: Infinity, delay: petal.delay, ease: "easeInOut" },
            rotate: { duration: petal.duration, repeat: Infinity, delay: petal.delay, ease: "linear" },
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
          >
            <ellipse
              cx="12"
              cy="10"
              rx="7"
              ry="10"
              transform="rotate(-20 12 10)"
              fill="hsl(340, 80%, 65%)"
              opacity={0.7}
            />
            <ellipse
              cx="12"
              cy="10"
              rx="4"
              ry="8"
              transform="rotate(-20 12 10)"
              fill="hsl(350, 85%, 75%)"
              opacity={0.5}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FallingPetals;

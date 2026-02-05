 import { motion } from "framer-motion";
 import { useMemo } from "react";
 
 const FloatingHearts = () => {
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
     <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
       {hearts.map((heart) => (
         <motion.div
           key={heart.id}
           className="absolute"
           style={{
             left: `${heart.x}%`,
             bottom: -100,
           }}
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
   );
 };
 
 export default FloatingHearts;
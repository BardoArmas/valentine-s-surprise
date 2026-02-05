 import { motion } from "framer-motion";
 import { useMemo } from "react";
 
 const Confetti = () => {
   const pieces = useMemo(() => {
     return Array.from({ length: 50 }, (_, i) => ({
       id: i,
       x: Math.random() * 100,
       delay: Math.random() * 0.5,
       duration: 2 + Math.random() * 2,
       color: ['bg-confetti-pink', 'bg-confetti-red', 'bg-confetti-gold', 'bg-confetti-white'][Math.floor(Math.random() * 4)],
       size: 8 + Math.random() * 8,
       rotation: Math.random() * 360,
     }));
   }, []);
 
   return (
     <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
       {pieces.map((piece) => (
         <motion.div
           key={piece.id}
           className={`absolute ${piece.color} rounded-sm`}
           style={{
             left: `${piece.x}%`,
             width: piece.size,
             height: piece.size * 0.6,
           }}
           initial={{
             y: -20,
             rotate: piece.rotation,
             opacity: 1,
           }}
           animate={{
             y: "100vh",
             rotate: piece.rotation + 720,
             opacity: [1, 1, 0],
           }}
           transition={{
             duration: piece.duration,
             delay: piece.delay,
             ease: "easeOut",
           }}
         />
       ))}
     </div>
   );
 };
 
 export default Confetti;
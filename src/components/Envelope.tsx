 import { motion } from "framer-motion";
 
 interface EnvelopeProps {
   onClick: () => void;
 }
 
 const Envelope = ({ onClick }: EnvelopeProps) => {
   return (
     <motion.div
       className="cursor-pointer envelope-shadow"
       onClick={onClick}
       initial={{ scale: 0.8, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       transition={{ duration: 0.5, type: "spring" }}
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
     >
       <div className="relative w-72 h-52 sm:w-80 sm:h-56">
         {/* Envelope body */}
         <div className="absolute inset-0 bg-envelope rounded-lg border-2 border-envelope-dark overflow-hidden">
           {/* Inner shadow */}
           <div className="absolute inset-2 bg-envelope-inner rounded opacity-50" />
         </div>
         
         {/* Envelope flap (top triangle) */}
         <motion.div
           className="absolute top-0 left-0 right-0 h-28 origin-top"
           initial={{ rotateX: 0 }}
           whileHover={{ rotateX: 10 }}
         >
           <svg viewBox="0 0 320 112" className="w-full h-full">
             <path
               d="M0 0 L160 100 L320 0 L320 0 L0 0 Z"
               fill="hsl(45 30% 80%)"
               stroke="hsl(30 25% 65%)"
               strokeWidth="2"
             />
           </svg>
         </motion.div>
         
         {/* Heart seal */}
         <motion.div
           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
           animate={{
             scale: [1, 1.1, 1],
           }}
           transition={{
             duration: 1.5,
             repeat: Infinity,
             ease: "easeInOut",
           }}
         >
           <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg heart-glow">
             <svg
               width="32"
               height="32"
               viewBox="0 0 24 24"
               fill="white"
             >
               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
             </svg>
           </div>
         </motion.div>
         
         {/* Click hint */}
         <motion.p
           className="absolute -bottom-10 left-0 right-0 text-center text-muted-foreground text-sm"
           animate={{ opacity: [0.5, 1, 0.5] }}
           transition={{ duration: 2, repeat: Infinity }}
         >
           Toca para abrir 💕
         </motion.p>
       </div>
     </motion.div>
   );
 };
 
 export default Envelope;
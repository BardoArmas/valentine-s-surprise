 import { motion } from "framer-motion";
 
 const SuccessScreen = () => {
   return (
     <motion.div
       className="flex flex-col items-center justify-center p-8 text-center"
       initial={{ scale: 0, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
     >
       {/* Celebration hearts */}
       <motion.div
         className="text-8xl mb-6"
         animate={{
           scale: [1, 1.2, 1],
           rotate: [0, 10, -10, 0],
         }}
         transition={{
           duration: 1,
           repeat: Infinity,
           ease: "easeInOut",
         }}
       >
         💕
       </motion.div>
 
       <motion.h1
         className="font-script text-5xl sm:text-6xl text-primary mb-4"
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.3 }}
       >
         ¡Sííí!
       </motion.h1>
 
       <motion.p
         className="text-xl sm:text-2xl text-foreground font-medium mb-6"
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.5 }}
       >
         ¡Seremos el mejor equipo! 🥰
       </motion.p>
 
       <motion.div
         className="flex gap-4 text-4xl"
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.7 }}
       >
         {["❤️", "🌹", "💝", "🌹", "❤️"].map((emoji, i) => (
           <motion.span
             key={i}
             animate={{
               y: [0, -10, 0],
             }}
             transition={{
               duration: 1,
               delay: i * 0.1,
               repeat: Infinity,
               ease: "easeInOut",
             }}
           >
             {emoji}
           </motion.span>
         ))}
       </motion.div>
     </motion.div>
   );
 };
 
 export default SuccessScreen;
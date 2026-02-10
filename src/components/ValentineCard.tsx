 import { motion, AnimatePresence } from "framer-motion";
 import { useState } from "react";
 
 interface ValentineCardProps {
   onYes: () => void;
 }
 
 const ValentineCard = ({ onYes }: ValentineCardProps) => {
   const [noButtonScale, setNoButtonScale] = useState(1);
   const [noButtonVisible, setNoButtonVisible] = useState(true);
 
  const handleYesClick = () => {
    onYes();
    // Open WhatsApp after 15 seconds to allow viewing the animation
    setTimeout(() => {
      const phone = "522228440643";
      const message = encodeURIComponent("¡Sí quiero ser tu San Valentín! 💕❤️");
      window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    }, 15000);
  };

  const handleNoClick = () => {
     const newScale = noButtonScale * 0.7;
     if (newScale < 0.1) {
       setNoButtonVisible(false);
     } else {
       setNoButtonScale(newScale);
     }
   };
 
   return (
     <motion.div
       className="flex flex-col items-center justify-center p-8"
       initial={{ scale: 0, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
     >
       {/* Big Heart */}
       <motion.div
         className="mb-8 heart-glow"
         animate={{
           scale: [1, 1.1, 1],
         }}
         transition={{
           duration: 1,
           repeat: Infinity,
           ease: "easeInOut",
         }}
       >
         <svg
           width="150"
           height="150"
           viewBox="0 0 24 24"
           className="text-primary drop-shadow-2xl"
           fill="currentColor"
         >
           <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
         </svg>
       </motion.div>
 
       {/* Question */}
       <motion.h1
         className="font-script text-4xl sm:text-5xl text-foreground text-center mb-10 leading-relaxed"
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.3 }}
       >
         ¿Quieres ser mi
         <br />
         <span className="text-primary text-5xl sm:text-6xl">San Valentín?</span>
       </motion.h1>
 
       {/* Buttons */}
       <motion.div
         className="flex gap-6 items-center"
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.5 }}
       >
         <motion.button
           className="btn-yes"
           onClick={handleYesClick}
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.95 }}
         >
           Sí 💖
         </motion.button>
 
         <AnimatePresence>
           {noButtonVisible && (
             <motion.button
               className="btn-no"
               onClick={handleNoClick}
               style={{ scale: noButtonScale }}
               exit={{ scale: 0, opacity: 0 }}
               whileHover={{ scale: noButtonScale * 1.05 }}
               whileTap={{ scale: noButtonScale * 0.95 }}
             >
               No 😢
             </motion.button>
           )}
         </AnimatePresence>
       </motion.div>
 
       {!noButtonVisible && (
         <motion.p
           className="mt-4 text-muted-foreground text-sm"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
         >
           El "no" ya no es una opción 😏
         </motion.p>
       )}
     </motion.div>
   );
 };
 
 export default ValentineCard;
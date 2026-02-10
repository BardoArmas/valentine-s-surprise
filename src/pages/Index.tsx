import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Envelope from "@/components/Envelope";
import ValentineCard from "@/components/ValentineCard";
import SuccessScreen from "@/components/SuccessScreen";
import Confetti from "@/components/Confetti";
import FloatingHearts from "@/components/FloatingHearts";
import FallingPetals from "@/components/FallingPetals";

type Stage = "envelope" | "question" | "success";

const Index = () => {
  const [stage, setStage] = useState<Stage>("envelope");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpenEnvelope = () => {
    setStage("question");
    setShowConfetti(true);
    // Hide confetti after animation
    setTimeout(() => setShowConfetti(false), 4000);
  };

  const handleYes = () => {
    setStage("success");
    setShowConfetti(true);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background floating hearts */}
      {(stage === "question" || stage === "success") && <FloatingHearts />}
      {stage === "success" && <FallingPetals />}
      
      {/* Confetti */}
      {showConfetti && <Confetti />}

      {/* Main content */}
      <AnimatePresence mode="wait">
        {stage === "envelope" && (
          <Envelope key="envelope" onClick={handleOpenEnvelope} />
        )}
        
        {stage === "question" && (
          <ValentineCard key="question" onYes={handleYes} />
        )}
        
        {stage === "success" && (
          <SuccessScreen key="success" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;


import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

interface TimerProps {
  totalSeconds: number;
  onTimeUp?: () => void;
}

const QuizTimer = ({ totalSeconds, onTimeUp }: TimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          onTimeUp && onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, onTimeUp]);

  // Format time as MM:SS
  const formatTime = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Calculate progress percentage
  const progressPercentage = (timeRemaining / totalSeconds) * 100;
  
  // Determine the color class based on time remaining
  const getProgressColorClass = () => {
    if (timeRemaining < 60) return "bg-red-500";
    if (timeRemaining < 180) return "bg-gold-500";
    return "bg-green-500";
  };

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-500">Time Remaining</span>
        <span className="text-lg font-bold text-university-800">{formatTime()}</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full ${getProgressColorClass()} transition-all duration-1000 ease-linear`}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuizTimer;

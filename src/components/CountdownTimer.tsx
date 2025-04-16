
import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the end date to 7 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 mb-4">
      <div className="flex flex-col items-center">
        <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-vibrant-pink to-bright-orange bg-clip-text text-transparent">
          {timeLeft.days}
        </div>
        <div className="text-xs text-light-gray">Days</div>
      </div>
      <div className="text-white text-2xl">:</div>
      <div className="flex flex-col items-center">
        <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-vibrant-pink to-bright-orange bg-clip-text text-transparent">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-light-gray">Hours</div>
      </div>
      <div className="text-white text-2xl">:</div>
      <div className="flex flex-col items-center">
        <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-vibrant-pink to-bright-orange bg-clip-text text-transparent">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-light-gray">Minutes</div>
      </div>
      <div className="text-white text-2xl">:</div>
      <div className="flex flex-col items-center">
        <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-vibrant-pink to-bright-orange bg-clip-text text-transparent">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-light-gray">Seconds</div>
      </div>
    </div>
  );
}

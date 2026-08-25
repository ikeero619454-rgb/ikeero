import { useState, useEffect } from 'react';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export function useCountdown(targetMonth = 8, targetDay = 30): CountdownTime {
  // Month 8 is September (0-indexed in JS Date: Jan=0, ..., Sep=8)
  const calculateTimeLeft = (): CountdownTime => {
    const now = new Date();
    let year = now.getFullYear();
    let target = new Date(year, targetMonth, targetDay, 23, 59, 59);

    // If already passed for this year, point to next year or keep active remaining days
    if (now.getTime() > target.getTime()) {
      target = new Date(year + 1, targetMonth, targetDay, 23, 59, 59);
    }

    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetMonth, targetDay]);

  return timeLeft;
}

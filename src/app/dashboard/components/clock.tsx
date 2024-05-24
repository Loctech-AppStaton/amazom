"use client";

import { useEffect, useState } from "react";

export default function Clock({ time }: { time?: string }) {
  const [currentTime, setCurrentTime] = useState(time);

  const updateClock = () => {
    setCurrentTime(
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  useEffect(() => {
    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className="pl-2">{currentTime}</div>;
}

import { useEffect, useState } from "react";
import AnimatedText from "../AnimatedText/AnimatedText.jsx";
import "./Countdown.css";

function getTimeLeft(targetDate) {
  const diff = Math.max(0, targetDate.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({ dateISO }) {
  const targetDate = new Date(dateISO);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateISO]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="countdown section" id="countdown">
      <div className="section__inner countdown__inner">
        <p className="eyebrow">Counting Down</p>
        <AnimatedText as="h2" text="To Our Special Day" className="countdown__title" splitBy="word" />

        <div className="countdown__grid">
          {units.map((unit) => (
            <div className="countdown__unit hover-lift" key={unit.label}>
              <span className="countdown__value">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="countdown__label">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

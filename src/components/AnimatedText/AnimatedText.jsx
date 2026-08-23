// hayda kermal el animated text file
import { useEffect, useRef, useState } from "react";

/**
 * Splits text into per-character spans and reveals them in a staggered
 * "hand-written" animation the first time the element scrolls into view.
 *
 * Usage: <AnimatedText as="h2" className="hero__names" text="Ali & Rawan" />
 */
export default function AnimatedText({
  text,
  as: Tag = "span",
  className = "",
  charDelay = 28,
  startDelay = 0,
  splitBy = "char", // "char" | "word"
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const units = splitBy === "word" ? text.split(" ") : Array.from(text);

  return (
    <Tag
      ref={ref}
      className={`letters ${visible ? "letters--in" : ""} ${className}`}
      aria-label={text}
    >
      {units.map((unit, i) => (
        <span
          key={i}
          className="letters__char"
          style={{ "--char-delay": `${startDelay + i * charDelay}ms` }}
          aria-hidden="true"
        >
          {unit === " " ? "\u00A0" : unit}
          {splitBy === "word" && i < units.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}

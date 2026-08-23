import { useEffect, useState } from "react";
import AnimatedText from "../AnimatedText/AnimatedText.jsx";
import weddingCoupleImage from "../../assets/wedding-couple.png";
import "./IntroScreen.css";


const INTRO_BG_IMAGE = weddingCoupleImage;

// Small drifting gold "embers" over the photo — purely atmospheric.
const EMBERS = [
  { left: "8%", size: 4, duration: 7, delay: 0 },
  { left: "20%", size: 3, duration: 9, delay: 1.4 },
  { left: "36%", size: 5, duration: 8, delay: 0.6 },
  { left: "54%", size: 3, duration: 10, delay: 2.1 },
  { left: "67%", size: 4, duration: 7.5, delay: 0.9 },
  { left: "80%", size: 3, duration: 9.5, delay: 1.8 },
  { left: "91%", size: 4, duration: 8.5, delay: 0.3 },
];

export default function IntroScreen({ couple, onOpen }) {
  // Delaying the "ready" class by one frame lets the whole entrance
  // sequence (card, arch draw, embers, text, button) run as CSS
  // transitions the moment the screen mounts, instead of on page load.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={`intro ${ready ? "intro--ready" : ""}`}>
      <div className="intro__card">
        {/* Photo half — the cinematic opening moment */}
        <div className="intro__photo">
          <img className="intro__photo-img" src={INTRO_BG_IMAGE} alt="" aria-hidden="true" />
          <div className="intro__photo-scrim" aria-hidden="true" />

          <div className="intro__embers" aria-hidden="true">
            {EMBERS.map((e, i) => (
              <span
                key={i}
                className="intro__ember"
                style={{
                  left: e.left,
                  width: e.size,
                  height: e.size,
                  animationDuration: `${e.duration}s`,
                  animationDelay: `${e.delay}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Ring motif straddling the seam between photo and panel */}
        <span className="intro__ring" aria-hidden="true">
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
    <circle
      cx="9"
      cy="15"
      r="4.2"
      stroke="var(--color-gold)"
      strokeWidth="1.3"
    />
    <circle
      cx="17"
      cy="9"
      r="4.2"
      stroke="var(--color-gold)"
      strokeWidth="1.3"
    />
  </svg>
</span>

        {/* Text panel */}
        <div className="intro__panel">
          <p className="intro__eyebrow">You're Invited</p>

          <h1 className="intro__title">
  <AnimatedText
    as="span"
    text={couple.groomName}
    className="intro__name"
    charDelay={45}
  />

  <span className="intro__amp">&amp;</span>

  <AnimatedText
    as="span"
    text={couple.brideName}
    className="intro__name"
    charDelay={45}
    startDelay={couple.groomName.length * 45 + 260}
  />
</h1>

          <span className="intro__divider" aria-hidden="true" />
          <p className="intro__sub">request the pleasure of your company</p>

          <button className="intro__button" onClick={onOpen}>
            <span className="intro__button-fill" aria-hidden="true" />
            <span className="intro__button-label">Open Invitation</span>
            <span className="intro__arrow">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
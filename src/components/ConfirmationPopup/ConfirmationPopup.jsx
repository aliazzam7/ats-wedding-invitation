import { useEffect, useState } from "react";
import "./ConfirmationPopup.css";

export default function ConfirmationPopup({ whatsappUrl, onClose }) {
  const [secondsLeft, setSecondsLeft] = useState(3);

  useEffect(() => {
    if (secondsLeft === 0) {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      return;
    }
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft, whatsappUrl]);

  return (
    <div className="confirm-overlay" role="dialog" aria-modal="true">
      <div className="confirm-card">
        <button className="confirm-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <p className="confirm-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
            <circle cx="9" cy="15" r="4.4" stroke="var(--color-gold)" strokeWidth="1.4" />
            <circle cx="17" cy="9" r="4.4" stroke="var(--color-gold)" strokeWidth="1.4" />
          </svg>
        </p>
        <h3 className="confirm-title">Thank You!</h3>
        <p className="confirm-text">Your presence means so much to us.</p>
        <p className="confirm-status">
          {secondsLeft > 0
            ? `Preparing your confirmation... ${secondsLeft}`
            : "Opening WhatsApp..."}
        </p>
        {secondsLeft === 0 && (
          <a
            className="confirm-manual-link"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tap here if WhatsApp didn't open
          </a>
        )}
      </div>
    </div>
  );
}

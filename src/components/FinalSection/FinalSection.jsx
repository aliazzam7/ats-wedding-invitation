import Ornament from "../Ornament/Ornament.jsx";
import AnimatedText from "../AnimatedText/AnimatedText.jsx";
import "./FinalSection.css";

export default function FinalSection({ couple, gallery }) {
  return (
    <section className="final section" id="final">
      <div className="final__image-wrap">
        <img
          className="final__bg"
          src={gallery.finalBg}
          alt={`${couple.groomName} and ${couple.brideName}`}
          loading="lazy"
        />
      </div>
      <div className="final__overlay" />
      <div className="section__inner final__inner">
        <p className="final__line">
          We can't wait to celebrate this beautiful moment with you.
        </p>
        <h2 className="final__names">
          {couple.groomName} <span className="final__amp">&amp;</span> {couple.brideName}
        </h2>
        <p className="final__heart" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <path
              d="M12 20.2s-7.6-4.7-9.8-9.1C.8 7.6 2.4 4 6 3.4c2-.3 3.7.7 6 3 2.3-2.3 4-3.3 6-3 3.6.6 5.2 4.2 3.8 7.7-2.2 4.4-9.8 9.1-9.8 9.1Z"
              stroke="var(--color-gold-light)"
              strokeWidth="1.3"
            />
          </svg>
        </p>
        <Ornament flip variant="branch" />
        <AnimatedText as="p" text="Thank you for being part of our story." className="final__thanks" splitBy="word" />
      </div>
    </section>
  );
}
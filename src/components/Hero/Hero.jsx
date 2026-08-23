import Ornament from "../Ornament/Ornament.jsx";
import AnimatedText from "../AnimatedText/AnimatedText.jsx";
import "./Hero.css";

export default function Hero({ couple, hero }) {
  return (
    <section className="hero" id="hero">
      {/* طبقة الخلفية الممدودة/المموّهة — بتعبّي الفراغات بدون ما تشوّه الصورة الأساسية */}
      <div
        className="hero__bg-blur"
        style={{ backgroundImage: `url(${hero.image})` }}
        aria-hidden="true"
      />
      {/* الصورة الأساسية، كاملة بدون قص */}
      <img
        className="hero__bg"
        src={hero.image}
        alt={`${couple.groomName} and ${couple.brideName}`}
        loading="eager"
      />
      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__arch" aria-hidden="true">
        <Ornament variant="arch" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__names">
          <AnimatedText as="span" text={couple.groomName} className="hero__name" charDelay={40} />
          <span className="hero__amp">&amp;</span>
          <AnimatedText
            as="span"
            text={couple.brideName}
            className="hero__name"
            charDelay={40}
            startDelay={couple.groomName.length * 40 + 220}
          />
        </h1>
        <Ornament variant="branch" />
        <p className="hero__invite">{hero.invite}</p>
      </div>

      <a className="hero__scroll" href="#quran">
        <span>{hero.scrollHint}</span>
        <span className="hero__scroll-icon">&#8595;</span>
      </a>
    </section>
  );
}


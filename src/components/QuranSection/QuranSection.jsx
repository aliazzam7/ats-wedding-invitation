import Ornament from "../Ornament/Ornament.jsx";
import AnimatedText from "../AnimatedText/AnimatedText.jsx";
import "./QuranSection.css";

export default function QuranSection({ quran }) {
  return (
    <section className="quran section" id="quran">
      <div className="quran__arch" aria-hidden="true">
        <Ornament variant="arch" />
      </div>
      <div className="section__inner quran__inner">
        <Ornament variant="diamond" />
        <p className="quran__arabic" dir="rtl" lang="ar">
          {quran.arabic}
        </p>
        <AnimatedText
          as="p"
          text={quran.translation}
          className="quran__translation"
          splitBy="word"
          charDelay={22}
        />
        <p className="quran__reference">{quran.reference}</p>
        <Ornament variant="branch" flip />
      </div>
    </section>
  );
}

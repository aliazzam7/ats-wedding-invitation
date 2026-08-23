import AnimatedText from "../AnimatedText/AnimatedText.jsx";
import { MapPinIcon } from "../Icons/Icons.jsx";
import "./LocationSection.css";

export default function LocationSection({ event }) {
  return (
    <section className="location section" id="location">
      <div className="location__image-wrap">
        <img
          className="location__bg"
          src={event.venueImage}
          alt={event.venueName}
          loading="lazy"
        />
      </div>
      <div className="location__overlay" />
      <div className="section__inner location__inner">
        <p className="eyebrow location__eyebrow">Celebrate With Us</p>
        <AnimatedText as="h2" text={event.venueName} className="location__title" splitBy="word" />
        <p className="location__city">
          <MapPinIcon className="location__pin" /> {event.venueCity}
        </p>
        <a
          className="location__btn"
          href={event.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps
          <span className="location__btn-arrow">&#8594;</span>
        </a>
      </div>
    </section>
  );
}

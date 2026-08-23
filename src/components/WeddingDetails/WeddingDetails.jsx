import { useEffect, useRef, useState, useMemo } from "react";
import Ornament from "../Ornament/Ornament.jsx";
import AnimatedText from "../AnimatedText/AnimatedText.jsx";
import { ClockIcon, MapPinIcon } from "../Icons/Icons.jsx";
import "./WeddingDetails.css";

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

// Builds a Sun-start month grid (array of weeks, each with 7 cells;
// null = no day in that cell) plus the target day-of-month to mark.
function buildMonthGrid(dateObj) {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const targetDate = dateObj.getDate();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  return { weeks, targetDate };
}

export default function WeddingDetails({ couple, event }) {
  const gridRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Everything below is derived straight from event.dateISO, so the
  // calendar, the marked day, and the weekday name can never drift out
  // of sync with each other (unlike a hand-typed date string).
  const eventDate = useMemo(() => new Date(event.dateISO), [event.dateISO]);
  const { weeks, targetDate } = useMemo(() => buildMonthGrid(eventDate), [eventDate]);
  const monthLabel = useMemo(
    () => eventDate.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    [eventDate]
  );
  const weekdayLabel = useMemo(
    () => eventDate.toLocaleDateString("en-US", { weekday: "long" }),
    [eventDate]
  );

  return (
    <section className="details section" id="details">
      <div className="details__glow details__glow--one" aria-hidden="true" />
      <div className="details__glow details__glow--two" aria-hidden="true" />
      <div className="details__arch" aria-hidden="true">
        <Ornament variant="arch" />
      </div>

      <div className="section__inner details__inner">
        <p className="eyebrow details__eyebrow">The Wedding</p>
        <h2 className="details__names">
          {couple.groomName} <span className="details__amp">&amp;</span> {couple.brideName}
        </h2>
        <Ornament variant="diamond" />
        <AnimatedText as="p" text={event.dateDisplay} className="details__date" splitBy="word" />

        <div className={`details__stack ${inView ? "details__stack--in" : ""}`} ref={gridRef}>
          {/* Calendar card */}
          <div className="details__calendar" style={{ "--card-index": 0 }}>
            <div className="details__calendar-head">
              <span className="details__calendar-month">{monthLabel}</span>
            </div>

            <div className="details__calendar-weekdays">
              {WEEKDAY_LABELS.map((label, i) => (
                <span key={`wd-${i}`}>{label}</span>
              ))}
            </div>

            <div className="details__calendar-grid">
              {weeks.map((week, wi) =>
                week.map((day, di) => (
                  <span
                    key={`c-${wi}-${di}`}
                    className={
                      "details__calendar-cell" +
                      (day === null ? " details__calendar-cell--empty" : "") +
                      (day === targetDate ? " details__calendar-cell--marked" : "")
                    }
                  >
                    {day !== null && (
                      <>
                        <span className="details__calendar-day-num">{day}</span>
                        {day === targetDate && (
                          <svg
                            className="details__calendar-heart"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M12 21s-6.7-4.35-9.33-8.2C.87 10.1 1.2 6.9 3.6 5.1 5.7 3.5 8.4 4 10 6c.7.85 1.3 1.75 2 1.75s1.3-.9 2-1.75c1.6-2 4.3-2.5 6.4-.9 2.4 1.8 2.73 5 .93 7.7C18.7 16.65 12 21 12 21z" />
                          </svg>
                        )}
                      </>
                    )}
                  </span>
                ))
              )}
            </div>

            <div className="details__calendar-foot">
              <span className="details__calendar-weekday-full">{weekdayLabel}</span>
              <span className="details__calendar-divider" aria-hidden="true" />
              <span className="details__calendar-time">
                <ClockIcon />
                {event.timeDisplay}
              </span>
            </div>
          </div>

          {/* Location card */}
          <div className="details__location" style={{ "--card-index": 1 }}>
            <span className="details__location-icon">
              <MapPinIcon />
            </span>
            <span className="details__location-label">Location</span>
            <span className="details__location-name">{event.venueName}</span>
            <span className="details__location-city">{event.venueCity}</span>

            <a
              className="details__map-btn"
              href={event.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="details__map-btn-fill" aria-hidden="true" />
              <span className="details__map-btn-label">View Location</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
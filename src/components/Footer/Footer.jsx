import { useState } from "react";
import ICONS from "../Icons/Icons.jsx";
import "./Footer.css";

const SOCIAL_LABELS = {
  instagram: "Instagram",
  whatsapp: "WhatsApp",
  tiktok: "TikTok",
  website: "Website",
};

export default function Footer({ footer }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <footer className="footer">
      <p className="footer__text">
        Created by{" "}
        <button
          className="footer__brand"
          onClick={() => setMenuOpen(true)}
        >
          {footer.brand}
        </button>
      </p>

      {menuOpen && (
        <div
          className="footer-menu-overlay"
          onClick={() => setMenuOpen(false)}
        >
          <div className="footer-menu" onClick={(e) => e.stopPropagation()}>
            <button
              className="footer-menu__close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <p className="footer-menu__eyebrow">Created by</p>
            <p className="footer-menu__brand">{footer.brand}</p>

            <div className="footer-menu__links">
              {Object.entries(footer.links).map(([key, url]) => {
                const Icon = ICONS[key];
                return (
                  <a
                    key={key}
                    className="footer-menu__link"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="footer-menu__icon" aria-hidden="true">
                      {Icon ? <Icon /> : null}
                    </span>
                    {SOCIAL_LABELS[key]}
                    <span className="footer-menu__link-arrow">&#8594;</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

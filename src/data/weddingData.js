import heroImg from "../assets/heroimg.png";

const weddingData = {
  couple: {
    groomName: "Ali",
    brideName: "Rawan",
  },

  event: {
    dateISO: "2026-09-11T17:00:00",
    dateDisplay: "Saturday, 11 septmbre 2026",
    timeDisplay: "5:00 PM",
    venueName: "Le Royal Ballroom",
    venueCity: "Beirut, Lebanon",
    venueImage:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=80",
    googleMapsUrl: "https://maps.google.com/?q=Le+Royal+Hotel+Beirut",
  },

  quran: {
    arabic:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    translation:
      "\u201CAnd among His signs is that He created for you spouses from among yourselves, that you may find tranquility in them, and He placed between you affection and mercy.\u201D",
    reference: "Surah Ar-Rum \u00B7 30:21",
  },

  // Portrait crop, 3:4 — this is the first thing guests see.
hero: {
  eyebrow: "Together With Their Families",
  image: heroImg ,
  // image:
  //   "https://images.unsplash.com/photo-1517456215183-9a2c3a748d0c?auto=format&fit=crop&w=1000&h=1400&q=80",
  invite: "request the honor of your presence at the celebration of their marriage",
  scrollHint: "Scroll to Begin",
},

  // Wide landscape crop, used full-bleed with a dark gradient overlay.
  gallery: {
    finalBg:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80",
  },

  rsvp: {
    whatsappNumber: "96176915446",
  },

  music: {
    videoId: "TSO3Bw6nmTw",
  },

  footer: {
    brand: "Ali Tech Solutions",
    links: {
      instagram: "https://www.instagram.com/ali.tech.solutions?igsi=MjRuNHc5a3pvMHpk",
      whatsapp: "https://wa.me/96176915446",
      tiktok: "https://www.tiktok.com/@ali.tech.solutions?_r=1&_t=ZS-997fWE7LcnN",
      website: "https://www.alitechsolution.com/",
    },
  },
};

export default weddingData;

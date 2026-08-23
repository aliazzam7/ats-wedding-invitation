// import { useState } from "react";
// import weddingData from "./data/weddingData.js";

// import IntroScreen from "./components/IntroScreen/IntroScreen.jsx";
// import MusicToggle from "./components/MusicToggle/MusicToggle.jsx";
// import Hero from "./components/Hero/Hero.jsx";
// import QuranSection from "./components/QuranSection/QuranSection.jsx";
// import Countdown from "./components/Countdown/Countdown.jsx";
// import WeddingDetails from "./components/WeddingDetails/WeddingDetails.jsx";
// import RSVP from "./components/RSVP/RSVP.jsx";
// import LocationSection from "./components/LocationSection/LocationSection.jsx";
// import FinalSection from "./components/FinalSection/FinalSection.jsx";
// import Footer from "./components/Footer/Footer.jsx";

// import "./App.css";

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { couple, event, quran, hero, gallery, rsvp, music, footer } = weddingData;

//   if (!isOpen) {
//     return <IntroScreen couple={couple} onOpen={() => setIsOpen(true)} />;
//   }

//   return (
//     <div className="app">
//       <MusicToggle videoId={music.videoId} />
//       <Hero couple={couple} hero={hero} />
//       <QuranSection quran={quran} />
//       <Countdown dateISO={event.dateISO} />
//       <WeddingDetails couple={couple} event={event} />
//       <RSVP whatsappNumber={rsvp.whatsappNumber} couple={couple} />
//       <LocationSection event={event} />
//       <FinalSection couple={couple} gallery={gallery} />
//       <Footer footer={footer} />
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import weddingData from "./data/weddingData.js";

import IntroScreen from "./components/IntroScreen/IntroScreen.jsx";
import MusicToggle from "./components/MusicToggle/MusicToggle.jsx";
import Hero from "./components/Hero/Hero.jsx";
import QuranSection from "./components/QuranSection/QuranSection.jsx";
import Countdown from "./components/Countdown/Countdown.jsx";
import WeddingDetails from "./components/WeddingDetails/WeddingDetails.jsx";
import RSVP from "./components/RSVP/RSVP.jsx";
import LocationSection from "./components/LocationSection/LocationSection.jsx";
import FinalSection from "./components/FinalSection/FinalSection.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { couple, event, quran, hero, gallery, rsvp, music, footer } = weddingData;

  // لما المستخدم يرجع عالصفحة بعد ما يروح عالواتساب (أو أي تطبيق تاني)
  // منعمل reload كامل للصفحة حتى ينمسح الـstate القديم (اسم، عدد ضيوف...)
  useEffect(() => {
    const resetIfReturning = () => {
      if (sessionStorage.getItem("wentToWhatsapp") === "1") {
        sessionStorage.removeItem("wentToWhatsapp");
        window.location.reload();
      }
    };

    const handlePageShow = (e) => {
      if (e.persisted) resetIfReturning();
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") resetIfReturning();
    };

    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("focus", resetIfReturning);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("focus", resetIfReturning);
    };
  }, []);

  if (!isOpen) {
    return <IntroScreen couple={couple} onOpen={() => setIsOpen(true)} />;
  }

  return (
    <div className="app">
      <MusicToggle videoId={music.videoId} />
      <Hero couple={couple} hero={hero} />
      <QuranSection quran={quran} />
      <Countdown dateISO={event.dateISO} />
      <WeddingDetails couple={couple} event={event} />
      <RSVP whatsappNumber={rsvp.whatsappNumber} couple={couple} />
      <LocationSection event={event} />
      <FinalSection couple={couple} gallery={gallery} />
      <Footer footer={footer} />
    </div>
  );
}
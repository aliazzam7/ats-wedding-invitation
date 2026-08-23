import { useState } from "react";
import ConfirmationPopup from "../ConfirmationPopup/ConfirmationPopup.jsx";
import AnimatedText from "../AnimatedText/AnimatedText.jsx";
import "./RSVP.css";

export default function RSVP({ whatsappNumber, couple }) {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(2);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const decrement = () => setGuests((g) => Math.max(1, g - 1));
  const increment = () => setGuests((g) => Math.min(10, g + 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name so we know who's coming.");
      return;
    }
    setError("");

    // منحط الفلاغ هون: هاي أضمن لحظة قبل ما المستخدم يدوس عرابط الواتساب
    // بالـpopup، حتى لما يرجع عالصفحة نعرف نعمل reload وننضف الفورم
    sessionStorage.setItem("wentToWhatsapp", "1");

    setShowPopup(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Wedding RSVP\n\nGuest Name: ${name}\nNumber of Guests: ${guests}\n\nWe are happy to confirm our attendance at your wedding, ${couple.groomName} & ${couple.brideName}.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleClosePopup = () => {
    // إذا سكر الـpopup بدون ما يدوس عالواتساب فعلياً، منشيل الفلاغ
    // حتى ما يصير reload غير مبرر لما يرجع للصفحة لاحقاً
    sessionStorage.removeItem("wentToWhatsapp");
    setShowPopup(false);
  };

  return (
    <section className="rsvp section" id="rsvp">
      <div className="section__inner rsvp__inner">
        <p className="eyebrow">RSVP</p>
        <AnimatedText as="h2" text="Will You Join Us?" className="rsvp__title" splitBy="word" />
        <p className="rsvp__sub">
          Your presence would make our special day even more meaningful.
        </p>

        <form className="rsvp__form" onSubmit={handleSubmit}>
          <label className="rsvp__field">
            <span className="rsvp__field-label">Your Name</span>
            <input
              className="rsvp__input"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <div className="rsvp__field">
            <span className="rsvp__field-label">Number of Guests</span>
            <div className="rsvp__stepper">
              <button
                type="button"
                className="rsvp__stepper-btn"
                onClick={decrement}
                aria-label="Decrease guests"
              >
                &#8722;
              </button>
              <span className="rsvp__stepper-value">{guests}</span>
              <button
                type="button"
                className="rsvp__stepper-btn"
                onClick={increment}
                aria-label="Increase guests"
              >
                +
              </button>
            </div>
          </div>

          {error && <p className="rsvp__error">{error}</p>}

          <button type="submit" className="rsvp__submit">
            <span className="rsvp__submit-label">Send RSVP</span>
            <span className="rsvp__submit-arrow">&#8594;</span>
          </button>
        </form>
      </div>

      {showPopup && (
        <ConfirmationPopup
          whatsappUrl={whatsappUrl}
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
}

// import { useState } from "react";
// import ConfirmationPopup from "../ConfirmationPopup/ConfirmationPopup.jsx";
// import AnimatedText from "../AnimatedText/AnimatedText.jsx";
// import "./RSVP.css";

// export default function RSVP({ whatsappNumber, couple }) {
//   const [name, setName] = useState("");
//   const [guests, setGuests] = useState(2);
//   const [showPopup, setShowPopup] = useState(false);
//   const [error, setError] = useState("");

//   const decrement = () => setGuests((g) => Math.max(1, g - 1));
//   const increment = () => setGuests((g) => Math.min(10, g + 1));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name.trim()) {
//       setError("Please enter your name so we know who's coming.");
//       return;
//     }
//     setError("");
//     setShowPopup(true);
//   };

//   const whatsappMessage = encodeURIComponent(
//     `Wedding RSVP\n\nGuest Name: ${name}\nNumber of Guests: ${guests}\n\nWe are happy to confirm our attendance at your wedding, ${couple.groomName} & ${couple.brideName}.`
//   );
//   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

//   return (
//     <section className="rsvp section" id="rsvp">
//       <div className="section__inner rsvp__inner">
//         <p className="eyebrow">RSVP</p>
//         <AnimatedText as="h2" text="Will You Join Us?" className="rsvp__title" splitBy="word" />
//         <p className="rsvp__sub">
//           Your presence would make our special day even more meaningful.
//         </p>

//         <form className="rsvp__form" onSubmit={handleSubmit}>
//           <label className="rsvp__field">
//             <span className="rsvp__field-label">Your Name</span>
//             <input
//               className="rsvp__input"
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>

//           <div className="rsvp__field">
//             <span className="rsvp__field-label">Number of Guests</span>
//             <div className="rsvp__stepper">
//               <button
//                 type="button"
//                 className="rsvp__stepper-btn"
//                 onClick={decrement}
//                 aria-label="Decrease guests"
//               >
//                 &#8722;
//               </button>
//               <span className="rsvp__stepper-value">{guests}</span>
//               <button
//                 type="button"
//                 className="rsvp__stepper-btn"
//                 onClick={increment}
//                 aria-label="Increase guests"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {error && <p className="rsvp__error">{error}</p>}

//           <button type="submit" className="rsvp__submit">
//             <span className="rsvp__submit-label">Send RSVP</span>
//             <span className="rsvp__submit-arrow">&#8594;</span>
//           </button>
//         </form>
//       </div>

//       {showPopup && (
//         <ConfirmationPopup
//           whatsappUrl={whatsappUrl}
//           onClose={() => setShowPopup(false)}
//         />
//       )}
//     </section>
//   );
// }

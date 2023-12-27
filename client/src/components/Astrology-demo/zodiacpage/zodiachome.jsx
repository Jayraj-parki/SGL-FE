/* eslint-disable react/no-unescaped-entities */
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./zodiac.css";
import ariesstones from "../../../assets/zodiacstones/Aries.png";
import cancerstones from "../../../assets/zodiacstones/cancer.png";
import capricornstones from "../../../assets/zodiacstones/capricorn.png";
import geministones from "../../../assets/zodiacstones/gemini.png";
import aquariusstones from "../../../assets/zodiacstones/Aquarius.png";
import leostones from "../../../assets/zodiacstones/leo.png";
import librastones from "../../../assets/zodiacstones/libra.png";
import piecesstones from "../../../assets/zodiacstones/pisches.png";
import scorpiostones from "../../../assets/zodiacstones/scorpio.png";
import taurusstones from "../../../assets/zodiacstones/taurus.png";
import virgostones from "../../../assets/zodiacstones/virgo.png";

const zodiacStonesData = [
  { name: "Aries", image: ariesstones, price: "$10" },
  { name: "Aquarius", image: aquariusstones, price: "$15" },
  { name: "Cancer", image: cancerstones, price: "$12" },
  { name: "Capricorn", image: capricornstones, price: "$18" },
  { name: "Gemini", image: geministones, price: "$14" },
  { name: "Leo", image: leostones, price: "$20" },
  { name: "Libra", image: librastones, price: "$16" },
  { name: "Pisces", image: piecesstones, price: "$22" },
  { name: "Scorpio", image: scorpiostones, price: "$25" },
  { name: "Taurus", image: taurusstones, price: "$19" },
  { name: "Virgo", image: virgostones, price: "$21" },
];

const Zodiachome = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const zodiacImagesRef = useRef(null);
  const [autoScrollTimer, setAutoScrollTimer] = useState(null);
  const [isUserActive, setIsUserActive] = useState(true);

  const handleScroll = (direction) => {
    const container = zodiacImagesRef.current;
    const scrollAmount = 200; // Adjust the scroll amount as needed

    if (direction === "right") {
      container.scrollLeft += scrollAmount;
    } else if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    }

    // Reset auto-scroll timer on manual scroll or button click
    resetAutoScrollTimer();
  };

  const resetAutoScrollTimer = () => {
    // Reset the timer for auto-scroll after 5 seconds
    clearTimeout(autoScrollTimer);

    const newTimer = setTimeout(() => {
      handleAutoScroll();
    }, 10000);

    setAutoScrollTimer(newTimer);
  };

  const handleAutoScroll = () => {
    const container = zodiacImagesRef.current;

    // Animate scroll from left to right
    const startPosition = container.scrollLeft;
    const endPosition = container.scrollWidth - container.clientWidth;
    const step = 5; // Adjust the step for smoothness
    let currentPosition = startPosition;

    const scrollInterval = setInterval(() => {
      currentPosition += step;
      container.scrollLeft = currentPosition;

      if (currentPosition >= endPosition || !isUserActive) {
        clearInterval(scrollInterval);

        // Scroll back to point 0 after 2 seconds
        setTimeout(() => {
          container.scrollLeft = 0;
        }, 2000);

        // Reset auto-scroll timer
        resetAutoScrollTimer();
      }
    }, 16); // 60 frames per second
  };

  const handleUserActivity = () => {
    // Set user activity to true and restart auto-scroll timer
    setIsUserActive(true);
    resetAutoScrollTimer();
  };

  useEffect(() => {
    // Initialize auto-scroll timer on component mount
    resetAutoScrollTimer();

    // Clear auto-scroll timer on component unmount
    return () => clearTimeout(autoScrollTimer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // Add event listeners for mouse and keyboard events
    document.addEventListener("mousemove", handleUserActivity);
    document.addEventListener("keydown", handleUserActivity);

    // Remove event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleUserActivity);
      document.removeEventListener("keydown", handleUserActivity);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const handleViewDetails = (clickedItem) => {
    setSelectedItem(clickedItem);

    // Store selected item data in session storage
    sessionStorage.setItem("selectedItem", JSON.stringify(clickedItem));

    // Redirect to /diamondscart with selected data
    navigate("/diamondscart");
  };

  return (
    <>
      <div className="zodiacsection">
        <h1 className="zodiacheading">Zodiac</h1>
        <div className="zodiacdesc">
          <p>
            The zodiac is a belt-shaped region of the sky that extends
            approximately 8° north and south (as measured in celestial latitude)
            of the ecliptic, which is the apparent path of the Sun across the
            celestial sphere over the course of the year. The orbital paths of
            the Moon and major planets are within the belt of the zodiac.
            <br />
            In Western astrology, and formerly astronomy, the zodiac is divided
            into the following twelve signs: Aries, Taurus, Gemini, Cancer, Leo,
            Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces.
            Each occupies 30° of celestial longitude and roughly correspond to
            the astronomical constellations with the same name. These
            astrological signs form a celestial coordinate system, or more
            specifically an ecliptic coordinate system, which takes the ecliptic
            as the origin of latitude and the Suns position at vernal equinox as
            the origin of longitude.
            <br />
            This division of the ecliptic into zodiacal signs originated with
            Babylonian astronomy during the 1st millennium BC. Babylonian
            astronomers divided the ecliptic into 12 equal "signs". Due to the
            precession of the equinoxes, the time of year the Sun is in a given
            constellation has changed since Babylonian times, and the point of
            March equinox has moved from Aries into Pisces. The zodiac was
            communicated into Greek astronomy by the 2nd century BC, and from
            there into the Hindu zodiac. In modern astronomy, the ecliptic
            coordinate system is still used for tracking Solar System objects.
          </p>
        </div>

        <div className="zodiac-scroll-container" ref={zodiacImagesRef}>
          {zodiacStonesData.map((item, index) => (
            <div key={index} className="zodiac-card">
              <img src={item.image} alt={item.name} />
              <button onClick={() => handleViewDetails(item)}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="scroll-buttons">
        <button onClick={() => handleScroll("left")}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={() => handleScroll("right")}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </>
  );
};

export default Zodiachome;

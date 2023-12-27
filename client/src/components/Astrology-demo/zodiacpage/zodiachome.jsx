// import zodiacmainimage from '../../../assets/zodiacstones/zodiacmainimg.jpeg'

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

const Zodiachome = () => {
  return (
    <>
      <div className="zodiacsection">
        <h1 className="zodiacheadding">Zodiac</h1>
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
            as the origin of latitude and the Sun's position at vernal equinox
            as the origin of longitude.
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

        <div className="zodiac-images">
          <div>
            <img src={ariesstones} alt="aries" />
          </div>
          <div>
            <img src={aquariusstones} alt="aries" />
          </div>
          <div>
            <img src={cancerstones} alt="aries" />
          </div>
          <div>
            <img src={capricornstones} alt="aries" />
          </div>
          <div>
            <img src={geministones} alt="aries" />
          </div>
          <div>
            <img src={leostones} alt="aries" />
          </div>
          <div>
            <img src={librastones} alt="aries" />
          </div>
          <div>
            <img src={piecesstones} alt="aries" />
          </div>
          <div>
            <img src={scorpiostones} alt="aries" />
          </div>
          <div>
            <img src={taurusstones} alt="aries" />
          </div>
          <div>
            <img src={virgostones} alt="aries" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Zodiachome;

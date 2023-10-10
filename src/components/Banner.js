import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/pp.jpg";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import { HashLink } from "react-router-hash-link";
import resume from "../assets/img/SwapnilSinghResume-3.pdf";
// import resume from C:\Users\swapn\Desktop\web-dev-projects-main\src\assets\img\SwapnilDocumentAfterPortfolio.pdf"
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Swapnil ,`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    <ul className="space-y-4">
                      <li className="tracking-wide">
                        I invite you to explore my portfolio and witness the
                        fusion of innovation and functionality.I am a skilled
                        MERN stack developer with a strong foundation in Next.js
                        and TypeScript. My portfolio showcases my expertise in
                        building full-stack web applications, from database
                        design using MongoDB to responsive front-end
                        development. I have a keen eye for UI/UX design,
                        utilizing Chakra UI and Tailwind CSS to create visually
                        appealing and user-friendly interfaces. My projects not
                        only demonstrate technical prowess but also a deep
                        understanding of the aesthetics and functionality that
                        drive exceptional user experiences.
                      </li>
                      <li className="tracking-wide">
                        With a creative mindset and a knack for problem-solving,
                        I've brought five projects to life, each showcasing the
                        power and versatility of modern web development.
                      </li>
                    </ul>
                  </p>
                  <span className="navbar-text">
                    <a href={resume} download="Resume">
                      <button className="vvd">
                        <i class="ri-mail-download-line"></i>Resume
                      </button>
                    </a>
                    <span
                      onClick={toggleMenu}
                      className="text-2xl text-smallTextColor md:hidden cursor-pointer"
                    >
                      <i class="ri-menu-line"></i>
                    </span>
                  </span>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

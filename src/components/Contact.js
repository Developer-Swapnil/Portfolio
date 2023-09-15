import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailsjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailsjs
      .sendForm(
        "service_hac9mbp",
        "template_lgrxkof",
        form.current,
        "NM7jT-L0PW5z9grKr"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "ok") {
            setButtonText("Sended");
            setStatus({ succes: true, message: "Message sent successfully" });
            setFormDetails(formInitialDetails);
          }
        },
        (error) => {
          console.log(error.text);
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );
    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit} ref={form}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          readOnly={formDetails.firstName}
                          placeholder="First Name"
                          name="first"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          readOnly={formDetails.lasttName}
                          placeholder="Last Name"
                          name="last"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          readOnly={formDetails.email}
                          placeholder="Email Address"
                          name="email"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          readOnly={formDetails.phone}
                          placeholder="Phone No."
                          name="phone"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          readOnly={formDetails.message}
                          placeholder="Message"
                          name="message"
                        ></textarea>
                        <button type="submit" value="Send">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

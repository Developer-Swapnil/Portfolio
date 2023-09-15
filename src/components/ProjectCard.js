// import { Col } from "react-bootstrap";
import "./ProjectCard.css";
import github from "../assets/img/github.svg";
import liveLink from "../assets/img/link.svg";

export const ProjectCard = (props) => {
  const projectDetails = (name) => {
    if (name === "Easy Bikes") {
      return (
        <ul className="list-disc space-y-4">
          <li className="tracking-wide">
            Easy Bike website is for buying and selling used bikes, developed
            using <b>MERN</b> Stack.
          </li>
          <li className="tracking-wide">
            {" "}
            Used <b>Cloudinary</b> for uploading and fetching bikes images.
          </li>
          <li className="tracking-wide">
            Uses <b>JWT</b> for authorization and authentication and For UI
            Logging
            <b>Sentry</b> is used.
          </li>
          <li className="tracking-wide">
            Backend deployed on <b>Render</b> and Frontend deployed on{" "}
            <b>Netlify</b>.
          </li>
        </ul>
      );
    } else if (name === "Wooble Chat") {
      return (
        <ul className="list-disc space-y-4">
          <li className="tracking-wide">
            Wooble website is for real-time chatting, developed using{" "}
            <b>MERN</b> stack. It supports both group chat and one-to-one chat.
          </li>
          <li className="tracking-wide">
            It utilizes <b>Cloudinary</b> for uploading and fetching profile
            pictures, and the styling is achieved with <b>Chakra UI</b>.
          </li>
          <li className="tracking-wide">
            Real-time notifications are implemented using the Notification-Badge
            library.
          </li>
          <li className="tracking-wide">
            Authorization and authentication are handled using <b>JWT</b>, and
            UI Logging is implemented.
          </li>
          <li className="tracking-wide">
            Wooble is deployed on <b>Render</b>.
          </li>
        </ul>
      );
    } else if (name === "Weather Map") {
      return (
        <ul className="list-disc space-y-4">
          <li className="tracking-wide">
            Weather Map is your go-to source for real-time weather insights,
            featuring an interactive map, all powered by the versatile{" "}
            <b>MERN</b> stack.
          </li>
          <li className="tracking-wide">
            Discover a comprehensive set of tools including a <b>Speedometer</b>
            , <b>UV Index Meter</b>, vivid <b>Sunrise</b>, and <b>Sunset</b>{" "}
            visualizations, alongside a meticulous <b>5-day</b> weather
            forecast.
          </li>
          <li className="tracking-wide">
            Our application leverages the robust <b>TomTomMap</b> features for
            map display and taps into the <b>OpenWeather API</b> for accurate
            weather details.
          </li>
          <li className="tracking-wide">
            Experience Weather Map's full potential, hosted seamlessly on{" "}
            <b>Netlify</b>.
          </li>
        </ul>
      );
    } else if (name === "Weathry") {
      return (
        <ul className="list-disc space-y-4">
          <li className="tracking-wide">
            Weathry is a dynamic weather application, meticulously crafted using
            the <b>MERN</b> stack.
          </li>
          <li>
            Experience real-time weather updates, including current conditions
            and an insightful <b>5-Day</b> forecast, all presented with a
            captivating UI. Dive deeper into environmental insights with
            comprehensive <b>Air Pollution</b> data.
          </li>
          <li className="tracking-wide">
            Powered by the <b>OpenWeather API</b>, Weathry ensures accurate and
            up-to-date weather details.
          </li>
          <li>
            Explore Weathry's delightful features on <b>Netlify</b>.
          </li>
        </ul>
      );
    } else if (name === "Rick And Morty") {
      return (
        <ul className="list-disc space-y-4">
          <li className="tracking-wide">
            Step into the captivating world of Rick and Morty with our
            <b> MERN-based</b> project. Explore an extensive catalog of
            characters, each accompanied by comprehensive details. Our intuitive
            interface lets you filter characters by their status, whether
            <b> 'Alive,' 'Dead,' or 'Unknown.'</b> Further refine your search by
            gender and species, making it effortless to find your favorite
            characters.
          </li>

          <li className="tracking-wide">
            What's more, we've elevated the user experience with stylish design,
            thanks to the elegant <b>Chakra UI</b> framework. It's your one-stop
            destination for unraveling the eccentric and unpredictable universe
            of Rick and Morty, all wrapped up in a visually stunning package.
          </li>
        </ul>
      );
    }
  };
  return (
    <div class="card mb-3 max-width-540px">
      <div className="projct-des">
        <h4>{props.title}</h4>
        <span>{props.description}</span>
      </div>

      <div className="cards" style={{ width: "36rem" }}>
        <img src={props.imgUrl} className="card-img-top" alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p
            className="card-text"
            style={{
              width: "100%",
              textAlign: "left",
              marginRight: "50px",
            }}
          >
            {projectDetails(props.title)}
          </p>
          <div class="card-body link-icon">
            <a href={props.liveDemoLink} class="card-link">
              <img src={liveLink} alt=" Link" />
            </a>
            <a href={props.gitHubLink} class="card-link">
              <img src={github} alt="Github Link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

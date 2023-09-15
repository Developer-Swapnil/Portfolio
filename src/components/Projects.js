import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/easyBikes-1.png";
import projImg2 from "../assets/img/Wooble-1.png";
import projImg3 from "../assets/img/weather-app-map-1.png";
import projImg4 from "../assets/img/weathry-1.png";
import projImg5 from "../assets/img/rickandmorty-1.png";

// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Easy Bikes",
      description: "Design & Development",
      imgUrl: projImg1,
      liveDemoLink: "https://easybikes.netlify.app/",
      gitHubLink: "https://github.com/Developer-Swapnil/Easy-Bikes.git",
    },
    {
      title: "Wooble Chat",
      description: "Design & Development",
      imgUrl: projImg2,
      liveDemoLink: "https://wooble-a479.onrender.com/",
      gitHubLink: "https://github.com/Developer-Swapnil/Wooble-chat-app.git",
    },
    {
      title: "Weather Map",
      description: "Design & Development",
      imgUrl: projImg3,
      liveDemoLink: "https://weather-forcast-map.netlify.app/",
      gitHubLink: "https://github.com/Developer-Swapnil/Weather-App.git",
    },
    {
      title: "Weathry",
      description: "Design & Development",
      imgUrl: projImg4,
      liveDemoLink: "https://weathry-weather-app.netlify.app/",
      gitHubLink: "https://github.com/Developer-Swapnil/Weathry-React.git",
    },
    {
      title: "Rick And Morty",
      description: "Design & Development",
      imgUrl: projImg5,
      liveDemoLink: "https://rick-and-morty-characters-details.netlify.app/",
      gitHubLink: "https://github.com/Developer-Swapnil/Rick-and-Morty.git",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    My expertise includes creating responsive user interfaces
                    with React, developing robust backends with Node.js and
                    Express.js, and crafting efficient, data-driven applications
                    with MongoDB. I'm dedicated to staying up-to-date with the
                    latest technologies and best practices to ensure the highest
                    quality in every project.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center flex-nowrap align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project 3</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Project 4</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth">Project 5</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp " : ""
                      }
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Tab.Pane eventKey="first">
                        <Row className="max-width:200px">
                          <ProjectCard key={1} {...projects[0]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard key={2} {...projects[1]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <ProjectCard key={3} {...projects[2]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          <ProjectCard key={4} {...projects[3]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fifth">
                        <Row>
                          <ProjectCard key={5} {...projects[4]} />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="clr"></img>
    </section>
  );
};

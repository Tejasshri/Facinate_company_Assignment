import { useContext } from "react";
import "./index.css";
import ReactContext from "../../Context/ReactContext";
import ContactUsSection from "../ContactUsSection";

export default function ProjectSection() {
  const { projects } = useContext(ReactContext);
  return (
    <section className="project-section" id="projects">
      <h1>Projects</h1>
      <ul className="projects-container">
        {projects.map((eachProject, index) => {
          return (
            <li key={crypto.randomUUID()}>
              <div className="project-details">
                <h1>{eachProject.name}</h1>
                <p>{eachProject.description}</p>
                <a href={eachProject.projectLink}>
                  <button className="view-project-btn">View Project</button>
                </a>
              </div>
              <img
                style={{
                  order: index % 2 !== 0 && "-1",
                }}
                alt=""
                className="project-image"
                src="https://th.bing.com/th/id/R.91e206fa02d81f85dd4e42ef005a88d9?rik=5MxgANLhpAlBJw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f07%2fautunm-desktop-natural-hd-wallpapers.jpg&ehk=j7yVlSgUBySdpPIKhx0ovaCIvpI2u%2f%2bw3lfHET9HT4w%3d&risl=1&pid=ImgRaw&r=0"
              />
            </li>
          );
        })}
      </ul>
      <ContactUsSection />
    </section>
  );
}

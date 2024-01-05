import Navbar from "./components/Navbar";
import AddProjectsSection from "./components/AddProjectsSection";
import ProjectSection from "./components/ProjectSection";
import ContactUsSection from "./components/ContactUsSection";
import "./App.css";
import { useContext, useState } from "react";
import ReactContext from "./Context/ReactContext";

const initialProjects = [
  {
    name: "Todo Application",
    projectLink: "https://tododb.ccbp.tech",
    description: "This is a Todo Application",
  },
  {
    name: "Todo Application",
    projectLink: "https://tododb.ccbp.tech",
    description: "This is a Todo Application",
  },
];

function App() {
  const [projects, addProjects] = useState(initialProjects);

  const handleAddProjects = (newProject) => {
    addProjects([...projects, newProject]);
  };

  console.log(projects);

  return (
    <ReactContext.Provider value={{ projects, addProjects }}>
      <div className="portfolio">
        <section className="protfolio-details-section">
          <Navbar />
          <div className="profile" id="about">
            <p>Frontent Developer</p>
            <h1>
              Hello, my name
              <br /> is&nbsp;
              <span>Tejas</span>
            </h1>
            <p className="about-profile">
              I am from Uttar Pradesh. I Completed my graduation in 2023. In
              part time I am improving my skills with CCBP 4.0 Technologies
            </p>
            <div className="btn-box">
              <button className="filled-btn">Projects</button>
              <button className="outline-btn">Linkdin</button>
            </div>
          </div>
        </section>
        <AddProjectsSection />
        <ProjectSection />
      </div>
    </ReactContext.Provider>
  );
}

export default App;

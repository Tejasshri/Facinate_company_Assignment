import { useContext, useState } from "react";
import "./index.css";
import ReactContext from "../../Context/ReactContext";

const initialProjectData = {
  name: "",
  projectLink: "",
  description: "",
  imageLink:
    "https://th.bing.com/th/id/R.91e206fa02d81f85dd4e42ef005a88d9?rik=5MxgANLhpAlBJw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f07%2fautunm-desktop-natural-hd-wallpapers.jpg&ehk=j7yVlSgUBySdpPIKhx0ovaCIvpI2u%2f%2bw3lfHET9HT4w%3d&risl=1&pid=ImgRaw&r=0",
};

export default function AddProjectsSection() {
  const [projectData, setProjectData] = useState(initialProjectData);
  const { addProjects, projects } = useContext(ReactContext);

  const onChangeInput = (event) => {
    console.log(projectData);
    setProjectData({ ...projectData, [event.target.name]: event.target.value });
  };

  const onAddProject = (e) => {
    e.preventDefault();
    addProjects([...projects, projectData]);
  };

  return (
    <section className="add-projects-section">
      <h1>Add Project</h1>
      <form onSubmit={onAddProject}>
        <div className="input-container">
          <label htmlFor="name" className="label">
            Project Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input"
            onChange={onChangeInput}
          />
        </div>
        <div className="input-container">
          <label htmlFor="name" className="label">
            Project Link
          </label>
          <input
            type="text"
            id="name"
            name="projectLink"
            className="input"
            onChange={onChangeInput}
          />
        </div>
        <div className="input-container">
          <label htmlFor="name" className="label">
            Description
          </label>
          <textarea
            type="text"
            id="name"
            name="description"
            className="input textarea"
            onChange={onChangeInput}
          />
        </div>
        <button type="submit" className="filled-btn add-btn">
          Add
        </button>
      </form>
    </section>
  );
}

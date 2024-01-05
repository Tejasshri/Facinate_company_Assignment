import { createContext } from "react";

export default createContext({
  projects: [
    {
      name: "Todo Application",
      projectLink: "https://tododb.ccbp.tech",
      description: "This is a Todo Application",
    },
  ],
  addProjects: () => {},
});

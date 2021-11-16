import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  // const userProjects = projects.map(project => {
  //   return <ProjectItem key={ project.id } />
  // })
  // console.log(userProjects)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => {
          return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>;
        })}
      </div>
    </div>
  );
}

export default ProjectList;



// import React from "react";
// import ProjectItem from "./ProjectItem";

// function ProjectList({ projects }) {
//   console.log(projects);

//   // const userProjects = projects.map((project) => {
//   //   return <div key={project.id}>{project.name} <div/>
//   // });

//   return (
//     <div id="projects">
//       <h2>My Projects</h2>
//       <div id="project-list"> { userProjects } </div>
//     </div>
//   );
// }

// export default ProjectList;





{/* const userProjects = projects.map((project) => {
  return <h1 key={user.id}>{user.firstName}</h1>;
}); */}

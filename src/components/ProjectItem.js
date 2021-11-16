import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology) => {
          return <span key={technology}>{technology}</span>
        })}

        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;



// import React from "react";

// function ProjectItem({ name, about, technologies }) {
//   const userTechnologies = technologies.map ((technology) => {
//     return <span key={id} >{technology} </span> 
//   })
//     // console.log("technologies", technologies)


//     return (
//       <div className="project-item">
//       <h3>{name}</h3>
//       <p>{about}</p>
//       <div className="technologies">
//         {userTechnologies}
//       </div>
//     </div>
//   );
// }

// export default ProjectItem;


// import BookCard from "./BookCard"
// import Genre from "./Genre";

// function BookContainer(props){
//     //TODO: Render BookCard dynamically for every book in props
//     return(
//         <>
//             <Genre genreList={props.genreList}/>
//             {props.bookList.map(book => <BookCard key={book.title} bookData={book}/>)}
//             <BookCard />
//             <BookCard />
//         </>
//     )
// }

// function Genre (props) {
//     return (
//       <>
//         {props.genreList.map(genre => <div key={genre}> {genre}</div>)}
//       </>
//     )
//   }
  
//   export default Genre

// export default BookContainer

import React from "react";
import { useFetch } from '../../utils/useFetch'
import { NavLink } from "react-router-dom";
import "./Galery.css";





export default function Galery() {
  const { data } = useFetch('data.json');
  console.log( { data }, "///Data///")
  const arrOfData = []
  Object.keys(data).forEach((key) => {
    arrOfData.push(data[key])
  })

  const elements = arrOfData.map((i, index) => {
    return(
      <div className="galery-card" key={i.id}>
        <NavLink to={'/Appartement=' + i.id}>
          <img src={i.cover} alt="appartement" />
          <span>{i.title}</span>
          <div className="shadow-bottom"></div>
        </NavLink>
      </div>
    )
  })
  return (
    <div className="galery-container">
      {elements}
    </div>
  );
}



// export default function Galery() {
//   const elements = data.map(getTitle => {
//     
//     <div className="galery-card" key={getTitle.id}>
//       <Link 
//       to={`/Appartement?id=${getTitle.id}`}
//       state={{ 
//         id: getTitle.id,
//         label: getTitle.title,
//         host: getTitle.host.name,
//         picture: getTitle.host.picture,
//         geo: getTitle.location,
//         rating: getTitle.rating,
//         tag: getTitle.tags,
//         description: getTitle.description,
//         equipments: getTitle.equipments,
//         cover: getTitle.pictures
//       }}
//       >
//         <img src={getTitle.cover} alt="appartement" />
//         <span>{getTitle.title}</span>
//         <div className="shadow-bottom"></div>
//       </Link>
//     </div>
//     )
//   })
//   return (
//     <div className="galery-container">
//       {elements}
//     </div>
//   );
// }

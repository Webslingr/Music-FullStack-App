// // import React from "react";
import dataService from '../services/dataService'

// const Card = (props) => {
//   return (
//   <div>
//   <div className="row">

//   {
//     props.songs.map((song) => {
    
//     // return <Card song={song} />
//       return (

  
//         <div key={song._id} className="col-md-4">
//         <div className="card mb-4 box-shadow">
//           <img 
//             className="card-img-top" 
//             data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
//             alt="Thumbnail [100%x225]" 
//             style={{height: 225, width: '100%', display: 'block'}}
//             src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22382%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20382%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16e231e5e51%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A19pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16e231e5e51%22%3E%3Crect%20width%3D%22382%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22126.96875%22%20y%3D%22120.9%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" 
//             data-holder-rendered="true" />
//           <div className="card-body">
//             <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//             <div className="d-flex justify-content-between align-items-center">
//               <div className="btn-group">
//                   <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
//                   <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
//                   <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
//               </div>
//               <small className="text-muted">{song.firstName}</small>
//             </div>
//           </div>  
//         </div>
//       </div>
//       )
//     })
//   }

// </div>
// </div>
//   )
// }

const Card = (props) => {
  return (
    <div className="row">

              {
                props.songs.map(song => {
              
                  return (

              
                    <div key={song._id} className="col-md-4">
                    <div className="card mb-4 box-shadow">
                      <img 
                        className="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        style={{height: 375, width: '100%', display: 'block'}}
                        src={song.image}
                        data-holder-rendered="true" />
                      <div className="card-body">
                        <h2 className="card-text font-weight-bold">{song.title}</h2>
                        <h3 className="card-text">{song.artist}</h3>
                        <p className="card-text">{song.album}</p>
                        <small className="text-muted">{song.genre.join(", ")}</small>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                              <button type="button" className="btn btn-sm btn-primary">View</button>
                              <button type="button" className="btn btn-sm btn-outline-primary">Edit</button>
                              <button type="button" className="btn btn-sm btn-danger font-weight-bold" onClick={dataService.deleteSong}>Delete</button>
                          </div>
                          {/* <small className="text-muted">{song.song[0].genre.join(", ")}</small> */}
                        </div>
                      </div>  
                    </div>
                  </div>
                  )
                })
              }
            
            </div>
  );
};

export default Card;
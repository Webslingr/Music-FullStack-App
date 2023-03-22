import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataService from "../services/dataService";
import "../css/signin.css";

const CreateForm = (props) => {
  // localStorage.setItem('foo', 'bar');

  //define state in this component using HOOKS! Yay
  //   const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");

  //use the hook provided by react router
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents the form from doing a browser submit


    // // Reset any validation messages
    // setErrors= ({})

    dataService.createSong(
      {songs: {
        title: title,
        image: image,
        album: album,
        artist: artist,
        genre: [genre],
      }},
      (createSuccess) => {
        if (createSuccess) {
          navigate("/");
        } else {
          console.log("Unsuccessful Creation");

          // // Save our validation errors in state
          //   switch(error.status) {
          //     case 422: {
          //         setErrors(error.data.errors); break;
          //     }
          //     case 400: {
          //         setErrors(error.data); break;
          //     }
          //   }

            // if(error.status === 422) {
            //   // Store any validation errors in state
            //   setErrors(error.data.errors);
            // } else if (error.status === 400) {
            //   setErrors(error.data)
            // }
        }
      }
    );
  };

  // const handleChange = event => {
  //   //let's update the state for the approriate field

  //     switch(event.target.name) {
  //       case 'fname': {
  //         //update the first name state hook
  //         setFirstName(event.target.value)
  //         break;
  //       }
  //       case 'lname': {
  //         //update the last name state hook
  //         setLastName(event.target.value)
  //         break;
  //       }
  //       case 'email': {
  //         //update the email state hook
  //         setEmail(event.target.value)
  //         break;
  //       }
  //       case 'password': {
  //         //update the password hook
  //         setPassword(event.target.value)
  //         break;
  //       }
  //     }
  // }
  return (
    <form
      className="form-signin card box-shadow p-5 my-4"
      onSubmit={handleSubmit}
    >
      <h1 className="h3 mb-3 font-weight-normal text-center">
        Create a new song
      </h1>

      <br />
      <br />

      {/* <label htmlFor="inputId" className="sr-only">
        ID
      </label>
      <input
        type="text"
        id="id"
        name="id"
        onChange={(e) => {
          setId(e.target.value);
        }}
        // onChange={handleChange}
        className="form-control"
        placeholder="Id"
        required
        autoFocus
      />

      <br /> */}

      <label htmlFor="inputTitle" className="sr-only">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        // onChange={handleChange}
        className="form-control"
        placeholder="Title"
        required
        autoFocus
      />

      {/* Title error message */}
{/*       
      { 
        errors.title && <div className="alert alert-danger">{ errors.title.message }</div>
      } */}


      <br />

      <label htmlFor="inputImage" className="sr-only">
        Image URL
      </label>
      <input
        type="text"
        id="image"
        name="image"
        onChange={(e) => {
          setImage(e.target.value);
        }}
        // onChange={handleChange}
        className="form-control"
        placeholder="Image"
        autoFocus
      />

      {/* Image error message */}
      
      {/* { 
        errors.image && <div className="alert alert-danger">{ errors.image.message }</div>
      } */}

      <br />

      <label htmlFor="inputAlbum" className="sr-only">
        Album Name
      </label>
      <input
        type="text"
        id="album"
        name="album"
        onChange={(e) => {
          setAlbum(e.target.value);
        }}
        // onChange={handleChange}
        className="form-control"
        placeholder="Album"
        autoFocus
      />

      {/* Album error message */}
      
      {/* { 
        errors.album && <div className="alert alert-danger">{ errors.album.message }</div>
      } */}

      <br />

      <label htmlFor="inputArtist" className="sr-only">
        Artist
      </label>
      <input
        type="text"
        id="artist"
        name="artist"
        onChange={(e) => setArtist(e.target.value)}
        // onChange={handleChange}
        className="form-control"
        placeholder="Artist"
      />

      {/* Artist error message */}
      
      {/* { 
        errors.artist && <div className="alert alert-danger">{ errors.artist.message }</div>
      } */}

      <br />

      <label htmlFor="inputGenre" className="sr-only">
        Genre
      </label>
      <input
        type="text"
        id="genre"
        name="genre"
        onChange={(e) => setGenre(e.target.value)}
        // onChange={handleChange}
        className="form-control"
        placeholder="Genre"
        required
      />

      {/* Genre error message */}
{/*       
      { 
        errors.genre && <div className="alert alert-danger">{ errors.genre.message }</div>
      } */}

      <br />

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Create
      </button>
    </form>
  );
};

export default CreateForm;

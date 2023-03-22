import React, {useState} from 'react';


const searchBar = (props) => {

    props.songs.map(song => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };

    // if (searchInput.length > 0) {
    //     songs.filter((song) => {
    //     return song.name.match(searchInput);
    // });
    // }
})
}

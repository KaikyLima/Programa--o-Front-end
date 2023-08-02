import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Albums = () => {

  const [albums, setAlbums] = useState([]);


  const fetchAlbums = async () => {
    try {
     
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
      const data = response.data;
      setAlbums(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Albums</h1>
      <div>
        {albums.map(album => (
          <h3 key={album.id}>---- {album.title} ----</h3>
        ))}
      </div>
    </div>
  );
};

export default Albums;
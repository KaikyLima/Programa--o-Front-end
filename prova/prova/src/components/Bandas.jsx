import React from 'react';
import "./Bandas.css"
function Bandas(props) {

  const { musicas } = props;

return (
    <ul className="musicP">
    {musicas.map((musica, index) => (
        <li key={index} className="item">
          <h3 className="nomeMusica">{musica.musica}</h3> -{' '}
          <h4 className="NomeBandas">{musica.banda}</h4>
        </li>
      ))}
    </ul>
  );
}

export default Bandas;

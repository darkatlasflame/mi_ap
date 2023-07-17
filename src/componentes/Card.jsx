
import React, { useEffect, useState } from 'react';
import '../css/estilos.css';

function Card(props) {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      const data = await response.json();
      setPokemons(data.results);
      setIsLoading(false);
    };

    fetchPokemons();
  }, []);

  if (isLoading) {
    return <div>Cargando.....</div>;
  }

  return (
    <div>
      {pokemons.map(pokemon => (
        <div key={pokemon.name} className='contenedorTexto'>
          <img
            className='contenedorImagen'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
            alt='imagen'
          />
          <h5 className='contenedorTitulo'>{pokemon.name}</h5>
        </div>
      ))}
    </div>
  );
}

export default Card;
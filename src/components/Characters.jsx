import "./character.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Characters({ search }) {
    const [listCharacters, setListCharacters] = useState([]);
  
    useEffect(() => {
      let url = "https://rickandmortyapi.com/api/character";
      if (search) {
        url += `?name=${search}`;
      }
      fetch(url)
        .then((res) => res.json())
        .then((data) => setListCharacters(data.results));
    }, [search]);
  
    let found =
      search === undefined
        ? listCharacters
        : listCharacters
            ? listCharacters.filter((character) =>
                character.name.toLowerCase().includes(search.toLowerCase())
              )
            : [];
  
    return (
      <>
        <section>
          {found.map((character) => (
            <Link className="link" to={`/character/${character.id}`} key={character.id}>
              <div className="character">
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name} />
              </div>
            </Link>
          ))}
        </section>
        {search !== undefined && found.length === 0 && (
          <div className="noResults">
              <h3>No se encontraron resultados para la búsqueda "{search}".</h3>
          </div>
        )}
      </>
    );
  }
  
  
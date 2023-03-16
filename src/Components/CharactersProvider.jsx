import { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./Characters";
import useLocalStorage from "../hooks/useLocalStorage";
import useDebounce from "../hooks/useDebounce";

function CharactersProvider() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useLocalStorage("filter", "");
  const debouncedValue = useDebounce(filter, 500);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${filter}`
        );
        setCharacters(data.results.sort((a, b) => (a.name > b.name ? 1 : -1)));
      } catch (error) {
        setCharacters([]);
        console.error(error);
      }
    };

    fetchData();
  }, [debouncedValue]);

  console.log([characters]);

  return (
    
    <div className="CharactersProvider">
      <div className="img-wrapper">
        <img className="image" src={process.env.PUBLIC_URL + '/logo.jpg'} alt="hero"></img>
      </div>
      <div className="search-wrapper">
        <div className="search">
          <input
            className="input"
            type="text"
            placeholder={"Filter by name"}
            onChange={(event) => setFilter(event.target.value)}
            value={filter}
          ></input>
        </div>
      </div>
      <Characters characters={characters} />
    </div>
  );
}

export default CharactersProvider;

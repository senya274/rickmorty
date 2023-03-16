import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "./Loader/Loader";

const CharacterInfo = () => {
  const { id } = useParams();
  console.log(id);

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!character)
    return (
      <div className="loader-center">
        <Loader />
      </div>
    );

  return (
    <div>
      <Link to="/" className="back">
        GO BACK
      </Link>
      <div className="character-wrapper">
        
        <div className="character-info">
          <img
            className="info-image"
            src={character.image}
            alt="character picture"
          />
          <h1> {character.name}</h1>
        </div>
        <h3>Informations</h3>
        <div className="character-about">
          <div className="character-about-text">
            <h2>Gender</h2>
            <p>{character.gender}</p>
            <div className="border"></div>
            <h2>Status</h2>
            <p>{character.status}</p>
            <div className="border"></div>
            <h2>Specie</h2>
            <p>{character.species}</p>
            <div className="border"></div>
            <h2>Origin</h2>
            <p>{character.origin.name}</p>
            <div className="border"></div>
            <h2>Type</h2>
            <p>{character.type || "Unknown"}</p>
            <div className="border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;

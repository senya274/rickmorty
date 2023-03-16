import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Characters({ characters = [] }) {
  const navigate = useNavigate();
  function navigateToUser(userId) {
    navigate(`character/${userId}`);
  }
  if (!characters.length)
  return <div className="nothing-found"><h1>Sorry, nothing found by your search</h1></div>
  return (
    <div className="results">
      {characters.map((character, index) => (
        <div key={character.id} className="card" onClick={() => navigateToUser(character.id)}>
          <img
            className="card-image"
            src={character.image}
            alt={character.name}
          />
          <div className="card-text">
            <h1>{character.name}</h1>
            <p>{character.species}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Characters;

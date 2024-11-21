// src/components/SinglePlayer.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deletePlayer } from '../API/index';

const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2408-FTB-MT-WEB-PT';

const SinglePlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(`${BASE_URL}/players/${id}`);
        const data = await response.json();
        setPlayer(data.data.player);
      } catch (error) {
        console.error("Error fetching player:", error);
      }
    };

    fetchPlayer();
  }, [id]);

  const handleDelete = async () => {
    const confirmation = window.confirm("Are you sure you want to delete this player?");
    if (confirmation) {
      await deletePlayer(id);
      navigate('/');
    }
  };

  return (
    <div>
      {player ? (
        <div>
          <h2>{player.name}</h2>
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
          <img src={player.imageUrl} alt={player.name} width="150" />
          <button onClick={handleDelete}>Delete Player</button>
        </div>
      ) : (
        <p>Loading player details...</p>
      )}
    </div>
  );
};

export default SinglePlayer;

// src/components/AllPlayers.jsx
import React, { useEffect, useState } from 'react';
import { fetchAllPlayers } from '../API/index';
import { Link } from 'react-router-dom';

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getPlayers = async () => {
      const playersData = await fetchAllPlayers();
      setPlayers(playersData);
    };

    getPlayers();
  }, []);

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>All Players</h2>
      <input
        type="text"
        placeholder="Search players by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <div key={player.id}>
              <h4>{player.name}</h4>
              <p>Breed: {player.breed}</p>
              <p>Status: {player.status}</p>
              <img src={player.imageUrl} alt={player.name} width="100" />
              <Link to={`/players/${player.id}`}>See Details</Link>
            </div>
          ))
        ) : (
          <p>No players found</p>
        )}
      </div>
    </div>
  );
};

export default AllPlayers;

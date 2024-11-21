// src/API/index.js

const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2408-FTB-MT-WEB-PT';

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${BASE_URL}/players`);
    const data = await response.json();
    return data.data.players;
  } catch (error) {
    console.error("Error fetching players:", error);
  }
}

export async function addNewPlayer(player) {
  try {
    const response = await fetch(`${BASE_URL}/players`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    });
    const data = await response.json();
    return data.data.newPlayer;
  } catch (error) {
    console.error("Error adding new player:", error);
  }
}

export async function deletePlayer(playerId) {
  try {
    const response = await fetch(`${BASE_URL}/players/${playerId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting player:", error);
  }
}

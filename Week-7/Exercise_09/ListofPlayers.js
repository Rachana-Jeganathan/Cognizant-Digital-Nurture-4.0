import React from 'react';

export default function ListofPlayers() {
  const players = [
    { name: 'Harshtih', score: 50 },
    { name: 'sagar', score: 80 },
    { name: 'mukesh', score: 67 },
    { name: 'suresh', score: 90 },
    { name: 'ramesh', score: 40 },
    { name: 'kishore', score: 76 },
    { name: 'mohan', score: 35 },
    { name: 'Ravi', score: 85 },
    { name: 'Cognizant', score: 98 },
    { name: 'blaster', score: 95 },
    { name: 'roger', score: 60 },
  ];

  const below70 = players.filter(player => player.score <= 70);

  return (
    <div>
      <h2>All Players</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Players with Score ≤ 70</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {below70.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

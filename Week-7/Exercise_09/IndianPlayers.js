import React from 'react';

export default function IndianPlayers() {
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

  const allPlayers = [...T20Players, ...RanjiTrophyPlayers];

  const [first, , third, , fifth] = allPlayers;

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>First: {first}</li>
        <li>Third: {third}</li>
        <li>Fifth: {fifth}</li>
      </ul>

      <h2>Merged Players</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import Player from "../components/Player";

type GameProps = {
  players: Player[];
  hasStarted: boolean;
  turnId: string;
};

const Game: React.FC<GameProps> = ({ hasStarted, players, turnId }) => {
  const handleAction = (action: string) => {
    // Handle player actions (e.g., fold, call, raise)
    console.log(`Player performed ${action}`);

    // Send action to server
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Players table */}

      <div className="flex flex-row gap-4">
        {players &&
          players.map((player) => {
            if (player.id === "") {
              return null; // Ignore the current player
            }
            return (
              <Player
                key={player.id}
                name={player.username}
                chips={player.chips}
                isCurrentTurn={turnId === player.id}
                onAction={handleAction}
                isLocal={true}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Game;

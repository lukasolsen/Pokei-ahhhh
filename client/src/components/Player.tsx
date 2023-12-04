// Player.tsx
import React from "react";

interface PlayerProps {
  name: string;
  chips: number;
  isCurrentTurn: boolean;
  onAction: (action: string) => void;
  isLocal: boolean;
}

const Player: React.FC<PlayerProps> = ({
  name,
  chips,
  isCurrentTurn,
  onAction,
}) => {
  return (
    <div className={`mb-4 p-4 ${isCurrentTurn ? "bg-blue-200" : ""}`}>
      <h2 className="text-lg font-bold">{name}</h2>
      <p>Chips: {chips}</p>
      {isCurrentTurn && (
        <div>
          <button
            className="bg-gray-800 text-white px-2 py-1 mr-2"
            onClick={() => onAction("fold")}
          >
            Fold
          </button>
          <button
            className="bg-blue-500 text-white px-2 py-1 mr-2"
            onClick={() => onAction("call")}
          >
            Call
          </button>
          <button
            className="bg-green-500 text-white px-2 py-1"
            onClick={() => onAction("raise")}
          >
            Raise
          </button>
        </div>
      )}
    </div>
  );
};

export default Player;

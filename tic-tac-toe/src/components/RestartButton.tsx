import React from 'react';

interface RestartButtonProps {
    onRestart: () => void;
}

const RestartButton: React.FC<RestartButtonProps> = ({ onRestart }) => {
  return (
    <button onClick={onRestart}>
      Restart Game
    </button>
  );
};

export default RestartButton;
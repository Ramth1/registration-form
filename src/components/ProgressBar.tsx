import React from 'react';

interface ProgressBarProps {
  progress: number; // Progress percentage (0-100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar__fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;

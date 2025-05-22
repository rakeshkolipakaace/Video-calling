import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const ZegoCloud = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const joinRoom = useCallback(() => {
    if (value.trim()) {
      navigate(`/room/${value.trim()}`);
    } else {
      alert('Please enter a valid Room ID');
    }
  }, [navigate, value]);

  return (
    <>
      <input
        type="text"
        placeholder="Enter Room ID"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={joinRoom}>JOIN</button>
    </>
  );
};

export default ZegoCloud;

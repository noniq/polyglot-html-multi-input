import React from 'react';

export default function Item({ value, onRemove, onChange }) {
  return (
    <div>
      <input value={value} onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()} onChange={onChange} />
      <button onClick={onRemove}>x</button>
    </div>
  );
};

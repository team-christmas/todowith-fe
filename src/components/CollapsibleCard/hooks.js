import { useState } from 'react';

export function useToggle(defaultState) {
  const [flag, setFlag] = useState(defaultState);
  const toggle = () => {
    setFlag((prev) => !prev);
  };

  return [flag, toggle];
}

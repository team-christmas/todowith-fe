import { useEffect, useRef, useState } from 'react';

export function useToggle(defaultState) {
  const [flag, setFlag] = useState(defaultState);
  const toggle = () => {
    setFlag((prev) => !prev);
  };

  return [flag, toggle];
}

export function useHeight() {
  const ref = useRef(null);

  const [height, setHeight] = useState();
  useEffect(() => {
    if (!ref.current) return;
    if (height !== undefined) return;

    const boundingRect = ref.current.getBoundingClientRect();
    setHeight(boundingRect.height);
  }, [ref.current]);

  return {
    ref,
    height
  };
}

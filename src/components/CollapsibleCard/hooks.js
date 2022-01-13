import { useEffect, useRef, useState } from 'react';

export function useToggle(inheritState, callback = () => {}) {
  const [flagState, setFlag] = useState(inheritState);
  const flag = inheritState || flagState;

  const toggle = () => {
    setFlag(!flag);
    callback(!flag);
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

import { useEffect, useRef, useState } from 'react';

export function useInputTextWidth() {
  const ref = useRef(null);
  const [width, setWidth] = useState();
  useEffect(() => {
    if (!ref.current) return;
    if (!ref.current.value.length) {
      setWidth(24);
      return;
    }

    const span = document.createElement('span');
    span.innerText = ref.current.value;
    span.style.fontFamily = ref.current.style.fontFamily;
    span.style.fontSize = ref.current.style.fontSize;
    document.body.append(span);
    const boundingRect = span.getBoundingClientRect();
    setWidth(boundingRect.width);
    span.remove();
  }, [ref.current?.value]);

  return [ref, width];
}

import { useState } from 'react';

export function useCheckbox(defaultValue, callback) {
  const [checked, setChecked] = useState(defaultValue);
  const onChange = (e) => {
    setChecked(e.target.checked);
    callback(e.target.checked);
  };

  return [checked, onChange];
}

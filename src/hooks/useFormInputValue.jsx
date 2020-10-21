import { useState } from 'react';
import { useStateValue } from '../Context';

const useFormInputValue = (initialState, type) => {
  const [value, setValue] = useState(initialState);
  const [, dispatch] = useStateValue();

  const onChange = (event) => {
    const key = event.target.value;

    setValue(key);

    dispatch({
      type,
      payload: key,
    });
  };

  return { value, onChange };
};

export default useFormInputValue;

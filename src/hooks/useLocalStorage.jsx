import React, { useState } from 'react';

import Error from '../components/Error/Error';

const useLocalStorage = (key, initialValue) => {
  const [storeValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return setValue(value);
    } catch (error) {
      return (
        <Error message={error} />
      );
    }
  };

  return [storeValue, setLocalStorage];
};


export default useLocalStorage;

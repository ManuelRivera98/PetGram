import { useState, useEffect } from 'react';

const useGetData = (API) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(API);
        const data = await response.json();

        setLoading(false);
        setCategories(data);
      } catch {
        setLoading(false);

        const e = new Error('La conexión con el servidor falló');
        setError(e.message);
      }
    };
    fetchData();
  }, [API]);
  return { categories, loading, error };
};

export default useGetData;

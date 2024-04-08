import { useState, useEffect } from 'react';

const useHookURL = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error al hacer fetch');
      }
    };

    fetchData();
    
  }, [url]);

  return data;
};

export default useHookURL;

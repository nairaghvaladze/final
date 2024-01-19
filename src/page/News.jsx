import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://apitest.reachstar.io/blog/list');
        setResponseData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      {responseData ? (
        <p>Data from Postman: {JSON.stringify(responseData)}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default News;

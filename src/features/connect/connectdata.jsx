import React, { useState, useEffect } from 'react';

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then((response) => response.json())
      .then((data) => {
        if(Array.isArray(data)){
          setData(data);
        }else{
          console.log('ko đúng định dạng');
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Data from Backend</h1>
      <ul>
          {data.map((item, index) => (
          <li key={index}>{item.user_id} | {item.user_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Data;

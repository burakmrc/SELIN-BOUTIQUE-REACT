import React from 'react';
import { useLocation } from 'react-router-dom';

function DataPage() {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div>
      <h1>Data Page</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataPage;
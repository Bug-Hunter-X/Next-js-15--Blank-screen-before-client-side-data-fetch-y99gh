```javascript
// pages/aboutSolution.js
import React, { useState, useEffect, Suspense } from 'react';

export default function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setData({ message: 'Data from slow API' });
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>{data.message}</p>
    </div>
  );
}
```
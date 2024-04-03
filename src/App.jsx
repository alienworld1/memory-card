import Brain from './assets/brain-svgrepo-com.svg';
import Card from './components/Card';

import { useState, useEffect } from 'react';
import { fetchCats } from './api/cat';

export default function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetchCats(10)
      .then(response => {
        setCats(response);
      })
      .catch(error => {
        alert(error);
      });
  }, []);

  return (
    <>
      <header>
        <img src={Brain} alt="logo" />
        <h1>Memory Cards</h1>
      </header>
      <main>
        {cats.map(cat => (
          <Card key={cat._id} cat = {cat}/>
        ))}
      </main>
    </>
  )
}
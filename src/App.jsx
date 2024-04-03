import Brain from './assets/brain-svgrepo-com.svg';
import CardContainer from './components/CardContainer';
import { useState } from 'react';
import { getRandomElements } from './helpers';

export default function App({catList}) {
  const [activeCats, setActiveCats] = useState(getRandomElements(catList, 10));

  return (
    <>
      <header>
        <img src={Brain} alt="logo" />
        <h1>Memory Cards</h1>
      </header>
      <main>
        <CardContainer cats={activeCats} />
      </main>
    </>
  )
}
import Brain from './assets/brain-svgrepo-com.svg';
import CardContainer from './components/CardContainer';
import { useState } from 'react';
import { getRandomElements } from './helpers';

const clickedCats = new Set();

export default function App({catList}) {
  const [activeCats, setActiveCats] = useState(getRandomElements(catList, 10));
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleClick = event => {
    if (clickedCats.has(event.currentTarget.id)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      clickedCats.clear();
    } else {
      setScore(score + 1);
      clickedCats.add(event.currentTarget.id);
    }

    setActiveCats(getRandomElements(catList, 10));
  }

  return (
    <>
      <header>
        <img src={Brain} alt="logo" />
        <h1>Memory Cards</h1>
      </header>
      <main>
        <CardContainer cats={activeCats} handleClick={handleClick}/>
      </main>
      <article>
        <p>Get points by clicking on an image but don&apos;t click on any more than once!</p>
        <p className="score">Score: {score}, Best Score: {bestScore}</p>
      </article>
    </>
  )
}
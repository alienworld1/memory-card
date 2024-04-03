import '../styles/CardContainer.css';
import Card from './Card';

export default function CardContainer({cats, handleClick}) {
  return (
    <div className="card-container">
      {cats.map(cat => (
          <Card key={cat._id} cat = {cat} handleClick={handleClick}/>
      ))}
    </div>
  )
}
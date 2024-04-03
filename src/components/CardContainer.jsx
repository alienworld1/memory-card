import '../styles/CardContainer.css';
import Card from './Card';

export default function CardContainer({cats}) {
  return (
    <div className="card-container">
      {cats.map(cat => (
          <Card key={cat._id} cat = {cat}/>
      ))}
    </div>
  )
}
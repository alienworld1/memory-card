import { getImageUrl } from "../api/cat";
import '../styles/Card.css';

export default function Card({cat, handleClick}) {
  const imageUrl = getImageUrl(cat._id);

  return (
    <div className="card" onClick={handleClick}>
      <img src={imageUrl} alt={'cat-'+cat._id} />
    </div>
  )
}
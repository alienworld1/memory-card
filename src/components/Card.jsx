import { getImageUrl } from "../api/cat";

export default function Card({cat}) {
  const imageUrl = getImageUrl(cat._id);

  return (
    <div className="card">
      <img src={imageUrl} alt={'cat-'+cat._id} />
    </div>
  )
}
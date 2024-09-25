import { Link } from 'react-router-dom';
import './ProductsCard.css';

export default function ProductsCard({ title, price, image, itemId }) {
  return (
    <article className='product-card'>
      <h4 className='product-card__title'>{title}</h4>
      <img src={image} alt={`Imagen de ${title}`} className='product-card__image' />
      <p className='product-card__price'>$ {price}</p>
      <Link to={`/item/${itemId}`} className='product-card__link'>
          Ver detalles
      </Link>
    </article>
  );
}


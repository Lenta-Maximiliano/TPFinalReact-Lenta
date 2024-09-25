import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import ProductsCard from '../../ProductsCard/ProductsCard';
import './ItemListContainer.css';

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const productsCollection = categoryId
      ? query(collection(db, 'products'), where('categoryId', '==', categoryId))
      : collection(db, 'products');

    getDocs(productsCollection).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log('No hay productos');
      } else {
        setAllProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    })
    .catch((error) => {
      console.error('Error al obtener productos:', error);
    })
    .finally(() => {
      setLoading(false);tos
    });
  }, [categoryId]);

  return (
    <>
      {loading ? (<div className="loading-spinner">
                    <ReactLoading 
                      type='spinningBubbles' 
                      color='white' 
                      height={100} 
                      width={100} />
                    </div>) : (
        <section className="products-gallery">
          {allProducts.map((prod) => (
            <ProductsCard
              key={prod.id} 
              title={prod.title}
              price={prod.price}
              image={prod.image}
              itemId={prod.id} 
            />
          ))}
        </section> )
      }
    </>
  );
}


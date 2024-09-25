import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export default function NavBar() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    const category = location.pathname.split("/")[2]; 
    setSelectedCategory(category);
  }, [location]);

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img className='navbar__logo' src="/Logo.png" alt="Logo Ecommerce" />
        </Link>
        <div className='navbar__categories'>
          <Link 
            to="/" 
            className={`navbar__link ${!selectedCategory ? 'selected' : ''}`}
          >
            Inicio
          </Link>
          <Link 
            to="/category/cervezas" 
            className={`navbar__link ${selectedCategory === 'cervezas' ? 'selected' : ''}`}
          >
            Cervezas
          </Link>
          <Link 
            to="/category/vinos" 
            className={`navbar__link ${selectedCategory === 'vinos' ? 'selected' : ''}`}
          >
            Vinos
          </Link>
          <Link 
            to="/category/sidras" 
            className={`navbar__link ${selectedCategory === 'sidras' ? 'selected' : ''}`}
          >
            Sidras
          </Link>
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
    </>
  );
}







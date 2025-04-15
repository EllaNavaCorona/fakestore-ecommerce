import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <Link to="/" className="logo">FakeStore</Link>
      <nav>
        <Link to="/">Productos</Link>
        <Link to="/cart">Carrito ({cart.length})</Link>
      </nav>
    </header>
  );
}

export default Header;

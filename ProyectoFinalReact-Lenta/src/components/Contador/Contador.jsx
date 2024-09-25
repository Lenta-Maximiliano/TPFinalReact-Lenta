import { useState } from 'react';
import './Contador.css';

export default function Contador({ onQuantityChange, min = 1, max = 6 }) {
  const [count, setCount] = useState(min);

  const handleIncrement = () => {
    if (count < max) {
      const newCount = count + 1;
      setCount(newCount);
      onQuantityChange && onQuantityChange(newCount);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      const newCount = count - 1;
      setCount(newCount);
      onQuantityChange && onQuantityChange(newCount);
    }
  };

  return (
    <div className="quantity-counter__container">
      <div className="quantity-counter__controls">
        <button onClick={handleDecrement} className="quantity-counter__button">-</button>
        <span className="quantity-counter__number">{count}</span>
        <button onClick={handleIncrement} className="quantity-counter__button">+</button>
      </div>
    </div>
  );
}
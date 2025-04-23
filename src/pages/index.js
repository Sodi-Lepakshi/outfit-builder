import OutfitCanvas from '../components/OutfitCanvas';
import ClothingItem from '../components/ClothingItem';
import { useState, useEffect } from 'react';

export default function Home() {
  const [cart, setCart] = useState([]);
  const [outfit, setOutfit] = useState([]); 

  const clothingItems = [
    { id: 1, type: 'shirt', src: '/clothing/shirt.png' },
    { id: 2, type: 'pants', src: '/clothing/pants.png' },
    { id: 3, type: 'jacket', src: '/clothing/jacket.png' },
    { id: 4, type: 'dress', src: '/clothing/dress.png' },
    { id: 5, type: 'hat', src: '/clothing/hat.png' },
    { id: 6, type: 'shoes', src: '/clothing/shoes.png' },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  const handleAddToCart = (outfit) => {
    if (outfit.length === 0) return;
    const newCart = [...cart, outfit];
    setCart(newCart);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
    console.log('Cart updated:', newCart);
    setOutfit([]); 
  };

  const handleReset = () => {
    setCart([]); 
    setOutfit([]); 
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify([])); 
    }
  };

  return (
    <div className="container">
      <h1>Outfit Builder</h1>
      <div className="main-section">
        <div className="clothing-list">
          {clothingItems.map((item) => (
            <ClothingItem key={item.id} item={item} />
          ))}
        </div>
        <OutfitCanvas onAddToCart={handleAddToCart} onReset={handleReset} />
      </div>
      <div className="button-section">
        <button onClick={handleReset} className="clear-btn">Reset</button>
        <button
          className="add-to-cart-btn"
          onClick={() => handleAddToCart(outfit)}
        >
          Add to Cart <span>🛒</span>
        </button>
      </div>
    </div>
  );
}
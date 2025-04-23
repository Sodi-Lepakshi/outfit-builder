import { useDrop } from 'react-dnd';
import { useState } from 'react';
import PropTypes from 'prop-types';

const OutfitCanvas = ({ onAddToCart, onReset }) => {
  const [outfit, setOutfit] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'clothing',
    drop: (item) => {
      console.log('Dropped item:', item); 
      setOutfit((prev) => {
        const filtered = prev.filter((i) => i.type !== item.type);
        return [...filtered, item];
      });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const getPosition = (type) => {
    switch (type) {
      case 'hat':
        return { top: '10px' };
      case 'shirt':
        return { top: '80px' };
      case 'jacket':
        return { top: '90px' };
      case 'dress':
        return { top: '100px' };
      case 'pants':
        return { top: '200px' };
      case 'shoes':
        return { top: '350px' };
      default:
        return { top: '0px' };
    }
  };

  const resetCanvas = () => {
    setOutfit([]);
    if (onReset) onReset();
  };

  const saveOutfit = () => {
    if (outfit.length === 0) return;
    onAddToCart(outfit);
    setOutfit([]);
  };

  return (
    <div
      ref={drop}
      className="canvas-container"
      style={{
        background: isOver ? 'rgba(229, 231, 235, 0.2)' : 'transparent',
      }}
    >
      <h3>Canvas Area</h3>
      {outfit.length === 0 && <p style={{ textAlign: 'center', color: '#6b7280' }}>Drag items here</p>}
      {outfit.map((item) => {
        const { top } = getPosition(item.type);
        return (
          <img
            key={item.id}
            src={item.src}
            alt={item.type}
            className="clothing"
            style={{
              position: 'absolute',
              top,
            }}
          />
        );
      })}
      <div className="canvas-buttons">
        <button onClick={resetCanvas} className="clear-btn">Clear</button>
        <button onClick={saveOutfit} className="save-btn">Save Outfit</button>
      </div>
    </div>
  );
};

OutfitCanvas.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  onReset: PropTypes.func,
};

export default OutfitCanvas;
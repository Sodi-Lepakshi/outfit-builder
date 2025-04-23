import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

const ClothingItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'clothing',
    item: { ...item },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="clothing-card"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      <img src={item.src} alt={item.type} />
      <p>{item.type}</p>
    </div>
  );
};

ClothingItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClothingItem;
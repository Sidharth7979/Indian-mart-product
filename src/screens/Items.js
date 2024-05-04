// import React from 'react';
// import Items from '../utility/item.json'
// export default function Item() {
 

  
//   return (
//     <div>
//       <h2>Products</h2>
//       <div className="Item-list">
//         {Items.map(product => (
//           <div key={product.id} className="product">
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from 'react';
import PropTypes from 'prop-types';
import Items from '../utility/item.json';

const Item = () => {
  return (
    <div className='container'> 
      <h2 className='heading'>Products</h2>
      <div className="Item-list">
        {Array.isArray(Items) &&
          Items.map((product) => (
            <div key={product.id} className="product">
            <div className="image-container">  
              <img src={product.image} alt={product.name} />
              <div className="overlay">
                  <img src={product.image} alt={product.name} />
                </div>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;

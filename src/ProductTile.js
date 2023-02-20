import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import './ProductTile.css';

const ProductTile = ({
  productData,
  addItemToCart
}) => {

  const {
    image,
    name,
    category,
    price,
  } = productData;

  return(
    <div className='productTile'>
      <div>
        <img className='productThumbnail' src={image} />
      </div>
      <div className='productInfo'>
        <div>
          {name} - {category}
        </div>
        <div>
          {price}
        </div>
      </div>
      <div>
        <Button onClick={addItemToCart(productData)}>add to cart</Button>
      </div>
    </div>
  )
}

export default ProductTile

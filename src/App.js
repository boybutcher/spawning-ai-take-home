import { useState, useEffect } from 'react'
import products from './constants/products.json'

import ProductTile from './ProductTile.js'
import CartModal from './CartModal.js'

import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [renderCount, setRenderCount] = useState(24);
  const [renderedProducts, setRenderedProducts] = useState([])
  
  const [renderCart, setRenderCart] = useState(false)
  const [cart, setCart] = useState([])

  // get initial products on render
  useEffect(() => {
    console.log('settingRenderedProducts...')
    setRenderedProducts(products.slice(0, renderCount))
  }, [])

  const addItemToCart = (product) => () => {
    setCart([...cart, product])
  }

  const hideCart = () => setRenderCart(false)

  return (
    <div className="App">
      {renderCart ? <CartModal cartItems={cart} handleClose={hideCart} /> : null}
      <Button onClick={() => setRenderCart(true)}>
        cart ({cart.length} items)
      </Button>
      {
        renderedProducts.map(productData => {
          return (<ProductTile productData={productData} addItemToCart={addItemToCart}/>)
        })
      }
    </div>
  );
}

export default App;

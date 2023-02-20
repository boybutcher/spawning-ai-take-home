import { useState, useEffect } from 'react'
import products from './constants/products.json'

import ProductTile from './ProductTile.js'
import CartModal from './CartModal.js'
import SearchBar from './SearchBar.js'

import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [renderCount, setRenderCount] = useState(24);
  const [renderedProducts, setRenderedProducts] = useState([])
  
  const [renderCart, setRenderCart] = useState(false)
  const [cart, setCart] = useState([])

  const [productQuery, setProductQuery] = useState('')
  const [isFiltering, setIsFiltering] = useState(false)

  useEffect(() => {
    setRenderedProducts(products.slice(0, renderCount))
  }, [])

  const addItemToCart = (product) => () => {
    setCart([...cart, product])
  }

  const hideCart = () => setRenderCart(false)

  const filterProducts = () => {
    setIsFiltering(true)
    setRenderedProducts(products.filter(product => product.name.toLowerCase().includes(productQuery)))
  }

  const cancelFilterProducts = () => {
    setProductQuery('')
    setIsFiltering(false)
    setRenderedProducts(products.slice(0, renderCount))
  }

  return (
    <div className="App">
      {
        renderCart ? (
          <CartModal
            cartItems={cart}
            handleClose={hideCart}
          />
        ) : null
      }
      <div className='headerBar'>
        <div className='headerBarTitle'>
          Spawning Take Home Assignment
        </div>
        <Button
          className='headerBarCart'
          onClick={() => setRenderCart(true)}
        >
          cart ({cart.length} items)
        </Button>
      </div>
      <SearchBar
        updateQuery={setProductQuery}
        queryVal={productQuery}
        filterProducts={filterProducts}
        cancelFilterProducts={cancelFilterProducts}
        isFiltering={isFiltering}
      />
      {
        isFiltering ? (
          <div>
            searching for products that contain: '{productQuery}'
          </div>  
        ): null
      }
      <div className='productsGrid'>
        {
          renderedProducts.map(productData => {
            return (
              <ProductTile
                productData={productData}
                addItemToCart={addItemToCart}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

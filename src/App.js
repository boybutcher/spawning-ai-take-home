import { useState, useEffect } from 'react'
import products from './constants/products.json'

import ProductTile from './ProductTile.js'

import './App.css';

function App() {
  const [renderCount, setRenderCount] = useState(24);
  const [renderedProducts, setRenderedProducts] = useState([])

  // get initial products on render
  useEffect(() => {
    console.log('settingRenderedProducts...')
    setRenderedProducts(products.slice(0, renderCount))
  }, [])

  return (
    <div className="App">
      {
        renderedProducts.map(productData => {
          return (<ProductTile productData={productData} />)
        })
      }
    </div>
  );
}

export default App;

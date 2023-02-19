import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const ProductTile = ({
  productData,
  addItemToCart
}) => {

  const {
    image,
    name
  } = productData;

  return(
    <Container>
      <Row>
        <div>
          <Image src={image} />
        </div>
      </Row>
      <Row>
        <div>
          {name}
        </div>
      </Row>
      <Row>
        <Button onClick={addItemToCart(productData)}>add to cart</Button>
      </Row>
    </Container>
  )
}

export default ProductTile

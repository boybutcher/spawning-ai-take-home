import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const ProductTile = ({
  productData,
  addItemToCart
}) => {

  const {
    image,
    name,
    price,
  } = productData;

  return(
    <Container>
      <Row>
        <div>
          <Image src={image} />
        </div>
      </Row>
      <Row>
        <Col>
          <div>
            {name}
          </div>
        </Col>
        <Col>
          <div>
            {price}
          </div>
        </Col>
      </Row>
      <Row>
        <Button onClick={addItemToCart(productData)}>add to cart</Button>
      </Row>
    </Container>
  )
}

export default ProductTile

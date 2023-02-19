import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const CartModal = ({
  cartItems,
  handleClose,
}) => {
  const cartTotal = cartItems.reduce(
    (acc, item) => {
      return acc + parseFloat(item.price.substring(1))
    },
    0
  )

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Cart</Modal.Title>

        </Modal.Header>

        <Modal.Body>
          <div>number of items: {cartItems.length}</div>
          <div>total: ${cartTotal}</div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose}>
            return to shopping
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default CartModal

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
    <Modal show>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Cart</Modal.Title>

        </Modal.Header>

        {
          cartItems.length ? (
            <Modal.Body>
              <div>number of items: {cartItems.length}</div>
              <div>total: ${cartTotal}</div>
            </Modal.Body>
          ) : (
            <Modal.Body>
              Your shopping cart is empty!
            </Modal.Body>
          )
        }

        <Modal.Footer>
          <Button onClick={handleClose}>
            return to shopping
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  )
}

export default CartModal

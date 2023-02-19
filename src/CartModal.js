import Modal from 'react-bootstrap/Modal'

const CartModal = ({cartItems}) => {
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
          total: ${cartTotal}
        </Modal.Body>
      </Modal.Dialog>
    </div>
  )
}

export default CartModal

import Modal from 'react-bootstrap/Modal'

const CartModal = ({cartItems}) => {
  console.log('cartItems...', {cartItems})

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
      </Modal.Dialog>
    </div>
  )
}

export default CartModal

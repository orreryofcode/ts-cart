import { useShoppingCart } from "../context/ShoppingCartContext"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }:ShoppingCartProps) {
    const { closeCart}  = useShoppingCart()

  return <>

  {isOpen ? (    
  <>
  <button onClick={closeCart}>Close</button>
  <span>CART</span>
  </>
  ) : null}

  </>
}


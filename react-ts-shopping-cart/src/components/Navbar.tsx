import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'


export function Navbar() {
  const { openCart, cartQuantity} = useShoppingCart()

  return (
    <nav className='sticky flex justify-between items-center mb-3 px-10 h-24 font-normal text-lg shadow-lg bg-slate-800'>
        <ul className='flex'>
           <li className='font-bold'>
            <NavLink to="/">Home</NavLink>
           </li>
           <li className='ml-3 font-bold'>
            <NavLink to="store">Store</NavLink>
           </li>
           <li className='ml-3 font-bold'>
            <NavLink to="about">About</NavLink>
           </li>
        </ul>
        {cartQuantity !== 0 && <button className='border-2 border-slate-600 px-6 py-1 rounded-md hover:-translate-y-1 hover:shadow-lg transition-all relative font-bold' onClick={openCart}>
            Cart
            <div className='bg-slate-600 rounded-full absolute h-7 w-7 flex justify-center items-center text-zinc-200 -right-3 -bottom-3'>{cartQuantity}</div>
            </button>}
        
    </nav>
  )
}


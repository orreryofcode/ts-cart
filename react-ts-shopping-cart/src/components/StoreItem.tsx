import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}


export function StoreItem({id, name, price, imgUrl}: StoreItemProps) {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id);


  return (
    <>
        <div className="w-full h-52">
        <img src={imgUrl} alt={name}  className="h-full w-full object-cover "/>
        </div>

        
       <div className="flex flex-col mt-2">
            <div className="flex justify-between">
                <span className="text-lg font-bold">{name}</span>
                <span>{formatCurrency(price)}</span>
             </div>

        <div className="mt-4 flex justify-center font-bold">
            {quantity === 0 ? (
        <button 
        className="border-2 border-slate-600 px-4 py-2 rounded-md hover:bg-black hover:-translate-y-1 transition-all"
        onClick={()=> increaseCartQuantity(id)}>Add to cart</button>
            ): (
                <div className="flex items-center flex-col ">
                    <div className="flex items-center justify-center ">
                        <button className="border-2 border-slate-600 px-2 py-1 rounded-md hover:bg-black hover:-translate-y-1 transition-all"
                        onClick={()=> decreaseCartQuantity(id)}>-</button>
                        <div className="mx-5">
                        <span className="text-lg">{quantity}</span> in cart
                        </div>
                        
                        <button className="border-2 border-slate-600 px-2 py-1 rounded-md hover:bg-black hover:-translate-y-1 transition-all"
                        onClick={()=> increaseCartQuantity(id)}>+</button>
                    </div>
                    <button className="bg-rose-700 px-4 py-2 rounded-md hover:-translate-y-1 transition-all mt-2 flex"
                    onClick={()=> removeFromCart(id)}>Remove</button>
                </div>
            )}
        </div>
           
       </div>
        
    </>
  )
}


import storeItems from '../data/items.json'
import { StoreItem } from '../components/StoreItem'

export function Store() {
  return (
    <div className='p-10'>
       <div>Store</div>
       <div className=" grid grid-rows-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center ">
        {storeItems.map((item)=> (
          <div className='bg-slate-800 p-5 rounded-lg w-full h-96' key={item.id}><StoreItem {...item}/></div>
        ))}
       </div>
    </div>
 
  )
}


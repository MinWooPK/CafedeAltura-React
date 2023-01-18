import Button from "../../../components/Button";
import {useContext} from 'react'
import { ShoppingCartContext } from "../../../context/ShoppingCardContext";

export default function Quantity({id, quantity}) {
    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext)
    return (
         <div className="flex flex-row justify-center items-center gap-[8px] p-0 h-full"> 
            <Button text={'-'} onClick={() => removeCoffee(setShoppingCart, shoppingCart, id )} />
            <div className="rounded-full p-2 m-2 text-white bg-grey w-4 h-4 flex items-center justify-center text-sm">
                {quantity}
            </div>
            <Button text={'+'} onClick={() => addCoffee(setShoppingCart, shoppingCart, id)}/>
        </div>
    )
}

function addCoffee(setShoppingCart, shoppingCart, id) {
    setShoppingCart([...shoppingCart, id])
}

function removeCoffee(setShoppingCart, shoppingCart, id) {
    const index = shoppingCart.findIndex(coffeeId => coffeeId === id)
    setShoppingCart(shoppingCart.filter((_, i) => i !== index))}
import { Link } from "react-router-dom";
import basket from '../imagen/Bag.png'
import { useContext } from 'react'
import { ShoppingCartContext } from "../context/ShoppingCardContext";

export default function CoffeeCartShopping() {
    const { shoppingCart } = useContext(ShoppingCartContext)

    return (
        <div className="flex items-center">
            <Link to="/Basket">
                <img src={basket} alt="bag" />
            </Link>
            <div className="rounded-full p-2 m-2 text-white bg-grey w-6 h-6 flex items-center justify-center text-sm">
                {shoppingCart.length}
            </div>
        </div>
    )
}
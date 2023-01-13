import { Button } from './button';
import { NavLinks } from '../../../components/NavLinks';
import { Link } from 'react-router-dom';
import Coffe from '../../../imagen/ps_coffee-hot.png'
import Phone from '../../../imagen/Phone.png'
import Baskets from '../../../imagen/Bag.png'


export const NavBar = () => {
    return (
        <nav className="bg-black flex text-white justify-around text-center items-center content-center h-16 w-screen">
            <div className="flex justify-start items-center gap-3">
                <Link to="/" className="text-2xl flex gap-1 items-center"> cafedealtura.com   <img src={Coffe} alt="cane" /></Link>
              
            </div>
            <NavLinks />
            <div className="flex items-center gap-5  ">
                <div className=""> <img src={Phone} alt="phone" /> </div>
                <div><a href="tel:+34919490518">+34 919 49 05 18</a></div>
                <Button />
               <Link to="basket"><div><img src={Baskets} alt="" /></div></Link> 
            </div>
        </nav>)
}
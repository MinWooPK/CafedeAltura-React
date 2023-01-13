import { Route, Routes } from 'react-router-dom';
import Header from '../page/home/component/Header';
import Cards from '../page/home/component/Cards'
import FAQ from '../page/home/component/FAQ';
import CoffeShop from '../page/home/component/CoffeShop';
import ContactUs from '../page/home/component/ContactUs';
import { NavBar } from '../page/home/component/NavBar';
import Footer from './Footer';
import ShopCoffeCards from '../page/shop/CoffeeCardShop';
import CoffeeCardsSection from '../page/home/component/CoffeCardsHomePage';
import FooterEnd from './Footer-End';

export default function HomeRoutes() {

    return (
        <Routes>

            <Route path='/' element={<><NavBar />
                <Header /><Cards /> <CoffeeCardsSection /> <FAQ /> <CoffeShop /><ContactUs /><Footer />
            </>} />
            <Route path='/shop' element={<><NavBar />
            <ShopCoffeCards/>   <Cards />  <Footer /></>} />

            <Route path='/Basket' element={<><FooterEnd/>
            </>} />
            <Route path='/Checkout' element={<><FooterEnd/>
            </>} />

            <Route path='/Success' element={<><NavBar/><FooterEnd/>
            </>} />
        </Routes>
    )

}
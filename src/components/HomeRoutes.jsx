import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Cards from './Cards'
import FAQ from './FAQ';
import CoffeShop from './CoffeShop';
import ContactUs from './ContactUs';
import { NavBar } from './NavBar';

export default function HomeRoutes() {

    return (
        <Routes>
            <Route path='/' element={<><NavBar />
            <Header /><Cards/> <FAQ/> <CoffeShop/><ContactUs/>
            </>}/>
        </Routes>
    )

}
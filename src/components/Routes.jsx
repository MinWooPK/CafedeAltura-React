import { Route, Routes } from 'react-router-dom';
import  NavBar  from '../pages/home/component/NavBar';
import FooterEnd from './Footer-End';
import HomePage from '../pages/home/HomePage';
import ShopPage from '../pages/shop/ShopPage';
import SuscriptionPage from '../pages/subscription/SubscriptionPage';
import BasketShop from '../pages/Basket/BasketPage';

export default function MainRoutes() {

    return (
        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<><ShopPage />
        </>} />
            <Route path='/suscripcion' element={<><SuscriptionPage />
            </>} />
            <Route path='/para_empresas' element={<><NavBar /><FooterEnd/>
            </>} />
            <Route path='/sobre_nosotros' element={<><NavBar /><FooterEnd/>
            </>} />
            <Route path='/contacto' element={<><NavBar /><FooterEnd/>
            </>} />
            <Route path='/Basket' element={<><BasketShop/>
            </>} />
            <Route path='/Checkout' element={<><NavBar /><FooterEnd/>
            </>} />
            <Route path='/Success' element={<><NavBar/><FooterEnd/>
            </>} />
        </Routes>
    )

}
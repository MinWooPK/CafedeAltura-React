import { useContext, useEffect } from "react";
import { ApiContext } from "../../context/ApiContext";
import getAllCoffeesAPI from "../../services/coffees";
import NavBar from "../home/component/NavBar";
import Cards from '../home/component/Cards';
import Footer from '../../components/Footer';
import ShopCoffeCards from './component/CoffeeCardShop';

export default function ShopPage() {

    const { setCoffees } = useContext(ApiContext)

    useEffect(() => {
        async function fetchCoffees() {
            const fetchedCoffees = await getAllCoffeesAPI()
            setCoffees(fetchedCoffees.products)
        }
        fetchCoffees()
    }, [setCoffees])



    return (
        <>
            <NavBar />
            <ShopCoffeCards />
            <Cards />
            <Footer />
        </>
    )
} 
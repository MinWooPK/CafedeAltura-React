import { useContext, useEffect } from "react";
import { ApiContext } from "../../context/ApiContext";
import getAllCoffeesAPI from "../../services/coffees";
import Header from './component/Header';
import Cards from './component/Cards';
import FAQ from './component/FAQ';
import CoffeShop from './component/CoffeShop';
import ContactUs from './component/ContactUs';
import NavBar  from './component/NavBar';
import Footer from '../../components/Footer';
import CoffeeCardsSection from './component/CoffeeCardsHomePage';


export default function HomePage() {
    const { setCoffees } = useContext(ApiContext)
  
    useEffect(() => {
      async function fetchCoffees() {
        const fetchedCoffees = await getAllCoffeesAPI()
        setCoffees(fetchedCoffees.products)
      }
      fetchCoffees()
    }, [setCoffees])

 return (

    <><NavBar />
    <Header />
    <Cards />
    <CoffeeCardsSection />
    <FAQ />
    <CoffeShop />
    <ContactUs />
    <Footer />
    </>)
}
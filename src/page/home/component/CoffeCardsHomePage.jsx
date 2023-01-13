import { useEffect, useState } from 'react';
import CoffeeCard from '../../../components/AllCoffeCards';
import getAllCoffeesAPI from '../../../services/coffees';


export default function CoffeeCardsSection() {
    const [coffees, setCoffees] = useState([])
    const showCoffees = 4
    useEffect(() => {
        async function fetchCoffees() {
            const fetchedCoffees = await getAllCoffeesAPI()
            setCoffees(fetchedCoffees)
        }
        fetchCoffees()
    }, [])
    return (
        < div className='grid grid-cols-4 gap-4 mx-10 py-[120px]'>
       { coffees.products?.slice(0, showCoffees).map((coffee) => (
            <CoffeeCard key={coffee._id} img_url={coffee.img_url} _id={coffee._id} brand={coffee.brand} price={coffee.price} coffee={coffee.coffee} />)
        )}
        </div>

    )
}
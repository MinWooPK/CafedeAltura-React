import { useState, useEffect } from 'react';
import CoffeeCard from '../../components/AllCoffeCards';
import getAllCoffeesAPI from '../../services/coffees'

function ShopCoffeCards() {
  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    async function fetchCoffees() {
        const fetchedCoffees = await getAllCoffeesAPI()
        setCoffees(fetchedCoffees)
      }
      fetchCoffees()
    }, [])


  return (
    <>
    <h1 className='text-center text-2xl mt-10  font-semibold text-green'>Últimos orígenes</h1>
      < div className='grid grid-cols-4 gap-4 mx-10 my-10'>
        {coffees.products?.map((coffee) => (
            <CoffeeCard key={coffee._id} img_url={coffee.img_url} _id={coffee._id} brand={coffee.brand} price={coffee.price} coffee={coffee.coffee} />)
        )}
        </div>
    </>
  )
}

export default ShopCoffeCards
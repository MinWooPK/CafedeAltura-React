import { useContext } from 'react';
import { ApiContext } from '../../../context/ApiContext';
import CoffeeCardList from '../../../components/CoffeeCardList';

  function ShopCoffeCards() {
    const { coffees } = useContext(ApiContext)


  return (
    <>
    <h1 className='text-center text-2xl mt-10  font-semibold text-green'>Últimos orígenes</h1>
      < div className='grid grid-cols-4 gap-4 mx-10 my-10 '>
      <CoffeeCardList items={coffees} />

        </div>
    </>
  )
}

export default ShopCoffeCards
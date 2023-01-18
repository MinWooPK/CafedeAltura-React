import { useContext } from 'react';
import CoffeeCardList from '../../../components/CoffeeCardList';
import { ApiContext } from '../../../context/ApiContext';

export default function CoffeeCardsSection() {
    const { coffees } = useContext(ApiContext)
    const showCoffees = 4

    return (
    <div className='grid grid-cols-4 gap-4 mx-10'>
        <CoffeeCardList items={coffees.slice(0, showCoffees)} />
    </div>)
}

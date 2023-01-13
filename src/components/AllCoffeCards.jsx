import getAllCoffeesAPI from "../services/coffees"

export default function CoffeeCard({ _id, img_url, brand, price}) {

    return (
        <>
            <div key={_id}
                className='flex flex-col items-center justify-center border-2 border-[#E3DED7] rounded-lg py-6' >
                <img className='pb-6' src={img_url} alt={'coffee bags'}></img>
                <p className='pb-3 font-bold'>{brand}</p>
                <p className='pb-6'>{price},00€</p>
                {/* <Button className={'bg-green text-white text-sm p-2 rounded'} text={'Añadir'} onClick={() => getAllCoffees(console.log('A',{coffee}.img_url, {coffee}.brand, {coffee}.price))}/> */}
                <button className='bg-green text-white text-sm p-2 rounded' onClick={() => getAllCoffeesAPI(console.log({img_url}, {brand}, {price}))}> Añadir </button>
            </div>
        </>
    )
}
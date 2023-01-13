import iconcafe from '../imagen/ps_coffee-hot.png'
import iconotelefono from '../imagen/Phone.png'
import emailicon from '../imagen/Mail.png'
import { Link } from 'react-router-dom'
import FooterEnd from './Footer-End'

const Footer = () => {
    return (

        <footer className="flex flex-col justify-center items-start bg-black absolute w-screen gap-8">
            <div className="flex justify-center items-center ml-14 gap-3  m-7">
                <span className='font-extralight text-2xl text-white '>Cafedealtura.com</span>
                <img src={iconcafe} alt="iconcafe" />
            </div>
            <div className="flex justify-center items-start text-center w-full">
                <div className="flex flex-col justify-center items-start gap-4 w-4/12  ">
                    <h3 className='font-semibold text-lg text-white'>Te ayudamos en</h3>
                    <a href="" className=" gap-3 text-white  py-3 px-6  flex text-sm bg-grey text-white border-none rounded cursor-pointer">
                        <img src={iconotelefono} alt="iconotelefono" />
                        <span>+34 919 490 518</span>
                    </a>
                    <a href="" className=" gap-3 text-white py-3 px-6 flex text-sm bg-grey text-white border-none rounded cursor-pointer">
                        <img src={emailicon} alt="emailicon" />
                        <span>hola@cafedealtura.com</span>
                    </a>
                </div>
                <div className="flex flex-row justify-start items-start gap-20 w-7/12">
                    <div className='flex flex-col items-start gap-4  '>
                        <Link className='text-white no-underline font-semibold text-sm' to={"/Tienda"}>Tienda</Link>
                        <Link className='text-white no-underline font-semibold text-sm' to={"/Suscripcion"}>Suscripción</Link>
                        <Link className='text-white no-underline font-semibold text-sm' to={"/Para_Empresas"}>Para empresas</Link>
                        <Link className='text-white no-underline font-semibold text-sm' to={"/Sobre_Nosotros"}>Sobre nosotros</Link>
                        <Link className='text-white no-underline font-semibold text-sm' to={"/Contacto"}>Contacto</Link>
                    </div>
                    <div className='flex flex-col items-start gap-4  '>
                        <Link className='text-white no-underline font-semibold text-sm' to={"/Politica_de_privacidad"}>Política de privacidad</Link>
                        <Link className='text-white no-underline font-semibold text-sm' to={"/Politica_de_cookies"}>Política de cookies</Link>
                        <Link className='text-white no-underline font-semibold text-sm' to={"/Terminos_y_condiciones"}>Términos y condiciones</Link>
                    </div>
                </div>
            </div>

            <FooterEnd />

        </footer>


    )
}
export default Footer
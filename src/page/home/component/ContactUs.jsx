import mail from '../../../imagen/Mail.png'
import phone from '../../../imagen/Phone.png'
import Form from './Form.jsx'

export default function ContactUs() {


    return (

        <div className="bg-Timberwolf flex flex-row px-[40px] gap-6">

            <div className="py-[110px] flex flex-col text-start w-[588px]">
                <div className="flex  flex-col gap-3">
                    <h3 className='text-[18px] font-semibold '>Entra en contacto con nosotros </h3>
                    <p className='text-[14px] font-normal'>Si tienes dudas, ponte en contacto con nosotros a traves del formulario y te
                        responderemos lo antes posible. </p>
                </div>
                <div className="flex flex-col gap-6 pt-[32px]">
                    <p>Tambien puedes ponerte en contacto con nostros en nuestra direccion o a traves del telefono de la
                        tienda.</p>
                    <div>
                        <p> 742 Evergreen Terrace </p>
                        <p> Springfield, OR 12345</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-3'><img src={phone} alt="phone" /> <p>+1 (555) 123-4567</p></div>
                        <div className='flex flex-row gap-3'>  <img src={mail} alt="mail" /> <p>support@example.com</p></div>
                    </div>
                    <p> ¿Buscas trabajo? <a href="ofertatrabajo.html" alt="ofertatrabao"> nuestra oferta </a></p>
                </div>

            </div>

            <div className='bg-white w-[588px]'>
               <Form />
            </div>


        </div>

    )




}
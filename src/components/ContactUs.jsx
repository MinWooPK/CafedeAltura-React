import phone from '../imagen/Phone.png'
import mail from '../imagen/Mail.png'


export default function ContactUs() {


    return (

        <div className="bg-Timberwolf flex flex-row px-[40px] gap-6">

            <div className="py-[110px] flex flex-col text-start">
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

            {/* <div className='bg-white'>
                <form className='' action="">
                    <div className=''>
                        <div>
                            <div>
                                <label for="namesurname">Nombre completo</label>
                            </div>
                            <div>
                                <input type="text" id="nameFormulario" name="fname" />
                            </div>
                        </div>
                        <div>
                            <div> <label for="email">Email</label></div>
                            <div><input type="email" id="emailFormulario" name="email" />
                            </div>
                        </div>
                        <div>
                            <div> <label for="phone">Teléfono</label></div>
                            <div> <select nane="edad del usario" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <option value="" >Select </option>

                                <input type="tel" name="tel" id="phoneFormulario" />

                            </div>
                        </div>
                        <div>
                            <div><label for="Question"></label></div>
                            <div> <textarea id="messageFormulario" name="name" cols="20" rows="10"
                                placeholder="Dime BB"></textarea>
                            </div>
                        </div>
                        <div>
                            <div> <label for="Checkin"> </label> <input type="checkbox" id="checkbox" name="checkbox" />Acepto
                                la Política de Privacidad y los Terminos y condiciones.</div>
                        </div>


                        <div>
                            <input type="submit" name="" id="submitFormulario" />
                        </div>


                    </div>

                </form>

            </div> */}


        </div>

    )




}
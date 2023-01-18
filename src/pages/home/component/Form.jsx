
import { Link } from 'react-router-dom'
const Form = () => {
    return (
        <div className='flex justify-center items-center bg-brown w-full  '>

            <form action="">
                <div className="flex flex-col w-6/12 bg-white pt-[20px] pl-[19px] pb-[20px]  ">
                    <div className='flex flex-col gap-3'>
                        <div>
                            <label >Nombre completo</label>
                            <input type="text" style={{ width: "95%" }} name="name" className="rounded border border-slate-600 h-8" />
                        </div>

                        <div>
                            <label >Email</label>
                            <input type="email" style={{ width: "95%" }} name="email" className="rounded border border-slate-600 h-8" />
                        </div>

                        <div>
                            <label >Teléfono</label>
                            <input type="tel" list="listatelefonos" style={{ width: "95%" }} className="rounded border border-slate-600 h-8" min="3"
                                max="9" name="phone" />

                        </div>

                    </div>
                    <div>
                        <textarea name="message" className="rounded border my-5  " style={{ width: "95%" }} cols="65" rows="8"
                            placeholder="¿En qué podemos ayudarte?"></textarea>
                    </div>
                    <div>
                        <input type="checkbox" name="privacidad" />
                        <label>Acepto la <Link className="text-black " to={"/Politica_de_privacidad"}> Poliítica de Privacidad </Link>     y los

                            <Link className="text-black " to={"/Terminos_y_condiciones"}> Terminos y condiciones </Link>     .</label>
                    </div>
                    <br></br>
                    <div>
                        <button className=" p-3 bg-strong-green text-white border-none rounded font-semibold text-sm cursor-pointer w-20">Enviar</button>
                    </div>
                    <datalist >
                        <option value="US +1(555) 987-6543" />
                    </datalist>
                </div>


            </form >
        </div>
    )
}
export default Form
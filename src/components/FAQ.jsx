// export default function FAQ() {

//     return (

//         <div className="bg-green">
//         <h2 className="text-white">Preguntas frecuentes</h2>
//         <div className="">
//             <div className="">
//                 <div className="">
//                     <div>
//                         <h3> Como hago el pedido </h3>
//                     </div>
//                     {/* <div onClick="arrow1()"> 
//                     </div> */}
//                 </div>

//                 <div className="">
                 
//                     <p><small> el café que deseas prboar y completa el proceso de compra. si lo prefieres, te
//                             preguntaremos
//                             cada cuánto quieres que te lo mandemos a casa y así nunca te quedaras sin café</small></p>
//                 </div>
//             </div>




//             <div className="">
//                 <div className="">
//                     <div>
//                         <h3>¿Por qué los precios son tan bajos?</h3>
//                     </div>
//                     {/* <div onClick="arrow2()">
//                     </div> */}
//                 </div>
//                 <div className="">
                 
//                     <p> <small> constantemente para encontrar los mejores granos y a los agricultores más exigentes.
//                             Si
//                             podemos ofrecerte estos precios es porque tratamos directamente con los productores de
//                             café,
//                             sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás
//                             de
//                             los granos de café recibe el mayor beneficio posible. </small> </p>
//                 </div>
//             </div>
//             <div className="">
//                 <div className="">
//                     <div>
//                         <h3>Es posible enviar cafe a mi oficina</h3>
//                     </div>
//                     {/* <div onClick="arrow3()">
//                     </div> */}
//                 </div>

//                 <div className="">
                  
//                     <p> <small> gfdfsadsfdsfdsasdfsdaffdsafdssdfsafdds </small> </p>
//                 </div>
//             </div>
//         </div>
//         <div className=""> <p>Resolvemos tus dudas</p> →
//         </div>
  

   


//     </div >

// )





// }

import React, { useState } from 'react'

const FAQ = () => {

  //Using Inline Function and the The Logical Not (!) to toggle state
  const [toggle, setToggle] = useState(true)

  return (
    <>
      <button 
            onClick={() => setToggle(!toggle)} 
            class="btn btn-primary mb-5">
          Toggle State
      </button>
      {toggle && (
        <ul class="list-group">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
        
      )}
      <button 
            onClick={() => setToggle(!toggle)} 
            class="btn btn-primary mb-5">
          Toggle State
      </button>
      {toggle && (
        <ul class="list-group">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
        
      )}
    </>
  )
}
export default FAQ
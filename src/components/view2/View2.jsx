import React from 'react'
import Header from "../Header/Header";



import "./view2.css";




export default function View2() {
  return (
  <section className="view2">
    <Header userName= "FREDY GONZALEZ GARCIA" title="Prueba" description="Formulario" />
    <center>
      <div className="containerGeneral">
        <p className="dataContinue" ><strong >Indique los siguientes datos para continuar con la solicitud de su adelanto de pension:</strong></p>

        <form className="formClass">
          <label>
            <p className="questionText">¿Cual es el valor total de sus ingresos mensuales?</p>
            <input type="text" className="inputText"/>
          </label>
          <label>
            <p className="questionText">¿Cual es su actividad laboral actual?</p>
            <input type="text" className="inputText" placeholder='Seleccione una opción'  />
          </label>
          <label>
            <p className="questionText">¿Cual es el nombre de su empresa?</p>
            <input type="text" className="inputText" />
          </label>
          <label>
            <p className="questionText">¿Que tipo de contacto tiene?</p>
            <input type="text" className="inputText" placeholder='Seleccione una opción' />
          </label>
          <label>
            <p className="questionText">¿Cual es su ciudad de residencia?</p>
            <input type="text" className="inputText" />
          </label>
          <label>
            <p className="questionText">¿Cual es la dirección de su residencia?</p>
            <input type="text" className="inputText" placeholder='Carrera 9 # 116-08, Bogotá' />
          </label>
          <label>
            <p className="questionText">Si esta recibiendo ayuda de un <strong>asesor del Banco</strong>, ingrese el código del asesor</p>
            <input type="text" className="inputText" placeholder='Opcional' />
          </label>

        </form>

      </div>
    </center>
    <center>
    <br></br>
    <button className="continueButton"> Continuar
      </button></center>
  </section>
  )
}
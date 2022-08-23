import React from 'react'
import Header from "../Header/Header";
import iconogris from "../../assets/img/Grupo 172.png";
import "./view3.css";




export default function View3() {
  return (
  <section className="view3">
    <Header userName= "FREDY GONZALEZ GARCIA" title="Compra de Cartera Móvil" description="Resultado" />
    <center>
      <div className="containerGeneral">
        <table className="tablaAdelantoPension">
        <tr>
            <th colspan="2" >Adelanto de pensión y seguro</th>
          </tr>
          <tr>
            <td width=""><img className='close' src={ iconogris } alt="iconogris"/></td>
            <td className="textPlazo">Los productos fueron aprobados
            satisfactoriamente.</td>
          </tr>
          <tr>
            <td colspan="2">
              <p className="textPlazoDetails">En un plazo máximo de <strong>5 días calendario</strong>, se le informará por medio de un mensaje de texto el estado de sus productos.</p></td>
          </tr>
          <tr>
            <td className="textIconTable" colspan="2">
                <p className="textResultName">Adelanto de pensión:</p>
                <p className="textResultDetails">Aprobado</p>
            </td>
          </tr>
          <tr>
            <td className="textIconTable" colspan="2">
              <p className="textResultName">Tipo de seguro:</p>
              <p className="textResultDetails">Familiar- 106.200 mensual</p>
            </td>
          </tr>
          <tr>
            <td className="textIconTable" colspan="2">
              <p className="textResultName">Fecha y hora:</p>
              <p className="textResultDetails">29/01/2020, 09:41 am</p>
            </td>
          </tr>
        </table>
      </div>

    <br></br>

    <button className="continueButton"> Finalizar
      </button></center>
  </section>
  )
}
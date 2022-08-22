import React from 'react'
import "./itemBenefit.css"
import imageBenefitPension from "../../assets/img/dolarimg.png";
import imagePhoneDollar from "../../assets/img/phonedolar.png";
import imageBalanceDollar from "../../assets/img/dolarDocument.png";
import finalBalanceDollar from "../../assets/img/balancedolar.png";


export default function ItemBenefit() {
  return (
<>
    <div className="containerTable" >
      <table className="demo" >
        <tbody >
        <tr >
          <td width="10%"><img className='imageBenefitPension' src={ imageBenefitPension } alt="Imagen Beneficio"/></td>
          <td ><p className="Text" valing="top">Reciba  el pago de su pensionados
              y otros depositos de su cuenta.</p></td>
        </tr>
        <tr>
          <td width="10%" ><img className='imagePhoneDollar' src={ imagePhoneDollar } alt="Imagen Beneficio"/></td>
          <td> <p className="Text">Programe de forma automática sus transferencias, el pago de productos y servicios.</p></td>
        </tr>
        <tr>
          <td width="10%" ><img className='imageBalanceDollar' src={ imageBalanceDollar } alt="Imagen Beneficio"/></td>
          <td >  <p className="Text">Podrá obtener benefcios con aliados y tasas especiales en créditos para pensionados.</p></td>
        </tr>
        <tr>
          <td width="10%" ><img className='finalBalanceDollar' src={ finalBalanceDollar } alt="Imagen Beneficio"/></td>
          <td > <p className="Text">Podrá acceder a un cupo de adelanto de pensión y a los productos móviles que le ofrece Davivienda.</p></td>
        </tr>
        </tbody>
      </table>


      <center><div className='footer'  >
          <p>Este producto cuenta con el seguro de depósitos <strong>FOGAFIN</strong></p>
      </div>
      </center>

      <center><button> Continuar
      </button></center>
      
    </div>

    




</>

    
  )
}

import React from 'react'
import "./itemBenefit.css"
import imageBenefitPension from "../../assets/img/dolarimg.png";
import imagePhoneDollar from "../../assets/img/phonedolar.png";
import imageBalanceDollar from "../../assets/img/dolarDocument.png";
import finalBalanceDollar from "../../assets/img/balancedolar.png";


export default function ItemBenefit() {
  return (
    <div className="ItemBenefit">


      <div className="Image">

        <img className='imageBenefitPension' src={ imageBenefitPension } alt="Imagen Beneficio"/>

      </div>

      <div className="Text">

          Reciba el pago de su pensión y otros depósitos en su cuenta
      </div>


      <div className="Image">

<img className='imagePhoneDollar' src={ imagePhoneDollar } alt="Imagen Beneficio"/>

</div>

<div className="Text">

  Programe de forma automática sus transferencias, el pago de productos y sevicios
</div>


<div className="Image">

<img className='imageBalanceDollar' src={ imageBalanceDollar } alt="Imagen Beneficio"/>

</div>

<div className="Text">

  Podrá obtener benefcios con aliados y tasas especiales en créditos para pensionados.
</div>


<div className="Image">

<img className='finalBalanceDollar' src={ finalBalanceDollar } alt="Imagen Beneficio"/>

</div>

<div className="Text">

  Podrá acceder a un cupo de adelanto de pensión y a los productos móviles que le ofrece Davivienda.
</div>








    </div>
  )
}

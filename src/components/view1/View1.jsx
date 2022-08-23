import React from 'react'
import Header from "../Header/Header";
import ItemBenefit from "../itemsBenefit/ItemBenefit";

import "./view1.css";




export default function View1() {
  return (
   <section className="view1">

   <Header userName= "FREDY GONZALEZ GARCIA" title="Prueba" description="Beneficios y Características" />
   <ItemBenefit/>

   </section>
  )
}

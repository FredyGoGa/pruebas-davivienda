import React from 'react'
import Header from "../Header/Header";
import ItemBenefit from "../itemsBenefit/ItemBenefit";

import "./worktable.css";




export default function Worktable() {
  return (
   <section className="worktable">

   <Header userName= "FREDY GONZALEZ GARCIA" title="Prueba" description="Beneficios y Características" />
   <ItemBenefit/>

   </section>
  )
}

/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import close from "../../assets/img/close.png";
import logo from "../../assets/img/logo-red.png";
import iconoMenu from "../../assets/img/icono-tres-lineas.png";
import iconoatras from "../../assets/img/atrasboton.png";
import  "./header.css";

export default function Header(props) {

  const userName = props.userName
  const title = props.title
  const description = props.description
  return (
    <>

    <header className='sectionHeader'>

        <img className='logo'src={ logo }/>
        <img className='close'src={ close }/>

    </header>


    <section className="sectionUser">

          <div className="nameUser">
            <p className="p">{userName}</p>
          </div>
          <div className = "sectionSelector">
            <div >
              <img className='menuIcon'src={  iconoMenu }/>
            <div className="sectionName">
              <p className='sectionTitle'>{title}</p>
              <p className='sectionDescription'>{description}</p>

          </div>
          </div>


          </div>


    </section>
  
    <div className="divButtonBack">
      <img className="buttonBack" src={  iconoatras }/>
      <p className="textBack">Atrás</p>
    </div>



    </>








  )
}

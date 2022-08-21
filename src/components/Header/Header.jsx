/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import close from "../../assets/img/close.png";
import logo from "../../assets/img/logo-red.png";

import  "./header.css";

export default function Header() {


  return (
    <>
    
    <div className='sectionHeader'>
   
    
    
    <img className='logo'src={ logo }  />
    <img className='close'src={ close }  />
     
      
    

    </div>
    
    
    
    <div className="sectionUser">
   <div className="nameUser">
    CRISTIAN DAVID ARIAS CORREA
   </div>
   
    
    </div>
    
    
    
    </>
    
    
   

  
    

    
  )
}

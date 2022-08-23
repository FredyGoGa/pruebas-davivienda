/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import close from "../../assets/img/Grupo 5.png";
import logo from "../../assets/img/Grupo 6.png";
import iconoMenu from "../../assets/img/Grupo 13374.png";
import iconoatras from "../../assets/img/Trazado 42.png";
import  "./header.css";

export default function Header(props) {

  const userName = props.userName
  const title = props.title
  const description = props.description
  return (
    <>

    <header className='sectionHeader'>
    <table className="logo" >
            <tbody >
            <tr >
              <td >
                <img className='logo'src={ logo }/>
              </td>
              <td >
                <img className='close'src={ close }/>
              </td>
            </tr>
            </tbody>
          </table>
    </header>


    <section className="sectionUser">

          <div className="nameUser">
            <p className="p">{userName}</p>
          </div>
          <div >
          <table className="sectionSelector" >
            <tbody >
            <tr >
              <td width="10%"> <img className='menuIcon'src={  iconoMenu }/></td>
              <td >
                <p className='sectionTitle'>{title}</p>
                <p className='sectionDescription'>{description}</p>
              </td>
            </tr>
            </tbody>
          </table>
        </div>


    </section>
    <div >
    <table className="divButtonBack" >
            <tbody >
            <tr >
              <td width="5%"> <img className='buttonBack'src={  iconoatras }/></td>
              <td >
                <p className="textBack">Atrás</p>
              </td>
            </tr>
            </tbody>
          </table>

    </div>



    </>








  )
}

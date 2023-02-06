import '../../styles/css-universal/Navbar.css';
import imgTop from '../../assets/img/imgTopo.png';
import boschLogo from '../../assets/img/Bosch-logo.png';
import { Idiomas } from '../universal/Idiomas';
import '../../styles/css-universal/Idiomas.css';
import { useState } from 'react';

export const Navbar = () => {

    const [showElement, setShowElement] = useState(false)
    // const [hideElement, setHideElement] = useState(true) // fazer
    const showOrHide = () => setShowElement(true)

    return (
        <div className='navbar-div'>
            <div className='navbar-div-1 '>
                <img className='navbar-div-img-1 ' src={imgTop} alt='' />
            </div>
            <div className='navbar-div-2'>
                <img className='navbar-div-img-2' src={boschLogo} alt='' />
                <button className='navbar-btn-idioma hover:scale-110 duration-200 ease-in-out' onClick={showOrHide}> </button> 
                {/* <Translate/> */}
            </div>

            { showElement ? <Idiomas />: null }
            
        </div>
    )
}
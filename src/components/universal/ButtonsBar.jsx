import '../../styles/css-universal/ButtonsBar.css';
import Acessibilidade from '../../assets/img/acessibility.png';
import { Link } from 'react-router-dom';
import { Acessibility } from '../universal/Acessibility';
import { useState } from 'react';

export const ButtonsBar = () => {

    const [show, setShow] = useState(false)
    const showAndHide = () => setShow(true)

    return (
        <>
            {/* <Acessibility/> */}
            <div className='buttons-bar-div'>
                <div className='buttons-acess'>
                { show ? <Acessibility />: null }
                </div>
                <div className='buttons-bar-ilha mt-auto'>
                    <button className='hover:scale-110 duration-200 ease-in-out' onClick={showAndHide}> <img className='buttons-bar-acessibilidade-img w-14' src={Acessibilidade} alt='' /> </button>
                    <Link to={'/manual'} className='buttons-bar-click-link'><button class='buttons-bar-click' role='button'>Manual</button></Link>  
                    <Link to={'/montagem'} className='buttons-bar-click-link'><button class='buttons-bar-click' role='button'>Montagem</button></Link>  
                    <Link to={'/informacoes'} className='buttons-bar-click-link'><button class='buttons-bar-click' role='button'>Informações</button></Link>  
                </div>
            </div>
        </>
    )
}
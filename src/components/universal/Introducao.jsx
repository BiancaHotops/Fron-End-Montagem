import '../../styles/css_universal/Introducao.css';
import {useNavigate } from 'react-router-dom';

export const Introducao = (props) => {
    const navigate = useNavigate();

    const proosScreen = (cod) => {
        navigate('/informacoes')
        console.log(cod);
    }

    return (
        <div className='Introducao-div' >
            <button  className='Introducao-button' onClick={() => proosScreen(props.cod)}>Continuar</button>
        </div>
    )
}
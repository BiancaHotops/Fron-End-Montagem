import '../../styles/css-universal/Acessibility.css';
import React, { useState } from 'react';


export const Acessibility= () => {

  return (
    <>
    <div className='acess'>
        <div className='acess-titulo w-48 text-center p-1 rounded-tl-lg rounded-tr-lg text-white font-bold'>
            Acessibilidades
        </div>
        <div className='acess-container w-48 h-28 rounded-bl-lg rounded-br-lg'>
            <div className='acess-buttons'>
                <div className='acess-btn bg-white w-40 text-center mb-5 p-1 rounded-xl'>
                    <button> Leitor de texto </button>
                </div>
                <div className='acess-btn bg-white w-40 text-center p-1 rounded-xl'>
                    <button> Alto contraste </button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

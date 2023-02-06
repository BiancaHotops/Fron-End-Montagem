import React, { useState } from 'react';
import '../../styles/css-montagem/BoxMontagem.css';
import ImgFixaMontagem from '../../assets/img/img-fixa-montagem.png';
import ImgMontagemA from '../../assets/img/img-furadeira-A.png';
import ImgMontagemB from '../../assets/img/img-furadeira-B.png';
import ImgMontagemC from '../../assets/img/img-furadeira-C.png';
import ImgMontagemD from '../../assets/img/img-furadeira-D.png';
import ImgMontagemE from '../../assets/img/img-furadeira-E.png';

export const BoxMontagem = async ({ trocaimg }) => {
    const trocas =  await client.fetch(query);

    const{ image } = trocaimg;
    const [index, setIndex] = useState(0);

    return (
        <div className="BoxMontagem-div" >

            <div className='montagem-components'>
                <div className='img-fixa-montagem-div'>
                    <img className='img-fixa-montagem' src={ImgFixaMontagem(image && image [index])} />
                </div>
                <div className='direction-div'>
                <div className='box-img-montagem-div'>
                    <div className='div-img-montagem'>
                        { image?.map((item, i) => (
                        <img className='img-montagem' src={ImgFixaMontagem(item)} onMouseEnter='' />
                        // <img className='img-montagem' src={ImgMontagemB} />
                        // <img className='img-montagem' src={ImgMontagemC} />
                        // <img className='img-montagem' src={ImgMontagemD} />
                        // <img className='img-montagem' src={ImgMontagemE} />
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export const  getStaticPaths = async () => {
    const query = `*[_type == "troca"]{
        slug{
            current
        }
    }`
}

const paths = trocas.map((troca) => ({
    params: {
        slug: troca.slug.current
    }
}));

 return{
    paths,
    fallback: 'blocking'
    
 }
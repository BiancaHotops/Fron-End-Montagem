// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import React, { useEffect, useState } from 'react';

// import ImgMontagemA from '../../assets/img/img-furadeira-A.png';
// import ImgMontagemB from '../../assets/img/img-furadeira-B.png';
// import ImgMontagemC from '../../assets/img/img-furadeira-C.png';
// import ImgMontagemD from '../../assets/img/img-furadeira-D.png';
// import ImgMontagemE from '../../assets/img/img-furadeira-E.png';


// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// export const TesteSwiper = () => {

//     return (
//                             <Swiper
//                                 modules={[Navigation, Pagination, Scrollbar, A11y]}
//                                 direction={'vertical'}
//                                 spaceBetween={0}
//                                 slidesPerView={3}
//                                 // navigation
//                                 // pagination={{ clickable: true }}
//                                 scrollbar={{ enabled:true }}
//                                 onSwiper={(swiper) => console.log(swiper)}
//                                 onSlideChange={() => console.log('slide change')}
                                
//                             >

//                                 <SwiperSlide><img className='imgs-montagem' src={ImgMontagemA} onClick={() => setImagemMaximizada(ImgMontagemA)} /></SwiperSlide>
//                                 <SwiperSlide><img className='imgs-montagem' src={ImgMontagemB} onClick={() => setImagemMaximizada(ImgMontagemB)} /></SwiperSlide>
//                                 <SwiperSlide><img className='imgs-montagem' src={ImgMontagemC} onClick={() => setImagemMaximizada(ImgMontagemC)} /></SwiperSlide>
//                                 <SwiperSlide><img className='imgs-montagem' src={ImgMontagemD} onClick={() => setImagemMaximizada(ImgMontagemD)} /></SwiperSlide>
//                                 <SwiperSlide><img className='imgs-montagem' src={ImgMontagemE} onClick={() => setImagemMaximizada(ImgMontagemE)} /></SwiperSlide>
//                             </Swiper>   
//     )
// }
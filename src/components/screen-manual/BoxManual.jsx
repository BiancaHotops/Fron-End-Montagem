import '../../styles/css-manual/BoxManual.css';
import { Document, Page,pdfjs } from 'react-pdf';
import React, { useState } from 'react';
import PDF from '../../teste2.pdf';
import setaesquerda from '../../assets/img/seta-esquerda.png'
import setadireita from '../../assets/img/seta-direita.png'
// #toolbar=0 >>'''FAZER TOOLBAR DO PDF SUMIR'''


export const BoxManual= () => {

  pdfjs.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  
  /* click botão direito */
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
    
  /* documento carregado com sucesso */
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  
  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }
  
  function previousPage() {
    changePage(-1);
  }
  
  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <div className='BoxManual-container flex'>
        {/* <div className='BoxManual-pagec bg-purple-400'>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'} >>'''mostrar quantas páginas tem o pdf e em qual página está'''
        </div> */}
        <div className='BoxManual-pdf flex sm:mt-16'>
          {/* <td><iframe src={PDF+'#toolbar=0'} width='600' height='430'></iframe></td> */}
          <button type='button' disabled={pageNumber <= 1} onClick={previousPage} className='BoxManual-Pre cursor-default z-10'> <img src={setaesquerda} alt='' className='cursor-pointer m-2'/> </button>
          <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <button type='button' disabled={pageNumber >= numPages} onClick={nextPage} className='BoxManual-Precursor-default z-10'> <img src={setadireita} alt='' className='cursor-pointer m-2'/> </button>
        </div>
      </div>
    </>
  );
}

import React, { useEffect } from 'react';
import './Inicio.css';

function Inicio() {
  useEffect(() => {
    window.addEventListener('scroll', function () {
      let scroll = document.querySelector('.scrollTop');
      scroll.classList.toggle('active', window.scrollY > 450);
    });

    // Remova o evento de scroll quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []); // O segundo argumento é um array vazio para garantir que o useEffect só seja executado uma vez no montagem do componente

  function backTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <button className='scrollTop' onClick={backTop}>
        <i className="fa-solid fa-angle-up"></i>
      </button>
    </div>
  );
}

export default Inicio;
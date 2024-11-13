import { element } from 'prop-types';
import React, { useRef, useEffect } from 'react';

export function Clock() {

  const unidadesRef = useRef(0);
  const decenasRef = useRef(0);
  const centenasRef = useRef(0);
  const milesRef = useRef(0);
  const decenasMilesRef = useRef(0);
  const centenasMilesRef = useRef(0);
  const [,setRender] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      unidadesRef.current += 1;

      if (unidadesRef.current === 10) {
        unidadesRef.current = 0;
        decenasRef.current += 1;
      }
      if (decenasRef.current === 10) {
        decenasRef.current = 0;
        centenasRef.current += 1;
      }
      if (centenasRef.current === 10) {
        centenasRef.current = 0;
        milesRef.current += 1;
      }

      if (milesRef.current === 10) {
        milesRef.current = 0;
        decenasMilesRef.current += 1;
      }

      if (decenasMilesRef.current === 10) {
        decenasMilesRef.current = 0;
        centenasMilesRef.current += 1;
      }

      setRender((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => String(time).padStart(1, '0');
  
  const unidades = formatTime(unidadesRef.current);
  const decenas = formatTime(decenasRef.current);
  const centenas = formatTime(centenasRef.current);
  const miles = formatTime(milesRef.current);
  const decenasMiles = formatTime(decenasMilesRef.current);
  const centenasMiles = formatTime(centenasMilesRef.current);


  return (
    <div className='wrapper'>
      <div className='clock-body'>
        <div className='clock'>
          <i class="fa fa-clock"></i>
          <p>{centenasMiles}</p>
          <p>{decenasMiles}</p>
          <p>{miles}</p>
          <p>{centenas}</p>
          <p>{decenas}</p>
          <p>{unidades}</p>
        </div>
      </div>  
    </div>
  );
}

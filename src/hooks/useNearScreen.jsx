import { useEffect, useRef, useState } from 'react';

const useNearScreen = () => {
  const [show, setShow] = useState(false);

  const element = useRef(null);

  useEffect(() => {
    /* Algunos browsers no soportan intersectionObserver, si no lo soportan, pasamos
          la dependencia por medio de un import dinámico, usamos Promise.resolve para devolver
          en ambos casos un promesa y ejecutar el then para evitar menos código */
    Promise.resolve(typeof window.IntersectionObserver !== 'undefined'
      ? window.IntersectionObserver : import('intersection-observer'))
      .then(() => {
        const observer = new IntersectionObserver((entries) => {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        });
        // El elemento que pasemos a nuestro observer debe tener un tamaño determinado.
        observer.observe(element.current);
      });
  }, [element]);
  return { show, element };
};

export default useNearScreen;

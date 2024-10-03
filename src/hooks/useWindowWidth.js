import { useState, useEffect } from 'react';

const useWindowWidth = (delay = 100) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timer;

    const handleResize = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, delay);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [delay]);

  return windowWidth;
};

export default useWindowWidth;

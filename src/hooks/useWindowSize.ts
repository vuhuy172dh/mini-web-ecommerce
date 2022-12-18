import { useState, useEffect } from 'react';
import type { TWindowProps } from '../constants/types';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<TWindowProps>({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // add event listener
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;

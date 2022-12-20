import { useState, useCallback } from 'react';

/* eslint-disable */
function useClientRect() {
  const [rect, setRect] = useState<any>(null);
  const ref = useCallback((node: any) => {
    const getBounding = () => {
      if (node !== null) {
        setRect(node.getBoundingClientRect());
      }
    };
    getBounding();

    window.addEventListener('resize', getBounding);
  }, []);
  return { rect, ref };
}

export default useClientRect;

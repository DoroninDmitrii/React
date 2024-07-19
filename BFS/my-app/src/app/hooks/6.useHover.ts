import { useCallback, useRef, useState } from "react";

export function useHover() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const ref = useRef<T>();

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, []);

  const callbackRef = useCallback(node => {
    if (ref.current) {
      ref.current.removeEventListener('mouseenter', handleMouseEnter);
      ref.current.removeEventListener('mouseleave', handleMouseLeave);
    }

    ref.current = node;
    
    if (ref.current) {
      ref.current.addEventListener('mouseenter', handleMouseEnter);
      ref.current.addEventListener('mouseleave', handleMouseLeave); 
    }
  }, [handleMouseEnter, handleMouseLeave])

  return { callbackRef, isHovered };
};

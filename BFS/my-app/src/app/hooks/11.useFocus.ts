import { useCallback, useEffect, useRef, useState } from "react";

export function useFocus<T extends HTMLElement>() {
  const [focused, setFocused] = useState(false);
  const ref = useRef<T>();

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  const callbackRef = useCallback((node: T) => {
      if (ref.current) {
        ref.current.removeEventListener('focus', onFocus);
        ref.current.removeEventListener('blur', onBlur);
      }

    ref.current = node;
    
    if (ref.current) {
      ref.current.addEventListener('focus', onFocus);
      ref.current.addEventListener('blur', onBlur);
    }
  }, [])

  return { focused, callbackRef };
};

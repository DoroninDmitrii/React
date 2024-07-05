import { useEffect, useRef } from "react"

export function useTimeout(callback: () => void, delay: number) {
  const cbRef = useRef(callback);
  // cbRef.current;

  useEffect(() => {
    const timeoutId = setTimeout(() => cbRef.current(), delay);

    return () => clearTimeout(timeoutId);
  }, [delay])
}

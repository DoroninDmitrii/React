import { useEffect, useRef } from "react"

 export const useIsFirstRender = () => {
  const refIsFirst = useRef(false);

  useEffect(() => {
    refIsFirst.current = true;
  }, []);

  return refIsFirst.current;
 }

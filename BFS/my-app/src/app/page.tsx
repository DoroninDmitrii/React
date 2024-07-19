'use client'

import styles from "./page.module.css";
import { useTimeout } from "./hooks/2.useTimeout";
import { useIsFirstRender } from "./hooks/3.useIsFirstRender";
import { useHover } from "./hooks/6.useHover";

export default function Home() {
  useTimeout(() => console.log('hello'), 2000);
  useIsFirstRender();

  const hover1 = useHover();
  const hover2 = useHover();
  return (
    <main className={styles.main}>
      <div ref={hover1.callbackRef}>
        {hover1.isHovered ? 'Hello World' : 'Goodbuy World'}
      </div>
      <div ref={hover2.callbackRef}>
        {hover2.isHovered ? '1' : '2'}
      </div>
    </main>
  );
}

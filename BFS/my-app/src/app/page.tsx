'use client'

import styles from "./page.module.css";
import { useTimeout } from "./hooks/useTimeout";
import { useIsFirstRender } from "./hooks/useIsFirstRender";

export default function Home() {
  useTimeout(() => console.log('hello'), 2000);
  useIsFirstRender();
  return (
    <main className={styles.main}>

    </main>
  );
}

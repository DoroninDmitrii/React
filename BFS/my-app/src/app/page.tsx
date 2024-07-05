'use client'

import styles from "./page.module.css";
import { useTimeout } from "./hooks/useTimeout";

export default function Home() {
  useTimeout(() => console.log('hello'), 2000);
  return (
    <main className={styles.main}>

    </main>
  );
}

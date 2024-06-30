'use client'

import { useState } from "react";
import styles from "./page.module.css";

export default function App() {
  const [elements, setElement] = useState<any[]>([]);
  const [index, setIndex] = useState<any>(0);

  const addElement = () => {
    setElement([...elements, index]);
    setIndex((prev: any) => prev + 1);
  }

  const removeEl = (e: any) => {
    setElement(elements.filter((el) => el !== Number(e.target.id)));
  }

  return (
    <main className={styles.main}>
      <button onClick={addElement}>Add</button>
      {elements.map((el) => <button onClick={removeEl} id={el} key={el}>{el}</button>)}
    </main>
  );
}

'use client';

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function App() {
  const [count, setCount] = useState(5);
  const [id, setId] = useState<any>();
  console.log(count, 'count')

  const startInterval = () => {
    const idS = setInterval(() => {
    setCount((prev: any) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return 0;
      }
    });
    setId(idS);
  }, 1000);
  }

  useEffect(() => {
    console.log('1')
    if (count === 0) {
    console.log('2')
    return () => clearInterval(id);
    }
  }, [count, id])

  return (
    <>
      <div className={styles.count}>
        {count}
      </div>
    <main className={styles.main}>
      {count !== 0 && (
        <>
        <button onClick={startInterval}>Start</button>
        </>
      )}
    </main>
    </>
  );
}


// with useEffect

// 'use client';

// import { useEffect, useState } from "react";
// import styles from "./page.module.css";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     let timer: any;

//     if (start) {
//       timer = setInterval(() => {
//         setCount((prev) => prev + 1)
//       }, 1000)
//     }

//     return () => {
//       clearInterval(timer)
//     }
//   }, [start])

//   return (
//     <>
//       <div className={styles.count}>
//         {count}
//       </div>
//     <main className={styles.main}>
//       <button onClick={() => setStart(true)}>Start</button>
//       <button onClick={() => setStart(false)}>Stop</button>
//     </main>
//     </>
//   );
// }

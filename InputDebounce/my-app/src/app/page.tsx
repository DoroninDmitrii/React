// 'use client'

// import { useCallback, useState } from "react";
// import styles from "./page.module.css";


// const debounce = (func: any, delay: any) => {
//   let timeoutId: any;

//   return (...args: any) => {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
    
//     timeoutId = setTimeout(() => {
//       func(...args);
//     }, delay);
//   }
// }

// export default function Home() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState<string[]>([]);

//   const fetchResults = useCallback((query: any) => {
//     if (!query) {
//       setResults([]);
//       return;
//     }

//     const mockData = ['Alice', 'Bob', 'Charlie', 'David', 'Edward'];

//     const filteredResults = mockData.filter((name) => {
//      return name.toLowerCase().includes(query.toLowerCase());
//     })
//     setResults(filteredResults);
//   }, [])

//   const debouncedFetchResults = useCallback(debounce(fetchResults, 5000), [fetchResults]);

//   const handleChange = (e: any) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     debouncedFetchResults(value);
//   }

//   return (
//     <main className={styles.main}>
//       <input
//       type="text"
//       value={searchTerm}
//       placeholder="Search for a name..."
//       onChange={handleChange}
//       />
//       <ul>
//         {results?.map((result, index) => 
//          <li key={index}>{result}</li>
//         )}
//       </ul>
//     </main>
//   );
// }

'use client'

import { useCallback, useState, useMemo } from "react";
import styles from "./page.module.css";


const debounce = (func: any, delay: any) => {
  let timeoutId: any;

  return (...args: any) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  }
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const fetchResults = useCallback((query: any) => {
    if (!query) {
      setResults([]);
      return;
    }

    const mockData = ['Alice', 'Bob', 'Charlie', 'David', 'Edward'];

    const filteredResults = mockData.filter((name) => {
     return name.toLowerCase().includes(query.toLowerCase());
    })
    setResults(filteredResults);
  }, [])

  const debouncedSetSearchTerm = useMemo(() => debounce(setSearchTerm, 1000), []);

  const handleChange = (e: any) => {
    const value = e.target.value;
    debouncedSetSearchTerm(value);
  }

  // useMemo(() => {
  //   fetchResults(searchTerm);
  // }, [searchTerm]);

  return (
    <main className={styles.main}>
      <input
      type="text"
      value={searchTerm}
      placeholder="Search for a name..."
      onChange={handleChange}
      />
      <ul>
        {results?.map((result, index) => 
         <li key={index}>{result}</li>
        )}
      </ul>
    </main>
  );
}

'use client';

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState<any[]>([]);
  console.log(message, 'mes')

  const sendMessage = () => {
    setMessage((prevMessage: any[]) => 
      [...prevMessage, { id: Date.now(), message: text, like: 0}]
  );
    setText('');
  }

  const setLike = (id: any) => {
    setMessage((prevMessage: any[]) => {
    return prevMessage.map((el: any) => {
        if (el.id === id) {
          return { ...el, like: el.like + 1 }
        }
        return el;
      })
    })
  }

  const showList = message.length > 0 ? (
    <ul>
    {message.map((el: any) => (
        <li key={el.id}>
            Message: {el.message} / Likes: {el.like}
            <button onClick={() => setLike(el.id)}>Like</button>
        </li>
      ))}
    </ul> 
    ) : (
    <p>No message</p>
  )

  return (
    <div>
      {showList}
      <input placeholder="Write here" onChange={(e) => setText(e.target.value)} value={text}/>
      <button onClick={sendMessage}>Send message</button>
    </div>
  );
}

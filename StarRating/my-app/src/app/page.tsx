'use client';

import { useState } from "react";
import style from './page.module.css';

export default function Home() {
  const handleRating = (rating: any) => {
    console.log(`Rated with value: ${rating}`);
  }

  return (
    <div className="App">
      <h1>Rate this product</h1>
      <StarRating totalStars={5} onRate={handleRating} />
    </div>
  );
}

const StarRating = ({totalStars = 5, onRate = (args: any) => {}}) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (ratingValue: any) => {
    setRating(ratingValue);
    onRate(ratingValue);
  }

  const handleMouseEnter = (ratingValue: any) => {
    setHoverRating(ratingValue);
  }

  const handleMouseLeave = () => {
    setHoverRating(0);
  }

return (
  <div className={style.starating}>
    {[...Array(totalStars)].map((_, index) => {
      const ratingValue = index + 1;

      return (
        <span
          key={index}
          className={`star ${ratingValue <= (hoverRating || rating) ? 'filled' : ''}`}
          onClick={() => handleClick(ratingValue)}
          onMouseEnter={() => handleMouseEnter(ratingValue)}
          onMouseLeave={handleMouseLeave}
          style={{
            cursor: 'pointer', 
            fontSize: '2rem', 
            color: ratingValue <= (hoverRating || rating) ? '#ffc107' : '#e4e5e9' 
          }}
        >
        ★
        </span>
      )
    })}
  </div>
  )
}

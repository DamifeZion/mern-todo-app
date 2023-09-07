/* eslint-disable react/prop-types */
import { useState, useLayoutEffect } from "react";

const allQuote = [
  "Remove doubts with action",
  "Believe in yourself",
  "Stay focused and determined",
  "Embrace challenges and grow",
  "Success comes from perseverance",
  "You are what you do",
  "Time to make your own luck",
  "Let’s make an impact",
  "Be so good no one can ignore you",
];

const RandomQuotes = ({ className }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [quote, setQuote] = useState("");

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * allQuote.length);
    const randomQuote = allQuote[random];
    setIsShowing((prev) => !prev);
    setQuote(randomQuote);
  }, []);

  return (
    <p
      className={`${className} ${
        isShowing ? "opacity-0" : "opacity-100"
      } transition-opacity duration-300`}
    >
      {quote}
    </p>
  );
};

export default RandomQuotes;

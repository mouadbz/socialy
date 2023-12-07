"use client";

import TextTransition from "@/components/animation/TextTransition";
import React, { useEffect, useState } from "react";

type Props = { textList: Array<string>; className?: string };

function AnimatedTitle({ className, textList }: Props) {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textList.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TextTransition
      className={className}
      springConfig={{ tension: 300, friction: 10 }}
    >
      {textList[textIndex]}
    </TextTransition>
  );
}

export default AnimatedTitle;

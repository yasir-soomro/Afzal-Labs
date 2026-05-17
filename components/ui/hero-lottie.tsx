"use client";

import { useState, useEffect } from "react";
import { useLottie, useLottieInteractivity } from "lottie-react";

export function HeroLottie() {
  const [animationData, setAnimationData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load Lottie animation");
        return res.json();
      })
      .then((data) => setAnimationData(data))
      .catch((err) => {
        console.error("Error loading Lottie animation:", err);
        setError(true);
      });
  }, []);

  const lottieObj = useLottie({
    animationData: animationData || undefined,
    loop: false,
    autoplay: false,
  });

  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 100],
      },
    ],
  });

  return (
    <div className="w-full h-full flex items-center justify-center">
      {error ? (
        <div className="text-zinc-500 text-xs font-mono uppercase tracking-widest text-center px-4">
          Animation load failed
        </div>
      ) : !animationData ? (
        <div className="text-zinc-400 text-xs font-mono uppercase tracking-widest">Loading...</div>
      ) : (
        Animation
      )}
    </div>
  );
}

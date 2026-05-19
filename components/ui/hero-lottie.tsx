"use client";

import { useState, useEffect } from "react";
import { useLottie, useLottieInteractivity } from "lottie-react";

let lottieCache: Promise<any> | null = null;

export function HeroLottie() {
  const [animationData, setAnimationData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!lottieCache) {
      lottieCache = fetch("https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load Lottie animation");
          return res.json();
        });
    }

    lottieCache
      .then((data) => {
        if (!ignore) {
          setAnimationData(data);
        }
      })
      .catch((err) => {
        console.error("Error loading Lottie animation:", err);
        if (!ignore) {
          setError(true);
        }
      });
      
    let ignore = false;
    return () => {
      ignore = true;
    };
  }, []);

  const lottieObj = useLottie({
    animationData: animationData || undefined,
    loop: false,
    autoplay: false,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
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

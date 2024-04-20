'use client'

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const audio = new Audio('/music.mp3');
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#D4B8FF]">
      <a href="https://youtu.be/R2yOpkIGTeg?si=lPIUnzwogOFfXvWP">
        <img className="animate-spin" src="/next.png" alt=""/>
      </a>
    </main>
  );
}

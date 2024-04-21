'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [audioStarted, setAudioStarted] = useState(false);

  useEffect(() => {
    if (audioStarted) {
      const audio = new Audio('/music.mp3');
      audio.loop = true;
      audio.play();
      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [audioStarted]);

  const startAudio = () => {
    setAudioStarted(true);
    document.removeEventListener('click', startAudio);
  };

  useEffect(() => {
    document.addEventListener('click', startAudio);
    return () => {
      document.removeEventListener('click', startAudio);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#D4B8FF]">
        <img className="animate-spin" src="/next.png" alt=""/>
    </main>
  );
}
'use client'

import { useEffect, useState } from "react"
import Link from 'next/link';

export default function Home() {
  const [audioStarted, setAudioStarted] = useState(false);

  useEffect(() => {
    let audio: HTMLAudioElement;
    if (audioStarted) {
      audio = new Audio('/music.mp3');
      audio.loop = true;
      audio.play().catch(error => console.log(error));
      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [audioStarted]);

  const startAudio = () => {
    setAudioStarted(true);
    document.removeEventListener('click', startAudio);
    document.removeEventListener('keydown', startAudio);
    document.removeEventListener('touchstart', startAudio);
  };

  useEffect(() => {
    document.addEventListener('click', startAudio);
    document.addEventListener('keydown', startAudio);
    document.addEventListener('touchstart', startAudio);
    return () => {
      document.removeEventListener('click', startAudio);
      document.removeEventListener('keydown', startAudio);
      document.removeEventListener('touchstart', startAudio);
    };
  }, []);

  return (
<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#D4B8FF] relative">
  <a href="/maomao">
    <img className="animate-spin" src="/next.png" alt=""/>
  </a>
  <div className="absolute bottom-0 left-0 p-4">
    ver: 0.1.1
  </div>
</main>

  );
}

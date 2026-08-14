"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;

    const unmuteOnInteraction = () => {
      audio.muted = false;
      window.removeEventListener("pointerdown", unmuteOnInteraction);
      window.removeEventListener("keydown", unmuteOnInteraction);
      window.removeEventListener("wheel", unmuteOnInteraction);
      window.removeEventListener("touchstart", unmuteOnInteraction);
      window.removeEventListener("scroll", unmuteOnInteraction);
    };

    const tryAutoplay = async () => {
      try {
        // Most browsers block unmuted autoplay without prior interaction.
        await audio.play();
        setIsPlaying(true);
      } catch {
        // Fall back to silent autoplay, then unmute on the visitor's
        // first interaction with the page.
        audio.muted = true;
        try {
          await audio.play();
          setIsPlaying(true);
          window.addEventListener("pointerdown", unmuteOnInteraction, { once: true });
          window.addEventListener("keydown", unmuteOnInteraction, { once: true });
          window.addEventListener("wheel", unmuteOnInteraction, { once: true, passive: true });
          window.addEventListener("touchstart", unmuteOnInteraction, { once: true, passive: true });
          window.addEventListener("scroll", unmuteOnInteraction, { once: true, passive: true });
        } catch {
          setIsPlaying(false);
        }
      }
    };

    tryAutoplay();

    return () => {
      window.removeEventListener("pointerdown", unmuteOnInteraction);
      window.removeEventListener("keydown", unmuteOnInteraction);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.muted = false;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio ref={audioRef} src="/audio/ambient-snowfall.mp3" loop preload="auto" />
      <button
        onClick={togglePlay}
        className="rounded-full bg-black/80 text-white p-3 shadow-md hover:bg-black/90 transition-all"
        aria-label={isPlaying ? "Pause ambient music" : "Play ambient music"}
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>
    </div>
  );
}

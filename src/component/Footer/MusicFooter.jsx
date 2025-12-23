import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function MusicFooter({ song, onNext, onPrev }) {
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    if (song?.url && audioRef.current) {
      audioRef.current.src = song.url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [song]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    isPlaying ? audio.pause() : audio.play();
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time = 0) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;

    setProgress((audio.currentTime / audio.duration) * 100);
    setCurrentTime(formatTime(audio.currentTime));
    setDuration(formatTime(audio.duration));
  };

  const handleSeek = (e) => {
    const bar = progressRef.current;
    const audio = audioRef.current;
    if (!bar || !audio) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    audio.currentTime = (clickX / rect.width) * audio.duration;
  };

  if (!song) return null;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white  shadow-md z-50">
      {/* Progress Bar */}
      <div
        ref={progressRef}
        onClick={handleSeek}
        className="h-1 bg-gray-300 cursor-pointer"
      >
        <div className="h-1 bg-green-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="flex justify-between items-center px-4 py-3">
        {/* Song Info */}
        <div
          className="flex gap-3 
                w-[240px] min-w-[240px] max-w-[240px] 
                overflow-hidden"
        >
          <img src={song.image} className="w-10 h-10 rounded flex-shrink-0" />

          <div className="overflow-hidden">
            <h3 className="text-sm font-semibold truncate">{song.title}</h3>
            <p className="text-xs text-gray-500 truncate">{song.artist}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-4 items-center">
          <SkipBack onClick={onPrev} />
          {isPlaying ? (
            <Pause onClick={togglePlay} />
          ) : (
            <Play onClick={togglePlay} />
          )}
          <SkipForward onClick={onNext} />
        </div>

        {/* Time */}
        <div className="text-sm hidden md:block">
          {currentTime} / {duration}
        </div>
      </div>

      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={onNext} />
    </footer>
  );
}

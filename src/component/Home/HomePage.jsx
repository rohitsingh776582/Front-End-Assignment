
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import TrendingSongNow from "../Dashboard/TrendingSongNow";
import MusicFooter from "../Footer/MusicFooter";

function HomePage() {
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleSongSelect = (songs, index) => {
    setPlaylist(songs);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < playlist.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : playlist.length - 1
    );
  };

  return (
    <>
      <Navbar onSearch={setSearchText} />

      <TrendingSongNow
        onSongSelect={handleSongSelect}
        searchText={searchText}
      />

      {currentIndex !== null && (
        <MusicFooter
          song={playlist[currentIndex]}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
}

export default HomePage;

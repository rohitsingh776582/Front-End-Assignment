import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://fi1.api.radio-browser.info/json/stations/topclick/100";

export default function TrendingSongNow({ onSongSelect, searchText }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        const data = response.data;
        const validSongs = data
          .filter((item) => item.url_resolved)
          .map((item) => ({
            title: item.name,
            artist: item.country,
            image: item.favicon,
            url: item.url_resolved,
          }));

        setSongs(validSongs);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Trending Now</h2>

      <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {filteredSongs.map((song, index) => (
          <div
            key={index}
            onClick={() => onSongSelect(filteredSongs, index)}
            className="cursor-pointer border border-black/20 rounded-lg overflow-hidden"
          >
            {/* Image wrapper */}
            <div className="w-full aspect-square">
              <img
                src={song.image}
                alt={song.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="p-2">
              <h3 className="text-sm font-semibold truncate">{song.title}</h3>
              <p className="text-xs text-gray-500 truncate">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

const API_URL =
  "https://fi1.api.radio-browser.info/json/stations/topclick/20";

export default function RadioApp() {
  const [stations, setStations] = useState([]);
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setStations(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading radios...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          🎵 Top Radio Stations
        </h1>

        <div className="space-y-4">
          {stations.map((station) => (
            <div
              key={station.stationuuid}
              className="bg-white p-4 rounded-lg shadow flex items-center gap-4"
            >
              {/* 🔹 Station Image */}
              <img
                src={
                  station.favicon
                    ? station.favicon
                    : "https://via.placeholder.com/60?text=Radio"
                }
                alt={station.name}
                className="w-14 h-14 rounded object-cover border"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/60?text=Radio")
                }
              />

              {/* 🔹 Station Info */}
              <div className="flex-1">
                <h2 className="font-semibold text-lg">
                  {station.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {station.country} • {station.codec} •{" "}
                  {station.bitrate}kbps
                </p>
              </div>

              {/* 🔹 Play Button */}
              <button
                onClick={() => setCurrent(station.url)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                ▶ Play
              </button>
            </div>
          ))}
        </div>

        {current && (
          <div className="mt-6 bg-white p-4 rounded-lg shadow">
            <audio
              src={current}
              controls
              autoPlay
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}

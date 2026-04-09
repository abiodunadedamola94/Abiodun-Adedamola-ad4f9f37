import { useState } from "react";
import { Play, Pause } from "lucide-react";

const playlists = [
  { name: "Coding Flow", tracks: 24, duration: "2h 15m" },
  { name: "Late Night Vibes", tracks: 18, duration: "1h 45m" },
  { name: "Focus Mode", tracks: 32, duration: "3h 20m" },
];

const tracks = [
  { title: "Midnight Drive", artist: "Synthwave Dreams", duration: "4:32" },
  { title: "Digital Horizon", artist: "Neon Pulse", duration: "3:58" },
  { title: "Code & Coffee", artist: "Lo-Fi Collective", duration: "5:12" },
  { title: "Binary Sunset", artist: "Retrowave", duration: "4:05" },
  { title: "Electric Dreams", artist: "Synth Masters", duration: "6:23" },
  { title: "Pixel Paradise", artist: "Chiptune Heroes", duration: "3:47" },
];

export default function Songs() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-10">
        {/* Playlists */}
        <section>
          <h2 className="mb-4 text-[15px] font-semibold tracking-tight text-foreground">
            Playlists
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {playlists.map((pl) => (
              <div
                key={pl.name}
                className="rounded-2xl border border-border bg-card p-3 transition-colors hover:border-muted-foreground/20 cursor-pointer"
              >
                <div className="aspect-square rounded-xl bg-gradient-to-br from-[#7b5cff]/20 to-[#23d8b9]/20 mb-3 flex items-center justify-center">
                  <Play size={16} className="text-muted-foreground/40" />
                </div>
                <h3 className="text-[11px] font-medium text-foreground">{pl.name}</h3>
                <p className="text-[10px] text-muted-foreground mt-0.5">{pl.tracks} tracks · {pl.duration}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Now Playing */}
        <section>
          <h2 className="mb-4 text-[15px] font-semibold tracking-tight text-foreground">
            Now Playing
          </h2>
          <div className="rounded-[22px] border border-border bg-card p-4">
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/90 text-background transition-transform hover:scale-105"
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
              </button>
              <div>
                <p className="text-xs font-medium text-foreground">{tracks[currentTrack].title}</p>
                <p className="text-[11px] text-muted-foreground">{tracks[currentTrack].artist}</p>
              </div>
              <span className="ml-auto text-[10px] text-muted-foreground">{tracks[currentTrack].duration}</span>
            </div>
            <div className="h-1 rounded-full bg-secondary">
              <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#7b5cff] to-[#23d8b9]" />
            </div>
          </div>
        </section>

        {/* Track List */}
        <section>
          <h2 className="mb-4 text-[15px] font-semibold tracking-tight text-foreground">
            Tracks
          </h2>
          <div className="space-y-1">
            {tracks.map((track, index) => (
              <button
                key={track.title}
                onClick={() => { setCurrentTrack(index); setIsPlaying(true); }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-colors ${
                  currentTrack === index ? "bg-secondary" : "hover:bg-secondary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 text-center text-[10px] text-muted-foreground">{index + 1}</span>
                  <div>
                    <p className={`text-xs ${currentTrack === index ? "text-foreground font-medium" : "text-foreground/80"}`}>
                      {track.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{track.artist}</p>
                  </div>
                </div>
                <span className="text-[10px] text-muted-foreground">{track.duration}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

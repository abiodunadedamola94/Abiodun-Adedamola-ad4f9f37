import { useState } from "react";
import { Play, Pause, Plus } from "lucide-react";

const albums = [
  {
    title: "Lo-Fi Headspace",
    artist: "Various Artists",
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&q=80&auto=format&fit=crop",
  },
  {
    title: "Sunlit Hands",
    artist: "Outdoor Sessions",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80&auto=format&fit=crop",
  },
  {
    title: "Coloring Book",
    artist: "Chance the Rapper",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80&auto=format&fit=crop",
  },
  {
    title: "Neon Hearts",
    artist: "Synth Romance",
    cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80&auto=format&fit=crop",
  },
  {
    title: "Piano After Dark",
    artist: "Late Keys",
    cover: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&q=80&auto=format&fit=crop",
  },
];

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
      <div className="max-w-[560px] mx-auto space-y-12">
        {/* Songs intro + album-disc cards */}
        <section>
          <h1 className="text-[20px] font-semibold tracking-tight text-foreground">
            Songs and Playlists that I listen to.
          </h1>
          <p className="mt-2 max-w-[460px] text-[12px] leading-5 text-muted-foreground">
            Discover the soundtrack and playlists to my design genius that I listen depending on
            my different moods, It's like a therapy for me!
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-5">
            {albums.map((album) => (
              <div key={album.title} className="group relative">
                {/* Vinyl disc */}
                <div className="absolute right-0 top-1/2 z-0 h-[88%] w-[88%] -translate-y-1/2 translate-x-[42%] rounded-full bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#0a0a0a_55%,#000_100%)] shadow-[0_8px_24px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:translate-x-[55%]">
                  <div className="absolute inset-[6%] rounded-full border border-foreground/[0.04]" />
                  <div className="absolute inset-[14%] rounded-full border border-foreground/[0.04]" />
                  <div className="absolute inset-[22%] rounded-full border border-foreground/[0.04]" />
                  <div className="absolute inset-[30%] rounded-full border border-foreground/[0.04]" />
                  <div className="absolute left-1/2 top-1/2 h-[18%] w-[18%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#7b5cff] to-[#23d8b9]" />
                  <div className="absolute left-1/2 top-1/2 h-[5%] w-[5%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-background" />
                </div>
                {/* Album cover (sleeve) */}
                <div className="relative z-10 aspect-square overflow-hidden rounded-2xl border border-border bg-card shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
                  <img
                    src={album.cover}
                    alt={`${album.title} cover`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="relative z-10 mt-2 truncate text-[11px] font-medium text-foreground">{album.title}</p>
                <p className="relative z-10 truncate text-[10px] text-muted-foreground">{album.artist}</p>
              </div>
            ))}

            {/* Suggest a song */}
            <button
              type="button"
              className="group relative flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-card/40 text-muted-foreground transition-colors hover:border-muted-foreground/40 hover:text-foreground"
            >
              <Plus size={18} />
              <span className="text-[11px]">Suggest a song</span>
            </button>
          </div>
        </section>

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

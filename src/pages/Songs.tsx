import { Play, Pause, SkipForward, SkipBack, Heart, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const playlists = [
  {
    name: "Coding Flow",
    description: "Perfect for deep work sessions",
    trackCount: 24,
    duration: "2h 15m",
  },
  {
    name: "Late Night Vibes",
    description: "Chill beats for late coding",
    trackCount: 18,
    duration: "1h 45m",
  },
  {
    name: "Focus Mode",
    description: "Instrumental tracks for focus",
    trackCount: 32,
    duration: "3h 20m",
  },
];

const tracks = [
  { title: "Midnight Drive", artist: "Synthwave Dreams", duration: "4:32", liked: true },
  { title: "Digital Horizon", artist: "Neon Pulse", duration: "3:58", liked: false },
  { title: "Code & Coffee", artist: "Lo-Fi Collective", duration: "5:12", liked: true },
  { title: "Binary Sunset", artist: "Retrowave", duration: "4:05", liked: false },
  { title: "Electric Dreams", artist: "Synth Masters", duration: "6:23", liked: true },
  { title: "Pixel Paradise", artist: "Chiptune Heroes", duration: "3:47", liked: false },
];

export default function Songs() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  return (
    <div className="min-h-screen px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-display font-bold">
            My <span className="gradient-text">Music</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Playlists I listen to while coding and creating.
          </p>
        </div>

        {/* Playlists */}
        <div className="grid sm:grid-cols-3 gap-4">
          {playlists.map((playlist, index) => (
            <div 
              key={index}
              className="rounded-xl bg-card border border-border p-4 hover:border-primary/30 transition-colors cursor-pointer group"
            >
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 mb-4 flex items-center justify-center relative overflow-hidden">
                <Play className="w-8 h-8 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-semibold">{playlist.name}</h3>
              <p className="text-muted-foreground text-sm">{playlist.description}</p>
              <p className="text-muted-foreground text-xs mt-2">
                {playlist.trackCount} tracks • {playlist.duration}
              </p>
            </div>
          ))}
        </div>

        {/* Now Playing / Tracks */}
        <div className="space-y-6">
          <h2 className="text-xl font-display font-semibold">Recent Tracks</h2>
          
          {/* Player */}
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <Play className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{tracks[currentTrack].title}</h3>
                <p className="text-muted-foreground text-sm">{tracks[currentTrack].artist}</p>
              </div>
              <Heart className={`w-5 h-5 cursor-pointer ${tracks[currentTrack].liked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
            </div>

            {/* Progress bar placeholder */}
            <div className="h-1 rounded-full bg-secondary mb-4">
              <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-primary to-accent" />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setCurrentTrack(Math.max(0, currentTrack - 1))}
              >
                <SkipBack className="w-5 h-5" />
              </Button>
              <Button 
                size="icon"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setCurrentTrack(Math.min(tracks.length - 1, currentTrack + 1))}
              >
                <SkipForward className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Track List */}
          <div className="space-y-2">
            {tracks.map((track, index) => (
              <div 
                key={index}
                onClick={() => setCurrentTrack(index)}
                className={`flex items-center gap-4 p-3 rounded-xl transition-colors cursor-pointer ${
                  currentTrack === index ? 'bg-primary/10' : 'hover:bg-secondary'
                }`}
              >
                <span className="w-6 text-center text-muted-foreground text-sm">{index + 1}</span>
                <div className="flex-1">
                  <p className={`font-medium text-sm ${currentTrack === index ? 'text-primary' : ''}`}>
                    {track.title}
                  </p>
                  <p className="text-muted-foreground text-xs">{track.artist}</p>
                </div>
                <Heart className={`w-4 h-4 ${track.liked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                <span className="text-muted-foreground text-sm">{track.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

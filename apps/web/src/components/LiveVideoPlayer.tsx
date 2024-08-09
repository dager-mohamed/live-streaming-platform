import { MediaPlayer, MediaProvider, PlayerSrc, Poster } from '@vidstack/react';
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default';

interface VideoPlayerProps {
  src: PlayerSrc;
  poster: string;
}

export default function LiveVideoPlayer({ src, poster }: VideoPlayerProps) {
  return (
    <div className="w-full h-full" style={{ maxWidth: '80%' }}>
      <MediaPlayer
        src={src}
        poster={poster}
        viewType="video"
        streamType="live"
        className="h-full"
        logLevel="warn"
        crossOrigin
        liveEdgeTolerance={6}
        playsInline
      >
        <MediaProvider>
          <Poster className="vds-poster" />
        </MediaProvider>
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
}

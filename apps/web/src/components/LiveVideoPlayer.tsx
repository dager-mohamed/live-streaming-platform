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
        src="https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8"
        poster="https://image.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM/thumbnail.webp?time=30"
        viewType="video"
        streamType="live"
        className="h-full"
        logLevel="warn"
        crossOrigin
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

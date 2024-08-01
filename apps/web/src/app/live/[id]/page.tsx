import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/audio.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import Chat from '../../../components/Chat';
import LiveVideoPlayer from '../../../components/LiveVideoPlayer';

export default function LiveStreamPage() {
  return (
    <>
    <div className="flex w-full h-screen">
      <LiveVideoPlayer
        src={
          'https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8'
        }
        poster={
          'https://image.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM/thumbnail.webp?time=30'
        }
      />
      <Chat />
    </div>
    </>
  );
}

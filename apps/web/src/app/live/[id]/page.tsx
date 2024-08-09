import Chat from '../../../components/Chat';
import LiveVideoPlayer from '../../../components/LiveVideoPlayer';

export default function LiveStreamPage() {
  return (
    <div className="flex w-full h-screen">
      <div className="flex-1">
        <LiveVideoPlayer
          src={
            'http://localhost:8080/hls/test.m3u8' // just for testing
          }

        />
      </div>
      <div className="">
        <Chat />
      </div>
    </div>
  );
}

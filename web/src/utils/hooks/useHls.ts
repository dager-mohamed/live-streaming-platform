// useHls.ts
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const useHls = (src: string, videoRef: React.RefObject<HTMLVideoElement>) => {
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    const hls = new Hls();
    if (Hls.isSupported()) {
      hls.loadSource(src);
      hls.attachMedia(videoRef.current!);
      hlsRef.current = hls;
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current!.muted = true;
        videoRef.current?.play();
        videoRef.current!.muted = false;
      });
    } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = src;
    }

    return () => {
      if (Hls.isSupported()) {
        hls.destroy();
      }
    };
  }, [src, videoRef]);

  return hlsRef;
};

export default useHls;

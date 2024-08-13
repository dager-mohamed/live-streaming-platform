/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client';
import { useRef, useState, useEffect } from 'react';
import Hls from 'hls.js';
import { Badge, Button } from '@org/shared';
import {
  MaximizeIcon,
  PlayIcon,
  PauseIcon,
  VolumeXIcon,
  Volume2Icon,
  MinimizeIcon,
} from 'lucide-react';

interface VideoPlayerProps {
  src: string;
}

export default function LiveVideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const hls = new Hls();
    if (Hls.isSupported()) {
      hls.loadSource(src);
      hls.attachMedia(videoRef.current!);
      hlsRef.current = hls;
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current!.muted = true;
        setIsMuted(true);

        videoRef.current?.play();
        setIsPlaying(true);

        videoRef.current!.muted = false;
        setIsMuted(false);
      });
    } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
      // For Safari, where HLS is natively supported
      videoRef.current.src = src;
    }

    return () => {
      if (Hls.isSupported()) {
        hls.destroy();
      }
    };
  }, [src]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // When resuming playback, check if the video should jump to the live edge
        if (hlsRef.current) {
          const liveEdge = videoRef.current.duration - 10; // 10 seconds before the live edge
          const currentTime = videoRef.current.currentTime;

          // Check if the current time is far from the live edge
          if (currentTime < liveEdge) {
            videoRef.current.currentTime = liveEdge;
          }
        }
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (!isFullscreen) {
        if (containerRef.current.requestFullscreen) {
          containerRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-full"
        controls={false}
        controlsList="nodownload"
        playsInline
      >
        <source src={src} type="application/x-mpegURL" />
      </video>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-between p-4 space-x-3 text-white">
        <div className="flex items-center space-x-3">
          <Button
            size="icon"
            variant="ghost"
            className="w-9 h-9 hover:bg-white/10"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <PauseIcon className="w-6 h-6 fill-white" />
            ) : (
              <PlayIcon className="w-6 h-6 fill-white" />
            )}
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="w-9 h-9 hover:bg-white/10"
            onClick={handleMuteUnmute}
          >
            {isMuted ? (
              <VolumeXIcon className="w-6 h-6 fill-white" />
            ) : (
              <Volume2Icon className="w-6 h-6 fill-white" />
            )}
          </Button>
          <Badge
            variant="outline"
            className="bg-red-500 text-white px-2 py-1 rounded-sm border-none text-xs"
          >
            Live
          </Badge>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="w-9 h-9 hover:bg-white/10"
          onClick={handleFullscreen}
        >
          {isFullscreen ? (
            <MinimizeIcon className="w-6 h-6 fill-white" />
          ) : (
            <MaximizeIcon className="w-6 h-6 fill-white" />
          )}
        </Button>
      </div>
    </div>
  );
}

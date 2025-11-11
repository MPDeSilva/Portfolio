'use client'

import dynamic from 'next/dynamic'

const Plyr = dynamic(() => import('plyr-react'), { ssr: false })

interface VideoPlayerProps {
  videoId: string
  poster?: string
  className?: string
}

export default function VideoPlayer({ videoId, poster, className = '' }: VideoPlayerProps) {
  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  const youtubeId = getYouTubeId(videoId);

  if (!youtubeId) {
    return (
      <div className={`bg-gray-200 aspect-video flex items-center justify-center ${className}`}>
        <p className="text-gray-500">Invalid video URL</p>
      </div>
    );
  }

  const videoSrc = {
    type: 'video' as const,
    sources: [
      {
        src: youtubeId,
        provider: 'youtube' as const,
      },
    ],
    poster,
  }

  const options = {
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    youtube: {
      noCookie: false,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      modestbranding: 1,
    },
  }

  return (
    <div className={`plyr-custom-container video-player w-full h-full ${className}`} suppressHydrationWarning>
      <Plyr source={videoSrc} options={options} />
    </div>
  )
}

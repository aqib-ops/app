import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

interface ShowreelPlayerProps {
  url?: string;
  title?: string;
  posterUrl?: string;
}

function getYouTubeVideoId(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.replace(/^www\./, '');
    let videoId = '';

    if (hostname === 'youtu.be') {
      videoId = parsedUrl.pathname.split('/').filter(Boolean)[0] ?? '';
    } else if (hostname.endsWith('youtube.com')) {
      if (parsedUrl.pathname === '/watch') {
        videoId = parsedUrl.searchParams.get('v') ?? '';
      } else {
        const [, route, id] = parsedUrl.pathname.split('/');
        if (['embed', 'shorts', 'live'].includes(route) && id) {
          videoId = id;
        }
      }
    }

    return videoId || null;
  } catch {
    return null;
  }
}

function getYouTubeEmbedUrl(videoId: string, autoplay = false): string {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  });

  if (autoplay) {
    params.set('autoplay', '1');
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

export function ShowreelPlayer({ url, title = 'Showreel', posterUrl }: ShowreelPlayerProps) {
  const mediaUrl = url?.trim() ?? '';
  const youtubeVideoId = mediaUrl ? getYouTubeVideoId(mediaUrl) : null;
  const youtubePreviewUrl = youtubeVideoId ? `https://i.ytimg.com/vi/${youtubeVideoId}/hqdefault.jpg` : null;
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    setIsActivated(false);
  }, [mediaUrl]);

  return (
    <div className="showreel-shell group">
      <div className="showreel-frame">
        {youtubeVideoId ? (
          isActivated ? (
            <iframe
              src={getYouTubeEmbedUrl(youtubeVideoId, true)}
              title={title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="showreel-media"
            />
          ) : (
            <button type="button" className="showreel-launch" onClick={() => setIsActivated(true)} aria-label={`Play ${title}`}>
              {youtubePreviewUrl ? <img src={youtubePreviewUrl} alt="" className="showreel-cover-image" /> : null}
              <span className="showreel-cover-overlay" aria-hidden="true" />
              <span className="showreel-play-center" aria-hidden="true">
                <span className="showreel-play-button">
                  <Play className="h-6 w-6 fill-current" />
                </span>
              </span>
            </button>
          )
        ) : mediaUrl ? (
            <video
              controls
              playsInline
              preload="metadata"
              poster={posterUrl || '/aqib.png'}
              className="showreel-media bg-black object-cover"
            >
              <source src={mediaUrl} />
          </video>
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center px-6 text-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ffd95a]">{title}</p>
              <p className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                Showreel slot ready.
              </p>
              <p className="mt-3 text-sm text-white/65 sm:text-base">
                Add the next reel link and it will appear here.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

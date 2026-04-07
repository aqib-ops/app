import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

interface ShowreelPlayerProps {
  url?: string;
  title?: string;
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

export function ShowreelPlayer({ url, title = 'Showreel' }: ShowreelPlayerProps) {
  const mediaUrl = url?.trim() ?? '';
  const youtubeVideoId = mediaUrl ? getYouTubeVideoId(mediaUrl) : null;
  const youtubePreviewUrl = youtubeVideoId ? `https://i.ytimg.com/vi/${youtubeVideoId}/hqdefault.jpg` : null;
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    setIsActivated(false);
  }, [mediaUrl]);

  return (
    <div className="showreel-shell group">
      <div className="showreel-meta">
        <div>
          <p className="showreel-kicker">{title}</p>
          <p className="showreel-caption">{mediaUrl ? 'Curated in a premium reel surface' : 'Premium reel slot ready'}</p>
        </div>
        <span className="showreel-badge">{mediaUrl ? 'Featured Reel' : 'Ready'}</span>
      </div>

      <div className="showreel-frame">
        <span className="showreel-ambient showreel-ambient-left" aria-hidden="true" />
        <span className="showreel-ambient showreel-ambient-right" aria-hidden="true" />

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
              <span className="showreel-cover-grid" aria-hidden="true" />

              <span className="showreel-launch-top">
                <span className="showreel-launch-pill">Featured Edit</span>
                <span className="showreel-launch-note">Press play</span>
              </span>

              <span className="showreel-launch-body">
                <span className="showreel-play-button" aria-hidden="true">
                  <Play className="h-6 w-6 fill-current" />
                </span>

                <span className="showreel-launch-copy">
                  <span className="showreel-launch-title">{title}</span>
                  <span className="showreel-launch-subtitle">
                    Retention-focused pacing, hooks, subtitles, and motion that feels clean on first glance.
                  </span>
                </span>
              </span>
            </button>
          )
        ) : mediaUrl ? (
          <video
            controls
            playsInline
            preload="metadata"
            poster="/hero-portrait.jpg"
            className="showreel-media bg-black object-cover"
          >
            <source src={mediaUrl} />
          </video>
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center px-6 text-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ffd95a]">{title}</p>
              <p className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                Single showreel slot ready.
              </p>
              <p className="mt-3 text-sm text-white/65 sm:text-base">
                Paste one reel link and it will appear here in the premium player surface.
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-white/42">
                Best result: 45 to 90 seconds with the strongest work first
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

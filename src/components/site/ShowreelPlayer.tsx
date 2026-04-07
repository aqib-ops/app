interface ShowreelPlayerProps {
  url?: string;
  title?: string;
}

function getYouTubeEmbedUrl(url: string): string | null {
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

    return videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`
      : null;
  } catch {
    return null;
  }
}

export function ShowreelPlayer({ url, title = 'Showreel' }: ShowreelPlayerProps) {
  const mediaUrl = url?.trim() ?? '';
  const youtubeEmbedUrl = mediaUrl ? getYouTubeEmbedUrl(mediaUrl) : null;

  return (
    <div className="showreel-shell group">
      <div className="showreel-meta">
        <div>
          <p className="showreel-kicker">{title}</p>
          <p className="showreel-caption">
            {youtubeEmbedUrl
              ? 'Embedded from YouTube'
              : mediaUrl
                ? 'Direct playback'
                : 'YouTube or MP4 ready'}
          </p>
        </div>
        <span className="showreel-badge">{youtubeEmbedUrl ? 'YouTube' : mediaUrl ? 'Video' : 'Ready'}</span>
      </div>

      <div className="showreel-frame">
        <span className="showreel-ambient showreel-ambient-left" aria-hidden="true" />
        <span className="showreel-ambient showreel-ambient-right" aria-hidden="true" />

        {youtubeEmbedUrl ? (
          <iframe
            src={youtubeEmbedUrl}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="showreel-media"
          />
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
                Paste one YouTube or MP4 link and it will appear here with the right player.
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

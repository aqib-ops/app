interface ShowreelPlayerProps {
  url?: string;
  title?: string;
}

export function ShowreelPlayer({ url, title = 'Showreel' }: ShowreelPlayerProps) {
  if (url) {
    return (
      <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#0d0d0d] shadow-[0_18px_40px_rgba(0,0,0,0.14)]">
        <video
          controls
          playsInline
          preload="metadata"
          poster="/hero-portrait.jpg"
          className="aspect-[16/9] w-full bg-black object-cover"
        >
          <source src={url} />
        </video>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-[linear-gradient(145deg,#111111,#201704)] shadow-[0_18px_40px_rgba(0,0,0,0.14)]">
      <div className="flex aspect-[16/9] items-center justify-center px-6 text-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ffd95a]">{title}</p>
          <p className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Single showreel slot ready.
          </p>
          <p className="mt-3 text-sm text-white/65 sm:text-base">
            Send the Cloudinary video URL and it will be placed here.
          </p>
        </div>
      </div>
    </div>
  );
}

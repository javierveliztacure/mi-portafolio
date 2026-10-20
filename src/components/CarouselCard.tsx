import { ExternalLink, Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Tag {
  label: string;
  variant?: "default" | "highlight" | "dark";
}

interface CarouselCardProps {
  imageUrl: string;
  imageAlt: string;
  topLabel: string;
  topLabelVariant?: "default" | "highlight" | "dark";
  bottomLabel: string;
  title: string;
  description: string;
  tags: Tag[];
  linkText: string;
  linkHref: string;
  btnVariant?: "default" | "dark";
  minWidth?: string;
  aspectRatio?: "video" | "portrait";
  videoUrl?: string;
}

// YouTube bloquea las URLs /watch dentro de un iframe; solo permite /embed/ID.
const toEmbedUrl = (url: string) => {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^(www\.|m\.)/, "");
    let id: string | null = null;
    if (host === "youtu.be") id = parsed.pathname.slice(1);
    else if (host === "youtube.com") {
      if (parsed.pathname === "/watch") id = parsed.searchParams.get("v");
      else if (/^\/(shorts|embed)\//.test(parsed.pathname))
        id = parsed.pathname.split("/")[2];
    }
    if (!id) return url;
    const start = parseInt(parsed.searchParams.get("t") ?? "", 10);
    const params = new URLSearchParams({ autoplay: "1", rel: "0" });
    if (start > 0) params.set("start", String(start));
    return `https://www.youtube.com/embed/${id}?${params}`;
  } catch {
    return url;
  }
};

export default function CarouselCard({
  imageUrl,
  imageAlt,
  topLabel,
  topLabelVariant = "dark",
  bottomLabel,
  title,
  description,
  tags,
  linkText,
  linkHref,
  btnVariant = "default",
  minWidth = "min-w-[320px] sm:min-w-[380px]",
  aspectRatio = "video",
  videoUrl,
}: CarouselCardProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!showVideo) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowVideo(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showVideo]);

  const getTopLabelClasses = () => {
    switch (topLabelVariant) {
      case "highlight":
        return "bg-[#ccff00] text-black border border-black/10";
      case "dark":
        return "bg-black text-white";
      default:
        return "bg-black text-white";
    }
  };

  const getAspectRatio = () => {
    return aspectRatio === "video" ? "aspect-video" : "aspect-[4/5]";
  };

  const getButtonClasses = () => {
    if (btnVariant === "dark") {
      return "bg-black text-white hover:bg-[#222]";
    }
    return "bg-[#f4f3f0] hover:bg-black hover:text-white text-black";
  };

  const getMaxWidth = () => {
    return aspectRatio === "portrait" ? "max-w-[350px]" : "max-w-[380px]";
  };

  return (
    <article
      className={`${minWidth} ${getMaxWidth()} snap-start bg-white border border-[#e2e0dc] rounded-lg overflow-hidden flex flex-col justify-between group hover:border-black transition-colors`}
    >
      {/* Image / Video */}
      <div>
        <div
          className={`relative w-full ${getAspectRatio()} bg-[#efeeeb] overflow-hidden border-b border-[#e2e0dc] ${videoUrl ? "cursor-pointer" : ""}`}
          onClick={() => videoUrl && setShowVideo(true)}
        >
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
              <Play
                size={48}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                fill="white"
              />
            </div>
          )}

          <span
            className={`absolute top-3 left-3 font-mono text-[10px] font-bold uppercase tracking-wider ${getTopLabelClasses()} px-2 py-0.5 rounded`}
          >
            {topLabel}
          </span>
          <span className="absolute bottom-3 right-3 font-mono text-[10px] bg-black/80 text-white px-2 py-0.5 rounded">
            {bottomLabel}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex flex-col gap-2">
          <h3 className="font-display font-bold text-lg text-black">{title}</h3>
          <p className="font-body text-xs text-[#444748] leading-relaxed">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-2 font-mono text-[10px] text-[#444748]">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className="px-2 py-0.5 bg-[#f4f3f0] border border-[#e2e0dc] rounded"
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="p-4 sm:p-5 pt-0">
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-2.5 px-3 ${getButtonClasses()} font-mono text-xs font-semibold rounded border border-[#e2e0dc] flex items-center justify-between transition-colors`}
        >
          <span>{linkText}</span>
          <ExternalLink size={16} />
        </a>
      </div>

      {/* Video Modal */}
      {showVideo &&
        videoUrl &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={() => setShowVideo(false)}
          >
            <div
              className="w-full max-w-4xl flex flex-col items-end gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="p-2 bg-white/10 hover:bg-white/25 rounded-full transition-colors"
                aria-label="Cerrar video"
              >
                <X size={24} className="text-white" />
              </button>
              <iframe
                src={toEmbedUrl(videoUrl)}
                className="w-full aspect-video bg-black rounded-lg"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title={title}
              />
            </div>
          </div>,
          document.body,
        )}
    </article>
  );
}

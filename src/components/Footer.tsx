export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e2e0dc] bg-[#faf9f6] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ccff00] border border-black/20"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-black">
              JAVIER VÉLIZ // SUITE NLE ACTIVA
            </span>
          </div>
          <p className="font-body text-xs text-[#747878]">
            © 2024. Dirección audiovisual, edición narrativa y color grading.
          </p>
        </div>

        <div className="flex items-center gap-5 font-mono text-xs">
          <a
            href="#"
            className="text-[#747878] hover:text-black uppercase tracking-wider transition-colors"
          >
            YouTube
          </a>
          <a
            href="#"
            className="text-[#747878] hover:text-black uppercase tracking-wider transition-colors"
          >
            Vimeo
          </a>
          <a
            href="#"
            className="text-[#747878] hover:text-black uppercase tracking-wider transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-[#747878] hover:text-black uppercase tracking-wider transition-colors"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-[#747878] hover:text-black uppercase tracking-wider transition-colors"
          >
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
}

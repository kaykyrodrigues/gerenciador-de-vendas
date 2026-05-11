export default function Card({ src, alt, text }) {
  return (
    <section className="flex flex-col justify-center">
      <div
        className="flex items-center gap-3 p-4
          bg-slate-50
          w-60
          h-14
          rounded-lg
          shadow-md
          active:scale-95 transition"
      >
        <img
          src={src}
          alt={alt}
          className="w-7 h-7 p-1 bg-emerald-600 rounded-lg"
        />
        <p className="text-neutral-600 text-base line-clamp-2">{text}</p>
      </div>
    </section>
  );
}
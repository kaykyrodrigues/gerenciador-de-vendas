

export default function Card({ src, alt, text }) {
  return (
    <section className="flex flex-col justify-center p-1">
      <div
        className="flex flex-row justify-center items-center gap-1 p-2
          bg-slate-50
          w-28
          h-14
          rounded-lg
          shadow-md"
      >
        <img
          src={src}
          alt={alt}
          className="w-7 h-7 p-1 bg-emerald-600 rounded-lg"
        />
        <p className="text-neutral-600 text-xs  line-clamp-2">{text}</p>
      </div>
    </section>
  );
}

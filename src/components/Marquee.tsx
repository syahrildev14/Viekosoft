const MarqueeViekosoft = () => {
  return (
    <div className="relative w-full overflow-hidden py-3">
      {/* Optional: fade kiri/kanan */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "marquee 18s linear infinite",
        }}
      >
        {/* Duplikasi konten untuk loop mulus */}
        <span className="mx-4 text-2xl font-semibold tracking-wide">
          Viekosoft • Viekosoft • Viekosoft • Viekosoft •
        </span>
        <span className="mx-4 text-2xl font-semibold tracking-wide">
          Viekosoft • Viekosoft • Viekosoft • Viekosoft •
        </span>
      </div>
    </div>
  );
};

export default MarqueeViekosoft;

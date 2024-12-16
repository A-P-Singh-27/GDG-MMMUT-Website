export function EventHero() {
    return (
      <div className="relative h-[500px] overflow-hidden rounded-2xl m-5">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000"
          alt="Google I/O Extended"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent " />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500 text-sm font-medium mb-4">
            MMMUT Featured Event
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Google Sans, sans-serif' }}>
            Immerse 2024
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Join us for an immersive experience of Google's biggest developer conference, featuring the latest in AI, Cloud, and Mobile development.
          </p>
        </div>
      </div>
    );
  }
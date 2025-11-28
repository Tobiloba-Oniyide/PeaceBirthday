function SpotifySection() {
  // Playlist URL
  const playlistUrl = "https://open.spotify.com/playlist/17OZhCdEtSu93D1TQVvm18?si=8f9c31bdb98541ca";

  // Convert normal Spotify link → embed link
  const embedUrl = playlistUrl.replace("/playlist/", "/embed/playlist/");

  return (
    <section className="relative py-20 px-4" data-name="spotify-section" data-file="components/SpotifySection.js">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gradient mb-6">Birthday Playlist 🎵</h2>
        <p className="text-xl text-gray-700 mb-8">
          Music to celebrate your special day!
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-[var(--light-pink)]">
          <div className="mb-6">
            <div className="icon-music text-5xl text-[var(--magenta)] mx-auto mb-4 animate-pulse"></div>
          </div>

          <div className="relative overflow-hidden rounded-2xl" style={{ height: "380px" }}>
            <iframe
              src={embedUrl}
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-2xl"
            ></iframe>
          </div>

          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <a
              href="message.html"
              className="px-8 py-4 gradient-pink text-white rounded-full font-semibold text-lg hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <div className="icon-heart text-xl"></div>
              Special Message
            </a>

            <a
              href="wishes.html"
              className="px-8 py-4 bg-white text-[var(--magenta)] border-2 border-[var(--magenta)] rounded-full font-semibold text-lg hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <div className="icon-message-circle text-xl"></div>
              View All Wishes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SlideshowSection() {
  try {
    const [slideUrl, setSlideUrl] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      loadSlideshow();
    }, []);

    const loadSlideshow = async () => {
      try {
        const result = await trickleGetObject('slideshow_config', 'main');
        if (result && result.objectData.url) {
          setSlideUrl(result.objectData.url);
        }
      } catch (error) {
        console.error('Error loading slideshow:', error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <section className="mb-16" data-name="slideshow-section" data-file="components/SlideshowSection.js">
        <h3 className="text-4xl font-bold text-gradient text-center mb-8">Special Slideshow 🎬</h3>
        
        <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-[var(--light-pink)]">
          {loading ? (
            <div className="text-center py-12">
              <div className="icon-loader text-4xl text-[var(--magenta)] animate-spin mx-auto"></div>
            </div>
          ) : !slideUrl ? (
            <div className="text-center py-12">
              <div className="icon-presentation text-6xl text-[var(--magenta)] mx-auto mb-4 opacity-50"></div>
              <p className="text-xl text-gray-600">Slideshow will be added here soon!</p>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-2xl" style={{ height: '500px' }}>
              <iframe
                src={slideUrl}
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error('SlideshowSection component error:', error);
    return null;
  }
}
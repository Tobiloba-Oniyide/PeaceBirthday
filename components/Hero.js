function Hero() {
  try {
    const [showMessage, setShowMessage] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => setShowMessage(true), 500);
    }, []);

    return (
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20" data-name="hero" data-file="components/Hero.js">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <div className="icon-crown text-6xl text-[var(--magenta)] mx-auto mb-4 animate-pulse-glow"></div>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold text-gradient mb-6">
              Happy 18th
            </h1>
            
            <h2 className="text-5xl md:text-7xl font-bold text-[var(--dark-pink)] mb-8">
              Birthday, Peace! 🎉
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Happy Birthday My Love 
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <div className="w-16 h-16 rounded-full gradient-pink flex items-center justify-center animate-bounce">
                <div className="icon-music text-2xl text-white"></div>
              </div>
              <div className="w-16 h-16 rounded-full gradient-pink flex items-center justify-center animate-bounce" style={{animationDelay: '0.2s'}}>
                <div className="icon-cake text-2xl text-white"></div>
              </div>
              <div className="w-16 h-16 rounded-full gradient-pink flex items-center justify-center animate-bounce" style={{animationDelay: '0.4s'}}>
                <div className="icon-party-popper text-2xl text-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
function Footer() {
  try {
    return (
      <footer className="relative py-16 px-4 gradient-pink" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <div className="icon-gift text-6xl mx-auto mb-4 animate-bounce"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Here's to You, Peace! 🥳
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            May your 18th year be filled with endless joy, unforgettable adventures, 
            and dreams that come true. You deserve all the happiness in the world!
          </p>
          
          <div className="flex gap-4 justify-center mb-8">
            <div className="icon-heart text-3xl animate-pulse"></div>
            <div className="icon-cake-slice text-3xl animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="icon-sparkles text-3xl animate-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>
          
          <p className="text-lg mb-2 font-semibold">
            From your bestfriend, Tobiloba 💕
          </p>
          <p className="text-sm opacity-75">
            Made with ❤️ for Peace's Special Day • © 2025
          </p>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
function BirthdayCake() {
  try {
    const [clicked, setClicked] = React.useState(false);

    const handleCakeClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 2000);
    };

    return (
      <section className="relative py-20 px-4" data-name="birthday-cake" data-file="components/BirthdayCake.js">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gradient mb-12">Your Special Cake</h2>
          
          <div 
            className="relative inline-block cursor-pointer transition-transform hover:scale-105"
            onClick={handleCakeClick}
          >
            <div className={`transition-transform duration-500 ${clicked ? 'scale-110' : 'scale-100'}`}>
              {/* Cake base - 3 layers */}
              <div className="relative">
                {/* Bottom layer */}
                <div className="w-64 h-24 mx-auto gradient-pink rounded-t-3xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-10"></div>
                </div>
                
                {/* Middle layer */}
                <div className="w-56 h-20 mx-auto bg-[var(--dark-pink)] relative -mt-2 overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-10"></div>
                </div>
                
                {/* Top layer */}
                <div className="w-48 h-16 mx-auto gradient-pink rounded-t-2xl relative -mt-2 overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-10"></div>
                </div>
              </div>
            </div>
            
            {clicked && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl animate-sparkle">✨🎊✨</div>
              </div>
            )}
          </div>
          
          <p className="mt-8 text-lg text-gray-600">Click the cake for a surprise! 🎂</p>
        </div>
      </section>
    );
  } catch (error) {
    console.error('BirthdayCake component error:', error);
    return null;
  }
}
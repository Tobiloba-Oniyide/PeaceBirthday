function Candles() {
  try {
    const [litCandles, setLitCandles] = React.useState(
      Array(18).fill(true)
    );
    const [allBlown, setAllBlown] = React.useState(false);

    const blowCandle = (index) => {
      const newLitCandles = [...litCandles];
      newLitCandles[index] = false;
      setLitCandles(newLitCandles);
      
      if (newLitCandles.every(candle => !candle)) {
        setAllBlown(true);
      }
    };

    const relightAll = () => {
      setLitCandles(Array(18).fill(true));
      setAllBlown(false);
    };

    return (
      <section className="relative py-20 px-4 bg-[var(--light-pink)]" data-name="candles" data-file="components/Candles.js">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gradient mb-4">Blow Out Your Candles!</h2>
          <p className="text-xl text-gray-700 mb-12">Click each candle to blow it out and make your wish 🕯️</p>
          
          <div className="grid grid-cols-6 md:grid-cols-9 gap-6 mb-12">
            {litCandles.map((isLit, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer transform hover:scale-110 transition-transform"
                onClick={() => isLit && blowCandle(index)}
              >
                {/* Flame */}
                {isLit && (
                  <div className="w-3 h-6 bg-gradient-to-t from-[var(--magenta)] to-yellow-300 rounded-full mb-1 animate-candle-flicker"></div>
                )}
                {!isLit && (
                  <div className="w-3 h-6 mb-1 opacity-0"></div>
                )}
                
                {/* Candle */}
                <div className={`w-4 h-16 rounded-t-sm ${isLit ? 'gradient-pink' : 'bg-gray-400'} transition-colors`}></div>
              </div>
            ))}
          </div>
          
          {allBlown && (
            <div className="text-center animate-sparkle">
              <h3 className="text-4xl font-bold text-gradient mb-4">🎉 Wish Granted! 🎉</h3>
              <p className="text-xl text-gray-700 mb-6">May all your dreams come true, Peace!</p>
              <button
                onClick={relightAll}
                className="px-8 py-4 gradient-pink text-white rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
              >
                Light Them Again
              </button>
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error('Candles component error:', error);
    return null;
  }
}
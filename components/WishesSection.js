function WishesSection() {
  try {
    const wishes = [
      { icon: 'heart', text: 'May your heart always be filled with joy and love', color: 'var(--primary-pink)' },
      { icon: 'sparkles', text: 'May every day sparkle with new adventures', color: 'var(--magenta)' },
      { icon: 'star', text: 'May you shine brighter than ever before', color: 'var(--dark-pink)' },
      { icon: 'smile', text: 'May laughter follow you wherever you go', color: 'var(--primary-pink)' },
      { icon: 'award', text: 'May you achieve all your dreams and goals', color: 'var(--magenta)' },
      { icon: 'sun', text: 'May each sunrise bring you hope and happiness', color: 'var(--dark-pink)' }
    ];

    return (
      <section className="relative py-20 px-4" data-name="wishes-section" data-file="components/WishesSection.js">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gradient text-center mb-16">Wishes for You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishes.map((wish, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-[var(--light-pink)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full gradient-pink flex items-center justify-center mb-4 mx-auto">
                  <div className={`icon-${wish.icon} text-2xl text-white`}></div>
                </div>
                <p className="text-lg text-gray-700 text-center">{wish.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('WishesSection component error:', error);
    return null;
  }
}
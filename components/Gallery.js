function Gallery() {
  try {
    const moments = [
      { title: 'New Beginnings', icon: 'rocket', description: 'Your journey into adulthood starts today!' },
      { title: 'Dream Big', icon: 'cloud', description: 'The world is yours to explore and conquer' },
      { title: 'Stay Amazing', icon: 'zap', description: 'Keep being the wonderful person you are' },
      { title: 'Make Memories', icon: 'camera', description: 'Every moment is a chance for joy' }
    ];

    return (
      <section className="relative py-20 px-4 bg-[var(--light-pink)]" data-name="gallery" data-file="components/Gallery.js">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gradient text-center mb-16">
            Celebrate This Milestone 🎊
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {moments.map((moment, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border-4 border-[var(--magenta)]"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl gradient-pink flex items-center justify-center flex-shrink-0">
                    <div className={`icon-${moment.icon} text-3xl text-white`}></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--dark-pink)] mb-3">{moment.title}</h3>
                    <p className="text-lg text-gray-700">{moment.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Gallery component error:', error);
    return null;
  }
}
function IntroSection() {
  try {
    return (
      <section className="text-center mb-16" data-name="intro-section" data-file="components/IntroSection.js">
        <div className="max-w-3xl mx-auto">
          <div className="icon-heart text-6xl text-[var(--magenta)] mx-auto mb-6 animate-pulse"></div>
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Dear Peace,
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
          <br></br>
          </p>
        </div>
      </section>
    );
  } catch (error) {
    console.error('IntroSection component error:', error);
    return null;
  }
}
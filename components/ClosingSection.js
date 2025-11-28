function ClosingSection() {
  try {
    return (
      <section className="text-center" data-name="closing-section" data-file="components/ClosingSection.js">
        <div className="bg-gradient-pink rounded-3xl p-12 text-white shadow-2xl">
          <div className="icon-sparkles text-5xl mx-auto mb-6 animate-pulse"></div>
          <h3 className="text-3xl font-bold mb-4">Happy 18th Birthday, Peace!</h3>
          <p className="text-xl mb-6">
            I'm so grateful to have you as my best friend. Here's to many more adventures together!
          </p>
          <p className="text-2xl font-bold">
            With all my love,<br/>
            Tobiloba 💕
          </p>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ClosingSection component error:', error);
    return null;
  }
}
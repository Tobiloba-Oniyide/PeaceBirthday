function FloatingElements() {
  try {
    const elements = [
      { icon: 'heart', delay: '0s', duration: '4s', left: '10%', top: '20%' },
      { icon: 'sparkles', delay: '1s', duration: '5s', left: '80%', top: '30%' },
      { icon: 'star', delay: '0.5s', duration: '4.5s', left: '15%', top: '60%' },
      { icon: 'gift', delay: '1.5s', duration: '5.5s', left: '85%', top: '70%' },
      { icon: 'cake-slice', delay: '0.8s', duration: '4.8s', left: '5%', top: '80%' },
      { icon: 'party-popper', delay: '2s', duration: '6s', left: '90%', top: '50%' }
    ];

    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" data-name="floating-elements" data-file="components/FloatingElements.js">
        {elements.map((el, index) => (
          <div
            key={index}
            className="absolute animate-float"
            style={{
              left: el.left,
              top: el.top,
              animationDelay: el.delay,
              animationDuration: el.duration
            }}
          >
            <div className={`icon-${el.icon} text-4xl text-[var(--primary-pink)] opacity-20`}></div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('FloatingElements component error:', error);
    return null;
  }
}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-cream)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="px-6 py-3 gradient-pink text-white rounded-full">
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function MessageApp() {
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);

  return (
    <div className="min-h-screen" data-name="message-app">
      <header className="gradient-pink py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="index.html" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
            <div className="icon-arrow-left text-xl"></div>
            <span className="font-semibold">Back to Party</span>
          </a>
          <h1 className="text-2xl md:text-3xl font-bold text-white">A Special Message 💝</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <IntroSection />
        <PhotoGallery selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} />
        <SlideshowSection />
        <LongMessageSection />
        <ClosingSection />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <MessageApp />
  </ErrorBoundary>
);
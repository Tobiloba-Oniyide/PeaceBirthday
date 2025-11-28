function WishesApp() {
  const [wishes, setWishes] = React.useState([]);
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [showForm, setShowForm] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  React.useEffect(() => {
    loadWishes();
  }, []);

  const loadWishes = async () => {
    setLoading(true);
    try {
      const result = await trickleListObjects('birthday_wish', 100, true);
      console.log('Loaded wishes:', result.items);
      setWishes(result.items || []);
    } catch (err) {
      console.error('Error loading wishes:', err);
      setErrorMessage('Unable to load wishes. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  // Helper: a single attempt to save a wish
  const saveWishOnce = async (payload) => {
    // sanity check: ensure function exists
    if (typeof trickleCreateObject !== 'function') {
      throw new Error('trickleCreateObject is not defined (check that Trickle SDK is loaded)');
    }
    return await trickleCreateObject('birthday_wish', payload);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim() || !message.trim()) {
      setErrorMessage('Please provide both name and message.');
      return;
    }

    // prevent double submit
    if (saving) return;

    const payload = { name: name.trim(), message: message.trim() };
    setSaving(true);

    try {
      console.log('Attempting to save wish...', payload);

      // Try once, if network error or timeout, retry once
      try {
        const res = await saveWishOnce(payload);
        console.log('trickleCreateObject result:', res);
      } catch (err) {
        console.warn('First save attempt failed, retrying once...', err);

        // Determine if error looks transient: network issues, 5xx, or no response
        const isTransient =
          err?.message?.toLowerCase().includes('network') ||
          err?.status >= 500 ||
          !err?.status;

        if (isTransient) {
          // small delay before retry
          await new Promise((r) => setTimeout(r, 500));
          const res2 = await saveWishOnce(payload);
          console.log('Retry result:', res2);
        } else {
          throw err;
        }
      }

      // Success: reset UI + reload
      setName('');
      setMessage('');
      setShowForm(false);
      await loadWishes();
      setErrorMessage(null);
      console.log('Wish saved successfully.');
    } catch (err) {
      // Detailed logging for you to copy if you need to paste here
      console.error('Failed to save wish — detailed error:', {
        message: err?.message || err,
        stack: err?.stack,
        status: err?.status,
        body: err?.body || err?.response || null,
        raw: err,
      });

      // Friendly user message
      setErrorMessage('Failed to save wish. Check console for details.');
    } finally {
      setSaving(false);
    }
  };

  // Diagnostic: quick test to confirm Trickle method works
  const runDiagnostic = async () => {
    console.log('Running Trickle diagnostic...');
    try {
      if (typeof trickleCreateObject !== 'function') {
        console.error('trickleCreateObject not available — SDK not loaded.');
        alert('trickleCreateObject not available. Ensure the Trickle SDK is loaded before this script.');
        return;
      }

      // create a tiny debug object that we delete immediately (if delete available)
      const debugPayload = { _debug: true, timestamp: Date.now() };
      const r = await trickleCreateObject('birthday_wish', debugPayload);
      console.log('Diagnostic create successful:', r);
      alert('Trickle diagnostic succeeded (check console).');
    } catch (err) {
      console.error('Diagnostic failed:', err);
      alert('Diagnostic failed — open console and paste the error here for me to inspect.');
    }
  };

  return (
    <div className="min-h-screen" data-name="wishes-app">
      <header className="gradient-pink py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="index.html" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
            <div className="icon-arrow-left text-xl"></div>
            <span className="font-semibold">Back to Party</span>
          </a>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Birthday Wishes 💝</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-8 py-4 gradient-pink text-white rounded-full font-semibold text-lg hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
            disabled={saving}
          >
            <div className="icon-plus text-xl"></div>
            {showForm ? 'Close' : 'Add Your Wish'}
          </button>

          {/* Diagnostic button (visible for debugging) */}
          <button
            onClick={runDiagnostic}
            className="ml-4 px-4 py-3 bg-white border rounded-full text-sm"
            title="Test Trickle connection"
          >
            Test Trickle
          </button>
        </div>

        {showForm && (
          <div className="max-w-2xl mx-auto mb-6 bg-white rounded-3xl shadow-xl p-8 border-4 border-[var(--light-pink)]">
            <h3 className="text-2xl font-bold text-gradient mb-6">Share Your Birthday Wish</h3>

            {errorMessage && (
              <div className="mb-4 text-sm text-red-700 bg-red-100 p-3 rounded">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[var(--light-pink)] rounded-xl focus:outline-none focus:border-[var(--magenta)] transition-colors"
                  placeholder="Enter your name"
                  required
                  disabled={saving}
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-[var(--light-pink)] rounded-xl focus:outline-none focus:border-[var(--magenta)] transition-colors resize-none"
                  rows="4"
                  placeholder="Write your birthday wish..."
                  required
                  disabled={saving}
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className={`flex-1 px-6 py-3 rounded-full font-semibold ${saving ? 'bg-gray-300 text-gray-600' : 'gradient-pink text-white'}`}
                  disabled={saving}
                >
                  {saving ? 'Sending...' : 'Send Wish'}
                </button>

                <button
                  type="button"
                  onClick={() => { setShowForm(false); setErrorMessage(null); }}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                  disabled={saving}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Wishes display below (unchanged) */}
        {loading ? (
          <div className="text-center py-12">
            <div className="icon-loader text-4xl text-[var(--magenta)] animate-spin mx-auto"></div>
          </div>
        ) : wishes.length === 0 ? (
          <div className="text-center py-12">
            <div className="icon-message-circle text-6xl text-[var(--magenta)] mx-auto mb-4 opacity-50"></div>
            <p className="text-xl text-gray-600">No wishes yet. Be the first to add one!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishes.map((wish) => (
              <div
                key={wish.objectId}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-[var(--light-pink)]"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full gradient-pink flex items-center justify-center flex-shrink-0">
                    <div className="icon-user text-xl text-white"></div>
                  </div>
                  <div>s
                    <h4 className="font-bold text-[var(--dark-pink)] text-lg">{wish.objectData.name}</h4>
                    <p className="text-xs text-gray-500">{new Date(wish.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{wish.objectData.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
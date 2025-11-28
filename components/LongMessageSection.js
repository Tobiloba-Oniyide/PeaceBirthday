function LongMessageSection() {
  try {
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      loadMessage();
    }, []);

    const loadMessage = async () => {
      try {
        const result = await trickleGetObject('birthday_message', 'main');
        if (result && result.objectData.content) {
          setMessage(result.objectData.content);
        }
      } catch (error) {
        console.error('Error loading message:', error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <section className="mb-16" data-name="long-message-section" data-file="components/LongMessageSection.js">
        <h3 className="text-4xl font-bold text-gradient text-center mb-8">My Message to You 💌</h3>
        
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-4 border-[var(--light-pink)]">
          {loading ? (
            <div className="text-center py-12">
              <div className="icon-loader text-4xl text-[var(--magenta)] animate-spin mx-auto"></div>
            </div>
          ) : !message ? (
            <div className="text-center py-12">
              <div className="icon-mail text-6xl text-[var(--magenta)] mx-auto mb-4 opacity-50"></div>
              <p className="text-xl text-gray-600">Well, Today is the 9th of January 2026, and guess what?????????????.<br></br> 
A quick answer, my girl just turned 18!! She’s finally legal. Who is she to me? Peace isn’t just a friend to me. She’s one of those people who walks into your life and makes it brighter jujst by being in it.One of those people who see you at your worst and says “I’m here for you!!, Everything is going to be fine”. One of the people i call when i’m going through something i wouldn’t want to tell anybody. So yeah peace isn’t just anybody to me. She’s my best friend. Peace is that one friend you can be around all day and never get bored of, she’s funny, extremely beautiful and smart. Peace is one of the persons i wanna insult people with, i want to fight people for, I want to laugh with , I want to read with and i want to be with. It’s crazy that i’ve only known her for a year now and she knows me so well, she always has a good guess about what im thinking about, always knows my crushes right before i figure out i have one , is always ready to take a walk with me when i’m feeling suffocated. ....I thank God always for bringing you into my life, for making us friends and for maintaining our friendship. My University Journey is wayyyyyyyyyyyyyy better with you in It.
I LOVE YOU GIRLLLLLL <br></br> From your bestfriend, Tobiloba 💕</p>
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-800 leading-relaxed whitespace-pre-wrap text-lg">
                {message}
              </p>
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
    console.error('LongMessageSection component error:', error);
    return null;
  }
}
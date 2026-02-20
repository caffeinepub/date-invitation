import { useState } from 'react';
import { Heart } from 'lucide-react';
import InvitationPage from './pages/InvitationPage';
import PersuasionPage from './pages/PersuasionPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  const [currentPage, setCurrentPage] = useState<1 | 2 | 3>(1);
  const [hoverAttempts, setHoverAttempts] = useState(0);

  const handleHoverAttempt = () => {
    const newAttempts = hoverAttempts + 1;
    setHoverAttempts(newAttempts);
    
    // After 5 hover attempts, move to persuasion page
    if (newAttempts >= 5) {
      setCurrentPage(2);
    }
  };

  const handleYesClick = () => {
    setCurrentPage(3);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/generated/romantic-bg.dim_1920x1080.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/40 via-amber-900/30 to-pink-900/40 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          {currentPage === 1 && (
            <InvitationPage 
              onYesClick={handleYesClick}
              onHoverAttempt={handleHoverAttempt}
            />
          )}
          {currentPage === 2 && (
            <PersuasionPage onYesClick={handleYesClick} />
          )}
          {currentPage === 3 && (
            <SuccessPage />
          )}
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-6 text-center">
          <p className="text-white/90 text-sm backdrop-blur-sm bg-black/20 inline-block px-6 py-2 rounded-full">
            Built with <Heart className="w-4 h-4 inline-block text-rose-300 fill-rose-300 mx-1" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-rose-200 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

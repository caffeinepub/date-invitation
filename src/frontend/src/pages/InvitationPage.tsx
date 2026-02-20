import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MovingNoButton from '@/components/MovingNoButton';

interface InvitationPageProps {
  onYesClick: () => void;
  onHoverAttempt: () => void;
}

export default function InvitationPage({ onYesClick, onHoverAttempt }: InvitationPageProps) {
  return (
    <div className="max-w-3xl w-full page-transition">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Decorative Hearts */}
        <div className="flex justify-center gap-4 mb-8">
          <Heart className="w-8 h-8 text-rose-300 fill-rose-300 animate-pulse" style={{ animationDelay: '0ms' }} />
          <Heart className="w-10 h-10 text-rose-200 fill-rose-200 animate-pulse" style={{ animationDelay: '200ms' }} />
          <Heart className="w-8 h-8 text-rose-300 fill-rose-300 animate-pulse" style={{ animationDelay: '400ms' }} />
        </div>

        {/* Main Message */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-100">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-rose-900 mb-6 leading-tight">
            Hey Chaitanya,
          </h1>
          <p className="text-2xl md:text-3xl font-serif text-amber-900 mb-8 leading-relaxed">
            This is me officially asking you...
          </p>
          
          <div className="my-12 py-8 border-y border-rose-200">
            <p className="text-3xl md:text-4xl font-serif font-semibold text-rose-800 mb-4">
              Would you like to go on a date with me?
            </p>
            <p className="text-lg md:text-xl text-amber-800 font-light italic">
              I promise it'll be worth your time ✨
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="relative min-h-[120px] flex items-center justify-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={onYesClick}
                size="lg"
                className="text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 z-10"
              >
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Yes!
              </Button>
              
              <MovingNoButton onHoverAttempt={onHoverAttempt} />
            </div>
          </div>
          
          <p className="text-sm text-amber-700 mt-6 italic">
            (Try clicking "No" if you dare... 😏)
          </p>
        </div>
      </div>
    </div>
  );
}

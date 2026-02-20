import { Heart, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PersuasionPageProps {
  onYesClick: () => void;
}

export default function PersuasionPage({ onYesClick }: PersuasionPageProps) {
  return (
    <div className="max-w-3xl w-full page-transition">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Decorative Elements */}
        <div className="flex justify-center gap-6 mb-8">
          <Star className="w-10 h-10 text-amber-300 fill-amber-300 animate-spin-slow" />
          <Sparkles className="w-12 h-12 text-rose-300 animate-pulse" />
          <Star className="w-10 h-10 text-amber-300 fill-amber-300 animate-spin-slow" style={{ animationDelay: '1s' }} />
        </div>

        {/* Main Message */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-100">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-rose-900 mb-6 leading-tight">
            Come on now... 😊
          </h1>
          
          <div className="space-y-6 my-8">
            <p className="text-2xl md:text-3xl font-serif text-amber-900 leading-relaxed">
              I see you're trying to click "No"...
            </p>
            <p className="text-xl md:text-2xl text-rose-800 font-light">
              But deep down, you know you want to say yes! 💫
            </p>
            
            <div className="my-8 py-6 px-4 bg-rose-50 rounded-2xl border border-rose-200">
              <p className="text-lg md:text-xl text-amber-800 mb-4">
                Think about it:
              </p>
              <ul className="text-left max-w-md mx-auto space-y-3 text-amber-900">
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500 mt-1 flex-shrink-0" />
                  <span>Great conversation guaranteed</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500 mt-1 flex-shrink-0" />
                  <span>Delicious food (your choice!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500 mt-1 flex-shrink-0" />
                  <span>Unforgettable memories</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500 mt-1 flex-shrink-0" />
                  <span>Zero pressure, just fun!</span>
                </li>
              </ul>
            </div>

            <p className="text-2xl font-serif text-rose-800 font-semibold">
              So... what do you say? 🌹
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-8">
            <Button
              onClick={onYesClick}
              size="lg"
              className="text-2xl px-16 py-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
            >
              <Heart className="w-6 h-6 mr-3 fill-current" />
              Okay, YES! 💕
            </Button>
          </div>
          
          <p className="text-sm text-amber-700 mt-6 italic">
            (This is your chance to make the right choice! 😉)
          </p>
        </div>
      </div>
    </div>
  );
}

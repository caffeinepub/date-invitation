import { Heart, Sparkles, PartyPopper } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="max-w-3xl w-full page-transition">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Decorative Elements */}
        <div className="flex justify-center gap-6 mb-8">
          <PartyPopper className="w-12 h-12 text-amber-400 animate-bounce" style={{ animationDelay: '0ms' }} />
          <Heart className="w-16 h-16 text-rose-500 fill-rose-500 animate-bounce" style={{ animationDelay: '200ms' }} />
          <PartyPopper className="w-12 h-12 text-amber-400 animate-bounce" style={{ animationDelay: '400ms' }} />
        </div>

        {/* Main Message */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-100">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Heart className="w-24 h-24 text-rose-500 fill-rose-500 animate-pulse" />
              <Sparkles className="w-8 h-8 text-amber-400 absolute -top-2 -right-2 animate-spin-slow" />
              <Sparkles className="w-6 h-6 text-pink-400 absolute -bottom-1 -left-1 animate-spin-slow" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-rose-900 mb-6 leading-tight">
            Yay! 🎉
          </h1>
          
          <div className="space-y-6 my-8">
            <p className="text-3xl md:text-4xl font-serif text-amber-900 leading-relaxed font-semibold">
              I'm so excited!
            </p>
            
            <div className="my-8 py-8 px-6 bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl border-2 border-rose-200">
              <p className="text-xl md:text-2xl text-rose-800 mb-4">
                This is going to be amazing! 💫
              </p>
              <p className="text-lg md:text-xl text-amber-800 leading-relaxed">
                I'll reach out to you soon with all the details.
                Get ready for an unforgettable time together!
              </p>
            </div>

            <div className="flex justify-center gap-3 flex-wrap">
              <span className="text-4xl animate-bounce" style={{ animationDelay: '0ms' }}>🌹</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '100ms' }}>✨</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '200ms' }}>💕</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '300ms' }}>🎊</span>
              <span className="text-4xl animate-bounce" style={{ animationDelay: '400ms' }}>💖</span>
            </div>

            <p className="text-2xl font-serif text-rose-800 italic mt-8">
              Can't wait to spend time with you! 💝
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

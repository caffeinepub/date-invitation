import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface MovingNoButtonProps {
  onHoverAttempt: () => void;
}

export default function MovingNoButton({ onHoverAttempt }: MovingNoButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isAbsolute, setIsAbsolute] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const moveButton = () => {
    if (!buttonRef.current) return;

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Get button dimensions
    const buttonWidth = buttonRef.current.offsetWidth;
    const buttonHeight = buttonRef.current.offsetHeight;
    
    // Calculate safe boundaries (with padding)
    const padding = 20;
    const maxX = viewportWidth - buttonWidth - padding;
    const maxY = viewportHeight - buttonHeight - padding;
    
    // Generate random position within safe boundaries
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    setPosition({ x: newX, y: newY });
    setIsAbsolute(true);
    onHoverAttempt();
  };

  // Reset position on window resize
  useEffect(() => {
    const handleResize = () => {
      if (isAbsolute) {
        moveButton();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isAbsolute]);

  return (
    <Button
      ref={buttonRef}
      onMouseEnter={moveButton}
      onTouchStart={moveButton}
      variant="outline"
      size="lg"
      className={`text-xl px-12 py-6 rounded-full border-2 border-rose-300 text-rose-700 hover:bg-rose-50 shadow-lg transition-all duration-200 ${
        isAbsolute ? 'fixed' : 'relative'
      }`}
      style={
        isAbsolute
          ? {
              left: `${position.x}px`,
              top: `${position.y}px`,
              transition: 'left 0.3s ease-out, top 0.3s ease-out',
            }
          : {}
      }
    >
      No
    </Button>
  );
}

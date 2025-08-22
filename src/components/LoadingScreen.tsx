import { useEffect, useState } from 'react';
import maxlinLogo from '@/assets/maxlin-logo.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Allow fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none">
        <div className="text-center">
          <img src={maxlinLogo} alt="Maxlin Enterprise" className="h-24 w-auto mx-auto mb-6 loading-bounce" />
          <div className="w-32 h-1 bg-muted rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full loading-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        <img src={maxlinLogo} alt="Maxlin Enterprise" className="h-24 w-auto mx-auto mb-6 loading-bounce" />
        <div className="w-32 h-1 bg-muted rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full loading-pulse"></div>
        </div>
        <p className="mt-4 text-muted-foreground text-sm">Loading Excellence...</p>
      </div>
    </div>
  );
};
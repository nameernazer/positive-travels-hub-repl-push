
import { useState, useEffect } from 'react';

export const useImagePreloader = (images: string[]) => {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload the first few images first
    const imagesToPreloadFirst = images.slice(0, 3);
    
    // Create a promise for each initial image
    const initialLoads = imagesToPreloadFirst.map(src => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = reject;
        img.src = src;
      });
    });
    
    // When the first few images are loaded, show the hero section
    Promise.all(initialLoads)
      .then(loadedSrcs => {
        setLoadedImages(loadedSrcs);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        
        // Continue loading the rest in the background
        const remainingImages = images.slice(3);
        remainingImages.forEach(src => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => [...prev, src]);
          };
          img.src = src;
        });
      })
      .catch(err => {
        console.error("Error preloading images:", err);
        setIsLoading(false); // Show hero section anyway if there's an error
      });
  }, [images]);

  return { loadedImages, isLoading };
};

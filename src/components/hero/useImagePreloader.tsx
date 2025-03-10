
import { useState, useEffect } from 'react';

export const useImagePreloader = (images: string[]) => {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Start with a shorter loading time
    const initialLoadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    // Preload the first few images first
    const imagesToPreloadFirst = images.slice(0, 2);
    
    // Create a promise for each initial image
    const initialLoads = imagesToPreloadFirst.map(src => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => {
          console.error(`Failed to load image: ${src}`);
          reject(`Failed to load image: ${src}`);
        };
        img.src = src;
      });
    });
    
    // When the first images are loaded, show the hero section
    Promise.all(initialLoads)
      .then(loadedSrcs => {
        setLoadedImages(loadedSrcs);
        clearTimeout(initialLoadingTimeout);
        setIsLoading(false);
        
        // Continue loading the rest in the background
        const remainingImages = images.slice(2);
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
        clearTimeout(initialLoadingTimeout);
        setIsLoading(false); // Show hero section anyway if there's an error
      });
      
    return () => clearTimeout(initialLoadingTimeout);
  }, [images]);

  return { loadedImages, isLoading };
};

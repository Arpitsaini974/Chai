import React, { useState } from 'react';
import { Coffee } from 'lucide-react';

/**
 * ImageWithFallback provides graceful degradation when network or external image URLs fail.
 */
export default function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackText = "UPW Chai",
  ...props
}) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#21130D] flex items-center justify-center ${className}`}>
      {!error ? (
        <>
          <img
            src={src}
            alt={alt}
            onError={() => setError(true)}
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            loading="lazy"
            {...props}
          />
          {!loaded && (
            <div className="absolute inset-0 bg-[#21130D]/80 animate-pulse flex items-center justify-center">
              <Coffee className="w-8 h-8 text-[#E99A3B]/40 animate-spin" />
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#21130D] to-[#120C09] border border-[#E99A3B]/20">
          <Coffee className="w-10 h-10 text-[#E99A3B] mb-2" />
          <span className="text-xs uppercase tracking-widest text-[#F7F0E5]/70 font-semibold">
            {fallbackText}
          </span>
        </div>
      )}
    </div>
  );
}

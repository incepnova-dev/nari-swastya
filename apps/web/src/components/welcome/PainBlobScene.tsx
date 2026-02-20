import React, { useEffect, useRef } from 'react';
import { initPainBlob } from '../../scripts/welcome';

export const PainBlobScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Store cleanup function
    let cleanup: (() => void) | undefined;
    
    // Ensure canvas is rendered and has dimensions before initializing
    // Use requestAnimationFrame to ensure DOM is ready
    const frameId = requestAnimationFrame(() => {
      if (!canvasRef.current) return;
      cleanup = initPainBlob(canvasRef.current);
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div className="blob-scene">
      <canvas id="blobCanvas" ref={canvasRef} />
      <div className="blob-label bl1">
        <strong>3 AM, alone, terrified</strong>
        <span>Searching symptoms with no one to ask</span>
      </div>
      <div className="blob-label bl2">
        <strong>Which doctor? Which hospital?</strong>
        <span>No trusted guide in your language</span>
      </div>
      <div className="blob-label bl3">
        <strong>Is this normal?</strong>
        <span>Questions that deserve real answers</span>
      </div>
    </div>
  );
};



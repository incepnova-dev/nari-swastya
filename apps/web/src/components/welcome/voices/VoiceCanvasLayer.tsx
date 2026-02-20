import React, { useEffect, useRef } from 'react';
import { initVoiceCanvas } from '../../../scripts/welcome';

/**
 * VoiceCanvasLayer
 * -----------------
 * Ember-like rising particles forming peer network nebula
 * Uses <canvas id="voiceCanvas"> with initVoiceCanvas animation.
 */
export const VoiceCanvasLayer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let cleanup: (() => void) | undefined;
    const frameId = requestAnimationFrame(() => {
      if (!canvasRef.current) return;
      cleanup = initVoiceCanvas(canvasRef.current);
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (cleanup) cleanup();
    };
  }, []);

  return <canvas id="voiceCanvas" ref={canvasRef} />;
};


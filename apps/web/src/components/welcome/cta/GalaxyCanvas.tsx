import React, { RefObject } from 'react';

interface GalaxyCanvasProps {
  canvasRef: RefObject<HTMLCanvasElement>;
}

/**
 * GalaxyCanvas
 * ------------
 * Firefly galaxy canvas background for CTA section
 */
export const GalaxyCanvas: React.FC<GalaxyCanvasProps> = ({ canvasRef }) => {
  return <canvas id="galaxyCanvas" ref={canvasRef} />;
};


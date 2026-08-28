import React, { useState, useRef, useEffect } from 'react';
import { ShippedProduct } from '../types';

interface ProductPreviewFrameProps {
  product: ShippedProduct;
}

export const ProductPreviewFrame: React.FC<ProductPreviewFrameProps> = ({ product }) => {
  const [scale, setScale] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(380);

  const containerRef = useRef<HTMLDivElement>(null);
  const DESKTOP_WIDTH = 960; // Clean desktop viewport width for proportionate scaling

  const targetUrl = product.liveUrl || (product.domain ? `https://${product.domain}` : '');

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight || 380;
        setContainerWidth(width);
        setContainerHeight(height);

        if (width > 0 && width < DESKTOP_WIDTH) {
          setScale(width / DESKTOP_WIDTH);
        } else {
          setScale(1);
        }
      }
    };

    updateDimensions();
    const observer = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener('resize', updateDimensions);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const scaledHeight = scale < 1 && scale > 0 ? containerHeight / scale : containerHeight;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-white overflow-y-auto overflow-x-hidden font-sans-clean select-none"
    >
      {/* Scaled Desktop Iframe on Mobile, Full Iframe on Desktop */}
      {targetUrl && (
        <div
          style={{
            width: scale < 1 ? `${DESKTOP_WIDTH}px` : '100%',
            height: scale < 1 ? `${scaledHeight}px` : '100%',
            transform: scale < 1 ? `scale(${scale})` : 'none',
            transformOrigin: 'top left',
          }}
          className="bg-white min-h-full"
        >
          <iframe
            src={targetUrl}
            title={`${product.name} Preview`}
            className="w-full h-full border-0 bg-white"
            loading="eager"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      )}
    </div>
  );
};

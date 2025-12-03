'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const isFirstLoad = useRef(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    isFirstLoad.current = false;
  }, []);

  const { width, height } = dimensions;
  const curveHeight = 150;

  // Create frown curve - dips down in middle
  const topCurvePath = `
    M 0,0
    Q ${width / 2},${curveHeight} ${width},0
    L ${width},${height}
    L 0,${height}
    Z
  `;

  const bottomCurvePath = `
    M 0,${height}
    Q ${width / 2},${height - curveHeight} ${width},${height}
    L ${width},0
    L 0,0
    Z
  `;

  if (isFirstLoad.current) {
    return <div>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        {/* First curtain - slides UP from bottom */}
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden pointer-events-none"
          initial={{ y: "100%" }}
          animate={{ y: "100%" }}
          exit={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1]
          }}
        >
          <svg
            width={width}
            height={height}
            className="absolute inset-0"
            preserveAspectRatio="none"
          >
            <path d={topCurvePath} fill="#000000" />
          </svg>
        </motion.div>

        {/* Second curtain - slides DOWN from top */}
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden pointer-events-none"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: [0.76, 0, 0.24, 1]
          }}
        >
          <svg
            width={width}
            height={height}
            className="absolute inset-0"
            preserveAspectRatio="none"
          >
            <path d={bottomCurvePath} fill="#000000" />
          </svg>
        </motion.div>

        {/* Page content fades in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.95
          }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
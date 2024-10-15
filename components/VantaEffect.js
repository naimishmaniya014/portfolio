import React, { useEffect, useRef } from 'react';

const VantaEffect = () => {
  const vantaRef = useRef(null); // Create a reference for the DOM element

  useEffect(() => {
    const loadVantaScript = (url) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Load three.js first, then load Vanta.js
    loadVantaScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
      .then(() => loadVantaScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js'))
      .then(() => {
        const vantaEffect = window.VANTA.CLOUDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          skyColor: 0xbfb3d9,     // Custom sky color
          cloudColor: 0x6f4f96,   // Custom cloud color
          sunColor: 0x9246c5,     // Custom sun color
          sunlightColor: 0x9e60a4 // Custom sunlight color
        });

        // Clean up Vanta effect when the component is unmounted
        return () => {
          if (vantaEffect) vantaEffect.destroy();
        };
      })
      .catch((error) => console.error('Error loading Vanta.js scripts:', error));
  }, []);

  return (
    <div ref={vantaRef} style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0 }}>
      {/* Vanta.js effect will be rendered here */}
    </div>
  );
};

export default VantaEffect;

import { useEffect, useRef } from "react";

export default function TiltCard({ children }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    const element = tiltRef.current;

    if (window.VanillaTilt && element) {
      window.VanillaTilt.init(element, {
        max: 15,
        speed: 300,
        glare: true,
        "max-glare": 0.2,
      });
    }

    return () => {
      if (element?.vanillaTilt) {
        element.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div ref={tiltRef} className="tilt-card">
      {children}
    </div>
  );
}

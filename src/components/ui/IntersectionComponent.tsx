import React from "react";
import { useInView } from 'react-intersection-observer';

export const IntersectionComponent: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Fires only once when the element comes into view
    threshold: 0.5,    // 50% of the element must be visible
  });

  return (
    <div>
      <div style={{ height: "100vh" }}>
        <p>Scroll down to see the element</p>
      </div>
      <div ref={ref} className={`p-4 bg-blue-100 ${inView ? "visible" : "invisible"}`}>
        {inView ? "I'm now in view!" : "I'm hidden"}
      </div>
    </div>
  );
};

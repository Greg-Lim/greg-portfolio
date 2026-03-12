import { useState, useRef, useEffect } from "react";

export function useFlyInAnimations(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;

    if (!currentRef) return;

    // CHECK IMMEDIATELY: If the element's top is already above the bottom of the screen
    const rect = currentRef.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setIsVisible(true);
      return; // No need to observe if it's already past the trigger point
    }

    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          scrollObserver.unobserve(entry.target);
        }
      },
      {
        threshold, // Trigger as soon as the element hits that -100px line
      },
    );

    if (currentRef) scrollObserver.observe(currentRef);

    return () => {
      if (currentRef) scrollObserver.unobserve(currentRef);
    };
  }, []);

  // Pack the transitions into an object
  const animations = {
    appearNow: `transition-opacity duration-1000 ${
      isVisible ? "opacity-100" : "opacity-0"
    }`,
    flyInDelay500: `transition duration-1000 delay-500 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`,
    flyInDelay700: `transition duration-1000 delay-700 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`,
  };

  return { ref, isVisible, animations };
}

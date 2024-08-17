"use client"
import React, { createContext, useContext, useEffect, useRef } from "react";

interface AnimationContextProps {
  observe: (element: Element) => void;
  unobserve: (element: Element) => void;
}

const AnimationContext = createContext<AnimationContextProps | undefined>(undefined);

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimationContext must be used within AnimationProvider");
  }
  return context;
};

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate-fade-up",
              "animate-once",
              "animate-ease-out",
              "animate-normal",
              "animate-fill-forwards"
            );
            observer.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    return () => observer.current?.disconnect();
  }, []);

  const observe = (element: Element) => {
    observer.current?.observe(element);
  };

  const unobserve = (element: Element) => {
    observer.current?.unobserve(element);
  };

  return (
    <AnimationContext.Provider value={{ observe, unobserve }}>
      {children}
    </AnimationContext.Provider>
  );
};

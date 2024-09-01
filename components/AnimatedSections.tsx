"use client"
import { useInView } from 'framer-motion';
import React, { ReactHTML, useRef } from 'react'


export default function AnimatedSections
    ({
        children,
        className,
    }: {
        children: React.ReactNode;
        className?: string;
    }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className={className}>
            <span 
                style={{
                    transform: isInView ? "none" : "translateY(50px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                }}
                // style={{
                //     transform: isInView ? "none" : "translate(-29.3px, -13.9px)",
                //     opacity: isInView ? 1 : 0,
                //     transition: "all 1s ease-in-out"  // 3s delay before the transition starts
                // }}




            >
                {children}
            </span>
        </section>
    );

}
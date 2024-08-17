"use client"
import { useInView } from 'framer-motion';
import React, { ReactHTML, useRef } from 'react'


export default function AnimatedDivTag
    ({
        children,
        className,
    }: {
        children: React.ReactNode;
        className: string;
    }) {

    const divRef = useRef(null);
    const isInView = useInView(divRef, { once: false });

    return (
        <section ref={divRef}>
            <span
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                }}
            >
                {children}
            </span>
        </section>
    );

}
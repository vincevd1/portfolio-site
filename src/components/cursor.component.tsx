import { useEffect, useRef } from 'react';

export default function Cursor() {
    const lerp = (x: number, y: number, a: number) => {
        return x + (y - x) * a;
    };

    const glowRef = useRef<HTMLDivElement | null>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const position = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            position.current.x = lerp(position.current.x, mouse.current.x, 0.1);
            position.current.y = lerp(position.current.y, mouse.current.y, 0.1);

            if (glowRef.current) {
                glowRef.current.style.transform = `translate3d(
                    ${position.current.x - 300}px,
                    ${position.current.y - 300}px,
                    0
                )`;
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={glowRef}
            className="
                pointer-events-none
                fixed
                top-0
                left-0
                w-150
                h-150
                rounded-full
              bg-sky-950/20
                blur-3xl
                z-0
            "
        />
    );
}

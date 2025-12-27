import React, { useEffect, useState, type RefObject } from 'react';
import { useRef } from 'react';

export default function ScrollableSections({
    className,
    children,
    setSection,
}: {
    className?: string;
    children: React.ReactNode;
    setSection: (section: number) => void;
}) {
    const scrollerEle = useRef(null);

    const useSectionPosition = ({
        boundingRef,
        sectionRef,
        sectionIndex,
        setSection,
    }: {
        boundingRef: RefObject<HTMLElement | null>;
        sectionRef: RefObject<HTMLElement | null>;
        sectionIndex: number;
        setSection: (index: number) => void;
    }) => {
        const [prevPosY, setPrevPosY] = useState<number | null>(null);
        const [isUp, setIsUp] = useState(false);
        const triggerHeight = 250;

        useEffect(() => {
            const handleScroll = () => {
                if (!boundingRef.current || !sectionRef.current) return;

                const currPos = sectionRef.current.getBoundingClientRect();

                if (prevPosY) {
                    const isTriggeredGoingDown = prevPosY > currPos.y && currPos.y <= triggerHeight;
                    const isTriggeredGoingUp = currPos.y >= triggerHeight && prevPosY < currPos.y;

                    if (isTriggeredGoingDown) {
                        setSection(sectionIndex);
                        setIsUp(false);
                    }

                    if (isTriggeredGoingUp && !isUp) {
                        setSection(sectionIndex - 1);
                        setIsUp(true);
                    }
                }

                setPrevPosY(currPos.y);
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, [prevPosY, isUp, boundingRef, sectionRef, sectionIndex, setSection]);
    };

    const renderChildren = () => {
        let sectionIndex = 0;
        return React.Children.map(children, (child) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const sectionRef = useRef(null);

            const args = {
                boundingRef: scrollerEle,
                sectionRef: sectionRef,
                sectionIndex: sectionIndex,
                setSection: setSection,
            };
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useSectionPosition(args);

            sectionIndex += 1;
            return (
                <div ref={sectionRef} key={sectionIndex - 1}>
                    {child}
                </div>
            );
        });
    };

    return (
        <div className={className} ref={scrollerEle}>
            {renderChildren()}
        </div>
    );
}

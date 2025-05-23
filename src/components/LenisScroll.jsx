import { useEffect, useRef, createContext, useState } from "react";
import Lenis from "@studio-freight/lenis";

export const LenisContext = createContext(null);

const LenisScroll = ({ children }) => {
    const [lenisInstance, setLenisInstance] = useState(null);
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });

        lenisRef.current = lenis;
        setLenisInstance(lenis);

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <LenisContext.Provider value={lenisInstance}>
            {children}
        </LenisContext.Provider>
    );
};

export default LenisScroll;

import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { LenisContext } from "./LenisScroll"; // import from the updated LenisScroll file

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const lenis = useContext(LenisContext);

    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0);
        }
    }, [pathname, lenis]);

    return null;
};

export default ScrollToTop;

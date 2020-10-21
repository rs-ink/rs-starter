import {useEffect, useState} from "react";

const useRsScroll = (refCallback) => {
    const [current, setCurrent] = useState(null);
    useEffect(() => {
        if (refCallback.current) {
            setCurrent(refCallback.current);
        }
    }, [refCallback]);

    function scrollIntoView() {
        if (current) {
            current.scrollIntoView(true)
        }
    }
    return {scrollIntoView}
};
export default useRsScroll;

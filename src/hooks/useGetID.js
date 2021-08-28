import { useCallback } from "react";

const useGetID = () => {
    const get = useCallback((str) => {
        var regDigit = /\d+/;
        return str.match(regDigit)[0];
    }, []);
    return get;
};

export default useGetID;
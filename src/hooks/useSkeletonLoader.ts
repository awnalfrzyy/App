// hooks/useFetchSkeleton.ts
import { useState, useEffect } from "react";

export function useSkeletonLoader<T>(Data: T[], delay = 2000) {
    const [data, setData] = useState<T[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setData(Data);
            setIsLoading(false);
        }, delay);
        return () => clearTimeout(timeout);
    }, [delay, Data]);

    return { data, isLoading };
}

import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

interface Fill {
    className?: string;
}

export default function Skeleton({ className }: Fill) {
    const opacity = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
        const loop = Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 700,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0.3,
                    duration: 700,
                    useNativeDriver: true,
                }),
            ])
        );

        loop.start();
        return () => loop.stop();
    }, [opacity]);

    return (
        <Animated.View
            style={{ opacity }}
            className={`bg-gray-400 rounded-xl overflow-hidden animate-pulse ${className}`}
        />
    );
}

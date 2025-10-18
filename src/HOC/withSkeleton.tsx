import React from "react";

type WithSkeletonProps = {
    isLoading?: boolean;
};

export function withSkeleton<T>(
    WrappedComponent: React.ComponentType<T>,
    SkeletonComponent: React.ComponentType
) {
    return (props: T & WithSkeletonProps) => {
        const { isLoading, ...rest } = props;
        if (isLoading) return <SkeletonComponent />;
        return <WrappedComponent {...(rest as any)} />;
    };
}

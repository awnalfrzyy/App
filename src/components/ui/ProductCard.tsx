import { View, Text, Image } from "react-native";
import { Star, Heart } from "lucide-react-native";
import { clsx } from "clsx";
import Skeleton from "./skeleton";

interface CardProps {
    image: string;
    title: string;
    type: string;
    price: number;
    rating: number;
    variant?: "primary" | "secondary"; // primary = vertical, secondary = horizontal
    isLoading?: boolean;
    className?: string;
}

export default function ProductCard({
    image,
    title,
    type,
    price,
    rating,
    variant = "primary",
    isLoading = false,
    className = "",
}: CardProps) {
    if (isLoading) {
        // skeleton
        return variant === "primary" ? (
            <View className={clsx("w-[48%] mb-4", className)}>
                <Skeleton className="w-full h-48 rounded-2xl mb-2" />
                <Skeleton className="h-4 w-3/4 mb-1 rounded-md" />
                <Skeleton className="h-3 w-1/2 rounded-md" />
                <Skeleton className="h-4 w-1/3 rounded-md" />
            </View>
        ) : (
            <View className={clsx("w-full flex-row gap-3 mb-4", className)}>
                <Skeleton className="w-24 h-24 rounded-2xl" />
                <View className="flex-1 justify-between py-1">
                    <Skeleton className="h-4 w-3/4 mb-2 rounded-md" />
                    <Skeleton className="h-3 w-1/2 mb-1 rounded-md" />
                    <Skeleton className="h-4 w-1/3 rounded-md" />
                </View>
            </View>
        );
    }

    // actual card
    const containerClasses = clsx(
        "rounded-2xl overflow-hidden bg-white",
        variant === "primary" ? "w-[48%] mb-5" : "w-full flex-row gap-3 mb-4",
        className
    );

    const imageClasses = clsx(
        variant === "primary" ? "w-full h-48 rounded-2xl" : "w-24 h-24 rounded-2xl",
        "bg-gray-100"
    );

    return (
        <View className={containerClasses}>
            <View className={clsx("relative", imageClasses)}>
                <Image source={{ uri: image }} className={clsx(imageClasses)} resizeMode="cover" />
                <View className="absolute top-1 right-1 bg-transparent p-1 rounded-full">
                    <Heart size={16} color="red" />
                </View>
            </View>

            <View className={clsx(variant === "primary" ? "mt-2 gap-1" : "flex-1 justify-between")}>
                <View className="flex-row justify-between items-start w-full">
                    <Text
                        className={clsx(
                            "text-lg font-semibold text-gray-900 flex-shrink",
                            variant === "primary" ? "w-full" : "w-4/5"
                        )}
                    >
                        {title}
                    </Text>
                    <View className="flex-row items-center ml-2">
                        <Star size={14} color="yellow" fill="yellow" />
                        <Text className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</Text>
                    </View>
                </View>

                <Text className="text-xs text-gray-500">{type}</Text>
                <Text className="text-sm font-bold text-green-600">
                    Rp{price.toLocaleString("id-ID")}
                </Text>
            </View>
        </View>
    );
}

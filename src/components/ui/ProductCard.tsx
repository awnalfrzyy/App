import { View, Text, Image, TouchableOpacity } from "react-native";
import { Star, Heart } from "lucide-react-native";
import { clsx } from "clsx";
import Skeleton from './skeleton';
interface CardProps {
    image?: string;
    title?: string;
    type?: string;
    price?: number;
    rating?: number;
    variant?: "primary" | "secondary";
    onPress?: () => void;
    className?: string;
    isLoading?: boolean;
}

export default function ProductCard({
    image,
    title,
    type,
    price,
    rating,
    variant = "primary",
    onPress,
    className,
    isLoading = false
}: CardProps) {

    const containerClasses = clsx(
        "rounded-2xl overflow-hidden bg-transparent",
        variant === "primary" ? "w-[48%] mb-5" : "w-full flex-col gap-3 mb-4",
        className
    );

    const imageClasses = clsx(
        variant === "primary" ? "w-full h-48 rounded-2xl" : "w-24 h-24 rounded-2xl",
        "bg-gray-100"
    );

    if (isLoading) {
        return (
            <View className="flex flex-col">
                <View className={containerClasses}>
                    <Skeleton className={imageClasses} />
                    <View className="mt-2 gap-1 px-1">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-1/2" />
                        <Skeleton className="h-4 w-1/4" />
                    </View>
                </View>
            </View>
        );
    }

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} className={containerClasses}>
            <View className="relative">
                <Image source={{ uri: image }} className={clsx(imageClasses)} resizeMode="cover" />
                <View className="absolute top-1 right-1 p-1">
                    <Heart size={16} color="red" />
                </View>
            </View>

            <View className={clsx(variant === "primary" ? "mt-2 gap-1 px-1" : "flex-1 justify-between px-2")}>
                <View className="flex-row justify-between items-center">
                    <Text className="text-lg font-semibold text-gray-900 flex-shrink">{title}</Text>
                    <View className="flex-row items-center ml-2">
                        <Star size={14} color="yellow" fill="yellow" />
                        {rating !== undefined && (
                            <Text className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</Text>
                        )}
                    </View>
                </View>

                <Text className="text-xs text-gray-500">{type}</Text>
                {price !== undefined && (
                    <Text className="text-sm font-bold text-green-600">
                        Rp{price.toLocaleString("id-ID")}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );
}

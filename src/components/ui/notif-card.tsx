import { BellDot } from "lucide-react-native";
import { View, Text } from "react-native";
import Skeleton from "./skeleton";

interface ComponentProps {
    title?: string;
    desc?: string;
    isLoading?: boolean; // optional biar bisa fleksibel
}

export default function NotifCard({ title, desc, isLoading = false }: ComponentProps) {
    if (isLoading) {
        // Mode loading pakai Skeleton placeholder
        return (
            <View className="w-full flex-row items-center gap-4 py-4 px-3">
                <Skeleton className="w-12 h-12 rounded-full" />
                <View className="flex-1">
                    <Skeleton className="h-4 w-2/3 mb-2 rounded-md" />
                    <Skeleton className="h-4 w-1/2 rounded-md" />
                </View>
            </View>
        );
    }

    // Mode data sudah ready
    return (
        <View className="w-full flex-row items-center gap-4 py-4 px-3 border border-neutral-300  rounded-3xl">
            {/* Icon */}
            <View className="w-12 h-12 rounded-full justify-center items-center border border-neutral-400">
                <BellDot size={24} color="#333" />
            </View>

            {/* Text content */}
            <View className="flex-1">
                <Text className="text-neutral-800 text-lg font-semibold">{title}</Text>
                <Text className="text-neutral-600 text-base">{desc}</Text>
            </View>
        </View>
    );
}

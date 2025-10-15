import { View, Image } from "react-native";
import { Heart } from "lucide-react-native";

interface ComponentsProps {
    image: string;
}

export default function FavCard({ image }: ComponentsProps) {
    return (
        <View className="relative w-full h-48 rounded-2xl overflow-hidden">
            <Image
                source={{ uri: image }}
                resizeMode="cover"
                className="w-full h-full"
            />

            <View className="absolute top-2 right-2 bg-white/70 p-1.5 rounded-full shadow">
                <Heart size={16} color="red" />
            </View>
        </View>
    );
}

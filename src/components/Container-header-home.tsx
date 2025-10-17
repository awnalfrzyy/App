import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { HomeStackParamList } from "@/navigator/Home-navigator";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SearchInput from "./ui/Search-input";
import { View, Text } from "react-native";
import Button from "./ui/Button";
import { Heart, MessageCircle } from 'lucide-react-native'

interface ComponentProps {
    btn: boolean;
    search: boolean;
    header: boolean;
}


type NavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Favorit'>;

export default function ContainerHeaderHome() {

    const navigation = useNavigation<NavigationProp>();
    const [query, setQuery] = useState("");

    return (
        <View>
            <View className="pb-5">
                <Text className="text-sm text-neutral-400">Good Morning</Text>
                <Text className="text-3xl font-semibold text-neutral-800">Aswin Alfarizi</Text>
            </View>
            <View className="flex flex-row items-center mb-6">
                <View className="flex-1">
                    <SearchInput
                        placeholder="Cari menu favorit kamu..."
                        value={query}
                        onChangeText={setQuery}
                        onClear={() => setQuery("")}
                        className="mr-3 rounded-full"
                    />
                </View>
                <View className="flex flex-row gap-1">
                    <Button variant="secondary" className="rounded-full"
                        onPress={() => navigation.navigate('Favorit' as never)}>
                        <Heart size={23} color="red" />

                    </Button>
                    <Button variant="secondary" className="rounded-full"
                        onPress={() => navigation.navigate('Detail' as never)}>
                        <MessageCircle size={23} color="#00746F"
                        />
                    </Button>
                </View>
            </View>
        </View>
    )
};

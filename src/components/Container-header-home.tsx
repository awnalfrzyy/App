import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { HomeStackParamList } from "@/navigator/Home-navigator";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SearchInput from "./ui/Search-input";
import { View } from "react-native";
import Button from "./ui/Button";

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Favorit'>;

interface HeaderButtons {
    fav?: {
        icon: React.ReactNode;
        onPress?: () => void;
    };
    notif?: {
        icon: React.ReactNode;
        onPress?: () => void;
    };
    // bisa tambahin lainnya nanti
}

interface ComponentProps {
    buttons?: HeaderButtons; // optional object of icon-buttons
}

export default function ContainerHeaderHome({ buttons }: ComponentProps) {
    const navigation = useNavigation<NavigationProp>();
    const [query, setQuery] = useState("");

    return (
        <View>
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

                <View className="flex flex-row gap-2">
                    {buttons?.fav && (
                        <Button
                            variant="secondary"
                            className="rounded-full"
                            onPress={buttons.fav.onPress || (() => navigation.navigate("Favorit" as never))}
                        >
                            {buttons.fav.icon}
                        </Button>
                    )}

                    {buttons?.notif && (
                        <Button
                            variant="secondary"
                            className="rounded-full"
                            onPress={buttons.notif.onPress}
                        >
                            {buttons.notif.icon}
                        </Button>
                    )}
                </View>
            </View>
        </View>
    );
}

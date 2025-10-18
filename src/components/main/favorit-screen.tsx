import { View, ScrollView } from "react-native";
import Header from "../ui/Header";
import FavCard from "../ui/Fav-card";
// import { useNavigation } from "@react-navigation/native";
// import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { HomeStackParamList } from "@/navigator/Home-navigator";
// import Button from "../ui/Button";
// import { useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import Tabs from "../ui/Tabs";


// type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Favorit">;

export default function FavoritScreen() {
    // const navigation = useNavigation<NavigationProp>();
    const insets = useSafeAreaInsets();

    const TAB_HEIGHT = 70 + insets.top;

    const favoriteItems = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1576402187878-974f70c89045",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1580910051073-b7b36dffeb1e",
        },
    ];

    return (
        <>
            <Tabs
                leftIcon={<ArrowLeft size={22} color="black" />}
                title="Detail Produk"
            />

            <ScrollView
                className="flex-1 "
                contentContainerStyle={{
                    paddingTop: TAB_HEIGHT,
                    paddingHorizontal: 16,
                    paddingBottom: 20,
                }}
            >
                <Header title="Favorit" />

                <View className="mt-10 flex-row flex-wrap justify-between">
                    {favoriteItems.map((item) => (
                        <View key={item.id} className="w-[48%] mb-4">
                            <FavCard image={item.image} />
                        </View>
                    ))}
                </View>
            </ScrollView>

        </>
    );
}

import { View, Text, ScrollView, Image } from 'react-native';
import Button from "../ui/Button";
import ProductCard from "@/components/ui/ProductCard";
import { useBottomSheet } from "@/context/ButtonSheetContext";
import { useState } from "react";
import { clsx } from "clsx";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ContainerHeaderHome from "../Container-header-home";
import BottomSheet from "../ui/Button-sheet";
import { MessageCircle } from "lucide-react-native";

const Btn = [
    { title: "Coffee" },
    { title: "Drink" },
    { title: "Jamu" },
    { title: "Non Coffee" },
    { title: "Eat" },
    { title: "Dessert" },
];

const Promo = [
    { color: "#FDE68A", text: "Buy 1 Get 1 Coffee" },
    { color: "#BFDBFE", text: "Special Drink Week" },
    { color: "#FCA5A5", text: "Healthy Jamu Pack" },
];

const Products = [
    {
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        title: "Cappuccino",
        type: "Coffee",
        price: 25000,
        rating: 4.8,
    },
    {
        image: "https://images.unsplash.com/photo-1525054098605-8e762c017741",
        title: "Latte",
        type: "Non Coffee",
        price: 23000,
        rating: 4.6,
    },
    {
        image: "https://images.unsplash.com/photo-1574932569541-7d2f7b6c1d5d",
        title: "Jamu Kunyit Asam",
        type: "Herbal Drink",
        price: 15000,
        rating: 4.9,
    },
    {
        image: "https://images.unsplash.com/photo-1565958011705-44e2118b4c2a",
        title: "Pancake",
        type: "Dessert",
        price: 28000,
        rating: 4.7,
    },
];

export default function HomeScreen() {
    const insets = useSafeAreaInsets();
    const [selected, setSelected] = useState<any>(null);
    const { isOpen, openSheet, closeSheet, hideTabBar, showTabBar } = useBottomSheet();

    const handleCardPress = (item: any) => {
        setSelected(item);
        hideTabBar(); // 🔥 sembunyiin tab
        openSheet(); // buka sheet
    };

    const handleClose = () => {
        closeSheet(); // tutup sheet
        showTabBar(); // munculin tab lagi
        setSelected(null);
    };

    return (
        <>
            <ScrollView
                className="flex-1 bg-white px-4 pt-8"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: insets.bottom + 80,
                    flexGrow: 1,
                }}
            >
                <View>
                    <ContainerHeaderHome />
                </View>

                {/* Promo Section */}
                <View className="mb-6">
                    <Text className="text-lg font-semibold mb-3 text-gray-800">
                        Promo Hari Ini
                    </Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {Promo.map((item, index) => (
                            <View
                                key={index}
                                className="w-[345px] h-52 mr-4 rounded-2xl justify-center items-center shadow"
                                style={{ backgroundColor: item.color }}
                            >
                                <Text className="text-sm font-semibold text-gray-800 text-center px-2">
                                    {item.text}
                                </Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View className="flex flex-row gap-2 mb-6">
                        {Btn.map((item, index) => (
                            <Button
                                key={index}
                                variant={item.title === "Coffee" ? "primary" : "secondary"}
                                className={clsx(
                                    "px-5 rounded-full",
                                    item.title === "Coffee" ? "text-white" : "text-neutral-900"
                                )}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </View>
                </ScrollView>
                <View className="mb-12">
                    <Text className="text-lg font-semibold mb-3 text-gray-800">
                        Rekomendasi Untuk Kamu
                    </Text>
                    <View className="flex flex-row flex-wrap justify-between ">
                        {Products.map((item, i) => (
                            <ProductCard
                                key={i}
                                image={item.image}
                                title={item.title}
                                type={item.type}
                                price={item.price}
                                rating={item.rating}
                                onPress={() => handleCardPress(item)}
                            />
                        ))}
                    </View>
                </View>

                {/* Bantuan */}
                <View className="bg-[#00764F] flex-row justify-between items-center rounded-2xl p-4 mt-6 shadow-md">
                    <View className="pr-3">
                        <Text className="text-white text-lg font-semibold mb-1">
                            Butuh Bantuan?
                        </Text>
                        <Text className="text-white/80 text-sm mb-3">
                            Solusi cepat ada di Pusat Bantuan 💬
                        </Text>

                        <Button
                            variant="secondary"
                            className="bg-white rounded-full"
                        >
                            <Text className="text-[#00764F] font-semibold text-sm">
                                Cek Pusat Bantuan
                            </Text>
                        </Button>
                    </View>

                    <Image
                        source={{
                            uri: "https://img.icons8.com/plasticine/100/online-store.png",
                        }}
                        className="w-20 h-20"
                        resizeMode="contain"
                    />
                </View>
            </ScrollView>

            {/* Bottom Sheet */}
            {isOpen && (
                <BottomSheet isOpen={isOpen} toggleSheet={handleClose}
                    style={{
                        paddingBottom: insets.bottom,
                    }}>
                    <View className="p-1 gap-4 max-h-[80%]">
                        {selected?.image && (
                            <View className="w-full aspect-[4/3]">
                                <Image
                                    source={{ uri: selected.image }}
                                    className="w-full h-full rounded-2xl"
                                    resizeMode="cover"
                                />
                            </View>
                        )}
                        <View className='mt-2 mb-10 gap-3'>
                            <Text className="text-3xl font-bold">{selected?.title}</Text>
                            <Text className="text-gray-700 text-2xl font-black">
                                Rp. {selected?.price?.toLocaleString("id-ID")}
                            </Text>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, suscipit!
                            </Text>
                        </View>
                        <View className="flex flex-row items-center gap-2 w-full">
                            <Button onPress={handleClose} variant="primary" className="w-auto">
                                <MessageCircle size={18} color="#ffffff" />
                            </Button>

                            <Button onPress={handleClose} variant="primary" className="flex-1">
                                <Text className="text-white font-medium text-center">
                                    Masukkan Keranjang
                                </Text>
                            </Button>
                        </View>
                    </View>
                </BottomSheet>

            )}
        </>
    );
}

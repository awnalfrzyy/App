import ProductCard from "../ui/ProductCard";
import Button from "../ui/Button";
import { View, ScrollView, Text, Image, FlatList } from "react-native";
import { useState, useEffect } from "react";
import Header from "../ui/Header";
import ContainerHeaderHome from '../Container-header-home';
import { clsx } from "clsx";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BottomSheet from "@/components/ui/Button-sheet";
// import { useSharedValue } from "react-native-reanimated";
import { useBottomSheet } from "@/context/ButtonSheetContext";
import { Loader, MessageCircle } from "lucide-react-native";
import { withSkeleton } from "@/HOC/withSkeleton";
import { useSkeletonLoader } from "@/hooks/useSkeletonLoader";

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
const Btn = [
    { title: "Coffee" },
    { title: "Drink" },
    { title: "Jamu" },
    { title: "Non Coffee" },
    { title: "Eat" },
    { title: "Dessert" },
];

const ProductCardWithSkeleton = withSkeleton(ProductCard, ProductCard);


export default function MenuScreen() {
    const [selected, setSelected] = useState<any>(null);
    const insets = useSafeAreaInsets();
    const { isOpen, openSheet, closeSheet, hideTabBar, showTabBar } = useBottomSheet();
    const { data, isLoading } = useSkeletonLoader(Products, 2000);




    const handleCardPress = (item: any) => {
        setSelected(item);
        hideTabBar();
        openSheet();
    };

    const handleClose = () => {
        closeSheet();
        showTabBar();
        setSelected(null);
    };

    return (
        <>
            <ScrollView
                className="bg-white z-10 px-4"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: insets.bottom + 20,
                    flexGrow: 1,
                }}
            >
                <View className="px-4 flex-1 bg-white">
                    <Header title="Menu" />
                    <ContainerHeaderHome />
                </View>

                <View className="flex flex-col gap-3 mb-6 py-1">
                    <Text className="text-lg font-medium">Category</Text>
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
                </View>

                <FlatList
                    scrollEnabled={false}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }}
                    data={isLoading ? Array(3).fill({}) : data}
                    renderItem={({ item }) => (
                        <ProductCardWithSkeleton
                            isLoading={isLoading}
                            image={item.image}
                            title={item.title}
                            type={item.type}
                            price={item.price}
                            rating={item.rating}
                        />
                    )}
                />

            </ScrollView >

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
            )
            }
        </>
    );
}

import ProductCard from "../ui/ProductCard";
import Button from "../ui/Button";
import { View, ScrollView, Text } from 'react-native'
import SearchInput from "../ui/Search-input";
import { useState } from "react";
import Header from "../ui/Header";
import { clsx } from "clsx";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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

export default function MenuScreen() {

    const [query, setQuery] = useState("")
    const insets = useSafeAreaInsets();

    return (
        <ScrollView
            className="bg-white"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: insets.bottom + 20,
                flexGrow: 1,
            }}>
            <View className="px-4 flex-1 bg-white">
                <View className="py-10">
                    <Header title="Menu" />
                </View>
                <View className="flex-1 mb-4">
                    <SearchInput
                        placeholder="Cari menu favorit kamu..."
                        value={query}
                        onChangeText={setQuery}
                        onClear={() => setQuery("")}
                        className="mr-3 rounded-full"
                    />
                </View>
                <View className="flex flex-col gap-3 mb-6 py-1">
                    <Text className="text-lg font-medium">Category</Text>
                    <View className="flex flex-row gap-2 mb-6">
                        {Btn.map((item, index) => (
                            <Button
                                key={index}
                                variant={item.title === "Coffee" ? "primary" : "secondary"} // ❌ kuncinya di sini
                                className={clsx("px-5 rounded-full", item.title === "Coffee" ? "text-white" : "text-neutral-900")}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </View>
                </View>
                <View className="flex flex-row flex-wrap justify-between">
                    {Products.map((item, i) => (
                        <ProductCard
                            key={i}
                            image={item.image}
                            title={item.title}
                            type={item.type}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
};

/**
 * 🏠 HomeScreen — halaman utama
 * -----------------------------
 * ✅ Fitur:
 *   - Search bar dengan tombol cari
 *   - Promo card horizontal
 *   - Kategori button looping
 *   - Rekomendasi produk pakai <ProductCard /> (vibes Tokopedia)
 *
 * ⚙️ Note:
 *   - Pastikan `ProductCard.tsx` ada di `../components/ProductCard`
 *   - Gunakan NativeWind agar className berfungsi
 */

import { View, Text, ScrollView } from "react-native";
import Button from "../ui/Button";
import SearchInput from "../ui/Search-input";
import ProductCard from "@/components/ui/ProductCard";
import { useState } from "react";

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
    const [query, setQuery] = useState("");

    return (
        <ScrollView className="flex-1 bg-white px-4 pt-8">
            {/* 🔍 Search Section */}
            <View className="flex flex-row items-center mb-6">
                <View className="flex-1">
                    <SearchInput
                        placeholder="Cari menu favorit kamu..."
                        value={query}
                        onChangeText={setQuery}
                        onClear={() => setQuery("")}
                        className="mr-3"
                    />
                </View>
                <Button variant="secondary">Cari</Button>
            </View>

            {/* 🔥 Promo Section */}
            <View className="mb-6">
                <Text className="text-lg font-semibold mb-3 text-gray-800">
                    Promo Hari Ini
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {Promo.map((item, index) => (
                        <View
                            key={index}
                            className="w-96 h-52 mr-4 rounded-2xl justify-center items-center shadow"
                            style={{ backgroundColor: item.color }}
                        >
                            <Text className="text-sm font-semibold text-gray-800 text-center px-2">
                                {item.text}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
            </View>

            {/* ☕ Category Buttons */}
            <View className="flex flex-row gap-2 mb-6">
                {Btn.map((item, index) => (
                    <Button key={index} variant="outline" className="px-10 py-2 rounded-full  ">
                        {item.title}
                    </Button>
                ))}
            </View>

            {/* 🧾 Product Section */}
            <View className="mb-12">
                <Text className="text-lg font-semibold mb-3 text-gray-800">
                    Rekomendasi Untuk Kamu
                </Text>
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
    );
}

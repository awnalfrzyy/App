/**
 * 🛍️ ProductCard Component — clean Tokopedia style
 * -----------------------------------------------
 * ✅ Tujuan:
 *    Komponen ini digunakan untuk menampilkan produk/menu dengan tampilan seperti e-commerce (Tokopedia / GoFood).
 *    Gambar besar di atas, teks dan harga di bawah, background transparan.
 *
 * ✅ Props:
 *    - image: string → URL gambar produk
 *    - title: string → Nama produk
 *    - type: string → Kategori (misal: Coffee, Non Coffee, Dessert)
 *    - price: number → Harga dalam angka (misal: 25000)
 *    - rating: number → Nilai rating (misal: 4.8)
 *    - className?: string → Opsional tambahan styling pakai NativeWind
 *
 * ✅ Style Notes:
 *    - Card transparan, dua kolom per baris (w-[46%])
 *    - Gambar dibulatkan dan di-cover penuh
 *    - Badge rating muncul di pojok kiri atas (background hitam transparan)
 *    - Warna harga: hijau (#16A34A) → khas e-commerce vibes
 *
 * ✅ Contoh Penggunaan:
 *    <ProductCard
 *      image="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
 *      title="Cappuccino"
 *      type="Coffee"
 *      price={25000}
 *      rating={4.8}
 *    />
 *
 * ✅ Catatan:
 *    Komponen ini cocok buat grid product list.
 *    Kalau mau animasi shimmer loading, bisa digabung dengan komponen Skeleton.
 */

import { View, Text, Image } from "react-native";
import { Star, Heart } from "lucide-react-native";

interface CardProps {
    image: string;
    title: string;
    type: string;
    price: number;
    rating: number;
    className?: string;
}

export default function ProductCard({
    image,
    title,
    type,
    price,
    rating,
    className = "",
}: CardProps) {
    return (
        <View
            className={`w-[48%] bg-transparent mb-5 ${className}`}
        >
            {/* 🖼️ Product Image */}
            <View className="relative w-full h-48 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                    source={{ uri: image }}
                    className="w-full h-full rounded-2xl"
                    resizeMode="cover"
                />
                <View className="absolute top-2 right-2 bg-transparent p-2 rounded-full flex-row items-center">
                    <Heart size={20} color="red" />
                </View>
            </View>
            <View className="mt-2 gap-1">
                <View className="flex-row justify-between items-start w-full">
                    <Text
                        className="text-xl font-semibold text-gray-900 flex-shrink w-4/5"
                    >
                        {title}
                    </Text>

                    <View className="flex-row items-center ml-2">
                        <Star size={16} color="yellow" fill="yellow" />
                        <Text className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</Text>
                    </View>
                </View>

                <Text className="text-xs text-gray-500 mb-1">{type}</Text>
                <Text className="text-[14px] font-bold text-green-600">
                    Rp{price.toLocaleString("id-ID")}
                </Text>
            </View>
        </View>
    );
}

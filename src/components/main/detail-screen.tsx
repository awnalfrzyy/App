import { View, Text, Image } from 'react-native'
import Button from '../ui/Button'
import { useState } from 'react'
import { Star, MessageCircle, ShoppingCart } from 'lucide-react-native'

export default function DetailScreen() {
    const [count, setCount] = useState(1)

    return (
        <View className="flex-1 bg-white p-4">
            <View className="items-center mb-4">
                <Image
                    source={{ uri: 'https://via.placeholder.com/300' }}
                    className="w-full h-64 rounded-2xl"
                    resizeMode="cover"
                />
            </View>

            <View className="px-2">
                <Text className="text-xl font-semibold mb-2 text-gray-900">Nama Produk</Text>

                <View className="flex-row items-center mb-2">
                    <Star color="#FFD700" fill="#FFD700" size={18} />
                    <Text className="ml-1 text-gray-600">4.9 (123 reviews)</Text>
                </View>

                <Text className="text-lg font-bold text-primary mb-4">Rp 49.000</Text>

                {/* Counter */}
                <View className="flex-row items-center justify-center space-x-4">
                    <Button variant="secondary" onPress={() => setCount(prev => Math.max(prev - 1, 1))}>
                        -
                    </Button>
                    <Text className="text-lg font-semibold text-gray-800">{count}</Text>
                    <Button variant="secondary" onPress={() => setCount(prev => prev + 1)}>
                        +
                    </Button>
                </View>
            </View>

            {/* Tombol aksi */}
            <View className="mt-6 flex-row justify-between">
                <Button variant="primary" className="flex-row flex-1 mr-2">
                    <ShoppingCart size={18} color="white" />
                    <Text className="ml-2 text-white font-semibold">Masukkan Keranjang</Text>
                </Button>
                <Button variant="primary" className="w-12 flex items-center justify-center">
                    <MessageCircle size={20} color="white" />
                </Button>
            </View>
        </View>
    )
}

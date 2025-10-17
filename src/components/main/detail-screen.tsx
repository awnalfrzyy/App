// import { View, Text, Image, Pressable } from 'react-native';
// import Button from '../ui/Button';
// import { Star, MessageCircle, ShoppingCart } from 'lucide-react-native';
// import BottomSheet from '@/components/ui/Button-sheet';
// import Animated, { useSharedValue } from 'react-native-reanimated';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function DetailScreen() {
//     const isOpen = useSharedValue(false);

//     const toggleSheet = () => {
//         isOpen.value = !isOpen.value;
//     };

//     return (
//         <SafeAreaView className='flex-1'>
//             <View className="flex-1 bg-white p-4">
//                 {/* Gambar Produk */}
//                 <View className="relative">
//                     <Image
//                         source={require('../../assets/image/pexels-ron-lach-8429814.jpg')}
//                         className="w-full h-80 rounded-2xl"
//                         resizeMode="cover"
//                     />
//                 </View>

//                 {/* Detail Produk */}
//                 <View className="px-2">
//                     <Text className="text-xl font-semibold mb-2 text-gray-900">Nama Produk</Text>

//                     <View className="flex-row items-center mb-2">
//                         <Star color="#FFD700" fill="#FFD700" size={18} />
//                         <Text className="ml-1 text-gray-600">4.9 (123 reviews)</Text>
//                     </View>

//                     <Text className="text-4xl font-black text-primary mb-4">Rp 49.000</Text>
//                     <Text className="text-sm font-medium text-primary mb-4">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus inventore, ea sit aspernatur in dolores dolor
//                         dignissimos deserunt, neque quod optio quas odit provident beatae enim consectetur perspiciatis explicabo at?
//                     </Text>
//                 </View>

//                 {/* Tombol aksi */}
//                 <View className="mt-6 flex-row justify-between">
//                     {/* Tombol buka sheet */}
//                     <Button
//                         variant="primary"
//                         className="flex-1 mr-4 py-3 rounded-xl"
//                         onPress={toggleSheet}>
//                         <Text className="text-white text-center font-semibold">Tambah ke Keranjang</Text>
//                     </Button>

//                     <Button variant="primary" className="w-12 flex items-center justify-center">
//                         <MessageCircle size={20} color="white" />
//                     </Button>
//                 </View>

//                 {/* Bottom Sheet (harus di luar layout normal biar absolute-nya jalan) */}
//                 <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet}>
//                     <View className="items-center">
//                         <Text className="text-black dark:text-white text-lg font-semibold mb-2">
//                             Barang masuk keranjang 🎉
//                         </Text>
//                         <Pressable
//                             onPress={toggleSheet}
//                             className="mt-3 bg-indigo-500 rounded-full px-6 py-2">
//                             <Text className="text-white font-medium">Tutup</Text>
//                         </Pressable>
//                     </View>
//                 </BottomSheet>
//             </View>
//         </SafeAreaView>
//     );
// }

import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ScrollView, Image } from "react-native";

const Card = [
    { title: "Cara Pesan" },
    { title: "Pantau promo terbaru" },
    { title: "Penggunaan Vocher" },
    { title: "Kemudahan Payment" },
    { title: "Lowongan Kerja" },
]

export default function ContainerPerkenalan() {
    return (
        <View className="mb-6 px-0 bg-[#00764F] rounded-2xl">
            <View className="py-3 px-5 flex flex-row items-center">

                <Text className="text-lg font-semibold text-white">
                    Yuk kenalan sama Toko
                </Text>
            </View>
            <View className="p-5 bg-white border border-neutral-200 rounded-2xl">
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{}}
                >
                    {Card.map((item, index) => (
                        <LinearGradient
                            key={index}
                            colors={["#00764F", "#2B8166FF"]}
                            start={{ x: 0, y: 3 }}
                            end={{ x: 1, y: 2 }}
                            style={{ borderRadius: 14 }}
                            className="mr-3 pt-8 w-36 h-44 justify-between shadow-md"
                        >
                            <Text className="text-white text-center font-semibold text-base">
                                {item.title}
                            </Text>
                            <View className=" rounded-tl-full rounded-bl-2xl rounded-br-2xl bg-green-300/80 w-full h-20"></View>
                        </LinearGradient>
                    ))}
                </ScrollView>
            </View>
        </View>

    )
};

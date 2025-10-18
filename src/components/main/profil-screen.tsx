import { View, Text, ScrollView } from "react-native";
import { CircleStar, PencilLine, ClipboardClock, Settings, Wallet, LogOut, ChevronRight } from "lucide-react-native";
import Button from "../ui/Button";

const Box = [
    { title: "Saldo Tersedia", fill: "30.000" },
    { title: "Vocher Tersedia", fill: "3" },
];

const btnMenu = [
    { title: "Edit Profil", icon: PencilLine },
    { title: "History CekOut", icon: ClipboardClock },
    { title: "Cek Kartu Rekening", icon: Wallet },
    { title: "Pengaturan", icon: Settings },
    { title: "Keluar dari akun", icon: LogOut },
];

export default function ProfilScreen() {
    return (
        <ScrollView className="flex-1 bg-white px-5 py-6">
            {/* Header Profil */}
            <View className="flex flex-row items-center gap-4 mb-6">
                <View className="w-28 h-28 rounded-full bg-gray-300" />
                <View>
                    <Text className="text-2xl font-bold">Aswin Alfarizi</Text>
                    <View className="flex flex-row items-center gap-2">
                        <CircleStar size={18} color="gold" />
                        <Text className="text-base text-gray-600">Premium Member</Text>
                    </View>
                </View>
            </View>

            {/* Box saldo & voucher */}
            <View className="flex flex-row justify-between mb-6">
                {Box.map((item, index) => (
                    <View key={index} className="flex-1 mx-1 p-4 bg-gray-100 rounded-2xl items-center">
                        <Text className="text-gray-500">{item.title}</Text>
                        <Text className="text-xl font-semibold">{item.fill}</Text>
                    </View>
                ))}
            </View>

            {/* Menu tombol */}
            <View className="flex flex-col">
                {btnMenu.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <Button
                            key={index}
                            variant="secondary"
                            className="flex flex-row items-center justify-between py-1 mt-2"
                        >
                            <View className="flex flex-row items-center justify-between w-full px-2">
                                <View className="flex flex-row gap-5">
                                    <Icon size={22} color="black" />
                                    <Text className="text-base">{item.title}</Text>
                                </View>
                                <ChevronRight size={22} color="black" />
                            </View>
                        </Button>
                    );
                })}
            </View>
        </ScrollView>
    );
}

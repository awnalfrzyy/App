import { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import Header from "../ui/Header";
import NotifCard from "@/components/ui/notif-card";

const notifications = [
    { id: "1", title: "Pesanan siap", desc: "Ambil di kasir sebelum jam 10" },
    { id: "2", title: "Diskon baru", desc: "Promo kopi 50% hari ini" },
];

export default function NotificationScreen() {
    const [data, setData] = useState<typeof notifications | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simulasi fetch API
        setTimeout(() => {
            setData(notifications);
            setLoading(false);
        }, 5000); // 2 detik loading
    }, []);

    return (
        <View className="px-4 flex-1 bg-white  ">
            <View className="py-10">
                <Header title="Notification" />
            </View>
            <View className="">
                <FlatList
                    data={loading ? Array(3).fill({}) : data}
                    keyExtractor={(_, idx) => idx.toString()}
                    renderItem={({ item }) =>
                        loading ? <NotifCard isLoading /> : <NotifCard title={item.title} desc={item.desc} />
                    }
                    contentContainerStyle={{ paddingBottom: 16 }}
                    ItemSeparatorComponent={() => <View className="h-4" />} // gap 16px
                />

            </View>
        </View>
    );
}

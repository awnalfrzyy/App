import NotificationScreen from "@/components/main/notification-screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notification() {
    return (
        <SafeAreaView className="flex-1">
            <NotificationScreen />
        </SafeAreaView>
    )
};
import MenuScreen from "@/components/main/menu_screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Menu() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <MenuScreen />
        </SafeAreaView>
    )
};

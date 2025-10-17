import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import Favorit from "@/screen/main/favorit";
import Home from "@/screen/main/home";
// import DetailScreen from "@/components/main/detail-screen";
import { useBottomSheet } from "@/context/ButtonSheetContext";

export type HomeStackParamList = {
    Home: undefined;
    Favorit: undefined;
    Detail: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const hiddenRoutes = ["Favorit", "Detail"];

export default function HomeNavigator() {
    const navigation = useNavigation();
    const route = useRoute();
    const isOpen = useBottomSheet();


    React.useEffect(() => {
        const parentNav = navigation.getParent();
        parentNav?.setOptions({
            tabBarStyle: isOpen
                ? { display: "none" }
                : {
                    position: "absolute",
                    backgroundColor: "#fff",
                    height: 60,
                    borderTopWidth: 0,
                    elevation: 8,
                },
        });
    }, [isOpen]);

    useFocusEffect(
        React.useCallback(() => {
            const parentNav = navigation.getParent();
            if (!parentNav) return;

            const currentRoute = route.name;

            if (hiddenRoutes.includes(currentRoute)) {
                parentNav.setOptions({ tabBarStyle: { display: "none" } });
            } else {
                parentNav.setOptions({
                    tabBarStyle: {
                        position: "absolute",
                        backgroundColor: "#fff",
                        height: 60,
                        borderTopWidth: 0,
                        elevation: 8,
                    },
                });
            }
        }, [navigation, route])
    );

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Favorit" component={Favorit} />
            {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
        </Stack.Navigator>
    );
}

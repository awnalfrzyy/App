import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorit from "@/screen/main/favorit";
import Home from "@/screen/main/home";
import { useNavigation } from "@react-navigation/native";

export type HomeStackParamList = {
    Home: undefined;
    Favorit: undefined;
}

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        const unsubscribe = navigation.addListener("state", (e) => {
            const route = e.data?.state?.routes?.[e.data.state.index];
            const currentRoute = route?.name;

            // Sembunyiin tab bar pas masuk ke BookAnAppointment
            navigation.getParent()?.setOptions({
                tabBarStyle:
                    currentRoute === "Favorit"
                        ? { display: "none" }
                        : { position: "absolute", backgroundColor: "#fff", height: 60 },
            });
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Favorit" component={Favorit} />
        </Stack.Navigator>
    );
}
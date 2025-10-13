import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingNavigator from "./Onboarding-navigator";
import TabNavigator from "../navigator/Tab-navigator";

export type RootStackParamList = {
    Onboarding: undefined;
    App: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    const [isFinishedOnboarding, setIsFinishedOnboarding] = useState(false);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!isFinishedOnboarding ? (
                    <Stack.Screen name="Onboarding">
                        {(props) => (
                            <OnboardingNavigator
                                {...props}
                                onFinish={() => setIsFinishedOnboarding(true)} // << handler dikirim
                            />
                        )}
                    </Stack.Screen>
                ) : (
                    <Stack.Screen name="App" component={TabNavigator} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
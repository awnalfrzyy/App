import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenStepOne from "@/components/onboarding/Screen-step-one";

export type OnboardingStackParamList = {
    StepOne: undefined;

}

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export default function OnboardingNavigator({ onFinish }: { onFinish: () => void }) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StepOne">
                {(props) => <ScreenStepOne {...props} onFinish={onFinish} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
};

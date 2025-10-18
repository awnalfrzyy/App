import React from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Button from "./Button";

interface TabsProps {
    title?: string;
    leftIcon: React.ReactNode; // wajib
    rightIcon?: React.ReactNode;
    onRightPress?: () => void;
}

export default function Tabs({
    title,
    leftIcon,
    rightIcon,
    onRightPress,
}: TabsProps) {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <View
            className="bg-white flex-row items-center justify-between px-4 py-3 border-b border-gray-200 absolute w-full z-10"
            style={{ top: insets.top }}
        >
            <Button
                variant="secondary"
                className="rounded-full bg-transparent"
                onPress={() => navigation.goBack()}
            >
                {leftIcon}
            </Button>

            {title ? (
                <Text className="text-base font-semibold text-black">{title}</Text>
            ) : (
                <View />
            )}

            {rightIcon ? (
                <Button
                    variant="secondary"
                    className="rounded-full"
                    onPress={onRightPress}
                >
                    {rightIcon}
                </Button>
            ) : (
                <View style={{ width: 40 }} />
            )}
        </View>
    );
}

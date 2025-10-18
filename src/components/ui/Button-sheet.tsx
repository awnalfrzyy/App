import React, { useEffect, useRef } from 'react';
import { View, StyleProp, ViewStyle, TouchableWithoutFeedback, Animated, Dimensions } from 'react-native';
import { Easing } from 'react-native-reanimated';

const screenHeight = Dimensions.get('window').height;
interface BottomSheetProps {
    isOpen: boolean;
    toggleSheet: () => void;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, toggleSheet, children, style }) => {
    const translateY = useRef(new Animated.Value(screenHeight)).current;

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: isOpen ? 0 : screenHeight,
            duration: 450,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: true,
        }).start();

    }, [isOpen, translateY]);

    return (
        <View
            style={[
                {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.6)' : 'transparent',
                    justifyContent: 'flex-end',
                    zIndex: 9999,
                },
                style,
            ]}
        >
            <TouchableWithoutFeedback onPress={toggleSheet}>
                <View style={{ flex: 1 }} />
            </TouchableWithoutFeedback>

            <View
                style={{
                    backgroundColor: '#fff',
                    borderColor: "#00764F3F",
                    borderTopWidth: 2,
                    borderLeftWidth: 2,
                    borderRightWidth: 2,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    padding: 20,
                    minHeight: 300,
                }}
            >
                <TouchableWithoutFeedback onPress={toggleSheet}>
                    <View className="w-20 h-2 bg-neutral-200 rounded-full self-center -mt-4 mb-4" />
                </TouchableWithoutFeedback>
                {children}
            </View>
        </View>

    );
};

export default BottomSheet;

import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../ui/Button';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { OnboardingStackParamList } from '@/navigator/Onboarding-navigator'

type Props = NativeStackScreenProps<OnboardingStackParamList, 'StepOne'> & {
    onFinish: () => void;
};


export default function ScreenStepOne({ navigation, route, onFinish }: Props) {
    return (
        <SafeAreaView className="flex-1">
            <ImageBackground
                source={require('@/assets/image/pexels-ron-lach-8429814.jpg')}
                resizeMode="cover"
                className="flex-1 w-full h-full"
            >
                {/* overlay gelap */}
                <View className="absolute inset-0 bg-black/50" />

                {/* content */}
                <View className="flex-1 justify-between p-4">
                    {/* Text di tengah */}
                    <View className="flex-1 justify-center">
                        <Text className="text-7xl text-neutral-50 text-start">
                            Temukan cita rasa kopi terbaik dari pilihan produk kami.
                        </Text>
                    </View>

                    {/* Button di bawah */}
                    <View className="flex flex-col gap-2">
                        <Button
                            variant="outline"
                            className="rounded-full "
                            onPress={onFinish}
                        >
                            Masuk Toko
                        </Button>
                        <Button variant="sosial" iconType="google" className='rounded-full'>
                            Continue with Google
                        </Button>

                    </View>

                </View>
                <View className="flex-row justify-center items-center mt-0 mb-6">
                    <Text className="text-gray-500 text-sm">Already have an account? </Text>
                    <TouchableOpacity>
                        <Text className="text-blue-500 text-sm font-semibold">Sign In</Text>
                    </TouchableOpacity>
                </View>

                <Text className="text-center text-sm text-gray-400 leading-6 w-3/4 self-center mb-4">
                    By signing up or logging in, I accept the app’s{' '}
                    <Text className="text-blue-500">Terms of Service</Text> and{' '}
                    <Text className="text-blue-500">Privacy Policy</Text>.
                </Text>
            </ImageBackground>
        </SafeAreaView>
    );
}


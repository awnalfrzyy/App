import { View, Text } from 'react-native'

interface HeaderProps {
    title: string;
    className?: string;
}

export default function Header({ title, className }: HeaderProps) {
    return (
        <View className='text-start w-full'>
            <Text className='font-bold text-black text-4xl'>{title}</Text>
        </View>
    )
};

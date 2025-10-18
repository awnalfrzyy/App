import { View, Text } from 'react-native'
import Skeleton from './skeleton';

interface HeaderProps {
    title: string;
    className?: string;
    isLoading?: boolean;
}

export default function Header({ title, className, isLoading = false }: HeaderProps) {
    if (isLoading) {
        return (
            <View className=''>
                <Skeleton className='w-40 h-10' />
            </View>
        );
    }

    return (
        <View className='text-start w-full'>
            <Text className='font-bold text-black text-4xl'>{title}</Text>
        </View>
    )
};

import React, { useRef, useMemo, forwardRef, useImperativeHandle } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export type BottomDrawerRef = {
    open: () => void;
    close: () => void;
};

const BottomDrawer = forwardRef<BottomDrawerRef>((_, ref) => {
    const sheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['30%', '60%'], []);

    useImperativeHandle(ref, () => ({
        open: () => sheetRef.current?.expand(),
        close: () => sheetRef.current?.close(),
    }));

    return (
        <BottomSheet
            ref={sheetRef}
            index={-1}
            snapPoints={snapPoints}
            enablePanDownToClose
            backgroundStyle={{ borderTopLeftRadius: 24, borderTopRightRadius: 24, backgroundColor: '#fff' }}
        >
            <View style={{ padding: 20 }}>
                <Text className="text-xl font-bold mb-4">Menu Drawer Bawah</Text>
                <TouchableOpacity>
                    <Text className="text-base mb-2">☕ Pesanan Saya</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="text-base mb-2">🧾 Riwayat Transaksi</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="text-base mb-2">⚙️ Pengaturan</Text>
                </TouchableOpacity>
            </View>
        </BottomSheet>
    );
});

export default BottomDrawer;

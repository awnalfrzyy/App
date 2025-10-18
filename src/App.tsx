import React from 'react';
import RootNavigator from '@/navigator/Root-navigator';
import { BottomSheetProvider } from './context/ButtonSheetContext';
import "@/styles/global.css"
import 'react-native-reanimated';



export default function App() {
  return (
    <BottomSheetProvider>
      <RootNavigator />
    </BottomSheetProvider>
  );
}

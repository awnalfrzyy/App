import React from 'react';
import RootNavigator from '@/navigator/Root-navigator';
import { BottomSheetProvider } from './context/ButtonSheetContext';
import { NavigationContainer } from '@react-navigation/native';
import "@/styles/global.css"
import 'react-native-reanimated';



export default function App() {
  return (
    <BottomSheetProvider>
      <RootNavigator />
    </BottomSheetProvider>


  );
}

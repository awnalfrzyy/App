import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Home, Calendar, Clock, User } from 'lucide-react-native';

import Homes from '@/screen/main/home';
import Menu from '@/screen/main/menu';
import Notification from '@/screen/main/notificatrion';
import Profil from '@/screen/main/profil';

export type TabParamList = {
    Homes: undefined;
    Menu: undefined;
    Notification: undefined;
    Profil: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#00764F',
                tabBarInactiveTintColor: '#d9d9d9',
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#fff',
                    height: 60 + insets.bottom, // biar aman di semua device
                    paddingBottom: insets.bottom, // amanin area gesture
                    paddingTop: 6,
                    borderTopWidth: 1,
                    borderTopColor: '#E5E5E5',
                    elevation: 0,
                    shadowOpacity: 0,
                },
                tabBarIcon: ({ color }) => {
                    let IconComponent: React.FC<{ color: string; size?: number }> = Home;

                    switch (route.name) {
                        case 'Homes':
                            IconComponent = Home;
                            break;
                        case 'Menu':
                            IconComponent = Calendar;
                            break;
                        case 'Notification':
                            IconComponent = Clock;
                            break;
                        case 'Profil':
                            IconComponent = User;
                            break;
                    }

                    return <IconComponent color={color} size={24} />;
                },
            })}
        >
            <Tab.Screen
                name="Homes"
                component={Homes}
                options={({ route }) => {
                    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
                    const HIDDEN_TABS = ['BAA', 'DoctorDetail', 'ChatDetail', 'Payment'];

                    if (HIDDEN_TABS.includes(routeName)) {
                        return {
                            tabBarStyle: { display: 'none' },
                        };
                    }

                    return {};
                }}
            />
            <Tab.Screen name="Menu" component={Menu} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Profil" component={Profil} />
        </Tab.Navigator>
    );
};

export default TabNavigator;

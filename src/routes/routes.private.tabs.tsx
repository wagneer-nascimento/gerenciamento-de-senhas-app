import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RoutesPrivateNavigationTabParamsList } from '../models/RoutesPrivateNavigationTabParamsList';
import { COLORS, FONTS } from '../theme';
import Person from '../pages/Person';
import HomeTab from '../pages/Home';
import { IconsAntDesigns, IconsMaterialCommunityIcons, IconsOcticons } from '../components/icons/Icons';
import GeneratorPassword from '../pages/GeneratorPassword';

const Tab = createBottomTabNavigator<RoutesPrivateNavigationTabParamsList>();

export default function RoutesTab() {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.ORANGE,
                tabBarStyle: {
                    position: "absolute",
                    alignItems: "center",
                    justifyContent: "center",
                }
            }}>

            <Tab.Screen
                options={{
                    tabBarLabel: () => { return null },
                    tabBarIcon: ({ size, color, focused }) => (
                        <IconsOcticons name="home" size={size} color={color} />
                    ),
                }}
                name="HomeTab" component={HomeTab}
            />

            <Tab.Screen
                options={{
                    headerShown: true,
                    title: 'Gerador de Senhas',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: FONTS.ROBOTO_BOLD,
                        fontSize: 18,
                        color: COLORS.GRAY
                    },
                    tabBarLabel: () => { return null },
                    tabBarIcon: ({ size, color, focused }) => (
                        <IconsMaterialCommunityIcons name="shield-key-outline" focused={focused} size={size} color={color} />
                    ),
                }}
                name="GeneratorPassword" component={GeneratorPassword} />

            <Tab.Screen
                options={{
                    headerShown: true,
                    title: 'Meu Perfil',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: FONTS.ROBOTO_BOLD,
                        fontSize: 18,
                        color: COLORS.GRAY
                    },
                    tabBarLabel: () => { return null },
                    tabBarIcon: ({ size, color, focused }) => (
                        <IconsAntDesigns name="user" focused={focused} size={size} color={color} />
                    ),
                }}
                name="Person" component={Person} />

        </Tab.Navigator>
    )
}
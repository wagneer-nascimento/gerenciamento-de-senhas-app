import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RoutesPrivateNavigationTabParamsList } from '../models/RoutesPrivateNavigationTabParamsList';
import { COLORS } from '../theme';
import Person from '../pages/Person';
import { useAuth } from '../auth/auth';
import HomeTab from '../pages/Home';
import { IconsOcticons } from '../components/icons/Icons';
import AddAccount from '../pages/AddAccount';

const Tab = createBottomTabNavigator<RoutesPrivateNavigationTabParamsList>();

export default function RoutesTab() {
    const { user } = useAuth();

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

         {/**   <Tab.Screen
                options={{
                    tabBarLabel: () => { return null },
                    tabBarIcon: ({ size, color, focused }) => (
                        <IconsOcticons name="diff-added" size={size} color={color} />
                    ),
                }}
                name="AddAccount" component={AddAccount}
            />
 */}

            {/**<Tab.Screen
                options={{
                    headerShown: true,
                    title: 'Meu Perfil',
                    headerTitleAlign: 'center',
                    tabBarLabel: () => { return null },

                }}
                name="Person" component={Person} />
            */}
        </Tab.Navigator>
    )
}
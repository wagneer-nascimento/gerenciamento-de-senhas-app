import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutesPrivateNavigationBetwensScreensParamsList } from "../models/RoutesPrivateNavigationBetwensScreensParamsList";
import RoutesTab from "./routes.private.tabs";
import AddAccount from "../pages/Account/AddAccount";
import { COLORS, FONTS } from "../theme";
import ViewAccount from "../pages/Account/ViewAccount";
import SearchByTitleOrDescription from "../pages/Account/SearchByTitleOrDescription";

const Private = createNativeStackNavigator<RoutesPrivateNavigationBetwensScreensParamsList>();

export default function RoutesPrivateScreens() {
    return (
        <Private.Navigator
            screenOptions={{
                headerShown: false,
            }}>

            <Private.Screen
                options={{
                    headerShown: false,
                }}
                name="Home" component={RoutesTab}
            />

            <Private.Screen
                options={{
                    headerShown: true,
                    title: "Adicionar Conta",
                    headerBackTitleVisible: false,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: FONTS.ROBOTO_BOLD,
                        fontSize: 18,
                        color: COLORS.GRAY
                    }
                }}
                name="AddAccount" component={AddAccount}
            />

            <Private.Screen
                options={{
                    headerShown: true,
                    title: "Adicionar Conta",
                    headerBackTitleVisible: false,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: FONTS.ROBOTO_BOLD,
                        fontSize: 18,
                        color: COLORS.GRAY
                    }
                }}
                name="ViewAccount" component={ViewAccount}
            />

            <Private.Screen
                options={{
                    headerShown: true,
                    title: "Consultar Conta",
                    headerBackTitleVisible: false,
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: FONTS.ROBOTO_BOLD,
                        fontSize: 18,
                        color: COLORS.GRAY
                    }
                }}
                name="SearchByTitleOrDescription" component={SearchByTitleOrDescription}
            />

        </Private.Navigator>
    )
}
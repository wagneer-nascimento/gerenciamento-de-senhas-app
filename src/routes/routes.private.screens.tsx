import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutesPrivateNavigationBetwensScreensParamsList } from "../models/RoutesPrivateNavigationBetwensScreensParamsList";
import RoutesTab from "./routes.private.tabs";

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

        </Private.Navigator>
    )
}
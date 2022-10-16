import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutesNoPrivateNavigationBetwensScreensParamsList } from "../models/RoutesNoPrivateNavigationBetwensScreensParamsList";
import SignIn from "../pages/SignIn";

const Private = createNativeStackNavigator<RoutesNoPrivateNavigationBetwensScreensParamsList>();

export default function RoutesPrivate() {
    return (
        <Private.Navigator
            screenOptions={{
                headerShown: false,
            }}>

            <Private.Screen
                options={{
                    headerShown: false,
                }}
                name="SignIn" component={SignIn}
            />

        </Private.Navigator>
    )
}
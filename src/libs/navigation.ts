import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesNoPrivateNavigationBetwensScreensParamsList } from "../models/RoutesNoPrivateNavigationBetwensScreensParamsList";
import { RoutesPrivateNavigationBetwensScreensParamsList } from "../models/RoutesPrivateNavigationBetwensScreensParamsList";
import { RoutesPrivateNavigationTabParamsList } from "../models/RoutesPrivateNavigationTabParamsList";

export function navigationNoPrivate() {
    const navigation = useNavigation<
        NativeStackNavigationProp<
            RoutesNoPrivateNavigationBetwensScreensParamsList>>();

    return navigation;
}

export function navigationPrivateScreens() {
    const navigation = useNavigation<
        NativeStackNavigationProp<
            RoutesPrivateNavigationBetwensScreensParamsList>>();

    return navigation;
}

export function navigationAll() {
    const navigation = useNavigation<
        NativeStackNavigationProp<
            RoutesNoPrivateNavigationBetwensScreensParamsList
            & RoutesPrivateNavigationTabParamsList
            & RoutesPrivateNavigationBetwensScreensParamsList
        >>();

    return navigation;
}
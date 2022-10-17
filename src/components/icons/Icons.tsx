import React from "react";
import {
    IconOcticons,
    IconIonicons,
    IconAntDesign,
    IconMaterialCommunityIcons,
} from "./styles";

interface Props {
    size: number;
    color: string;
    name?: any;
    focused?: boolean;
}

export function IconsIonicons({ color, size, name, focused }: Props) {
    return (
        <IconIonicons name={name} size={size} color={color} />
    )
}

export function IconsOcticons({ color, size, name }: Props) {
    return (
        <IconOcticons name={name} size={size} color={color} />
    )
}

export function IconsAntDesigns({ color, size, name }: Props) {
    return (
        <IconAntDesign name={name} size={size} color={color} />
    )
}

export function IconsMaterialCommunityIcons({ color, size, name }: Props) {
    return (
        <IconMaterialCommunityIcons name={name} size={size} color={color} />
    )
}



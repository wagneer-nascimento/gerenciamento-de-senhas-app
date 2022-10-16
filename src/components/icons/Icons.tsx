import React from "react";
import { useAuth } from "../../auth/auth";
import {
    IconOcticons,
    IconIonicons,
    ImageProfile,
    ContainerImageProfile,
    PrimeiraLetraDoNome,
    IconAntDesign,
} from "./styles";

interface Props {
    size: number;
    color: string;
    name?: any;
    focused?: boolean;
    foto?: string;
    backgroundCor?: string;
    nomeUser?: string;
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

export function IconProfile({ color, size, foto, backgroundCor, nomeUser }: Props) {

    return (
        <>
            {foto ?
                <ImageProfile
                    style={{
                        width: size,
                        height: size,
                        borderColor: color,
                    }}
                    source={{ uri: foto }} />
                :
                <ContainerImageProfile
                    style={{
                        width: size,
                        height: size,
                        borderColor: color,
                        backgroundColor: backgroundCor,
                    }}
                >
                    {nomeUser &&
                        <PrimeiraLetraDoNome
                        >{nomeUser.substring(0, 1)}</PrimeiraLetraDoNome>
                    }
                </ContainerImageProfile>
            }
        </>
    )
}

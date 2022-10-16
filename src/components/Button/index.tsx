import React from 'react';
import { ActivityIndicator, TouchableOpacityProps, View } from 'react-native';
import { COLORS } from '../../theme';
import {
    ButtonText,
    Container,
    Icon,
    ContainerText,
    ContainerIcon
} from './styles';

const BACKGROUND_COR = {
    WHITE: {
        cor: COLORS.WHITE,
    },
    ORANGE: {
        cor: COLORS.ORANGE,
    }
}

const ICONS = {
    CAMERA: {
        name: "camera",
    },
    CNH: {
        name: "vcard",
    },
    QRCODE: {
        name: "qrcode"
    },
    LAPTOP: {
        name: "laptop"
    }
}

const ICONS_COR = {
    WHITE: {
        corIcon: COLORS.WHITE,
    },
    ORANGE: {
        corIcon: COLORS.ORANGE,
    },
    GRAY_PLACEHOLDER: {
        corIcon: COLORS.PLACEHOLDER,
    }
}

const BORDER_COR = {
    WHITE: {
        border: COLORS.WHITE,
    },
    ORANGE: {
        border: COLORS.ORANGE,
    }
}

const TEXT_COR = {
    WHITE: {
        text: COLORS.WHITE,
    },
    GRAY_PLACEHOLDER: {
        text: COLORS.PLACEHOLDER,
    },
    ORANGE: {
        text: COLORS.ORANGE,
    }
}
interface ButtonProps extends TouchableOpacityProps {
    children: string;
    loading?: boolean;
    backgroundCor?: "WHITE" | "ORANGE";
    noBackgroundCor?: boolean;
    borderCor?: "WHITE" | "ORANGE";
    textCor?: "WHITE" | "GRAY_PLACEHOLDER" | "ORANGE";
    icon?: "FACEBOOK" | "GOOGLE" | "";
    iconCor?: "WHITE" | "ORANGE";
}

export default function Button({
    children,
    loading,
    backgroundCor = "ORANGE",
    noBackgroundCor = false,
    borderCor = "ORANGE",
    textCor = "WHITE",
    icon = "",
    iconCor = "WHITE",
    ...rest }: ButtonProps) {
    const { cor } = BACKGROUND_COR[backgroundCor];
    const { border } = BORDER_COR[borderCor];
    const { text } = TEXT_COR[textCor];
    const { corIcon } = ICONS_COR[iconCor];

    return (
        <Container
            border={border}
            cor={cor}
            noBackgroundCor={noBackgroundCor}
            {...rest}>
            {loading ?
                <ActivityIndicator size="large" color="#FFF" />
                :
                <ContainerText>
                    {icon ?
                        <ContainerIcon>
                            <Icon name={icon == "GOOGLE" ? "logo-google" : icon} color={corIcon} />
                        </ContainerIcon>
                        :
                        <ContainerIcon />
                    }
                    <ButtonText cor={text}>
                        {children}
                    </ButtonText>
                    <ContainerIcon />
                </ContainerText>
            }
        </Container>
    );
} 
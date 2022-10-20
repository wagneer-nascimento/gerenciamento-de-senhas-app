import React from 'react';
import { TextInputProps } from 'react-native';
import { COLORS } from '../../theme';
import { IconsIonicons } from '../icons/Icons';
import { ButtonClickIcon, Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
    name: string;
    inputRef?: any;
    enableIconPassword?: boolean;
    onClickIconPassword?(): void;
    secureTextEntry?: boolean;
}

export default function Input({ name, inputRef, onClickIconPassword, enableIconPassword = false, secureTextEntry = false, ...rest }: InputProps) {

    return (
        <Container>
            <TextInput
                ref={inputRef}
                keyboardAppearance="default"
                placeholderTextColor="#B6B7B7"
                secureTextEntry={secureTextEntry}
                {...rest}
            />
            {enableIconPassword &&
                <ButtonClickIcon onPress={onClickIconPassword}>
                    <IconsIonicons name={secureTextEntry ? "ios-eye" : "ios-eye-off"} color={COLORS.BLACK} size={25} />
                </ButtonClickIcon>
            }
        </Container>
    )
}


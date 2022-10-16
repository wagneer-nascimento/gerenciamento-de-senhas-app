import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
    name: string;
    inputRef?: any;
}

export default function Input({ name, inputRef, ...rest }: InputProps) {
    return (
        <Container>
            <TextInput
                ref={inputRef}
                keyboardAppearance="default"
                placeholderTextColor="#B6B7B7"

                {...rest}
            />
        </Container>

    )
}


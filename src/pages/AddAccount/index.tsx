import React, { useState } from "react";
import { ScrollView } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { Container, ContainerButton, ContainerInput, Label, Title } from "./styles";

export default function AddAccount() {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <Container>
            <ScrollView>
                <Title>Adicionar Conta</Title>
                <ContainerInput>
                    <Label>Nome da conta</Label>
                    <Input
                        onTouchStart={() => { }}
                        name="" />
                </ContainerInput>

                <ContainerInput>
                    <Label>Usuário</Label>
                    <Input
                        onTouchStart={() => { }}
                        name="" />
                </ContainerInput>

                <ContainerInput>
                    <Label>Senha</Label>
                    <Input
                        onTouchStart={() => { }}
                        name="" />
                </ContainerInput>

                <ContainerInput>
                    <Label>Url do site ou Nome do aplicativo</Label>
                    <Input
                        onTouchStart={() => { }}
                        name="" />
                </ContainerInput>

            </ScrollView>

            <ContainerButton>
                <Button
                    loading={loading}
                    onPress={() => { }}>
                   Salvar
                </Button>
            </ContainerButton>
        </Container>
    )
}
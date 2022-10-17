import React, { useState } from "react";
import { ScrollView } from "react-native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {
    Container,
    ContainerButton,
    ContainerInput,
    Content,
    Label
} from "./styles";

export default function AddAccount() {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <Container>
            <ScrollView>
                <Content>
                    <ContainerInput>
                        <Label>Título</Label>
                        <Input
                            onTouchStart={() => { }}
                            placeholder="Ex: Gmail"
                            name="" />
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Login / Usuário</Label>
                        <Input
                            onTouchStart={() => { }}
                            placeholder="Ex: usuario@gmail.com"
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
                            placeholder="Ex: https://www.gmail.com"
                            name="" />
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Descrição</Label>
                        <Input
                            onTouchStart={() => { }}
                            placeholder="Ex: minha conta de email"
                            name="" />
                    </ContainerInput>
                </Content>
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
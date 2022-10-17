import React, { useState } from "react";
import { ScrollView, StatusBarStyle, StatusBar, } from "react-native";
import Button from "../../../components/Button";
import ButtonFab from "../../../components/ButtonFab";
import Input from "../../../components/Input";
import { navigationPrivateScreens } from "../../../libs/navigation";
import {
    Container,
    ContainerButton,
    ContainerInput,
    Content,
    Label
} from "./styles";

export default function ViewAccount() {
    const [loading, setLoading] = useState<boolean>(false);
    const [editFields, setEditFields] = useState<boolean>(false);
    const navigation = navigationPrivateScreens();

    navigation.setOptions({
        headerTitle: "Amazon"
    })

    return (
        <Container>
            <ScrollView>
                <Content>
                    <ContainerInput>
                        <Label>Título</Label>
                        <Input
                            editable={editFields}
                            name="" />
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Login / Usuário</Label>
                        <Input
                            editable={editFields}
                            name="" />
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Senha</Label>
                        <Input
                            editable={editFields}
                            name="" />
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Url do site ou Nome do aplicativo</Label>
                        <Input
                            editable={editFields}
                            name="" />
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Descrição</Label>
                        <Input
                            editable={editFields}
                            name="" />
                    </ContainerInput>
                </Content>
            </ScrollView>

            {editFields &&
                <ContainerButton>
                    <Button
                        loading={loading}
                        onPress={() => { }}>
                        Salvar
                    </Button>
                </ContainerButton>
            }

            <ButtonFab type="EDIT" onPress={() => {
                setEditFields(!editFields);
            }} />

        </Container>
    )
}
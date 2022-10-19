import React, { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useAuth } from "../../../auth/auth";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { iSempty } from "../../../libs/functions";
import { Account } from "../../../models/Account";
import { addAccount } from "../../../services/account";
import {
    Container,
    ContainerButton,
    ContainerInput,
    Content,
    Label
} from "./styles";

export default function AddAccount() {
    const { user } = useAuth();
    const [loading, setLoading] = useState<boolean>(false);
    const [titulo, setTitulo] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [url, setUrl] = useState<string>("");

    async function handleAddAcount() {
        setLoading(true);
        try {

            if (iSempty(titulo) || iSempty(login) || iSempty(senha)) {
                return Alert.alert("Opss!!", "Titulo, login e senha são obrigatórios.")
            }

            const data: Account = {
                titulo,
                login,
                idUsuario: user.id,
                senha,
                descricao,
                url,
            }

            const response = await addAccount(data);
            Alert.alert("Sucesso", "Conta criada com sucesso!")
            cleanFields();
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message)

        } finally {
            setLoading(false);
        }
    }

    function cleanFields() {
        setTitulo("");
        setLogin("");
        setSenha("");
        setDescricao("");
        setUrl("");
    }

    return (
        <Container>
            <ScrollView>
                <Content>
                    <ContainerInput>
                        <Label>Título</Label>
                        <Input
                            value={titulo}
                            onChangeText={setTitulo}
                            placeholder="Ex: Gmail"
                            name="titulo" />
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Login / Usuário</Label>
                        <Input
                            value={login}
                            onChangeText={setLogin}
                            placeholder="Ex: usuario@gmail.com"
                            name="login" />
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Senha</Label>
                        <Input
                            value={senha}
                            onChangeText={setSenha}
                            name="senha" />
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Url do site ou Nome do aplicativo (Opcional)</Label>
                        <Input
                            value={url}
                            onChangeText={setUrl}
                            placeholder="Ex: https://www.gmail.com"
                            name="url" />
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Descrição (Opcional)</Label>
                        <Input
                            value={descricao}
                            onChangeText={setDescricao}
                            placeholder="Ex: minha conta de email"
                            name="descricao" />
                    </ContainerInput>
                </Content>
            </ScrollView>

            <ContainerButton>
                <Button
                    loading={loading}
                    onPress={() => { handleAddAcount() }}>
                    Salvar
                </Button>
            </ContainerButton>
        </Container>
    )
}
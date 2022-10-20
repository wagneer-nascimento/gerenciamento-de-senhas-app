import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import Button from "../../../components/Button";
import ButtonFab from "../../../components/ButtonFab";
import { IconsMaterialCommunityIcons } from "../../../components/icons/Icons";
import Input from "../../../components/Input";
import { copyToClipboard, iSempty } from "../../../libs/functions";
import { navigationPrivateScreens } from "../../../libs/navigation";
import { Account } from "../../../models/Account";
import { deleteAccount, editAccount } from "../../../services/account";
import { COLORS } from "../../../theme";
import {
    ButtonClickIcon,
    Container,
    ContainerButton,
    ContainerInput,
    ContainerInputIcon,
    Content,
    Label,
    PositionButtonRemoveAccount
} from "./styles";

export default function ViewAccount() {
    const [loading, setLoading] = useState<boolean>(true);
    const [editFields, setEditFields] = useState<boolean>(false);
    const navigation = navigationPrivateScreens();
    const route = useRoute();
    const [titulo, setTitulo] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

    useEffect(() => {
        async function loadingAccount() {
            await addInfoFields(route.params as Account);
            setLoading(false);

        }
        loadingAccount();
    }, []);

    async function addInfoFields(data: Account) {
        navigation.setOptions({
            headerTitle: data.titulo
        });
        setTitulo(data.titulo);
        setLogin(data.login);
        setSenha(data.senha);
        setDescricao(data.descricao);
        setUrl(data.url);
        setId(data.id)
    }

    async function handleEditAcount() {
        setLoading(true);
        try {

            if (iSempty(titulo) || iSempty(login) || iSempty(senha)) {
                return Alert.alert("Opss!!", "Titulo, login e senha são obrigatórios.")
            }

            const data: Account = {
                id,
                titulo,
                login,
                senha,
                descricao,
                url,
            }

            const response = await editAccount(data);
            Alert.alert("Sucesso", "Conta atualizada com sucesso!")

        } catch (error: any) {
            Alert.alert("Error", error.response.data.message)

        } finally {
            setLoading(false);
        }
    }

    function confirmDelete() {
        Alert.alert(
            "Exclusão de conta !",
            "Clique em confirmar para excluir esse item.",
            [
                {
                    text: "Cancelar",
                    onPress: () => { },
                    style: "cancel"
                },
                {
                    text: "Confirmar",
                    onPress: () => handleDeleteAccount(),
                    style: "destructive"
                }
            ]
        );
    }

    async function handleDeleteAccount() {
        try {

            const response = await deleteAccount(id);
            Alert.alert("Sucesso", "Conta excluída com sucesso!")

        } catch (error: any) {
            Alert.alert("Error", error.response.data.message)
        }
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
                            editable={editFields}
                            name="titulo" />
                    </ContainerInput>
                    <ContainerInputIcon>
                        <View style={{
                            flex: 1,
                        }}>
                            <Label>Login / Usuário</Label>
                            <Input
                                value={login}
                                onChangeText={setLogin}
                                editable={editFields}
                                name="login" />
                        </View>
                        <ButtonClickIcon onPress={() => {
                            copyToClipboard(login)
                        }}>
                            <IconsMaterialCommunityIcons name="content-copy" size={28} color={COLORS.ORANGE} />
                        </ButtonClickIcon>
                    </ContainerInputIcon>

                    <ContainerInputIcon>
                        <View style={{
                            flex: 1,
                        }}>
                            <Label>Senha</Label>
                            <Input
                                enableIconPassword={true}
                                onClickIconPassword={() => setSecureTextEntry(!secureTextEntry)}
                                secureTextEntry={secureTextEntry}
                                value={senha}
                                onChangeText={setSenha}
                                editable={editFields}
                                name="senha" />
                        </View>
                        <ButtonClickIcon onPress={() => {
                            copyToClipboard(senha)
                        }}>
                            <IconsMaterialCommunityIcons name="content-copy" size={28} color={COLORS.ORANGE} />
                        </ButtonClickIcon>
                    </ContainerInputIcon>

                    <ContainerInput>
                        <Label>Url do site ou Nome do aplicativo</Label>
                        <Input
                            value={url}
                            onChangeText={setUrl}
                            editable={editFields}
                            name="url" />
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Descrição</Label>
                        <Input
                            value={descricao}
                            onChangeText={setDescricao}
                            editable={editFields}
                            name="descricao" />
                    </ContainerInput>
                </Content>
            </ScrollView>

            {editFields &&
                <ContainerButton>
                    <Button
                        loading={loading}
                        onPress={() => { handleEditAcount() }}>
                        Salvar
                    </Button>
                </ContainerButton>
            }

            <PositionButtonRemoveAccount>
                <ButtonFab type="DELETE" onPress={() => {
                    confirmDelete()
                }} />
            </PositionButtonRemoveAccount>

            <ButtonFab type="EDIT" onPress={() => {
                setEditFields(!editFields);
            }} />

        </Container>
    )
}
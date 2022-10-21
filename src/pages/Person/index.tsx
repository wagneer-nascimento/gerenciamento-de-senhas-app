import React, { useState } from "react";
import { ActivityIndicator, Alert, ScrollView } from "react-native";
import { useAuth } from "../../auth/auth";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { deleteUser } from "../../services/user";
import { COLORS } from "../../theme";
import {
    Container,
    ContainerButton,
    Label,
    Title,
    ContainerInput
} from "./styles";

export default function Person() {
    const { signOut, user } = useAuth();
    const [loading, setLoading] = useState<boolean>(false);

    function confirmDelete() {
        Alert.alert(
            "Exclusão da sua conta !",
            "Clique em confirmar para excluir essa conta.",
            [
                {
                    text: "Cancelar",
                    onPress: () => { },
                    style: "cancel"
                },
                {
                    text: "Confirmar",
                    onPress: () => handleDeleteUser(),
                    style: "destructive"
                }
            ]
        );
    }

    async function handleDeleteUser() {
        setLoading(true);

        try {

            const response = await deleteUser(user.id);
            Alert.alert("Sucesso", "Conta excluída com sucesso.");
            signOut();
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message);

        } finally {
            setLoading(false);
        }
    }

    return (
        <ScrollView style={{
            backgroundColor: COLORS.WHITE,
        }}>
            {loading ?
                <ActivityIndicator size="large" color={COLORS.ORANGE} />
                :
                <Container>

                    <Title>Meus dados</Title>

                    <Label>Nome</Label>
                    <ContainerInput>
                        <Input editable={false} name="" value={user.nome} />
                    </ContainerInput>

                    <Label>Email</Label>
                    <ContainerInput>
                        <Input editable={false} name="" value={user.email} />
                    </ContainerInput>

                    <ContainerButton>
                        <Button
                            onPress={() => signOut()}
                            backgroundCor="WHITE"
                            textCor="ORANGE">Sair</Button>
                    </ContainerButton>

                    <ContainerButton>
                        <Button
                            onPress={() => confirmDelete()}
                            backgroundCor="WHITE"
                            textCor="ORANGE">EXCLUIR MINHA CONTA</Button>
                    </ContainerButton>
                </Container>
            }
        </ScrollView>
    )

}
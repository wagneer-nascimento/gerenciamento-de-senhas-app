import React, { useState } from "react";
import { ActivityIndicator, Alert, ScrollView } from "react-native";
import { useAuth } from "../../auth/auth";
import Button from "../../components/Button";
import Input from "../../components/Input";
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
                            // onPress={() => signOut()}
                            backgroundCor="WHITE"
                            textCor="ORANGE">EXCLUIR MINHA CONTA</Button>
                    </ContainerButton>
                </Container>
            }
        </ScrollView>
    )

}
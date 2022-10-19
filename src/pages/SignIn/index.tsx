import React, { useCallback, useEffect, useRef, useState } from "react";
import cadeado from "../../assets/cadeado.jpeg";
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes, User, } from '@react-native-google-signin/google-signin';
import { Container, ContainerButton, Title, BackgroundColor, SubTitle, Content, ContainerData, ContainerIndex, Index, BackgroundIndex } from "./styles";
import { Alert, FlatList, Image, ImageBackground, Platform } from "react-native";
import { useAuth } from "../../auth/auth";
import Button from "../../components/Button";
import api from "../../services/api";

if (Platform.OS == "android") {
    GoogleSignin.configure();
}

export default function SignIn() {
    const [index, setIndex] = useState<number>(0);
    const { signIn } = useAuth();
    const [loading, setLoading] = useState<boolean>(false);

    async function sinoutGoogle() {
        await GoogleSignin.signOut();
    }

    //https://avatars.githubusercontent.com/u/69991919?s=96&v=4
    async function handleSignIn() {
        setLoading(true);
        await signIn({
            email: "joseferreira.nasc@live.com.br",
            nome: "José Ferreira",
        }).catch((error) => {
            Alert.alert("Error", error.response.data.message);

        }).finally(() => {
            setLoading(false);
        })
    }

    async function loginGoogle() {
        setLoading(true);
        try {
            await GoogleSignin.hasPlayServices();
            const { idToken, serverAuthCode, user, scopes } = await GoogleSignin.signIn();
 
            await signIn({
                email: user.email,
                nome: user.name,
            }).then((response) => {

            }).catch((error) => {
                console.log(error)
                Alert.alert("error!", "entre em contato com o suporte.")
            })

        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                Alert.alert("Error", error);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <ImageBackground style={{
            flex: 1,
        }} source={cadeado} >

            <BackgroundColor>
                <Container>
                    <Content>
                        <ContainerData>
                            <Title>{"O Gerencimento de Senhas,"}</Title>
                            <SubTitle>{"é um app para gerar e guardar senhas existentes."}</SubTitle>
                            <SubTitle>{"Faça o login para começar!"}</SubTitle>
                        </ContainerData>
                    </Content>

                    <ContainerButton>
                        <Button
                            loading={loading}
                            onPress={() => { Platform.OS == "android" ? loginGoogle() : handleSignIn() }}
                            icon="GOOGLE">
                            Entrar com o Google
                        </Button>
                    </ContainerButton>

                </Container>
            </BackgroundColor>
        </ImageBackground>
    )
}
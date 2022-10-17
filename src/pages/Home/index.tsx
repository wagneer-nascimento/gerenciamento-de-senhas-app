import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Platform, RefreshControl, Text, View } from "react-native";
//import Card from "../../components/Card";
import Input from "../../components/Input";
//import InputCommentComponent from "../../components/InputCommentComponent";
//import TopAuthors from "../../components/TopAuthors";
//import { navigationPrivateScreens } from "../../libs/navigation";
//import { Historia } from "../../models/Historias";
//import { listarTodasHistorias, listarTodasHistoriasByTitleDescricao } from "../../services/historias/historia";
import { COLORS } from "../../theme";
import { Container, Content, ContainerTopAuthors, Title, ContainerTitle, ContainerCard, Card, ContainerInput, Usuario, ContainerButtonAddAccount, PositionButtonAddAccount } from "./styles";
import messaging from '@react-native-firebase/messaging';
//import { updateTokens } from "../../services/tokens/tokens";
import { useAuth } from "../../auth/auth";
import LineComponent from "../../components/LineComponent";
import { IconsAntDesigns } from "../../components/icons/Icons";
import { navigationPrivateScreens } from "../../libs/navigation";
import ButtonFab from "../../components/ButtonFab";

export default function Home() {
    const { user } = useAuth();
    // const navigation = navigationPrivateScreens();
    //const [data, setData] = useState<Historia[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [notData, setNotData] = useState<boolean>(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const navigation = navigationPrivateScreens();

    useEffect(() => {
        //  loadingHistorias();

    }, []);

    /*async function loadingHistorias() {
        if (notData) {
            return setLoading(false);
        }

        setLoading(true);

        try {

            const response = await listarTodasHistorias(page);

            if (Object.keys(response.data).length !== 0) {
                setData(data.concat(response.data));
                setPage(page + 1);
            } else {
                setNotData(true);
            }

        } catch (error: any) {
            // if (checkIfTheTokenIsValid(error)) {
            //   signOut();
            //}
            Alert.alert("Error", error.response.data.message)

        } finally {
            setLoading(false);
        }
    }

    function onRefresh() {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false)
        }, 2000);
    }

    useEffect(() => {
        async function loadingAddTokenDeviceForNotifications() {
            if (Platform.OS == "android") {
                await addTokenDeviceForNotifications();
            }
        }
        loadingAddTokenDeviceForNotifications();
    }, []);

    async function addTokenDeviceForNotifications() {
        try {

            const token = await messaging().getToken();
            await updateTokens(token, user.id);

        } catch (error: any) {
            console.log("erro ao add notifications ", error)
        }
    }
*/

    const data = [
        { id: "01", titulo: "titulo 1" },
        { id: "02", titulo: "titulo 1" },
        { id: "03", titulo: "titulo 1" },
        { id: "04", titulo: "titulo 1" },
        { id: "05", titulo: "titulo 1" },
    ]
    return (
        <Container>

            <ContainerInput>
                <Input
                    onTouchStart={() => { }}
                    placeholder="pesquisar"
                    name="" />
            </ContainerInput>



            <FlatList
                data={data}
                keyExtractor={(item: any) => item.id}
                //onEndReached={loadingHistorias}
                onEndReachedThreshold={0.1}
                /* refreshControl={
                 <RefreshControl
                       tintColor={COLORS.ORANGE}
                       refreshing={refreshing}
                       onRefresh={onRefresh}
                   />
               }*/
                ListFooterComponent={
                    <View style={{ marginBottom: 140 }}>
                        {loading && <ActivityIndicator size="large" color={COLORS.ORANGE} />}
                    </View>
                }
                renderItem={({ item }: { item: any }) => (
                    <ContainerCard>
                        <Card onPress={() => { navigation.navigate("ViewAccount") }}>
                            <Title>Amazon</Title>
                            <Usuario>wagneer.nasc@gmail.com</Usuario>
                        </Card>
                        <LineComponent />
                    </ContainerCard>

                )}
            />

            <ButtonFab type="ADD" onPress={() => {
                navigation.navigate("AddAccount")
            }} />

        </Container>
    )
}
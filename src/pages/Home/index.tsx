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
import { Container, Content, ContainerTopAuthors, Title, ContainerTitle, ContainerCard, Card, ContainerInput, Usuario, ContainerButtonAddAccount, PositionButtonAddAccount, ButtonInput } from "./styles";

//import { updateTokens } from "../../services/tokens/tokens";
import { useAuth } from "../../auth/auth";
import LineComponent from "../../components/LineComponent";
import { IconsAntDesigns } from "../../components/icons/Icons";
import { navigationPrivateScreens } from "../../libs/navigation";
import ButtonFab from "../../components/ButtonFab";
import { Account } from "../../models/Account";
import { listarTodasContas } from "../../services/account";

export default function Home() {
    const { user } = useAuth();
    // const navigation = navigationPrivateScreens();
    const [data, setData] = useState<Account[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [notData, setNotData] = useState<boolean>(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const navigation = navigationPrivateScreens();

    useEffect(() => {
        loadingAccounts();

    }, []);

    async function loadingAccounts() {
        if (notData) {
            return setLoading(false);
        }

        setLoading(true);

        try {

            const response = await listarTodasContas(user.id, page);

            if (Object.keys(response.data).length !== 0) {
                setData(data.concat(response.data));
                setPage(page + 1);
            } else {
                setNotData(true);
            }

        } catch (error: any) {
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


    return (
        <Container>

            <ContainerInput>
                <ButtonInput onPress={() => navigation.navigate("SearchByTitleOrDescription")}>
                    <Input
                        placeholder="pesquisar"
                        editable={false}
                       // onTouchStart={() => navigation.navigate("SearchByTitleOrDescription")}
                        name="" />
                </ButtonInput>
            </ContainerInput>

            <FlatList
                data={data}
                keyExtractor={(item: Account) => item.id}
                onEndReached={loadingAccounts}
                onEndReachedThreshold={0.1}
                refreshControl={
                    <RefreshControl
                        tintColor={COLORS.ORANGE}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                ListFooterComponent={
                    <View style={{ marginBottom: 140 }}>
                        {loading && <ActivityIndicator size="large" color={COLORS.ORANGE} />}
                    </View>
                }
                renderItem={({ item }: { item: Account }) => (
                    <ContainerCard>
                        <Card onPress={() => { navigation.navigate("ViewAccount", item) }}>
                            <Title>{item.titulo}</Title>
                            <Usuario>{item.login}</Usuario>
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
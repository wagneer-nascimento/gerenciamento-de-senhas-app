import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    FlatList,
    RefreshControl,
    TouchableOpacity,
    View
} from "react-native";
import { COLORS } from "../../theme";
import { useAuth } from "../../auth/auth";
import LineComponent from "../../components/LineComponent";
import { navigationPrivateScreens } from "../../libs/navigation";
import ButtonFab from "../../components/ButtonFab";
import { Account } from "../../models/Account";
import { listarTodasContas } from "../../services/account";
import {
    Container,
    Title,
    ContainerCard,
    Card,
    ContainerInput,
    Usuario,
    ButtonInput,
    TextButtonInput
} from "./styles";

export default function Home() {
    const { user } = useAuth();
    const [data, setData] = useState<Account[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [notData, setNotData] = useState<boolean>(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const navigation = navigationPrivateScreens();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            loadingAccounts();
        });

        return unsubscribe;
    }, [navigation]);


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
                <TouchableOpacity onPress={() => navigation.navigate("SearchByTitleOrDescription")}>
                    <ButtonInput>
                        <TextButtonInput>Pesquisar</TextButtonInput>
                    </ButtonInput>
                </TouchableOpacity>
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
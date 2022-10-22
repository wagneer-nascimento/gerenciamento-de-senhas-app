import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Platform, RefreshControl, Text, View } from "react-native";
import { useAuth } from "../../../auth/auth";
import Input from "../../../components/Input";
import LineComponent from "../../../components/LineComponent";
import { navigationPrivateScreens } from "../../../libs/navigation";
import { Account } from "../../../models/Account";
import { listarTodasContasByUserTitleOrDescription } from "../../../services/account";
import { COLORS } from "../../../theme";
import { Container, Content, ContainerTopAuthors, Title, ContainerTitle, ContainerCard, Card, ContainerInput, Usuario, ContainerButtonAddAccount, PositionButtonAddAccount } from "./styles";

export default function SearchByTitleOrDescription() {
    const { user } = useAuth();
    const [data, setData] = useState<Account[]>([]);
    const [page, setPage] = useState<number>(1);
    const [searchAccount, setSearchAccount] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [notData, setNotData] = useState<boolean>(false);
    const navigation = navigationPrivateScreens();

    useEffect(() => {
        setNotData(false);
        setPage(1);
        if (!searchAccount) {
            setData([]);
        }
    }, [searchAccount]);

    async function loadingAccounts() {
        if (notData) {
            return setLoading(false);
        }

        setLoading(true);

        try {

            const response = await listarTodasContasByUserTitleOrDescription(user.id, searchAccount, page);

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

    return (
        <Container>

            <ContainerInput>
                <Input
                    value={searchAccount}
                    onChangeText={setSearchAccount}
                    placeholder="pesquisar"
                    returnKeyType="send"
                    onSubmitEditing={() => { loadingAccounts() }}
                    name="searchAccount" />
            </ContainerInput>

            <FlatList
                data={data}
                keyExtractor={(item: Account) => item.id}
                onEndReached={loadingAccounts}
                onEndReachedThreshold={0.1}
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
        </Container>
    )
}
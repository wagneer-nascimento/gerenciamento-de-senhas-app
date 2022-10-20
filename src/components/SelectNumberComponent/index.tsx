import React, { useState } from 'react';
import { FlatList, Modal, View } from 'react-native';
import { COLORS } from '../../theme';
import Button from '../Button';
import { IconsAntDesigns } from '../icons/Icons';
import {
    Container,
    TextInput,
    ContainerModal,
    ContainerContent,
    NameState,
    Line,
    ContentState,
    ContainerNameState,
    ContainerButtonCancel,
} from './styles';

export interface DataProps {
    id: string;
    value: string;
}

interface Props {
    onChangeSelected(state: DataProps): void;
    value: string;
    isMaxQuantidade5?: boolean;
}

export default function SelectNumberComponent({ value, isMaxQuantidade5 = false, onChangeSelected }: Props) {
    const [visible, setVisible] = useState<boolean>(false);
    const [nomeSelected, setNomeSelected] = useState<string | undefined>(value);
    const [dataMaxQuantidade5, setDataMaxQuantidade5] = useState<DataProps[]>(
        [
            { id: "1", value: "1" },
            { id: "2", value: "2" },
            { id: "3", value: "3" },
            { id: "4", value: "4" },
            { id: "5", value: "5" },
        ])

    const [data, setData] = useState<DataProps[]>(
        [
            { id: "5", value: "5" },
            { id: "6", value: "6" },
            { id: "7", value: "7" },
            { id: "8", value: "8" },
            { id: "9", value: "9" },
            { id: "10", value: "10" },
            { id: "11", value: "11" },
            { id: "12", value: "12" },
            { id: "13", value: "13" },
            { id: "14", value: "14" },
            { id: "15", value: "15" },
            { id: "16", value: "16" },
            { id: "17", value: "17" },
            { id: "18", value: "18" },
            { id: "19", value: "19" },
            { id: "20", value: "20" },
            { id: "21", value: "21" },
            { id: "22", value: "22" },
            { id: "23", value: "23" },
            { id: "24", value: "24" },
            { id: "25", value: "25" },
            { id: "26", value: "26" },
            { id: "27", value: "27" },
            { id: "28", value: "28" },
            { id: "29", value: "29" },
            { id: "30", value: "30" },
        ]
    )

    return (
        <View>
            <Container onPress={() => { setVisible(true) }}>
                <TextInput style={{ color: COLORS.BLACK }}>
                    {nomeSelected}
                </TextInput>
                <IconsAntDesigns name="down" color={COLORS.ORANGE} size={25} />
            </Container>

            <View style={{ flex: 1 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={visible}
                >
                    <ContainerModal>
                        <ContainerContent>

                            <FlatList
                                data={isMaxQuantidade5 ? dataMaxQuantidade5 : data}
                                keyExtractor={(item: DataProps) => item.id}
                                renderItem={({ item }: { item: DataProps }) => (
                                    <ContentState
                                        onPress={() => {
                                            setNomeSelected(item.value);
                                            setVisible(false);
                                            onChangeSelected(item);
                                        }}>
                                        <ContainerNameState>
                                            <NameState>{item.value}</NameState>
                                            {item.value === nomeSelected &&
                                                <IconsAntDesigns name="check" color={COLORS.ORANGE} size={25} />
                                            }
                                        </ContainerNameState>
                                        <Line />
                                    </ContentState>
                                )}
                            />

                        </ContainerContent>
                    </ContainerModal>

                    <ContainerButtonCancel>
                        <Button onPress={() => { setVisible(false) }}>
                            Cancelar
                        </Button>
                    </ContainerButtonCancel>
                </Modal>
            </View>
        </View>
    )
}


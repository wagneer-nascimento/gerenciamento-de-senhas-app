import React, { useState } from "react";
import { Switch, ScrollView, Alert } from "react-native";
import BannerAdmob from "../../components/BannerAdmob";
import Button from "../../components/Button";
import { IconsMaterialCommunityIcons } from "../../components/icons/Icons";
import LineComponent from "../../components/LineComponent";
import SelectNumberComponent from "../../components/SelectNumberComponent";
import { copyToClipboard } from "../../libs/functions";
import { GeneratorSecurePassword } from "../../models/GeneratorPassword";
import { generatorPassword } from "../../services/account";
import { COLORS } from "../../theme";
import { Constants } from "../../utils";
import {
    ButtonClickIcon,
    Container,
    ContainerBodySwitch,
    ContainerButtonGeneratorPassword,
    ContainerHeader,
    ContainerIcons,
    ContainerIconSubDirectory,
    ContainerSelectValueLength,
    ContainerTextSwith,
    ContentTextSwith,
    PasswordGeneratorText,
    TextInfo
} from "./styles";

export default function GeneratorPassword() {
    const [isEnabledMaiusculas, setIsEnabledMaiusculas] = useState<boolean>(false);
    const [isEnabledDigitos, setIsEnabledDigitos] = useState<boolean>(false);
    const [isEnabledSimbolos, setIsEnabledSimbolos] = useState<boolean>(false);
    const [quantidadeMaiusculas, setQuantidadeMaiusculas] = useState<any>("2");
    const [quantidadeDigitos, setQuantidadeDigitos] = useState<any>("2");
    const [quantidadeSimbolos, setQuantidadeSimbolos] = useState<any>("2");

    const [quantidadeCaracteres, setQuantidadeCaracteres] = useState<any>("5");
    const [isEnableCaracteres, setIsEnableCaracteres] = useState<boolean>(true);

    const [senhaGerada, setSenhaGerada] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    async function handleGeneratorPassword() {
        setLoading(true);

        try {
            const data: GeneratorSecurePassword = {
                digitos: isEnabledDigitos,
                maiusculas: isEnabledMaiusculas,
                quantidadeDigitos,
                quantidadeMaiusculas,
                quantidadeSimbolos,
                simbolos: isEnabledSimbolos,
                caracteres: isEnableCaracteres,
                quantidadeCaracteres,
            }

            const response = await generatorPassword(data);
            setSenhaGerada(response.data.senhaGerada)
            console.log(response.data)
        } catch (error: any) {
            Alert.alert("Error", error.response.data.message);

        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <BannerAdmob id={Constants.BANNER_GENERATOR_PASSWORD} />

            <ScrollView>
                <ContainerHeader>
                    <ContainerIcons>
                        <ButtonClickIcon onPress={() => { handleGeneratorPassword() }}>
                            <IconsMaterialCommunityIcons name="sync" size={25} color={COLORS.ORANGE} />
                        </ButtonClickIcon>

                        <ButtonClickIcon onPress={() => { copyToClipboard(senhaGerada) }}>
                            <IconsMaterialCommunityIcons name="content-copy" size={25} color={COLORS.ORANGE} />
                        </ButtonClickIcon>
                    </ContainerIcons>

                    <PasswordGeneratorText>{senhaGerada}</PasswordGeneratorText>
                </ContainerHeader>
                <LineComponent />

                <ContainerBodySwitch>
                    <TextInfo
                        style={{ fontSize: 20, color: COLORS.ORANGE, marginBottom: 10 }}>
                        Incluir
                    </TextInfo>

                    <ContainerTextSwith>
                        <ContentTextSwith>
                            <TextInfo>Caracteres</TextInfo>
                            <Switch
                                trackColor={{ false: COLORS.GRAY_LIGTH, true: COLORS.ORANGE_LIGTH }}
                                thumbColor={isEnableCaracteres ? COLORS.ORANGE : COLORS.WHITE_OFF}
                                ios_backgroundColor={COLORS.GRAY_LIGTH}
                                onValueChange={() => setIsEnableCaracteres(previousState => !previousState)}
                                value={isEnableCaracteres}
                            />
                        </ContentTextSwith>
                        {isEnableCaracteres &&
                            <ContainerSelectValueLength>
                                <ContainerIconSubDirectory>
                                    <IconsMaterialCommunityIcons name="subdirectory-arrow-right" size={25} color={COLORS.ORANGE} />
                                    <TextInfo style={{ color: COLORS.GRAY_LIGTH }}>Quantidade:</TextInfo>
                                </ContainerIconSubDirectory>
                                <SelectNumberComponent
                                    onChangeSelected={(item) => { setQuantidadeCaracteres(item.value) }}
                                    value={quantidadeCaracteres}
                                />
                            </ContainerSelectValueLength>
                        }
                    </ContainerTextSwith>

                    <ContainerTextSwith>
                        <ContentTextSwith>
                            <TextInfo>Maiúsculas</TextInfo>
                            <Switch
                                trackColor={{ false: COLORS.GRAY_LIGTH, true: COLORS.ORANGE_LIGTH }}
                                thumbColor={isEnabledMaiusculas ? COLORS.ORANGE : COLORS.WHITE_OFF}
                                ios_backgroundColor={COLORS.GRAY_LIGTH}
                                onValueChange={() => setIsEnabledMaiusculas(previousState => !previousState)}
                                value={isEnabledMaiusculas}
                            />
                        </ContentTextSwith>
                        {isEnabledMaiusculas &&
                            <ContainerSelectValueLength>
                                <ContainerIconSubDirectory>
                                    <IconsMaterialCommunityIcons name="subdirectory-arrow-right" size={25} color={COLORS.ORANGE} />
                                    <TextInfo style={{ color: COLORS.GRAY_LIGTH }}>Quantidade:</TextInfo>
                                </ContainerIconSubDirectory>
                                <SelectNumberComponent
                                    isMaxQuantidade5={true}
                                    onChangeSelected={(item) => { setQuantidadeMaiusculas(item.value) }}
                                    value={quantidadeMaiusculas}
                                />
                            </ContainerSelectValueLength>
                        }
                    </ContainerTextSwith>

                    <ContainerTextSwith>
                        <ContentTextSwith>
                            <TextInfo>Dígitos:</TextInfo>
                            <Switch
                                trackColor={{ false: COLORS.GRAY_LIGTH, true: COLORS.ORANGE_LIGTH }}
                                thumbColor={isEnabledDigitos ? COLORS.ORANGE : COLORS.WHITE_OFF}
                                ios_backgroundColor={COLORS.GRAY_LIGTH}
                                onValueChange={() => setIsEnabledDigitos(previousState => !previousState)}
                                value={isEnabledDigitos}
                            />
                        </ContentTextSwith>
                        {isEnabledDigitos &&
                            <ContainerSelectValueLength>
                                <ContainerIconSubDirectory>
                                    <IconsMaterialCommunityIcons name="subdirectory-arrow-right" size={25} color={COLORS.ORANGE} />
                                    <TextInfo style={{ color: COLORS.GRAY_LIGTH }}>Quantidade:</TextInfo>
                                </ContainerIconSubDirectory>
                                <SelectNumberComponent
                                    isMaxQuantidade5={true}
                                    onChangeSelected={(item) => { setQuantidadeDigitos(item.value) }}
                                    value={quantidadeDigitos}
                                />
                            </ContainerSelectValueLength>
                        }
                    </ContainerTextSwith>

                    <ContainerTextSwith>
                        <ContentTextSwith>
                            <TextInfo>Símbolos:</TextInfo>
                            <Switch
                                trackColor={{ false: COLORS.GRAY_LIGTH, true: COLORS.ORANGE_LIGTH }}
                                thumbColor={isEnabledSimbolos ? COLORS.ORANGE : COLORS.WHITE_OFF}
                                ios_backgroundColor={COLORS.GRAY_LIGTH}
                                onValueChange={() => setIsEnabledSimbolos(previousState => !previousState)}
                                value={isEnabledSimbolos}
                            />
                        </ContentTextSwith>
                        {isEnabledSimbolos &&
                            <ContainerSelectValueLength>
                                <ContainerIconSubDirectory>
                                    <IconsMaterialCommunityIcons name="subdirectory-arrow-right" size={25} color={COLORS.ORANGE} />
                                    <TextInfo style={{ color: COLORS.GRAY_LIGTH }}>Quantidade:</TextInfo>
                                </ContainerIconSubDirectory>
                                <SelectNumberComponent
                                    isMaxQuantidade5={true}
                                    onChangeSelected={(item) => { setQuantidadeSimbolos(item.value) }}
                                    value={quantidadeSimbolos}
                                />
                            </ContainerSelectValueLength>
                        }
                    </ContainerTextSwith>
                </ContainerBodySwitch>

                <LineComponent />

                <ContainerButtonGeneratorPassword>
                    <Button
                        loading={loading}
                        onPress={() => { handleGeneratorPassword() }}
                    >GERAR SENHA</Button>
                </ContainerButtonGeneratorPassword>
            </ScrollView>

        </Container>
    )
}
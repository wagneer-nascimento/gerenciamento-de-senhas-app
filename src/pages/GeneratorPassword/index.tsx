import React, { useState } from "react";
import { Switch, ScrollView } from "react-native";
import Button from "../../components/Button";
import { IconsMaterialCommunityIcons } from "../../components/icons/Icons";
import LineComponent from "../../components/LineComponent";
import SelectNumberComponent from "../../components/SelectNumberComponent";
import { COLORS } from "../../theme";

import { ButtonClickIcon, Container, ContainerBodySwitch, ContainerButtonGeneratorPassword, ContainerHeader, ContainerIcons, ContainerIconSubDirectory, ContainerSelectValueLength, ContainerTextSwith, ContentTextSwith, PasswordGeneratorText, TextInfo } from "./styles";

export default function GeneratorPassword() {
    const [isEnabledMaiusculas, setIsEnabledMaiusculas] = useState<boolean>(false);
    const [isEnabledDigitos, setIsEnabledDigitos] = useState<boolean>(false);
    const [isEnabledSimbolos, setIsEnabledSimbolos] = useState<boolean>(false);
    const [quantidadeMaiusculas, setQuantidadeMaiusculas] = useState<string>("2");
    const [quantidadeDigitos, setQuantidadeDigitos] = useState<string>("2");
    const [quantidadeSimbolos, setQuantidadeSimbolos] = useState<string>("2");

    return (
        <Container>
            <ScrollView>
                <ContainerHeader>
                    <ContainerIcons>
                        <ButtonClickIcon>
                            <IconsMaterialCommunityIcons name="sync" size={25} color={COLORS.ORANGE} />
                        </ButtonClickIcon>

                        <ButtonClickIcon>
                            <IconsMaterialCommunityIcons name="content-copy" size={25} color={COLORS.ORANGE} />
                        </ButtonClickIcon>
                    </ContainerIcons>

                    <PasswordGeneratorText>apskOAkspaksoakSAoskpaksoaSAOkapskapok2312312@@@@@@@1920</PasswordGeneratorText>
                </ContainerHeader>
                <LineComponent />

                <ContainerSelectValueLength style={{
                    marginBottom: 15,
                    marginTop: 15,
                    marginLeft: 20,
                    marginRight: 20,
                }}>
                    <TextInfo>Tamanho:</TextInfo>
                    <SelectNumberComponent
                        onChangeSelected={() => { }}
                        value="20"
                    />
                </ContainerSelectValueLength>

                <LineComponent />

                <ContainerBodySwitch>
                    <TextInfo
                        style={{ fontSize: 20, color: COLORS.ORANGE, marginBottom: 10 }}>
                        Incluir
                    </TextInfo>

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
                                    <TextInfo style={{color: COLORS.GRAY_LIGTH}}>Quantidade:</TextInfo>
                                </ContainerIconSubDirectory>
                                <SelectNumberComponent
                                    onChangeSelected={(item) => { setQuantidadeMaiusculas(item.value) }}
                                    value="2"
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
                                    <TextInfo style={{color: COLORS.GRAY_LIGTH}}>Quantidade:</TextInfo>
                                </ContainerIconSubDirectory>
                                <SelectNumberComponent
                                    onChangeSelected={(item) => { setQuantidadeDigitos(item.value) }}
                                    value="2"
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
                                    <TextInfo style={{color: COLORS.GRAY_LIGTH}}>Quantidade:</TextInfo>
                                </ContainerIconSubDirectory>
                                <SelectNumberComponent
                                    onChangeSelected={(item) => { setQuantidadeSimbolos(item.value) }}
                                    value="2"
                                />
                            </ContainerSelectValueLength>
                        }
                    </ContainerTextSwith>
                </ContainerBodySwitch>

                <LineComponent />

                <ContainerButtonGeneratorPassword>
                    <Button>GERAR SENHA</Button>
                </ContainerButtonGeneratorPassword>
            </ScrollView>
        </Container>
    )
}
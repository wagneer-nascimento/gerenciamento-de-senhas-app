import styled from "styled-components/native";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS, FONTS } from "../../theme";

export const IconOcticons = styled(Octicons)``;
export const IconIonicons = styled(Ionicons)``;
export const IconAntDesign = styled(AntDesign)``;

export const ImageProfile = styled.Image`
    border-radius: 50px;
    border-width: 2px;
`;

export const ContainerImageProfile = styled.View`
    border-radius: 50px;
    border-width: 2px;
    align-items: center;
    justify-content: center;
`;

export const PrimeiraLetraDoNome = styled.Text`
    font-size: 15px;
    font-family: ${FONTS.POPPINS_SEMI_BOLD};
    color: ${COLORS.WHITE};
`;
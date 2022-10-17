import styled from "styled-components/native";
import { COLORS, FONTS } from "../../theme";

export const Container = styled.SafeAreaView`
   flex: 1;
   background: ${COLORS.WHITE};
`;

export const ContainerIcons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10px;
`;

export const ButtonClickIcon = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    margin-left: 15px;
    align-items: flex-end;
`;

export const ContainerHeader = styled.View`
    height: 150px;
    width: 100%;
    padding: 20px;
`;

export const PasswordGeneratorText = styled.Text`
    font-size: 20px;
    font-family: ${FONTS.ROBOTO_REGULAR};
    color: ${COLORS.GRAY};
`;

export const ContainerTextSwith = styled.View`
    margin-bottom: 15px;
`;

export const ContainerSelectValueLength = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const ContentTextSwith = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const ContainerIconSubDirectory = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TextInfo = styled.Text`
    font-family: ${FONTS.ROBOTO_BOLD};
    font-size: 17px;
    color: ${COLORS.GRAY};
`;

export const ContainerBodySwitch = styled.View`
    padding: 20px;
`;

export const ContainerButtonGeneratorPassword = styled.View`
    padding: 20px;
`;
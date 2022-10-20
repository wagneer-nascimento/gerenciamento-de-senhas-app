import styled from "styled-components/native";
import { COLORS, FONTS } from "../../../theme";

export const Container = styled.SafeAreaView`
   flex: 1;
   background: ${COLORS.WHITE};
`;

export const Content = styled.View`
    margin-top: 20px;
`;

export const ContainerInput = styled.View`
   padding: 10px;
`;

export const ContainerInputIcon = styled.View`
   flex-direction: row;
   align-items: flex-end;
   justify-content: space-between;
   padding: 10px;
`;

export const ButtonClickIcon = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    align-items: flex-end;
`;

export const Label = styled.Text`
    font-family: ${FONTS.ROBOTO_BOLD};
    font-size: 16px;
    color: ${COLORS.GRAY};
    margin-bottom: 5px;
`;

export const ContainerButton = styled.View`
    padding: 20px;
`;

export const PositionButtonRemoveAccount = styled.View`
    position: absolute;
    left: 81%; 
    bottom: 22%;
`;
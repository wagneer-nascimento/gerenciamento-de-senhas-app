import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { COLORS, FONTS } from "../../theme";

export const Container = styled.SafeAreaView`
     flex: 1;
`;

export const Content = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const ContainerData = styled.View`
    width: ${Dimensions.get('window').width}px;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const ContainerButton = styled.View`
    padding: 20px;
`;

export const Title = styled.Text`
    font-size: 32px;
    margin-bottom: 20px;
    color: ${COLORS.ORANGE};
    font-family: ${FONTS.POPPINS_BOLD};
    text-align: center;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    color: ${COLORS.ORANGE};
    font-family: ${FONTS.POPPINS_BOLD};
    text-align: center;
`;


export const BackgroundColor = styled.View`
    background: #d4d7e9;
    opacity: 0.90;
    flex: 1;
`;
export const Index = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 30px;
    border-width: 1px;
    border-color: ${COLORS.GRAY};
    margin: 0 4px;
    align-items: center;
    justify-content: center;
`;

export const BackgroundIndex = styled.View`
    background: ${COLORS.ORANGE};
    width: 15px;
    height: 15px;
    border-radius: 30px;
`;

export const ContainerIndex = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
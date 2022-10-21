import styled from "styled-components/native";
import { COLORS, FONTS } from "../../theme";

export const Container = styled.SafeAreaView`
   flex: 1;
   background: ${COLORS.WHITE};
`;
export const Content = styled.View`
   flex: 1;
   padding: 0 20px;
`;

export const ContainerInput = styled.View`
   padding: 20px;
`;

export const ButtonInput = styled.TouchableHighlight`
`;

export const ContainerTitle = styled.View`
   margin-left: 10px;
`;

export const ContainerTopAuthors = styled.View`
   padding: 10px;
   background: ${COLORS.BLACK};
`;

export const Title = styled.Text`
    font-family: ${FONTS.ROBOTO_BOLD};
    font-size: 20px;
    color: ${COLORS.GRAY};
    margin-bottom: 5px;
`;

export const Usuario = styled.Text`
    font-family: ${FONTS.POPPINS_REGULAR};
    font-size: 15px;
    color: ${COLORS.GRAY};
    margin-bottom: 5px;
`;

export const Card = styled.TouchableOpacity`
    height: 100px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const ContainerCard = styled.View`
   
`;

export const PositionButtonAddAccount = styled.View`
    position: absolute;
    left: 81%; 
    bottom: 13%;
`;

export const ContainerButtonAddAccount = styled.TouchableOpacity`
    height: 60px;
    width: 60px;
    border-radius: 50px;
    border-width: 1px;
    border-color: ${COLORS.ORANGE};
    background: ${COLORS.WHITE};
    align-items: center;
    justify-content: center;
`;
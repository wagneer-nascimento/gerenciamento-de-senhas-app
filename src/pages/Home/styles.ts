import styled from "styled-components/native";
import { COLORS, FONTS } from "../../theme";

export const Container = styled.SafeAreaView`
   flex: 1;
   background: ${COLORS.WHITE};
`;
 

export const ContainerInput = styled.View`
   padding: 20px;
`;

export const ButtonInput = styled.View`
    width: 100%;
    height: 56px;
    border-radius: 10px; 
    background: ${COLORS.WHITE};
    padding: 0 10px 0  10px;
    justify-content: center;
    border-width: 1px;
    border-color: ${COLORS.WHITE_OFF};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TextButtonInput = styled.Text`
    flex: 1;
    color:${COLORS.GRAY};
    font-size: 15px; 
    font-family: ${FONTS.POPPINS_REGULAR};
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

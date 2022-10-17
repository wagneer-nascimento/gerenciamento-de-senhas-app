import styled from "styled-components/native";
import { COLORS, FONTS } from "../../theme";

export const Container = styled.View`
    flex: 1;
    background: ${COLORS.WHITE};
    padding: 20px;
`;
 
export const Label = styled.Text`
    font-size: 16px;
    font-family: ${FONTS.POPPINS_REGULAR};
    color: ${COLORS.GRAY};
    margin-bottom: 5px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-family: ${FONTS.POPPINS_REGULAR};
    color: ${COLORS.ORANGE};
    margin-bottom: 20px;
`;

export const ContainerInput = styled.View`
    margin-bottom: 20px;
`;

export const ContainerButton = styled.View`
  margin-bottom: 20px;

`;
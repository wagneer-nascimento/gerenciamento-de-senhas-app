import styled from "styled-components/native";
import { COLORS } from "../../theme";

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
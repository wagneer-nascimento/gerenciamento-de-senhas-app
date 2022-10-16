import styled, { css } from 'styled-components/native';
import { COLORS, FONTS } from '../../theme';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

interface PropsContainer {
    cor: string;
    border?: string;
    noBackgroundCor: boolean;
}
interface PropsText {
    cor: string;
}

export const Container = styled.TouchableOpacity<PropsContainer>`
    width: 100%;
    height: 56px;
    border-radius: 10px; 
    ${props => !props.noBackgroundCor && css`
        background:  ${props.cor} 
    `}
    justify-content: center;
    padding: 0 20px 0 20px;
    ${props => props.border && css`
      border-width: 1px;
      border-color: ${props.border};
    `}
`;

export const Icon = styled(Ionicons)`
    font-size: 20px;
    color: ${COLORS.WHITE};
`;

export const ContainerIcon = styled.View`
    height: 20px;
    width: 30px;
    align-items: center;
    justify-content: center;
`;

export const ContainerText = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;

export const ButtonText = styled.Text<PropsText>`
    color: ${props => props.cor};
    font-size: 15px;  
    font-family: ${FONTS.POPPINS_BOLD};
    text-align: center;

`;

export const IconSocial = styled(Ionicons)``;
import styled, {css} from 'styled-components/native'; 
import { COLORS, FONTS } from '../../theme';

export const Container = styled.View`
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

export const TextInput = styled.TextInput`
    flex: 1;
    color:${COLORS.GRAY};
    font-size: 15px; 
    font-family: ${FONTS.POPPINS_REGULAR};
`;

export const ButtonClickIcon = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    align-items: center;
    justify-content: center;
`;
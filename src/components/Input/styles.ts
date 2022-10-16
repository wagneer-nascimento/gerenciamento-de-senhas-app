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
`;

export const TextInput = styled.TextInput`
    flex: 1;
    color:${COLORS.GRAY};
    font-size: 15px; 
    font-family: ${FONTS.POPPINS_REGULAR};
`;
import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../theme';

export const Container = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    border-radius: 10px; 
    background: ${COLORS.WHITE};
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: ${COLORS.ORANGE};
`;

export const TextInput = styled.Text`
    flex: 1;
    color: ${COLORS.PLACEHOLDER};
    font-size: 15px; 
    text-align: center;
`;

export const ContainerModal = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;  
`;

export const ContentState = styled.TouchableOpacity` 
    padding: 15px 20px;
    margin-bottom: 10px;
`;

export const ContainerNameState = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
`;

export const NameState = styled.Text`
    font-size: 15px; 
    font-family: ${FONTS.ROBOTO_REGULAR};
    color: ${COLORS.GRAY_LIGTH};
`;

export const Line = styled.View`
    width: 100%;
    border-width: 1px;
    border-color: ${COLORS.GRAY_LIGTH};
    opacity: .18;
`;

export const ContainerContent = styled.View` 
    flex: 1;
    width: 100%; 
    background: ${COLORS.WHITE};
    border-radius: 10px;
`;

export const ContainerButtonCancel = styled.View` 
    padding: 20px;
`;
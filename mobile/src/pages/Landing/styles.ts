import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
    color: string;
}

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    padding: 40px;
    background-color: #8257E5;
`;

export const BackgroundImage = styled.Image`
    width: 100%;
    resize-mode: contain;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 20px;
    line-height: 30px;
    margin-top: 16px;
    font-family: "Poppins-Regular";
`;

export const BoldText= styled.Text`
    font-family: "Poppins-SemiBold";
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    margin-top: 24px;
    justify-content: space-between;
`;

export const Button = styled(RectButton)<ButtonProps>`
    height: 150px;
    width: 48%;
    background-color: ${props => props.color};
    border-radius: 8px;
    padding: 24px;
    justify-content: space-between;
`;

export const Icon = styled.Image`

`;

export const ButtonText = styled.Text`
    font-family: "Archivo-Bold";
    color: #FFF;
    font-size: 20px;
`;

export const ConnectionsText = styled.Text`
    font-family: 'Poppins-Regular';
    color: #D4C2FF;
    font-size: 12px;
    line-height: 20px;
    max-width: 140px;
    margin-top: 20px;
`;
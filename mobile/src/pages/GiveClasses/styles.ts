import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    padding: 40px;
    background-color: #8257E5;
`;

export const BackgroundImage = styled.ImageBackground`
    flex: 1;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: 'Archivo-Bold';
    color: #FFF;
    font-size: 32px;
    line-height: 37px;
    max-width: 180px;
`;

export const Description = styled.Text`
    margin-top: 24px;
    color: #D4C2FF;
    font-size: 16px;
    line-height: 26px;
    font-family: 'Poppins-Regular';
    max-width: 240px;
`;

export const Button = styled(RectButton)`
    margin-vertical: 40px;
    background-color: #04D361;
    height: 58px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-family: 'Archivo-Bold';
`;

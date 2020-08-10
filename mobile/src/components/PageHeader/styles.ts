import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    padding: 40px;
    background-color: #8257E5;
`;

export const TopBar = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled(BorderlessButton)`

`;

export const BackIcon = styled.Image`
    resize-mode: contain;
`;

export const LogoIcon = styled.Image`
    resize-mode: contain;
`;

export const Title = styled.Text`
    font-family: 'Archivo-Bold';
    color: #FFF;
    font-size: 24px;
    line-height: 32px;
    max-width: 160px;
    margin-vertical: 16px;
`;

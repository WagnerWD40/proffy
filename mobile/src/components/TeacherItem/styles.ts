import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
    type?: string;
    favorited?: boolean;
}

export const Container = styled.View`
    background-color: #FFF;
    border-width: 1px;
    border-color: #E6E6F0;
    border-radius: 8px;
    margin-bottom: 16px;
    overflow: hidden;
`;

export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background-color: #eee;
`;

export const Profile = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 24px;
`;

export const ProfileInfo = styled.View`
    margin-left: 16px;
`;

export const Name = styled.Text`
    font-family: 'Archivo-Bold';
    color: #32264d;
    font-size: 20px;
`;

export const Subject = styled.Text`
    font-family: 'Poppins-Regular';
    color: #6a6180;
    font-size: 12px;
    margin-top: 4px;
`;

export const Bio = styled.Text`
    margin-horizontal: 24px;
    font-family: 'Poppins-Regular';
    font-size: 14px;
    line-height: 24px;
    color: #6A6180;
`;

export const Footer = styled.View`
    background-color: #FAFAFC;
    padding: 24px;
    margin-top: 24px;
    align-items: center;
`;

export const Price = styled.Text`
    font-family: 'Poppins-Regular';
    color: #6A6180;
    font-size: 14px;
`;

export const PriceValue = styled.Text`
    font-family: 'Archivo-Bold';
    color: #8257E5;
    font-size: 16px;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    margin-top: 16px;

`;

export const Button = styled(RectButton)<ButtonProps>`
    background-color: #8257E5;
    width: 56px;
    height: 56px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-right: 8px;

    ${props => props.type === "contact" && css`
        background-color: #04D361;
        flex: 1;
        flex-direction: row;
    `};

    ${props => props.favorited && css`
        background-color: #E33E3D;
    `};
`;

export const Icon = styled.Image`

`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-family: 'Archivo-Bold';
    font-size: 16px;
    margin-left: 16px;
`;

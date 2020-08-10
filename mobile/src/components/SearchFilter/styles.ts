import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/Ionicons';

interface ContainerProps {
    menuOpen: boolean;
}

export const Container = styled.View<ContainerProps>`
    height: ${props => props.menuOpen ? '250px' : '90px'};
    margin-bottom: 24px;
`;

export const BottomLine = styled.View`
    height: 48px;
    border-bottom-width: 1px;
    border-bottom-color: #d4c2ff;;  
    border-style: solid;
`;

export const Button = styled(RectButton)`
    flex: 1;
    border-bottom-width: 1px;
    border-bottom-color: black;  
    border-style: solid;
    padding: 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const IconPNG = styled.Image`
    width: 24px;
    height: 24px;
    resize-mode: contain;
`;

export const ButtonText = styled.Text`
    color: #FFF;
`;

export const SearchForm = styled.View`
    margin-top: 16px;
`;

export const Label = styled.Text`
    color: #d4c2ff;
    margin-top: 8px;
    font-family: 'Poppins-Regular';
`;

export const SelectContainer = styled.View`
    border-radius: 8px;
    margin-top: 4px;
    overflow: hidden;
    width: 100%;
    height: 48px;
`;

export const Select = styled(Picker)`
    flex: 1;
    background-color: #FFF;
    border-radius: 8px;
    padding: 8px 12px;
    font-family: 'Poppins-Regular';
    align-items: center;
    font-size: 12px;
    color: #6a6180;
`;

export const SelectIcon = styled(Icon)`
    position: absolute;
    right: 10px;
    top: 14px;
    color: #6A6180;
`;

export const BottomRow = styled.View`
    flex-direction: row;
`;

export const LeftInput = styled.View`
    flex: 2;
`;

export const RightInput = styled.View`
    flex: 1.3;
    margin-left: 8px;
`;

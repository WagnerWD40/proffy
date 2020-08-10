import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #f0f0f7;
`;

export const ScrollingListContainer = styled.View`
    margin-top: -32px;
    flex: 1;
`;

export const ScrollingList = styled.ScrollView`
    padding: 16px 0;
    flex: 1;
`;

export const NoClassesFound = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 200px;
    width: 100%;
    background-color: #FFF;
    padding: 40px;
    border-radius: 8px;
`;

export const ErrorMessage = styled.Text`
    text-align: center;
    padding-top: 16px;
    font-family: 'Archivo-Regular';
    color: #8257E5;
    font-size: 16px;
    line-height: 22px;

`;

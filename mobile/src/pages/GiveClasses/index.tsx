import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    BackgroundImage,
    Title,
    Description,
    Button,
    ButtonText,
} from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';


const GiveClasses: React.FC = () => {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <Container>
            <BackgroundImage
                resizeMode="contain"
                source={giveClassesBgImage}>

                <Title>Quer ser um Proffy?</Title>
                <Description>
                    Para começar, você precisa se cadastrar
                    como professor na nossa plataforma web.
                </Description>
            </BackgroundImage>

            <Button onPress={handleNavigateBack}>
                <ButtonText>Tudo bem</ButtonText>
            </Button>
        </Container>
    );
}

export default GiveClasses;
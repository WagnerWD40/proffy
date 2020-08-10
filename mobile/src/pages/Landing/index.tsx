import React, { useEffect, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import {
    Container,
    BackgroundImage,
    Title,
    BoldText,
    ButtonsContainer,
    Button,
    Icon,
    ButtonText,
    ConnectionsText,
} from './styles';

import backgroundImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import api from '../../services/api';

const Landing: React.FC = () => {
    const { navigate } = useNavigation();

    const [connections, setConnections] = useState(0);

    useFocusEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setConnections(total);
        });
    });

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPage() {
        navigate('Study');
    }

    return (
        <Container>
            <BackgroundImage source={backgroundImg} />
            <Title>
                Seja bem-vindo, {'\n'}
                <BoldText>
                    O que deseja fazer?
                </BoldText>
            </Title>

            <ButtonsContainer>
                <Button
                    onPress={handleNavigateToStudyPage}
                    color="#9871f5">
                    <Icon source={studyIcon} />

                    <ButtonText>Estudar</ButtonText> 
                </Button>

                <Button
                    onPress={handleNavigateToGiveClassesPage}
                    color="#04D361">
                    <Icon source={giveClassesIcon} />

                    <ButtonText>Dar aulas</ButtonText> 
                </Button>
            </ButtonsContainer>

            <ConnectionsText>
                Total de {connections} coneções já realizadas {'  '}
                <Icon source={heartIcon} />
            </ConnectionsText>
        </Container>
    );
}

export default Landing;
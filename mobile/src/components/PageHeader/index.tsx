import React from 'react';

import {
    Container,
    TopBar,
    Button,
    BackIcon,
    LogoIcon,
    Title,
} from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
    const { navigate } = useNavigation();

    function handleGoBack() {
        navigate('Landing');
    }

    return (
        <Container>
            <TopBar>
                 <Button onPress={handleGoBack}>
                     <BackIcon source={backIcon} />
                 </Button>

                 <LogoIcon source={logoImg} />
            </TopBar>

            <Title>{ title }</Title>

            {children}
        </Container>
    );
}

export default PageHeader;
import React, { useState, useCallback } from 'react';
import { Linking } from 'react-native';

import{
    Container,
    Avatar,
    Profile,
    ProfileInfo,
    Name,
    Subject,
    Bio,
    Footer,
    Price,
    PriceValue,
    ButtonsContainer,
    Button,
    Icon,
    ButtonText,
} from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import { useFavorites } from '../../hooks/Favorites';
import api from '../../services/api';

interface Props {
    favorite?: boolean;
    user_id: number;
    name: string;
    avatar: string;
    subject: string;
    whatsapp: string;
    bio: string;
    cost: string;
}

const TeacherItem: React.FC<Props> = ({
    favorite, user_id, name, avatar, subject, whatsapp, bio, cost }) => {
    const [favorited, setFavorited] = useState(favorite);
    
    const { toggleFavorite } = useFavorites();

    const handleLinkToWhatsapp = useCallback(() => {
        api.post('connections', {
            user_id,
        });
        Linking.openURL(`whatsapp://send?phone=${whatsapp}`);
    }, [whatsapp]);

    function handleToggleFavorite() {
        toggleFavorite({
            user_id,
            name,
            avatar,
            subject,
            whatsapp,
            bio,
            cost,
            favorite,
        });

        setFavorited(!favorited);
    }

    return (
        <Container>
            <Profile>
            <Avatar
                source={{ uri: avatar }} />

                <ProfileInfo>
                    <Name>{name}</Name>
                    <Subject>{subject}</Subject>
                </ProfileInfo>
            </Profile>

            <Bio>
                {bio}
            </Bio>

            <Footer>
                <Price>
                    Preço/hora {'   '}
                    <PriceValue>R$ {cost}</PriceValue>
                </Price>

                <ButtonsContainer>
                    <Button
                        onPress={handleToggleFavorite} 
                        favorited={favorited} >
                        {
                            favorited ? (
                                <Icon source={unfavoriteIcon} />                                
                            ) : (
                                <Icon source={heartOutlineIcon} /> 
                            )
                        }
                    </Button>

                    <Button
                        onPress={handleLinkToWhatsapp}
                        type="contact">
                        <Icon source={whatsappIcon} />
                        <ButtonText>Entrar em contato</ButtonText>
                    </Button>
                </ButtonsContainer>
            </Footer>
        </Container>
    );
}

export default TeacherItem;
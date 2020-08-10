import React, { useState, useEffect } from 'react'; 
import Icon from 'react-native-vector-icons/Ionicons';

import {
    Container,
    ScrollingListContainer,
    ScrollingList,
    NoClassesFound,
    ErrorMessage,
} from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { useFavorites } from '../../hooks/Favorites';
import { TeacherDTO } from '../TeacherList';

const Favorites: React.FC = () => {
    const { favorites } = useFavorites();

    const [favoritedItems, setFavoritedItems] = useState(favorites);

    useEffect(() => {
        setFavoritedItems(favorites);
    }, [favorites]);

    console.log(favorites);

    return (
        <Container>
            <PageHeader title="Meus proffys favoritos" />

            <ScrollingListContainer>
                <ScrollingList
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingBottom: 24,
                    }}>

                    {
                        favoritedItems.map((teacher: TeacherDTO) => (
                            <TeacherItem
                                key={teacher.user_id}
                                user_id={teacher.user_id}
                                name={teacher.name}
                                avatar={teacher.avatar}
                                subject={teacher.subject}
                                whatsapp={teacher.whatsapp}
                                bio={teacher.bio}
                                cost={teacher.cost}
                                favorite={teacher.favorite}/>
                        ))
                    }
                                        {
                        !favoritedItems?.length && (
                            <NoClassesFound>
                                <Icon
                                    name="ios-bookmarks-outline"
                                    size={56}
                                    color="#8257E5"/>
                                <ErrorMessage>
                                    Você ainda não adicionou nenhum Proffy favorito.
                                </ErrorMessage>
                            </NoClassesFound>
                        )
                    }

                </ScrollingList>
            </ScrollingListContainer>
        </Container>
    );
}

export default Favorites;
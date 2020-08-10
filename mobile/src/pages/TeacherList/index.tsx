import React, { useState, ReactText } from 'react';
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
import SearchFilter from '../../components/SearchFilter';

import api from '../../services/api';
import { useFavorites } from '../../hooks/Favorites';

export interface TeacherDTO {
    user_id: number;
    name: string;
    avatar: string;
    subject: string;
    whatsapp: string;
    bio: string;
    cost: string;
    favorite?: boolean;
}

const TeacherList: React.FC = () => {
    const [teacherList, setTeacherList] = useState<TeacherDTO[]>([]);

    const { favorites } = useFavorites();

    async function searchTeachers(subject: ReactText, week_day: number, hour: ReactText): Promise<void> {

        const res = await api.get('classes', {
            params: {
                subject: subject,
                week_day: week_day,
                time: hour,
            }
        });

        const teachersComparedToFavorites = res.data.map((teacher: TeacherDTO )=> {
            if (favorites.find((t: TeacherDTO ) => t.user_id === teacher.user_id)) {
                return {
                    ...teacher,
                    favorite: true,
                }
            }

            return teacher;
        })

        setTeacherList(teachersComparedToFavorites);
    }

    return (
        <Container>
            <PageHeader title="Proffys disponíveis">
                <SearchFilter searchTeachers={searchTeachers} />
            </PageHeader>
            <ScrollingListContainer>
                <ScrollingList
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingBottom: 24,
                    }}>
                    {
                        teacherList.map(teacher => 
                            <TeacherItem
                                key={teacher.user_id}
                                user_id={teacher.user_id}
                                name={teacher.name}
                                avatar={teacher.avatar}
                                subject={teacher.subject}
                                whatsapp={teacher.whatsapp}
                                bio={teacher.bio}
                                cost={teacher.cost}
                                favorite={teacher?.favorite} />
                        )
                    }
                    {
                        !teacherList?.length && (
                            <NoClassesFound>
                                <Icon
                                    name="ios-alert-circle-outline"
                                    size={56}
                                    color="#8257E5"/>
                                <ErrorMessage>
                                    Nenhuma ocorrência encontrada com os atributos escolhidos.
                                </ErrorMessage>
                            </NoClassesFound>
                        )
                    }
                    

                </ScrollingList>
            </ScrollingListContainer>
        </Container>
    );
}

export default TeacherList;
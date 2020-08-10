import React, { useState, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

interface TeacherDTO {
    user_id: number;
    name: string;
    avatar: string;
    subject: string;
    whatsapp: string;
    bio: string;
    cost: string;
}

const TeacherList: React.FC = () => {
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        async function searchTeachers() {
            const res = await api.get('classes', {
                params: {
                    subject,
                    week_day,
                    time,
                }
            });
    
            setTeachers(res.data);
        }

        if (subject && week_day && time) {
            searchTeachers()
        }
    }, [subject, week_day, time]);

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                        ]}/>

                    <Select
                        name="week_dat"
                        label="Dia da semana"
                        value={week_day}
                        onChange={e => setWeekDay(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },

                        ]}/>

                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={e => setTime(e.target.value)} />                                            

                </form>
            </PageHeader>

            <main>
                {teachers && teachers.map((teacher: TeacherDTO) => 
                    <TeacherItem key={teacher.user_id} {...teacher}/>
                )}

            </main>
        </div>
    );
}

export default TeacherList;
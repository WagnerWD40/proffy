import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import api from '../../services/api';

import './styles.css';

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string,   
}

interface Class {
    name: string,
    avatar: string,
    whatsapp: string,
    bio: string,
    subject: string,
    cost: number,
    scheduleItems: ScheduleItem[],   
}

const TeacherForm: React.FC = () => {
    const history = useHistory();

    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [bio, setBio] = useState("");

    const [subject, setSubject] = useState("");
    const [cost, setCost] = useState("");

    const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([
        {
            week_day: 0,
            from: '',
            to: '',
        }
    ]);

    const addNewScheduleItem = useCallback(() => {
        const newItem = {
            week_day: 0,
            from: '',
            to: '',
        }

        setScheduleItems(oldItems => [...oldItems, newItem]);
    }, []);

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((item, index) => {
            if (index === position) {
                return { ...item, [field]: value };
            }

            return item;
        });

        setScheduleItems(updatedScheduleItems);
    }

    async function handleCreateClass(event: FormEvent) {
        event.preventDefault();

        try {
            await api.post<Class>('classes', {
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost: Number(cost),
                schedule: scheduleItems,
            });

            alert('Cadastro realizado com sucesso!');

            history.push('/');
        } catch (err) {

            console.error(err);
            alert('Erro no cadastro!');
        }

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems,   
        });
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição" />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={e => setName(e.target.value)} />

                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={e => setAvatar(e.target.value)} />

                        <Input
                            name="whatsapp"
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)} />

                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={e => setBio(e.target.value)} />

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

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

                        <Input
                            value={cost}
                            onChange={e => setCost(e.target.value)}
                            name="cost"
                            label="Custo da sua hora por aula" />

                    </fieldset>

                    <fieldset>
                        <legend>Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>

                        {scheduleItems.map((item, index) => 

                            <div
                                key={item.week_day}
                                className="schedule-item">
                                <Select
                                    name="week_day"
                                    label="Dia da semana"
                                    onChange={e =>
                                        setScheduleItemValue(index, 'week_day', e.target.value)}
                                    value={item.week_day}
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
                                    onChange={e =>
                                        setScheduleItemValue(index, 'from', e.target.value)}
                                    value={item.from}
                                    name="from"
                                    label="Das"
                                    type="time" />

                                <Input
                                    onChange={e =>
                                        setScheduleItemValue(index, 'to', e.target.value)}
                                    value={item.to}
                                    name="to"
                                    label="Até"
                                    type="time" />
                            </div>
                        )}

                    </fieldset>
                    
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br />
                            Preencha todos os dados

                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;
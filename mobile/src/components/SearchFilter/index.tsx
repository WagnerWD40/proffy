import React, { useState, useEffect, ReactText } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    Container,
    BottomLine,
    Button,
    ButtonText,
    SearchForm,
    Label,
    SelectContainer,
    Select,
    SelectIcon,
    BottomRow,
    LeftInput,
    RightInput,
} from './styles';

import api from '../../services/api';

const WEEKDAYS = [
    { value: 0, name: 'Domingo'},
    { value: 1, name: 'Segunda-feira'},
    { value: 2, name: 'Terça-feira'},
    { value: 3, name: 'Quarta-feira'},
    { value: 4, name: 'Quinta-feira'},
    { value: 5, name: 'Sexta-feira'},
    { value: 6, name: 'Sábado'},
];

const HOURS = Array.from({ length: 24 }, (value, index) => `${index.toString()}:00`);

interface Props {
    searchTeachers(subject: string, week_day: number, hour: string): Promise<void>;
}

const SearchFilter: React.FC<Props> = ({ searchTeachers }) => {
    const [toggled, setToggled] = useState(false);
    const [subjectOptions, setSubjectOptions] = useState([]);

    const [selectedSubject, setSelectedSubject] = useState<ReactText>('Ciências');
    const [selectedWeekday, setSelectedWeekday] = useState(WEEKDAYS[0]);
    const [selectedHour, setSelectedHour] = useState<ReactText>(HOURS[0]);

    useEffect(() => {
        api.get('subjects').then(response =>
            setSubjectOptions(response.data));
    }, []);

    useEffect(() => {

        searchTeachers(selectedSubject, selectedWeekday.value, selectedHour);

    }, [selectedSubject, selectedWeekday, selectedHour]);

    function handleMenuToggle() {
        setToggled(!toggled);
    }

    return (
        <Container menuOpen={toggled}>
            <BottomLine>
                <Button onPress={handleMenuToggle}>
                    <Icon
                        name="filter"
                        color={toggled ? "#d4c2ff" : "#41fc03"}
                        size={20}/>
                    <ButtonText>Filtrar por dia, hora e matéria</ButtonText>
                    <Icon
                        name={toggled ? "ios-chevron-up" : "ios-chevron-down"}
                        color="#FFF" />
                </Button>
            </BottomLine>

            {toggled && (
                <SearchForm>
                    <Label>Matéria</Label>
                    <SelectContainer>
                        <Select
                            selectedValue={selectedSubject}
                            onValueChange={(itemValue, itemIndex) => setSelectedSubject(itemValue)}>
                            {
                                subjectOptions.map(option =>
                                    <Select.Item
                                        key={option}
                                        label={option}
                                        value={option} />
                                )
                            }
                        </Select>
                        <SelectIcon
                            name="ios-chevron-down"
                            size={20} />
                    </SelectContainer>
                    <BottomRow>
                        <LeftInput>
                            <Label>Dia da semana</Label>
                            <SelectContainer>
                                <Select
                                    selectedValue={selectedWeekday.value}
                                    onValueChange={(itemValue, itemIndex) => setSelectedWeekday(WEEKDAYS[itemIndex])}>
                                    {
                                        WEEKDAYS.map(day =>
                                            <Select.Item
                                                key={day.name}
                                                label={day.name}
                                                value={day.value} />
                                        )
                                    }
                                </Select>
                                <SelectIcon
                                    name="ios-chevron-down"
                                    size={20} />
                            </SelectContainer>
                        </LeftInput>
                        <RightInput>
                            <Label>Horário</Label>
                            <SelectContainer>
                                <Select
                                    selectedValue={selectedHour}
                                    onValueChange={(itemValue, itemIndex) => setSelectedHour(itemValue)}>
                                    {
                                        HOURS.map(hour =>
                                            <Select.Item
                                                key={hour}
                                                label={hour}
                                                value={hour} />
                                        )
                                    }
                                </Select>
                                <SelectIcon
                                    name="ios-chevron-down"
                                    size={20} />
                            </SelectContainer>
                        </RightInput>
                    </BottomRow>
                </SearchForm>
            )}
        </Container>
    );
}

export default SearchFilter;
import React, { useCallback } from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import './styles.css';

interface TeacherProps {
    user_id: number;
    name: string;
    avatar: string;
    subject: string;
    whatsapp: string;
    bio: string;
    cost: string;
}

const TeacherItem: React.FC<TeacherProps> = (teacher) => {

    const handleClick = useCallback(() => {
        api.post('connections');
    }, []);

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="avatar"/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
            {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>

                <a target="_blank" href={`https://wa.me/${teacher.whatsapp}`} rel="noopener noreferrer">
                    <button type="button" onClick={handleClick}>
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;
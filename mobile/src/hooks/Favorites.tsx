import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import { TeacherDTO } from '../pages/TeacherList';
import AsyncStorage from '@react-native-community/async-storage';

const FavoritesContext = createContext<any>([]);

const FavoritesProvider: React.FC = ({ children }) => {
    const [favorites, setFavorites] = useState<TeacherDTO[]>([]);

    useEffect(() => {
        AsyncStorage.getItem('@Proffy/favorites').then(data => {
            if (data) {
                const favoritedTeachers = JSON.parse(data);

                setFavorites(favoritedTeachers);
            }
        })
    }, []);

    const toggleFavorite = useCallback((teacher: TeacherDTO) => {
        if (favorites.find((t: TeacherDTO) => t.user_id === teacher.user_id)) {
            setFavorites(
                favorites.filter((t: TeacherDTO) => t.user_id !== teacher.user_id)
            );
        } else {
            const favoritedTeacher = {
                ...teacher,
                favorite: true,
            }

            setFavorites([
                ...favorites,
                favoritedTeacher,
            ]);
        }

        AsyncStorage.setItem('@Proffy/favorites', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <FavoritesContext.Provider value={{favorites, toggleFavorite}} >
            {children}
        </FavoritesContext.Provider>
    );
}

function useFavorites(): any {
    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error('useFavorites must be used within an FavoritesProvider');
    }

    return context;
}

export {
    FavoritesProvider,
    useFavorites,
}
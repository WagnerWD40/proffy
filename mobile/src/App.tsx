import React from 'react';
import { StatusBar } from 'react-native';

import AppStack from './routes/AppStack';
import { FavoritesProvider } from './hooks/Favorites';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#8257E5" />
      <FavoritesProvider>
        <AppStack />
      </FavoritesProvider>
    </>
  );
}

export default App;
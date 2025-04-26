import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/index';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppRoutes />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;

import React from 'react';
import { AppRouter } from './routes/AppRoute';
import { Provider } from 'react-redux'
import { store } from './store/store';
import './styles/styles.scss'


function App() {
  
  return (
    <Provider store={store} >
     
      <AppRouter/>
    </Provider>
    
  );
}

export default App;

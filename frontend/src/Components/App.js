import React from 'react';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import { Provider } from 'react-redux';

const App = ({store}) => {
  return (
    <Provider store={store}>
      <Router />
      <GlobalStyles />
    </Provider>
  );
}
export default App;

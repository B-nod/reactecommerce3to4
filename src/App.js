import logo from './logo.svg';
import './App.css';
import First from './components/First';
import { Secon, Test } from './components/Secon';
import Myroute from './Myroute';
import { legacy_createStore } from 'redux'; // help to know that reducer is a store
import { Provider } from 'react-redux'; // to provide data from reducer to component
import { cartReducer } from './redux/reducer/cartReducer';
import { store } from './store';

function App() {
  // const store = legacy_createStore(cartReducer)
  return (
    <>
    <Provider store={store}>
      <Myroute/>
    </Provider>


    </>
   
  );
}

export default App;

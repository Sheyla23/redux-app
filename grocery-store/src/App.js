
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store';
import CakeGrocery from './components/CakeGrocery';
import PizzaGrocery from './components/PizzaGrocery';
import User from './components/User';
import Todos from './components/Todos';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Todos/>
        <CakeGrocery/>
        <PizzaGrocery/>
        <User/>
      </Provider>
    </div>
    
  );
}

export default App;

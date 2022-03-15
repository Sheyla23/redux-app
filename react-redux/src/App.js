
import './App.css';
import BagContainer from './components/BagContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import BagContainerWithHooks from './components/BagContainerWithHooks';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BagContainer/>
        <BagContainerWithHooks/>
      </div>
    </Provider>
    
  );
}

export default App;

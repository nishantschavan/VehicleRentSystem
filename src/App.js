import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './Components/HomePage/Homepage';
import SecondPage from './Components/HomePage/SecondPage';


function App() {
  return (
    <div className="app">

      <Route exact path="/">
        <Homepage/>
      </Route>

      <Route path="/secondpage">
        <SecondPage/>
      </Route>

    </div>
  );
}

export default App;

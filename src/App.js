import './App.css';
import { Route } from 'react-router-dom';
import SecondPage from './Components/HomePage/SecondPage';
import Signup from './Components/HomePage/Signup';
import LoginForm from './Components/HomePage/LoginForm';


function App() {
  return (
    <div className="app">

      <Route exact path="/">
        <LoginForm/>
      </Route>

      <Route path="/secondpage">
        <SecondPage/>
      </Route>

      <Route path="/login">
        <LoginForm/>
      </Route>

      <Route path="/signup">
        <Signup/>
      </Route>

    </div>
  );
}

export default App;

import "./App.css";
import { Route } from "react-router-dom";
import SignInPage from "./pages/SignIn-SignUp-page/SignInPage";
import SignUpPage from "./pages/SignIn-SignUp-page/SignUpPage";
import Home from "./Components/HomePage/Home";

function App() {
  return (
    <div className="app">
      <div id="bubble1" class="bubble"></div>
      <div id="bubble2" class="bubble"></div>
      <div id="bubble3" class="bubble"></div>
      <div id="bubble4" class="bubble"></div>
      <div id="bubble5" class="bubble"></div>
      <div id="bubble6" class="bubble"></div>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/signIn">
        <SignInPage />
      </Route>
      <Route exact path="/signUp">
        <SignUpPage />
      </Route>
    </div>
  );
}

export default App;

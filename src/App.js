import "./App.css";
import { Route } from "react-router-dom";
import SignInPage from "./pages/SignIn-SignUp-page/SignInPage";
import SignUpPage from "./pages/SignIn-SignUp-page/SignUpPage";

function App() {
  return (
    <div className="app">
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

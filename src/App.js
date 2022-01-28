import "./App.css";
import { Route } from "react-router-dom";
import SignInPage from "./pages/SignIn-SignUp-page/SignInPage";
import SignUpPage from "./pages/SignIn-SignUp-page/SignUpPage";
import Home from "./pages/HomePage/Home";
import Booknowpage1 from "./pages/Booknowpage1/Booknowpage1";
import Booknowpage2 from "./pages/Book-now-page2/booknowpage2";
import Booknowpage3 from "./pages/Booknowpage3/Booknowpage3";
import Booknowpage4 from "./pages/Booknowpage4/Booknowpage4";
import Booknowpage5 from "./pages/Booknowpage5/Booknowpage5";

function App() {
  return (
    <div className="app">
      {/* <div id="bubble1" class="bubble"></div>
      <div id="bubble2" class="bubble"></div>
      <div id="bubble3" class="bubble"></div>
      <div id="bubble4" class="bubble"></div>
      <div id="bubble5" class="bubble"></div>
      <div id="bubble6" class="bubble"></div> */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Booknowpage1">
        <Booknowpage1 />
      </Route>
      <Route exact path="/Booknowpage2">
        <Booknowpage2 />
      </Route>
      <Route exact path="/Booknowpage3">
        <Booknowpage3 />
      </Route>
      <Route exact path="/Booknowpage4">
        <Booknowpage4 />
      </Route>
      <Route exact path="/Booknowpage5">
        <Booknowpage5 />
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

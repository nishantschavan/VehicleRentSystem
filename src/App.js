import "./App.css";
import { Route } from "react-router-dom";
import SignInPage from "./pages/SignIn-SignUp-page/SignInPage";
import SignUpPage from "./pages/SignIn-SignUp-page/SignUpPage";
import BookingPage from "./pages/Booking-page/BookingPage";
import TopHeader from "./Components/TopHeader/TopHeader";
function App() {
  return (
    <div className="app">
      <TopHeader />
      <Route exact path="/signIn">
        <SignInPage />
      </Route>
      <Route exact path="/signUp">
        <SignUpPage />
      </Route>
      <Route exact path="/booking">
        <BookingPage />
      </Route>
    </div>
  );
}

export default App;

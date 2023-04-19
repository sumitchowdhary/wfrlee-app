import "./App.css";
import Login from "./components/auth/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/dashboard/Home";
import PageNotFound from "./sharedComponents/PageNotFound";
import ForgetPassword from "./components/auth/ForgetPassword";
import UpdatePassword from "./components/auth/UpdatePassword";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/dashboard">
            <Home />
          </Route>
          <Route exact path="/about-us">
            <Home />
          </Route>
          <Route exact path="/super-Admin">
            <Home />
          </Route>
          <Route path="/secure-panel/login">
            <Login />
          </Route>
          <Route path="/secure-panel/forget-Password">
            <ForgetPassword />
          </Route>
          <Route path="/secure-panel/updatePassword">
            <UpdatePassword />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

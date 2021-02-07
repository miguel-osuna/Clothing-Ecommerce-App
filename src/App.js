import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";
import ShopPage from "./pages/shop/shop.component";

import { auth } from "./firebase/firebase.utils";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    // This unsubscribes the user from the auth
    this.unsusbscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

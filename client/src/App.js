import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HeaderComponent from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.action";
import { GlobalStyle } from "./global.styles";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
const HomePage = lazy(() => import("./pages/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.componnet"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  // const { setCurrentUser, collectionsArray } = this.props;
  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //   // this.setState({ currentUser: user });
  //   // console.log(user);
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);
  //     userRef.onSnapshot((snapShot) => {
  //       setCurrentUser({
  //         id: snapShot.id,
  //         ...snapShot.data(),
  //       });
  //     });
  //   } else if (!userAuth) {
  //     setCurrentUser(null);
  //   }
  // });

  return (
    <div>
      <GlobalStyle />
      <HeaderComponent />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
          </Suspense>
          <Suspense fallback={<Spinner />}>
            <Route path="/shop" component={ShopPage} />
          </Suspense>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
          <Suspense fallback={<Spinner />}>
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

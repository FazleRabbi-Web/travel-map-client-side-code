import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Book from "./components/Home/Book/Book";
import Contacts from "./components/Home/Contacts/Contacts";
import Gallery from "./components/Home/Gallery/Gallery";
import Home from "./components/Home/Home/Home";
import Packages from "./components/Home/Package/Package";
import Review from "./components/Home/Review/Review";
import Services from "./components/Home/services/services";
import PackageDetail from "./components/packageDetail/PackageDetail";
import Footer from "./components/Shared/Footer/Footer";
import Login from "./components/Shared/Login/Login";
import PrivetRoute from "./components/Shared/Login/PrivetRoute/PrivetRoute";
import Register from "./components/Shared/Login/Register";
import Navbar from "./components/Shared/Navbar/Navbar";
import NotFound from "./components/Shared/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/packages">
            <Packages></Packages>
          </Route>
          <Route path="/gallery">
            <Gallery></Gallery>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/contact">
            <Contacts></Contacts>
          </Route>
          <Route path="/packges/:packgeId">
            <PackageDetail></PackageDetail>
          </Route>
          <PrivetRoute path="/booking/:packgeId">
            <Book></Book>
          </PrivetRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;

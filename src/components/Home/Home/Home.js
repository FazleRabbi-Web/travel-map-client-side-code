import React from "react";
import Contacts from "../Contacts/Contacts";
import Header from "../Header/Header";
import Package from '../Package/Package'
import Services from "../services/services";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Package></Package>
      <Services></Services>
      <Contacts />
      <Review />
    </div>
  );
};

export default Home;

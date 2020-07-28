import { Provider } from 'mobx-react'
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/pages/home";
import Signin from "./components/pages/signin";
import Welcome from "./components/pages/welcome";

import RegistrationTerms from "./components/pages/registration/terms";
import RegistrationAlternatives from "./components/pages/registration/alternatives";
import RegistrationSignin from "./components/pages/registration/signin";
import RegistrationInformation from "./components/pages/registration/information";
import RegistrationSkills from "./components/pages/registration/skills";
import RegistrationFinish from "./components/pages/registration/finish";

import Thankyou from "./components/pages/request/thankYou"
import RequestVolunteer from "./components/pages/request/reqVolunteer"
import ReceiverRequest from "./components/pages/request/receiverReq"
import RequestType from "./components/pages/request/requestType.js"
import RequestType1 from "./components/pages/request/requestType1.js"
import RequestHelpType from "./components/pages/request/helpType"
import RequestSpecify from "./components/pages/request/specify"
import RequestConfirmation from "./components/pages/request/confirmation"
import VolunteerMessage from "./components/pages/request/volunteerMessage"
import RequestMap from "./components/pages/request/map"

import LooperMainView from "./components/pages/request/loopermainView"
import LooperMyTasks from "./components/pages/request/loopermyTasks"
import MedRequest from "./components/pages/request/medRequest"
import FoodRequest from "./components/pages/request/foodRequest"
import OthersRequest from "./components/pages/request/othersRequest"
import LooperProfileWeb from "./components/pages/looper/looperprofileWeb"
import LooperProfileApp from "./components/pages/looper/looperprofileApp"
import RequestDrivingTime from "./components/pages/request/requestDrivingPickupTime"
import DeliveryPayment from "./components/pages/request/deliveryPayment"
import MyHeroApp from "./components/pages/ratings/myheroapp"


import HelperMap from "./components/pages/helper/map"
import Rate from "./components/pages/ratings/rate"
import RatingsPending from "./components/pages/ratings/pending"

import persistentStore from './stores/PersistentStore'

import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/App.css";
import "./assets/css/media-queries.css";

function App() {
  return (
    <div className="App">
      <Provider {...persistentStore}>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/welcome" component={Welcome} />
            <Route path="/signin" component={Signin} />
            <Route path="/registration/terms" component={RegistrationTerms} />
            <Route path="/registration/alternatives" component={RegistrationAlternatives} />
            <Route path="/registration/signin" component={RegistrationSignin} />
            <Route path="/registration/information" component={RegistrationInformation} />
            <Route path="/registration/skills" component={RegistrationSkills} />
            <Route path="/registration/finish" component={RegistrationFinish} />
            <Route path="/request/helpType" component={RequestHelpType} />
            <Route path="/request/thankYou" component={Thankyou} />
            <Route path="/request/reqVolunteer" component={RequestVolunteer} />
            <Route path="/request/receiverReq" component={ReceiverRequest} />
            <Route path="/request/requestType" component={RequestType} />
            <Route path="/request/requestType1" component={RequestType1} />
            <Route path="/request/specify" component={RequestSpecify} />
            <Route path="/request/confirmation" component={RequestConfirmation} />
            <Route path="/request/volunteerMessage" component={VolunteerMessage} />
            <Route path="/request/map" component={RequestMap} />
			<Route path="/request/requestDrivingPickupTime" component={RequestDrivingTime} />
			<Route path="/request/deliveryPayment" component={DeliveryPayment} />
            <Route path="/helper/map" component={HelperMap} />
            <Route path="/ratings/pending" component={RatingsPending} />
            <Route path="/ratings/rate" component={Rate} />
			<Route path="/ratings/myheroapp" component={MyHeroApp} />
			<Route path="/request/othersRequest" component={OthersRequest} />
			<Route path="/request/medRequest" component={MedRequest} />
			<Route path="/request/foodRequest" component={FoodRequest} />
			<Route path="/request/loopermainView" component={LooperMainView} />
			<Route path="/request/loopermyTasks" component={LooperMyTasks} />
			<Route path="/looper/looperprofileWeb" component={LooperProfileWeb} />
			<Route path="/looper/looperprofileApp" component={LooperProfileApp} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

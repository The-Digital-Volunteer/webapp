import { Provider } from 'mobx-react'
import React, {Component} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/pages/home";
import Signin from "./components/pages/signin";
import Welcome from "./components/pages/welcome";

import RegistrationTerms from "./components/pages/registration/terms";
import RegistrationAlternatives from "./components/pages/registration/alternatives";
import RegistrationSignin from "./components/pages/registration/signin";
import RegistrationInformation from "./components/pages/registration/information";
import RegistrationSkills from "./components/pages/registration/skills";
import RegistrationFinish from "./components/pages/registration/finish";

import HeroBoarding from "./components/pages/hero/heroBoarding";


import SelectType from "./components/pages/looper/selectType"

import RequestHelpType from "./components/pages/looper/helpType"
import FoodRequest from "./components/pages/looper/request/foodRequest"
import TransRequest from "./components/pages/looper/request/transRequest"
import MedRequest from "./components/pages/looper/request/medRequest"
import OthersRequest from "./components/pages/looper/request/othersRequest"
import RequestDrivingTime from "./components/pages/looper/requestDrivingPickupTime"
import DeliveryPayment from "./components/pages/looper/deliveryPayment"
import Availability from "./components/pages/looper/availability"
import RequestSplashScreen from "./components/pages/looper/reqSplashScreen"
import RequestFinish from "./components/pages/looper/requestFinish"
import RatingFinish from "./components/pages/ratings/ratingsFinish"

import Watson from "./components/pages/Watson"


import MyTasks from "./components/pages/hero/request/mytasks"
import MyTasks2 from "./components/pages/hero/request/mytasks2"
import MyTasksWeb from "./components/pages/hero/request/mytasksweb"
import MyTasksWebHero from "./components/pages/hero/request/mytaskswebhero"

import ProfileWeb from "./components/pages/hero/profile/myProfile"
import LooperProfile from "./components/pages/looper/profile/myProfile"



import RequestConfirmation from "./components/pages/request/confirmation"
import RequestMap from "./components/pages/request/map"

import HelperMap from "./components/pages/helper/map"
import MarkerInfoWindow from "./components/pages/helper/markerInfoWindow"

import Rate from "./components/pages/ratings/rate"
import RatingsPending from "./components/pages/ratings/pending"

import MyHeroApp from "./components/pages/ratings/myheroapp"
import RateHero from "./components/pages/ratings/ratehero"
import RateLooper from "./components/pages/ratings/ratelooper"

import AcceptHero from "./components/pages/hero/acceptHero"


import persistentStore from './stores/PersistentStore'

import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/App.css";
import "./assets/css/request.css";
import "./assets/css/Looper.css";
import "./assets/css/looper1.css";
import "./assets/css/looper2.css";
import "./assets/css/Map.css";
import "./assets/css/availability.css";
import "./assets/css/profilewebcss.css";
import "./assets/css/profile.css";
import "./assets/css/hero_board.css";


import "./assets/css/media-queries.css";
import logo from "./assets/img/logo.png";

import { UserSession } from 'blockstack';
import { appConfig } from './constants';
import { Connect } from '@blockstack/connect';
import {saveProfile, fetchProfile} from './user-data'

import {withRouter} from "react-router-dom";
import LandingLayout from './components/layout/landingLayout';

const userSession = new UserSession({ appConfig });

/* TODO: Put the navigation function to a separate module, like utils*/

class App extends Component {
  state = {
    userData: null,
    userProfile: null,
  };

  handleSignOut(e) {
    e.preventDefault();
    this.setState({ userData: null });
    userSession.signUserOut(window.location.origin);
  }

  render() {

    const { userData } = this.state;
    const authOptions = {
      redirectTo: '/registration/alternatives',
      appDetails: {
        name: "Digital Volunteers",
        icon: window.location.origin + '/logo.64bba70f.png',
      },
      userSession,
      finished: ({ userSession }) => {
        
        const doFetchProfile = async () => {
        
          this.setState({ userData: userSession.loadUserData() });
        console.log(this.state.userData);
        
        const response = await fetchProfile(userSession);

        if (response.profile === null) {

          this.props.history.push("/registration/alternatives" );
          window.location.reload();
         

        } 
        else {
          this.setState({userProfile: (userSession)});
          this.props.history.push("/helper/map" );
          window.location.reload();
        }
        }

        doFetchProfile();
        
        
    },
  };
  
    return (
      <Connect className="App" authOptions={authOptions}>
      <Provider {...persistentStore}>
	  
        <BrowserRouter>
                <Switch>
                  
				  <Route path="/looper/selectType" component={SelectType} />
				  <Route path="/looper/helpType" component={RequestHelpType} />

				  <Route path="/looper/request/foodRequest" component={FoodRequest} />
				  <Route path="/looper/request/transRequest" component={TransRequest} />
				  <Route path="/looper/request/medRequest" component={MedRequest} />
				  <Route path="/looper/request/othersRequest" component={OthersRequest} />
				  <Route path="/looper/requestDrivingPickupTime" component={RequestDrivingTime} />
				  <Route path="/looper/deliveryPayment" component={DeliveryPayment} />
				  
				  <Route path="/hero/request/mytasks" component={MyTasks} />
                  <Route path="/hero/request/mytasks2" component={MyTasks2} />
                  <Route path="/hero/request/mytasksweb" component={MyTasksWeb} />
                  <Route path="/hero/profile/myProfile" component={ProfileWeb} />
                  <Route path="/looper/profile/myProfile" component={LooperProfile} />
                  
				  <Route path="/hero/request/mytaskswebhero" component={MyTasksWebHero} />
                  
                  <Route path="/helper/map" component={HelperMap} />
                  <Route path="/request/map" component={RequestMap} />
				  <Route path="/helper/markerInfoWindow" component={MarkerInfoWindow} />
				  <Route path="/ratings/ratingsFinish" component={RatingFinish} />
				  <Route path="/looper/availability" component={Availability} />
				  <Route path="/request/helpType" component={RequestHelpType} />
                  <Route path="/hero/heroBoarding" component={HeroBoarding} />
                  <Route path="/hero/acceptHero" component={AcceptHero} />
                  <Route path="/ratings/ratehero" component={RateHero} />
                  
				

                  <LandingLayout>
                  <Route path="/welcome" component={Welcome} />
				  
                  <Route path="/signin" component={Signin} />
                  <Route path="/registration/terms" component={RegistrationTerms} />
                  <Route path="/registration/alternatives" component={RegistrationAlternatives} />
                  <Route path="/registration/signin" component={RegistrationSignin} />
                  <Route path="/registration/information" component={RegistrationInformation} />
				  
                  <Route path="/registration/skills" component={RegistrationSkills} />
                  <Route path="/registration/finish" component={RegistrationFinish} />
                  
				 
	            <Route path="/hero/request/mytaskswebhero" component={MyTasksWebHero} />
               
				<Route path="/looper/reqSplashScreen" component={RequestSplashScreen} />
			   <Route path="/looper/requestFinish" component={RequestFinish} />
				 <Route path="/ratings/myheroapp" component={MyHeroApp} />
                  <Route path="/ratings/ratelooper" component={RateLooper} />
                  

				  
                  <Route path="/request/confirmation" component={RequestConfirmation} />
                  <Route path="/ratings/pending" component={RatingsPending} />
                  <Route path="/ratings/rate" component={Rate} />
                  <Route exact path="/" component={Home}/>
              </LandingLayout>
                </Switch>
        </BrowserRouter>
      </Provider>
    </Connect>
 
    );
  }

  componentDidMount() {
    
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        window.history.replaceState({}, document.title, '/');
        this.setState({ userData: userData });
      });
    } else if (userSession.isUserSignedIn()) {
      this.setState({ userData: userSession.loadUserData() });
    }
  }
}


export default withRouter(App);
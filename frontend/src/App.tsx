import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cart, ellipse, happy, search, square, storefront, triangle } from 'ionicons/icons';
// import Tab1 from './pages/Tab1';
// import Tab2 from './pages/Tab2';
// import Tab3 from './pages/Tab3';
// <IonTabs>
// <IonTabBar slot="bottom">
//            <IonTabButton tab="home" href="/home">
//              <IonIcon aria-hidden="true" icon={storefront} />
//              <IonLabel>Home</IonLabel>
//            </IonTabButton>

//            <IonTabButton tab="search" href="/search">
//              <IonIcon aria-hidden="true" icon={search} />
//              <IonLabel>Search</IonLabel>
//            </IonTabButton>
//            <IonTabButton tab="cart" href="/cart">
//              <IonIcon aria-hidden="true" icon={cart} />
//              <IonLabel>Cart</IonLabel>
//            </IonTabButton>
//            <IonTabButton tab="account" href="/account">
//              <IonIcon aria-hidden="true" icon={happy} />
//              {/* <IonBadge color="primary">12</IonBadge> */}
//              <IonLabel>Account </IonLabel>
//            </IonTabButton>
//          </IonTabBar>
//        </IonTabs>
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    {/* <AuthProvider> */}
        <IonReactRouter>
            <IonRouterOutlet>
              <Redirect exact path="/" to="/home" />
              <Route path="/home" render={() => <Home />} exact={true} />
              {/* <PrivateRoute component={Account} path="/account" exact />
              <PublicRoute
                restricted={true}
                component={Login}
                path="/account/login"
                exact
              />
              <PublicRoute
                restricted={true}
                component={RegisterPage}
                path="/account/register"
                exact
              /> */}
            </IonRouterOutlet>

         
        </IonReactRouter>
      {/* </AuthProvider> */}
  </IonApp>
);

export default App;

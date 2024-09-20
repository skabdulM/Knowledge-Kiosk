import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  cart,
  ellipse,
  happy,
  search,
  square,
  storefront,
  triangle,
} from "ionicons/icons";

import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import Home from "./pages/Home";
import { AuthProvider } from "./Services/UseContext";
import Login from "./pages/Login";
import PrivateRoute from "./Services/privateRoute";
import PublicRoute from "./Services/PublicRoute";
import Admin from "./pages/Admin";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Help from "./pages/Help";
import Contact from "./pages/Contact";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <AuthProvider>
      <IonReactRouter>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          <Route path="/home" render={() => <Home />} exact={true} />
          <Route path="/help" render={() => <Help />} exact={true} />
          <Route path="/contact" render={() => <Contact />} exact={true} />
          <PrivateRoute component={Admin} path="/admin" exact />
          <PrivateRoute component={Teacher} path="/teacher" exact />
          <PrivateRoute component={Student} path="/student" exact />
          <PublicRoute
            restricted={true}
            component={Login}
            path="/login"
            exact
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </AuthProvider>
  </IonApp>
);

export default App;

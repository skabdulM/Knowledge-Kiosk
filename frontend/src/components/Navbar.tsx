import {
  IonButton,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  atCircleOutline,
  bagHandle,
  eye,
  personCircleOutline,
} from "ionicons/icons";
import "./Navbar.css";
import { Link, Redirect, Route } from "react-router-dom";
import { useAuth } from "../Services/UseContext";

const Navbar: React.FC = () => {
  const { isAuthenticated, isRole } = useAuth(); // Get the authentication status from context
  const getRedirectPath = (role: any) => {
    switch (role) {
      case "ADMIN":
        return "/admin";
      case "TEACHER":
        return "/teacher";
      case "STUDENT":
        return "/student";
    }
  };
  return (
    <IonHeader translucent={true}>
      <IonToolbar>
        <div className="navbar">
          <div>Knowledge-Kiosk</div>
          <div>
            <ul>
              <IonList className="navlist">
                <li>
                  <IonItem lines="none" routerLink="/home">
                    Home
                  </IonItem>
                </li>
                <li>
                  <IonItem lines="none" routerLink="/help">
                    Help
                  </IonItem>
                </li>
                <li>
                  <IonItem lines="none" routerLink="/contact">
                    Contact
                  </IonItem>
                </li>
                {!isAuthenticated && (
                  <li>
                    <IonItem lines="none" routerLink="/login">
                      Login
                    </IonItem>
                  </li>
                )}
                {isAuthenticated && (
                  <li>
                    <Link to={getRedirectPath(isRole) || "/home"}>
                      <IonIcon
                        icon={personCircleOutline}
                        size="large"
                      ></IonIcon>
                    </Link>
                  </li>
                )}
              </IonList>
            </ul>
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default Navbar;

import {
  IonButton,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
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

const Navbar: React.FC = () => {
  return (
    <IonHeader translucent={true}>
      <IonToolbar>
        <div className="navbar">
          <div>Knowledge-Kiosk</div>
          <div>
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>Help</li>
              <li>
                <IonIcon
                  icon={personCircleOutline}
                  size="large"
                  slot="icon-only"
                ></IonIcon>
              </li>
            </ul>
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default Navbar;

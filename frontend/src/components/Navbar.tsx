import { IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { bagHandle } from "ionicons/icons";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <IonHeader translucent={true}>
   <div className="navbar">
    <p>
        home
    </p> <p>
        home
    </p> <p>
        home
    </p> <p>
        home
    </p>
   </div>
    </IonHeader>
  );
};

export default Navbar;
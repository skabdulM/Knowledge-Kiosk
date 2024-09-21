import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonImg,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonBreadcrumb,
  IonBreadcrumbs,
  IonIcon,
} from "@ionic/react";
import Navbar from "../components/Navbar"; // Assuming Navbar is a separate component
import "./Home.css"; // External CSS for styling
import "./Contact.css";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import { AdvancedBannerTop } from "../components/AdvancedPrallax";
import { arrowForwardCircle, logoFacebook, logoInstagram, logoIonic, logoLinkedin, logoX } from "ionicons/icons";

const Contact: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event: CustomEvent) => {
    const scrollTop = event.detail.scrollTop;
    setScrollY(scrollTop);
  };

  return (
    <IonPage>
      <IonContent>
        <Navbar />
        <div className="contact-container">
          &nbsp;&nbsp;&nbsp;<IonBreadcrumbs>
            <IonBreadcrumb href="#home">
              Home
              <IonIcon slot="separator" icon={arrowForwardCircle}></IonIcon>
            </IonBreadcrumb>
           
            <IonBreadcrumb active>
              Contact
              <IonIcon slot="separator" icon={arrowForwardCircle}></IonIcon>
            </IonBreadcrumb>
          </IonBreadcrumbs>
          {/* <img className="BgImage" src="https://nis.consulting/wp-content/uploads/2016/10/24_Contact-Us-Header_Background.jpg"/> */}

          <IonLabel>
            <br /><h1><b>Contact Us: <br /> <br /></b></h1>
           <h1><b>Address: </b><br /></h1>
           <h2>Chad Institute of Technology, <br />
            Pineapple Road,<br />
            Powai, Mumbai - 400000<br /><br /></h2>

           <h2><b>Tel:</b> 080094567<br />
           <b>Fax:</b> 098765332<br />
           <b>Email:</b> chadit@chad.com<br /></h2>

            <br /><h1><b>Our Social Connects:</b><br /></h1>

            <IonIcon icon={logoInstagram} size="large"></IonIcon>
            &nbsp;<IonIcon icon={logoFacebook} size="large"></IonIcon>
            &nbsp;<IonIcon icon={logoLinkedin} size="large" ></IonIcon>
            &nbsp;<IonIcon icon={logoX} size="large" ></IonIcon>

          </IonLabel>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Contact;

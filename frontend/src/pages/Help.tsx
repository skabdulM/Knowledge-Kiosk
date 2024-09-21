import React, { useState, useRef } from "react";

import {
  IonPage,
  IonContent,
  IonImg,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonBreadcrumb,
  IonBreadcrumbs,
  IonIcon,
} from "@ionic/react";
import Navbar from "../components/Navbar"; // Assuming Navbar is a separate component
import "./Help.css";
import "./Home.css"; // External CSS for styling

import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import { AdvancedBannerTop } from "../components/AdvancedPrallax";
import { arrowForwardCircle } from "ionicons/icons";

const Help: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const accordionGroupRef = useRef<HTMLIonAccordionGroupElement>(null);

  const handleScroll = (event: CustomEvent) => {
    const scrollTop = event.detail.scrollTop;
    setScrollY(scrollTop);
  };

  return (
    <IonPage>
      <IonContent>
        <Navbar />
        &nbsp;&nbsp;&nbsp;<IonBreadcrumbs>
      <IonBreadcrumb href="#home">
        Home
        <IonIcon slot="separator" icon={arrowForwardCircle}></IonIcon>
      </IonBreadcrumb>
      <IonBreadcrumb active>
        Help
        <IonIcon slot="separator" icon={arrowForwardCircle}></IonIcon>
      </IonBreadcrumb>
      <IonBreadcrumb>
        Contact
        <IonIcon slot="separator" icon={arrowForwardCircle}></IonIcon>
      </IonBreadcrumb>
      <IonBreadcrumb>
        Login
        <IonIcon slot="separator" icon={arrowForwardCircle}></IonIcon>
      </IonBreadcrumb>
    </IonBreadcrumbs>
        <p className="faq-container">
            <b><h1>&nbsp;&nbsp;&nbsp;&nbsp;FAQs</h1></b>
            <IonImg class="img" alt="FAQ Image" src="https://static4.depositphotos.com/1007616/314/v/950/depositphotos_3141808-stock-illustration-faq.jpg"/>
        </p>
        <IonAccordionGroup multiple={true}>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>How can I view my grades?</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
        To view your grades: Log in to the MIS portal. Go to the Students Progress section to see your current and past results.
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>How do I view my fee status or pay fees?</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
        To view your fees deatils: Log in to the MIS.
        Navigate to the "Fee Reciept Generation" section.
        You can view outstanding fees or Deatils of previously paid fees.
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>Where can I find my timetable?
         </IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
        Your timetable is available under the Class Section assigned by the admin  or Teacher.
        </div>
      </IonAccordion>
    </IonAccordionGroup>

      </IonContent>
    </IonPage>
  );
};

export default Help;

import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonImg,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Navbar from "../components/Navbar"; // Assuming Navbar is a separate component
import "./Home.css"; // External CSS for styling
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import { AdvancedBannerTop } from "../components/AdvancedPrallax";

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
        aascdsa
      </IonContent>
    </IonPage>
  );
};

export default Contact;

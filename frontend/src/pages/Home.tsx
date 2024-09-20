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

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event: CustomEvent) => {
    const scrollTop = event.detail.scrollTop;
    setScrollY(scrollTop);
  };

  return (
    <IonPage>
      <IonContent>
        <Navbar />
        <div>
          {/* First parallax section */}
          <section className="parallax-section"></section>

          {/* Content section for scrolling */}
          <div className="content-section">
            Scroll Up and Down this page to see the parallax scrolling effect.
            This div is just here to enable scrolling.
          </div>

          {/* Second parallax section */}
          <section className="parallax-section"></section>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

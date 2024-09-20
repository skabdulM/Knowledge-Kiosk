import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import ExploreContainer from "../components/ExploreContainer";
import Navbar from "../components/Navbar";
  
  const Home: React.FC = () => {
    return (
      <IonPage>
        <IonContent fullscreen>
          <Navbar />
          dwal Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Perferendis esse ut delectus veritatis vel quos accusantium, enim
          laborum aspernatur quas officiis mollitia dicta, cum sed blanditiis
          officia omnis sit quod illo earum eos reiciendis aut facilis suscipit.
          Ipsam, quia.
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;
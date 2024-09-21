import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonImg,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import Navbar from "../components/Navbar"; // Assuming Navbar is a separate component
import "./Home.css"; // External CSS for styling

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event: CustomEvent) => {
    const scrollTop = event.detail.scrollTop;
    setScrollY(scrollTop);
  };
  const cards = [
    {
      name: "Report generation",
      description: "card desc",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkShLbqYSTnT8SemNHJWZzuNuXdrSupU-N0rZpJ9PvbfhHL8SFZzQ0gVAL0XjZUgZSnI&usqp=CAU",
    },
    {
      name: "card 1",
      description: "card desc",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkShLbqYSTnT8SemNHJWZzuNuXdrSupU-N0rZpJ9PvbfhHL8SFZzQ0gVAL0XjZUgZSnI&usqp=CAU",
    },
    {
      name: "card 1",
      description: "card desc",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkShLbqYSTnT8SemNHJWZzuNuXdrSupU-N0rZpJ9PvbfhHL8SFZzQ0gVAL0XjZUgZSnI&usqp=CAU",
    },
    {
      name: "card 1",
      description: "card desc",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkShLbqYSTnT8SemNHJWZzuNuXdrSupU-N0rZpJ9PvbfhHL8SFZzQ0gVAL0XjZUgZSnI&usqp=CAU",
    },
    {
      name: "card 1",
      description: "card desc",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkShLbqYSTnT8SemNHJWZzuNuXdrSupU-N0rZpJ9PvbfhHL8SFZzQ0gVAL0XjZUgZSnI&usqp=CAU",
    },
    {
      name: "fee recipt",
      description: "card desc",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkShLbqYSTnT8SemNHJWZzuNuXdrSupU-N0rZpJ9PvbfhHL8SFZzQ0gVAL0XjZUgZSnI&usqp=CAU",
    },
    {
      name: "card 1",
      description: "card desc",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkShLbqYSTnT8SemNHJWZzuNuXdrSupU-N0rZpJ9PvbfhHL8SFZzQ0gVAL0XjZUgZSnI&usqp=CAU",
    },
    {
      name: "events  1",
      description: "card desc",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkShLbqYSTnT8SemNHJWZzuNuXdrSupU-N0rZpJ9PvbfhHL8SFZzQ0gVAL0XjZUgZSnI&usqp=CAU",
    },
  ];

  return (
    <IonPage>
      <IonContent>
        <Navbar />
        <div>
          {/* First parallax section */}
          <section className="parallax-section">
            {/* Get Started Section */}
            <div className="get-started-section">
              <h2>Get Started</h2>
              <p>
                Ready to dive in? Click the button below to get started with our
                awesome features. You can learn more about our projects,
                achievements, and how you can collaborate with us!
              </p>
              <button className="get-started-button">Get Started</button>
            </div>
          </section>

          {/* Content section for scrolling */}
          <div className="content-section"></div>

          {/* Second parallax section */}
          <section className="3">
            {/* Grid with 3 cards in a row */}
            <IonGrid className="custom-grid">
              <IonRow>
                {cards.map((cardNumber, i) => (
                  <IonCol size="12" size-md="4" key={i}>
                    <IonCard className="themed-card">
                      <IonImg
                        alt="Silhouette of mountains"
                        src={cardNumber.img}
                      />
                      <IonCardHeader>
                        <IonCardTitle>
                          Custom Card Title {cardNumber.name}
                        </IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        Here's a small text description for the custom themed
                        card {cardNumber.description}.
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </section>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

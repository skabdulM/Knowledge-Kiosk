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
  IonFooter,
  IonIcon,
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
import { image, logoFacebook, logoInstagram, logoTwitter } from "ionicons/icons";

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event: CustomEvent) => {
    const scrollTop = event.detail.scrollTop;
    setScrollY(scrollTop);
  };
  const cards = [{ name: "Peer Study  Groups", description: `Suggests study groups based on shared academic goals.`, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3C627Fv1zzPkz3_GgQITKIrloTeLqUJMeQ&s" }, { name: "Career Guidance ", description: `Recommendations for career paths, internships, and job opportunities based on courses and skills.`, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQFRizbFLrip1N1n8qpI8_uimKo_rb87QDRg&s" }, { name: "Real-Time Feedback Loop", description: `Students and faculty can give feedback in real-time on courses and events. Immediate insights for course improvement and curriculum updates.`, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXAKx923i5UUbouKzJooRJMGu9gtpkSZSlg&s" }, {
    name: "Coding Practice Platform", description: `Built-in environment for programming challenges and progress tracking.
`, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkBnAbYjhpOmO-yyUGRks56CeoZAnbFySaw&"
  }, {
    name: "Smart Academic Calendar", description: `Auto-syncs schedules, deadlines, and personalized reminders, while prioritizing tasks and adapting to student needs for seamless academic management.
`, img: "https://www.edecofy.com/blog/wp-content/uploads/2021/02/AcademicCalendarAutomation-1024x538.jpg"
  }, { name: "AI Chatbot", description: `Offers real-time assistance, answering queries and providing personalized support for students, using natural language processing to improve engagement and learning efficiency.`, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYA5fOIfm6K6v3Lrro3MXksMfO3SdglfSyg&s" }]


  return (
    <IonPage>
      <IonContent>
        <Navbar />
        <div>
          {/* First parallax section */}
          <section className="parallax-section">
            {/* Get Started Section */}
            <div className="get-started-section">
              <h2></h2>
              <h1>
              
"Take charge of your academic journey! Tap the button to access your dashboard, manage courses, track grades, and stay on top of your progress."


              </h1>
              <button className="get-started-button">Get Started</button>
              {/* <IonImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SqZBye1P3MOHtnTWfqlPMNwnpSDRukwI5g&s" alt="Example Image" /> */}
            </div>
          </section>

          {/* Content section for scrolling */}
          <div className="content-section">

          </div>

          {/* Second parallax section */}
          <section className="3">
            {/* Grid with 3 cards in a row */}
            {/* <h1 className="features">Our Features: </h1> */}
            <IonGrid className="custom-grid">
              <IonRow>
                {cards.map((cardNumber, i) => (
                  <IonCol className="cardcol" size="12" size-md="4" key={i}>
                    <IonCard className="themed-card">
                      <IonImg
                        className="card-img"
                        alt="Silhouette of mountains"
                        src={cardNumber.img}
                      />
                      <IonCardHeader>
                        <IonCardTitle>{cardNumber.name}</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                       {cardNumber.description}.
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </section>
          <section className="3">
            <div className="get-started-section1  ">
              {/* <h2>Get Started</h2>
              {/* <IonImg  className="styled-image" src="https://idreamcareer.com/wp-content/uploads/2022/06/career-development-plan.webp"/><h4>
              At Knowledge KIOSK, we ensure students are career-ready through dedicated placement support. Our strong industry connections, regular workshops, and campus drives offer access to top internships and job opportunities. With a focus on skill development and career guidance, we prepare students for success in the global job market.  
              </h4> */}
              <div className="get-started-section1">
                <div className="image-text-container">
                  {/* Image on the left */}
                  <IonImg
                    className="styled-image"
                    src="https://idreamcareer.com/wp-content/uploads/2022/06/career-development-plan.webp"
                  />

                  {/* Text and Button on the right */}
                  <div className="text-and-button">
                    <h4 className="text-content">
                      At Knowledge KIOSK, we ensure students are career-ready through dedicated placement support. Our strong industry connections, regular workshops, and campus drives offer access to top internships and job opportunities. With a focus on skill development and career guidance, we prepare students for success in the global job market.
                    </h4>
                    <button className="start-your-journey">Start Your Journey!</button>
                  </div>
                </div>
              </div>
              </div>

          </section>
        </div>
      <IonFooter collapse="fade" hidden={true} no-border className="custom-footer">
      <IonToolbar>
        <IonTitle><p>@Knowledge KISOK</p></IonTitle>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <IonIcon icon={logoFacebook} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <IonIcon icon={logoTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <IonIcon icon={logoInstagram} />
          </a>
        </div>
      </IonToolbar>
    </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Home;

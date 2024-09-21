import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonImg,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonItem,
  IonList,
  IonAccordion,
  IonAccordionGroup,
} from "@ionic/react";
import Navbar from "../components/Navbar"; // Assuming Navbar is a separate component
import "./Student.css"; // External CSS for styling
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import { AdvancedBannerTop } from "../components/AdvancedPrallax";

const Student: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event: CustomEvent) => {
    const scrollTop = event.detail.scrollTop;
    setScrollY(scrollTop);
  };

    const [selectedSegment, setSelectedSegment] = useState<string>("default");
  
    const handleSegmentChange = (event: CustomEvent) => {
      setSelectedSegment(event.detail.value);
    };
    const eventsArray = [
      {
        title: "Technical Paper Presentation",
        description:
          "A Technical Paper Presentation involves showcasing a proposed solution to a specific problem within a technical field. It typically covers the background and significance of the issue, followed by the proposed methodology or innovation, along with key findings and results. The presentation concludes with the potential impact and future applications of the solution in the industry.",
      },
      { title: "Resume Making Workshop", description: "Learn to craft professional resumes and land your dream job." },
      { title: "Coding Hackathon", description: "Compete in a high-energy coding hackathon and solve real-world problems." },
      { title: "AI & ML Seminar", description: "Discover the latest trends in Artificial Intelligence and Machine Learning." },
      { title: "Web Development Bootcamp", description: "Hands-on training on modern web development technologies." },
      { title: "Cybersecurity Awareness Program", description: "Understand the best practices in cybersecurity." },
      { title: "Career Counseling Session", description: "Get career guidance from industry experts." },
    ];
  
  return (
    <IonPage>
      <IonContent>
        <Navbar />


        <IonSegment
          value={selectedSegment}
          onIonChange={handleSegmentChange}
          className="student-segment ion-margin-top"
        >
          <IonSegmentButton value="default">
            <IonLabel>Events Display</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="segment">
            <IonLabel>Academics</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="third">
            <IonLabel>Training & Placements</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/* Content based on the selected segment */}
        {selectedSegment === "default" && (
          <div className="segment-content">
          <h3>Upcoming Events</h3>
          <IonAccordionGroup className="events">
          {eventsArray.map((event, index) => (
            <IonAccordion value={event.title} key={index}>
              <IonItem slot="header" color="light">
                <IonLabel>{event.title}</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                <p>{event.description}</p>
              </div>
            </IonAccordion>
          ))}
        </IonAccordionGroup>
        </div>
        )}

        {selectedSegment === "segment" && (
          <div className="segment-content">
            <h3>Academics</h3>
            <p>
              Get detailed information about the curriculum, exams, and course
              materials. Find academic resources and updates on your subjects.
            </p>
          </div>
        )}

        {selectedSegment === "third" && (
          <div className="segment-content">
            <h3>Training & Placements</h3>
            <p>
              Explore training programs and placement opportunities. Learn about
              industry connections, placement drives, and how to prepare for
              interviews.
            </p>
          </div>
        )}



      {/* <IonSegment disabled={true} value="disabled">
        <IonSegmentButton value="disabled">
          <IonLabel>Disabled</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="third">
          <IonLabel>Third</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      <IonSegment value="active">
        <IonSegmentButton value="first">
          <IonLabel>First</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="active">
          <IonLabel>Active</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="last">
          <IonLabel>Last</IonLabel>
        </IonSegmentButton>
      </IonSegment> */}
      </IonContent>
    </IonPage>
  );
}
export default Student;

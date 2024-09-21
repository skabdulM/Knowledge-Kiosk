import React, { useState } from "react";
import assign from "../../public/assign.png";
import class_schedule from "../../public/class_schedule.jpg";
import exam from "../../public/exam.jpg";
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
  IonMenu,
  IonSplitPane,
} from "@ionic/react";

import Navbar from "../components/Navbar"; // Assuming Navbar is a separate component
import "./Teacher.css";

const Teacher: React.FC = () => {
  const cards = [
    {
      name: "Add Student",
      description: "card desc",
      img: "https://cdn2.iconfinder.com/data/icons/user-23/512/User_Preppy_4.png",
    },
    {
      name: "Assignment ",
      description: "card desc",
      img: "frontendsrcassign.png",
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
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol size="5" size-md="2">
                <IonCard className="dashboard-card">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/user-23/512/User_Preppy_4.png"
                    alt="Add Student"
                    className="card-image"
                  />
                  <IonCardContent className="card-title">
                    Add Student
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="5" size-md="2">
                <IonCard className="dashboard-card">
                  <img
                    src={assign}
                    alt="Assignment Management"
                    className="card-image"
                  />
                  <IonCardContent className="card-title">
                    Assignment Management
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="5" size-md="2">
                <IonCard className="dashboard-card">
                  <img
                    src={class_schedule}
                    alt="Class Schedule"
                    className="card-image"
                  />
                  <IonCardContent className="card-title">
                    Class Schedule
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="5" size-md="2">
                <IonCard className="dashboard-card">
                  <img
                    src={exam}
                    alt="Exam Management"
                    className="card-image"
                  />
                  <IonCardContent className="card-title">
                    Exam Management
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-margin-top">
              <IonCol size="5" size-md="2">
                <IonCard className="dashboard-card">
                  <img
                    src="https://i.pinimg.com/736x/19/fb/01/19fb0153d29d0517821d03112098ec1f.jpg"
                    alt="Class Schedule"
                    className="card-image"
                  />
                  <IonCardContent className="card-title">
                    Generate Class Report
                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol size="5" size-md="2">
                <IonCard className="dashboard-card">
                  <img
                    src="https://i.pinimg.com/474x/0d/5d/ea/0d5dea4c3d32dc65598850d3e4bdd625.jpg"
                    alt="Class Schedule"
                    className="card-image"
                  />
                  <IonCardContent className="card-title">
                    Communication Tools
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Teacher;

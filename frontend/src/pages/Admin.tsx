import React, { useEffect, useRef, useState } from "react";
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
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
  IonCardSubtitle,
  IonAlert,
  IonAvatar,
  IonButton,
  IonButtons,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTextarea,
} from "@ionic/react";
import Navbar from "../components/Navbar"; // Assuming Navbar is a separate component
import "./Admin.css"; // External CSS for styling
import axios from "axios";
import Cookies from "js-cookie";
import { ServerUrl } from "../Constants/constants";

const Admin: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  const [classes, setClass] = useState([]);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [subjectName, setSubjectName] = useState<string>("");
  const [subjectDesc, setSubjectDesc] = useState<string>("");

  useEffect(() => {
    getClasses();
  }, []);

  const years = [
    { value: "FE", label: "First Year" },
    { value: "SE", label: "Second Year" },
    { value: "TE", label: "Third Year" },
    { value: "BE", label: "Final Year" },
  ];

  const getClasses = async () => {
    const url = ServerUrl + "class/listclass";
    const subs = await axios.get(url);
    console.log(subs);
    setClass(subs.data);
  };
  // Function to handle form submission
  const addTeacher = async (data: any) => {
    const { values } = data.detail;
    if (data.detail) {
      values.phone = data.detail.phone;
    }
    try {
      const url = ServerUrl + "teacher/addteacher";
      const access_token = Cookies.get("access_token");
      const response = await axios.post(url, values, {
        headers: { Authorization: `Bearer ${access_token}` },
      });
    } catch (error) {
      console.log(error);
    }
    // You can process the formData here or send it to an API
  };

  function dismiss() {
    modal.current?.dismiss();
  }

  const handleSubmit = async () => {
    if (!selectedClass || !subjectName || !subjectDesc) {
      alert("Please fill all the fields");
      return;
    }

    // Create the data object to be submitted
    const formData = {
      classId: selectedClass,
      year: selectedYear,
      subjectName: subjectName,
      description: subjectDesc,
    };
    console.log(formData);
    try {
      const url = ServerUrl + "subject/addSubject";
      const access_token = Cookies.get("access_token");
      const response = await axios.post(url, formData, {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      console.log(response);

      setSelectedClass(null);
      setSubjectName("");
      setSelectedYear(null);
      setSubjectDesc("");
    } catch (error) {
      console.log(error);
    }
    // Reset the form after submission
  };

  return (
    <IonPage>
      <IonContent>
        <Navbar />
        <IonTitle
          className="ion-margin-top"
          style={{ margin: "2rem 0 2rem 2rem" }}
        >
          Dashboard
        </IonTitle>
        <IonCard
          className="teacher-card-light"
          color="light"
          style={{ margin: "0 3rem 0 3rem" }}
          id="addTeacherAlert"
        >
          <IonCardHeader>
            <IonCardTitle>Add a Teacher</IonCardTitle>
            <IonCardSubtitle>
              Fill in the details of the teacher
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <p style={{ color: "#5e9bd3" }}>
              Ensure you provide accurate details for the teacher.
            </p>
          </IonCardContent>
        </IonCard>
        <IonAlert
          trigger="addTeacherAlert"
          header="Please enter your info"
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              handler: () => {
                console.log("Cancel clicked");
              },
            },
            {
              text: "OK",
              handler: (data) => addTeacher({ detail: { values: data } }), // Call handleSubmit with data
            },
          ]}
          inputs={[
            {
              name: "name", // Add name attributes to collect input values
              placeholder: "Name",
            },
            {
              name: "email",
              type: "email", // Set email type
              placeholder: "Email",
            },
            {
              name: "password",
              type: "password", // Set password type
              placeholder: "Password",
            },
            {
              name: "phone",
              type: "tel", // Set phone type
              placeholder: "Phone",
              value: null,
            },
          ]}
        ></IonAlert>
        <IonCard
          className="subject-card-light"
          color="light"
          id="addSubjectAlert"
          style={{ margin: "3rem 3rem 0 3rem" }}
        >
          <IonCardHeader>
            <IonCardTitle>Add a Subject</IonCardTitle>
            <IonCardSubtitle>Enter subject details</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <p style={{ color: "#66bb6a" }}>
              This will create a new subject in the system.
            </p>
          </IonCardContent>
        </IonCard>
        <IonModal ref={modal} trigger="addSubjectAlert">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Add Subject</IonTitle>
              <IonButtons slot="end">
                <IonButton
                  onClick={() => {
                    handleSubmit(), dismiss();
                  }}
                >
                  Submit
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonList>
              <IonItem>
                <IonLabel position="stacked">Subject Name</IonLabel>
                <IonInput
                  placeholder="Enter subject name"
                  value={subjectName}
                  onIonChange={(e) => setSubjectName(e.detail.value!)}
                />
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Subject Description</IonLabel>
                <IonInput
                  placeholder="Enter subject description"
                  value={subjectDesc}
                  onIonChange={(e) => setSubjectDesc(e.detail.value!)}
                />
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Select Class</IonLabel>
                <IonSelect
                  placeholder="Select Class"
                  value={selectedClass}
                  onIonChange={(e) => setSelectedClass(e.detail.value)}
                >
                  {classes.map((className: any, classIndex) => (
                    <IonSelectOption key={classIndex} value={className.id}>
                      {className.name}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Select Year</IonLabel>
                <IonSelect
                  placeholder="Select Year"
                  value={selectedYear}
                  onIonChange={(e) => setSelectedYear(e.detail.value)}
                >
                  {years.map((year, yearIndex) => (
                    <IonSelectOption key={yearIndex} value={year.value}>
                      {year.label}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
            </IonList>
          </IonContent>
        </IonModal>
        <IonCard
          className="assign-card-light"
          color="light"
          style={{ margin: "3rem 3rem 0 3rem" }}
          id="assignSubject"
        >
          <IonCardHeader>
            <IonCardTitle>Assign a Subject</IonCardTitle>
            <IonCardSubtitle>Choose a teacher and a subject</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <p style={{ color: "#ffcc80" }}>
              Assign a subject to the teacher for the upcoming semester.
            </p>
          </IonCardContent>
        </IonCard>
        <IonAlert
          trigger="assignSubject"
          header="Please enter your info"
          buttons={["OK"]}
          inputs={[
            {
              placeholder: "Name",
            },
            {
              placeholder: "Nickname (max 8 characters)",
              attributes: {
                maxlength: 8,
              },
            },
            {
              type: "number",
              placeholder: "Age",
              min: 1,
              max: 100,
            },
            {
              type: "textarea",
              placeholder: "A little about yourself",
            },
          ]}
        ></IonAlert>
      </IonContent>
    </IonPage>
  );
};

export default Admin;

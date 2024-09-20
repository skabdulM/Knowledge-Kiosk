import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
  useIonAlert,
  useIonRouter,
} from "@ionic/react";
import "./Login.css";
import { eye, eyeOff } from "ionicons/icons";
import { useState } from "react";
import { useAuth } from "../Services/UseContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { User } from "../Constants/interfaces";
import Navbar from "../components/Navbar";

const LoginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email format"
    )
    .required("Mail is required"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain one uppercase, one number and one special case character"
    )
    .min(8, "Min password length is 8")
    .max(15, "Max password length is 15"),
  role: yup
    .string()
    .required("Please select your role")
    .oneOf(["ADMIN", "STUDENT", "TEACHER"], "Invalid role selected"),
});

const Login: React.FC = () => {
  const { loginUser } = useAuth();
  const navigate = useIonRouter();
  const [presentAlert] = useIonAlert();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const changeVisibility = () => {
    setShowPassword(!showPassword);
  };

  const doLogin = async (data: User) => {
    //BUG  : RETURS ONLY ERROR OBJECT THEREFORE ERROR OCCURS ON SUCCESSFUL LOGIN
    const login: any = await loginUser(data);
    if (login.response.status == 403) {
      presentAlert({
        subHeader: login.response.data.error + " " + login.response.status,
        message: login.response.data.message,
      });
    } else {
      presentAlert({
        subHeader: "Something went wrong",
        message: "Please contact the administrator",
      });
    }
  };

  return (
    <IonPage>
      <Navbar />
      <IonContent fullscreen>
        <IonGrid>
          <IonList style={{ background: "none" }}>
            <form onSubmit={handleSubmit(doLogin)}>
              <IonRow className="ion-justify-content-center">
                <IonCol size-md="6" size-lg="5" size-xs="12">
                  <IonItem lines="none">
                    <IonInput
                      {...register("email")}
                      className="ion-margin-top"
                      labelPlacement="floating"
                      fill="outline"
                      type="email"
                      inputmode="email"
                      placeholder="Enter your E-mail"
                      autocomplete="email"
                      name="email"
                      label="E-mail"
                    ></IonInput>
                  </IonItem>
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    as={<div className="error-messages" />}
                  />
                </IonCol>
              </IonRow>

              <IonRow className="ion-justify-content-center">
                <IonCol
                  size-md="6"
                  size-lg="5"
                  size-xs="12"
                  className="ion-text-end"
                >
                  <IonItem lines="none">
                    <IonInput
                      {...register("password")}
                      className="ion-margin-top"
                      labelPlacement="floating"
                      label="Password"
                      fill="outline"
                      placeholder="Enter your Password"
                      name="password"
                      spellCheck="true"
                      type={showPassword ? "text" : "password"}
                      autocomplete="current-password"
                      clearOnEdit={false}
                    ></IonInput>
                    <IonButton
                      className="ion-margin-top"
                      shape="round"
                      slot="end"
                      aria-label="Show/hide"
                      onClick={changeVisibility}
                    >
                      <IonIcon
                        slot="icon-only"
                        icon={showPassword ? eyeOff : eye}
                        aria-hidden="true"
                      ></IonIcon>
                    </IonButton>
                  </IonItem>
                  <ErrorMessage
                    errors={errors}
                    name="password"
                    as={<div className="error-messages" />}
                  />
                </IonCol>
              </IonRow>
              <IonRow className="ion-justify-content-center">
                <IonCol size-md="6" size-lg="5" size-xs="12">
                  <IonItem lines="none">
                    <IonSelect
                      {...register("role")}
                      label="Select Login"
                      className="ion-margin-top"
                      name="role"
                      fill="outline"
                      labelPlacement="floating"
                      interface="popover"
                    >
                      <IonSelectOption value="STUDENT">Student</IonSelectOption>
                      <IonSelectOption value="ADMIN">Admin</IonSelectOption>
                      <IonSelectOption value="TEACHER">Teacher</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow className="ion-justify-content-center">
                <IonCol
                  className="ion-text-end"
                  size-md="6"
                  size-lg="5"
                  size-xs="12"
                >
                  <IonButton
                    expand="block"
                    strong
                    style={{ padding: "0 16px 0 16px" }}
                    type="submit"
                  >
                    Login
                  </IonButton>
                </IonCol>
              </IonRow>
            </form>
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;

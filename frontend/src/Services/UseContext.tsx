import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../Constants/interfaces";
import axios from "axios";
import Cookies from "js-cookie";
import { ServerUrl } from "../Constants/constants";
import { useIonAlert, useIonToast } from "@ionic/react";
import { alertCircleOutline, alertOutline } from "ionicons/icons";
interface AuthContextProps {
  isAuthenticated: boolean;
  isVerified: boolean;
  authorizeUser: () => void;
  loginUser: (user: User) => void;
  logoutUser: () => void;
  verificationToken: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();

  useEffect(() => {
    authorizeUser();
  }, []);

  const presentToast = (message: string) => {
    present({
      message: message,
      duration: 1500,
      position: "bottom",
      animated: true,
      color: "primary",
      icon: alertCircleOutline,
    });
  };

  const loginUser = async (user: User) => {
    try {
      const login_url = ServerUrl + "auth/signin";
      const login_response = await axios.post(login_url, user);
      const access_token = login_response.data.access_token;
      checkAuthorization(access_token);
      console.log(login_response);
    } catch (error) {
      return error;
    }
  };

  const checkAuthorization = async (access_token: string) => {
    const getuser_url = ServerUrl + "user/me";
    const response = await axios.get(getuser_url, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    if (response.status === 200) {
      const expirationDate = new Date();
      expirationDate.setHours(expirationDate.getHours() + 24);
      Cookies.set("access_token", access_token, {
        expires: expirationDate,
      });
      Cookies.set("verified", response.data.isVerified, {
        expires: expirationDate,
      });
      setIsVerified(response.data.isVerified);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  const authorizeUser = async () => {
    const access_token = Cookies.get("access_token");
    const verified: any = Cookies.get("verified");
    access_token ? setIsAuthenticated(true) : setIsAuthenticated(false);
    if (verified == "true") setIsVerified(true);
  };

  const logoutUser = () => {
    Cookies.remove("access_token");
    Cookies.remove("verified");
    setIsAuthenticated(false);
    setIsVerified(false);
  };

  const doVerify = async (verificationCode: any) => {
    const verificationURL = ServerUrl + "auth/verify";
    try {
      const access_token = Cookies.get("access_token");
      const response = await axios.post(
        verificationURL,
        {
          code: verificationCode,
        },
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );

      const expirationDate = new Date();
      expirationDate.setHours(expirationDate.getHours() + 24);
      Cookies.set("verified", "true", {
        expires: expirationDate,
      });
      setIsVerified(true);
      presentToast("Verified Successfully.");
    } catch (error) {
      presentToast("Invalid verification Code");
    }
  };

  const resendVerification = async () => {
    const getuser_url = ServerUrl + "user/me";
    const verificationURL = ServerUrl + "auth/verification/resend";
    const access_token = Cookies.get("access_token");
    try {
      const user = await axios.get(getuser_url, {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      const response = await axios
        .post(verificationURL, {
          email: user.data.email,
        })
        .then(() => presentToast("Verification Code Sent"));
    } catch (error) {
      console.log(error);
    }
  };

  const verificationToken = () => {
    presentAlert({
      header: "Enter Verification Code",
      inputs: [
        {
          name: "verificationCode",
          type: "text",
          placeholder: "6-digit code",
          attributes: {
            inputmode: "numeric",
            minlength: 6,
            maxlength: 6,
            pattern: "\\d*",
          },
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Resend Token",
          handler: () => {
            resendVerification();
          },
        },
        {
          text: "Ok",
          handler: (data) => {
            const verificationCode = data.verificationCode;
            if (/^\d{6}$/.test(verificationCode)) {
              doVerify(verificationCode);
            } else {
              presentToast("Invalid code");
            }
          },
        },
      ],
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isVerified,
        authorizeUser,
        loginUser,
        logoutUser,
        verificationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

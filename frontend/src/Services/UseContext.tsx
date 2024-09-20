import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../Constants/interfaces";
import axios from "axios";
import Cookies from "js-cookie";
import { ServerUrl } from "../Constants/constants";
import { useIonAlert, useIonToast } from "@ionic/react";
interface AuthContextProps {
  isAuthenticated: boolean;
  loginUser: (user: User) => void;
  logoutUser: () => void;
  isRole: Roles | undefined;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);
enum Roles {
  STUDENT = "STUDENT",
  ADMIN = "ADMIN",
  TEACHER = "TEACHER",
}
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRole, setIsRole] = useState<Roles | undefined>(undefined);

  useEffect(() => {
    authorizeUser();
  }, []);

  const loginUser = async (user: User) => {
    try {
      const login_url = ServerUrl + "auth/signin";
      const login_response = await axios.post(login_url, user);
      const access_token = login_response.data.access_token;
      const expirationDate = new Date();
      expirationDate.setHours(expirationDate.getHours() + 24);
      Cookies.set("access_token", access_token, {
        expires: expirationDate,
      });
      Cookies.set("role", user.role, {
        expires: expirationDate,
      });
      setIsAuthenticated(true);
      setIsRole(user.role);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const authorizeUser = async () => {
    const access_token = Cookies.get("access_token");
    const role = Cookies.get("role");
    console.log(role);

    switch (role) {
      case "ADMIN":
        setIsRole(Roles.ADMIN);
        break;

      case "TEACHER":
        setIsRole(Roles.TEACHER);
        break;

      case "STUDENT":
        setIsRole(Roles.STUDENT);
        break;
    }
    console.log(isRole);

    access_token ? setIsAuthenticated(true) : setIsAuthenticated(false);
  };

  const logoutUser = () => {
    Cookies.remove("access_token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        logoutUser,
        isAuthenticated,
        isRole,
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

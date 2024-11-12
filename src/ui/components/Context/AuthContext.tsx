import { UserType } from "@/types/UserType";
import axios from "axios";
// import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useState } from "react";

interface AuthState {
  token: string | null;
  authenticated: boolean | null;
  user: UserType | null;
}

interface AuthProps {
  authState?: AuthState;
  onRegister?: (email: string, password: string) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    authenticated: null,
    user: null,
  });

  // A REVOIR ?
  const register = async (email: string, password: string) => {
    try {
      return await axios.post(`${process.env.API_BASE_URL}/api/users`, {
        email,
        password,
      });
    } catch (error) {
      return { error: true, message: error };
    }
  };

  const login = async (email: string, password: string) => {
    try {
      axios.defaults.headers.common["Content-Type"] = "application/json";
      const response = await axios.post(
        `${process.env.API_BASE_URL}/api/login_check`,
        { username: email, password }
      );

      // Set auth state
      setAuthState({
        token: response.data.token,
        authenticated: true,
        user: response.data.user,
      });

      // Set token into HTTP headers
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      // store the token
      window.auth.saveToken(response.data.token);

      return response;
    } catch (error) {
      return { error: true, message: error };
    }
  };

  const logout = async () => {
    // Delete token
    window.auth.removeToken();

    // update HTTP headers
    axios.defaults.headers.common["Authorization"] = "";

    // Reset auth state
    setAuthState({
      token: null,
      authenticated: false,
      user: null,
    });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

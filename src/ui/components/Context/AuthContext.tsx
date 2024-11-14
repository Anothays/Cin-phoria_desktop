import { UserType } from "@/types/UserType";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthState {
  token: string | null;
  authenticated: boolean | null;
  user: UserType | null;
}

interface AuthProps {
  authState?: AuthState;
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

  useEffect(() => {
    const loadToken = async () => {
      const token = await window.auth.getToken();
      console.log(window.auth);

      const userString = await window.auth.getUserInfo();
      if (token && userString) {
        const user = JSON.parse(userString);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setAuthState({ token, authenticated: true, user });
      }
    };
    loadToken();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      axios.defaults.headers.common["Content-Type"] = "application/json";
      const response = await axios.post(
        `${process.env.API_BASE_URL}/api/staff/login_check`,
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
      window.auth.saveToken({
        token: response.data.token,
        user: JSON.stringify(response.data.user),
      });

      return response;
    } catch (error) {
      return { error: true, message: error };
    }
  };

  const logout = async () => {
    // Delete token
    window.auth.removeToken();

    // Delete user infos
    window.auth.removeUserInfo();

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
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

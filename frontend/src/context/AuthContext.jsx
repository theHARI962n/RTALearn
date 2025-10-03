import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  // Load user from token
  useEffect(() => {
    const fetchProfile = async () => {
      if (token) {
        try {
          const { data } = await api.get("/profile");
          setUser(data);
        } catch (err) {
          console.error("Auth error:", err);
          logout();
        }
      }
      setLoading(false);
    };
    fetchProfile();
  }, [token]);

  // Login function
  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

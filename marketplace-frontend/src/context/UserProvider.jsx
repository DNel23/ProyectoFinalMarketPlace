import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

// Dirección del servidor en Render
const API_URL = "https://proyectofinalbackend-g120.onrender.com";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  // FUNCIÓN NUEVA: Obtiene los datos del usuario (nombre, email, etc.) usando el Token
  const getProfile = async (token) => {
    try {
      const response = await fetch(`${API_URL}/usuarios`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        // Guardamos todos los datos (nombre incluido) para que el Perfil no se rompa
        setUser({ ...data, logged: true });
      }
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/productos`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    getProducts();
    
    // Si hay un token al recargar la página, recuperamos los datos del usuario
    const token = localStorage.getItem("token");
    if (token) {
      getProfile(token);
    }
  }, []);

  const registerUser = async (newUser) => {
    try {
      const response = await fetch(`${API_URL}/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) throw new Error("Error en el registro");
      return true;
    } catch (error) {
      console.error("Error al registrar:", error);
      return false;
    }
  };

  const login = async (credentials) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const token = await response.text();
        localStorage.setItem("token", token);
        
        // IMPORTANTE: Una vez que tenemos el token, pedimos el perfil completo
        // antes de decir que el login fue exitoso
        await getProfile(token);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error en el login:", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, registerUser, products, API_URL }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

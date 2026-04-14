import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();
const API_URL = "https://proyectofinalbackend-g120.onrender.com";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  const getProfile = async (token) => {
    try {
      const response = await fetch(`${API_URL}/perfil`, { 
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        setUser({ ...data.user, logged: true });
      }
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/productos`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    getProducts();
    const token = localStorage.getItem("token");
    if (token) getProfile(token);
  }, []);

  const registerUser = async (newUser) => {
    try {
      const response = await fetch(`${API_URL}/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      return response.ok;
    } catch (error) {
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
        await getProfile(token);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  // NUEVA: Función para publicar productos en Neon
  const addProduct = async (product) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${API_URL}/productos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        await getProducts(); // Refrescamos la lista automáticamente
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error al publicar:", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, registerUser, addProduct, products, API_URL }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

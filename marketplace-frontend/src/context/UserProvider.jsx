import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

// Definimos la URL del servidor en Render 
// motor en la nube
const API_URL = "https://proyectofinalbackend-g120.onrender.com";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/productos`);
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error("Error al obtener productos desde la nube:", error);
      }
    };
    getProducts();
  }, []);

  const login = (userData) => {
    setUser(userData); 
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, products, API_URL }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

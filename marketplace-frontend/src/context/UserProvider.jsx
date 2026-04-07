import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

// Dirección del servidor en Render
const API_URL = "https://proyectofinalbackend-g120.onrender.com";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  // 1. Obtener productos de la base de datos al cargar la app
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
    
    // Al cargar, verificamos si hay un token guardado para mantener la sesión
    const token = localStorage.getItem("token");
    if (token) {
      // Aquí podrías opcionalmente validar el token con el backend
      setUser({ logged: true }); 
    }
  }, []);

  // 2. Función para Registrar Usuario (Persistencia en Neon)
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

  // 3. Función para Iniciar Sesión (Autenticación JWT)
  const login = async (credentials) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const token = await response.text();
        localStorage.setItem("token", token); // Guardamos la llave en el navegador
        setUser({ email: credentials.email, logged: true });
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error en el login:", error);
      return false;
    }
  };

  // 4. Cerrar Sesión
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

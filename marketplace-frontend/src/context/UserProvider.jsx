import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

// Dirección del servidor en Render
const API_URL = "https://proyectofinalbackend-g120.onrender.com";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  // FUNCIÓN CORREGIDA: Llama a /perfil y accede a data.user
  const getProfile = async (token) => {
    try {
      const response = await fetch(`${API_URL}/perfil`, { 
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        // data.user contiene { email, nombre, avatar } desde el backend
        setUser({ ...data.user, logged: true });
      } else {
        // Si el token no es válido, limpiamos el estado
        logout();
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
    
    // Recuperamos sesión si existe un token
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
        
        // Obtenemos los datos completos del usuario antes de terminar
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
  const addProduct = async (product) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${API_URL}/productos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Enviamos el token para saber quién publica
        },
        body: JSON.stringify(product),
      });
  
      if (response.ok) {
        // Opcional: Volver a pedir los productos para que se actualice la lista
        const res = await fetch(`${API_URL}/productos`);
        const updatedProducts = await res.json();
        setProducts(updatedProducts);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error al publicar producto:", error);
      return false;
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, registerUser, products, API_URL, addProduct }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

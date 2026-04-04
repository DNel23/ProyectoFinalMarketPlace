import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  

  const [products, setProducts] = useState([]);


  useEffect(() => {

    const initialProducts = [
      { id: 1, nombre: "Saco de Papas 25kg", precio: 15000, stock: 10, img: "https://cdnx.jumpseller.com/www-agroloar-cl/image/56008798/sites_products-630c944517a85.jpg?1743427213" },
      { id: 2, nombre: "Miel Orgánica 1lt", precio: 8000, stock: 5, img: "https://cdnx.jumpseller.com/organic-farm/image/53421865/ofc_products_miel_mf_1.jpg?1729372639" }
    ];
    setProducts(initialProducts);
  }, []);


  const login = (userData) => {
    setUser(userData); 
  };


  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout, products }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
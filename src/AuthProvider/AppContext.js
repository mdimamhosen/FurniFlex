import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  getListFromLocalStorage,
  saveListToLocalStorage,
  saveUserToLocalStorage,
  getUserFromLocalStorage,
} from "./Utils";

// Create the context
export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [list, setList] = useState(getListFromLocalStorage() || []);
  const [user, setUser] = useState(getUserFromLocalStorage());
  const [loading, setLoading] = useState(false);

  // Fetch items from the API
  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch("./products.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch items");
    } finally {
      setLoading(false);
    }
  };

  // Update `addToList` to set `inList` property on the item
  const addToList = (item) => {
    setList((prevList) => {
      const newList = [...prevList, item];
      saveListToLocalStorage(newList);
      toast.success("Item added to list");
      return newList;
    });
  };

  // Update `removeFromList` to set `inList` property on the item
  const removeFromList = (itemId) => {
    setList((prevList) => {
      const newList = prevList.filter((item) => item.id !== itemId);
      saveListToLocalStorage(newList);
      toast.success("Item removed from list");
      return newList;
    });
  };

  // User signup
  const signup = (userInfo) => {
    const existingUser = getUserFromLocalStorage();
    if (existingUser) {
      toast.error("User already exists");
      return;
    }
    saveUserToLocalStorage(userInfo);
    setUser(userInfo);
    toast.success("Signed up successfully. Please login now.");
  };
  // User login
  const login = (email, password) => {
    var storedUser = getUserFromLocalStorage();
    var savedUserUpdate = { ...storedUser };
    console.log(savedUserUpdate);
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      savedUserUpdate.isVerified = true;
      setUser(storedUser);
      saveUserToLocalStorage(savedUserUpdate);
      window.location.href = "/";

      toast.success("Logged in successfully");
    } else {
      toast.error("Invalid email or password");
    }
  };

  // User logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.info("Logged out successfully");
  };

  // Context values
  const contextValues = {
    items,
    setItems,
    fetchItems,
    addToList,
    removeFromList,
    list,
    signup,
    login,
    logout,
    user,
    setLoading,
    loading,
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
}

export default AppContextProvider;

export const saveListToLocalStorage = (list) => {
  localStorage.setItem("list", JSON.stringify(list));
};

export const getListFromLocalStorage = () => {
  const storedList = localStorage.getItem("list");
  return storedList ? JSON.parse(storedList) : [];
};

export const saveUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
};

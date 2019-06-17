export const isLoggedIn = () => {
  if (localStorage.getItem("token") !== null) return true;
  else return false;
};

export const setItem = (key, value) => {
  return localStorage.setItem(key, value);
};

export const getItem = key => {
  return localStorage.getItem(key);
};

export const clearSession = () => {
  localStorage.clear();
};

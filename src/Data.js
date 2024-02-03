
const localStorageKey = 'user_data';

const getUsers = () => {
  const storedData = localStorage.getItem(localStorageKey);
  return storedData ? JSON.parse(storedData) : [];
};

const setUsers = (users) => {
  localStorage.setItem(localStorageKey, JSON.stringify(users));
};

const users = getUsers();

export  { users, setUsers };

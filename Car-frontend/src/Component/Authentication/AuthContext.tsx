import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface User {
  fullName: string;
  email: string;
  password: string;
}

interface AuthContextType {
  currentUser: User | null;
  signup: (fullName: string, email: string, password: string) => { success: boolean; message: string };
  login: (email: string, password: string) => { success: boolean; message: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Load logged-in user from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('luxauto_current_user');
    if (stored) {
      setCurrentUser(JSON.parse(stored));
    }
  }, []);

  // Get all registered users from localStorage
  const getUsers = (): User[] => {
    const stored = localStorage.getItem('luxauto_users');
    return stored ? JSON.parse(stored) : [];
  };

  const saveUsers = (users: User[]) => {
    localStorage.setItem('luxauto_users', JSON.stringify(users));
  };

  const signup = (fullName: string, email: string, password: string) => {
    const users = getUsers();
    const exists = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (exists) {
      return { success: false, message: 'An account with this email already exists.' };
    }

    const newUser: User = { fullName, email, password };
    saveUsers([...users, newUser]);
    return { success: true, message: 'Account created successfully! You can now sign in.' };
  };

  const login = (email: string, password: string) => {
    const users = getUsers();
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      return { success: false, message: 'No account found with this email. Please sign up first.' };
    }

    if (user.password !== password) {
      return { success: false, message: 'Incorrect password. Please try again.' };
    }

    setCurrentUser(user);
    localStorage.setItem('luxauto_current_user', JSON.stringify(user));
    return { success: true, message: `Welcome back, ${user.fullName}!` };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('luxauto_current_user');
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

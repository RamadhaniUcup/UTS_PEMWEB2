import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: { nim: string } | null;
  isAuthenticated: boolean;
  login: (userData: { nim: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (userData) => set({ user: userData, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage', // Nama kunci di LocalStorage
    }
  )
);
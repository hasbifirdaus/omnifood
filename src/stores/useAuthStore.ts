import { create } from "zustand";

type AuthState = {
  user: { email: string; name?: string } | null;
  isLoggedIn: boolean;
  login: (user: AuthState["user"]) => void;
  logout: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (user) => set({ user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));

export default useAuthStore;

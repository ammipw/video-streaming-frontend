import { create } from 'zustand';

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

const demoUser: User = {
  id: "1",
  name: "John Doe",
  avatarUrl: "https://example.com/avatar.jpg"
};

export interface UserState {
  user: User;
}

export const useUser = create<UserState>((set) => ({
    user: demoUser
}));
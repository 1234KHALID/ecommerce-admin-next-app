"use client"
import { create } from 'zustand'

interface useStoreModaleStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useStoreModal = create<useStoreModaleStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
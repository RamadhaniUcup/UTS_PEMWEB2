import { create } from 'zustand';
import { persist } from "zustand/middleware";

interface Pembicara {
    id: number;
    nama: string;
    role: string;
    foto: string;
}

interface PembicaraState {
    pembicaraList: Pembicara[];
    addPembicara: (pembicara: Pembicara) => void;
    deletePembicara: (id: number) => void;
}

export const usePembicaraStore = create<PembicaraState>()(
    persist(
        (set) => ({
            pembicaraList: [],
            addPembicara: (newPembicara) => set((state) => ({ pembicaraList: [...state.pembicaraList, newPembicara] })),
            deletePembicara: (id) => set((state) => ({ pembicaraList: state.pembicaraList.filter(p => p.id !== id) })),
        }),
        { name: "pembicara-storage" }
    )
);
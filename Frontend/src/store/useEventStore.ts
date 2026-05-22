import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Event {
    id: number;
    namaEvent: string;
    pembicara: string;
    tanggal: string;
    jam: string;
}

interface EventState {
    events: Event[];
    addEvent: (event: Event) => void;
    deleteEvent: (id: number) => void;
}

export const useEventStore = create<EventState>()(
    persist(
        (set) => ({
            events: [],
            addEvent: (newEvent) => set((state) => ({ events: [...state.events, newEvent] })),
            deleteEvent: (id) => set((state) => ({ events: state.events.filter(e => e.id !== id) })),
        }),
        { name: "event-storage" }
    )
);
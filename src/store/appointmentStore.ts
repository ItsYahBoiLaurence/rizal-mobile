import { create } from "zustand";

type AppointmentState = {
    date: Date | string | null | undefined
    type: string | null
}

type AppointmentAction = {
    setDate: (date: Date | null | undefined) => void,
    setType: (type: string | null) => void
}

type AppointmentStoreType = AppointmentState & AppointmentAction


export const useAppointment = create<AppointmentStoreType>(
    (set) => ({
        date: null,
        type: null,
        setDate: (date) => {
            set({
                date
            })
        },
        setType: (type) => {
            set({
                type
            })
        }
    }))
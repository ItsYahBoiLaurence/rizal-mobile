import type { UserInformation } from "@/types/User";
import { create } from "zustand";

export type ProfileStates = {
    profile: UserInformation | null
    isProfileCompleted: boolean
}

export type ProfileActions = {
    setProfile: (profile: UserInformation) => void
}

export type ProfileStore = ProfileStates & ProfileActions

export const useProfileStore = create<ProfileStore>((set) => ({
    profile: null,
    isProfileCompleted: false,
    setProfile: (profile) => {
        set({
            profile
        })
    }
}))
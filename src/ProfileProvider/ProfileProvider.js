import { createContext, useContext } from "react";
import db from "../db/db";
import useDBState from "../db/useDBState";

const ProfileContext = createContext();

function encodeB64(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    let binary = "";
    data.forEach((byte) => binary += String.fromCharCode(byte));
    return btoa(binary);
}

function decodeB64(b64) {
    try {
        const binary = atob(b64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        const decoder = new TextDecoder();
        return decoder.decode(bytes);
    } catch (e) {
        return null;
    }
}

export function ProfileProvider({ dbName, migrateProfile, debounceTimer = 1000, children }) {
    const [profiles, setProfiles] = useDBState(dbName, "profiles", ["default"]);
    const [currentProfile, setCurrentProfile] = useDBState(dbName, "currentProfile", "default");
    const [profileData, setProfileData] = useDBState(dbName, `profile-${currentProfile}`, migrateProfile(), {debounced: debounceTimer});

    const addProfile = async (name) => {
        if (!name) return;
        if (profiles.includes(name)) return;
        setProfiles(profiles => ([...profiles, name]));
        await db.setItem(dbName, `profile-${name}`, migrateProfile());
    };

    const switchProfile = async (name) => {
        if (!name) return;
        if (!profiles.includes(name)) return;
        db.setItem(dbName, `profile-${currentProfile}`, profileData);
        const loadedProfile = await db.getItem(dbName, `profile-${name}`);
        setProfileData(migrateProfile(loadedProfile));
        setCurrentProfile(name);
    }

    const copyProfile = async (oldName, newName) => {
        if (!oldName || !newName) return;
        if (profiles.includes(newName) || !profiles.includes(oldName)) return;
        setProfiles(profiles => ([...profiles, newName]));
        await db.setItem(dbName, `profile-${newName}`, await db.getItem(dbName, `profile-${oldName}`));
    }

    const deleteProfile = async (name) => {
        if (!name) return;
        if (name === "default") {
            // Return default profile to its default state instead of deleteing
            const defaultProfile = migrateProfile();
            db.setItem(dbName, `profile-default`, defaultProfile);
            if (currentProfile === "default") {
                setProfileData(defaultProfile);
            }
            return;
        }
        await db.removeItem(dbName, `profile-${name}`);
        setProfiles(profiles => profiles.filter(p => p !== name));
        if (name === currentProfile) {
            await switchProfile("default");
        }
    }

    const exportProfile = async (name, type = "base64") => {
        if (!name) return null;
        if (!profiles.includes(name)) return null;

        const data = await db.getItem(dbName, `profile-${name}`);

        if (type === "base64") {
            return encodeB64(JSON.stringify(data));
        } else if (type === "json") {
            return JSON.stringify(data);
        } else {
            // Export type not recognized
            return null;
        }
    }

    const importProfile = async (name, importedData, type = "base64") => {
        if (!name) return;
        if (profiles.includes(name)) return;

        try {
            let data;
            if (type === "base64") {
                const decoded = decodeB64(importedData);
                if (!decoded) throw new Error("Invalid data: not a valid Base64 string.");

                try {
                    data = JSON.parse(decoded)
                } catch (e) {
                    throw new Error("Invalid data: decoded value is not a valid JSON.");
                }
            } else if (type === "json") {
                try {
                    data = JSON.parse(importedData);
                } catch (e) {
                    throw new Error("Invalid data: provided value is not a valid JSON.");
                }
            } else {
                // Export type not recognized
                return;
            }

            // Migrate to latest version in case it's an old profile
            data = migrateProfile(data);

            setProfiles(profiles => ([...profiles, name]));
            await db.setItem(dbName, `profile-${name}`, data);
        } catch (e) {
            console.error(e.message);
        }
    }

    const value = {
        profiles, currentProfile, profileData, setProfileData, addProfile, switchProfile, copyProfile, deleteProfile, exportProfile, importProfile
    };

    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
}

export const useProfiles = () => useContext(ProfileContext);
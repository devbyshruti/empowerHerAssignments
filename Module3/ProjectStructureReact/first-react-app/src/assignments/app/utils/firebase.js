import { initializeApp } from "firebase/app"
import { getAuht } from "firebase/auth";
import { getFirestone } from "firebase/firestore";

const firebaseCongig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseCongig);

export const auth = getAuht(app);
export const db = getFirestone(app);

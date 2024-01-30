import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB4RbfKhFDLy0pU_3aYVTAxmPLBT0hP7x4",
	authDomain: "first-project-173e9.firebaseapp.com",
	projectId: "first-project-173e9",
	storageBucket: "first-project-173e9.appspot.com",
	messagingSenderId: "589534129130",
	appId: "1:589534129130:web:61ede16333bfe9f661e093",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

importScripts(
	"https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
	"https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

//the Firebase config object
const firebaseConfig = {
	apiKey: "AIzaSyB4RbfKhFDLy0pU_3aYVTAxmPLBT0hP7x4",
	authDomain: "first-project-173e9.firebaseapp.com",
	projectId: "first-project-173e9",
	storageBucket: "first-project-173e9.appspot.com",
	messagingSenderId: "589534129130",
	appId: "1:589534129130:web:61ede16333bfe9f661e093",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
	// console.log("Received background message ", payload);
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: payload.notification.image,
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});

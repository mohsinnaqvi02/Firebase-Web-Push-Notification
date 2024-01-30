import "./App.css";
// import Notification from "../src/Components/Notification";
import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
function App() {
	async function requestPermission() {
		const permission = await Notification.requestPermission();
		if (permission === "granted") {
			const token = await getToken(messaging, {
				vapidKey:
					"BLguA59PCqZji3M5UjgFWghJmSCumqpRQbT8UdDFbrXPOjNaMJsjR0BzoZw8gnEHXNpOPImKYJyrI2H88T_mPho",
			});
			console.log("Token :", token);
		} else if (permission === "denied") {
			alert("Permission Denied");
		}
	}
	useEffect(() => {
		requestPermission();
	});

	return (
		<div className='App'>
			<header className='App-header'>{/* <Notification /> */}</header>
		</div>
	);
}
export default App;

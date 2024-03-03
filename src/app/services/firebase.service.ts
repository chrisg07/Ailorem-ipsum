import { Injectable } from "@angular/core";
import { FirebaseApp, initializeApp } from "firebase/app";
import { ReCaptchaV3Provider, initializeAppCheck } from "firebase/app-check";
import {
	getFirestore,
	collection,
	getDocs,
	Firestore,
	query,
	where
} from "firebase/firestore/lite";

export interface GeneratedResponse {
	approvedForDisplay: boolean;
	response: string;
	topic: string;
}

@Injectable({
	providedIn: "root"
})
export class FirebaseService {
	private app: FirebaseApp;
	private db: Firestore;

	constructor() {
		const firebaseConfig = {
			apiKey: "AIzaSyBHvTlCJBr4G8cty5bOwS7pOmjCwe7fS3k",
			authDomain: "ailorem-ipsum.firebaseapp.com",
			projectId: "ailorem-ipsum",
			storageBucket: "ailorem-ipsum.appspot.com",
			messagingSenderId: "1053402587649",
			appId: "1:1053402587649:web:c283f6e694f948487ad600",
			measurementId: "G-8QYEXZ8JQY"
		};

		this.app = initializeApp(firebaseConfig);
		this.db = getFirestore(this.app);

		initializeAppCheck(this.app, {
			provider: new ReCaptchaV3Provider(
				"6LeKvIUpAAAAALXIPIj4XhFURXsDSa3LevSptLAa"
			),
			isTokenAutoRefreshEnabled: true
		});
	}

	public async getGeneratedResponses(): Promise<GeneratedResponse[]> {
		const generatedResponses: GeneratedResponse[] = [];
		const itemCollection = collection(this.db, "generated-responses");
		const q = query(itemCollection, where("approvedForDisplay", "==", true));

		const querySnapshot = await getDocs(q);

		querySnapshot.forEach(doc => {
			generatedResponses.push(doc.data() as GeneratedResponse);
		});

		return generatedResponses;
	}
}

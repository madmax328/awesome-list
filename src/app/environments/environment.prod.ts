export const environment = {
	production: true,
	firebase: {
		apiKey: "AIzaSyBPAaYu4kmI71pxmjqUqc8tp-C38SfXJwQ",
		authDomain: "projet-angular-list.firebaseapp.com",
		databaseURL: 'https://projet-angular-list.firebaseio.com',
		projectId: "projet-angular-list",
		storageBucket: "projet-angular-list.appspot.com",
		messagingSenderId: "1096958952756",
		auth: {
			baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
		},
		firestore: {
			baseURL : 'https://firestore.googleapis.com/v1/projects/ng-awesome-list/databases/(default)/documents'
		}
	}
};
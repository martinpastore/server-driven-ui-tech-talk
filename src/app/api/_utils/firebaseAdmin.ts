import * as admin from 'firebase-admin';


export class FirebaseAdmin {
    static createInstance() {
        // Set the config options
        const adminConfig: admin.ServiceAccount = {
            projectId: process.env.FIREBASE_PROJECT_ID,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        };

        // Initialize the firebase admin app
        admin.initializeApp({
            credential: admin.credential.cert(adminConfig),
        });

        return admin;
    }

    static getInstance() {
        if (admin.apps.length)
            return admin;

        return FirebaseAdmin.createInstance();
    }
}

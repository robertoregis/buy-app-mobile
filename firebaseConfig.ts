// src/config/firebaseConfig.ts
import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth'; // Exemplo para autenticação
import { Firestore, getFirestore } from 'firebase/firestore';

// 1. Defina as opções de configuração do seu projeto Firebase
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN as string,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID as string,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID as string,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID as string
};

// 2. Inicializa o Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// 3. Inicializa e exporta os serviços que você usará
// Usamos type-casting (as) para garantir que o TypeScript reconheça os tipos corretamente.

export const db: Firestore = getFirestore(app);
export const auth: Auth = getAuth(app); // Se você for usar autenticação

// 4. Exporta o objeto app principal (opcional, mas útil)
export default app;
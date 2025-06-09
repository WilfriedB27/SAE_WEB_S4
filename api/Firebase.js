import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, collection, doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Service Firebase pour l'authentification
export function makeServiceFirebase() {

  const firebaseConfig = {
    apiKey: "AIzaSyD_qW2Qa0dpDrk9zf4u0HJma683S0Uk97I",
    authDomain: "app-music-638c0.firebaseapp.com",
    projectId: "app-music-638c0",
    storageBucket: "app-music-638c0.appspot.com",
    messagingSenderId: "584480413216",
    appId: "1:584480413216:web:3b224247f5d5986c004e45",
    measurementId: "G-N9LP4FT45C"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  const service = {
    login,
    register,
    logout,
    onUserStateChanged,
    addFavorite,
    removeFavorite,
    getFavorites
  };

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential.user;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }


  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential.user;
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }


  function logout() {
    return auth.signOut();
  }

  function onUserStateChanged(callback) {
    onAuthStateChanged(auth, callback);
  }


  async function addFavorite(userId, item) {
    if (!userId) return;
    const userRef = doc(db, "favorites", userId);
    await setDoc(userRef, {}, { merge: true });
    await updateDoc(userRef, {
      items: arrayUnion(item)
    });
  }

  // Retirer un favori
  async function removeFavorite(userId, item) {
    if (!userId) return;
    const userRef = doc(db, "favorites", userId);
    await updateDoc(userRef, {
      items: arrayRemove(item)
    });
  }

  // Récupérer les favoris
  async function getFavorites(userId) {
    if (!userId) return [];
    const userRef = doc(db, "favorites", userId);
    const docSnap = await getDoc(userRef);
    return docSnap.exists() ? docSnap.data().items || [] : [];
  }

  return service;
}

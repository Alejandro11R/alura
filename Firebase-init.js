import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy, Timestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

  // ══════════════════════════════════════════════════════
  //  CONFIGURACIÓN FIREBASE — REEMPLAZA CON TUS DATOS
  // ══════════════════════════════════════════════════════
    const firebaseConfig = {
    apiKey: "AIzaSyAkbeyGn8B8Y59FIQbiqj9AfRMCCZqgg-A",
    authDomain: "alura-spa.firebaseapp.com",
    projectId: "alura-spa",
    storageBucket: "alura-spa.firebasestorage.app",
    messagingSenderId: "456361289068",
    appId: "1:456361289068:web:0c47cd71c48e2c042e3f49"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Exponer globalmente
    window._db = db;
    window._col = collection;
    window._getDocs = getDocs;
    window._addDoc = addDoc;
    window._deleteDoc = deleteDoc;
    window._doc = doc;
    window._updateDoc = updateDoc;
    window._query = query;
    window._orderBy = orderBy;
    window._Timestamp = Timestamp;
    window._fbReady = true;
    window.dispatchEvent(new Event('fbReady'));
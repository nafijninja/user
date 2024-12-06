import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, update, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8u8_i2rD6HEvU8Pi4CaZC916ny63ec3I",
  authDomain: "website-demo-24.firebaseapp.com",
  databaseURL: "https://website-demo-24-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "website-demo-24",
  storageBucket: "website-demo-24.firebasestorage.app",
  messagingSenderId: "346117554665",
  appId: "1:346117554665:web:0c1536c7176517c8a4cb78",
  measurementId: "G-1GSKL8WVQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to add or update the "lastUpdated" field
function updateLastUpdated() {
  const rootRef = ref(database, '/'); // Root reference to the database
  const updates = {
    lastUpdated: serverTimestamp() // Automatically set server timestamp
  };

  update(rootRef, updates)
    .then(() => {
      console.log("Last updated timestamp set successfully!");
    })
    .catch((error) => {
      console.error("Error updating last updated timestamp:", error);
    });
}

// Call this function whenever data is updated
updateLastUpdated();

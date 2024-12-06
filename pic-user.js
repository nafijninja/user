import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8u8_i2rD6HEvU8Pi4CaZC916ny63ec3I",
  authDomain: "website-demo-24.firebaseapp.com",
  databaseURL: "https://website-demo-24-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "website-demo-24",
  storageBucket: "website-demo-24.appspot.com",
  messagingSenderId: "346117554665",
  appId: "1:346117554665:web:0c1536c7176517c8a4cb78",
  measurementId: "G-1GSKL8WVQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to fetch and display images from Firebase Realtime Database
async function fetchImages() {
  const dataRef = ref(database, '/data'); // Path to fetch data
  try {
    const snapshot = await get(dataRef);
    const data = snapshot.val();

    if (data) {
      // Hide loading message
      document.getElementById('loadingMessage').style.display = 'none';

      // Display each key-value pair with image
      Object.keys(data).forEach((key) => {
        const photoURL = data[key]?.value || "No Photo Available";
        const imageUrl = data[key]?.imageUrl || null;

        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('data-section');

        // Title element
        const titleElement = document.createElement('div');
        titleElement.classList.add('data-title');
        titleElement.innerText = key;
        sectionDiv.appendChild(titleElement);

        // Description element
        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('data-description');
        descriptionElement.innerText = photoURL;
        sectionDiv.appendChild(descriptionElement);

        // If image URL exists, display it
        if (imageUrl) {
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          imgElement.alt = key;
          sectionDiv.appendChild(imgElement);

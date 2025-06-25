// Importar los SDKs necesarios desde Firebase CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Configuración de tu nuevo proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBX00bupr7OuK-iMkCHa9Qmr_V1nYnEW-U",
  authDomain: "flujodeauth.firebaseapp.com",
  projectId: "flujodeauth",
  storageBucket: "flujodeauth.appspot.com",
  messagingSenderId: "768494616580",
  appId: "1:768494616580:web:fa74a34a208b5a2d3fb551",
  measurementId: "G-84EJ0K6Z11"
};

// Inicializar Firebase y el servicio de autenticación
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Obtener los datos del formulario
function getCredentials() {
  const email = document.getElementById("Email").value;
  const password = document.getElementById("password").value;
  return { email, password };
}

// Acción de registro
document.getElementById("registerBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const { email, password } = getCredentials();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registro exitoso
      const user = userCredential.user;
      console.log("✅ Usuario registrado:", user);
      alert("✅ Registrado exitosamente como: " + user.email);
    })
    .catch((error) => {
      // Error al registrar
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("❌ Error de registro:", errorCode, errorMessage);
      alert("❌ Registro fallido: " + errorMessage);
    });
});

// Acción de inicio de sesión
document.getElementById("loginBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const { email, password } = getCredentials();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login exitoso
      const user = userCredential.user;
      console.log("✅ Sesión iniciada por:", user);
      alert("✅ Sesión iniciada: " + user.email);
      // Redirección opcional
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      // Error de login
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("❌ Error de login:", errorCode, errorMessage);
      alert("❌ Inicio de sesión fallido: " + errorMessage);
    });
});

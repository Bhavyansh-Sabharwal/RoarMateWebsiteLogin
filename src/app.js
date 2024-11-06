// src/app.js
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

document.addEventListener("DOMContentLoaded", () => {
  const authForm = document.getElementById("authForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("errorMessage");
  const signUpBtn = document.getElementById("signUpBtn");

  let isSignUp = false;

  authForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("User created successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("User logged in successfully!");
      }
      errorMessage.textContent = '';  // Clear error message
    } catch (error) {
      console.error("Error during sign up/login:", error);
      errorMessage.textContent = error.message;  // Display the error message
    }
  });

  signUpBtn.addEventListener("click", () => {
    isSignUp = !isSignUp;
    signUpBtn.textContent = isSignUp ? "Login" : "Sign Up";
    authForm.querySelector("button").textContent = isSignUp ? "Sign Up" : "Login";
  });
});

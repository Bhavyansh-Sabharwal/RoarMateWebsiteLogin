// src/app.js
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

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
        // Check if the email ends with "@columbia.edu"
        if (!email.endsWith("@columbia.edu")) {
          throw new Error("Please use your Columbia email to sign up.");
        }

        // Create a new user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Send verification email
        await sendEmailVerification(user);
        alert("A verification email has been sent. Please verify your email before logging in.");

        // Clear form
        emailInput.value = '';
        passwordInput.value = '';
        errorMessage.textContent = '';
      } else {
        // Log in an existing user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Check if the email is verified
        if (user.emailVerified) {
          alert("User logged in successfully!");
          errorMessage.textContent = '';  // Clear error message
        } else {
          alert("Please verify your email before logging in.");
          auth.signOut();  // Sign out if email is not verified
        }
      }
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

"use strict";

// Retrieve values from form fields
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#cpassword");

// Function to set error messages for form fields
const setError = function (id, error) {
  const element = document.getElementById(id); // Retrieve the element by ID
  element.getElementsByClassName("formerror")[0].innerHTML = error; // Set the error message
};

/// Function to clear all error messages
const clearErrors = function () {
  const errors = document.getElementsByClassName("formerror"); // Get all elements with class 'formerror'
  for (let error of errors) {
    error.innerHTML = ""; // Clear the error message
  }
};

// Main function to validate the form
const validateForm = function () {
  let valid = true; // Flag to track form validity
  clearErrors();

  //validation for firstName
  if (firstName.value === "") {
    setError("firstnamediv", "*First Name can't be empty!");
    valid = false;
  } else if (!/^[A-Z ]+$/.test(firstName.value)) {
    setError("firstnamediv", "*Only capital letters are allowed!");
    valid = false;
  } else if (firstName.value.length < 3) {
    setError("firstnamediv", "*First name is too short!");
    valid = false;
  }

  //validation for lastName
  if (lastName.value === "") {
    setError("lastnamediv", "*Last Name can't be empty!");
    valid = false;
  } else if (!/^[A-Z ]+$/.test(lastName.value)) {
    setError("lastnamediv", "*Only capital letters are allowed!");
    valid = false;
  } else if (lastName.value.length < 3) {
    setError("lastnamediv", "*Last name is too short!");
    valid = false;
  }

  //validation for email
  if (email.value === "") {
    setError("emaildiv", "*Email Address is required!");
    valid = false;
  } else if (email.value.length > 30) {
    setError("emaildiv", "*Email is too long!");
    valid = false;
  }

  //validation for phone no
  if (phone.value === "") {
    setError("phonediv", "*Phone no is required!");
    valid = false;
  } else if (!/^[0-9]+$/.test(phone.value)) {
    setError("phonediv", "*Only numbers are allowed");
    valid = false;
  } else if (phone.value.length !== 11) {
    setError("phonediv", "Phone number must be exactly 11 digits.");
    valid = false;
  }

  //validation for password
  if (password.value === "") {
    setError("passdiv", "*Please enter password!");
    valid = false;
  } else if (!/(?=.*[A-Z])/.test(password.value)) {
    setError("passdiv", "*Password must include uppercase letter");
    valid = false;
  } else if (!/(?=.*[a-z])/.test(password.value)) {
    setError("passdiv", "*Password must include lowercase letter");
    valid = false;
  } else if (!/(?=.*[0-9])/.test(password.value)) {
    setError("passdiv", "*Password must include number");
    valid = false;
  } else if (!/(?=.*[@#$*%^!~&])/.test(password.value)) {
    setError("passdiv", "*Password must include special character");
    valid = false;
  } else if (password.value.length < 5) {
    setError("passdiv", "*password is too short");
    valid = false;
  }

  //validation for confirm password
  if (confirmPassword.value === "") {
    setError("cpassdiv", "*Please confirm password!");
    valid = false;
  } else if (confirmPassword.value !== password.value) {
    setError("cpassdiv", "*Passwords do not match!");
    valid = false;
  }
  return valid; // Return the final validity status
};

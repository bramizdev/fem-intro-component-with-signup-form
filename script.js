'use strict';

const $ = (selector) => document.querySelector(selector);

const $form = $('.form__form');
const $firstName = $('#first-name');
const $lastName = $('#last-name');
const $email = $('#email');
const $password = $('#password');

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.form__input-error-msg');
  const errorIcon = inputControl.querySelector('.form__input-error-icon');
  errorDisplay.innerText = message;
  inputControl.classList.add('form__input-error');
  errorIcon.classList.remove('hidden');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.form__input-error-msg');
  const errorIcon = inputControl.querySelector('.form__input-error-icon');
  errorDisplay.innerText = '';
  inputControl.classList.remove('form__input-error');
  errorIcon.classList.add('hidden');
};

const resetFields = (...els) => {
  els.forEach((el) => setSuccess(el));
};

const isValidEmail = (email) => {
  const regex = /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email.toLowerCase());
};

const validateForm = () => {
  const firstNameValue = $firstName.value.trim();
  const lastNameValue = $lastName.value.trim();
  const emailValue = $email.value.trim();
  const passwordValue = $password.value.trim();
  let isValidForm = false;

  resetFields($firstName, $lastName, $email, $password);

  if (firstNameValue === '') {
    setError($firstName, 'First Name cannot be empty');
  } else if (lastNameValue === '') {
    setError($lastName, 'Last Name cannot be empty');
  } else if (emailValue === '') {
    setError($email, 'Email cannot be empty');
  } else if (!isValidEmail(emailValue)) {
    setError($email, 'Looks like this is not an email');
  } else if (passwordValue === '') {
    setError($password, 'First Name cannot be empty');
  } else {
    resetFields($firstName, $lastName, $email, $password);
    isValidForm = true;
  }
  return isValidForm;
};

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateForm()) return;
  $firstName.value = '';
  $lastName.value = '';
  $email.value = '';
  $password.value = '';
});

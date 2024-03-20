const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const loading = document.getElementById('loading');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('succes');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  let isAllValid = true;

  if (usernameValue === '') {
    setError(username, 'Username harus diisi!');
    isAllValid = false;
  } else {
    setSuccess(username);
  }

  if (emailValue === '') {
    setError(email, 'Email tidak boleh kosong!');
    isAllValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Email harus merupakan email valid');
    isAllValid = false;
  } else {
    setSuccess(email);
  }

  if (passwordValue === '') {
    setError(password, 'Password harus diisi!');
    isAllValid = false;
  } else if (passwordValue.length < 8) {
    setError(password, 'Password harus memiliki minimal 8 karakter!');
    isAllValid = false;
  } else if (passwordValue.length > 15) {
    setError(password, 'Password tidak boleh lebih dari 15 karakter!');
    isAllValid = false;
  } else {
    setSuccess(password);
  }

  if (confirmPasswordValue === '') {
    setError(confirmPassword, 'Konfirmasi password anda!');
    isAllValid = false;
  } else if (confirmPasswordValue != passwordValue) {
    setError(confirmPassword, 'Password tidak sesuai!');
    isAllValid = false;
  } else {
    setSuccess(confirmPassword);
  }

  if (isAllValid == true) {
    loading.style.display = 'block';
    setTimeout(() => {
      window.location.href = 'menu.html';
    }, 5000);
  }
};

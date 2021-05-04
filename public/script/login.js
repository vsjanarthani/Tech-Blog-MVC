// DOM selection
const emailEl = document.querySelector('.email-login');
const passwordEl = document.querySelector('.password-login');
const loginButtonEl = document.querySelector('#loginbtn');
const signupNameEl = document.querySelector('.username-signup');
const signupEmailEl = document.querySelector('.email-signup');
const signupPwdEl = document.querySelector('.password-signup');
const signupBtnEl = document.querySelector('#signupbtn');

//   Event listener for Login button
loginButtonEl.addEventListener('submit', loginFormHandler);

// Function to handle login form submission
async function loginFormHandler(event) {
    event.preventDefault();
  console.log(`login button clicked`);
    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
 //   Event listener for sign up button
 signupBtnEl.addEventListener('submit', signupFormHandler);

// Function to handle signup form submission
  async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = signupNameEl.value.trim();
    const email = signupEmailEl.value.trim();
    const password = signupPwdEl.value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('success');
      } else {
        alert(response.statusText);
      }
    }
  };

 
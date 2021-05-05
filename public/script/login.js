// DOM selection
const emailEl = document.querySelector('.email-login');
const passwordEl = document.querySelector('.password-login');
const loginButtonEl = document.querySelector('#loginbtn');
const signupNameEl = document.querySelector('.username-signup');
const signupEmailEl = document.querySelector('.email-signup');
const signupPwdEl = document.querySelector('.password-signup');
const signupBtnEl = document.querySelector('#signupbtn');
console.log(loginButtonEl);
console.log(signupBtnEl);
console.log(document.body);

//   Event listener for Login button
if (loginButtonEl) {
  loginButtonEl.addEventListener('click', async function loginFormHandler(event) {
    event.preventDefault();
    console.log(`login button clicked`);
    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();
    console.log(email, password);
    if (email && password) {
      const response = await fetch('/api/users/login', {
        "method": 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        "headers": { 'Content-Type': 'application/json' }
      });
      console.log(response);
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  });
}

if (signupBtnEl) {

  //   Event listener for sign up button
  signupBtnEl.addEventListener('click', async function loginFormHandler(event) {

    event.preventDefault();

    const username = signupNameEl.value.trim();
    const email = signupEmailEl.value.trim();
    const password = signupPwdEl.value.trim();

    if (username && email && password) {
      try {
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
        try {
          const data = await response.json();
          console.log(data);
        }
        catch (e) {
          console.log(e);
        }
      } else {
        alert(response.statusText);
      }
    }
    catch (e) {
      console.log(e);
    }

    }
  });
}

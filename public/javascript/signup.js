async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#typeText').value.trim();
    const email = document.querySelector('#typeEmail').value.trim();
    const password = document.querySelector('#typePassword').value.trim();
    
    console.log(email)
    console.log(password)
    console.log(username)

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
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }

  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
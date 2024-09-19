(() => {
    'use strict'
  
    // Fetch the login form
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get username and password values
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Simple validation: Check if username and password match
      if (username === 'admin' && password === '12345') {
        // Successful login
        alert('Đăng nhập thành công!');
        window.location.href = 'home.html'; // Redirect to home page
      } else {
        // Failed login
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
        loginForm.classList.add('was-validated');
      }
    });
  })();
  
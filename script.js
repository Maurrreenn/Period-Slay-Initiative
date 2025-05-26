function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// for form js
 document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            // Add your login logic here (e.g., API call)
            console.log('Email:', email, 'Password:', password);
            alert('Login submitted! (This is a demo, add your authentication logic.)');
        });
// for signup
         document.getElementById('signupForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            // Add your sign-up logic here (e.g., API call)
            console.log('Name:', name, 'Email:', email, 'Password:', password);
            alert('Sign-up submitted! (This is a demo, add your authentication logic.)');
        });
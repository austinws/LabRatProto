// Check for initial visit
if (!localStorage.getItem('hasProfile')) {
    window.location.href = 'createprofile.html';
  } else {
    window.location.href = 'mainpage.html';
  }
  
  // Handle profile creation form submission (in create_profile.html)
  const profileForm = document.getElementById('profileForm');
  profileForm.addEventListener('submit', (event) => {
    // Collect user data, validate, store
    // ...
  
    // Set hasProfile flag
    localStorage.setItem('hasProfile', true);
  
    // Redirect to main page
    window.location.href = 'mainpage.html';
  });

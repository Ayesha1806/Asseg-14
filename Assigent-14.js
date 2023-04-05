function validatePassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#$%^&*()\-+]).{8,}$/;
    return regex.test(password);
  }
  console.log(validatePassword("MyP@ssword123")); // true
  console.log(validatePassword("mypassword")); // false
  console.log(validatePassword("PASSWORD123")); // false
  console.log(validatePassword("MyPassword")); // false
  console.log(validatePassword("MyP@ssword")); // false
    
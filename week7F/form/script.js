// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.querySelector('form');

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const formData = new FormData(form); // get when submit
//         const username = formData.get('username');
//         const email = formData.get('email');
//         const password = formData.get('password');
//         const confirmpassword = formData.get('confirmpassword');

//         if (username === '') {
//             alert('Username is required');
//         } else if (email === '') {
//             alert('Email is required');
//         } else if (password === '') {
//             alert('Password is required');
//         } else if (confirmpassword === '') {
//             alert('Confirm Password is required');
//         } else if (password !== confirmpassword) {
//             alert('Password and Confirm Password must be the same');
//         } else {
//             alert('Success');
//         }
//     });
// });
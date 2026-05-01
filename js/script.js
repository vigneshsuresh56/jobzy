document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#signupForm');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            ValidationInput();
        });
    }

    function ValidationInput() {
        let sucess = true;

        if (username) {
            const usernameVal = username.value.trim();
            if (usernameVal === '') {
                sucess = false;
                SetError(username, 'Username is required');
            } else {
                SetSucess(username);
            }
        }

        if (email) {
            const emailVal = email.value.trim();
            if (emailVal === '') {
                sucess = false;
                SetError(email, 'Email is required');
            } else if (!validateEmail(emailVal)) {
                sucess = false;
                SetError(email, 'Enter a valid email');
            } else {
                SetSucess(email);
            }
        }

        if (password) {
            const passwordVal = password.value.trim();
            if (passwordVal === '') {
                sucess = false;
                SetError(password, 'Password is required');
            } else if (passwordVal.length < 8) {
                sucess = false;
                SetError(password, 'Password must be at least 8 characters');
            } else {
                SetSucess(password);
            }
            
        }
        if (sucess) {
            alert("Successful!");
            form.reset();
            
            // Remove the green borders after successful submission
            const inputGroups = document.querySelectorAll('.input-group');
            inputGroups.forEach(group => {
                group.classList.remove('sucess');
                group.classList.remove('error');
            });
        }
    }

    function SetError(element, message) {
        const inputGroup = element.parentElement;
        let errorElement = inputGroup.querySelector('.error-msg');
        
        // Create error element if it doesn't exist
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.classList.add('error-msg');
            inputGroup.appendChild(errorElement);
        }
        
        errorElement.innerText = message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('sucess');
    }

    function SetSucess(element) {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector('.error-msg');
        
        if (errorElement) {
            errorElement.innerText = '';
        }
        
        inputGroup.classList.add('sucess');
        inputGroup.classList.remove('error');
    }

    function validateEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
});

// login page
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#loginForm');
    const email = document.querySelector('#loginEmail');
    const password = document.querySelector('#loginPassword');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            validateLogin();
        });
    }

    function validateLogin() {
        let success = true;

        // Email
        if (email) {
            const emailVal = email.value.trim();
            if (emailVal === '') {
                success = false;
                setError(email, 'Email is required');
            } else if (!validateEmail(emailVal)) {
                success = false;
                setError(email, 'Enter valid email');
            } else {
                setSuccess(email);
            }
        }

        // Password
        if (password) {
            const passwordVal = password.value.trim();
            if (passwordVal === '') {
                success = false;
                setError(password, 'Password is required');
            } else {
                setSuccess(password);
            }
        }

        if (success) {
            alert("Login Successful!");
            form.reset();
            window.location.href = "home.html"; // redirect
        }
    }

    function setError(element, message) {
        const parent = element.parentElement;
        let error = parent.querySelector('.error-msg');

        if (!error) {
            error = document.createElement('div');
            error.classList.add('error-msg');
            parent.appendChild(error);
        }

        error.innerText = message;
        parent.classList.add('error');
        parent.classList.remove('success');
    }

    function setSuccess(element) {
        const parent = element.parentElement;
        const error = parent.querySelector('.error-msg');

        if (error) error.innerText = '';

        parent.classList.add('success');
        parent.classList.remove('error');
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});

// apply apge
document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector('#applyForm');
    const fullname = document.querySelector('#fullname');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const resume = document.querySelector('#resume');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            validateApply();
        });
    }

    function validateApply() {
        let success = true;

        // 🔹 Full Name
        if (fullname.value.trim() === '') {
            success = false;
            setError(fullname, "Full name is required");
        } else {
            setSuccess(fullname);
        }

        // 🔹 Email
        if (email.value.trim() === '') {
            success = false;
            setError(email, "Email is required");
        } else if (!validateEmail(email.value)) {
            success = false;
            setError(email, "Enter valid email");
        } else {
            setSuccess(email);
        }

        // 🔹 Phone
        if (phone.value.trim() === '') {
            success = false;
            setError(phone, "Phone number is required");
        } else if (phone.value.length < 10) {
            success = false;
            setError(phone, "Enter valid phone number");
        } else {
            setSuccess(phone);
        }

        // 🔹 Resume
        if (resume.value === '') {
            success = false;
            setError(resume, "Upload your resume");
        } else {
            setSuccess(resume);
        }

        // ✅ Final Success
        if (success) {

            alert("Application Submitted Successfully!");
            form.reset();

            // Optional redirect
            window.location.href = "jobs.html";
        }
    }

    // 🔹 Error Function
    function setError(element, message) {
        const parent = element.parentElement;
        let error = parent.querySelector('.error-msg');

        if (!error) {
            error = document.createElement('div');
            error.classList.add('error-msg');
            parent.appendChild(error);
        }

        error.innerText = message;
        parent.classList.add('error');
        parent.classList.remove('success');
    }

    // 🔹 Success Function
    function setSuccess(element) {
        const parent = element.parentElement;
        const error = parent.querySelector('.error-msg');

        if (error) error.innerText = '';

        parent.classList.add('success');
        parent.classList.remove('error');
    }

    // 🔹 Email Validation
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

});
// contack page
document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector('#contactForm');
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const subject = document.querySelector('#subject');
    const message = document.querySelector('#message');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            validateContact();
        });
    }

    function validateContact() {
        let success = true;

        // 🔹 Name
        if (name.value.trim() === '') {
            success = false;
            setError(name, "Name is required");
        } else {
            setSuccess(name);
        }

        // 🔹 Email
        if (email.value.trim() === '') {
            success = false;
            setError(email, "Email is required");
        } else if (!validateEmail(email.value)) {
            success = false;
            setError(email, "Enter valid email");
        } else {
            setSuccess(email);
        }

        // 🔹 Subject
        if (subject.value.trim() === '') {
            success = false;
            setError(subject, "Subject is required");
        } else {
            setSuccess(subject);
        }

        // 🔹 Message
        if (message.value.trim() === '') {
            success = false;
            setError(message, "Message is required");
        } else if (message.value.length < 10) {
            success = false;
            setError(message, "Message must be at least 10 characters");
        } else {
            setSuccess(message);
        }

        // ✅ Final Success
        if (success) {
            alert("Message Sent Successfully!");
            form.reset();
        }
    }

    // 🔹 Error Function
    function setError(element, message) {
        const parent = element.parentElement;
        let error = parent.querySelector('.error-msg');

        if (!error) {
            error = document.createElement('div');
            error.classList.add('error-msg');
            parent.appendChild(error);
        }

        error.innerText = message;
        parent.classList.add('error');
        parent.classList.remove('success');
    }

    // 🔹 Success Function
    function setSuccess(element) {
        const parent = element.parentElement;
        const error = parent.querySelector('.error-msg');

        if (error) error.innerText = '';

        parent.classList.add('success');
        parent.classList.remove('error');
    }

    // 🔹 Email Validation
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

});

// login and registration
document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("login");
    const registerBtn = document.getElementById("register");

    // 🔹 Login Button Click
    if (loginBtn) {
        loginBtn.addEventListener("click", (e) => {
            e.preventDefault(); // stop default link
            window.location.href = "../html/login.html";
        });
    }

    // 🔹 Register Button Click
    if (registerBtn) {
        registerBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "../html/signin.html";
        });
    }

});
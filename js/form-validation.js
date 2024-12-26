document.addEventListener('DOMContentLoaded', function () {
    const authForm = document.getElementById('authForm');

    authForm.addEventListener('submit', function (e) {
        e.preventDefault(); 
        
        clearErrorMessages();

        const login = document.getElementById('login').value;
        const birthdate = document.getElementById('birthdate').value;
        const gender = document.getElementById('gender').value;

        let hasErrors = false;

        if (!login) {
            showError('loginError', 'Пожалуйста, введите логин.');
            hasErrors = true;
        } else if (!/^[А-Яа-я0-9]{4,10}$/.test(login)) {
            showError('loginError', 'Логин должен содержать от 4 до 10 символов (русские буквы и цифры).');
            hasErrors = true;
        }

        if (!birthdate) {
            showError('birthdateError', 'Пожалуйста, введите дату рождения.');
            hasErrors = true;
        }

        if (!gender) {
            showError('genderError', 'Пожалуйста, выберите пол.');
            hasErrors = true;
        }

        if (!hasErrors) {
            localStorage.setItem('user', JSON.stringify({ login, birthdate, gender }));
            window.location.href = 'description.html';
        }
    });

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    function clearErrorMessages() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }
});
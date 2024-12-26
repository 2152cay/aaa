document.addEventListener('DOMContentLoaded', function () {
    const userLoginHeader = document.getElementById('user-login-header');
    const logoutHeader = document.getElementById('logout-header');

    if (logoutHeader) {
        logoutHeader.style.backgroundColor = '#bdc3c7';
        logoutHeader.style.color = '#fff';
        logoutHeader.style.border = 'none';
        logoutHeader.style.padding = '10px 20px';
        logoutHeader.style.borderRadius = '5px';
        logoutHeader.style.cursor = 'pointer';
        logoutHeader.style.display = 'none';

        logoutHeader.addEventListener('mouseover', () => {
            logoutHeader.style.backgroundColor = '#95a5a6';
        });
        logoutHeader.addEventListener('mouseout', () => {
            logoutHeader.style.backgroundColor = '#bdc3c7';
        });

        const userData = JSON.parse(localStorage.getItem('user'));

        if (userData) {
            if (userLoginHeader) {
                userLoginHeader.textContent = userData.login || 'Гость';
            }
            logoutHeader.style.display = 'inline-block';
        }

        logoutHeader.addEventListener('click', function () {
            localStorage.removeItem('user');
            localStorage.removeItem('quizScore');
            window.location.href = 'index.html';
        });
    }
});
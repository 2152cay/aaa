document.addEventListener('DOMContentLoaded', function () {
    const userLogin = document.getElementById('user-login');
    const userBirthdate = document.getElementById('user-birthdate');
    const userGender = document.getElementById('user-gender');
    const quizResult = document.getElementById('quiz-result');

    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        userLogin.textContent = userData.login || 'Не указано';
        userBirthdate.textContent = userData.birthdate || 'Не указано';
        userGender.textContent = userData.gender === 'male' ? 'Мужской' : 'Женский';
    } else {
        window.location.href = 'index.html';
    }

    const quizScore = localStorage.getItem('quizScore');
    quizResult.textContent = quizScore ? `${quizScore} баллов` : 'Тест не пройден';

    document.getElementById('logout').addEventListener('click', function () {
        localStorage.removeItem('user');
        localStorage.removeItem('quizScore');
        window.location.href = 'index.html';
    });
});
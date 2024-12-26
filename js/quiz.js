document.getElementById('quiz-form').addEventListener('submit', function (e) {
            e.preventDefault();

            const correctAnswers = {
                question1: 'Вуконг',
                question2: '2024',
                question3: '1', 
                question4: 'Monkey King', 
                question5: 'Да', 
                question6: 'Dota 2' 
            };

            let score = 0;

            Object.keys(correctAnswers).forEach(question => {
                const userAnswer = document.getElementById(question).value.trim().toLowerCase();
                const correctAnswer = correctAnswers[question].toLowerCase();
                const feedbackElement = document.getElementById('feedback' + question.charAt(question.length - 1));

                if (userAnswer === correctAnswer) {
                    score++;
                    feedbackElement.textContent = 'Правильно!';
                    feedbackElement.style.color = 'green';
                } else if (userAnswer === "") {
                    feedbackElement.textContent = 'Ответ не предоставлен';
                    feedbackElement.style.color = 'gray';
                } else {
                    feedbackElement.textContent = `Неправильно. Правильный ответ: ${correctAnswers[question]}`;
                    feedbackElement.style.color = 'red';
                }
            });

            document.getElementById('quiz-result').textContent = `Ваш результат: ${score} из 6`;

            localStorage.setItem('quizScore', score);

            document.getElementById('retry-quiz').style.display = 'block';
            document.getElementById('submit-quiz').disabled = true;

            document.getElementById('retry-quiz').addEventListener('click', function () {
                location.reload();
            });
        });
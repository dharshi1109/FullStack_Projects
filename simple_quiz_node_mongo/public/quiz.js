document.addEventListener('DOMContentLoaded', async () => {

    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    const submitBtn = document.getElementById('submit-btn');

    try {
        const response = await fetch('http://localhost:8080/retrieve');
        if (!response.ok) {
            throw new Error('Failed to retrieve questions');
        }

        const questions = await response.json();

        questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <div class="options">
                ${question.options.map((option, optionIndex) => `
                <label>
                    <input type="radio" name="answer${index}" value="${option}">
                    ${option}
                </label>
                `).join('')}
            </div>
            `;

            quizContainer.appendChild(questionDiv);
        });

        submitBtn.addEventListener('click', async () => {
            const answers = [];
            questions.forEach((_, index) => {
                const selectedOption = document.querySelector(`input[name="answer${index}"]:checked`);
                answers.push(selectedOption ? selectedOption.value : '');
            });

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const userDetails = {
                username: username,
                email: email
            };


            const submitResponse = await fetch('http://localhost:8080/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userDetails, answers })
            });

            

            console.log(submitResponse);
            const result = await submitResponse.json();

            resultContainer.innerHTML = `
                <p>Username: ${result.username}</p>
                <p>Email: ${result.email}</p>
                <p>Score: ${result.score}</p>
            `;

        });
    } catch (error) {
        console.error(error.message);
    }
});

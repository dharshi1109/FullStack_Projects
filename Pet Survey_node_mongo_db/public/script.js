const form = document.getElementById('survey-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const answer1 = document.querySelector('input[name="answer1"]:checked').value;
    const answer2 = document.querySelector('input[name="answer2"]').value;
    const answer3 = document.querySelector('input[name="answer3"]:checked').value;
    const answer4 = document.querySelector('select[name="answer4"]').value;
    const answer5 = document.querySelector('input[name="answer5"]').value;

    const surveyData = {
        name,
        answer1,
        answer2: parseInt(answer2),
        answer3,
        answer4,
        answer5: parseInt(answer5)
    };

    try {
        const response = await fetch('http://localhost:8085/survey', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(surveyData)
        });

        if (response.ok) {
            const data = await response.json();
            document.getElementById('result').textContent = 'Survey submitted successfully!';

            displaySurveyResults();
        } else {
            throw new Error('Failed to submit the survey.');
        }
    } catch (error) {
        console.error(error);
        document.getElementById('result').textContent = 'Failed to submit the survey.';
    }
});

async function displaySurveyResults() {
    try {
        const response = await fetch('http://localhost:8085/survey/results');
        if (response.ok) {
            const surveyResults = await response.json();
            displayQuestionResults(surveyResults);
        } else {
            throw new Error('Failed to fetch survey results.');
        }
    } catch (error) {
        console.error(error);
    }
}

function displayQuestionResults(surveyResults) {
    const questionResultsDiv = document.getElementById('question-results');
    questionResultsDiv.innerHTML = '';

    const question1Counts = {
        Dog: 0,
        Cat: 0,
        Fish: 0,
        Bird: 0,
        Hamster: 0
    };

    let totalPetsCount = 0;

    const question3Counts = {
        yes: 0,
        no: 0,
       
    };

    const question4Counts = {
        Feeding: 0,
        Walking: 0,
        Playing: 0,
        
    };

    const question5Counts = {
        Dog: 0,
        Cat: 0,
        Fish: 0,
        Bird: 0,
        Hamster: 0
    };

    surveyResults.forEach(result => {
        question1Counts[result.answer1]+=result.answer2;
        totalPetsCount += result.answer2;
        question3Counts[result.answer3]++;
        question4Counts[result.answer4]++;
        question5Counts[result.answer1]+=result.answer5;
    });
    displayQuestion1Results(questionResultsDiv, question1Counts);
    displayQuestion2Results(questionResultsDiv, totalPetsCount);
    displayQuestion3Results(questionResultsDiv, question3Counts);
    displayQuestion4Results(questionResultsDiv, question4Counts);
    displayQuestion5Results(questionResultsDiv, question5Counts);
}

function displayQuestion1Results(parentDiv, counts) {
    const div = document.createElement('div');
    div.innerHTML = `<h3>Question 1: Count of each pet type</h3>`;
    for (const petType in counts) {
        div.innerHTML += `<p>${petType}: ${counts[petType]}</p>`;
    }
    parentDiv.appendChild(div);
}

function displayQuestion2Results(parentDiv, totalPetsCount) {
    const div = document.createElement('div');
    div.innerHTML = `<h3>Question 2: Total count of pets</h3>`;
    div.innerHTML += `<p>Total Pets: ${totalPetsCount}</p>`;
    parentDiv.appendChild(div);
}

function displayQuestion3Results(parentDiv, counts) {
    const div = document.createElement('div');
    div.innerHTML = `<h3>Question 3: Like the pet or not</h3>`;
    for (const reason in counts) {
        div.innerHTML += `<p>${reason}: ${counts[reason]}</p>`;
    }
    parentDiv.appendChild(div);
}

function displayQuestion4Results(parentDiv, counts) {
    const div = document.createElement('div');
    div.innerHTML = `<h3>Question 4: Count of pet care methods</h3>`;
    for (const method in counts) {
        div.innerHTML += `<p>${method}: ${counts[method]}</p>`;
    }
    parentDiv.appendChild(div);
}

function displayQuestion5Results(parentDiv, counts) {
    const div = document.createElement('div');
    div.innerHTML = `<h3>Question 5: Total hours spent with pets daily</h3>`;
    for (const petType in counts) {
        div.innerHTML += `<p>${petType}: ${counts[petType]}</p>`;
    }
    parentDiv.appendChild(div);
}

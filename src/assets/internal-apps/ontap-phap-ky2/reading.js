// Reading exercises data
const readingData = {
    exercises: [
        {
            id: "reading1",
            title: "Compréhension des écrits",
            type: "textReading",
            points: 10,
            text: `
                <h5 class="mb-3">Au supermarché</h5>
                <p>À 6 heures le dimanche matin, Marie se réveille. Elle se brosse les dents, elle se lave, elle mange un croissant et elle boit du lait au petit déjeuner puis elle met une belle robe rouge pour aller au supermarché à la ville.</p>
                <p>« Ton cousin Nicolas veut aller avec toi ! dit maman. »</p>
                <p>Les enfants montent dans un bus et il roule très vite.</p>
                <p>Deux heures plus tard, le bus s'arrête devant un supermarché. C'est le plus grand marché de la ville. On y trouve de tout ! Des vêtements, des fruits, des légumes, du poisson, de la viande, des tissus et des jouets.</p>
                <p>Marie achète une belle poupée. Nicolas achète un gâteau au chocolat pour son grand-père Max. Maman achète une chemise et une jupe.</p>
                <p>« Maintenant, nous allons au restaurant ! Papa nous y attend à 17 heures » dit maman.</p>
            `,
            questions: [
                {
                    id: "q1",
                    question: "Comment s'appelle la petite fille du texte?",
                    type: "multipleChoice",
                    options: ["Paul", "Marie", "Papa", "Max"],
                    correctAnswer: "Marie"
                },
                {
                    id: "q2",
                    question: "À quelle heure elle se réveille?",
                    type: "multipleChoice",
                    options: ["à 6 heures", "à 17 heures", "à midi"],
                    correctAnswer: "à 6 heures"
                },
                {
                    id: "q3",
                    question: "Que fait-elle le matin?",
                    type: "multipleChoice",
                    options: ["va au restaurant", "prend le petit déjeuner", "achète une lampe"],
                    correctAnswer: "prend le petit déjeuner"
                },
                {
                    id: "q4",
                    question: "Qu'est-ce qu'elle met comme habits?",
                    type: "multipleChoice",
                    options: ["une robe rouge.", "une chemise", "une jupe", "un tee-shirt"],
                    correctAnswer: "une robe rouge."
                },
                {
                    id: "q5",
                    question: "Où va-t-elle?",
                    type: "multipleChoice",
                    options: ["à l'école", "à la ville", "au village", "au musée"],
                    correctAnswer: "à la ville"
                },
                {
                    id: "q6",
                    question: "Est-ce que la famille de Marie habite à la ville?",
                    type: "multipleChoice",
                    options: ["Oui.", "Non"],
                    correctAnswer: "Non"
                },
                {
                    id: "q7",
                    question: "Comment les enfants vont au supermarché?",
                    type: "multipleChoice",
                    options: ["en voiture", "en train", "à pied", "en bus"],
                    correctAnswer: "en bus"
                },
                {
                    id: "q8",
                    question: "Qu'est-ce que Nicolas achète au supermarché pour son grand-père?",
                    type: "multipleChoice",
                    options: ["un tee-shirt", "des légumes", "une lampe", "un gâteau"],
                    correctAnswer: "un gâteau"
                },
                {
                    id: "q9",
                    question: "À quelle heure papa attend ses enfants?",
                    type: "multipleChoice",
                    options: ["À 6 heures", "À midi", "À 17 heures"],
                    correctAnswer: "À 17 heures"
                },
                {
                    id: "q10",
                    question: "Où est-ce que les enfants vont pour voir leur papa?",
                    type: "multipleChoice",
                    options: ["au marché.", "à la gare", "à l'école.", "au restaurant"],
                    correctAnswer: "au restaurant"
                }
            ]
        }
    ]
};

// Function to load reading content
function loadReadingContent() {
    const contentArea = document.getElementById('unitContentArea');
    
    // Create container
    const container = document.createElement('div');
    container.className = 'section-container';
    
    // Add section title
    container.innerHTML = `
        <h3 class="section-title">
            <i class="fas fa-book-open me-2"></i> Compréhension des Écrits - Đọc Hiểu
        </h3>
        <p class="text-muted mb-4">Luyện tập kỹ năng đọc hiểu thông qua các văn bản tiếng Pháp đơn giản.</p>
    `;
    
    // Create exercises
    const exercisesContainer = document.createElement('div');
    exercisesContainer.className = 'exercises-container';
    
    // Add each exercise
    readingData.exercises.forEach(exercise => {
        const exerciseElement = createReadingExercise(exercise);
        exercisesContainer.appendChild(exerciseElement);
    });
    
    container.appendChild(exercisesContainer);
    contentArea.appendChild(container);
    
    // Add check answers button
    const checkAnswersBtn = document.createElement('button');
    checkAnswersBtn.className = 'btn btn-primary mt-4';
    checkAnswersBtn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Kiểm tra đáp án';
    checkAnswersBtn.addEventListener('click', checkReadingAnswers);
    
    // Add feedback element
    const feedbackElement = document.createElement('div');
    feedbackElement.id = 'readingFeedback';
    feedbackElement.className = 'feedback mt-3';
    feedbackElement.style.display = 'none';
    
    contentArea.appendChild(checkAnswersBtn);
    contentArea.appendChild(feedbackElement);
}

// Function to create a reading exercise
function createReadingExercise(exercise) {
    const exerciseElement = document.createElement('div');
    exerciseElement.className = 'exercise-card mb-4';
    exerciseElement.id = exercise.id;
    
    // Add exercise header
    exerciseElement.innerHTML = `
        <h4 class="exercise-title">${exercise.title}</h4>
        <p class="text-muted small">${exercise.points} points</p>
    `;
    
    // Create content based on exercise type
    switch (exercise.type) {
        case 'textReading':
            exerciseElement.appendChild(createTextReadingExercise(exercise));
            break;
    }
    
    return exerciseElement;
}

// Function to create text reading exercise
function createTextReadingExercise(exercise) {
    const container = document.createElement('div');
    
    // Add reading text
    const textContainer = document.createElement('div');
    textContainer.className = 'reading-text p-3 mb-4 bg-light rounded';
    textContainer.innerHTML = exercise.text;
    
    // Add speak button for text
    const speakButtonContainer = document.createElement('div');
    speakButtonContainer.className = 'text-center mb-4';
    
    const speakButton = document.createElement('button');
    speakButton.className = 'btn btn-sm btn-outline-primary speak-btn';
    speakButton.dataset.text = textContainer.textContent.trim();
    speakButton.innerHTML = '<i class="fas fa-volume-up me-2"></i>Écouter le texte';
    
    speakButtonContainer.appendChild(speakButton);
    
    container.appendChild(textContainer);
    container.appendChild(speakButtonContainer);
    
    // Add questions
    const questionsContainer = document.createElement('div');
    questionsContainer.className = 'questions-container';
    
    // Section header
    questionsContainer.innerHTML = `
        <h5 class="mb-3">Questions</h5>
        <p class="exercise-instruction">Entoure la bonne réponse:</p>
    `;
    
    // Add each question
    exercise.questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question mb-4';
        questionElement.dataset.questionId = question.id;
        
        questionElement.innerHTML = `
            <div class="question-text mb-2">${index + 1}. ${question.question}</div>
        `;
        
        // Add options based on question type
        switch (question.type) {
            case 'multipleChoice':
                const optionsContainer = document.createElement('div');
                optionsContainer.className = 'options-container';
                
                question.options.forEach((option, optionIndex) => {
                    const optionElement = document.createElement('div');
                    optionElement.className = 'form-check';
                    
                    optionElement.innerHTML = `
                        <input class="form-check-input" type="radio" name="question-${question.id}" 
                               id="option-${question.id}-${optionIndex}" value="${option}">
                        <label class="form-check-label" for="option-${question.id}-${optionIndex}">
                            ${option}
                        </label>
                    `;
                    
                    optionsContainer.appendChild(optionElement);
                });
                
                questionElement.appendChild(optionsContainer);
                break;
        }
        
        questionsContainer.appendChild(questionElement);
    });
    
    container.appendChild(questionsContainer);
    
    return container;
}

// Function to check reading exercise answers
function checkReadingAnswers() {
    // Get all exercises
    const exercises = readingData.exercises;
    let totalPoints = 0;
    let earnedPoints = 0;
    
    // Check each exercise
    exercises.forEach(exercise => {
        totalPoints += exercise.points;
        
        // Check each question
        exercise.questions.forEach(question => {
            const selectedOption = document.querySelector(`input[name="question-${question.id}"]:checked`);
            
            if (selectedOption && selectedOption.value === question.correctAnswer) {
                earnedPoints += exercise.points / exercise.questions.length;
                
                // Mark correct answer
                selectedOption.parentElement.classList.add('bg-success', 'text-white', 'p-2', 'rounded');
            } else if (selectedOption) {
                // Mark incorrect answer
                selectedOption.parentElement.classList.add('bg-danger', 'text-white', 'p-2', 'rounded');
                
                // Find and highlight correct answer
                const correctOption = document.querySelector(`input[name="question-${question.id}"][value="${question.correctAnswer}"]`);
                if (correctOption) {
                    correctOption.parentElement.classList.add('bg-success', 'text-white', 'p-2', 'rounded');
                }
            }
        });
    });
    
    // Round to 1 decimal place
    earnedPoints = Math.round(earnedPoints * 10) / 10;
    
    // Display feedback
    const feedbackElement = document.getElementById('readingFeedback');
    const feedback = {
        score: earnedPoints,
        total: totalPoints,
        percentage: Math.round((earnedPoints / totalPoints) * 100)
    };
    
    displayFeedback(feedbackElement, feedback);
    feedbackElement.style.display = 'block';
    
    // Scroll to feedback
    feedbackElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
} 
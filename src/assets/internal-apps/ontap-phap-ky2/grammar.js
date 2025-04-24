// Grammar exercises data
const grammarData = {
    exercises: [
        {
            id: "grammar1",
            title: "Connaissances Linguistiques - Test",
            instructions: "Choisis la bonne réponse pour chaque question.",
            points: 10,
            type: "multipleChoice",
            questions: [
                {
                    id: "q1",
                    question: "Quelle heure est-il? Il est ...........",
                    options: ["décembre", "jeudi", "weekend", "7 heures"],
                    correctAnswer: "7 heures"
                },
                {
                    id: "q2",
                    question: "Quel âge as-tu?",
                    options: ["Sophie", "Je vais bien", "J'ai 7 ans", "J'aime le français"],
                    correctAnswer: "J'ai 7 ans"
                },
                {
                    id: "q3",
                    question: "Au petit déjeuner, je mange .......... croissants.",
                    options: ["un", "des", "du", "les"],
                    correctAnswer: "des"
                },
                {
                    id: "q4",
                    question: "........... habites-tu ? J'habite à Hanoi.",
                    options: ["Quand", "Quel", "Où", "Que"],
                    correctAnswer: "Où"
                },
                {
                    id: "q5",
                    question: "Chez Oribilis, il ne faut pas ...............",
                    options: ["pleure", "pleurer", "pleurez", "pleuré"],
                    correctAnswer: "pleurer"
                },
                {
                    id: "q6",
                    question: "Lucie va à la gare ............ train.",
                    options: ["à", "la", "en", "une"],
                    correctAnswer: "en"
                },
                {
                    id: "q7",
                    question: "Nous allons ............ école ...... voiture.",
                    options: ["à/ en", "à la / en", "la / le", "à l' / en"],
                    correctAnswer: "à l' / en"
                },
                {
                    id: "q8",
                    question: "Nous ............... à la mer avec nos amis.",
                    options: ["vont", "allons", "allez", "allont"],
                    correctAnswer: "allons"
                },
                {
                    id: "q9",
                    question: "Qu'est-ce que vous ............... après l'école ?",
                    options: ["faire", "faisez", "faites", "font"],
                    correctAnswer: "faites"
                },
                {
                    id: "q10",
                    question: "Les enfants ................... dans la cour d'école.",
                    options: ["a", "sont", "est", "sommes"],
                    correctAnswer: "sont"
                },
                {
                    id: "q11",
                    question: ".....................heure est-il ?",
                    options: ["Quel", "Quelle", "Quels", "Quelles"],
                    correctAnswer: "Quelle"
                },
                {
                    id: "q12",
                    question: "Ma mère est ...........",
                    options: ["gentile", "gentil", "gentille", "gentilles"],
                    correctAnswer: "gentille"
                },
                {
                    id: "q13",
                    question: "Mère Lion a fait un .............. gâteau.",
                    options: ["bel", "beau", "grande", "bonne"],
                    correctAnswer: "beau"
                },
                {
                    id: "q14",
                    question: "La tête d'Oribilis est .............. comme une pastèque.",
                    options: ["gros", "grosse", "grosses", "grossesses"],
                    correctAnswer: "grosse"
                },
                {
                    id: "q15",
                    question: "Tous les soirs, M. Lampion passe dans la rue avec sa ........... lampe.",
                    options: ["petit", "petite", "petits", "petites"],
                    correctAnswer: "petite"
                },
                {
                    id: "q16",
                    question: "Je vais à l'école ............. pied.",
                    options: ["le", "la", "en", "à"],
                    correctAnswer: "à"
                },
                {
                    id: "q17",
                    question: "Je ................. à 6 heures du matin.",
                    options: ["te lèves", "se lève", "nous levons", "me lève"],
                    correctAnswer: "me lève"
                },
                {
                    id: "q18",
                    question: "Elle aime .............. de la pizza.",
                    options: ["manges", "mangeons", "mangent", "manger"],
                    correctAnswer: "manger"
                },
                {
                    id: "q19",
                    question: "Nous .................... l'avion pour aller à Paris.",
                    options: ["prennent", "prendre", "prenons", "prennons"],
                    correctAnswer: "prenons"
                },
                {
                    id: "q20",
                    question: "Les enfants mangent .............. viande et boivent ............. lait.",
                    options: ["de/ de", "la / le", "de la/ du", "le / la"],
                    correctAnswer: "de la/ du"
                }
            ]
        },
        {
            id: "grammar2",
            title: "Révision 2A",
            type: "multipleChoice",
            points: 10,
            questions: [
                {
                    id: "r1",
                    question: "Quelle heure est-il? Il est ...........",
                    options: ["Paul", "samedi", "juillet", "midi"],
                    correctAnswer: "midi"
                },
                {
                    id: "r2",
                    question: "Quel âge a ton père?",
                    options: ["2023", "Bien", "40 ans", "le français"],
                    correctAnswer: "40 ans"
                },
                {
                    id: "r3",
                    question: "Au petit déjeuner, ma soeur mange .......... Pain.",
                    options: ["un", "des", "du", "les"],
                    correctAnswer: "du"
                },
                {
                    id: "r4",
                    question: "........... habites-tu ? J'habite en France.",
                    options: ["Quand", "Quel", "Où", "Que"],
                    correctAnswer: "Où"
                },
                {
                    id: "r5",
                    question: "En classe, il ne faut pas .................  ",
                    options: ["bavard", "bavarder", "bavardes", "bavardé"],
                    correctAnswer: "bavarder"
                },
                {
                    id: "r6",
                    question: "Paul va au cinéma ............ pied.",
                    options: ["à", "la", "en", "une"],
                    correctAnswer: "à"
                },
                {
                    id: "r7",
                    question: "Nous allons ............ ville ...... voiture.",
                    options: ["à/ en", "à la / en", "la / le", "à l' / en"],
                    correctAnswer: "à la / en"
                },
                {
                    id: "r8",
                    question: "Nous .................à la montagne en train.",
                    options: ["vont", "allons", "allez", "allont"],
                    correctAnswer: "allons"
                },
                {
                    id: "r9",
                    question: "Qu'est-ce que vous ............... avant d'aller à l'école?",
                    options: ["faire", "faisez", "faites", "font"],
                    correctAnswer: "faites"
                },
                {
                    id: "r10",
                    question: "Ils ..................... dans la classe de l'école.",
                    options: ["a", "sont", "est", "sommes"],
                    correctAnswer: "sont"
                }
            ]
        }
    ]
};

// Function to load grammar content
function loadGrammarContent() {
    const contentArea = document.getElementById('unitContentArea');
    
    // Create container
    const container = document.createElement('div');
    container.className = 'section-container';
    
    // Add section title
    container.innerHTML = `
        <h3 class="section-title">
            <i class="fas fa-language me-2"></i> Connaissances Linguistiques - Kiến Thức Ngôn Ngữ
        </h3>
        <p class="text-muted mb-4">Kiểm tra kiến thức ngữ pháp và cấu trúc tiếng Pháp qua các bài tập trắc nghiệm.</p>
    `;
    
    // Create exercises
    const exercisesContainer = document.createElement('div');
    exercisesContainer.className = 'exercises-container';
    
    // Add each exercise
    grammarData.exercises.forEach(exercise => {
        const exerciseElement = createGrammarExercise(exercise);
        exercisesContainer.appendChild(exerciseElement);
    });
    
    container.appendChild(exercisesContainer);
    contentArea.appendChild(container);
    
    // Add check answers button
    const checkAnswersBtn = document.createElement('button');
    checkAnswersBtn.className = 'btn btn-primary mt-4';
    checkAnswersBtn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Kiểm tra đáp án';
    checkAnswersBtn.addEventListener('click', checkGrammarAnswers);
    
    // Add feedback element
    const feedbackElement = document.createElement('div');
    feedbackElement.id = 'grammarFeedback';
    feedbackElement.className = 'feedback mt-3';
    feedbackElement.style.display = 'none';
    
    contentArea.appendChild(checkAnswersBtn);
    contentArea.appendChild(feedbackElement);
}

// Function to create a grammar exercise
function createGrammarExercise(exercise) {
    const exerciseElement = document.createElement('div');
    exerciseElement.className = 'exercise-card mb-4';
    exerciseElement.id = exercise.id;
    
    // Add exercise header
    exerciseElement.innerHTML = `
        <h4 class="exercise-title">${exercise.title}</h4>
        ${exercise.instructions ? `<p class="exercise-instruction">${exercise.instructions}</p>` : ''}
        <p class="text-muted small">${exercise.points} points</p>
    `;
    
    // Create content based on exercise type
    switch (exercise.type) {
        case 'multipleChoice':
            exerciseElement.appendChild(createMultipleChoiceExercise(exercise));
            break;
    }
    
    return exerciseElement;
}

// Function to create multiple choice exercise
function createMultipleChoiceExercise(exercise) {
    const container = document.createElement('div');
    container.className = 'questions-container';
    
    // Add each question
    exercise.questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question mb-4';
        questionElement.dataset.questionId = question.id;
        
        questionElement.innerHTML = `
            <div class="question-text mb-2">${index + 1}. ${question.question}</div>
        `;
        
        // Add options
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container row';
        
        // Create option columns (2 columns for desktop, 1 for mobile)
        question.options.forEach((option, optionIndex) => {
            const optionCol = document.createElement('div');
            optionCol.className = 'col-md-6 mb-2';
            
            const optionElement = document.createElement('div');
            optionElement.className = 'form-check';
            
            optionElement.innerHTML = `
                <input class="form-check-input" type="radio" name="question-${question.id}" 
                       id="option-${question.id}-${optionIndex}" value="${option}">
                <label class="form-check-label" for="option-${question.id}-${optionIndex}">
                    ${getOptionLabel(optionIndex)}. ${option}
                </label>
            `;
            
            optionCol.appendChild(optionElement);
            optionsContainer.appendChild(optionCol);
        });
        
        questionElement.appendChild(optionsContainer);
        container.appendChild(questionElement);
    });
    
    return container;
}

// Helper function to get option label (A, B, C, D)
function getOptionLabel(index) {
    return String.fromCharCode(65 + index); // A=65, B=66, etc.
}

// Function to check grammar exercise answers
function checkGrammarAnswers() {
    // Get all exercises
    const exercises = grammarData.exercises;
    let totalPoints = 0;
    let earnedPoints = 0;
    
    // Check each exercise
    exercises.forEach(exercise => {
        totalPoints += exercise.points;
        let correctAnswers = 0;
        
        // Check each question
        exercise.questions.forEach(question => {
            const selectedOption = document.querySelector(`input[name="question-${question.id}"]:checked`);
            
            if (selectedOption && selectedOption.value === question.correctAnswer) {
                correctAnswers++;
                
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
        
        // Calculate points for this exercise
        earnedPoints += (correctAnswers / exercise.questions.length) * exercise.points;
    });
    
    // Round to 1 decimal place
    earnedPoints = Math.round(earnedPoints * 10) / 10;
    
    // Display feedback
    const feedbackElement = document.getElementById('grammarFeedback');
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
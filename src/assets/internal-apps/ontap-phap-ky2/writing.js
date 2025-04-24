// Writing exercises data
const writingData = {
    exercises: [
        {
            id: "writing1",
            title: "Quelle heure est-il?",
            instructions: "Écris l'heure en lettres.",
            points: 2,
            type: "timeWriting",
            items: [
                {
                    id: "time1",
                    image: "clock-12.png",
                    correctAnswer: "Il est midi"
                },
                {
                    id: "time2",
                    image: "clock-6.png",
                    correctAnswer: "Il est six heures"
                }
            ]
        },
        {
            id: "writing2",
            title: "Complète la phrase",
            instructions: "Complète les phrases avec les bons mots.",
            points: 2,
            type: "completePhrase",
            items: [
                {
                    id: "phrase1",
                    phrase: "Au petit déjeuner, nous mangeons ...... ............",
                    image: "croissants.png",
                    correctAnswer: "des croissants"
                },
                {
                    id: "phrase2",
                    phrase: "Le matin, Jean boit ...... ............",
                    image: "milk.png",
                    correctAnswer: "du lait"
                },
                {
                    id: "phrase3",
                    phrase: "Nous mangeons ...... ............",
                    image: "sandwich.png",
                    correctAnswer: "un sandwich",
                    suffix: "au dîner."
                },
                {
                    id: "phrase4",
                    phrase: "Mon petit frère va à l'école ...... ............",
                    image: "bus.png",
                    correctAnswer: "en bus"
                }
            ]
        },
        {
            id: "writing3",
            title: "Écris les nombres en lettres",
            instructions: "Écris les nombres suivants en toutes lettres.",
            points: 2,
            type: "numberWriting",
            items: [
                {
                    id: "number1",
                    number: 12,
                    correctAnswer: "douze"
                },
                {
                    id: "number2",
                    number: 32,
                    correctAnswer: "trente-deux"
                },
                {
                    id: "number3",
                    number: 20,
                    correctAnswer: "vingt"
                },
                {
                    id: "number4",
                    number: 45,
                    correctAnswer: "quarante-cinq"
                }
            ]
        },
        {
            id: "writing4",
            title: "Cite un mot qui contient du son",
            instructions: "Écris un mot qui contient le son indiqué.",
            points: 2,
            type: "soundWord",
            items: [
                {
                    id: "sound1",
                    sound: "ch",
                    exampleAnswers: ["chat", "chien", "chambre", "chocolat"]
                },
                {
                    id: "sound2",
                    sound: "f",
                    exampleAnswers: ["faire", "fenêtre", "frère", "fermé"]
                },
                {
                    id: "sound3",
                    sound: "j",
                    exampleAnswers: ["jeu", "jaune", "jouer", "jardin"]
                },
                {
                    id: "sound4",
                    sound: "v",
                    exampleAnswers: ["vite", "verre", "voiture", "ville"]
                }
            ]
        },
        {
            id: "writing5",
            title: "Que fais-tu à l'école aujourd'hui?",
            instructions: "Écris 4 activités que tu fais à l'école.",
            points: 2,
            type: "activities",
            exampleAnswers: [
                "Je lis un livre.",
                "J'écris dans mon cahier.",
                "Je joue avec mes amis.",
                "Je dessine une image.",
                "Je mange à la cantine.",
                "J'écoute la maîtresse.",
                "Je chante une chanson.",
                "Je fais des mathématiques."
            ]
        }
    ]
};

// Function to load writing content
function loadWritingContent() {
    const contentArea = document.getElementById('unitContentArea');
    
    // Create container
    const container = document.createElement('div');
    container.className = 'section-container';
    
    // Add section title
    container.innerHTML = `
        <h3 class="section-title">
            <i class="fas fa-pen me-2"></i> Expression Écrite - Viết
        </h3>
        <p class="text-muted mb-4">Luyện tập kỹ năng viết tiếng Pháp thông qua các bài tập đa dạng.</p>
    `;
    
    // Create exercises
    const exercisesContainer = document.createElement('div');
    exercisesContainer.className = 'exercises-container';
    
    // Add each exercise
    writingData.exercises.forEach(exercise => {
        const exerciseElement = createWritingExercise(exercise);
        exercisesContainer.appendChild(exerciseElement);
    });
    
    container.appendChild(exercisesContainer);
    contentArea.appendChild(container);
    
    // Add check answers button
    const checkAnswersBtn = document.createElement('button');
    checkAnswersBtn.className = 'btn btn-primary mt-4';
    checkAnswersBtn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Kiểm tra đáp án';
    checkAnswersBtn.addEventListener('click', checkWritingAnswers);
    
    // Add feedback element
    const feedbackElement = document.createElement('div');
    feedbackElement.id = 'writingFeedback';
    feedbackElement.className = 'feedback mt-3';
    feedbackElement.style.display = 'none';
    
    contentArea.appendChild(checkAnswersBtn);
    contentArea.appendChild(feedbackElement);
}

// Function to create a writing exercise
function createWritingExercise(exercise) {
    const exerciseElement = document.createElement('div');
    exerciseElement.className = 'exercise-card mb-4';
    exerciseElement.id = exercise.id;
    
    // Add exercise header
    exerciseElement.innerHTML = `
        <h4 class="exercise-title">${exercise.title}</h4>
        <p class="exercise-instruction">${exercise.instructions}</p>
        <p class="text-muted small">${exercise.points} points</p>
    `;
    
    // Create content based on exercise type
    switch (exercise.type) {
        case 'timeWriting':
            exerciseElement.appendChild(createTimeWritingExercise(exercise));
            break;
        case 'completePhrase':
            exerciseElement.appendChild(createCompletePhraseExercise(exercise));
            break;
        case 'numberWriting':
            exerciseElement.appendChild(createNumberWritingExercise(exercise));
            break;
        case 'soundWord':
            exerciseElement.appendChild(createSoundWordExercise(exercise));
            break;
        case 'activities':
            exerciseElement.appendChild(createActivitiesExercise(exercise));
            break;
    }
    
    return exerciseElement;
}

// Function to create time writing exercise
function createTimeWritingExercise(exercise) {
    const container = document.createElement('div');
    container.className = 'row';
    
    exercise.items.forEach(item => {
        const itemCol = document.createElement('div');
        itemCol.className = 'col-md-6 mb-3';
        
        itemCol.innerHTML = `
            <div class="time-item text-center">
                <div class="mb-3">
                    <img src="${item.image || 'placeholder.jpg'}" alt="Clock" class="img-fluid" style="max-height: 150px;"
                         onerror="this.src='https://via.placeholder.com/150?text=Clock'">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control time-answer" 
                           data-item-id="${item.id}" placeholder="Écris l'heure en lettres...">
                    <div class="feedback-text mt-2"></div>
                </div>
            </div>
        `;
        
        container.appendChild(itemCol);
    });
    
    return container;
}

// Function to create complete phrase exercise
function createCompletePhraseExercise(exercise) {
    const container = document.createElement('div');
    
    exercise.items.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.className = 'complete-phrase-item mb-4';
        
        itemContainer.innerHTML = `
            <div class="row align-items-center">
                <div class="col-md-7">
                    <div class="phrase-text mb-2">${item.phrase}</div>
                    <div class="input-group">
                        <input type="text" class="form-control phrase-answer" 
                               data-item-id="${item.id}" placeholder="Complète la phrase...">
                        ${item.suffix ? `<span class="input-group-text">${item.suffix}</span>` : ''}
                    </div>
                    <div class="feedback-text mt-2"></div>
                </div>
                <div class="col-md-5 text-center">
                    <img src="${item.image || 'placeholder.jpg'}" alt="Phrase image" class="img-fluid" style="max-height: 100px;"
                         onerror="this.src='https://via.placeholder.com/150?text=${encodeURIComponent(item.correctAnswer)}'">
                </div>
            </div>
        `;
        
        container.appendChild(itemContainer);
    });
    
    return container;
}

// Function to create number writing exercise
function createNumberWritingExercise(exercise) {
    const container = document.createElement('div');
    container.className = 'row';
    
    exercise.items.forEach(item => {
        const itemCol = document.createElement('div');
        itemCol.className = 'col-md-6 mb-3';
        
        itemCol.innerHTML = `
            <div class="number-item">
                <div class="number-text mb-2">${item.number}:</div>
                <div class="form-group">
                    <input type="text" class="form-control number-answer" 
                           data-item-id="${item.id}" placeholder="Écris en lettres...">
                    <div class="feedback-text mt-2"></div>
                </div>
            </div>
        `;
        
        container.appendChild(itemCol);
    });
    
    return container;
}

// Function to create sound word exercise
function createSoundWordExercise(exercise) {
    const container = document.createElement('div');
    container.className = 'row';
    
    exercise.items.forEach(item => {
        const itemCol = document.createElement('div');
        itemCol.className = 'col-md-6 mb-3';
        
        const examplesText = item.exampleAnswers.length > 0 ? 
                            `(ex: ${item.exampleAnswers.slice(0, 2).join(', ')})` : '';
        
        itemCol.innerHTML = `
            <div class="sound-item">
                <div class="sound-text mb-2">${item.sound} <span class="text-muted small">${examplesText}</span></div>
                <div class="form-group">
                    <input type="text" class="form-control sound-answer" 
                           data-item-id="${item.id}" data-sound="${item.sound}" 
                           placeholder="Écris un mot avec ce son...">
                    <div class="feedback-text mt-2"></div>
                </div>
            </div>
        `;
        
        container.appendChild(itemCol);
    });
    
    return container;
}

// Function to create activities exercise
function createActivitiesExercise(exercise) {
    const container = document.createElement('div');
    
    container.innerHTML = `
        <div class="activities-container">
            <div class="form-group mb-3">
                <label class="mb-2">Activité 1:</label>
                <input type="text" class="form-control activity-answer" 
                       data-activity="1" placeholder="J'écris...">
            </div>
            <div class="form-group mb-3">
                <label class="mb-2">Activité 2:</label>
                <input type="text" class="form-control activity-answer" 
                       data-activity="2" placeholder="J'écris...">
            </div>
            <div class="form-group mb-3">
                <label class="mb-2">Activité 3:</label>
                <input type="text" class="form-control activity-answer" 
                       data-activity="3" placeholder="J'écris...">
            </div>
            <div class="form-group mb-3">
                <label class="mb-2">Activité 4:</label>
                <input type="text" class="form-control activity-answer" 
                       data-activity="4" placeholder="J'écris...">
            </div>
            <div class="feedback-text mt-3"></div>
        </div>
    `;
    
    return container;
}

// Function to check writing exercise answers
function checkWritingAnswers() {
    // Get all exercises
    const exercises = writingData.exercises;
    let totalPoints = 0;
    let earnedPoints = 0;
    
    // Check each exercise
    exercises.forEach(exercise => {
        totalPoints += exercise.points;
        let exerciseScore = 0;
        
        switch (exercise.type) {
            case 'timeWriting':
                // Check time writing answers
                const timeInputs = document.querySelectorAll('.time-answer');
                let correctTimeAnswers = 0;
                
                timeInputs.forEach(input => {
                    const itemId = input.dataset.itemId;
                    const item = exercise.items.find(i => i.id === itemId);
                    const userAnswer = input.value.trim().toLowerCase();
                    const feedbackElement = input.nextElementSibling;
                    
                    if (item && isCorrectAnswer(userAnswer, item.correctAnswer)) {
                        correctTimeAnswers++;
                        input.classList.add('is-valid');
                        feedbackElement.textContent = "Correct!";
                        feedbackElement.className = "feedback-text mt-2 text-success";
                    } else if (userAnswer) {
                        input.classList.add('is-invalid');
                        feedbackElement.textContent = `Réponse correcte: ${item.correctAnswer}`;
                        feedbackElement.className = "feedback-text mt-2 text-danger";
                    }
                });
                
                exerciseScore = (correctTimeAnswers / exercise.items.length) * exercise.points;
                break;
                
            case 'completePhrase':
                // Check phrase completion answers
                const phraseInputs = document.querySelectorAll('.phrase-answer');
                let correctPhraseAnswers = 0;
                
                phraseInputs.forEach(input => {
                    const itemId = input.dataset.itemId;
                    const item = exercise.items.find(i => i.id === itemId);
                    const userAnswer = input.value.trim().toLowerCase();
                    const feedbackElement = input.closest('.input-group').nextElementSibling;
                    
                    if (item && isCorrectAnswer(userAnswer, item.correctAnswer)) {
                        correctPhraseAnswers++;
                        input.classList.add('is-valid');
                        feedbackElement.textContent = "Correct!";
                        feedbackElement.className = "feedback-text mt-2 text-success";
                    } else if (userAnswer) {
                        input.classList.add('is-invalid');
                        feedbackElement.textContent = `Réponse correcte: ${item.correctAnswer}`;
                        feedbackElement.className = "feedback-text mt-2 text-danger";
                    }
                });
                
                exerciseScore = (correctPhraseAnswers / exercise.items.length) * exercise.points;
                break;
                
            case 'numberWriting':
                // Check number writing answers
                const numberInputs = document.querySelectorAll('.number-answer');
                let correctNumberAnswers = 0;
                
                numberInputs.forEach(input => {
                    const itemId = input.dataset.itemId;
                    const item = exercise.items.find(i => i.id === itemId);
                    const userAnswer = input.value.trim().toLowerCase();
                    const feedbackElement = input.nextElementSibling;
                    
                    if (item && isCorrectAnswer(userAnswer, item.correctAnswer)) {
                        correctNumberAnswers++;
                        input.classList.add('is-valid');
                        feedbackElement.textContent = "Correct!";
                        feedbackElement.className = "feedback-text mt-2 text-success";
                    } else if (userAnswer) {
                        input.classList.add('is-invalid');
                        feedbackElement.textContent = `Réponse correcte: ${item.correctAnswer}`;
                        feedbackElement.className = "feedback-text mt-2 text-danger";
                    }
                });
                
                exerciseScore = (correctNumberAnswers / exercise.items.length) * exercise.points;
                break;
                
            case 'soundWord':
                // Check sound word answers
                const soundInputs = document.querySelectorAll('.sound-answer');
                let correctSoundAnswers = 0;
                
                soundInputs.forEach(input => {
                    const sound = input.dataset.sound;
                    const userAnswer = input.value.trim().toLowerCase();
                    const feedbackElement = input.nextElementSibling;
                    
                    if (userAnswer && userAnswer.includes(sound)) {
                        correctSoundAnswers++;
                        input.classList.add('is-valid');
                        feedbackElement.textContent = "Correct!";
                        feedbackElement.className = "feedback-text mt-2 text-success";
                    } else if (userAnswer) {
                        input.classList.add('is-invalid');
                        const item = exercise.items.find(i => i.sound === sound);
                        const examples = item ? item.exampleAnswers.join(', ') : '';
                        feedbackElement.textContent = `Exemples: ${examples}`;
                        feedbackElement.className = "feedback-text mt-2 text-danger";
                    }
                });
                
                exerciseScore = (correctSoundAnswers / exercise.items.length) * exercise.points;
                break;
                
            case 'activities':
                // Check activities answers
                const activityInputs = document.querySelectorAll('.activity-answer');
                let validActivityCount = 0;
                const feedbackElement = document.querySelector('#' + exercise.id + ' .feedback-text');
                
                activityInputs.forEach(input => {
                    const userAnswer = input.value.trim();
                    
                    if (userAnswer && userAnswer.length >= 5) {
                        validActivityCount++;
                        input.classList.add('is-valid');
                    } else if (userAnswer) {
                        input.classList.add('is-invalid');
                    }
                });
                
                exerciseScore = (validActivityCount / 4) * exercise.points;
                
                if (feedbackElement) {
                    if (validActivityCount >= 4) {
                        feedbackElement.textContent = "Très bien! Toutes les activités sont valides.";
                        feedbackElement.className = "feedback-text mt-2 text-success";
                    } else if (validActivityCount > 0) {
                        feedbackElement.textContent = `Tu as écrit ${validActivityCount} activités valides sur 4.`;
                        feedbackElement.className = "feedback-text mt-2 text-warning";
                    } else {
                        feedbackElement.textContent = "Tu dois écrire au moins une activité.";
                        feedbackElement.className = "feedback-text mt-2 text-danger";
                    }
                }
                break;
        }
        
        earnedPoints += exerciseScore;
    });
    
    // Round to 1 decimal place
    earnedPoints = Math.round(earnedPoints * 10) / 10;
    
    // Display feedback
    const feedbackElement = document.getElementById('writingFeedback');
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

// Helper function to check if an answer is correct
function isCorrectAnswer(userAnswer, correctAnswer) {
    // Convert both to lowercase and trim
    userAnswer = userAnswer.toLowerCase().trim();
    correctAnswer = correctAnswer.toLowerCase().trim();
    
    // Exact match
    if (userAnswer === correctAnswer) {
        return true;
    }
    
    // Handle accents
    const normalizedUser = userAnswer.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalizedCorrect = correctAnswer.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    if (normalizedUser === normalizedCorrect) {
        return true;
    }
    
    // Check for articles and formatting
    const userWords = userAnswer.split(/\s+/);
    const correctWords = correctAnswer.split(/\s+/);
    
    if (userWords.length === correctWords.length) {
        let allMatch = true;
        for (let i = 0; i < userWords.length; i++) {
            if (!areWordsEquivalent(userWords[i], correctWords[i])) {
                allMatch = false;
                break;
            }
        }
        if (allMatch) return true;
    }
    
    return false;
}

// Helper function to check if words are equivalent
function areWordsEquivalent(word1, word2) {
    // Normalize both words
    word1 = word1.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    word2 = word2.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    if (word1 === word2) return true;
    
    // Articles like le/la/les should be treated more strictly
    const articles = ["le", "la", "les", "un", "une", "des", "du", "de"];
    
    if (articles.includes(word1) || articles.includes(word2)) {
        return word1 === word2;
    }
    
    // For other words, allow partial matches
    if (word1.includes(word2) || word2.includes(word1)) {
        return true;
    }
    
    // Check Levenshtein distance for longer words (allow minor typos)
    if (word1.length > 3 && word2.length > 3) {
        if (levenshteinDistance(word1, word2) <= 1) {
            return true;
        }
    }
    
    return false;
}

// Levenshtein distance calculation for typo forgiveness
function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    
    const matrix = [];
    
    // Initialize matrix
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    
    // Fill matrix
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    matrix[i][j - 1] + 1,     // insertion
                    matrix[i - 1][j] + 1      // deletion
                );
            }
        }
    }
    
    return matrix[b.length][a.length];
} 
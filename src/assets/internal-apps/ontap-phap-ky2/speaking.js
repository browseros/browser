// Speaking exercises data
const speakingData = {
    exercises: [
        {
            id: "speaking1",
            title: "Lecture expressive",
            instructions: "Lis le texte à haute voix. Écoute d'abord la lecture modèle.",
            points: 2,
            type: "textReading",
            text: `Toutes les nuits, M. Lampion passe dans la rue. Il chante et Lucie écoute. Une nuit, M. Lampion ne vient pas. Lucie le cherche dans la ville. Elle va à la gare. Elle va au marché d'un petit village. M. Lampion n'est pas là.`
        },
        {
            id: "speaking2",
            title: "Réponds aux questions",
            instructions: "Écoute les questions et réponds-y.",
            points: 6,
            type: "questions",
            questions: [
                {
                    id: "sq1",
                    question: "Tu te lèves à quelle heure ?",
                    sampleAnswer: "Je me lève à ... heures."
                },
                {
                    id: "sq2",
                    question: "Tu es né quand ?",
                    sampleAnswer: "Je suis né(e) le ..."
                },
                {
                    id: "sq3",
                    question: "Quel âge a ton père ?",
                    sampleAnswer: "Mon père a ... ans."
                },
                {
                    id: "sq4",
                    question: "Comment vas-tu aujourd'hui ?",
                    sampleAnswer: "Je vais bien / Je suis content(e)..."
                },
                {
                    id: "sq5",
                    question: "Que fais-tu à l'école ?",
                    sampleAnswer: "À l'école, je ..."
                },
                {
                    id: "sq6",
                    question: "Que fais-tu après l'école ?",
                    sampleAnswer: "Après l'école, je ..."
                },
                {
                    id: "sq7",
                    question: "Comment vas-tu aujourd'hui ?",
                    sampleAnswer: "Je vais ..."
                },
                {
                    id: "sq8",
                    question: "Que fais-tu dimanche ?",
                    sampleAnswer: "Le dimanche, je ..."
                },
                {
                    id: "sq9",
                    question: "Que manges-tu au petit déjeuner ?",
                    sampleAnswer: "Au petit déjeuner, je mange ..."
                },
                {
                    id: "sq10",
                    question: "Quelle est ta couleur préférée ?",
                    sampleAnswer: "Ma couleur préférée est ..."
                }
            ]
        },
        {
            id: "speaking3",
            title: "Qu'est-ce qu'elle fait ?",
            instructions: "Regarde les images et décris ce que la fille fait.",
            points: 2,
            type: "describe",
            images: [
                {
                    id: "img1",
                    src: "girl-breakfast.jpg",
                    description: "Une fille prend son petit déjeuner",
                    sampleDescription: "La fille prend son petit déjeuner. Elle mange ... et boit ..."
                },
                {
                    id: "img2",
                    src: "girl-washing.jpg",
                    description: "Une fille se lave",
                    sampleDescription: "La fille se lave le visage."
                },
                {
                    id: "img3",
                    src: "girl-eating.jpg",
                    description: "Une fille mange à table",
                    sampleDescription: "La fille mange à table. Elle prend son déjeuner/dîner."
                },
                {
                    id: "img4",
                    src: "girl-cycling.jpg",
                    description: "Une fille fait du vélo",
                    sampleDescription: "La fille fait du vélo."
                },
                {
                    id: "img5",
                    src: "girl-studying.jpg",
                    description: "Une fille étudie",
                    sampleDescription: "La fille étudie/fait ses devoirs."
                },
                {
                    id: "img6",
                    src: "girl-sleeping.jpg",
                    description: "Une fille dort",
                    sampleDescription: "La fille dort dans son lit."
                }
            ]
        }
    ]
};

// Function to load speaking content
function loadSpeakingContent() {
    const contentArea = document.getElementById('unitContentArea');
    
    // Create container
    const container = document.createElement('div');
    container.className = 'section-container';
    
    // Add section title
    container.innerHTML = `
        <h3 class="section-title">
            <i class="fas fa-microphone me-2"></i> Expression Orale - Nói
        </h3>
        <p class="text-muted mb-4">Luyện tập kỹ năng nói tiếng Pháp thông qua các bài tập đọc và trả lời câu hỏi.</p>
    `;
    
    // Create exercises
    const exercisesContainer = document.createElement('div');
    exercisesContainer.className = 'exercises-container';
    
    // Add each exercise
    speakingData.exercises.forEach(exercise => {
        const exerciseElement = createSpeakingExercise(exercise);
        exercisesContainer.appendChild(exerciseElement);
    });
    
    container.appendChild(exercisesContainer);
    contentArea.appendChild(container);
}

// Function to create a speaking exercise
function createSpeakingExercise(exercise) {
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
        case 'textReading':
            exerciseElement.appendChild(createTextReadingExercise(exercise));
            break;
        case 'questions':
            exerciseElement.appendChild(createQuestionsExercise(exercise));
            break;
        case 'describe':
            exerciseElement.appendChild(createDescribeExercise(exercise));
            break;
    }
    
    return exerciseElement;
}

// Function to create text reading exercise
function createTextReadingExercise(exercise) {
    const container = document.createElement('div');
    
    // Add text container
    const textContainer = document.createElement('div');
    textContainer.className = 'reading-text p-4 bg-light rounded mb-3';
    textContainer.innerHTML = `<p class="mb-0">${exercise.text}</p>`;
    
    // Add buttons
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'd-flex justify-content-center gap-3 mb-3';
    
    // Listen button
    const listenButton = document.createElement('button');
    listenButton.className = 'btn btn-outline-primary speak-btn';
    listenButton.dataset.text = exercise.text;
    listenButton.innerHTML = '<i class="fas fa-volume-up me-2"></i>Écouter';
    
    // Record button (for future implementation)
    const recordButton = document.createElement('button');
    recordButton.className = 'btn btn-outline-danger';
    recordButton.innerHTML = '<i class="fas fa-microphone me-2"></i>Enregistrer';
    recordButton.disabled = true; // Disable for now
    
    buttonsContainer.appendChild(listenButton);
    buttonsContainer.appendChild(recordButton);
    
    // Add tip
    const tipContainer = document.createElement('div');
    tipContainer.className = 'alert alert-info';
    tipContainer.innerHTML = `
        <i class="fas fa-info-circle me-2"></i>
        <strong>Conseil:</strong> Écoute d'abord, puis essaie de répéter avec la même prononciation.
    `;
    
    container.appendChild(textContainer);
    container.appendChild(buttonsContainer);
    container.appendChild(tipContainer);
    
    return container;
}

// Function to create questions exercise
function createQuestionsExercise(exercise) {
    const container = document.createElement('div');
    
    // Create list of questions
    const questionsList = document.createElement('div');
    questionsList.className = 'questions-list';
    
    exercise.questions.forEach((question, index) => {
        // Show only a subset of questions (e.g., 5 random questions)
        if (index < 5) {
            const questionItem = document.createElement('div');
            questionItem.className = 'question-item card mb-3';
            
            questionItem.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${index + 1}. ${question.question}</h5>
                    
                    <div class="d-flex mb-3 gap-2">
                        <button class="btn btn-sm btn-outline-primary speak-btn" data-text="${question.question}">
                            <i class="fas fa-volume-up"></i> Écouter
                        </button>
                        
                        <button class="btn btn-sm btn-outline-danger" disabled>
                            <i class="fas fa-microphone"></i> Répondre
                        </button>
                    </div>
                    
                    <div class="text-muted small">
                        <i class="fas fa-lightbulb me-1"></i> Exemple de réponse: <em>${question.sampleAnswer}</em>
                    </div>
                </div>
            `;
            
            questionsList.appendChild(questionItem);
        }
    });
    
    // Add tip
    const tipContainer = document.createElement('div');
    tipContainer.className = 'alert alert-info mt-3';
    tipContainer.innerHTML = `
        <i class="fas fa-info-circle me-2"></i>
        <strong>Conseil:</strong> Pratique tes réponses à haute voix, ou avec un(e) camarade qui pose les questions.
    `;
    
    container.appendChild(questionsList);
    container.appendChild(tipContainer);
    
    return container;
}

// Function to create describe exercise
function createDescribeExercise(exercise) {
    const container = document.createElement('div');
    
    // Create images grid
    const imagesGrid = document.createElement('div');
    imagesGrid.className = 'row';
    
    // Randomly select 3 images
    const selectedImages = exercise.images.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    selectedImages.forEach(image => {
        const imageCol = document.createElement('div');
        imageCol.className = 'col-md-4 mb-3';
        
        imageCol.innerHTML = `
            <div class="card h-100">
                <img src="${image.src || 'placeholder.jpg'}" class="card-img-top" alt="${image.description}"
                     onerror="this.src='https://via.placeholder.com/150?text=${encodeURIComponent(image.description)}'">
                <div class="card-body">
                    <p class="text-muted small">
                        <i class="fas fa-lightbulb me-1"></i> Suggestion: <br>
                        <em>${image.sampleDescription}</em>
                    </p>
                </div>
            </div>
        `;
        
        imagesGrid.appendChild(imageCol);
    });
    
    // Add tip
    const tipContainer = document.createElement('div');
    tipContainer.className = 'alert alert-info mt-3';
    tipContainer.innerHTML = `
        <i class="fas fa-info-circle me-2"></i>
        <strong>Conseil:</strong> Décris chaque image en utilisant le vocabulaire que tu as appris.
        Essaie de faire des phrases complètes.
    `;
    
    container.appendChild(imagesGrid);
    container.appendChild(tipContainer);
    
    return container;
} 
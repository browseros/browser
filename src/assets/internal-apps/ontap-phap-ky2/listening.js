// Listening exercises data
const listeningData = {
    exercises: [
        {
            id: "listening1",
            title: "Exercice 1: Écoute et identifie",
            instructions: "Regarde les dessins. Écoute les petits dialogues et entoure comme dans l'exemple.",
            points: 4,
            type: "imageSelection",
            explanation: "Nhìn vào hình và lắng nghe các đoạn đối thoại ngắn, sau đó khoanh tròn hình thích hợp.",
            dialogues: [
                {
                    id: "dialogue1",
                    audioText: "Voici Pierre. Il mange un sandwich au fromage.",
                    correctOption: 3,
                    explanation: "Pierre đang ăn một chiếc bánh sandwich với phô mai.",
                    options: [
                        { id: 1, image: "/assets/internal-apps/ontap-phap-ky2/images/food-pasta.jpg", description: "Manger des pâtes" },
                        { id: 2, image: "/assets/internal-apps/ontap-phap-ky2/images/food-pizza.jpg", description: "Manger une pizza" },
                        { id: 3, image: "/assets/internal-apps/ontap-phap-ky2/images/food-sandwich.jpg", description: "Manger un sandwich" }
                    ]
                },
                {
                    id: "dialogue2",
                    audioText: "Les enfants jouent au football dans le parc.",
                    correctOption: 1,
                    explanation: "Những đứa trẻ đang chơi bóng đá trong công viên.",
                    options: [
                        { id: 1, image: "/assets/internal-apps/ontap-phap-ky2/images/activity-football.jpg", description: "Jouer au football" },
                        { id: 2, image: "/assets/internal-apps/ontap-phap-ky2/images/activity-cycling.jpg", description: "Faire du vélo" },
                        { id: 3, image: "/assets/internal-apps/ontap-phap-ky2/images/activity-studying.jpg", description: "Étudier" }
                    ]
                },
                {
                    id: "dialogue3",
                    audioText: "La famille regarde la télévision dans le salon.",
                    correctOption: 1,
                    explanation: "Cả gia đình đang xem ti vi trong phòng khách.",
                    options: [
                        { id: 1, image: "/assets/internal-apps/ontap-phap-ky2/images/activity-tv.jpg", description: "Regarder la télévision" },
                        { id: 2, image: "/assets/internal-apps/ontap-phap-ky2/images/activity-swimming.jpg", description: "Nager dans la piscine" },
                        { id: 3, image: "/assets/internal-apps/ontap-phap-ky2/images/activity-reading.jpg", description: "Lire un livre" }
                    ]
                },
                {
                    id: "dialogue4",
                    audioText: "Il est quinze heures. C'est l'heure de la récréation.",
                    correctOption: 3,
                    explanation: "Bây giờ là ba giờ chiều. Đó là giờ ra chơi.",
                    options: [
                        { id: 1, image: "/assets/internal-apps/ontap-phap-ky2/images/time-11h.jpg", description: "11h00" },
                        { id: 2, image: "/assets/internal-apps/ontap-phap-ky2/images/time-13h.jpg", description: "13h00" },
                        { id: 3, image: "/assets/internal-apps/ontap-phap-ky2/images/time-15h.jpg", description: "15h00" }
                    ]
                },
                {
                    id: "dialogue5",
                    audioText: "Thomas prend son petit déjeuner. Il mange un croissant et boit du jus d'orange.",
                    correctOption: 2,
                    explanation: "Thomas đang ăn sáng. Cậu ấy ăn bánh sừng bò và uống nước cam.",
                    options: [
                        { id: 1, image: "/assets/internal-apps/ontap-phap-ky2/images/meal-milk.jpg", description: "Boire du lait" },
                        { id: 2, image: "/assets/internal-apps/ontap-phap-ky2/images/meal-croissant.jpg", description: "Manger un croissant" },
                        { id: 3, image: "/assets/internal-apps/ontap-phap-ky2/images/meal-dinner.jpg", description: "Dîner" }
                    ]
                }
            ]
        },
        {
            id: "listening2",
            title: "Exercice 2: Écoute et note",
            instructions: "Regarde les dessins. Écoute les messages et note le numéro du message sous le dessin correspondant.",
            points: 3,
            type: "messageNumbering",
            messages: [
                {
                    id: "message1",
                    audioText: "Bonjour ! Je m'appelle Paul. J'ai sept ans et j'aime jouer au football.",
                    correctImage: 1,
                    image: "boy-sitting.jpg"
                },
                {
                    id: "message2",
                    audioText: "Salut ! Je m'appelle Sophie. Je fais de la gymnastique tous les samedis.",
                    correctImage: 2,
                    image: "girl-gymnastics.jpg"
                },
                {
                    id: "message3",
                    audioText: "Je m'appelle Lucas. J'adore lire des livres d'aventure.",
                    correctImage: 3,
                    image: "boy-reading.jpg"
                },
                {
                    id: "message4",
                    audioText: "Bonjour, je suis Marie. J'aime beaucoup dessiner et peindre.",
                    correctImage: 4,
                    image: "girl-drawing.jpg"
                }
            ]
        },
        {
            id: "listening3",
            title: "Exercice 3: Écoute et entoure",
            instructions: "Regarde les dessins. Écoute les dialogues et entoure les dessins correspondants.",
            points: 3,
            type: "dialogueMatching",
            dialogues: [
                {
                    id: "dialogue1",
                    audioText: "- Comment s'appelle le garçon avec une chemise noire ? - C'est Pierre. Il joue au tennis.",
                    correctOption: 1,
                    options: [
                        { id: 1, image: "boy-black-shirt.jpg", description: "Chemise noire / pantalon noir, cheveux noirs" },
                        { id: 2, image: "boy-red-shirt.jpg", description: "Chemise rouge / pantalon noir, cheveux blonds" },
                        { id: 3, image: "boy-green-shirt.jpg", description: "Chemise verte / pantalon noir, cheveux blonds" },
                        { id: 4, image: "boy-red-shirt-sport.jpg", description: "Chemise rouge / pantalon noir, cheveux blonds" }
                    ]
                },
                {
                    id: "dialogue2",
                    audioText: "- Où est ton livre ? - Il est dans ma chambre. La chambre avec l'armoire rouge et le lit jaune.",
                    correctOption: 3,
                    options: [
                        { id: 1, image: "room-red-yellow.jpg", description: "Armoire: rouge / lit : jaune" },
                        { id: 2, image: "room-yellow-yellow.jpg", description: "Armoire et lit : jaune" },
                        { id: 3, image: "room-red-yellow-door.jpg", description: "Armoire / lit : rouge" },
                        { id: 4, image: "room-red-yellow-full.jpg", description: "Armoire : rouge, lit : jaune" }
                    ]
                },
                {
                    id: "dialogue3",
                    audioText: "- Quel est ton animal préféré ? - J'adore les éléphants. Ils sont grands et intelligents.",
                    correctOption: 3,
                    options: [
                        { id: 1, image: "animal-giraffe.jpg", description: "Girafe" },
                        { id: 2, image: "animal-parrot.jpg", description: "Perroquet" },
                        { id: 3, image: "animal-elephant.jpg", description: "Éléphant" },
                        { id: 4, image: "animal-shark.jpg", description: "Requin" }
                    ]
                }
            ]
        }
    ]
};

// Function to load listening content
function loadListeningContent() {
    const contentArea = document.getElementById('unitContentArea');
    
    // Create container
    const container = document.createElement('div');
    container.className = 'section-container';
    
    // Add section title
    container.innerHTML = `
        <h3 class="section-title">
            <i class="fas fa-headphones me-2"></i> Compréhension Orale - Nghe Hiểu
        </h3>
        <p class="text-muted mb-4">Luyện tập các kỹ năng nghe hiểu tiếng Pháp qua các bài tập đa dạng.</p>
    `;
    
    // Create exercises
    const exercisesContainer = document.createElement('div');
    exercisesContainer.className = 'exercises-container';
    
    // Add each exercise
    listeningData.exercises.forEach(exercise => {
        const exerciseElement = createListeningExercise(exercise);
        exercisesContainer.appendChild(exerciseElement);
    });
    
    container.appendChild(exercisesContainer);
    contentArea.appendChild(container);
    
    // Add check answers button
    const checkAnswersBtn = document.createElement('button');
    checkAnswersBtn.className = 'btn btn-primary mt-4';
    checkAnswersBtn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Kiểm tra đáp án';
    checkAnswersBtn.addEventListener('click', checkListeningAnswers);
    
    // Add feedback element
    const feedbackElement = document.createElement('div');
    feedbackElement.id = 'listeningFeedback';
    feedbackElement.className = 'feedback mt-3';
    feedbackElement.style.display = 'none';
    
    contentArea.appendChild(checkAnswersBtn);
    contentArea.appendChild(feedbackElement);
}

// Function to create a listening exercise
function createListeningExercise(exercise) {
    const exerciseElement = document.createElement('div');
    exerciseElement.className = 'exercise-card mb-4';
    exerciseElement.id = exercise.id;
    
    // Add exercise header
    exerciseElement.innerHTML = `
        <h4 class="exercise-title">${exercise.title}</h4>
        <p class="exercise-instruction">${exercise.instructions}</p>
        <p class="text-muted small">${exercise.points} points</p>
    `;
    
    // Add explanation button in Vietnamese
    if (exercise.explanation) {
        const explanationButton = document.createElement('button');
        explanationButton.className = 'btn btn-sm btn-outline-info mb-3';
        explanationButton.innerHTML = '<i class="fas fa-info-circle me-1"></i> Giải thích';
        explanationButton.addEventListener('click', function() {
            alert(exercise.explanation);
        });
        exerciseElement.appendChild(explanationButton);
    }
    
    // Create content based on exercise type
    switch (exercise.type) {
        case 'imageSelection':
            exerciseElement.appendChild(createImageSelectionExercise(exercise));
            break;
        case 'messageNumbering':
            exerciseElement.appendChild(createMessageNumberingExercise(exercise));
            break;
        case 'dialogueMatching':
            exerciseElement.appendChild(createDialogueMatchingExercise(exercise));
            break;
    }
    
    return exerciseElement;
}

// Function to create image selection exercise
function createImageSelectionExercise(exercise) {
    const container = document.createElement('div');
    
    exercise.dialogues.forEach((dialogue, index) => {
        const dialogueContainer = document.createElement('div');
        dialogueContainer.className = 'dialogue-container mb-4';
        
        // Add dialogue header
        dialogueContainer.innerHTML = `
            <h5 class="mb-3">Dialogue ${index + 1}</h5>
            <div class="d-flex align-items-center mb-3">
                <button class="btn btn-sm btn-outline-primary speak-btn me-2" data-text="${dialogue.audioText}">
                    <i class="fas fa-volume-up"></i> Écouter
                </button>
                <span class="ms-2">"${dialogue.audioText}"</span>
            </div>
        `;
        
        // Add explanation button
        const explanationButton = document.createElement('button');
        explanationButton.className = 'btn btn-sm btn-outline-info mb-3';
        explanationButton.innerHTML = '<i class="fas fa-info-circle me-1"></i> Giải thích';
        explanationButton.addEventListener('click', function() {
            alert('Giải thích: ' + (dialogue.explanation || 'Nghe và chọn hình ảnh chính xác dựa trên đoạn hội thoại.'));
        });
        dialogueContainer.appendChild(explanationButton);
        
        // Create image options
        const imagesContainer = document.createElement('div');
        imagesContainer.className = 'image-options';
        
        dialogue.options.forEach(option => {
            const imageOption = document.createElement('div');
            imageOption.className = 'image-option';
            imageOption.dataset.optionId = option.id;
            imageOption.dataset.dialogueId = dialogue.id;
            
            // Use placeholders for missing images
            const imagePath = option.image || '';
            const placeholderUrl = `https://via.placeholder.com/150?text=${encodeURIComponent(option.description)}`;
            
            imageOption.innerHTML = `
                <div style="width: 150px; height: 150px; background-color: #eee; display: flex; align-items: center; justify-content: center; text-align: center; border-radius: 8px;">
                    <div>${option.id}</div>
                </div>
                <div class="mt-2 text-center">${option.description}</div>
            `;
            
            // Add click handler
            imageOption.addEventListener('click', function() {
                // Remove 'selected' class from all siblings
                const siblings = this.parentElement.querySelectorAll('.image-option');
                siblings.forEach(sib => sib.classList.remove('selected'));
                
                // Add 'selected' class to this option
                this.classList.add('selected');
            });
            
            imagesContainer.appendChild(imageOption);
        });
        
        dialogueContainer.appendChild(imagesContainer);
        container.appendChild(dialogueContainer);
    });
    
    return container;
}

// Function to create message numbering exercise
function createMessageNumberingExercise(exercise) {
    const container = document.createElement('div');
    
    // Add audio buttons for messages
    const audioContainer = document.createElement('div');
    audioContainer.className = 'audio-container mb-4';
    
    exercise.messages.forEach((message, index) => {
        const audioButton = document.createElement('button');
        audioButton.className = 'btn btn-sm btn-outline-primary me-2 mb-2 speak-btn';
        audioButton.dataset.text = message.audioText;
        audioButton.innerHTML = `<i class="fas fa-volume-up"></i> Message ${index + 1}`;
        
        audioContainer.appendChild(audioButton);
    });
    
    container.appendChild(audioContainer);
    
    // Create image options
    const imagesContainer = document.createElement('div');
    imagesContainer.className = 'image-options';
    
    exercise.messages.forEach((message, index) => {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'message-image-container text-center';
        
        // Add image
        imageContainer.innerHTML = `
            <div class="image-option mb-2">
                <img src="${message.image || 'placeholder.jpg'}" alt="Message Image" 
                     onerror="this.src='https://via.placeholder.com/150?text=Image+${index + 1}'">
            </div>
            <div class="input-group input-group-sm" style="max-width: 120px; margin: 0 auto;">
                <span class="input-group-text">Message</span>
                <input type="number" class="form-control message-number-input" 
                       min="1" max="${exercise.messages.length}" 
                       data-message-id="${message.id}" data-correct="${message.correctImage}">
            </div>
        `;
        
        imagesContainer.appendChild(imageContainer);
    });
    
    container.appendChild(imagesContainer);
    
    return container;
}

// Function to create dialogue matching exercise
function createDialogueMatchingExercise(exercise) {
    const container = document.createElement('div');
    
    exercise.dialogues.forEach((dialogue, index) => {
        const dialogueContainer = document.createElement('div');
        dialogueContainer.className = 'dialogue-container mb-4';
        
        // Add dialogue header
        dialogueContainer.innerHTML = `
            <h5 class="mb-3">Dialogue ${index + 1}</h5>
            <div class="d-flex align-items-center mb-3">
                <button class="btn btn-sm btn-outline-primary speak-btn me-2" data-text="${dialogue.audioText}">
                    <i class="fas fa-volume-up"></i> Écouter
                </button>
                <p class="text-muted small mb-0 font-italic">"${dialogue.audioText}"</p>
            </div>
        `;
        
        // Create image options
        const imagesContainer = document.createElement('div');
        imagesContainer.className = 'image-options';
        
        dialogue.options.forEach(option => {
            const imageOption = document.createElement('div');
            imageOption.className = 'image-option';
            imageOption.dataset.optionId = option.id;
            imageOption.dataset.dialogueId = dialogue.id;
            
            // Add image (with placeholder if image doesn't exist)
            imageOption.innerHTML = `
                <img src="${option.image || 'placeholder.jpg'}" alt="${option.description}" 
                     onerror="this.src='https://via.placeholder.com/150?text=${encodeURIComponent(option.description)}'">
                <div class="small text-center mt-1">${option.description}</div>
            `;
            
            // Add click event to select image
            imageOption.addEventListener('click', function() {
                // Remove selected class from all options in this dialogue
                imagesContainer.querySelectorAll('.image-option').forEach(el => {
                    el.classList.remove('selected');
                });
                
                // Add selected class to this option
                this.classList.add('selected');
            });
            
            imagesContainer.appendChild(imageOption);
        });
        
        dialogueContainer.appendChild(imagesContainer);
        container.appendChild(dialogueContainer);
    });
    
    return container;
}

// Function to check listening exercise answers
function checkListeningAnswers() {
    // Get all exercises
    const exercises = listeningData.exercises;
    let totalPoints = 0;
    let earnedPoints = 0;
    
    // Check each exercise
    exercises.forEach(exercise => {
        totalPoints += exercise.points;
        
        switch (exercise.type) {
            case 'imageSelection':
            case 'dialogueMatching':
                // Check image selection answers
                exercise.dialogues.forEach(dialogue => {
                    const selectedOption = document.querySelector(`.image-option.selected[data-dialogue-id="${dialogue.id}"]`);
                    
                    if (selectedOption && parseInt(selectedOption.dataset.optionId) === dialogue.correctOption) {
                        earnedPoints += exercise.points / exercise.dialogues.length;
                        selectedOption.style.borderColor = '#A0D468';
                    } else if (selectedOption) {
                        selectedOption.style.borderColor = '#ED5565';
                        
                        // Highlight correct option
                        document.querySelectorAll(`.image-option[data-dialogue-id="${dialogue.id}"]`).forEach(option => {
                            if (parseInt(option.dataset.optionId) === dialogue.correctOption) {
                                option.style.borderColor = '#A0D468';
                                option.style.borderStyle = 'dashed';
                            }
                        });
                    }
                });
                break;
                
            case 'messageNumbering':
                // Check message numbering answers
                const inputs = document.querySelectorAll('.message-number-input');
                
                inputs.forEach(input => {
                    const messageId = input.dataset.messageId;
                    const message = exercise.messages.find(m => m.id === messageId);
                    
                    if (message && parseInt(input.value) === message.correctImage) {
                        earnedPoints += exercise.points / exercise.messages.length;
                        input.classList.add('is-valid');
                    } else if (input.value) {
                        input.classList.add('is-invalid');
                        // Add correct answer hint
                        const feedbackElement = document.createElement('div');
                        feedbackElement.className = 'invalid-feedback';
                        feedbackElement.textContent = `Correct: Message ${message.correctImage}`;
                        input.parentNode.appendChild(feedbackElement);
                    }
                });
                break;
        }
    });
    
    // Round to 1 decimal place
    earnedPoints = Math.round(earnedPoints * 10) / 10;
    
    // Display feedback
    const feedbackElement = document.getElementById('listeningFeedback');
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
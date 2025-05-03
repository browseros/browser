// Listening exercises data
const listeningData = {
    exercises: [
        {
            id: "listening1",
            title: "Exercice 1: Écoute et identifie",
            instructions: "Regarde les dessins. Écoute les petits dialogues et entoure comme dans l'exemple.",
            points: 4,
            type: "imageSelection",
            dialogues: [
                {
                    id: "dialogue1",
                    audioText: "Voici Pierre. Il mange un sandwich au fromage.",
                    correctOption: 3,
                    explanation: "Pierre đang ăn một chiếc bánh sandwich với phô mai.",
                    options: [
                        { id: 1, description: "Manger des pâtes", imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=150&h=150&fit=crop" },
                        { id: 2, description: "Manger une pizza", imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150&h=150&fit=crop" },
                        { id: 3, description: "Manger un sandwich", imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=150&h=150&fit=crop" }
                    ]
                },
                {
                    id: "dialogue2",
                    audioText: "Les enfants jouent au football dans le parc.",
                    correctOption: 3,
                    explanation: "Những đứa trẻ đang chơi bóng đá trong công viên.",
                    options: [
                        { id: 1, description: "Jouer au football", imageUrl: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=150&h=150&fit=crop" },
                        { id: 2, description: "Faire du vélo", imageUrl: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=150&h=150&fit=crop" },
                        { id: 3, description: "Étudier", imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=150&h=150&fit=crop" }
                    ]
                },
                {
                    id: "dialogue3",
                    audioText: "La famille regarde la télévision dans le salon.",
                    correctOption: 3,
                    explanation: "Cả gia đình đang xem ti vi trong phòng khách.",
                    options: [
                        { id: 1, description: "Regarder la télévision", imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=150&h=150&fit=crop" },
                        { id: 2, description: "Nager dans la piscine", imageUrl: "https://images.unsplash.com/photo-1560090995-01632a28895b?w=150&h=150&fit=crop" },
                        { id: 3, description: "Lire un livre", imageUrl: "https://images.unsplash.com/photo-1512045482940-f37f5216f639?w=150&h=150&fit=crop" }
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
                    explanation: "Paul có 7 tuổi và thích chơi bóng đá.",
                    imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=150&h=150&fit=crop"
                },
                {
                    id: "message2",
                    audioText: "Salut ! Je m'appelle Sophie. Je fais de la gymnastique tous les samedis.",
                    correctImage: 2,
                    explanation: "Sophie tập thể dục dụng cụ vào mỗi thứ bảy.",
                    imageUrl: "https://images.unsplash.com/photo-1609067643311-a60c0466801b?w=150&h=150&fit=crop"
                },
                {
                    id: "message3",
                    audioText: "Je m'appelle Lucas. J'adore lire des livres d'aventure.",
                    correctImage: 3,
                    explanation: "Lucas rất thích đọc sách phiêu lưu.",
                    imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=150&h=150&fit=crop"
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
                    correctOption: 3,
                    explanation: "Cậu bé mặc áo sơ mi đen tên là Pierre. Cậu ấy chơi tennis.",
                    options: [
                        { id: 1, description: "Chemise noire / pantalon noir, cheveux noirs", imageUrl: "https://images.unsplash.com/photo-1617957743096-28c8d1fcda6f?w=150&h=150&fit=crop" },
                        { id: 2, description: "Chemise rouge / pantalon noir, cheveux blonds", imageUrl: "https://images.unsplash.com/photo-1519238359922-989429d91fdd?w=150&h=150&fit=crop" },
                        { id: 3, description: "Chemise verte / pantalon noir, cheveux blonds", imageUrl: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=150&h=150&fit=crop" }
                    ]
                },
                {
                    id: "dialogue2",
                    audioText: "- Où est ton livre ? - Il est dans ma chambre. La chambre avec l'armoire rouge et le lit jaune.",
                    correctOption: 3,
                    explanation: "Quyển sách ở trong phòng ngủ với tủ quần áo màu đỏ và giường màu vàng.",
                    options: [
                        { id: 1, description: "Armoire: rouge / lit : jaune", imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=150&h=150&fit=crop" },
                        { id: 2, description: "Armoire et lit : jaune", imageUrl: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=150&h=150&fit=crop" },
                        { id: 3, description: "Armoire / lit : rouge", imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=150&h=150&fit=crop" }
                    ]
                },
                {
                    id: "dialogue3",
                    audioText: "- Quel est ton animal préféré ? - J'adore les éléphants. Ils sont grands et intelligents.",
                    correctOption: 3,
                    explanation: "Con vật yêu thích là voi. Chúng to lớn và thông minh.",
                    options: [
                        { id: 1, description: "Girafe", imageUrl: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=150&h=150&fit=crop" },
                        { id: 2, description: "Perroquet", imageUrl: "https://images.unsplash.com/photo-1501706362058-c7e7e7447652?w=150&h=150&fit=crop" },
                        { id: 3, description: "Éléphant", imageUrl: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=150&h=150&fit=crop" },
                        { id: 4, description: "Requin", imageUrl: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=150&h=150&fit=crop" }
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

    // Initialize speech synthesis and add event listeners for all speak buttons
    setTimeout(() => {
        const speakButtons = document.querySelectorAll('.speak-btn');
        speakButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const textToSpeak = this.dataset.text;
                speakText(textToSpeak);
            });
        });
    }, 100);
}

// Function to speak text using the Web Speech API
function speakText(text) {
    // Check if speech synthesis is supported
    if ('speechSynthesis' in window) {
        // Create a new speech synthesis utterance
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Set language to French
        utterance.lang = 'fr-FR';
        
        // Optional: adjust voice parameters
        utterance.rate = 0.6; // Giảm tốc độ đọc xuống rất chậm cho trẻ em lớp 2
        utterance.pitch = 1;
        
        // Get French voice if available
        window.speechSynthesis.cancel(); // Cancel any ongoing speech
        
        // Try to get a French voice
        const voices = window.speechSynthesis.getVoices();
        const frenchVoice = voices.find(voice => voice.lang.includes('fr'));
        if (frenchVoice) {
            utterance.voice = frenchVoice;
        }
        
        // Speak the text
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Trình duyệt của bạn không hỗ trợ phát âm thanh. Vui lòng thử trên trình duyệt khác.');
    }
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
        
        // Add dialogue header without showing the text
        dialogueContainer.innerHTML = `
            <h5 class="mb-3">Dialogue ${index + 1}</h5>
            <div class="d-flex align-items-center mb-3 gap-2">
                <button class="btn btn-sm btn-outline-primary speak-btn" data-text="${dialogue.audioText}">
                    <i class="fas fa-volume-up"></i> Écouter
                </button>
                <button class="btn btn-sm btn-outline-secondary show-text-btn">
                    <i class="fas fa-eye"></i> Xem văn bản
                </button>
                <button class="btn btn-sm btn-outline-info explanation-btn">
                    <i class="fas fa-info-circle"></i> Giải thích
                </button>
            </div>
            <div class="dialogue-text mb-3" style="display: none;">
                <div class="alert alert-secondary">"${dialogue.audioText}"</div>
            </div>
        `;
        
        // Get the show text button and add click handler
        const showTextBtn = dialogueContainer.querySelector('.show-text-btn');
        const textElement = dialogueContainer.querySelector('.dialogue-text');
        
        showTextBtn.addEventListener('click', function() {
            if (textElement.style.display === 'none') {
                textElement.style.display = 'block';
                this.innerHTML = '<i class="fas fa-eye-slash"></i> Ẩn văn bản';
            } else {
                textElement.style.display = 'none';
                this.innerHTML = '<i class="fas fa-eye"></i> Xem văn bản';
            }
        });
        
        // Add explanation button click handler
        const explanationBtn = dialogueContainer.querySelector('.explanation-btn');
        explanationBtn.addEventListener('click', function() {
            alert('Giải thích: ' + (dialogue.explanation || 'Nghe và chọn hình ảnh chính xác dựa trên đoạn hội thoại.'));
        });
        
        // Create image options
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'd-flex justify-content-center gap-4 mb-4 flex-wrap';
        
        dialogue.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option-box text-center';
            optionElement.dataset.optionId = option.id;
            optionElement.dataset.dialogueId = dialogue.id;
            optionElement.style.cssText = 'cursor: pointer; width: 160px; padding: 10px; border: 2px solid #ddd; border-radius: 8px;';
            
            // Use actual images from Unsplash
            optionElement.innerHTML = `
                <div style="margin-bottom: 10px;">
                    <img src="${option.imageUrl}" alt="${option.description}" 
                         style="width: 120px; height: 120px; object-fit: cover; border-radius: 8px;"
                         onerror="this.onerror=null; this.src='https://via.placeholder.com/120?text=${encodeURIComponent(option.id)}'; this.style.background='#f0f0f0';">
                </div>
                <div style="font-size: 14px;">${option.description}</div>
            `;
            
            // Add click handler
            optionElement.addEventListener('click', function() {
                // Remove 'selected' class from all siblings
                const siblings = this.parentElement.querySelectorAll('.option-box');
                siblings.forEach(sib => {
                    sib.style.backgroundColor = '';
                    sib.style.borderColor = '#ddd';
                    sib.style.boxShadow = '';
                });
                
                // Add 'selected' styling to this option
                this.style.backgroundColor = '#e6f2ff';
                this.style.borderColor = '#5D9CEC';
                this.style.boxShadow = '0 0 5px rgba(93, 156, 236, 0.5)';

                // Thêm data attribute để dễ dàng xác định lựa chọn đã chọn
                this.setAttribute('data-selected', 'true');
                siblings.forEach(sib => sib.removeAttribute('data-selected'));
            });
            
            optionsContainer.appendChild(optionElement);
        });
        
        dialogueContainer.appendChild(optionsContainer);
        container.appendChild(dialogueContainer);
    });
    
    return container;
}

// Function to create message numbering exercise
function createMessageNumberingExercise(exercise) {
    const container = document.createElement('div');
    
    // Create message containers
    const messagesContainer = document.createElement('div');
    messagesContainer.className = 'messages-container mb-4';
    
    // Add messages
    exercise.messages.forEach((message, index) => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message-item mb-3 p-3 border rounded';
        
        // Add message content without showing the text
        messageElement.innerHTML = `
            <div class="d-flex align-items-center mb-2 gap-2">
                <strong class="me-2">Message ${index + 1}:</strong>
                <button class="btn btn-sm btn-outline-primary speak-btn" data-text="${message.audioText}">
                    <i class="fas fa-volume-up"></i> Écouter
                </button>
                <button class="btn btn-sm btn-outline-secondary show-text-btn">
                    <i class="fas fa-eye"></i> Xem văn bản
                </button>
                <button class="btn btn-sm btn-outline-info explanation-btn">
                    <i class="fas fa-info-circle"></i> Giải thích
                </button>
            </div>
            <div class="message-text mb-2" style="display: none;">
                <div class="alert alert-secondary">"${message.audioText}"</div>
            </div>
        `;
        
        messagesContainer.appendChild(messageElement);
    });
    
    // Add event listeners for show text buttons after appending to DOM
    setTimeout(() => {
        const showTextBtns = messagesContainer.querySelectorAll('.show-text-btn');
        showTextBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const textElement = this.closest('.message-item').querySelector('.message-text');
                if (textElement.style.display === 'none') {
                    textElement.style.display = 'block';
                    this.innerHTML = '<i class="fas fa-eye-slash"></i> Ẩn văn bản';
                } else {
                    textElement.style.display = 'none';
                    this.innerHTML = '<i class="fas fa-eye"></i> Xem văn bản';
                }
            });
        });
        
        const explanationBtns = messagesContainer.querySelectorAll('.explanation-btn');
        explanationBtns.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                alert('Giải thích: ' + (exercise.messages[index].explanation || 'Nghe nội dung tin nhắn và chọn hình thích hợp.'));
            });
        });
    }, 0);
    
    container.appendChild(messagesContainer);
    
    // Create image containers
    const imagesContainer = document.createElement('div');
    imagesContainer.className = 'row mt-4';
    
    // Add images
    exercise.messages.forEach((message, i) => {
        const imageCol = document.createElement('div');
        imageCol.className = 'col-md-4 mb-3';
        
        imageCol.innerHTML = `
            <div class="image-container p-3 border rounded text-center">
                <div>
                    <img src="${message.imageUrl}" alt="Image ${i+1}" 
                         style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px;"
                         onerror="this.onerror=null; this.src='https://via.placeholder.com/150?text=Hình ${i+1}'; this.style.background='#f0f0f0';">
                </div>
                <div class="mt-3">
                    <select class="form-select message-select" data-image-id="${i+1}">
                        <option value="">Chọn tin nhắn...</option>
                        ${exercise.messages.map((m, idx) => `<option value="${idx + 1}">Message ${idx + 1}</option>`).join('')}
                    </select>
                </div>
            </div>
        `;
        
        imagesContainer.appendChild(imageCol);
    });
    
    container.appendChild(imagesContainer);
    
    return container;
}

// Function to create dialogue matching exercise
function createDialogueMatchingExercise(exercise) {
    const container = document.createElement('div');
    
    exercise.dialogues.forEach((dialogue, index) => {
        const dialogueContainer = document.createElement('div');
        dialogueContainer.className = 'dialogue-container mb-5 pb-3 border-bottom';
        
        // Add dialogue header without showing the text directly
        dialogueContainer.innerHTML = `
            <h5 class="mb-3">Dialogue ${index + 1}</h5>
            <div class="d-flex align-items-center mb-3 gap-2">
                <button class="btn btn-sm btn-outline-primary speak-btn" data-text="${dialogue.audioText}">
                    <i class="fas fa-volume-up"></i> Écouter
                </button>
                <button class="btn btn-sm btn-outline-secondary show-text-btn">
                    <i class="fas fa-eye"></i> Xem văn bản
                </button>
                <button class="btn btn-sm btn-outline-info explanation-btn">
                    <i class="fas fa-info-circle"></i> Giải thích
                </button>
            </div>
            <div class="dialogue-text mb-3" style="display: none;">
                <div class="alert alert-secondary">"${dialogue.audioText}"</div>
            </div>
        `;
        
        // Add event listeners to buttons
        const showTextBtn = dialogueContainer.querySelector('.show-text-btn');
        const textElement = dialogueContainer.querySelector('.dialogue-text');
        
        showTextBtn.addEventListener('click', function() {
            if (textElement.style.display === 'none') {
                textElement.style.display = 'block';
                this.innerHTML = '<i class="fas fa-eye-slash"></i> Ẩn văn bản';
            } else {
                textElement.style.display = 'none';
                this.innerHTML = '<i class="fas fa-eye"></i> Xem văn bản';
            }
        });
        
        const explanationBtn = dialogueContainer.querySelector('.explanation-btn');
        explanationBtn.addEventListener('click', function() {
            alert('Giải thích: ' + (dialogue.explanation || 'Nghe đoạn hội thoại và chọn hình thích hợp.'));
        });
        
        // Create option boxes
        const optionsRow = document.createElement('div');
        optionsRow.className = 'row mt-3';
        
        dialogue.options.forEach(option => {
            const optionCol = document.createElement('div');
            optionCol.className = 'col-md-3 mb-3';
            
            const optionElement = document.createElement('div');
            optionElement.className = 'option-box text-center p-3 border rounded';
            optionElement.dataset.optionId = option.id;
            optionElement.dataset.dialogueId = dialogue.id;
            optionElement.style.cursor = 'pointer';
            
            optionElement.innerHTML = `
                <div style="margin-bottom: 10px;">
                    <img src="${option.imageUrl}" alt="${option.description}" 
                         style="width: 120px; height: 120px; object-fit: cover; border-radius: 8px;"
                         onerror="this.onerror=null; this.src='https://via.placeholder.com/120?text=${encodeURIComponent(option.id)}'; this.style.background='#f0f0f0';">
                </div>
                <small>${option.description}</small>
            `;
            
            // Add click handler
            optionElement.addEventListener('click', function() {
                // Remove 'selected' class from all siblings
                const siblings = optionsRow.querySelectorAll('.option-box');
                siblings.forEach(sib => {
                    sib.style.backgroundColor = '';
                    sib.style.borderColor = '#dee2e6';
                });
                
                // Add 'selected' styling to this option
                this.style.backgroundColor = '#e6f2ff';
                this.style.borderColor = '#5D9CEC';
            });
            
            optionCol.appendChild(optionElement);
            optionsRow.appendChild(optionCol);
        });
        
        dialogueContainer.appendChild(optionsRow);
        container.appendChild(dialogueContainer);
    });
    
    return container;
}

// Function to check listening answers
function checkListeningAnswers() {
    const feedbackElement = document.getElementById('listeningFeedback');
    
    // Initialize score tracking
    let totalPoints = 0;
    let earnedPoints = 0;
    let correctAnswers = 0;
    let totalQuestions = 0;
    
    // Check each exercise
    listeningData.exercises.forEach(exercise => {
        totalPoints += exercise.points;
        
        switch (exercise.type) {
            case 'imageSelection':
                const dialogueResults = checkImageSelectionAnswers(exercise);
                earnedPoints += dialogueResults.earnedPoints;
                correctAnswers += dialogueResults.correctCount;
                totalQuestions += dialogueResults.totalCount;
                break;
                
            case 'messageNumbering':
                const messageResults = checkMessageNumberingAnswers(exercise);
                earnedPoints += messageResults.earnedPoints;
                correctAnswers += messageResults.correctCount;
                totalQuestions += messageResults.totalCount;
                break;
                
            case 'dialogueMatching':
                const matchingResults = checkDialogueMatchingAnswers(exercise);
                earnedPoints += matchingResults.earnedPoints;
                correctAnswers += matchingResults.correctCount;
                totalQuestions += matchingResults.totalCount;
                break;
        }
    });
    
    // Round earned points to 1 decimal place
    earnedPoints = Math.round(earnedPoints * 10) / 10;
    
    // Create feedback content
    const feedback = {
        score: earnedPoints,
        total: totalPoints,
        percentage: Math.round((earnedPoints / totalPoints) * 100)
    };
    
    // Display feedback
    displayFeedback(feedbackElement, feedback);
    feedbackElement.style.display = 'block';
    
    // Scroll to feedback
    feedbackElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Helper function to check image selection answers
function checkImageSelectionAnswers(exercise) {
    let correctCount = 0;
    let totalCount = exercise.dialogues.length;
    
    exercise.dialogues.forEach(dialogue => {
        const selectedOption = document.querySelector(`.image-option.selected[data-dialogue-id="${dialogue.id}"], .option-box[data-dialogue-id="${dialogue.id}"][style*="background-color"]`);
        
        if (selectedOption && parseInt(selectedOption.dataset.optionId) === dialogue.correctOption) {
            correctCount++;
            selectedOption.style.backgroundColor = '#d4edda';
            selectedOption.style.borderColor = '#28a745';
        } else if (selectedOption) {
            selectedOption.style.backgroundColor = '#f8d7da';
            selectedOption.style.borderColor = '#dc3545';
            
            // Highlight correct answer
            const correctOption = document.querySelector(`.image-option[data-dialogue-id="${dialogue.id}"][data-option-id="${dialogue.correctOption}"], .option-box[data-dialogue-id="${dialogue.id}"][data-option-id="${dialogue.correctOption}"]`);
            if (correctOption) {
                correctOption.style.backgroundColor = '#d4edda';
                correctOption.style.borderColor = '#28a745';
            }
        }
    });
    
    // Calculate points for this exercise
    const earnedPoints = (correctCount / totalCount) * exercise.points;
    
    return {
        correctCount,
        totalCount,
        earnedPoints
    };
}

// Helper function to check message numbering answers
function checkMessageNumberingAnswers(exercise) {
    let correctCount = 0;
    let totalCount = exercise.messages.length;
    
    const selects = document.querySelectorAll('.message-select');
    selects.forEach(select => {
        const imageId = parseInt(select.dataset.imageId);
        const selectedMessageId = parseInt(select.value);
        
        const message = exercise.messages.find(m => selectedMessageId === m.id);
        const correctMessageId = exercise.messages.findIndex(m => m.correctImage === imageId) + 1;
        
        if (selectedMessageId === correctMessageId) {
            correctCount++;
            select.parentElement.parentElement.style.backgroundColor = '#d4edda';
        } else if (selectedMessageId) {
            select.parentElement.parentElement.style.backgroundColor = '#f8d7da';
            select.insertAdjacentHTML('afterend', `<div class="text-success mt-2">Đáp án đúng: Message ${correctMessageId}</div>`);
        }
    });
    
    // Calculate points for this exercise
    const earnedPoints = (correctCount / totalCount) * exercise.points;
    
    return {
        correctCount,
        totalCount,
        earnedPoints
    };
}

// Helper function to check dialogue matching answers
function checkDialogueMatchingAnswers(exercise) {
    let correctCount = 0;
    let totalCount = exercise.dialogues.length;
    
    exercise.dialogues.forEach(dialogue => {
        const selectedOption = document.querySelector(`.option-box[data-dialogue-id="${dialogue.id}"][style*="background-color"]`);
        
        if (selectedOption && parseInt(selectedOption.dataset.optionId) === dialogue.correctOption) {
            correctCount++;
            selectedOption.style.backgroundColor = '#d4edda';
            selectedOption.style.borderColor = '#28a745';
        } else if (selectedOption) {
            selectedOption.style.backgroundColor = '#f8d7da';
            selectedOption.style.borderColor = '#dc3545';
            
            // Highlight correct answer
            const correctOption = document.querySelector(`.option-box[data-dialogue-id="${dialogue.id}"][data-option-id="${dialogue.correctOption}"]`);
            if (correctOption) {
                correctOption.style.backgroundColor = '#d4edda';
                correctOption.style.borderColor = '#28a745';
            }
        }
    });
    
    // Calculate points for this exercise
    const earnedPoints = (correctCount / totalCount) * exercise.points;
    
    return {
        correctCount,
        totalCount,
        earnedPoints
    };
} 
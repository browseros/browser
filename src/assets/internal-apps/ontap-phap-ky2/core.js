// Data structure for the app content
const appData = {
    units: [
        {
            id: 1,
            title: "Compréhension Orale",
            description: "Nghe hiểu (10 điểm)",
            icon: "fas fa-headphones",
            color: "#5D9CEC",
            type: "listening"
        },
        {
            id: 2,
            title: "Compréhension des Écrits",
            description: "Đọc hiểu (10 điểm)",
            icon: "fas fa-book-open",
            color: "#FC6E51",
            type: "reading"
        },
        {
            id: 3,
            title: "Expression Écrite",
            description: "Viết (10 điểm)",
            icon: "fas fa-pen",
            color: "#FFCE54",
            type: "writing"
        },
        {
            id: 4,
            title: "Connaissances Linguistiques",
            description: "Kiến thức ngôn ngữ (10 điểm)",
            icon: "fas fa-language",
            color: "#A0D468",
            type: "grammar"
        },
        {
            id: 5,
            title: "Expression Orale",
            description: "Nói (10 điểm)",
            icon: "fas fa-microphone",
            color: "#ED5565",
            type: "speaking"
        },
        {
            id: 6,
            title: "Révision Complète",
            description: "Ôn tập tổng hợp",
            icon: "fas fa-clipboard-check",
            color: "#AC92EC",
            type: "revision"
        }
    ]
};

// Speech synthesis setup
let speechSynthesis = window.speechSynthesis;
let frenchVoice = null;

// Initialize the app
function initializeApp() {
    // Load French voice for speech synthesis
    loadFrenchVoice();
    
    // Display the unit grid on the main page
    displayUnitGrid();
    
    // Add event listeners
    setupEventListeners();
}

// Function to load French voice for speech synthesis
function loadFrenchVoice() {
    if (speechSynthesis) {
        speechSynthesis.onvoiceschanged = () => {
            const voices = speechSynthesis.getVoices();
            frenchVoice = voices.find(voice => voice.lang.includes('fr'));
            if (!frenchVoice) {
                // Fallback to any available voice if French is not available
                frenchVoice = voices[0];
            }
        };
        
        // Trigger voice loading
        speechSynthesis.getVoices();
    }
}

// Function to display the unit grid
function displayUnitGrid() {
    const mainContent = document.getElementById('mainContent');
    
    // Create grid container
    const unitGrid = document.createElement('div');
    unitGrid.className = 'unit-grid';
    
    // Add unit cards
    appData.units.forEach(unit => {
        const unitCard = createUnitCard(unit);
        unitGrid.appendChild(unitCard);
    });
    
    // Clear and add the grid to the main content
    mainContent.innerHTML = '';
    mainContent.appendChild(unitGrid);
    
    // Show main content, hide unit content
    mainContent.style.display = 'block';
    document.getElementById('unitContent').style.display = 'none';
}

// Function to create a unit card
function createUnitCard(unit) {
    const unitCard = document.createElement('div');
    unitCard.className = 'unit-card';
    unitCard.style.borderTop = `4px solid ${unit.color}`;
    
    // Add unit content
    unitCard.innerHTML = `
        <div class="text-center mb-3">
            <i class="${unit.icon}" style="font-size: 2.5rem; color: ${unit.color};"></i>
        </div>
        <h3>${unit.title}</h3>
        <p>${unit.description}</p>
    `;
    
    // Add click event to show unit content
    unitCard.addEventListener('click', () => showUnit(unit));
    
    return unitCard;
}

// Function to show a specific unit
function showUnit(unit) {
    // Hide main content, show unit content
    document.getElementById('mainContent').style.display = 'none';
    const unitContent = document.getElementById('unitContent');
    unitContent.style.display = 'block';
    
    // Create unit header
    unitContent.innerHTML = `
        <div class="unit-header mb-4">
            <button class="btn btn-secondary mb-3" onclick="displayUnitGrid()">
                <i class="fas fa-arrow-left"></i> Quay lại
            </button>
            <h2 class="text-center" style="color: ${unit.color};">
                <i class="${unit.icon}"></i> ${unit.title}
            </h2>
            <p class="text-center">${unit.description}</p>
        </div>
        <div id="unitContentArea"></div>
    `;
    
    // Load unit content based on type
    switch (unit.type) {
        case 'listening':
            loadListeningContent();
            break;
        case 'reading':
            loadReadingContent();
            break;
        case 'writing':
            loadWritingContent();
            break;
        case 'grammar':
            loadGrammarContent();
            break;
        case 'speaking':
            loadSpeakingContent();
            break;
        case 'revision':
            loadRevisionContent();
            break;
        default:
            unitContent.innerHTML += '<div class="alert alert-warning">Nội dung đang được cập nhật...</div>';
    }
}

// Function to speak French text
function speakFrench(text) {
    if (speechSynthesis && frenchVoice) {
        // Stop any current speech
        speechSynthesis.cancel();
        
        // Create a new utterance
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = frenchVoice;
        utterance.rate = 0.9; // Slightly slower for learners
        utterance.pitch = 1;
        utterance.lang = 'fr-FR';
        
        // Speak the text
        speechSynthesis.speak(utterance);
    } else {
        console.warn('Speech synthesis not supported or French voice not loaded');
    }
}

// Function to setup event listeners
function setupEventListeners() {
    // Global event listeners can be added here
    document.addEventListener('click', function(event) {
        // Handle speak button clicks
        if (event.target.classList.contains('speak-btn') || 
            event.target.parentElement.classList.contains('speak-btn')) {
            
            const textToSpeak = event.target.dataset.text || 
                               event.target.parentElement.dataset.text;
            
            if (textToSpeak) {
                speakFrench(textToSpeak);
            }
        }
    });
}

// Check user's answers and provide feedback
function checkAnswers(questionType, userAnswers, correctAnswers) {
    let score = 0;
    const results = [];
    
    // Compare user answers with correct answers
    for (let i = 0; i < correctAnswers.length; i++) {
        const isCorrect = userAnswers[i] === correctAnswers[i];
        results.push({
            questionNumber: i + 1,
            userAnswer: userAnswers[i],
            correctAnswer: correctAnswers[i],
            isCorrect: isCorrect
        });
        
        if (isCorrect) {
            score++;
        }
    }
    
    // Calculate percentage score
    const percentage = Math.round((score / correctAnswers.length) * 100);
    
    return {
        score: score,
        total: correctAnswers.length,
        percentage: percentage,
        results: results
    };
}

// Function to display feedback
function displayFeedback(feedbackElement, feedback) {
    let message = '';
    let feedbackClass = '';
    
    if (feedback.percentage >= 80) {
        message = `Tuyệt vời! Bạn đạt ${feedback.score}/${feedback.total} điểm (${feedback.percentage}%)`;
        feedbackClass = 'success';
    } else if (feedback.percentage >= 60) {
        message = `Khá tốt! Bạn đạt ${feedback.score}/${feedback.total} điểm (${feedback.percentage}%)`;
        feedbackClass = 'success';
    } else {
        message = `Cần cố gắng thêm! Bạn đạt ${feedback.score}/${feedback.total} điểm (${feedback.percentage}%)`;
        feedbackClass = 'error';
    }
    
    feedbackElement.innerHTML = message;
    feedbackElement.className = `feedback ${feedbackClass}`;
}

// Function to shuffle an array (for randomizing options)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
} 
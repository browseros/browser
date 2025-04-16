const units = [
    {
        id: 1,
        title: "Introduction to IELTS - Giới thiệu về IELTS",
        sections: {
            listening: {
                title: "Listening Skills - Kỹ năng Nghe",
                content: [
                    {
                        type: "introduction",
                        text: "In IELTS Listening, you will hear different types of conversations and talks.",
                        translation: "Trong phần Nghe IELTS, bạn sẽ nghe các cuộc hội thoại và bài nói khác nhau."
                    },
                    {
                        type: "practice",
                        audioUrl: "/assets/internal-apps/ielts-for-kids/audio/unit1/conversation1.mp3",
                        transcript: "Boy: Hi, my name is Tom. I'm from Sydney, Australia.\nTeacher: Welcome Tom! How old are you?\nBoy: I'm 12 years old.",
                        questions: [
                            {
                                question: "What is the boy's name?",
                                translation: "Tên của cậu bé là gì?",
                                options: ["Tom", "Jerry", "Mike", "Peter"],
                                correct: 0
                            },
                            {
                                question: "Where is he from?",
                                translation: "Cậu ấy đến từ đâu?",
                                options: ["London", "New York", "Sydney", "Paris"],
                                correct: 2
                            }
                        ]
                    }
                ]
            },
            reading: {
                title: "Reading Skills - Kỹ năng Đọc",
                content: [
                    {
                        type: "passage",
                        text: "My School Day\n\nI wake up at 6:30 every morning. I have breakfast with my family at 7:00. I go to school by bus at 7:30. My first class starts at 8:00. I have lunch at school with my friends at 12:00. After school, I play sports or do my homework. I go to bed at 9:00.",
                        translation: "Ngày học của tôi\n\nTôi thức dậy lúc 6:30 mỗi sáng. Tôi ăn sáng với gia đình lúc 7:00. Tôi đi học bằng xe buýt lúc 7:30. Tiết học đầu tiên của tôi bắt đầu lúc 8:00. Tôi ăn trưa ở trường với bạn bè lúc 12:00. Sau giờ học, tôi chơi thể thao hoặc làm bài tập về nhà. Tôi đi ngủ lúc 9:00.",
                        questions: [
                            {
                                question: "What time does the writer wake up?",
                                translation: "Người viết thức dậy lúc mấy giờ?",
                                options: ["6:00", "6:30", "7:00", "7:30"],
                                correct: 1
                            }
                        ]
                    }
                ]
            },
            writing: {
                title: "Writing Skills - Kỹ năng Viết",
                content: [
                    {
                        type: "task1",
                        title: "Describing a Picture",
                        instruction: "Look at the picture and write 3-4 sentences about what you see.",
                        translation: "Nhìn vào bức tranh và viết 3-4 câu về những gì bạn thấy.",
                        imageUrl: "path/to/image1.jpg",
                        example: {
                            text: "This is a beautiful park. There are many children playing on the swings and slides. The trees are tall and green. The sun is shining brightly in the sky.",
                            translation: "Đây là một công viên đẹp. Có nhiều trẻ em đang chơi ở xích đu và cầu trượt. Những cây cao và xanh. Mặt trời đang tỏa sáng trên bầu trời."
                        }
                    }
                ]
            },
            speaking: {
                title: "Speaking Skills - Kỹ năng Nói",
                content: [
                    {
                        type: "introduction",
                        topic: "Introducing Yourself",
                        questions: [
                            "What is your name?",
                            "How old are you?",
                            "Where do you live?",
                            "What do you like doing?"
                        ],
                        translations: [
                            "Tên bạn là gì?",
                            "Bạn bao nhiêu tuổi?",
                            "Bạn sống ở đâu?",
                            "Bạn thích làm gì?"
                        ],
                        examples: [
                            {
                                question: "What is your name?",
                                answer: "My name is Tom. I am a student at ABC School.",
                                translation: "Tên tôi là Tom. Tôi là học sinh trường ABC."
                            }
                        ]
                    }
                ]
            },
            vocabulary: {
                title: "Vocabulary - Từ vựng",
                words: [
                    {
                        word: "introduce",
                        meaning: "giới thiệu",
                        pronunciation: "/ˌɪntrəˈdjuːs/",
                        example: "Let me introduce myself.",
                        exampleMeaning: "Hãy để tôi tự giới thiệu.",
                        type: "verb"
                    },
                    {
                        word: "describe",
                        meaning: "mô tả",
                        pronunciation: "/dɪˈskraɪb/",
                        example: "Can you describe your house?",
                        exampleMeaning: "Bạn có thể mô tả ngôi nhà của bạn không?",
                        type: "verb"
                    }
                ]
            },
            grammar: {
                title: "Grammar - Ngữ pháp",
                points: [
                    {
                        topic: "Present Simple Tense",
                        explanation: "We use Present Simple for habits and routines.",
                        translation: "Chúng ta sử dụng Thì Hiện Tại Đơn cho thói quen và việc lặp đi lặp lại.",
                        examples: [
                            {
                                english: "I go to school every day.",
                                vietnamese: "Tôi đi học mỗi ngày."
                            },
                            {
                                english: "She likes reading books.",
                                vietnamese: "Cô ấy thích đọc sách."
                            }
                        ]
                    }
                ]
            }
        }
    }
];

// Current state
let currentUnit = null;
let currentSection = null;

// Initialize the app
function initializeApp() {
    displayUnitGrid();
    setupEventListeners();
}

// Display the unit grid
function displayUnitGrid() {
    const unitGrid = document.getElementById('unitGrid');
    unitGrid.innerHTML = '';
    
    units.forEach(unit => {
        const unitCard = document.createElement('div');
        unitCard.className = 'unit-card';
        unitCard.innerHTML = `
            <h3>Unit ${unit.id}: ${unit.title}</h3>
            <div class="unit-sections">
                <span class="badge badge-primary">Listening</span>
                <span class="badge badge-success">Reading</span>
                <span class="badge badge-info">Writing</span>
                <span class="badge badge-warning">Speaking</span>
            </div>
        `;
        unitCard.onclick = () => showUnit(unit.id);
        unitGrid.appendChild(unitCard);
    });
}

// Show unit content
function showUnit(unitId) {
    const unit = units.find(u => u.id === unitId);
    if (!unit) return;

    currentUnit = unit;
    document.getElementById('unitGrid').style.display = 'none';
    const unitContent = document.getElementById('unitContent');
    unitContent.classList.add('active');
    document.getElementById('unitTitle').textContent = `Unit ${unit.id}: ${unit.title}`;
    
    // Default to showing listening section
    showSection('listening');
}

// Show section content
function showSection(sectionName) {
    currentSection = sectionName;
    const section = currentUnit.sections[sectionName];
    const contentArea = document.getElementById('contentArea');
    
    switch(sectionName) {
        case 'listening':
            displayListening(section);
            break;
        case 'reading':
            displayReading(section);
            break;
        case 'writing':
            displayWriting(section);
            break;
        case 'speaking':
            displaySpeaking(section);
            break;
        case 'vocabulary':
            displayVocabulary(section);
            break;
        case 'grammar':
            displayGrammar(section);
            break;
    }
}

// Display listening content
function displayListening(section) {
    const contentArea = document.getElementById('contentArea');
    let html = `<h3>${section.title}</h3>`;
    
    section.content.forEach(item => {
        if (item.type === 'introduction') {
            html += `
                <div class="introduction-section mb-4">
                    <p>${item.text}</p>
                    <p class="text-muted">${item.translation}</p>
                </div>
            `;
        } else if (item.type === 'practice') {
            html += `
                <div class="practice-section mb-4">
                    <div class="audio-section">
                        <button class="btn btn-primary mb-3" onclick="speakConversation('${item.transcript.replace(/\n/g, ' ')}')">
                            <i class="fas fa-play"></i> Play Conversation
                        </button>
                        <div class="transcript mt-3">
                            <button class="btn btn-sm btn-info" onclick="toggleTranscript(this)">
                                Show Transcript
                            </button>
                            <div class="transcript-text" style="display: none;">
                                <pre class="mt-2 p-3 bg-light">${item.transcript}</pre>
                            </div>
                        </div>
                    </div>
                    <div class="questions mt-3">
                        ${item.questions.map((q, index) => `
                            <div class="question-item mb-3">
                                <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
                                <p class="text-muted">${q.translation}</p>
                                <div class="options">
                                    ${q.options.map((opt, optIndex) => `
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" 
                                                   name="q${index}" value="${optIndex}" 
                                                   id="q${index}_${optIndex}">
                                            <label class="form-check-label" for="q${index}_${optIndex}">
                                                ${opt}
                                            </label>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <button class="btn btn-primary mt-3" onclick="checkListeningAnswers()">
                        Check Answers
                    </button>
                </div>
            `;
        }
    });
    
    contentArea.innerHTML = html;
}

// Display reading content
function displayReading(section) {
    const contentArea = document.getElementById('contentArea');
    let html = `<h3>${section.title}</h3>`;
    
    section.content.forEach(item => {
        if (item.type === 'passage') {
            html += `
                <div class="reading-section mb-4">
                    <div class="passage">
                        <h4>Reading Passage</h4>
                        <p>${item.text}</p>
                        <p class="text-muted">${item.translation}</p>
                    </div>
                    <div class="questions mt-4">
                        <h4>Questions</h4>
                        ${item.questions.map((q, index) => `
                            <div class="question-item mb-3">
                                <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
                                <p class="text-muted">${q.translation}</p>
                                <div class="options">
                                    ${q.options.map((opt, optIndex) => `
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" 
                                                   name="q${index}" value="${optIndex}" 
                                                   id="q${index}_${optIndex}">
                                            <label class="form-check-label" for="q${index}_${optIndex}">
                                                ${opt}
                                            </label>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <button class="btn btn-primary mt-3" onclick="checkReadingAnswers()">
                        Check Answers
                    </button>
                </div>
            `;
        }
    });
    
    contentArea.innerHTML = html;
}

// Display writing content
function displayWriting(section) {
    const contentArea = document.getElementById('contentArea');
    let html = `<h3>${section.title}</h3>`;
    
    section.content.forEach(item => {
        html += `
            <div class="writing-section mb-4">
                <h4>${item.title}</h4>
                <p>${item.instruction}</p>
                <p class="text-muted">${item.translation}</p>
                <img src="${item.imageUrl}" alt="Writing prompt image" class="img-fluid mb-3">
                <div class="example-section">
                    <h5>Example Answer:</h5>
                    <p>${item.example.text}</p>
                    <p class="text-muted">${item.example.translation}</p>
                </div>
                <div class="writing-area mt-3">
                    <textarea class="form-control" rows="6" 
                              placeholder="Write your answer here..."></textarea>
                    <button class="btn btn-primary mt-2">Save Answer</button>
                </div>
            </div>
        `;
    });
    
    contentArea.innerHTML = html;
}

// Display speaking content
function displaySpeaking(section) {
    const contentArea = document.getElementById('contentArea');
    let html = `<h3>${section.title}</h3>`;
    
    section.content.forEach(item => {
        html += `
            <div class="speaking-section mb-4">
                <h4>${item.topic}</h4>
                <div class="questions-list">
                    ${item.questions.map((q, index) => `
                        <div class="question-item mb-3">
                            <p><strong>Question ${index + 1}:</strong> ${q}</p>
                            <p class="text-muted">${item.translations[index]}</p>
                            ${item.examples[index] ? `
                                <div class="example">
                                    <p><strong>Example answer:</strong> ${item.examples[index].answer}</p>
                                    <p class="text-muted">${item.examples[index].translation}</p>
                                </div>
                            ` : ''}
                            <button class="btn btn-sm btn-primary" onclick="startRecording(${index})">
                                Record Answer
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    contentArea.innerHTML = html;
}

// Display vocabulary content
function displayVocabulary(section) {
    const contentArea = document.getElementById('contentArea');
    let html = `<h3>${section.title}</h3>`;
    
    html += `
        <div class="vocabulary-list">
            ${section.words.map(word => `
                <div class="word-item mb-4">
                    <h4>${word.word} 
                        <span class="badge badge-info">${word.type}</span>
                        <button onclick="speakWord('${word.word}')" class="btn btn-sm btn-primary ml-2">
                            <i class="fas fa-volume-up"></i> Listen
                        </button>
                    </h4>
                    <p><strong>Pronunciation:</strong> ${word.pronunciation}</p>
                    <p><strong>Meaning:</strong> ${word.meaning}</p>
                    <p><strong>Example:</strong> ${word.example}
                        <button onclick="speakWord('${word.example}')" class="btn btn-sm btn-outline-primary ml-2">
                            <i class="fas fa-volume-up"></i>
                        </button>
                    </p>
                    <p class="text-muted">${word.exampleMeaning}</p>
                </div>
            `).join('')}
        </div>
    `;
    
    contentArea.innerHTML = html;
}

// Display grammar content
function displayGrammar(section) {
    const contentArea = document.getElementById('contentArea');
    let html = `<h3>${section.title}</h3>`;
    
    section.points.forEach(point => {
        html += `
            <div class="grammar-point mb-4">
                <h4>${point.topic}</h4>
                <p>${point.explanation}</p>
                <p class="text-muted">${point.translation}</p>
                <div class="examples">
                    <h5>Examples:</h5>
                    ${point.examples.map(example => `
                        <div class="example-item">
                            <p>${example.english}</p>
                            <p class="text-muted">${example.vietnamese}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    contentArea.innerHTML = html;
}

// Function to speak text
function speakWord(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 0.8;
    window.speechSynthesis.speak(speech);
}

// Function to speak conversation text
function speakConversation(text) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Load voices if not already loaded
    let voices = window.speechSynthesis.getVoices();
    
    function loadVoices() {
        return new Promise((resolve) => {
            if (voices.length > 0) {
                resolve(voices);
            } else {
                window.speechSynthesis.onvoiceschanged = () => {
                    voices = window.speechSynthesis.getVoices();
                    resolve(voices);
                };
            }
        });
    }

    // Split the conversation into parts
    const parts = text.split(/(?=Boy:|Teacher:)/).filter(part => part.trim());
    let currentPart = 0;

    function speakNext() {
        if (currentPart < parts.length) {
            const speech = new SpeechSynthesisUtterance(parts[currentPart].trim());
            speech.lang = 'en-US';
            speech.rate = 0.8;
            speech.volume = 1;
            
            // Determine if current part is Boy or Teacher
            const isBoy = parts[currentPart].trim().startsWith('Boy:');
            
            // Get English voices
            const englishVoices = voices.filter(voice => voice.lang.includes('en'));
            
            if (englishVoices.length > 0) {
                // Try to find appropriate voice
                if (isBoy) {
                    speech.voice = englishVoices.find(v => v.name.includes('Male')) || englishVoices[0];
                } else {
                    speech.voice = englishVoices.find(v => v.name.includes('Female')) || englishVoices[0];
                }
            }

            speech.onend = () => {
                currentPart++;
                setTimeout(speakNext, 800); // Longer pause between speakers
            };

            speech.onerror = (event) => {
                console.error('Speech synthesis error:', event);
                alert('There was an error playing the audio. Please try again.');
            };

            try {
                window.speechSynthesis.speak(speech);
            } catch (error) {
                console.error('Speech synthesis error:', error);
                alert('There was an error playing the audio. Please try again.');
            }
        }
    }

    // Start the process by loading voices first
    loadVoices().then(() => {
        speakNext();
    }).catch(error => {
        console.error('Error loading voices:', error);
        alert('There was an error loading the speech voices. Please try again.');
    });
}

// Check listening answers
function checkListeningAnswers() {
    const questions = currentUnit.sections.listening.content.find(item => item.type === 'practice').questions;
    let score = 0;
    
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });
    
    alert(`Your score: ${score}/${questions.length}`);
}

// Check reading answers
function checkReadingAnswers() {
    const questions = currentUnit.sections.reading.content[0].questions;
    let score = 0;
    
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });
    
    alert(`Your score: ${score}/${questions.length}`);
}

// Setup event listeners
function setupEventListeners() {
    // Add event listeners for navigation buttons
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', () => {
            const section = button.getAttribute('data-section');
            showSection(section);
        });
    });
    
    // Add event listener for back button
    document.getElementById('backButton').addEventListener('click', () => {
        document.getElementById('unitGrid').style.display = 'grid';
        document.getElementById('unitContent').classList.remove('active');
        currentUnit = null;
        currentSection = null;
    });
}

// Function to toggle transcript visibility
function toggleTranscript(button) {
    const transcriptText = button.nextElementSibling;
    if (transcriptText.style.display === 'none') {
        transcriptText.style.display = 'block';
        button.textContent = 'Hide Transcript';
    } else {
        transcriptText.style.display = 'none';
        button.textContent = 'Show Transcript';
    }
}

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', initializeApp); 
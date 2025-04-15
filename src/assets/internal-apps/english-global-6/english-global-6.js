// Data structure for the units
const units = [
    {
        id: 1,
        title: "Bài 1: Trường học mới của tôi",
        grammar: {
            title: "Thì hiện tại đơn",
            content: [
                "Chúng ta sử dụng thì hiện tại đơn để nói về:",
                "- Hành động thường xuyên hoặc thói quen",
                "- Tình trạng cố định",
                "- Sự thật hiển nhiên",
                "Cấu trúc:",
                "Khẳng định: Chủ ngữ + V(s/es)",
                "Phủ định: Chủ ngữ + don't/doesn't + V",
                "Câu hỏi: Do/Does + Chủ ngữ + V?"
            ]
        },
        vocabulary: {
            title: "Cuộc sống học đường",
            words: [
                { 
                    word: "teacher", 
                    meaning: "giáo viên", 
                    example: "My English teacher is very kind. (Giáo viên tiếng Anh của tôi rất tốt bụng.)" 
                },
                { 
                    word: "student", 
                    meaning: "học sinh", 
                    example: "He is a good student. (Anh ấy là một học sinh giỏi.)" 
                },
                { 
                    word: "subject", 
                    meaning: "môn học", 
                    example: "Math is my favorite subject. (Toán là môn học yêu thích của tôi.)" 
                },
                { 
                    word: "classroom", 
                    meaning: "lớp học", 
                    example: "Our classroom is on the second floor. (Lớp học của chúng tôi ở tầng hai.)" 
                }
            ]
        },
        exercises: [
            {
                question: "She _____ (go) to school by bus. (Cô ấy đi học bằng xe buýt.)",
                answer: "goes",
                options: ["go", "goes", "going", "went"]
            },
            {
                question: "_____ they study English every day? (Họ có học tiếng Anh mỗi ngày không?)",
                answer: "Do",
                options: ["Do", "Does", "Are", "Is"]
            },
            {
                question: "We _____ (not/like) homework. (Chúng tôi không thích bài tập về nhà.)",
                answer: "don't like",
                options: ["don't like", "doesn't like", "not like", "no like"]
            }
        ]
    },
    {
        id: 2,
        title: "Bài 2: Sở thích của tôi",
        grammar: {
            title: "Thì hiện tại tiếp diễn",
            content: [
                "Chúng ta sử dụng thì hiện tại tiếp diễn để nói về:",
                "- Hành động đang diễn ra",
                "- Hành động tạm thời",
                "- Kế hoạch trong tương lai gần",
                "Cấu trúc:",
                "Khẳng định: Chủ ngữ + am/is/are + V-ing",
                "Phủ định: Chủ ngữ + am/is/are + not + V-ing",
                "Câu hỏi: Am/Is/Are + Chủ ngữ + V-ing?"
            ]
        },
        vocabulary: {
            title: "Sở thích và hoạt động",
            words: [
                { 
                    word: "hobby", 
                    meaning: "sở thích", 
                    example: "Reading is my hobby. (Đọc sách là sở thích của tôi.)" 
                },
                { 
                    word: "collect", 
                    meaning: "sưu tập", 
                    example: "I collect stamps. (Tôi sưu tập tem.)" 
                },
                { 
                    word: "paint", 
                    meaning: "vẽ tranh", 
                    example: "She paints beautiful pictures. (Cô ấy vẽ những bức tranh đẹp.)" 
                },
                { 
                    word: "draw", 
                    meaning: "vẽ", 
                    example: "He draws comics. (Anh ấy vẽ truyện tranh.)" 
                }
            ]
        },
        exercises: [
            {
                question: "What _____ you _____ (do) right now? (Bạn đang làm gì vậy?)",
                answer: "are, doing",
                options: ["is, doing", "are, doing", "am, doing", "are, do"]
            },
            {
                question: "They _____ (play) football at the moment. (Họ đang chơi bóng đá.)",
                answer: "are playing",
                options: ["are playing", "is playing", "plays", "play"]
            },
            {
                question: "She _____ (not/study) now. (Cô ấy không học bây giờ.)",
                answer: "isn't studying",
                options: ["isn't studying", "aren't studying", "not studying", "doesn't study"]
            }
        ]
    }
];

// Current state
let currentUnit = null;
let currentSection = null;

// Initialize the app
function initializeApp() {
    createUnitGrid();
}

// Create the unit grid
function createUnitGrid() {
    const unitGrid = document.getElementById('unitGrid');
    unitGrid.innerHTML = '';

    units.forEach(unit => {
        const unitCard = document.createElement('div');
        unitCard.className = 'unit-card';
        unitCard.innerHTML = `<h3>${unit.title}</h3>`;
        unitCard.onclick = () => showUnit(unit);
        unitGrid.appendChild(unitCard);
    });
}

// Show unit content
function showUnit(unit) {
    currentUnit = unit;
    document.getElementById('unitGrid').style.display = 'none';
    const unitContent = document.getElementById('unitContent');
    unitContent.classList.add('active');
    document.getElementById('unitTitle').textContent = unit.title;
    showSection('grammar'); // Default to grammar section
}

// Show unit grid
function showUnitGrid() {
    document.getElementById('unitGrid').style.display = 'grid';
    document.getElementById('unitContent').classList.remove('active');
    currentUnit = null;
    currentSection = null;
}

// Show section content
function showSection(section) {
    currentSection = section;
    const contentArea = document.getElementById('contentArea');
    
    switch(section) {
        case 'grammar':
            showGrammarContent(contentArea);
            break;
        case 'vocabulary':
            showVocabularyContent(contentArea);
            break;
        case 'exercises':
            showExercisesContent(contentArea);
            break;
        case 'quiz':
            showVocabularyQuiz(contentArea);
            break;
    }
}

// Show grammar content
function showGrammarContent(contentArea) {
    const grammar = currentUnit.grammar;
    contentArea.innerHTML = `
        <h3>${grammar.title}</h3>
        <div class="grammar-content">
            ${grammar.content.map(line => `<p>${line}</p>`).join('')}
        </div>
    `;
}

// Show vocabulary content
function showVocabularyContent(contentArea) {
    const vocabulary = currentUnit.vocabulary;
    contentArea.innerHTML = `
        <h3>${vocabulary.title}</h3>
        <div class="vocabulary-list">
            ${vocabulary.words.map(word => `
                <div class="word-item mb-3">
                    <h4>${word.word}</h4>
                    <p><strong>Nghĩa:</strong> ${word.meaning}</p>
                    <p><strong>Ví dụ:</strong> ${word.example}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// Show exercises content
function showExercisesContent(contentArea) {
    contentArea.innerHTML = `
        <h3>Bài tập ngữ pháp</h3>
        <form id="exerciseForm">
            ${currentUnit.exercises.map((exercise, index) => `
                <div class="exercise-item mb-4">
                    <p><strong>Câu ${index + 1}:</strong> ${exercise.question}</p>
                    <div class="options">
                        ${exercise.options.map(option => `
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="q${index}" value="${option}" id="q${index}_${option}">
                                <label class="form-check-label" for="q${index}_${option}">
                                    ${option}
                                </label>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
            <button type="button" class="btn btn-primary" onclick="checkExercises()">Kiểm tra đáp án</button>
        </form>
        <div id="exerciseResults" class="mt-3"></div>
    `;
}

// Show vocabulary quiz
function showVocabularyQuiz(contentArea) {
    const vocabulary = currentUnit.vocabulary.words;
    const shuffledWords = [...vocabulary].sort(() => Math.random() - 0.5);
    
    // Lưu lại thứ tự các từ đã xáo trộn để kiểm tra
    currentUnit.shuffledQuizWords = shuffledWords;
    
    contentArea.innerHTML = `
        <h3>Kiểm tra từ vựng</h3>
        <form id="quizForm">
            ${shuffledWords.map((word, index) => {
                // Tạo các lựa chọn bao gồm đáp án đúng và 3 đáp án sai
                const otherWords = vocabulary.filter(w => w !== word);
                const wrongAnswers = otherWords
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3)
                    .map(w => w.word);
                const options = [...wrongAnswers, word.word]
                    .sort(() => Math.random() - 0.5);

                return `
                    <div class="quiz-item mb-4">
                        <p><strong>Từ ${index + 1}:</strong> ${word.meaning}</p>
                        <div class="options">
                            ${options.map(option => `
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" 
                                           name="quiz${index}" 
                                           value="${option}" 
                                           id="quiz${index}_${option}">
                                    <label class="form-check-label" for="quiz${index}_${option}">
                                        ${option}
                                    </label>
                                </div>
                            `).join('')}
                        </div>
                        <div class="feedback mt-2"></div>
                    </div>
                `;
            }).join('')}
            <button type="button" class="btn btn-primary" onclick="checkVocabularyQuiz()">Kiểm tra đáp án</button>
        </form>
        <div id="quizResults" class="mt-3"></div>
    `;
}

// Check vocabulary quiz
function checkVocabularyQuiz() {
    let correct = 0;
    const results = document.getElementById('quizResults');
    const shuffledWords = currentUnit.shuffledQuizWords;
    
    shuffledWords.forEach((word, index) => {
        const selected = document.querySelector(`input[name="quiz${index}"]:checked`);
        const feedback = document.querySelector(`#quizForm .quiz-item:nth-child(${index + 1}) .feedback`);
        
        if (selected) {
            if (selected.value === word.word) {
                correct++;
                feedback.innerHTML = '<span class="text-success">Chính xác!</span>';
            } else {
                feedback.innerHTML = `<span class="text-danger">Chưa đúng. Đáp án đúng là: ${word.word}</span>`;
            }
        } else {
            feedback.innerHTML = '<span class="text-warning">Bạn chưa chọn đáp án!</span>';
        }
    });

    results.innerHTML = `
        <div class="alert alert-info">
            Bạn đã làm đúng ${correct}/${shuffledWords.length} câu!
        </div>
    `;
}

// Check exercises
function checkExercises() {
    let correct = 0;
    const results = document.getElementById('exerciseResults');
    
    currentUnit.exercises.forEach((exercise, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === exercise.answer) {
            correct++;
        }
    });

    results.innerHTML = `
        <div class="alert alert-info">
            Bạn đã làm đúng ${correct}/${currentUnit.exercises.length} câu!
        </div>
    `;
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', initializeApp); 
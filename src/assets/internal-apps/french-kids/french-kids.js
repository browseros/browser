const units = [
    {
        id: 1,
        title: "Bonjour! - Chào hỏi",
        grammar: {
            title: "Ngữ pháp",
            content: [
                {
                    topic: "Cách chào hỏi cơ bản",
                    explanation: "Trong tiếng Pháp, chúng ta có nhiều cách chào hỏi khác nhau tùy theo thời điểm trong ngày:",
                    examples: [
                        "Bonjour! - Chào (dùng vào buổi sáng và cả ngày)",
                        "Bonsoir! - Chào buổi tối",
                        "Au revoir! - Tạm biệt",
                        "À bientôt! - Hẹn gặp lại"
                    ]
                },
                {
                    topic: "Giới thiệu bản thân",
                    explanation: "Cấu trúc cơ bản để giới thiệu bản thân:",
                    examples: [
                        "Je m'appelle... - Tôi tên là...",
                        "Comment tu t'appelles? - Bạn tên là gì?"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "Bonjour",
                meaning: "Xin chào",
                example: "Bonjour, comment allez-vous?",
                exampleMeaning: "Xin chào, bạn khỏe không?"
            },
            {
                word: "Au revoir",
                meaning: "Tạm biệt",
                example: "Au revoir, à demain!",
                exampleMeaning: "Tạm biệt, hẹn gặp lại ngày mai!"
            },
            {
                word: "S'il vous plaît",
                meaning: "Làm ơn, xin vui lòng",
                example: "Un café, s'il vous plaît.",
                exampleMeaning: "Cho một ly cà phê, làm ơn."
            },
            {
                word: "Merci",
                meaning: "Cảm ơn",
                example: "Merci beaucoup!",
                exampleMeaning: "Cảm ơn nhiều!"
            },
            {
                word: "Oui",
                meaning: "Có, vâng",
                example: "Oui, je comprends.",
                exampleMeaning: "Vâng, tôi hiểu."
            },
            {
                word: "Non",
                meaning: "Không",
                example: "Non, merci.",
                exampleMeaning: "Không, cảm ơn."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Comment dit-on 'Xin chào' en français?",
                options: ["Au revoir", "Bonjour", "Merci", "S'il vous plaît"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Que signifie 'Merci'?",
                options: ["Xin lỗi", "Tạm biệt", "Cảm ơn", "Xin chào"],
                correct: 2
            }
        ]
    },
    {
        id: 2,
        title: "Ma famille - Gia đình tôi",
        grammar: {
            title: "Ngữ pháp",
            content: [
                {
                    topic: "Tính từ sở hữu",
                    explanation: "Trong tiếng Pháp, tính từ sở hữu phải phù hợp với danh từ về giới và số:",
                    examples: [
                        "Mon père - Bố tôi",
                        "Ma mère - Mẹ tôi",
                        "Mes parents - Bố mẹ tôi"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "La famille",
                meaning: "Gia đình",
                example: "J'aime ma famille.",
                exampleMeaning: "Tôi yêu gia đình tôi."
            },
            {
                word: "Le père",
                meaning: "Bố",
                example: "Mon père est médecin.",
                exampleMeaning: "Bố tôi là bác sĩ."
            },
            {
                word: "La mère",
                meaning: "Mẹ",
                example: "Ma mère est professeur.",
                exampleMeaning: "Mẹ tôi là giáo viên."
            },
            {
                word: "Le frère",
                meaning: "Anh/em trai",
                example: "J'ai un frère.",
                exampleMeaning: "Tôi có một người anh/em trai."
            },
            {
                word: "La sœur",
                meaning: "Chị/em gái",
                example: "Ma sœur est étudiante.",
                exampleMeaning: "Chị/em gái tôi là sinh viên."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Comment dit-on 'Gia đình' en français?",
                options: ["Le père", "La mère", "La famille", "Le frère"],
                correct: 2
            }
        ]
    },
    {
        id: 3,
        title: "Les nombres - Các số",
        grammar: {
            title: "Ngữ pháp",
            content: [
                {
                    topic: "Số đếm cơ bản",
                    explanation: "Các số từ 0-20 trong tiếng Pháp:",
                    examples: [
                        "0 - zéro",
                        "1 - un",
                        "2 - deux",
                        "3 - trois",
                        "4 - quatre",
                        "5 - cinq"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "Un",
                meaning: "Một",
                example: "J'ai un livre.",
                exampleMeaning: "Tôi có một quyển sách."
            },
            {
                word: "Deux",
                meaning: "Hai",
                example: "Il y a deux chats.",
                exampleMeaning: "Có hai con mèo."
            },
            {
                word: "Trois",
                meaning: "Ba",
                example: "Trois enfants jouent.",
                exampleMeaning: "Ba đứa trẻ đang chơi."
            },
            {
                word: "Quatre",
                meaning: "Bốn",
                example: "J'ai quatre stylos.",
                exampleMeaning: "Tôi có bốn cây bút."
            },
            {
                word: "Cinq",
                meaning: "Năm",
                example: "Cinq pommes rouges.",
                exampleMeaning: "Năm quả táo đỏ."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Comment dit-on 'hai' en français?",
                options: ["Un", "Deux", "Trois", "Quatre"],
                correct: 1
            }
        ]
    },
    {
        id: 4,
        title: "Les couleurs - Các màu sắc",
        grammar: {
            title: "Ngữ pháp",
            content: [
                {
                    topic: "Tính từ chỉ màu sắc",
                    explanation: "Tính từ chỉ màu sắc trong tiếng Pháp phải phù hợp với danh từ về giới và số:",
                    examples: [
                        "Un ballon rouge - Một quả bóng màu đỏ",
                        "Une fleur bleue - Một bông hoa màu xanh",
                        "Des crayons verts - Những cây bút chì màu xanh lá"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "Rouge",
                meaning: "Màu đỏ",
                example: "La pomme est rouge.",
                exampleMeaning: "Quả táo màu đỏ."
            },
            {
                word: "Bleu",
                meaning: "Màu xanh dương",
                example: "Le ciel est bleu.",
                exampleMeaning: "Bầu trời màu xanh."
            },
            {
                word: "Vert",
                meaning: "Màu xanh lá",
                example: "L'herbe est verte.",
                exampleMeaning: "Cỏ màu xanh lá."
            },
            {
                word: "Jaune",
                meaning: "Màu vàng",
                example: "Le soleil est jaune.",
                exampleMeaning: "Mặt trời màu vàng."
            },
            {
                word: "Noir",
                meaning: "Màu đen",
                example: "Le chat est noir.",
                exampleMeaning: "Con mèo màu đen."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Quelle est la couleur du ciel?",
                options: ["Rouge", "Bleu", "Vert", "Jaune"],
                correct: 1
            }
        ]
    },
    {
        id: 5,
        title: "Les animaux - Các con vật",
        grammar: {
            title: "Ngữ pháp",
            content: [
                {
                    topic: "Danh từ chỉ động vật",
                    explanation: "Trong tiếng Pháp, danh từ chỉ động vật có giống và số:",
                    examples: [
                        "Un chat (đực) / Une chatte (cái) - Con mèo",
                        "Un chien (đực) / Une chienne (cái) - Con chó",
                        "Les animaux - Các con vật"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "Le chat",
                meaning: "Con mèo",
                example: "Le chat dort.",
                exampleMeaning: "Con mèo đang ngủ."
            },
            {
                word: "Le chien",
                meaning: "Con chó",
                example: "Le chien aboie.",
                exampleMeaning: "Con chó sủa."
            },
            {
                word: "L'oiseau",
                meaning: "Con chim",
                example: "L'oiseau vole.",
                exampleMeaning: "Con chim bay."
            },
            {
                word: "Le poisson",
                meaning: "Con cá",
                example: "Le poisson nage.",
                exampleMeaning: "Con cá bơi."
            },
            {
                word: "La grenouille",
                meaning: "Con ếch",
                example: "La grenouille saute.",
                exampleMeaning: "Con ếch nhảy."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Quel animal fait 'miaou'?",
                options: ["Le chien", "Le chat", "L'oiseau", "Le poisson"],
                correct: 1
            }
        ]
    },
    {
        id: 6,
        title: "Les fruits - Các loại trái cây",
        grammar: {
            title: "Ngữ pháp",
            content: [
                {
                    topic: "Cách sử dụng mạo từ với trái cây",
                    explanation: "Trong tiếng Pháp, trái cây thường đi kèm với mạo từ xác định hoặc không xác định:",
                    examples: [
                        "Une pomme - Một quả táo",
                        "La banane - Quả chuối",
                        "Des oranges - Những quả cam"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "La pomme",
                meaning: "Quả táo",
                example: "J'aime les pommes rouges.",
                exampleMeaning: "Tôi thích táo đỏ."
            },
            {
                word: "La banane",
                meaning: "Quả chuối",
                example: "La banane est jaune.",
                exampleMeaning: "Quả chuối màu vàng."
            },
            {
                word: "L'orange",
                meaning: "Quả cam",
                example: "Je mange une orange.",
                exampleMeaning: "Tôi ăn một quả cam."
            },
            {
                word: "La fraise",
                meaning: "Quả dâu tây",
                example: "Les fraises sont rouges.",
                exampleMeaning: "Những quả dâu tây màu đỏ."
            },
            {
                word: "Le raisin",
                meaning: "Quả nho",
                example: "Le raisin est violet.",
                exampleMeaning: "Quả nho màu tím."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Quel fruit est jaune?",
                options: ["La pomme", "La banane", "L'orange", "La fraise"],
                correct: 1
            }
        ]
    }
];

// Current state
let currentUnit = null;
let currentSection = null;

// Initialize the app
function initializeApp() {
    displayUnitGrid();
}

// Display the unit grid
function displayUnitGrid() {
    const unitGrid = document.getElementById('unitGrid');
    unitGrid.innerHTML = '';
    
    units.forEach(unit => {
        const unitCard = document.createElement('div');
        unitCard.className = 'unit-card';
        unitCard.innerHTML = `
            <h3>Bài ${unit.id}: ${unit.title}</h3>
            <p>Bấm vào để xem chi tiết</p>
        `;
        unitCard.onclick = () => showUnit(unit.id);
        unitGrid.appendChild(unitCard);
    });
}

// Show unit content
function showUnit(unitId) {
    const unit = units.find(u => u.id === unitId);
    if (!unit) return;

    // Set the current unit
    currentUnit = unit;

    document.getElementById('unitGrid').style.display = 'none';
    const unitContent = document.getElementById('unitContent');
    unitContent.classList.add('active');
    document.getElementById('unitTitle').textContent = `Bài ${unit.id}: ${unit.title}`;
    
    // Mặc định hiển thị phần từ vựng
    showSection('vocabulary');
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
            displayGrammar(currentUnit.grammar);
            break;
        case 'vocabulary':
            displayVocabulary(currentUnit.vocabulary);
            break;
        case 'exercises':
            displayExercises(currentUnit.exercises);
            break;
        case 'quiz':
            displayQuiz(currentUnit.vocabulary);
            break;
        case 'grammarReview':
            displayGrammarReview();
            break;
        case 'vocabularyReview':
            displayVocabularyReview();
            break;
    }
}

// Display grammar content
function displayGrammar(grammar) {
    const contentArea = document.getElementById('contentArea');
    let html = `<h3>${grammar.title}</h3>`;
    
    grammar.content.forEach(item => {
        html += `
            <div class="grammar-item">
                <h4>${item.topic}</h4>
                <p>${item.explanation}</p>
                <ul>
                    ${item.examples.map(ex => `<li>${ex}</li>`).join('')}
                </ul>
            </div>
        `;
    });
    
    contentArea.innerHTML = html;
}

// Display vocabulary content
function displayVocabulary(vocabulary) {
    const contentArea = document.getElementById('contentArea');
    let html = `<h3>Từ vựng</h3>`;
    
    vocabulary.forEach(item => {
        html += `
            <div class="word-item">
                <h4>${item.word}</h4>
                <p><strong>Nghĩa:</strong> ${item.meaning}</p>
                <p><strong>Ví dụ:</strong> ${item.example}</p>
                <p><strong>Nghĩa ví dụ:</strong> ${item.exampleMeaning}</p>
            </div>
        `;
    });
    
    contentArea.innerHTML = html;
}

// Display exercises content
function displayExercises(exercises) {
    const contentArea = document.getElementById('contentArea');
    let html = `
        <h3>Bài tập</h3>
        <form id="exerciseForm">
            ${exercises.map((exercise, index) => `
                <div class="exercise-item mb-4">
                    <p><strong>Câu ${index + 1}:</strong> ${exercise.question}</p>
                    <div class="options">
                        ${exercise.options.map(option => `
                            <div class="form-check">
                                <input class="form-check-input" type="radio" 
                                       name="q${index}" 
                                       value="${option}" 
                                       id="q${index}_${option}">
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
    
    contentArea.innerHTML = html;
}

// Display vocabulary quiz
function displayQuiz(exercises) {
    const vocabulary = currentUnit.vocabulary;
    const shuffledWords = [...vocabulary].sort(() => Math.random() - 0.5);
    
    currentUnit.shuffledQuizWords = shuffledWords;
    
    const contentArea = document.getElementById('contentArea');
    let html = `
        <h3>Kiểm tra từ vựng</h3>
        <form id="quizForm">
            ${shuffledWords.map((word, index) => {
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
    
    contentArea.innerHTML = html;
}

// Display grammar review
function displayGrammarReview() {
    const contentArea = document.getElementById('contentArea');
    let html = `<h3>Ôn tập ngữ pháp</h3>`;
    
    units.forEach(unit => {
        html += `
            <div class="review-section mb-4">
                <h4>Bài ${unit.id}: ${unit.title}</h4>
                ${unit.grammar.content.map(item => `
                    <div class="grammar-item">
                        <h5>${item.topic}</h5>
                        <p>${item.explanation}</p>
                        <ul>
                            ${item.examples.map(ex => `<li>${ex}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        `;
    });
    
    contentArea.innerHTML = html;
}

// Display vocabulary review
function displayVocabularyReview() {
    const contentArea = document.getElementById('contentArea');
    let html = `<h3>Ôn tập từ vựng</h3>`;
    
    units.forEach(unit => {
        html += `
            <div class="review-section mb-4">
                <h4>Bài ${unit.id}: ${unit.title}</h4>
                <div class="vocabulary-list">
                    ${unit.vocabulary.map(word => `
                        <div class="word-item">
                            <h5>${word.word}</h5>
                            <p><strong>Nghĩa:</strong> ${word.meaning}</p>
                            <p><strong>Ví dụ:</strong> ${word.example}</p>
                            <p><strong>Nghĩa ví dụ:</strong> ${word.exampleMeaning}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    contentArea.innerHTML = html;
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
const units = [
    {
        id: 1,
        title: "Leçon 1: Bonjour! (Xin chào!)",
        grammar: {
            title: "Chào hỏi cơ bản",
            content: [
                "Các cách chào hỏi trong tiếng Pháp:",
                "- Bonjour = Xin chào (dùng ban ngày)",
                "- Bonsoir = Chào buổi tối",
                "- Au revoir = Tạm biệt",
                "- À bientôt = Hẹn gặp lại",
                "",
                "Hỏi tên và trả lời:",
                "- Comment tu t'appelles? = Bạn tên gì?",
                "- Je m'appelle... = Tôi tên là...",
                "",
                "Hỏi thăm:",
                "- Ça va? = Bạn khỏe không?",
                "- Oui, ça va bien = Vâng, tôi khỏe",
                "- Non, ça ne va pas = Không, tôi không khỏe"
            ]
        },
        vocabulary: {
            title: "Từ vựng chào hỏi",
            words: [
                {
                    word: "bonjour",
                    meaning: "xin chào",
                    example: "Bonjour, comment ça va? (Xin chào, bạn khỏe không?)"
                },
                {
                    word: "au revoir",
                    meaning: "tạm biệt",
                    example: "Au revoir, à demain! (Tạm biệt, hẹn gặp lại ngày mai!)"
                },
                {
                    word: "s'il vous plaît",
                    meaning: "làm ơn, xin vui lòng",
                    example: "Un crayon, s'il vous plaît. (Xin vui lòng cho một cây bút chì.)"
                },
                {
                    word: "merci",
                    meaning: "cảm ơn",
                    example: "Merci beaucoup! (Cảm ơn nhiều!)"
                },
                {
                    word: "oui",
                    meaning: "vâng, có",
                    example: "Oui, je comprends. (Vâng, tôi hiểu.)"
                },
                {
                    word: "non",
                    meaning: "không",
                    example: "Non, merci. (Không, cảm ơn.)"
                },
                {
                    word: "salut",
                    meaning: "chào (thân mật)",
                    example: "Salut, ça va? (Chào, khỏe không?)"
                },
                {
                    word: "bonsoir",
                    meaning: "chào buổi tối",
                    example: "Bonsoir, tout le monde! (Chào buổi tối mọi người!)"
                },
                {
                    word: "bonne nuit",
                    meaning: "chúc ngủ ngon",
                    example: "Bonne nuit, à demain! (Chúc ngủ ngon, hẹn gặp lại ngày mai!)"
                },
                {
                    word: "enchanté(e)",
                    meaning: "rất vui được gặp",
                    example: "Enchanté de vous rencontrer! (Rất vui được gặp bạn!)"
                }
            ]
        },
        exercises: [
            {
                question: "Comment dit-on 'xin chào' en français? (Tiếng Pháp nói 'xin chào' là gì?)",
                answer: "bonjour",
                options: ["merci", "bonjour", "au revoir", "s'il vous plaît"]
            },
            {
                question: "Comment dit-on 'cảm ơn' en français? (Tiếng Pháp nói 'cảm ơn' là gì?)",
                answer: "merci",
                options: ["bonjour", "merci", "oui", "non"]
            },
            {
                question: "Pour dire au revoir le soir, on dit... (Để chào tạm biệt vào buổi tối, ta nói...)",
                answer: "bonsoir",
                options: ["bonjour", "bonsoir", "salut", "merci"]
            }
        ]
    },
    {
        id: 2,
        title: "Leçon 2: Les Nombres (Các số)",
        grammar: {
            title: "Số đếm từ 1-20",
            content: [
                "Các số từ 1-10:",
                "1 = un/une",
                "2 = deux",
                "3 = trois",
                "4 = quatre",
                "5 = cinq",
                "6 = six",
                "7 = sept",
                "8 = huit",
                "9 = neuf",
                "10 = dix",
                "",
                "Các số từ 11-20:",
                "11 = onze",
                "12 = douze",
                "13 = treize",
                "14 = quatorze",
                "15 = quinze",
                "16 = seize",
                "17 = dix-sept",
                "18 = dix-huit",
                "19 = dix-neuf",
                "20 = vingt"
            ]
        },
        vocabulary: {
            title: "Từ vựng về số",
            words: [
                {
                    word: "un",
                    meaning: "một",
                    example: "J'ai un livre. (Tôi có một quyển sách.)"
                },
                {
                    word: "deux",
                    meaning: "hai",
                    example: "J'ai deux frères. (Tôi có hai anh/em trai.)"
                },
                {
                    word: "trois",
                    meaning: "ba",
                    example: "Trois petits chats. (Ba con mèo nhỏ.)"
                },
                {
                    word: "quatre",
                    meaning: "bốn",
                    example: "Quatre saisons. (Bốn mùa.)"
                },
                {
                    word: "cinq",
                    meaning: "năm",
                    example: "J'ai cinq ans. (Tôi năm tuổi.)"
                },
                {
                    word: "dix",
                    meaning: "mười",
                    example: "Dix doigts. (Mười ngón tay.)"
                },
                {
                    word: "quinze",
                    meaning: "mười lăm",
                    example: "Quinze minutes. (Mười lăm phút.)"
                },
                {
                    word: "vingt",
                    meaning: "hai mươi",
                    example: "Vingt élèves. (Hai mươi học sinh.)"
                },
                {
                    word: "premier",
                    meaning: "thứ nhất",
                    example: "Le premier jour. (Ngày đầu tiên.)"
                },
                {
                    word: "dernier",
                    meaning: "cuối cùng",
                    example: "Le dernier jour. (Ngày cuối cùng.)"
                }
            ]
        },
        exercises: [
            {
                question: "Comment dit-on '5' en français? (Số 5 trong tiếng Pháp là?)",
                answer: "cinq",
                options: ["quatre", "cinq", "six", "sept"]
            },
            {
                question: "Quel est le nombre 'quinze'? (Số 'quinze' là số nào?)",
                answer: "15",
                options: ["12", "13", "14", "15"]
            },
            {
                question: "Comment dit-on '20' en français? (Số 20 trong tiếng Pháp là?)",
                answer: "vingt",
                options: ["dix", "douze", "vingt", "seize"]
            }
        ]
    },
    {
        id: 3,
        title: "Leçon 3: Les Couleurs (Màu sắc)",
        grammar: {
            title: "Tính từ chỉ màu sắc",
            content: [
                "Trong tiếng Pháp, tính từ chỉ màu sắc phải phù hợp với danh từ về:",
                "- Giống (masculin/féminin)",
                "- Số (số ít/số nhiều)",
                "",
                "Ví dụ:",
                "- Un ballon rouge (Một quả bóng màu đỏ)",
                "- Une pomme rouge (Một quả táo màu đỏ)",
                "- Des ballons rouges (Những quả bóng màu đỏ)",
                "",
                "Một số tính từ chỉ màu không thay đổi:",
                "- orange (màu cam)",
                "- marron (màu nâu)"
            ]
        },
        vocabulary: {
            title: "Từ vựng về màu sắc",
            words: [
                {
                    word: "rouge",
                    meaning: "màu đỏ",
                    example: "Une pomme rouge. (Một quả táo đỏ.)"
                },
                {
                    word: "bleu",
                    meaning: "màu xanh dương",
                    example: "Le ciel est bleu. (Bầu trời màu xanh.)"
                },
                {
                    word: "jaune",
                    meaning: "màu vàng",
                    example: "Le soleil est jaune. (Mặt trời màu vàng.)"
                },
                {
                    word: "vert",
                    meaning: "màu xanh lá",
                    example: "L'herbe est verte. (Cỏ màu xanh.)"
                },
                {
                    word: "noir",
                    meaning: "màu đen",
                    example: "Un chat noir. (Một con mèo đen.)"
                },
                {
                    word: "blanc",
                    meaning: "màu trắng",
                    example: "La neige est blanche. (Tuyết màu trắng.)"
                },
                {
                    word: "rose",
                    meaning: "màu hồng",
                    example: "Une fleur rose. (Một bông hoa hồng.)"
                },
                {
                    word: "violet",
                    meaning: "màu tím",
                    example: "Un raisin violet. (Một quả nho tím.)"
                },
                {
                    word: "orange",
                    meaning: "màu cam",
                    example: "Une orange orange. (Một quả cam màu cam.)"
                },
                {
                    word: "marron",
                    meaning: "màu nâu",
                    example: "Un ours marron. (Một con gấu nâu.)"
                }
            ]
        },
        exercises: [
            {
                question: "De quelle couleur est le ciel? (Bầu trời màu gì?)",
                answer: "bleu",
                options: ["rouge", "bleu", "vert", "jaune"]
            },
            {
                question: "Comment dit-on 'màu đỏ' en français?",
                answer: "rouge",
                options: ["bleu", "rouge", "vert", "noir"]
            },
            {
                question: "De quelle couleur est la neige? (Tuyết màu gì?)",
                answer: "blanc",
                options: ["noir", "blanc", "rose", "violet"]
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
    showSection('grammar');
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
        <h3>Bài tập</h3>
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
    
    currentUnit.shuffledQuizWords = shuffledWords;
    
    contentArea.innerHTML = `
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
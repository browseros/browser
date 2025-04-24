// Vocabulary data
const vocabularyData = {
    categories: [
        {
            id: "greetings",
            title: "Salutations",
            words: [
                { french: "Bonjour", vietnamese: "Xin chào (buổi sáng / buổi chiều)" },
                { french: "Bonsoir", vietnamese: "Xin chào (buổi tối)" },
                { french: "Au revoir", vietnamese: "Tạm biệt" },
                { french: "À bientôt", vietnamese: "Hẹn gặp lại" },
                { french: "Salut", vietnamese: "Chào (thân mật)" },
                { french: "Ça va?", vietnamese: "Bạn khỏe không?" },
                { french: "Ça va bien", vietnamese: "Tôi khỏe" },
                { french: "Merci", vietnamese: "Cảm ơn" },
                { french: "S'il vous plaît", vietnamese: "Làm ơn" },
                { french: "Excusez-moi", vietnamese: "Xin lỗi" }
            ]
        },
        {
            id: "colors",
            title: "Couleurs",
            words: [
                { french: "rouge", vietnamese: "đỏ" },
                { french: "bleu", vietnamese: "xanh dương" },
                { french: "vert", vietnamese: "xanh lá" },
                { french: "jaune", vietnamese: "vàng" },
                { french: "noir", vietnamese: "đen" },
                { french: "blanc", vietnamese: "trắng" },
                { french: "orange", vietnamese: "cam" },
                { french: "violet", vietnamese: "tím" },
                { french: "rose", vietnamese: "hồng" },
                { french: "marron", vietnamese: "nâu" },
                { french: "gris", vietnamese: "xám" }
            ]
        },
        {
            id: "numbers",
            title: "Nombres",
            words: [
                { french: "un", vietnamese: "một" },
                { french: "deux", vietnamese: "hai" },
                { french: "trois", vietnamese: "ba" },
                { french: "quatre", vietnamese: "bốn" },
                { french: "cinq", vietnamese: "năm" },
                { french: "six", vietnamese: "sáu" },
                { french: "sept", vietnamese: "bảy" },
                { french: "huit", vietnamese: "tám" },
                { french: "neuf", vietnamese: "chín" },
                { french: "dix", vietnamese: "mười" },
                { french: "onze", vietnamese: "mười một" },
                { french: "douze", vietnamese: "mười hai" },
                { french: "treize", vietnamese: "mười ba" },
                { french: "quatorze", vietnamese: "mười bốn" },
                { french: "quinze", vietnamese: "mười lăm" },
                { french: "seize", vietnamese: "mười sáu" },
                { french: "dix-sept", vietnamese: "mười bảy" },
                { french: "dix-huit", vietnamese: "mười tám" },
                { french: "dix-neuf", vietnamese: "mười chín" },
                { french: "vingt", vietnamese: "hai mươi" }
            ]
        },
        {
            id: "family",
            title: "Famille",
            words: [
                { french: "père", vietnamese: "bố" },
                { french: "mère", vietnamese: "mẹ" },
                { french: "frère", vietnamese: "anh/em trai" },
                { french: "sœur", vietnamese: "chị/em gái" },
                { french: "grand-père", vietnamese: "ông" },
                { french: "grand-mère", vietnamese: "bà" },
                { french: "oncle", vietnamese: "chú/bác" },
                { french: "tante", vietnamese: "cô/dì" },
                { french: "cousin", vietnamese: "anh/em họ (nam)" },
                { french: "cousine", vietnamese: "chị/em họ (nữ)" }
            ]
        },
        {
            id: "food",
            title: "Nourriture",
            words: [
                { french: "pain", vietnamese: "bánh mì" },
                { french: "lait", vietnamese: "sữa" },
                { french: "eau", vietnamese: "nước" },
                { french: "jus", vietnamese: "nước ép" },
                { french: "pomme", vietnamese: "táo" },
                { french: "banane", vietnamese: "chuối" },
                { french: "orange", vietnamese: "cam" },
                { french: "gâteau", vietnamese: "bánh ngọt" },
                { french: "chocolat", vietnamese: "sô-cô-la" },
                { french: "poulet", vietnamese: "gà" },
                { french: "riz", vietnamese: "cơm" },
                { french: "poisson", vietnamese: "cá" },
                { french: "viande", vietnamese: "thịt" },
                { french: "légumes", vietnamese: "rau" },
                { french: "fruits", vietnamese: "trái cây" },
                { french: "croissant", vietnamese: "bánh sừng bò" }
            ]
        },
        {
            id: "school",
            title: "École",
            words: [
                { french: "école", vietnamese: "trường học" },
                { french: "classe", vietnamese: "lớp học" },
                { french: "livre", vietnamese: "sách" },
                { french: "cahier", vietnamese: "vở" },
                { french: "stylo", vietnamese: "bút" },
                { french: "crayon", vietnamese: "bút chì" },
                { french: "gomme", vietnamese: "tẩy" },
                { french: "règle", vietnamese: "thước" },
                { french: "sac", vietnamese: "cặp" },
                { french: "tableau", vietnamese: "bảng" },
                { french: "maître/maîtresse", vietnamese: "thầy/cô giáo" },
                { french: "élève", vietnamese: "học sinh" }
            ]
        },
        {
            id: "actions",
            title: "Actions",
            words: [
                { french: "manger", vietnamese: "ăn" },
                { french: "boire", vietnamese: "uống" },
                { french: "dormir", vietnamese: "ngủ" },
                { french: "se réveiller", vietnamese: "thức dậy" },
                { french: "se laver", vietnamese: "rửa/tắm" },
                { french: "s'habiller", vietnamese: "mặc quần áo" },
                { french: "aller", vietnamese: "đi" },
                { french: "jouer", vietnamese: "chơi" },
                { french: "étudier", vietnamese: "học" },
                { french: "lire", vietnamese: "đọc" },
                { french: "écrire", vietnamese: "viết" },
                { french: "dessiner", vietnamese: "vẽ" },
                { french: "chanter", vietnamese: "hát" },
                { french: "danser", vietnamese: "nhảy" }
            ]
        }
    ]
};

// Function to load vocabulary content
function loadVocabularyContent() {
    const contentArea = document.getElementById('unitContentArea');
    
    // Create container
    const container = document.createElement('div');
    container.className = 'section-container';
    
    // Add section title
    container.innerHTML = `
        <h3 class="section-title">
            <i class="fas fa-book me-2"></i> Vocabulaire - Từ Vựng
        </h3>
        <p class="text-muted mb-4">Học và ôn tập các từ vựng tiếng Pháp cơ bản theo chủ đề.</p>
    `;
    
    // Create tabs for categories
    const tabsContainer = document.createElement('div');
    tabsContainer.innerHTML = `
        <ul class="nav nav-tabs" id="vocabularyTabs" role="tablist">
            ${vocabularyData.categories.map((category, index) => `
                <li class="nav-item" role="presentation">
                    <button class="nav-link ${index === 0 ? 'active' : ''}" 
                            id="tab-${category.id}" 
                            data-bs-toggle="tab" 
                            data-bs-target="#content-${category.id}" 
                            type="button" 
                            role="tab" 
                            aria-controls="content-${category.id}" 
                            aria-selected="${index === 0 ? 'true' : 'false'}">
                        ${category.title}
                    </button>
                </li>
            `).join('')}
        </ul>
    `;
    
    // Create tab content
    const tabContent = document.createElement('div');
    tabContent.className = 'tab-content mt-3';
    
    // Add content for each category
    vocabularyData.categories.forEach((category, index) => {
        const categoryContent = document.createElement('div');
        categoryContent.className = `tab-pane fade ${index === 0 ? 'show active' : ''}`;
        categoryContent.id = `content-${category.id}`;
        categoryContent.setAttribute('role', 'tabpanel');
        categoryContent.setAttribute('aria-labelledby', `tab-${category.id}`);
        
        // Add table of words
        const wordsTable = document.createElement('div');
        wordsTable.className = 'table-responsive';
        wordsTable.innerHTML = `
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Français</th>
                        <th>Tiếng Việt</th>
                        <th>Écouter</th>
                    </tr>
                </thead>
                <tbody>
                    ${category.words.map(word => `
                        <tr>
                            <td>${word.french}</td>
                            <td>${word.vietnamese}</td>
                            <td>
                                <button class="btn btn-sm btn-outline-primary speak-btn" data-text="${word.french}">
                                    <i class="fas fa-volume-up"></i>
                                </button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        
        // Add practice button
        const practiceButton = document.createElement('button');
        practiceButton.className = 'btn btn-primary mt-3';
        practiceButton.innerHTML = '<i class="fas fa-gamepad me-2"></i>Luyện tập từ vựng';
        practiceButton.addEventListener('click', () => createVocabularyQuiz(category));
        
        categoryContent.appendChild(wordsTable);
        categoryContent.appendChild(practiceButton);
        
        // Add quiz container
        const quizContainer = document.createElement('div');
        quizContainer.id = `quiz-${category.id}`;
        quizContainer.className = 'quiz-container mt-4 d-none';
        
        categoryContent.appendChild(quizContainer);
        tabContent.appendChild(categoryContent);
    });
    
    container.appendChild(tabsContainer);
    container.appendChild(tabContent);
    
    // Add direct tab click handlers
    setTimeout(() => {
        const tabButtons = document.querySelectorAll('#vocabularyTabs button');
        
        // Add click event listeners to each tab button
        tabButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                
                // Remove active class from all tabs and hide all panes
                tabButtons.forEach(tab => {
                    tab.classList.remove('active');
                    tab.setAttribute('aria-selected', 'false');
                    
                    // Get the target pane ID
                    const targetId = tab.getAttribute('data-bs-target') || tab.getAttribute('href');
                    const targetPane = document.querySelector(targetId);
                    if (targetPane) {
                        targetPane.classList.remove('show');
                        targetPane.classList.remove('active');
                    }
                });
                
                // Activate the clicked tab
                button.classList.add('active');
                button.setAttribute('aria-selected', 'true');
                
                // Show the corresponding content pane
                const targetId = button.getAttribute('data-bs-target') || button.getAttribute('href');
                const targetPane = document.querySelector(targetId);
                if (targetPane) {
                    targetPane.classList.add('show');
                    targetPane.classList.add('active');
                }
            });
        });
        
        // Ensure the first tab is active by default
        if (tabButtons.length > 0 && vocabularyData.categories.length > 0) {
            const firstTab = tabButtons[0];
            const firstPane = document.querySelector(`#content-${vocabularyData.categories[0].id}`);
            
            if (firstTab && firstPane) {
                firstTab.classList.add('active');
                firstTab.setAttribute('aria-selected', 'true');
                
                firstPane.classList.add('show');
                firstPane.classList.add('active');
            }
        }
    }, 100);
    
    contentArea.appendChild(container);
}

// Function to create vocabulary quiz
function createVocabularyQuiz(category) {
    const quizContainer = document.getElementById(`quiz-${category.id}`);
    
    // Show quiz container
    quizContainer.classList.remove('d-none');
    
    // Shuffle words and select 5 random words
    const shuffledWords = [...category.words].sort(() => 0.5 - Math.random()).slice(0, 5);
    
    // Create quiz content
    quizContainer.innerHTML = `
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h5 class="mb-0">Quiz: ${category.title}</h5>
            </div>
            <div class="card-body">
                <form id="quizForm-${category.id}">
                    ${shuffledWords.map((word, index) => {
                        // Randomly decide whether to ask French->Vietnamese or Vietnamese->French
                        const isFreToVi = Math.random() > 0.5;
                        
                        // Create options including the correct answer and random distractors
                        let options = [];
                        
                        if (isFreToVi) {
                            // Correct answer
                            options.push({ value: word.vietnamese, correct: true });
                            
                            // Add random distractors from the same category
                            const distractors = category.words
                                .filter(w => w.vietnamese !== word.vietnamese)
                                .sort(() => 0.5 - Math.random())
                                .slice(0, 3)
                                .map(w => ({ value: w.vietnamese, correct: false }));
                            
                            options = [...options, ...distractors].sort(() => 0.5 - Math.random());
                            
                            return `
                                <div class="mb-4">
                                    <p class="fw-bold">
                                        ${index + 1}. Que signifie "${word.french}" en vietnamien?
                                        <button type="button" class="btn btn-sm btn-outline-primary speak-btn ms-2" data-text="${word.french}">
                                            <i class="fas fa-volume-up"></i>
                                        </button>
                                    </p>
                                    <div class="options">
                                        ${options.map((option, optIndex) => `
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="question-${index}" 
                                                    id="option-${index}-${optIndex}" value="${option.value}" 
                                                    data-correct="${option.correct}">
                                                <label class="form-check-label" for="option-${index}-${optIndex}">
                                                    ${option.value}
                                                </label>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                        } else {
                            // Correct answer
                            options.push({ value: word.french, correct: true });
                            
                            // Add random distractors from the same category
                            const distractors = category.words
                                .filter(w => w.french !== word.french)
                                .sort(() => 0.5 - Math.random())
                                .slice(0, 3)
                                .map(w => ({ value: w.french, correct: false }));
                            
                            options = [...options, ...distractors].sort(() => 0.5 - Math.random());
                            
                            return `
                                <div class="mb-4">
                                    <p class="fw-bold">${index + 1}. Comment dit-on "${word.vietnamese}" en français?</p>
                                    <div class="options">
                                        ${options.map((option, optIndex) => `
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="question-${index}" 
                                                    id="option-${index}-${optIndex}" value="${option.value}" 
                                                    data-correct="${option.correct}">
                                                <label class="form-check-label" for="option-${index}-${optIndex}">
                                                    ${option.value}
                                                    <button type="button" class="btn btn-sm btn-outline-primary speak-btn ms-2" data-text="${option.value}">
                                                        <i class="fas fa-volume-up"></i>
                                                    </button>
                                                </label>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                        }
                    }).join('')}
                    
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                        <button type="button" class="btn btn-success" id="checkQuiz-${category.id}">
                            <i class="fas fa-check-circle me-2"></i>Vérifier
                        </button>
                        <button type="button" class="btn btn-secondary" id="resetQuiz-${category.id}">
                            <i class="fas fa-redo me-2"></i>Recommencer
                        </button>
                    </div>
                    
                    <div class="feedback-area mt-3" id="quizFeedback-${category.id}"></div>
                </form>
            </div>
        </div>
    `;
    
    // Scroll to quiz
    quizContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Add event listeners for quiz buttons
    document.getElementById(`checkQuiz-${category.id}`).addEventListener('click', () => checkVocabularyQuiz(category.id));
    document.getElementById(`resetQuiz-${category.id}`).addEventListener('click', () => resetVocabularyQuiz(category));
}

// Function to check vocabulary quiz
function checkVocabularyQuiz(categoryId) {
    const form = document.getElementById(`quizForm-${categoryId}`);
    const questions = form.querySelectorAll('[name^="question-"]');
    const feedbackArea = document.getElementById(`quizFeedback-${categoryId}`);
    
    let correctCount = 0;
    const totalQuestions = new Set(Array.from(questions).map(q => q.name)).size;
    
    // Group by question name
    const questionGroups = {};
    questions.forEach(question => {
        const name = question.name;
        if (!questionGroups[name]) {
            questionGroups[name] = [];
        }
        questionGroups[name].push(question);
    });
    
    // Check each question
    Object.keys(questionGroups).forEach(questionName => {
        const questionOptions = questionGroups[questionName];
        const selectedOption = questionOptions.find(option => option.checked);
        
        // Mark all options
        questionOptions.forEach(option => {
            const label = option.nextElementSibling;
            
            if (option.dataset.correct === 'true') {
                // Correct answer
                option.parentElement.classList.add('bg-success', 'text-white', 'p-2', 'rounded', 'mb-1');
            } else if (option === selectedOption) {
                // Incorrect selected answer
                option.parentElement.classList.add('bg-danger', 'text-white', 'p-2', 'rounded', 'mb-1');
            }
        });
        
        // Count correct answers
        if (selectedOption && selectedOption.dataset.correct === 'true') {
            correctCount++;
        }
    });
    
    // Display feedback
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    
    let feedbackMessage = '';
    let feedbackClass = '';
    
    if (percentage >= 80) {
        feedbackMessage = `<strong>Excellent!</strong> Tu as ${correctCount} réponses correctes sur ${totalQuestions}.`;
        feedbackClass = 'alert alert-success';
    } else if (percentage >= 60) {
        feedbackMessage = `<strong>Bien!</strong> Tu as ${correctCount} réponses correctes sur ${totalQuestions}.`;
        feedbackClass = 'alert alert-info';
    } else {
        feedbackMessage = `<strong>Continue à pratiquer!</strong> Tu as ${correctCount} réponses correctes sur ${totalQuestions}.`;
        feedbackClass = 'alert alert-warning';
    }
    
    feedbackArea.innerHTML = `<div class="${feedbackClass}">${feedbackMessage}</div>`;
    feedbackArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Function to reset vocabulary quiz
function resetVocabularyQuiz(category) {
    // Re-create quiz with new random questions
    createVocabularyQuiz(category);
} 
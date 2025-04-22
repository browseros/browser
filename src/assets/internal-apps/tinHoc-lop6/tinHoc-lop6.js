// Biến toàn cục để theo dõi bài đang hiển thị
let currentUnit = null;

// Khởi tạo ứng dụng khi trang được tải
document.addEventListener('DOMContentLoaded', initializeApp);

/**
 * Khởi tạo ứng dụng
 */
function initializeApp() {
    console.log("Initializing application...");
    console.log("Total lessons:", lessons.length);
    
    createUnitGrid();
    setupEventListeners();
}

/**
 * Thiết lập các event listener cho các nút điều khiển
 */
function setupEventListeners() {
    console.log("Setting up event listeners...");
    
    // Gắn sự kiện cho nút quay lại
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', showUnitGrid);
        console.log("Back button event listener added");
    } else {
        console.warn("Back button not found");
    }
    
    // Gắn sự kiện cho các nút section
    const sectionButtons = document.querySelectorAll('.section-button');
    if (sectionButtons && sectionButtons.length > 0) {
        const sections = ['theory', 'exercise', 'fillin', 'practice'];
        
        sectionButtons.forEach((button, index) => {
            if (index < sections.length) {
                button.addEventListener('click', () => {
                    console.log(`Showing section: ${sections[index]}`);
                    showSection(sections[index]);
                });
            }
        });
        
        console.log(`${sectionButtons.length} section buttons event listeners added`);
    } else {
        console.warn("Section buttons not found");
    }
}

/**
 * Tạo lưới hiển thị các bài học
 */
function createUnitGrid() {
    console.log("Creating unit grid...");
    const unitGrid = document.getElementById('unitGrid');
    if (!unitGrid) {
        console.error("Unit grid element not found");
        return;
    }
    
    unitGrid.innerHTML = '';
    
    // Sắp xếp bài học theo thứ tự tăng dần của ID
    const sortedLessons = [...lessons].sort((a, b) => a.id - b.id);
    
    sortedLessons.forEach(unit => {
        const unitCard = document.createElement('div');
        unitCard.className = 'unit-card';
        unitCard.innerHTML = `<h3>Bài ${unit.id}</h3><p>${unit.title.replace(`Bài ${unit.id}: `, '')}</p>`;
        unitCard.addEventListener('click', () => {
            console.log(`Showing unit ${unit.id}: ${unit.title}`);
            showUnit(unit);
        });
        unitGrid.appendChild(unitCard);
    });
    
    console.log(`${sortedLessons.length} unit cards created`);
}

/**
 * Hiển thị nội dung của một bài học
 * @param {Object} unit - Bài học cần hiển thị
 */
function showUnit(unit) {
    console.log(`Displaying unit ${unit.id}`);
    currentUnit = unit;
    
    const unitGrid = document.getElementById('unitGrid');
    const unitContent = document.getElementById('unitContent');
    const unitTitle = document.getElementById('unitTitle');
    
    if (unitGrid) unitGrid.style.display = 'none';
    if (unitContent) unitContent.classList.add('active');
    if (unitTitle) unitTitle.textContent = unit.title;
    
    // Mặc định hiển thị phần lý thuyết
    showSection('theory');
}

/**
 * Quay lại màn hình danh sách bài học
 */
function showUnitGrid() {
    console.log("Returning to unit grid");
    const unitGrid = document.getElementById('unitGrid');
    const unitContent = document.getElementById('unitContent');
    
    if (unitGrid) unitGrid.style.display = 'grid';
    if (unitContent) unitContent.classList.remove('active');
    
    currentUnit = null;
}

// Hiển thị nội dung tương ứng với phần được chọn
function showSection(section) {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = '';

    if (!currentUnit) return;

    switch (section) {
        case 'theory':
            showTheoryContent(contentArea);
            break;
        case 'exercise':
            showExerciseContent(contentArea);
            break;
        case 'fillin':
            showFillInContent(contentArea);
            break;
        case 'practice':
            showPracticeContent(contentArea);
            break;
    }
}

// Hiển thị phần lý thuyết
function showTheoryContent(contentArea) {
    if (currentUnit.theory && currentUnit.theory.content) {
        contentArea.innerHTML = currentUnit.theory.content;
    } else {
        contentArea.innerHTML = '<p>Không có nội dung lý thuyết cho bài học này.</p>';
    }
}

// Hiển thị phần bài tập trắc nghiệm
function showExerciseContent(contentArea) {
    if (!currentUnit.exercise || currentUnit.exercise.length === 0) {
        contentArea.innerHTML = '<p>Không có bài tập trắc nghiệm cho bài học này.</p>';
        return;
    }

    let exerciseHTML = `
        <div class="exercise-container">
            <h3>Bài tập trắc nghiệm</h3>
            <form id="exerciseForm">
    `;

    currentUnit.exercise.forEach((exercise, index) => {
        exerciseHTML += `
            <div class="exercise-item">
                <p><strong>Câu ${index + 1}:</strong> ${exercise.question}</p>
                <div class="options">
        `;

        exercise.options.forEach(option => {
            exerciseHTML += `
                <label class="option-label">
                    <input type="radio" name="question${index}" value="${option.id}">
                    ${option.id}. ${option.text}
                </label>
            `;
        });

        exerciseHTML += `
                </div>
                <div class="explanation" id="explanation${index}">
                    <p><strong>Giải thích:</strong> ${exercise.explanation}</p>
                </div>
                <button type="button" class="show-explanation-btn" onclick="toggleExplanation(${index})">Hiển thị giải thích</button>
            </div>
        `;
    });

    exerciseHTML += `
            <button type="button" onclick="checkExercises()" class="btn btn-primary mt-3">Kiểm tra đáp án</button>
            </form>
        </div>
    `;

    contentArea.innerHTML = exerciseHTML;
}

// Hiển thị phần điền từ vào chỗ trống
function showFillInContent(contentArea) {
    if (!currentUnit.fillin || currentUnit.fillin.length === 0) {
        contentArea.innerHTML = '<p>Không có bài tập điền từ vào chỗ trống cho bài học này.</p>';
        return;
    }

    let fillinHTML = `
        <div class="fillin-container">
            <h3>Điền từ vào chỗ trống</h3>
            <form id="fillinForm">
    `;

    currentUnit.fillin.forEach((section, sectionIndex) => {
        fillinHTML += `
            <div class="quiz-section">
                <p><strong>${section.instruction}</strong></p>
        `;

        section.questions.forEach((question, questionIndex) => {
            fillinHTML += `
                <div class="quiz-item">
                    <p>${question.question}</p>
                    <div class="answer-inputs">
            `;

            // Tạo các ô input dựa trên số lượng đáp án cần điền
            for (let i = 0; i < question.answer.length; i++) {
                fillinHTML += `
                    <div class="mb-2">
                        <input type="text" class="form-control" id="answer-${sectionIndex}-${questionIndex}-${i}">
                    </div>
                `;
            }

            fillinHTML += `
                    </div>
                    <div class="explanation" id="fillin-explanation-${sectionIndex}-${questionIndex}">
                        <p><strong>Giải thích:</strong> ${question.explanation}</p>
                    </div>
                    <button type="button" class="show-explanation-btn" onclick="toggleFillinExplanation(${sectionIndex}, ${questionIndex})">Hiển thị giải thích</button>
                </div>
            `;
        });

        fillinHTML += `</div>`;
    });

    fillinHTML += `
            <button type="button" onclick="checkFillIn()" class="btn btn-primary mt-3">Kiểm tra đáp án</button>
            </form>
        </div>
    `;

    contentArea.innerHTML = fillinHTML;
}

// Hiển thị phần thực hành
function showPracticeContent(contentArea) {
    if (currentUnit.practice && currentUnit.practice.content) {
        contentArea.innerHTML = currentUnit.practice.content;
    } else {
        contentArea.innerHTML = '<p>Không có nội dung thực hành cho bài học này.</p>';
    }
} 
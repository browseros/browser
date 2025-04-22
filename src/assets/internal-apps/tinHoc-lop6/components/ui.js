// Các chức năng xử lý giao diện người dùng

/**
 * Hiển thị nội dung tương ứng với phần được chọn
 * @param {string} section - Phần nội dung cần hiển thị (theory, exercise, fillin, practice)
 */
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

/**
 * Hiển thị phần lý thuyết
 * @param {HTMLElement} contentArea - Vùng nội dung cần hiển thị
 */
function showTheoryContent(contentArea) {
    if (currentUnit.theory && currentUnit.theory.content) {
        contentArea.innerHTML = currentUnit.theory.content;
    } else {
        contentArea.innerHTML = '<p>Không có nội dung lý thuyết cho bài học này.</p>';
    }
}

/**
 * Hiển thị phần bài tập trắc nghiệm
 * @param {HTMLElement} contentArea - Vùng nội dung cần hiển thị
 */
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

/**
 * Hiển thị phần điền từ vào chỗ trống
 * @param {HTMLElement} contentArea - Vùng nội dung cần hiển thị
 */
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

/**
 * Hiển thị phần thực hành
 * @param {HTMLElement} contentArea - Vùng nội dung cần hiển thị
 */
function showPracticeContent(contentArea) {
    if (currentUnit.practice && currentUnit.practice.content) {
        contentArea.innerHTML = currentUnit.practice.content;
    } else {
        contentArea.innerHTML = '<p>Không có nội dung thực hành cho bài học này.</p>';
    }
} 
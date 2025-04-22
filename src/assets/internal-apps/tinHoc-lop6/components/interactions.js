// Các chức năng tương tác với nội dung học tập

/**
 * Hiển thị/ẩn giải thích cho bài tập trắc nghiệm
 * @param {number} index - Chỉ số của câu hỏi
 */
function toggleExplanation(index) {
    const explanation = document.getElementById(`explanation${index}`);
    if (explanation.style.display === 'block') {
        explanation.style.display = 'none';
    } else {
        explanation.style.display = 'block';
    }
}

/**
 * Hiển thị/ẩn giải thích cho bài tập điền từ
 * @param {number} sectionIndex - Chỉ số của phần
 * @param {number} questionIndex - Chỉ số của câu hỏi
 */
function toggleFillinExplanation(sectionIndex, questionIndex) {
    const explanation = document.getElementById(`fillin-explanation-${sectionIndex}-${questionIndex}`);
    if (explanation.style.display === 'block') {
        explanation.style.display = 'none';
    } else {
        explanation.style.display = 'block';
    }
}

/**
 * Kiểm tra đáp án trắc nghiệm
 */
function checkExercises() {
    const form = document.getElementById('exerciseForm');
    let score = 0;
    
    currentUnit.exercise.forEach((exercise, index) => {
        const selectedOption = form.querySelector(`input[name="question${index}"]:checked`);
        const explanation = document.getElementById(`explanation${index}`);
        
        if (selectedOption) {
            if (selectedOption.value === exercise.answer) {
                score++;
                explanation.innerHTML = `<p class="text-success"><strong>Chính xác!</strong> ${exercise.explanation}</p>`;
            } else {
                explanation.innerHTML = `<p class="text-danger"><strong>Sai!</strong> Đáp án đúng là ${exercise.answer}. ${exercise.explanation}</p>`;
            }
            explanation.style.display = 'block';
        }
    });
    
    alert(`Bạn đã trả lời đúng ${score}/${currentUnit.exercise.length} câu hỏi.`);
}

/**
 * Kiểm tra đáp án điền từ
 */
function checkFillIn() {
    let totalQuestions = 0;
    let correctAnswers = 0;
    
    currentUnit.fillin.forEach((section, sectionIndex) => {
        section.questions.forEach((question, questionIndex) => {
            totalQuestions++;
            let correct = true;
            
            for (let i = 0; i < question.answer.length; i++) {
                const input = document.getElementById(`answer-${sectionIndex}-${questionIndex}-${i}`);
                const userAnswer = input ? input.value.trim().toLowerCase() : '';
                const correctAnswer = question.answer[i].toLowerCase();
                
                if (userAnswer !== correctAnswer) {
                    correct = false;
                    input.style.border = '2px solid #dc3545';
                } else {
                    input.style.border = '2px solid #28a745';
                }
            }
            
            if (correct) {
                correctAnswers++;
            }
            
            const explanation = document.getElementById(`fillin-explanation-${sectionIndex}-${questionIndex}`);
            explanation.style.display = 'block';
        });
    });
    
    alert(`Bạn đã trả lời đúng ${correctAnswers}/${totalQuestions} câu hỏi.`);
} 
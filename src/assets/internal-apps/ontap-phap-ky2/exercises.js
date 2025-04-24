// Function to load revision content
function loadRevisionContent() {
    const contentArea = document.getElementById('unitContentArea');
    
    // Create container
    const container = document.createElement('div');
    container.className = 'section-container';
    
    // Add section title
    container.innerHTML = `
        <h3 class="section-title">
            <i class="fas fa-clipboard-check me-2"></i> Révision Complète - Ôn tập tổng hợp
        </h3>
        <p class="text-muted mb-4">Ôn tập tổng hợp các kỹ năng đã học, chuẩn bị sẵn sàng cho kỳ thi.</p>
    `;
    
    // Create revision content
    const revisionContent = document.createElement('div');
    revisionContent.className = 'row';
    
    // Add each skill card
    const skills = [
        {
            title: "Compréhension Orale",
            description: "Nghe hiểu (10 điểm)",
            icon: "fas fa-headphones",
            color: "#5D9CEC",
            function: "loadListeningContent"
        },
        {
            title: "Compréhension des Écrits",
            description: "Đọc hiểu (10 điểm)",
            icon: "fas fa-book-open",
            color: "#FC6E51",
            function: "loadReadingContent"
        },
        {
            title: "Expression Écrite",
            description: "Viết (10 điểm)",
            icon: "fas fa-pen",
            color: "#FFCE54",
            function: "loadWritingContent"
        },
        {
            title: "Connaissances Linguistiques",
            description: "Kiến thức ngôn ngữ (10 điểm)",
            icon: "fas fa-language",
            color: "#A0D468",
            function: "loadGrammarContent"
        },
        {
            title: "Expression Orale",
            description: "Nói (10 điểm)",
            icon: "fas fa-microphone",
            color: "#ED5565",
            function: "loadSpeakingContent"
        },
        {
            title: "Vocabulaire",
            description: "Từ vựng",
            icon: "fas fa-book",
            color: "#AC92EC",
            function: "loadVocabularyContent"
        }
    ];
    
    skills.forEach(skill => {
        const skillCol = document.createElement('div');
        skillCol.className = 'col-md-4 mb-4';
        
        skillCol.innerHTML = `
            <div class="card h-100 shadow-sm" style="border-top: 4px solid ${skill.color};">
                <div class="card-body text-center">
                    <div class="mb-3">
                        <i class="${skill.icon}" style="font-size: 2.5rem; color: ${skill.color};"></i>
                    </div>
                    <h4 class="card-title">${skill.title}</h4>
                    <p class="card-text">${skill.description}</p>
                    <button class="btn btn-outline-primary mt-3 skill-btn" data-function="${skill.function}">
                        <i class="fas fa-arrow-right me-2"></i>Học ngay
                    </button>
                </div>
            </div>
        `;
        
        revisionContent.appendChild(skillCol);
    });
    
    // Add practice test
    const practiceCol = document.createElement('div');
    practiceCol.className = 'col-12 mt-4';
    
    practiceCol.innerHTML = `
        <div class="card shadow-sm" style="border-left: 4px solid #5D9CEC;">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <h4 class="card-title">Đề thi thử</h4>
                        <p class="card-text">Làm bài thi thử để đánh giá khả năng và chuẩn bị cho kỳ thi thực tế.</p>
                    </div>
                    <div class="col-md-4 text-end">
                        <button class="btn btn-primary" id="startPracticeTestBtn">
                            <i class="fas fa-play-circle me-2"></i>Bắt đầu ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    revisionContent.appendChild(practiceCol);
    
    // Add practice test container
    const practiceTestContainer = document.createElement('div');
    practiceTestContainer.id = 'practiceTestContainer';
    practiceTestContainer.className = 'mt-4 d-none';
    
    revisionContent.appendChild(practiceTestContainer);
    
    container.appendChild(revisionContent);
    contentArea.appendChild(container);
    
    // Add event listeners for skill buttons
    document.querySelectorAll('.skill-btn').forEach(button => {
        button.addEventListener('click', function() {
            const functionName = this.dataset.function;
            if (typeof window[functionName] === 'function') {
                window[functionName]();
            }
        });
    });
    
    // Add event listener for practice test button
    document.getElementById('startPracticeTestBtn').addEventListener('click', startPracticeTest);
}

// Function to start practice test
function startPracticeTest() {
    const practiceTestContainer = document.getElementById('practiceTestContainer');
    
    // Show practice test container
    practiceTestContainer.classList.remove('d-none');
    
    // Create practice test content
    practiceTestContainer.innerHTML = `
        <div class="card shadow-sm mb-4">
            <div class="card-header bg-primary text-white">
                <h4 class="mb-0">Đề Thi Thử - Tiếng Pháp Học Kỳ 2</h4>
            </div>
            <div class="card-body">
                <div class="alert alert-info">
                    <i class="fas fa-info-circle me-2"></i>
                    <strong>Hướng dẫn:</strong> Đề thi gồm 5 phần tương ứng với 5 kỹ năng, mỗi phần 10 điểm. Thời gian làm bài: 60 phút.
                </div>
                
                <ul class="nav nav-tabs" id="practiceTestTabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="listening-tab" data-bs-toggle="tab" data-bs-target="#listening-content" 
                                type="button" role="tab" aria-controls="listening-content" aria-selected="true">
                            <i class="fas fa-headphones me-1"></i> Nghe hiểu
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="reading-tab" data-bs-toggle="tab" data-bs-target="#reading-content" 
                                type="button" role="tab" aria-controls="reading-content" aria-selected="false">
                            <i class="fas fa-book-open me-1"></i> Đọc hiểu
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="writing-tab" data-bs-toggle="tab" data-bs-target="#writing-content" 
                                type="button" role="tab" aria-controls="writing-content" aria-selected="false">
                            <i class="fas fa-pen me-1"></i> Viết
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="grammar-tab" data-bs-toggle="tab" data-bs-target="#grammar-content" 
                                type="button" role="tab" aria-controls="grammar-content" aria-selected="false">
                            <i class="fas fa-language me-1"></i> Ngữ pháp
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="speaking-tab" data-bs-toggle="tab" data-bs-target="#speaking-content" 
                                type="button" role="tab" aria-controls="speaking-content" aria-selected="false">
                            <i class="fas fa-microphone me-1"></i> Nói
                        </button>
                    </li>
                </ul>
                
                <div class="tab-content p-3 border border-top-0 rounded-bottom" id="practiceTestTabContent">
                    <div class="tab-pane fade show active" id="listening-content" role="tabpanel" aria-labelledby="listening-tab">
                        <h5 class="mb-3">I. Compréhension Orale (10 pts)</h5>
                        <div id="practice-listening-content"></div>
                    </div>
                    <div class="tab-pane fade" id="reading-content" role="tabpanel" aria-labelledby="reading-tab">
                        <h5 class="mb-3">II. Compréhension des Écrits (10 pts)</h5>
                        <div id="practice-reading-content"></div>
                    </div>
                    <div class="tab-pane fade" id="writing-content" role="tabpanel" aria-labelledby="writing-tab">
                        <h5 class="mb-3">III. Expression Écrite (10 pts)</h5>
                        <div id="practice-writing-content"></div>
                    </div>
                    <div class="tab-pane fade" id="grammar-content" role="tabpanel" aria-labelledby="grammar-tab">
                        <h5 class="mb-3">IV. Connaissances Linguistiques (10 pts)</h5>
                        <div id="practice-grammar-content"></div>
                    </div>
                    <div class="tab-pane fade" id="speaking-content" role="tabpanel" aria-labelledby="speaking-tab">
                        <h5 class="mb-3">V. Expression Orale (10 pts)</h5>
                        <div id="practice-speaking-content"></div>
                    </div>
                </div>
                
                <div class="d-flex justify-content-between mt-4">
                    <button class="btn btn-secondary" id="resetPracticeTestBtn">
                        <i class="fas fa-redo me-2"></i>Làm lại
                    </button>
                    <button class="btn btn-success" id="submitPracticeTestBtn">
                        <i class="fas fa-check-circle me-2"></i>Nộp bài
                    </button>
                </div>
                
                <div id="practiceTestResult" class="mt-4 d-none"></div>
            </div>
        </div>
    `;
    
    // Load Bootstrap Tab functionality
    const scriptElement = document.createElement('script');
    scriptElement.innerHTML = `
        document.addEventListener('DOMContentLoaded', function() {
            const triggerTabList = [].slice.call(document.querySelectorAll('#practiceTestTabs button'));
            triggerTabList.forEach(function(triggerEl) {
                const tabTrigger = new bootstrap.Tab(triggerEl);
                
                triggerEl.addEventListener('click', function(event) {
                    event.preventDefault();
                    tabTrigger.show();
                });
            });
        });
    `;
    
    practiceTestContainer.appendChild(scriptElement);
    
    // Scroll to practice test
    practiceTestContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Load practice test content for each section
    loadPracticeListeningContent();
    loadPracticeReadingContent();
    loadPracticeWritingContent();
    loadPracticeGrammarContent();
    loadPracticeSpeakingContent();
    
    // Add event listeners for practice test buttons
    document.getElementById('resetPracticeTestBtn').addEventListener('click', resetPracticeTest);
    document.getElementById('submitPracticeTestBtn').addEventListener('click', submitPracticeTest);
}

// Function to load practice listening content - simplified version
function loadPracticeListeningContent() {
    const container = document.getElementById('practice-listening-content');
    
    // Get one exercise from the listening module
    const listeningExercise = listeningData.exercises[0];
    
    // Create a simplified version
    const exercise = createListeningExercise(listeningExercise);
    
    container.appendChild(exercise);
}

// Function to load practice reading content
function loadPracticeReadingContent() {
    const container = document.getElementById('practice-reading-content');
    
    // Get one exercise from the reading module
    const readingExercise = readingData.exercises[0];
    
    // Create a simplified version
    const exercise = createReadingExercise(readingExercise);
    
    container.appendChild(exercise);
}

// Function to load practice writing content
function loadPracticeWritingContent() {
    const container = document.getElementById('practice-writing-content');
    
    // Get selected exercises from writing module
    const timeWritingExercise = writingData.exercises.find(ex => ex.id === 'writing1');
    const completePhraseExercise = writingData.exercises.find(ex => ex.id === 'writing2');
    
    // Create simplified versions
    const timeExercise = createWritingExercise(timeWritingExercise);
    const phraseExercise = createWritingExercise(completePhraseExercise);
    
    container.appendChild(timeExercise);
    container.appendChild(phraseExercise);
}

// Function to load practice grammar content
function loadPracticeGrammarContent() {
    const container = document.getElementById('practice-grammar-content');
    
    // Get one exercise from the grammar module
    const grammarExercise = grammarData.exercises[1]; // Revision 2A
    
    // Create a simplified version
    const exercise = createGrammarExercise(grammarExercise);
    
    container.appendChild(exercise);
}

// Function to load practice speaking content
function loadPracticeSpeakingContent() {
    const container = document.getElementById('practice-speaking-content');
    
    // Get selected exercise from speaking module
    const speakingExercise = speakingData.exercises[0]; // Text reading
    
    // Create a simplified version
    const exercise = createSpeakingExercise(speakingExercise);
    
    container.appendChild(exercise);
}

// Function to reset practice test
function resetPracticeTest() {
    // Simply reload the practice test
    startPracticeTest();
}

// Function to submit practice test
function submitPracticeTest() {
    const resultContainer = document.getElementById('practiceTestResult');
    
    // Show result container
    resultContainer.classList.remove('d-none');
    
    // Calculate scores - in a real application, this would check all the answers
    // For demo purposes, we'll just simulate some scores
    
    const listeningScore = 8;
    const readingScore = 7.5;
    const writingScore = 6;
    const grammarScore = 9;
    const speakingScore = 7;
    
    const totalScore = listeningScore + readingScore + writingScore + grammarScore + speakingScore;
    const percentage = (totalScore / 50) * 100;
    
    // Create result content
    let resultClass = '';
    let resultMessage = '';
    
    if (percentage >= 80) {
        resultClass = 'alert-success';
        resultMessage = 'Xuất sắc! Bạn đã sẵn sàng cho kỳ thi!';
    } else if (percentage >= 65) {
        resultClass = 'alert-info';
        resultMessage = 'Tốt! Tiếp tục ôn tập để cải thiện thêm.';
    } else {
        resultClass = 'alert-warning';
        resultMessage = 'Cần cố gắng thêm! Hãy ôn tập kỹ hơn các phần còn yếu.';
    }
    
    resultContainer.innerHTML = `
        <div class="alert ${resultClass}">
            <h5><i class="fas fa-award me-2"></i>${resultMessage}</h5>
            <p>Tổng điểm: ${totalScore}/50 (${Math.round(percentage)}%)</p>
        </div>
        
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h5 class="mb-0">Kết quả chi tiết</h5>
            </div>
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Kỹ năng</th>
                            <th>Điểm</th>
                            <th>Nhận xét</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><i class="fas fa-headphones me-2"></i>Nghe hiểu</td>
                            <td>${listeningScore}/10</td>
                            <td>Tốt</td>
                        </tr>
                        <tr>
                            <td><i class="fas fa-book-open me-2"></i>Đọc hiểu</td>
                            <td>${readingScore}/10</td>
                            <td>Khá tốt</td>
                        </tr>
                        <tr>
                            <td><i class="fas fa-pen me-2"></i>Viết</td>
                            <td>${writingScore}/10</td>
                            <td>Cần cải thiện</td>
                        </tr>
                        <tr>
                            <td><i class="fas fa-language me-2"></i>Ngữ pháp</td>
                            <td>${grammarScore}/10</td>
                            <td>Rất tốt</td>
                        </tr>
                        <tr>
                            <td><i class="fas fa-microphone me-2"></i>Nói</td>
                            <td>${speakingScore}/10</td>
                            <td>Khá</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="table-primary">
                            <th>Tổng</th>
                            <th>${totalScore}/50</th>
                            <th>${resultMessage}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    `;
    
    // Scroll to result
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
} 
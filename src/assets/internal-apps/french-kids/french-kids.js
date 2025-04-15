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
    },
    {
        id: 7,
        title: "Les vêtements - Quần áo",
        grammar: {
            title: "Ngữ pháp",
            content: [
                {
                    topic: "Tính từ chỉ định",
                    explanation: "Trong tiếng Pháp, tính từ chỉ định phải phù hợp với danh từ về giới và số:",
                    examples: [
                        "Ce pantalon - Cái quần này",
                        "Cette robe - Cái váy này",
                        "Ces chaussures - Những đôi giày này"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "Le pantalon",
                meaning: "Cái quần",
                example: "Je porte un pantalon bleu.",
                exampleMeaning: "Tôi mặc một cái quần màu xanh."
            },
            {
                word: "La robe",
                meaning: "Cái váy",
                example: "Elle porte une belle robe.",
                exampleMeaning: "Cô ấy mặc một cái váy đẹp."
            },
            {
                word: "Le t-shirt",
                meaning: "Áo phông",
                example: "J'aime ce t-shirt rouge.",
                exampleMeaning: "Tôi thích cái áo phông đỏ này."
            },
            {
                word: "Les chaussures",
                meaning: "Giày dép",
                example: "Mes chaussures sont noires.",
                exampleMeaning: "Giày của tôi màu đen."
            },
            {
                word: "Le chapeau",
                meaning: "Cái mũ",
                example: "Il porte un chapeau.",
                exampleMeaning: "Anh ấy đội một cái mũ."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Comment dit-on 'cái váy' en français?",
                options: ["Le pantalon", "La robe", "Le t-shirt", "Les chaussures"],
                correct: 1
            }
        ]
    },
    {
        id: 8,
        title: "L'école - Trường học",
        grammar: {
            title: "Ngữ pháp",
            content: [
                {
                    topic: "Động từ 'être' (là)",
                    explanation: "Động từ 'être' là một trong những động từ quan trọng nhất trong tiếng Pháp:",
                    examples: [
                        "Je suis élève - Tôi là học sinh",
                        "Tu es professeur - Bạn là giáo viên",
                        "Il/Elle est dans la classe - Anh ấy/Cô ấy ở trong lớp"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "L'école",
                meaning: "Trường học",
                example: "Je vais à l'école.",
                exampleMeaning: "Tôi đi học."
            },
            {
                word: "La classe",
                meaning: "Lớp học",
                example: "La classe est grande.",
                exampleMeaning: "Lớp học rộng."
            },
            {
                word: "Le professeur",
                meaning: "Giáo viên",
                example: "Le professeur explique la leçon.",
                exampleMeaning: "Giáo viên giải thích bài học."
            },
            {
                word: "Le livre",
                meaning: "Quyển sách",
                example: "J'ai un livre de français.",
                exampleMeaning: "Tôi có một quyển sách tiếng Pháp."
            },
            {
                word: "Le cahier",
                meaning: "Vở",
                example: "Mon cahier est bleu.",
                exampleMeaning: "Vở của tôi màu xanh."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Où va l'élève?",
                options: ["À la maison", "À l'école", "Au parc", "Au cinéma"],
                correct: 1
            }
        ]
    },
    {
        id: 9,
        title: "La maison - Ngôi nhà",
        grammar: {
            title: "Ngữ pháp",
            content: [
                {
                    topic: "Giới từ chỉ vị trí",
                    explanation: "Các giới từ chỉ vị trí trong tiếng Pháp:",
                    examples: [
                        "Dans la chambre - Trong phòng ngủ",
                        "Sur la table - Trên bàn",
                        "Sous le lit - Dưới giường"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "La maison",
                meaning: "Ngôi nhà",
                example: "Ma maison est grande.",
                exampleMeaning: "Nhà tôi rộng."
            },
            {
                word: "La chambre",
                meaning: "Phòng ngủ",
                example: "Je dors dans ma chambre.",
                exampleMeaning: "Tôi ngủ trong phòng ngủ của tôi."
            },
            {
                word: "La cuisine",
                meaning: "Nhà bếp",
                example: "Ma mère est dans la cuisine.",
                exampleMeaning: "Mẹ tôi đang ở trong bếp."
            },
            {
                word: "Le salon",
                meaning: "Phòng khách",
                example: "Nous regardons la télé dans le salon.",
                exampleMeaning: "Chúng tôi xem tivi trong phòng khách."
            },
            {
                word: "La salle de bain",
                meaning: "Phòng tắm",
                example: "La salle de bain est petite.",
                exampleMeaning: "Phòng tắm nhỏ."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Où est-ce qu'on dort?",
                options: ["Dans la cuisine", "Dans la chambre", "Dans le salon", "Dans la salle de bain"],
                correct: 1
            }
        ]
    },
    {
        id: 10,
        title: "Les activités - Các hoạt động",
        grammar: {
            title: "Ngữ pháp",
            content: [
                {
                    topic: "Động từ nhóm 1 (-er)",
                    explanation: "Các động từ nhóm 1 trong tiếng Pháp kết thúc bằng -er:",
                    examples: [
                        "Jouer (chơi) - Je joue, tu joues, il/elle joue",
                        "Danser (nhảy) - Je danse, tu danses, il/elle danse",
                        "Chanter (hát) - Je chante, tu chantes, il/elle chante"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "Jouer",
                meaning: "Chơi",
                example: "J'aime jouer au football.",
                exampleMeaning: "Tôi thích chơi bóng đá."
            },
            {
                word: "Danser",
                meaning: "Nhảy múa",
                example: "Elle danse très bien.",
                exampleMeaning: "Cô ấy nhảy rất đẹp."
            },
            {
                word: "Chanter",
                meaning: "Hát",
                example: "Nous chantons ensemble.",
                exampleMeaning: "Chúng tôi hát cùng nhau."
            },
            {
                word: "Dessiner",
                meaning: "Vẽ",
                example: "Il dessine un chat.",
                exampleMeaning: "Anh ấy vẽ một con mèo."
            },
            {
                word: "Nager",
                meaning: "Bơi",
                example: "J'aime nager dans la piscine.",
                exampleMeaning: "Tôi thích bơi ở hồ bơi."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Que fait-elle quand elle écoute de la musique?",
                options: ["Elle nage", "Elle danse", "Elle dessine", "Elle chante"],
                correct: 1
            }
        ]
    },
    {
        id: 11,
        title: "La nourriture - Thức ăn",
        grammar: {
            title: "Ngữ pháp",
            content: [
                {
                    topic: "Mạo từ không xác định (un, une, des)",
                    explanation: "Cách sử dụng mạo từ không xác định với thức ăn:",
                    examples: [
                        "Un sandwich - Một cái bánh mì kẹp",
                        "Une pomme - Một quả táo",
                        "Des légumes - Những rau củ"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "Le pain",
                meaning: "Bánh mì",
                example: "Je mange du pain.",
                exampleMeaning: "Tôi ăn bánh mì."
            },
            {
                word: "Le riz",
                meaning: "Cơm",
                example: "Le riz est bon.",
                exampleMeaning: "Cơm ngon."
            },
            {
                word: "La soupe",
                meaning: "Súp",
                example: "J'aime la soupe chaude.",
                exampleMeaning: "Tôi thích súp nóng."
            },
            {
                word: "Le poulet",
                meaning: "Thịt gà",
                example: "Le poulet est délicieux.",
                exampleMeaning: "Thịt gà rất ngon."
            },
            {
                word: "Les légumes",
                meaning: "Rau củ",
                example: "Je mange beaucoup de légumes.",
                exampleMeaning: "Tôi ăn nhiều rau củ."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Qu'est-ce qui est chaud?",
                options: ["Le pain", "La soupe", "Le riz", "Les légumes"],
                correct: 1
            }
        ]
    },
    {
        id: 12,
        title: "Le temps - Thời tiết",
        grammar: {
            title: "Ngữ pháp",
            content: [
                {
                    topic: "Cấu trúc 'Il fait'",
                    explanation: "Để nói về thời tiết, chúng ta thường dùng cấu trúc 'Il fait':",
                    examples: [
                        "Il fait chaud - Trời nóng",
                        "Il fait froid - Trời lạnh",
                        "Il fait beau - Trời đẹp"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "Le soleil",
                meaning: "Mặt trời",
                example: "Le soleil brille.",
                exampleMeaning: "Mặt trời tỏa sáng."
            },
            {
                word: "La pluie",
                meaning: "Mưa",
                example: "Il pleut aujourd'hui.",
                exampleMeaning: "Hôm nay trời mưa."
            },
            {
                word: "Le vent",
                meaning: "Gió",
                example: "Le vent est fort.",
                exampleMeaning: "Gió mạnh."
            },
            {
                word: "La neige",
                meaning: "Tuyết",
                example: "Il neige en hiver.",
                exampleMeaning: "Trời có tuyết vào mùa đông."
            },
            {
                word: "Les nuages",
                meaning: "Mây",
                example: "Il y a des nuages dans le ciel.",
                exampleMeaning: "Có mây trên bầu trời."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Quel temps fait-il quand le soleil brille?",
                options: ["Il pleut", "Il fait beau", "Il neige", "Il fait froid"],
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
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
                        "À bientôt! - Hẹn gặp lại",
                        "Salut! - Chào (thân mật)",
                        "Bonne nuit! - Chúc ngủ ngon"
                    ]
                },
                {
                    topic: "Giới thiệu bản thân",
                    explanation: "Cấu trúc cơ bản để giới thiệu bản thân:",
                    examples: [
                        "Je m'appelle... - Tôi tên là...",
                        "Comment tu t'appelles? - Bạn tên là gì?",
                        "Enchanté(e) - Rất vui được gặp",
                        "Comment allez-vous? - Bạn khỏe không? (lịch sự)",
                        "Comment vas-tu? - Bạn khỏe không? (thân mật)"
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
            },
            {
                word: "Salut",
                meaning: "Chào (thân mật)",
                example: "Salut, ça va?",
                exampleMeaning: "Chào, khỏe không?"
            },
            {
                word: "Bonsoir",
                meaning: "Chào buổi tối",
                example: "Bonsoir tout le monde!",
                exampleMeaning: "Chào buổi tối mọi người!"
            },
            {
                word: "Bonne nuit",
                meaning: "Chúc ngủ ngon",
                example: "Bonne nuit, fais de beaux rêves!",
                exampleMeaning: "Chúc ngủ ngon, mơ đẹp nhé!"
            },
            {
                word: "Enchanté(e)",
                meaning: "Rất vui được gặp",
                example: "Enchanté de faire votre connaissance.",
                exampleMeaning: "Rất vui được làm quen với bạn."
            },
            {
                word: "À bientôt",
                meaning: "Hẹn gặp lại",
                example: "À bientôt, mon ami!",
                exampleMeaning: "Hẹn gặp lại, bạn của tôi!"
            },
            {
                word: "De rien",
                meaning: "Không có gì",
                example: "De rien, je vous en prie.",
                exampleMeaning: "Không có gì, rất vui được giúp."
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
            },
            {
                type: "multiple-choice",
                question: "Quelle expression utilise-t-on le soir?",
                options: ["Bonjour", "Bonsoir", "Au revoir", "Salut"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Comment dit-on 'Chúc ngủ ngon' en français?",
                options: ["Bonsoir", "Au revoir", "Bonne nuit", "À bientôt"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Que répond-on quand quelqu'un dit 'Merci'?",
                options: ["Bonjour", "Au revoir", "De rien", "S'il vous plaît"],
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
                        "5 - cinq",
                        "6 - six",
                        "7 - sept",
                        "8 - huit",
                        "9 - neuf",
                        "10 - dix"
                    ]
                },
                {
                    topic: "Số từ 11-20",
                    explanation: "Các số từ 11-20 có cách đọc riêng:",
                    examples: [
                        "11 - onze",
                        "12 - douze",
                        "13 - treize",
                        "14 - quatorze",
                        "15 - quinze",
                        "16 - seize",
                        "17 - dix-sept",
                        "18 - dix-huit",
                        "19 - dix-neuf",
                        "20 - vingt"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "Zéro",
                meaning: "Số không",
                example: "Il a zéro faute.",
                exampleMeaning: "Nó không có lỗi nào."
            },
            {
                word: "Un/Une",
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
            },
            {
                word: "Dix",
                meaning: "Mười",
                example: "J'ai dix ans.",
                exampleMeaning: "Tôi mười tuổi."
            },
            {
                word: "Quinze",
                meaning: "Mười lăm",
                example: "Il est quinze heures.",
                exampleMeaning: "Bây giờ là 15 giờ."
            },
            {
                word: "Vingt",
                meaning: "Hai mươi",
                example: "J'ai vingt euros.",
                exampleMeaning: "Tôi có 20 euro."
            },
            {
                word: "Premier/Première",
                meaning: "Thứ nhất",
                example: "C'est la première fois.",
                exampleMeaning: "Đây là lần đầu tiên."
            },
            {
                word: "Deuxième",
                meaning: "Thứ hai",
                example: "Je suis deuxième.",
                exampleMeaning: "Tôi đứng thứ hai."
            },
            {
                word: "Dernier/Dernière",
                meaning: "Cuối cùng",
                example: "C'est le dernier jour.",
                exampleMeaning: "Đây là ngày cuối cùng."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Comment dit-on 'hai' en français?",
                options: ["Un", "Deux", "Trois", "Quatre"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Quel nombre vient après 'quatre'?",
                options: ["Trois", "Cinq", "Six", "Sept"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Comment dit-on '15' en français?",
                options: ["Douze", "Treize", "Quatorze", "Quinze"],
                correct: 3
            },
            {
                type: "multiple-choice",
                question: "Quel est le dernier nombre avant 'vingt'?",
                options: ["Dix-sept", "Dix-huit", "Dix-neuf", "Vingt"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Comment dit-on 'Thứ nhất' en français?",
                options: ["Deuxième", "Dernier", "Premier", "Trois"],
                correct: 2
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
                        "Des crayons verts - Những cây bút chì màu xanh lá",
                        "Une robe blanche - Một cái váy trắng",
                        "Un chat noir - Một con mèo đen"
                    ]
                },
                {
                    topic: "Cấu trúc 'De quelle couleur est...?'",
                    explanation: "Để hỏi về màu sắc của một vật, chúng ta dùng cấu trúc này:",
                    examples: [
                        "De quelle couleur est le ciel? - Bầu trời màu gì?",
                        "De quelle couleur sont les fleurs? - Những bông hoa màu gì?",
                        "C'est de quelle couleur? - Cái này màu gì?"
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
                word: "Bleu/Bleue",
                meaning: "Màu xanh dương",
                example: "Le ciel est bleu.",
                exampleMeaning: "Bầu trời màu xanh."
            },
            {
                word: "Vert/Verte",
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
                word: "Noir/Noire",
                meaning: "Màu đen",
                example: "Le chat est noir.",
                exampleMeaning: "Con mèo màu đen."
            },
            {
                word: "Blanc/Blanche",
                meaning: "Màu trắng",
                example: "La neige est blanche.",
                exampleMeaning: "Tuyết màu trắng."
            },
            {
                word: "Rose",
                meaning: "Màu hồng",
                example: "La fleur est rose.",
                exampleMeaning: "Bông hoa màu hồng."
            },
            {
                word: "Violet/Violette",
                meaning: "Màu tím",
                example: "Le raisin est violet.",
                exampleMeaning: "Nho màu tím."
            },
            {
                word: "Orange",
                meaning: "Màu cam",
                example: "La carotte est orange.",
                exampleMeaning: "Cà rốt màu cam."
            },
            {
                word: "Marron",
                meaning: "Màu nâu",
                example: "Le chocolat est marron.",
                exampleMeaning: "Sô cô la màu nâu."
            },
            {
                word: "Gris/Grise",
                meaning: "Màu xám",
                example: "Les nuages sont gris.",
                exampleMeaning: "Mây màu xám."
            },
            {
                word: "Multicolore",
                meaning: "Nhiều màu",
                example: "L'arc-en-ciel est multicolore.",
                exampleMeaning: "Cầu vồng có nhiều màu."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "De quelle couleur est le ciel?",
                options: ["Rouge", "Bleu", "Vert", "Jaune"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Quelle est la couleur de la neige?",
                options: ["Noir", "Blanc", "Gris", "Rose"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "De quelle couleur est l'herbe?",
                options: ["Bleu", "Rouge", "Vert", "Jaune"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "La carotte est de quelle couleur?",
                options: ["Orange", "Violet", "Rose", "Marron"],
                correct: 0
            },
            {
                type: "multiple-choice",
                question: "De quelle couleur est le chocolat?",
                options: ["Noir", "Blanc", "Marron", "Rouge"],
                correct: 2
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
                        "Les animaux - Các con vật",
                        "Un lion (đực) / Une lionne (cái) - Con sư tử",
                        "Un tigre (đực) / Une tigresse (cái) - Con hổ"
                    ]
                },
                {
                    topic: "Động từ liên quan đến động vật",
                    explanation: "Một số động từ thường dùng khi nói về động vật:",
                    examples: [
                        "Manger (ăn) - Le chat mange une souris",
                        "Dormir (ngủ) - Le chat dort sur le lit",
                        "Courir (chạy) - Le chien court dans le jardin",
                        "Voler (bay) - L'oiseau vole dans le ciel",
                        "Nager (bơi) - Le poisson nage dans l'eau"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "Le chat/La chatte",
                meaning: "Con mèo",
                example: "Le chat dort sur le canapé.",
                exampleMeaning: "Con mèo ngủ trên ghế sofa."
            },
            {
                word: "Le chien/La chienne",
                meaning: "Con chó",
                example: "Le chien joue avec la balle.",
                exampleMeaning: "Con chó chơi với quả bóng."
            },
            {
                word: "L'oiseau",
                meaning: "Con chim",
                example: "L'oiseau chante dans l'arbre.",
                exampleMeaning: "Con chim hót trên cây."
            },
            {
                word: "Le poisson",
                meaning: "Con cá",
                example: "Le poisson rouge nage dans l'aquarium.",
                exampleMeaning: "Con cá vàng bơi trong bể cá."
            },
            {
                word: "Le lapin/La lapine",
                meaning: "Con thỏ",
                example: "Le lapin mange une carotte.",
                exampleMeaning: "Con thỏ ăn củ cà rốt."
            },
            {
                word: "La vache",
                meaning: "Con bò",
                example: "La vache donne du lait.",
                exampleMeaning: "Con bò cho sữa."
            },
            {
                word: "Le cochon",
                meaning: "Con lợn",
                example: "Le cochon joue dans la boue.",
                exampleMeaning: "Con lợn chơi trong bùn."
            },
            {
                word: "La poule",
                meaning: "Con gà mái",
                example: "La poule pond des œufs.",
                exampleMeaning: "Con gà mái đẻ trứng."
            },
            {
                word: "Le lion/La lionne",
                meaning: "Con sư tử",
                example: "Le lion est le roi des animaux.",
                exampleMeaning: "Sư tử là chúa tể muôn loài."
            },
            {
                word: "L'éléphant",
                meaning: "Con voi",
                example: "L'éléphant est très grand.",
                exampleMeaning: "Con voi rất to."
            },
            {
                word: "La girafe",
                meaning: "Con hươu cao cổ",
                example: "La girafe mange des feuilles.",
                exampleMeaning: "Con hươu cao cổ ăn lá cây."
            },
            {
                word: "Le singe",
                meaning: "Con khỉ",
                example: "Le singe grimpe aux arbres.",
                exampleMeaning: "Con khỉ trèo cây."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Quel animal donne du lait?",
                options: ["Le chat", "La vache", "Le chien", "Le poisson"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Quel animal pond des œufs?",
                options: ["La poule", "Le chat", "Le chien", "Le lapin"],
                correct: 0
            },
            {
                type: "multiple-choice",
                question: "Quel animal est le roi des animaux?",
                options: ["L'éléphant", "Le singe", "Le lion", "La girafe"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Quel animal grimpe aux arbres?",
                options: ["La vache", "Le singe", "Le poisson", "La poule"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Quel animal mange une carotte?",
                options: ["Le chat", "Le chien", "Le lapin", "L'oiseau"],
                correct: 2
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
                        "Des oranges - Những quả cam",
                        "Je mange des fruits - Tôi ăn trái cây",
                        "Les fruits sont bons pour la santé - Trái cây tốt cho sức khỏe"
                    ]
                },
                {
                    topic: "Cách diễn đạt sở thích với trái cây",
                    explanation: "Để nói về sở thích đối với trái cây, chúng ta dùng động từ 'aimer':",
                    examples: [
                        "J'aime les pommes - Tôi thích táo",
                        "Je n'aime pas les bananes - Tôi không thích chuối",
                        "Il adore les fraises - Anh ấy rất thích dâu tây",
                        "Elle préfère les oranges - Cô ấy thích cam hơn",
                        "Nous aimons tous les fruits - Chúng tôi thích tất cả các loại trái cây"
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
            },
            {
                word: "La poire",
                meaning: "Quả lê",
                example: "La poire est sucrée.",
                exampleMeaning: "Quả lê ngọt."
            },
            {
                word: "La pêche",
                meaning: "Quả đào",
                example: "J'adore les pêches juteuses.",
                exampleMeaning: "Tôi rất thích đào mọng nước."
            },
            {
                word: "L'ananas",
                meaning: "Quả dứa",
                example: "L'ananas est tropical.",
                exampleMeaning: "Dứa là trái cây nhiệt đới."
            },
            {
                word: "La mangue",
                meaning: "Quả xoài",
                example: "La mangue est délicieuse.",
                exampleMeaning: "Quả xoài rất ngon."
            },
            {
                word: "Le citron",
                meaning: "Quả chanh",
                example: "Le citron est acide.",
                exampleMeaning: "Quả chanh chua."
            },
            {
                word: "La pastèque",
                meaning: "Quả dưa hấu",
                example: "La pastèque est rafraîchissante.",
                exampleMeaning: "Dưa hấu rất mát."
            },
            {
                word: "Le kiwi",
                meaning: "Quả kiwi",
                example: "Le kiwi est riche en vitamines.",
                exampleMeaning: "Kiwi giàu vitamin."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Quel fruit est jaune?",
                options: ["La pomme", "La banane", "L'orange", "La fraise"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Quel fruit est acide?",
                options: ["La poire", "La pêche", "Le citron", "La mangue"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Quel fruit est tropical?",
                options: ["L'ananas", "La pomme", "La poire", "Le raisin"],
                correct: 0
            },
            {
                type: "multiple-choice",
                question: "Quel fruit est rafraîchissant?",
                options: ["Le kiwi", "La pastèque", "La fraise", "La banane"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Quel fruit est violet?",
                options: ["La pomme", "La banane", "Le raisin", "L'orange"],
                correct: 2
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
                    topic: "Tính từ chỉ định với quần áo",
                    explanation: "Trong tiếng Pháp, tính từ chỉ định phải phù hợp với danh từ về giới và số:",
                    examples: [
                        "Ce pantalon - Cái quần này",
                        "Cette robe - Cái váy này",
                        "Ces chaussures - Những đôi giày này",
                        "Ce t-shirt - Cái áo phông này",
                        "Cette jupe - Cái váy ngắn này"
                    ]
                },
                {
                    topic: "Động từ 'Porter' (mặc/đeo)",
                    explanation: "Động từ 'porter' được dùng để nói về việc mặc hoặc đeo quần áo:",
                    examples: [
                        "Je porte une robe - Tôi mặc váy",
                        "Il porte un pantalon - Anh ấy mặc quần",
                        "Elle porte des chaussures - Cô ấy đi giày",
                        "Nous portons des manteaux - Chúng tôi mặc áo khoác",
                        "Tu portes une écharpe - Bạn đeo khăn quàng cổ"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "Le pantalon",
                meaning: "Cái quần dài",
                example: "Je porte un pantalon bleu.",
                exampleMeaning: "Tôi mặc một cái quần dài màu xanh."
            },
            {
                word: "La robe",
                meaning: "Cái váy dài",
                example: "Elle porte une belle robe rouge.",
                exampleMeaning: "Cô ấy mặc một cái váy dài đẹp màu đỏ."
            },
            {
                word: "Le t-shirt",
                meaning: "Áo phông",
                example: "J'aime ce t-shirt blanc.",
                exampleMeaning: "Tôi thích cái áo phông trắng này."
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
                example: "Il porte un chapeau élégant.",
                exampleMeaning: "Anh ấy đội một cái mũ sang trọng."
            },
            {
                word: "La jupe",
                meaning: "Váy ngắn",
                example: "Sa jupe est très jolie.",
                exampleMeaning: "Váy ngắn của cô ấy rất đẹp."
            },
            {
                word: "Le manteau",
                meaning: "Áo khoác dài",
                example: "Le manteau est chaud.",
                exampleMeaning: "Áo khoác dài rất ấm."
            },
            {
                word: "L'écharpe",
                meaning: "Khăn quàng cổ",
                example: "Je porte une écharpe en hiver.",
                exampleMeaning: "Tôi đeo khăn quàng cổ vào mùa đông."
            },
            {
                word: "Les gants",
                meaning: "Găng tay",
                example: "Les gants protègent du froid.",
                exampleMeaning: "Găng tay bảo vệ khỏi cái lạnh."
            },
            {
                word: "Les chaussettes",
                meaning: "Tất",
                example: "Mes chaussettes sont blanches.",
                exampleMeaning: "Tất của tôi màu trắng."
            },
            {
                word: "Le pull",
                meaning: "Áo len",
                example: "Ce pull est très confortable.",
                exampleMeaning: "Áo len này rất thoải mái."
            },
            {
                word: "La chemise",
                meaning: "Áo sơ mi",
                example: "Il porte une chemise bleue.",
                exampleMeaning: "Anh ấy mặc áo sơ mi xanh."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Que porte-t-on quand il fait froid?",
                options: ["Le t-shirt", "Le manteau", "La jupe", "Les chaussettes"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Qu'est-ce qu'on porte aux pieds?",
                options: ["Les gants", "L'écharpe", "Les chaussures", "Le chapeau"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Quel vêtement est long et pour les femmes?",
                options: ["La jupe", "Le pantalon", "La robe", "Le t-shirt"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Que porte-t-on autour du cou quand il fait froid?",
                options: ["Les gants", "L'écharpe", "Le chapeau", "Les chaussettes"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Quel vêtement porte-t-on sur le haut du corps?",
                options: ["Le pantalon", "La jupe", "La chemise", "Les chaussures"],
                correct: 2
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
                        "Il/Elle est dans la classe - Anh ấy/Cô ấy ở trong lớp",
                        "Nous sommes à l'école - Chúng tôi ở trường",
                        "Vous êtes étudiants - Các bạn là sinh viên",
                        "Ils/Elles sont en classe - Họ đang ở trong lớp"
                    ]
                },
                {
                    topic: "Các giới từ chỉ nơi chốn trong trường học",
                    explanation: "Sử dụng giới từ để chỉ vị trí trong trường học:",
                    examples: [
                        "Dans la classe - Trong lớp học",
                        "À l'école - Ở trường",
                        "À la bibliothèque - Ở thư viện",
                        "Dans la cour - Ở sân trường",
                        "Au gymnase - Ở phòng tập thể dục"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "L'école",
                meaning: "Trường học",
                example: "Je vais à l'école tous les jours.",
                exampleMeaning: "Tôi đi học mỗi ngày."
            },
            {
                word: "La classe",
                meaning: "Lớp học",
                example: "Notre classe est au premier étage.",
                exampleMeaning: "Lớp học của chúng tôi ở tầng một."
            },
            {
                word: "Le professeur",
                meaning: "Giáo viên",
                example: "Le professeur explique la leçon de français.",
                exampleMeaning: "Giáo viên giải thích bài học tiếng Pháp."
            },
            {
                word: "L'élève",
                meaning: "Học sinh",
                example: "Les élèves écoutent attentivement.",
                exampleMeaning: "Các học sinh chăm chú lắng nghe."
            },
            {
                word: "Le livre",
                meaning: "Quyển sách",
                example: "J'ai oublié mon livre de mathématiques.",
                exampleMeaning: "Tôi đã quên sách toán của mình."
            },
            {
                word: "Le cahier",
                meaning: "Vở",
                example: "J'écris dans mon cahier.",
                exampleMeaning: "Tôi viết trong vở của mình."
            },
            {
                word: "La bibliothèque",
                meaning: "Thư viện",
                example: "Je vais à la bibliothèque pour étudier.",
                exampleMeaning: "Tôi đến thư viện để học bài."
            },
            {
                word: "Le tableau",
                meaning: "Bảng",
                example: "Le professeur écrit au tableau.",
                exampleMeaning: "Giáo viên viết lên bảng."
            },
            {
                word: "La cour",
                meaning: "Sân trường",
                example: "Les enfants jouent dans la cour.",
                exampleMeaning: "Bọn trẻ chơi ở sân trường."
            },
            {
                word: "Le stylo",
                meaning: "Bút mực",
                example: "J'écris avec un stylo bleu.",
                exampleMeaning: "Tôi viết bằng bút mực màu xanh."
            },
            {
                word: "Le crayon",
                meaning: "Bút chì",
                example: "Je dessine avec un crayon.",
                exampleMeaning: "Tôi vẽ bằng bút chì."
            },
            {
                word: "La gomme",
                meaning: "Cục tẩy",
                example: "J'utilise la gomme pour effacer.",
                exampleMeaning: "Tôi dùng tẩy để xóa."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Où est-ce qu'on étudie?",
                options: ["À la maison", "À l'école", "Au parc", "Au cinéma"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Qu'est-ce qu'on utilise pour écrire?",
                options: ["La gomme", "Le livre", "Le stylo", "Le tableau"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Qui explique la leçon?",
                options: ["L'élève", "Le professeur", "Le livre", "Le cahier"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Où est-ce qu'on lit des livres?",
                options: ["Dans la cour", "Dans la classe", "À la bibliothèque", "Au gymnase"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Qu'est-ce qu'on utilise pour effacer?",
                options: ["Le stylo", "Le crayon", "La gomme", "Le livre"],
                correct: 2
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
                        "Sous le lit - Dưới giường",
                        "À côté de la fenêtre - Bên cạnh cửa sổ",
                        "Devant la maison - Trước nhà",
                        "Derrière le jardin - Sau vườn"
                    ]
                },
                {
                    topic: "Động từ 'Habiter' (ở/sống)",
                    explanation: "Động từ 'habiter' được dùng để nói về nơi ở:",
                    examples: [
                        "J'habite dans une maison - Tôi sống trong một ngôi nhà",
                        "Il habite dans un appartement - Anh ấy sống trong một căn hộ",
                        "Nous habitons au premier étage - Chúng tôi sống ở tầng một",
                        "Ils habitent près du parc - Họ sống gần công viên",
                        "Tu habites loin de l'école - Bạn sống xa trường"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "La maison",
                meaning: "Ngôi nhà",
                example: "Ma maison est grande et belle.",
                exampleMeaning: "Nhà tôi to và đẹp."
            },
            {
                word: "La chambre",
                meaning: "Phòng ngủ",
                example: "Ma chambre est au deuxième étage.",
                exampleMeaning: "Phòng ngủ của tôi ở tầng hai."
            },
            {
                word: "La cuisine",
                meaning: "Nhà bếp",
                example: "Ma mère cuisine dans la cuisine.",
                exampleMeaning: "Mẹ tôi nấu ăn trong bếp."
            },
            {
                word: "Le salon",
                meaning: "Phòng khách",
                example: "La famille se réunit dans le salon.",
                exampleMeaning: "Gia đình tụ họp trong phòng khách."
            },
            {
                word: "La salle de bain",
                meaning: "Phòng tắm",
                example: "Je me lave dans la salle de bain.",
                exampleMeaning: "Tôi tắm trong phòng tắm."
            },
            {
                word: "Le jardin",
                meaning: "Khu vườn",
                example: "Les fleurs poussent dans le jardin.",
                exampleMeaning: "Hoa mọc trong vườn."
            },
            {
                word: "La fenêtre",
                meaning: "Cửa sổ",
                example: "J'ouvre la fenêtre le matin.",
                exampleMeaning: "Tôi mở cửa sổ vào buổi sáng."
            },
            {
                word: "La porte",
                meaning: "Cửa ra vào",
                example: "Je ferme la porte à clé.",
                exampleMeaning: "Tôi khóa cửa."
            },
            {
                word: "L'escalier",
                meaning: "Cầu thang",
                example: "Je monte l'escalier.",
                exampleMeaning: "Tôi lên cầu thang."
            },
            {
                word: "Le garage",
                meaning: "Nhà để xe",
                example: "La voiture est dans le garage.",
                exampleMeaning: "Xe hơi ở trong nhà để xe."
            },
            {
                word: "Le balcon",
                meaning: "Ban công",
                example: "Je lis sur le balcon.",
                exampleMeaning: "Tôi đọc sách trên ban công."
            },
            {
                word: "La cave",
                meaning: "Tầng hầm",
                example: "Nous gardons le vin dans la cave.",
                exampleMeaning: "Chúng tôi giữ rượu trong tầng hầm."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Où est-ce qu'on dort?",
                options: ["Dans la cuisine", "Dans la chambre", "Dans le salon", "Dans la salle de bain"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Où est-ce qu'on cuisine?",
                options: ["Dans le salon", "Dans la chambre", "Dans la cuisine", "Dans le garage"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Où est-ce qu'on gare la voiture?",
                options: ["Dans la cave", "Dans le salon", "Dans le jardin", "Dans le garage"],
                correct: 3
            },
            {
                type: "multiple-choice",
                question: "Où est-ce qu'on peut voir les fleurs?",
                options: ["Dans la cuisine", "Dans le jardin", "Dans la chambre", "Dans le garage"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Par où est-ce qu'on monte à l'étage?",
                options: ["Par la porte", "Par la fenêtre", "Par l'escalier", "Par le balcon"],
                correct: 2
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
                    explanation: "Các động từ nhóm 1 trong tiếng Pháp kết thúc bằng -er và được chia như sau:",
                    examples: [
                        "Je (tôi): -e",
                        "Tu (bạn): -es",
                        "Il/Elle (anh ấy/cô ấy): -e",
                        "Nous (chúng tôi): -ons",
                        "Vous (các bạn): -ez",
                        "Ils/Elles (họ): -ent"
                    ]
                },
                {
                    topic: "Cách diễn đạt sở thích với hoạt động",
                    explanation: "Để nói về sở thích đối với các hoạt động, chúng ta dùng cấu trúc 'aimer + verbe':",
                    examples: [
                        "J'aime danser - Tôi thích nhảy múa",
                        "Je n'aime pas courir - Tôi không thích chạy",
                        "Il adore nager - Anh ấy rất thích bơi",
                        "Elle préfère lire - Cô ấy thích đọc sách hơn",
                        "Nous aimons jouer au football - Chúng tôi thích chơi bóng đá"
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
            },
            {
                word: "Courir",
                meaning: "Chạy",
                example: "Je cours tous les matins.",
                exampleMeaning: "Tôi chạy bộ mỗi sáng."
            },
            {
                word: "Lire",
                meaning: "Đọc sách",
                example: "Elle lit un livre intéressant.",
                exampleMeaning: "Cô ấy đọc một quyển sách thú vị."
            },
            {
                word: "Écrire",
                meaning: "Viết",
                example: "J'écris une lettre à mon ami.",
                exampleMeaning: "Tôi viết thư cho bạn tôi."
            },
            {
                word: "Marcher",
                meaning: "Đi bộ",
                example: "Nous marchons dans le parc.",
                exampleMeaning: "Chúng tôi đi bộ trong công viên."
            },
            {
                word: "Cuisiner",
                meaning: "Nấu ăn",
                example: "Ma mère cuisine très bien.",
                exampleMeaning: "Mẹ tôi nấu ăn rất ngon."
            },
            {
                word: "Dormir",
                meaning: "Ngủ",
                example: "Je dors huit heures par nuit.",
                exampleMeaning: "Tôi ngủ tám tiếng mỗi đêm."
            },
            {
                word: "Étudier",
                meaning: "Học",
                example: "J'étudie le français.",
                exampleMeaning: "Tôi học tiếng Pháp."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Que fait-elle quand elle écoute de la musique?",
                options: ["Elle nage", "Elle danse", "Elle dessine", "Elle chante"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Quelle activité fait-on dans la piscine?",
                options: ["Courir", "Danser", "Nager", "Dormir"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Que fait-on avec un livre?",
                options: ["Cuisiner", "Lire", "Danser", "Nager"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Quelle activité fait-on le matin pour faire du sport?",
                options: ["Dormir", "Lire", "Courir", "Chanter"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Que fait-on dans la cuisine?",
                options: ["Dormir", "Nager", "Danser", "Cuisiner"],
                correct: 3
            }
        ]
    },
    {
        id: 11,
        title: "La nourriture - Thức ăn",
        sections: ["grammar", "vocabulary", "exercises"],
        grammar: {
            title: "Ngữ pháp",
            content: [
                {
                    topic: "Mạo từ không xác định (un, une, des)",
                    explanation: "Cách sử dụng mạo từ không xác định với thức ăn:",
                    examples: [
                        "Un sandwich - Một cái bánh mì kẹp",
                        "Une pomme - Một quả táo",
                        "Des légumes - Những rau củ",
                        "Un verre d'eau - Một ly nước",
                        "Une tasse de café - Một tách cà phê",
                        "Des fruits frais - Những trái cây tươi"
                    ]
                },
                {
                    topic: "Mạo từ bộ phận (du, de la, de l', des)",
                    explanation: "Dùng để chỉ một phần của thức ăn hoặc đồ uống:",
                    examples: [
                        "Je mange du pain - Tôi ăn bánh mì",
                        "Je bois de l'eau - Tôi uống nước",
                        "Elle prend de la soupe - Cô ấy ăn súp",
                        "Nous voulons des fruits - Chúng tôi muốn trái cây"
                    ]
                },
                {
                    topic: "Động từ liên quan đến ăn uống",
                    explanation: "Các động từ thường dùng khi nói về ăn uống:",
                    examples: [
                        "Manger (ăn) - Je mange du riz",
                        "Boire (uống) - Tu bois du lait",
                        "Préparer (chuẩn bị) - Elle prépare le dîner",
                        "Cuisiner (nấu ăn) - Nous cuisinons ensemble",
                        "Goûter (nếm) - Je goûte la soupe"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "Le pain",
                meaning: "Bánh mì",
                example: "Je mange du pain frais.",
                exampleMeaning: "Tôi ăn bánh mì tươi."
            },
            {
                word: "Le riz",
                meaning: "Cơm",
                example: "Le riz est bien cuit.",
                exampleMeaning: "Cơm được nấu chín tới."
            },
            {
                word: "La soupe",
                meaning: "Súp",
                example: "J'aime la soupe aux légumes.",
                exampleMeaning: "Tôi thích súp rau."
            },
            {
                word: "Le poulet",
                meaning: "Thịt gà",
                example: "Le poulet rôti est délicieux.",
                exampleMeaning: "Gà nướng rất ngon."
            },
            {
                word: "Les légumes",
                meaning: "Rau củ",
                example: "Je mange beaucoup de légumes frais.",
                exampleMeaning: "Tôi ăn nhiều rau củ tươi."
            },
            {
                word: "Le poisson",
                meaning: "Cá",
                example: "Le poisson grillé est bon.",
                exampleMeaning: "Cá nướng ngon."
            },
            {
                word: "La viande",
                meaning: "Thịt",
                example: "Je préfère la viande rouge.",
                exampleMeaning: "Tôi thích thịt đỏ hơn."
            },
            {
                word: "Les pâtes",
                meaning: "Mì ống",
                example: "Les pâtes à la sauce tomate.",
                exampleMeaning: "Mì ống với sốt cà chua."
            },
            {
                word: "Le fromage",
                meaning: "Phô mai",
                example: "Le fromage français est célèbre.",
                exampleMeaning: "Phô mai Pháp nổi tiếng."
            },
            {
                word: "Le beurre",
                meaning: "Bơ",
                example: "Je mets du beurre sur mon pain.",
                exampleMeaning: "Tôi phết bơ lên bánh mì."
            },
            {
                word: "Les œufs",
                meaning: "Trứng",
                example: "J'aime les œufs brouillés.",
                exampleMeaning: "Tôi thích trứng bác."
            },
            {
                word: "Le lait",
                meaning: "Sữa",
                example: "Je bois du lait chaud.",
                exampleMeaning: "Tôi uống sữa nóng."
            },
            {
                word: "Le café",
                meaning: "Cà phê",
                example: "Je prends un café le matin.",
                exampleMeaning: "Tôi uống cà phê vào buổi sáng."
            },
            {
                word: "Le thé",
                meaning: "Trà",
                example: "Elle boit du thé vert.",
                exampleMeaning: "Cô ấy uống trà xanh."
            },
            {
                word: "Le jus",
                meaning: "Nước ép",
                example: "Le jus d'orange est frais.",
                exampleMeaning: "Nước cam tươi."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Qu'est-ce qui est chaud le matin?",
                options: ["Le pain", "La soupe", "Le café", "Les légumes"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Quel aliment est fait avec du lait?",
                options: ["Le pain", "Le fromage", "Les pâtes", "Le poulet"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Quelle boisson est souvent verte?",
                options: ["Le café", "Le lait", "Le thé", "Le jus"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Qu'est-ce qu'on met sur le pain?",
                options: ["Le thé", "Le beurre", "Le jus", "Les œufs"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Quel aliment est une viande?",
                options: ["Le riz", "Les légumes", "Le poulet", "Les pâtes"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Quelle boisson est faite avec des oranges?",
                options: ["Le thé", "Le café", "Le lait", "Le jus d'orange"],
                correct: 3
            },
            {
                type: "multiple-choice",
                question: "Qu'est-ce qui est souvent servi avec de la sauce tomate?",
                options: ["Le pain", "Les pâtes", "Le fromage", "Le poulet"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Quel aliment peut être brouillé?",
                options: ["Le pain", "Le fromage", "Les œufs", "Le poisson"],
                correct: 2
            }
        ]
    },
    {
        id: 12,
        title: "Le temps - Thời tiết",
        sections: ["grammar", "vocabulary", "exercises"],
        grammar: {
            title: "Ngữ pháp",
            content: [
                {
                    topic: "Cấu trúc 'Il fait'",
                    explanation: "Để nói về thời tiết, chúng ta thường dùng cấu trúc 'Il fait':",
                    examples: [
                        "Il fait chaud - Trời nóng",
                        "Il fait froid - Trời lạnh",
                        "Il fait beau - Trời đẹp",
                        "Il fait mauvais - Trời xấu",
                        "Il fait du vent - Trời có gió",
                        "Il fait du soleil - Trời nắng"
                    ]
                },
                {
                    topic: "Cấu trúc 'Il y a'",
                    explanation: "Dùng để nói về hiện tượng thời tiết:",
                    examples: [
                        "Il y a du soleil - Có nắng",
                        "Il y a des nuages - Có mây",
                        "Il y a du brouillard - Có sương mù",
                        "Il y a de l'orage - Có bão",
                        "Il y a du vent - Có gió"
                    ]
                },
                {
                    topic: "Động từ thời tiết",
                    explanation: "Một số động từ đặc biệt để nói về thời tiết:",
                    examples: [
                        "Il pleut - Trời mưa",
                        "Il neige - Trời tuyết rơi",
                        "Il gèle - Trời đóng băng",
                        "Le soleil brille - Mặt trời tỏa sáng",
                        "Le vent souffle - Gió thổi"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "Le soleil",
                meaning: "Mặt trời",
                example: "Le soleil brille dans le ciel.",
                exampleMeaning: "Mặt trời tỏa sáng trên bầu trời."
            },
            {
                word: "La pluie",
                meaning: "Mưa",
                example: "Il pleut beaucoup aujourd'hui.",
                exampleMeaning: "Hôm nay trời mưa nhiều."
            },
            {
                word: "Le vent",
                meaning: "Gió",
                example: "Le vent souffle fort.",
                exampleMeaning: "Gió thổi mạnh."
            },
            {
                word: "La neige",
                meaning: "Tuyết",
                example: "La neige tombe en hiver.",
                exampleMeaning: "Tuyết rơi vào mùa đông."
            },
            {
                word: "Les nuages",
                meaning: "Mây",
                example: "Les nuages gris annoncent la pluie.",
                exampleMeaning: "Mây xám báo hiệu trời sắp mưa."
            },
            {
                word: "L'orage",
                meaning: "Bão",
                example: "L'orage est très violent.",
                exampleMeaning: "Cơn bão rất dữ dội."
            },
            {
                word: "Le brouillard",
                meaning: "Sương mù",
                example: "Le brouillard réduit la visibilité.",
                exampleMeaning: "Sương mù làm giảm tầm nhìn."
            },
            {
                word: "La température",
                meaning: "Nhiệt độ",
                example: "La température est agréable.",
                exampleMeaning: "Nhiệt độ dễ chịu."
            },
            {
                word: "La chaleur",
                meaning: "Sự nóng",
                example: "La chaleur est intense en été.",
                exampleMeaning: "Cái nóng rất gay gắt vào mùa hè."
            },
            {
                word: "Le froid",
                meaning: "Sự lạnh",
                example: "Le froid arrive en hiver.",
                exampleMeaning: "Cái lạnh đến vào mùa đông."
            },
            {
                word: "L'arc-en-ciel",
                meaning: "Cầu vồng",
                example: "L'arc-en-ciel apparaît après la pluie.",
                exampleMeaning: "Cầu vồng xuất hiện sau cơn mưa."
            },
            {
                word: "La météo",
                meaning: "Dự báo thời tiết",
                example: "Je regarde la météo tous les matins.",
                exampleMeaning: "Tôi xem dự báo thời tiết mỗi sáng."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Quel temps fait-il quand le soleil brille?",
                options: ["Il pleut", "Il fait beau", "Il neige", "Il fait froid"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Que voyons-nous dans le ciel après la pluie?",
                options: ["Le soleil", "La neige", "L'arc-en-ciel", "Le brouillard"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Qu'est-ce qui tombe en hiver?",
                options: ["La pluie", "Le soleil", "Le vent", "La neige"],
                correct: 3
            },
            {
                type: "multiple-choice",
                question: "Qu'est-ce qui réduit la visibilité?",
                options: ["Le brouillard", "Le soleil", "L'arc-en-ciel", "La chaleur"],
                correct: 0
            },
            {
                type: "multiple-choice",
                question: "Quand fait-il très chaud?",
                options: ["En hiver", "Au printemps", "En été", "En automne"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Comment est le temps quand il y a des nuages gris?",
                options: ["Il fait beau", "Il va pleuvoir", "Il fait chaud", "Il fait du soleil"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Qu'est-ce qui souffle fort pendant une tempête?",
                options: ["La pluie", "Le vent", "La neige", "Le soleil"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Où peut-on voir les prévisions du temps?",
                options: ["Dans la météo", "Dans le vent", "Dans les nuages", "Dans la pluie"],
                correct: 0
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
                ${unit.vocabulary.map(item => `
                    <div class="word-item">
                        <h5>${item.word}</h5>
                        <p><strong>Nghĩa:</strong> ${item.meaning}</p>
                        <p><strong>Ví dụ:</strong> ${item.example}</p>
                        <p><strong>Nghĩa ví dụ:</strong> ${item.exampleMeaning}</p>
                    </div>
                `).join('')}
            </div>
        `;
    });
    
    contentArea.innerHTML = html;
}

// Check vocabulary quiz answers
function checkVocabularyQuiz() {
    const quizForm = document.getElementById('quizForm');
    const quizResults = document.getElementById('quizResults');
    let correctCount = 0;
    
    currentUnit.shuffledQuizWords.forEach((word, index) => {
        const selectedAnswer = quizForm.querySelector(`input[name="quiz${index}"]:checked`);
        const feedbackDiv = quizForm.querySelector(`.quiz-item:nth-child(${index + 1}) .feedback`);
        
        if (selectedAnswer) {
            if (selectedAnswer.value === word.word) {
                correctCount++;
                feedbackDiv.innerHTML = '<span class="text-success">✓ Đúng!</span>';
            } else {
                feedbackDiv.innerHTML = `<span class="text-danger">✗ Sai. Đáp án đúng là: ${word.word}</span>`;
            }
        }
    });
    
    const score = Math.round((correctCount / currentUnit.shuffledQuizWords.length) * 100);
    quizResults.innerHTML = `
        <div class="alert alert-info">
            Kết quả: ${correctCount}/${currentUnit.shuffledQuizWords.length} (${score}%)
        </div>
    `;
}

// Check exercise answers
function checkExercises() {
    const exerciseForm = document.getElementById('exerciseForm');
    const exerciseResults = document.getElementById('exerciseResults');
    let correctCount = 0;
    
    currentUnit.exercises.forEach((exercise, index) => {
        const selectedAnswer = exerciseForm.querySelector(`input[name="q${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === exercise.options[exercise.correct]) {
            correctCount++;
        }
    });
    
    const score = Math.round((correctCount / currentUnit.exercises.length) * 100);
    exerciseResults.innerHTML = `
        <div class="alert alert-info">
            Kết quả: ${correctCount}/${currentUnit.exercises.length} (${score}%)
        </div>
    `;
}

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    
    // Add event listeners for navigation buttons
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', () => {
            const section = button.getAttribute('data-section');
            showSection(section);
        });
    });
    
    // Add event listener for back button
    document.getElementById('backButton').addEventListener('click', showUnitGrid);
});
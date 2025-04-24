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
        pronunciation: {
            title: "Phát âm tiếng Pháp cơ bản",
            sections: [
                {
                    title: "Âm 'r' tiếng Pháp",
                    explanation: "Âm 'r' trong tiếng Pháp được phát âm từ phía sau họng, khác với âm 'r' trong tiếng Việt. Khi phát âm, hãy cố gắng tạo âm thanh rung nhẹ ở cuống họng.",
                    examples: ["bonjour", "au revoir", "merci", "français"]
                },
                {
                    title: "Nguyên âm mũi",
                    explanation: "Tiếng Pháp có những nguyên âm mũi đặc biệt, khi phát âm, không khí đi qua cả mũi và miệng.",
                    examples: ["bonjour", "enchanté", "en", "un", "on"]
                },
                {
                    title: "Âm cuối câu",
                    explanation: "Trong tiếng Pháp, thường không phát âm các phụ âm cuối từ, trừ khi từ tiếp theo bắt đầu bằng nguyên âm.",
                    examples: ["comment", "s'il vous plaît", "petit"]
                },
                {
                    title: "Ngữ điệu chào hỏi",
                    explanation: "Khi chào hỏi, ngữ điệu tiếng Pháp thường cao lên ở cuối câu khi hỏi và giảm xuống khi khẳng định.",
                    examples: ["Bonjour!", "Comment allez-vous?", "Comment vas-tu?", "Ça va bien?"]
                }
            ]
        },
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
        pronunciation: {
            title: "Phát âm từ vựng gia đình",
            content: [
                "1. Phát âm mạnh các phụ âm đầu:",
                "- La famille /la famij/ - nhấn mạnh âm 'f'",
                "- Le père /lə pɛʁ/ - nhấn mạnh âm 'p'",
                "- La mère /la mɛʁ/ - nhấn mạnh âm 'm'",
                "",
                "2. Chú ý cách phát âm 'è' (ɛ):",
                "- frère /fʁɛʁ/",
                "- mère /mɛʁ/",
                "- père /pɛʁ/",
                "",
                "3. Phát âm 'œu' (œ):",
                "- sœur /sœʁ/",
                "",
                "4. Chú ý phát âm 'on' và 'en' trong:",
                "- mon /mɔ̃/",
                "- ton /tɔ̃/",
                "- son /sɔ̃/"
            ]
        },
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
    },
    {
        id: 13,
        title: "Révision - Ôn tập cuối kỳ 2",
        sections: ["grammar", "vocabulary", "exercises", "listening", "reading", "writing", "speaking"],
        grammar: {
            title: "Ngữ pháp",
            content: [
                {
                    topic: "WH-question words",
                    explanation: "Trong tiếng Pháp, từ nghi vấn WH được sử dụng để đặt câu hỏi:",
                    examples: [
                        "Quand - Khi nào (hỏi về thời gian)",
                        "Où - Ở đâu (hỏi về địa điểm)",
                        "Que/Quoi - Cái gì (hỏi về vật)",
                        "Qui - Ai (hỏi về người)",
                        "Comment - Như thế nào/Làm sao (hỏi về cách thức)",
                        "Pourquoi - Tại sao (hỏi về lý do)",
                        "Quel/Quelle - Cái nào (hỏi về sự lựa chọn)"
                    ]
                },
                {
                    topic: "Thì hiện tại liên tục",
                    explanation: "Thì hiện tại liên tục trong tiếng Pháp dùng để diễn tả một hành động đang diễn ra vào thời điểm nói:",
                    examples: [
                        "Je suis en train de manger - Tôi đang ăn",
                        "Elle est en train de lire - Cô ấy đang đọc sách",
                        "Nous sommes en train de jouer - Chúng tôi đang chơi",
                        "Tu es en train d'écouter - Bạn đang nghe",
                        "Ils sont en train de parler - Họ đang nói chuyện"
                    ]
                },
                {
                    topic: "Thì quá khứ đơn",
                    explanation: "Thì quá khứ đơn (Passé composé) được dùng để diễn tả một hành động đã xảy ra và kết thúc trong quá khứ:",
                    examples: [
                        "J'ai mangé - Tôi đã ăn",
                        "Elle a lu - Cô ấy đã đọc",
                        "Nous avons joué - Chúng tôi đã chơi",
                        "Tu as écouté - Bạn đã nghe",
                        "Ils ont parlé - Họ đã nói"
                    ]
                },
                {
                    topic: "Thì tương lai đơn",
                    explanation: "Thì tương lai đơn trong tiếng Pháp dùng để diễn tả một hành động sẽ xảy ra trong tương lai:",
                    examples: [
                        "Je mangerai - Tôi sẽ ăn",
                        "Elle lira - Cô ấy sẽ đọc",
                        "Nous jouerons - Chúng tôi sẽ chơi",
                        "Tu écouteras - Bạn sẽ nghe",
                        "Ils parleront - Họ sẽ nói"
                    ]
                },
                {
                    topic: "Mạo từ (a/an, the)",
                    explanation: "Trong tiếng Pháp, mạo từ không xác định và xác định là:",
                    examples: [
                        "Un/Une - Một (không xác định, dùng cho nam/nữ)",
                        "Des - Nhiều (không xác định, số nhiều)",
                        "Le/La - Cái/con... (xác định, dùng cho nam/nữ)",
                        "Les - Những (xác định, số nhiều)",
                        "L' - Dùng trước danh từ bắt đầu bằng nguyên âm hoặc h câm"
                    ]
                },
                {
                    topic: "Câu điều kiện loại 1",
                    explanation: "Câu điều kiện loại 1 diễn tả một điều kiện có thể xảy ra ở hiện tại hoặc tương lai:",
                    examples: [
                        "Si tu étudies, tu réussiras - Nếu bạn học, bạn sẽ thành công",
                        "Si elle vient, je serai content - Nếu cô ấy đến, tôi sẽ vui",
                        "Si nous partons tôt, nous arriverons à l'heure - Nếu chúng ta khởi hành sớm, chúng ta sẽ đến đúng giờ"
                    ]
                },
                {
                    topic: "So sánh hơn",
                    explanation: "Cấu trúc so sánh hơn trong tiếng Pháp:",
                    examples: [
                        "Plus + adj + que - ... hơn ...",
                        "Moins + adj + que - ... kém hơn ...",
                        "Aussi + adj + que - ... bằng ...",
                        "Il est plus grand que moi - Anh ấy cao hơn tôi",
                        "Elle est moins rapide que lui - Cô ấy chậm hơn anh ấy"
                    ]
                },
                {
                    topic: "Động từ khiếm khuyết",
                    explanation: "Các động từ khiếm khuyết trong tiếng Pháp:",
                    examples: [
                        "Devoir - Phải: Je dois étudier - Tôi phải học",
                        "Pouvoir - Có thể: Tu peux venir - Bạn có thể đến",
                        "Vouloir - Muốn: Elle veut manger - Cô ấy muốn ăn",
                        "Falloir - Cần: Il faut partir - Cần phải đi"
                    ]
                },
                {
                    topic: "Tính từ và đại từ sở hữu",
                    explanation: "Tính từ sở hữu đứng trước danh từ, đại từ sở hữu thay thế danh từ:",
                    examples: [
                        "Mon, ma, mes - Của tôi",
                        "Ton, ta, tes - Của bạn",
                        "Son, sa, ses - Của anh ấy/cô ấy",
                        "Notre, nos - Của chúng tôi",
                        "Votre, vos - Của các bạn",
                        "Leur, leurs - Của họ",
                        "Le mien, la mienne, les miens, les miennes - Cái của tôi"
                    ]
                },
                {
                    topic: "Liên từ trong câu ghép",
                    explanation: "Liên từ dùng để nối các mệnh đề trong câu ghép:",
                    examples: [
                        "Et - Và",
                        "Mais - Nhưng",
                        "Ou - Hoặc",
                        "Donc - Vì vậy",
                        "Car - Bởi vì",
                        "J'aime le chocolat et les bonbons - Tôi thích sô cô la và kẹo",
                        "Elle est intelligente mais paresseuse - Cô ấy thông minh nhưng lười biếng"
                    ]
                }
            ]
        },
        vocabulary: [
            {
                word: "La télévision",
                meaning: "Ti vi",
                example: "Je regarde la télévision tous les soirs.",
                exampleMeaning: "Tôi xem ti vi mỗi tối."
            },
            {
                word: "Le sport",
                meaning: "Thể thao",
                example: "J'aime faire du sport.",
                exampleMeaning: "Tôi thích chơi thể thao."
            },
            {
                word: "Le jeu",
                meaning: "Trò chơi",
                example: "Les enfants aiment les jeux.",
                exampleMeaning: "Trẻ em thích trò chơi."
            },
            {
                word: "La ville",
                meaning: "Thành phố",
                example: "Paris est une grande ville.",
                exampleMeaning: "Paris là một thành phố lớn."
            },
            {
                word: "Le pays",
                meaning: "Đất nước",
                example: "La France est un beau pays.",
                exampleMeaning: "Nước Pháp là một đất nước đẹp."
            },
            {
                word: "La technologie",
                meaning: "Công nghệ",
                example: "La technologie évolue rapidement.",
                exampleMeaning: "Công nghệ phát triển nhanh chóng."
            },
            {
                word: "Le robot",
                meaning: "Robot",
                example: "Les robots aident dans les usines.",
                exampleMeaning: "Robot giúp đỡ trong các nhà máy."
            },
            {
                word: "La maison",
                meaning: "Ngôi nhà",
                example: "J'habite dans une grande maison.",
                exampleMeaning: "Tôi sống trong một ngôi nhà lớn."
            },
            {
                word: "L'environnement",
                meaning: "Môi trường",
                example: "Nous devons protéger l'environnement.",
                exampleMeaning: "Chúng ta phải bảo vệ môi trường."
            },
            {
                word: "Le croissant",
                meaning: "Bánh sừng bò",
                example: "Je mange un croissant au petit déjeuner.",
                exampleMeaning: "Tôi ăn bánh sừng bò vào bữa sáng."
            },
            {
                word: "Le lait",
                meaning: "Sữa",
                example: "Je bois du lait tous les matins.",
                exampleMeaning: "Tôi uống sữa mỗi sáng."
            },
            {
                word: "Le supermarché",
                meaning: "Siêu thị",
                example: "Nous allons au supermarché le dimanche.",
                exampleMeaning: "Chúng tôi đi siêu thị vào Chủ nhật."
            },
            {
                word: "Le bus",
                meaning: "Xe buýt",
                example: "Je vais à l'école en bus.",
                exampleMeaning: "Tôi đi học bằng xe buýt."
            },
            {
                word: "Le restaurant",
                meaning: "Nhà hàng",
                example: "Nous mangeons au restaurant.",
                exampleMeaning: "Chúng tôi ăn ở nhà hàng."
            },
            {
                word: "La poupée",
                meaning: "Búp bê",
                example: "Marie aime jouer avec sa poupée.",
                exampleMeaning: "Marie thích chơi với búp bê của mình."
            },
            {
                word: "Le gâteau",
                meaning: "Bánh ngọt",
                example: "Le gâteau au chocolat est délicieux.",
                exampleMeaning: "Bánh sô cô la rất ngon."
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "Quelle heure est-il? (Mấy giờ rồi?)",
                options: ["Décembre", "Jeudi", "Weekend", "7 heures"],
                correct: 3
            },
            {
                type: "multiple-choice",
                question: "Quel âge as-tu? (Bạn bao nhiêu tuổi?)",
                options: ["Sophie", "Je vais bien", "J'ai 7 ans", "J'aime le français"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Au petit déjeuner, je mange _______ croissants. (Vào bữa sáng, tôi ăn ___ bánh sừng bò.)",
                options: ["un", "des", "du", "les"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "_______ habites-tu? J'habite à Hanoi. (_____ bạn sống? Tôi sống ở Hà Nội.)",
                options: ["Quand", "Quel", "Où", "Que"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Chez Oribilis, il ne faut pas _________. (Ở nhà Oribilis, không được _____.)",
                options: ["pleure", "pleurer", "pleurez", "pleuré"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Lucie va à la gare ________ train. (Lucie đi đến ga bằng ____ tàu.)",
                options: ["à", "la", "en", "une"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Nous allons ________ école ______ voiture. (Chúng tôi đi đến ____ trường bằng ____ ô tô.)",
                options: ["à/en", "à la/en", "la/le", "à l'/en"],
                correct: 3
            },
            {
                type: "multiple-choice",
                question: "Nous ____________ à la mer avec nos amis. (Chúng tôi ____ đến biển với bạn bè.)",
                options: ["vont", "allons", "allez", "allont"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Qu'est-ce que vous ___________ après l'école? (Bạn ____ gì sau giờ học?)",
                options: ["faire", "faisez", "faites", "font"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Les enfants ____________ dans la cour d'école. (Những đứa trẻ ___ ở sân trường.)",
                options: ["a", "sont", "est", "sommes"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "____________ heure est-il? (_____ giờ rồi?)",
                options: ["Quel", "Quelle", "Quels", "Quelles"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Ma mère est __________. (Mẹ tôi rất _____.)",
                options: ["gentile", "gentil", "gentille", "gentilles"],
                correct: 2
            },
            {
                type: "multiple-choice",
                question: "Mère Lion a fait un __________ gâteau. (Mẹ Sư tử đã làm một cái bánh ____.)",
                options: ["bel", "beau", "grande", "bonne"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "La tête d'Oribilis est _________ comme une pastèque. (Đầu của Oribilis ___ như một quả dưa hấu.)",
                options: ["gros", "grosse", "grosses", "grossesses"],
                correct: 1
            },
            {
                type: "multiple-choice",
                question: "Tous les soirs, M. Lampion passe dans la rue avec sa ________ lampe. (Mỗi tối, ông Lampion đi qua phố với cái đèn ___ của ông ấy.)",
                options: ["petit", "petite", "petits", "petites"],
                correct: 1
            }
        ],
        listening: [
            {
                title: "Compréhension Orale - Nghe hiểu",
                content: "Nghe các đoạn hội thoại nhỏ và chọn hình ảnh phù hợp với nội dung nghe được.",
                exercises: [
                    {
                        title: "Exercice 1: Regarde les dessins. Écoute les petits dialogues et entoure comme dans l'exemple.",
                        dialogues: [
                            {
                                name: "Dialogue 1",
                                audio: "dialogue1.mp3",
                                images: ["cake.jpg", "cake_with_candle.jpg", "plate_with_cake.jpg"],
                                correct: 1,
                                text: "Le garçon regarde le gâteau avec une bougie."
                            },
                            {
                                name: "Dialogue 2", 
                                audio: "dialogue2.mp3",
                                images: ["kids_playing_soccer.jpg", "kids_cycling.jpg", "kids_in_classroom.jpg"],
                                correct: 0,
                                text: "Les enfants jouent au football dans le jardin."
                            },
                            {
                                name: "Dialogue 3",
                                audio: "dialogue3.mp3", 
                                images: ["kids_watching_tv.jpg", "kids_swimming.jpg", "kids_studying.jpg"],
                                correct: 1,
                                text: "Les enfants nagent dans la piscine."
                            },
                            {
                                name: "Dialogue 4",
                                audio: "dialogue4.mp3",
                                images: ["clock_11h.jpg", "clock_13h.jpg", "clock_15h.jpg"],
                                correct: 2,
                                text: "Il est quinze heures."
                            },
                            {
                                name: "Dialogue 5",
                                audio: "dialogue5.mp3",
                                images: ["boy_breakfast.jpg", "boy_with_fruits.jpg", "boy_eating_sandwich.jpg"],
                                correct: 0,
                                text: "Le garçon prend son petit déjeuner."
                            }
                        ]
                    },
                    {
                        title: "Exercice 2: Regarde les dessins. Écoute les messages et note le numéro du message sous le dessin correspondant.",
                        messages: [
                            {
                                number: 1,
                                audio: "message1.mp3",
                                text: "Lève les bras en l'air!",
                                image: "boy_arms_up.jpg" 
                            },
                            {
                                number: 2,
                                audio: "message2.mp3",
                                text: "Tourne-toi!",
                                image: "boy_turning.jpg"
                            },
                            {
                                number: 3,
                                audio: "message3.mp3",
                                text: "Saute!",
                                image: "boy_jumping.jpg"
                            },
                            {
                                number: 4,
                                audio: "message4.mp3",
                                text: "Assieds-toi!",
                                image: "boy_sitting.jpg"
                            }
                        ]
                    },
                    {
                        title: "Exercice 3: Regarde les dessins. Écoute les dialogues et entoure les dessins correspondants.",
                        dialogues: [
                            {
                                name: "Dialogue 1",
                                audio: "dialogue_clothes1.mp3",
                                description: "Description des vêtements",
                                options: [
                                    "Chemise noire/pantalon noir/cheveux noirs",
                                    "Chemise rouge/pantalon noir/cheveux blonds",
                                    "Chemise verte/pantalon noir/cheveux blonds",
                                    "Chemise rouge/pantalon noir/cheveux blonds"
                                ],
                                correct: 1
                            },
                            {
                                name: "Dialogue 2",
                                audio: "dialogue_room.mp3",
                                description: "Description de la chambre",
                                options: [
                                    "Armoire: rouge/lit: jaune",
                                    "Armoire et lit: jaune",
                                    "Armoire/lit: rouge",
                                    "Armoire: rouge, lit: jaune"
                                ],
                                correct: 3
                            },
                            {
                                name: "Dialogue 3",
                                audio: "dialogue_animals.mp3",
                                description: "Description des animaux",
                                options: [
                                    "Girafe",
                                    "Perroquet",
                                    "Éléphant",
                                    "Requin"
                                ],
                                correct: 0
                            }
                        ]
                    }
                ]
            }
        ],
        reading: [
            {
                title: "Compréhension des Écrits - Đọc hiểu",
                content: "Đọc và hiểu văn bản, sau đó trả lời các câu hỏi.",
                text: "À 6 heures le dimanche matin, Marie se réveille. Elle se brosse les dents, elle se lave, elle mange un croissant et elle boit du lait au petit déjeuner puis elle met une belle robe rouge pour aller au supermarché à la ville.\n\n« Ton cousin Nicolas veut aller avec toi ! dit maman. »\n\nLes enfants montent dans un bus et il roule très vite.\n\nDeux heures plus tard, le bus s'arrête devant un supermarché. C'est le plus grand marché de la ville. On y trouve de tout ! Des vêtements, des fruits, des légumes, du poisson, de la viande, des tissus et des jouets.\n\nMarie achète une belle poupée. Nicolas achète un gâteau au chocolat pour son grand-père Max. Maman achète une chemise et une jupe.\n\n« Maintenant, nous allons au restaurant ! Papa nous y attend à 17 heures » dit maman.",
                exercises: [
                    {
                        question: "Comment s'appelle la petite fille du texte?",
                        options: ["Paul", "Marie", "Papa", "Max"],
                        correct: 1,
                        explanation: "Le texte dit: 'Marie se réveille'."
                    },
                    {
                        question: "À quelle heure elle se réveille?",
                        options: ["à 6 heures", "à 17 heures", "à midi"],
                        correct: 0,
                        explanation: "Le texte commence par: 'À 6 heures le dimanche matin, Marie se réveille'."
                    },
                    {
                        question: "Que fait-elle le matin?",
                        options: ["va au restaurant", "prend le petit déjeuner", "achète une lampe"],
                        correct: 1,
                        explanation: "Le texte dit: 'elle mange un croissant et elle boit du lait au petit déjeuner'."
                    },
                    {
                        question: "Qu'est-ce qu'elle met comme habits?",
                        options: ["une robe rouge", "une chemise", "une jupe", "un tee-shirt"],
                        correct: 0,
                        explanation: "Le texte dit: 'elle met une belle robe rouge'."
                    },
                    {
                        question: "Où va-t-elle?",
                        options: ["à l'école", "à la ville", "au village", "au musée"],
                        correct: 1,
                        explanation: "Le texte dit: 'pour aller au supermarché à la ville'."
                    },
                    {
                        question: "Est-ce que la famille de Marie habite à la ville?",
                        options: ["Oui", "Non"],
                        correct: 1,
                        explanation: "Ils doivent prendre le bus pour aller à la ville, donc ils n'habitent pas à la ville."
                    },
                    {
                        question: "Comment les enfants vont au supermarché?",
                        options: ["en voiture", "en train", "à pied", "en bus"],
                        correct: 3,
                        explanation: "Le texte dit: 'Les enfants montent dans un bus'."
                    },
                    {
                        question: "Qu'est-ce que Nicolas achète au supermarché pour son grand-père?",
                        options: ["un tee-shirt", "des légumes", "une lampe", "un gâteau"],
                        correct: 3,
                        explanation: "Le texte dit: 'Nicolas achète un gâteau au chocolat pour son grand-père Max'."
                    },
                    {
                        question: "À quelle heure papa attend ses enfants?",
                        options: ["À 6 heures", "À midi", "À 17 heures"],
                        correct: 2,
                        explanation: "Le texte dit: 'Papa nous y attend à 17 heures'."
                    },
                    {
                        question: "Où est-ce que les enfants vont pour voir leur papa?",
                        options: ["au marché", "à la gare", "à l'école", "au restaurant"],
                        correct: 3,
                        explanation: "Le texte dit: 'Maintenant, nous allons au restaurant! Papa nous y attend'."
                    }
                ]
            }
        ],
        writing: [
            {
                title: "Expression Écrite - Viết",
                content: "Phần này bao gồm các bài tập viết giờ, hoàn thành câu, viết số thành chữ và viết từ có chứa âm.",
                exercises: [
                    {
                        title: "1. Quelle heure est-il?",
                        items: [
                            {
                                question: "Viết thời gian bằng tiếng Pháp",
                                image: "clock_9h.jpg",
                                answer: "Il est neuf heures.",
                                hint: "9:00"
                            },
                            {
                                question: "Viết thời gian bằng tiếng Pháp",
                                image: "clock_12h.jpg",
                                answer: "Il est midi.",
                                hint: "12:00"
                            }
                        ]
                    },
                    {
                        title: "2. Complète la phrase:",
                        items: [
                            {
                                question: "Au petit déjeuner, nous mangeons _______.",
                                image: "croissants.jpg",
                                answer: "des croissants"
                            },
                            {
                                question: "Le matin, Jean boit _______.",
                                image: "milk.jpg",
                                answer: "du lait"
                            },
                            {
                                question: "Nous mangeons _______ au dîner.",
                                image: "bread.jpg",
                                answer: "du pain"
                            },
                            {
                                question: "Mon petit frère va à l'école _______.",
                                image: "school_bus.jpg",
                                answer: "en bus"
                            }
                        ]
                    },
                    {
                        title: "3. Écris les nombres en lettre:",
                        items: [
                            {
                                question: "12",
                                answer: "douze"
                            },
                            {
                                question: "32",
                                answer: "trente-deux"
                            },
                            {
                                question: "20",
                                answer: "vingt"
                            },
                            {
                                question: "45",
                                answer: "quarante-cinq"
                            }
                        ]
                    },
                    {
                        title: "4. Cite un mot qui contient du son:",
                        items: [
                            {
                                question: "ch",
                                examples: ["chat", "chocolat", "chien", "vache"],
                                answer: "Variable"
                            },
                            {
                                question: "f",
                                examples: ["femme", "fille", "frère", "fleur"],
                                answer: "Variable"
                            },
                            {
                                question: "j",
                                examples: ["jardin", "jouer", "jupe", "jour"],
                                answer: "Variable"
                            },
                            {
                                question: "v",
                                examples: ["voiture", "vache", "vent", "vélo"],
                                answer: "Variable"
                            }
                        ]
                    },
                    {
                        title: "5. Que fais-tu à l'école aujourd'hui? (Écris 4 activités)",
                        question: "Viết 4 hoạt động bạn làm ở trường hôm nay.",
                        examples: [
                            "Je lis un livre.",
                            "J'écris dans mon cahier.",
                            "Je dessine un chat.",
                            "Je chante avec mes amis.",
                            "Je joue dans la cour.",
                            "J'écoute le professeur."
                        ],
                        answer: "Variable (4 activités)"
                    }
                ]
            }
        ],
        speaking: [
            {
                title: "Expression Orale - Nói",
                content: "Bài tập thực hành kỹ năng nói và trả lời câu hỏi.",
                exercises: [
                    {
                        title: "A. Lecture expressive",
                        text: "Toutes les nuits, M. Lampion passe dans la rue. Il chante et Lucie écoute. Une nuit, M. Lampion ne vient pas. Lucie le cherche dans la ville. Elle va à la gare. Elle va au marché d'un petit village. M. Lampion n'est pas là.",
                        instructions: "Đọc to đoạn văn trên và chú ý phát âm đúng."
                    },
                    {
                        title: "B. Réponds aux questions",
                        questions: [
                            "1. Tu te lèves à quelle heure?",
                            "2. Tu es né quand?",
                            "3. Quel âge a ton père?",
                            "4. Comment vas-tu aujourd'hui?",
                            "5. Que fais-tu à l'école?",
                            "6. Que fais-tu après l'école?",
                            "7. Comment vas-tu aujourd'hui?",
                            "8. Que fais-tu dimanche?",
                            "9. Que manges-tu au petit déjeuner?",
                            "10. Quelle est ta couleur préférée?"
                        ],
                        sample_answers: [
                            "Je me lève à 6 heures.",
                            "Je suis né le 10 janvier.",
                            "Mon père a 40 ans.",
                            "Je vais bien, merci.",
                            "À l'école, j'étudie le français et je joue avec mes amis.",
                            "Après l'école, je fais mes devoirs et je regarde la télévision.",
                            "Je vais bien, merci.",
                            "Dimanche, je reste à la maison et je joue avec mes cousins.",
                            "Au petit déjeuner, je mange des croissants et je bois du lait.",
                            "Ma couleur préférée est le bleu."
                        ]
                    },
                    {
                        title: "C. Qu'est-ce qu'elle fait?",
                        images: [
                            "girl_in_bed.jpg",
                            "girl_writing.jpg",
                            "girl_eating.jpg",
                            "girl_biking.jpg",
                            "girl_studying.jpg",
                            "girl_sleeping.jpg"
                        ],
                        sample_answers: [
                            "Elle est dans son lit. Elle est malade.",
                            "Elle écrit dans son cahier.",
                            "Elle mange un repas.",
                            "Elle fait du vélo.",
                            "Elle étudie à son bureau.",
                            "Elle dort dans son lit."
                        ]
                    }
                ]
            }
        ],
        exercises: [
            {
                type: "multiple-choice",
                question: "1. Quelle heure est-il? Il est _______.",
                options: ["décembre", "jeudi", "weekend", "7 heures"],
                correct: 3,
                explanation: "La question demande l'heure. Seule l'option '7 heures' indique une heure."
            },
            {
                type: "multiple-choice",
                question: "2. Quel âge as-tu?",
                options: ["Sophie", "Je vais bien", "J'ai 7 ans", "J'aime le français"],
                correct: 2,
                explanation: "Pour répondre à la question sur l'âge, on utilise 'J'ai ... ans'."
            },
            {
                type: "multiple-choice",
                question: "3. Au petit déjeuner, je mange _______ croissants.",
                options: ["un", "des", "du", "les"],
                correct: 1,
                explanation: "Pour les noms pluriels comptables (croissants), on utilise l'article indéfini 'des'."
            },
            {
                type: "multiple-choice",
                question: "4. _______ habites-tu? J'habite à Hanoi.",
                options: ["Quand", "Quel", "Où", "Que"],
                correct: 2,
                explanation: "'Où' est le mot interrogatif utilisé pour demander un lieu."
            },
            {
                type: "multiple-choice",
                question: "5. Chez Oribilis, il ne faut pas _________.",
                options: ["pleure", "pleurer", "pleurez", "pleuré"],
                correct: 1,
                explanation: "Après 'il ne faut pas', on utilise l'infinitif du verbe. L'infinitif de 'pleurer' est 'pleurer'."
            },
            {
                type: "multiple-choice",
                question: "6. Lucie va à la gare ________ train.",
                options: ["à", "la", "en", "une"],
                correct: 2,
                explanation: "Pour indiquer le moyen de transport, on utilise la préposition 'en' (en train, en voiture, en bus)."
            },
            {
                type: "multiple-choice",
                question: "7. Nous allons ________ école ______ voiture.",
                options: ["à/en", "à la/en", "la/le", "à l'/en"],
                correct: 3,
                explanation: "Pour l'école qui commence par une voyelle, on dit 'à l'école', et pour le moyen de transport, 'en voiture'."
            },
            {
                type: "multiple-choice",
                question: "8. Nous ____________ à la mer avec nos amis.",
                options: ["vont", "allons", "allez", "allont"],
                correct: 1,
                explanation: "Avec 'nous', la forme correcte du verbe 'aller' au présent est 'allons'."
            },
            {
                type: "multiple-choice",
                question: "9. Qu'est-ce que vous ___________ après l'école?",
                options: ["faire", "faisez", "faites", "font"],
                correct: 2,
                explanation: "Avec 'vous', la forme correcte du verbe 'faire' au présent est 'faites'."
            },
            {
                type: "multiple-choice",
                question: "10. Les enfants ____________ dans la cour d'école.",
                options: ["a", "sont", "est", "sommes"],
                correct: 1,
                explanation: "Avec le sujet pluriel 'les enfants', on utilise 'sont' (forme de 'être')."
            },
            {
                type: "multiple-choice",
                question: "11. ____________ heure est-il?",
                options: ["Quel", "Quelle", "Quels", "Quelles"],
                correct: 1,
                explanation: "Le mot 'heure' est féminin, donc on utilise 'quelle' (féminin singulier)."
            },
            {
                type: "multiple-choice",
                question: "12. Ma mère est __________.",
                options: ["gentile", "gentil", "gentille", "gentilles"],
                correct: 2,
                explanation: "Pour une femme, l'adjectif 'gentil' devient 'gentille' (féminin)."
            },
            {
                type: "multiple-choice",
                question: "13. Mère Lion a fait un __________ gâteau.",
                options: ["bel", "beau", "grande", "bonne"],
                correct: 1,
                explanation: "L'adjectif 'beau' s'utilise avec un nom masculin comme 'gâteau'."
            },
            {
                type: "multiple-choice",
                question: "14. La tête d'Oribilis est _________ comme une pastèque.",
                options: ["gros", "grosse", "grosses", "grossesses"],
                correct: 1,
                explanation: "Pour 'la tête' (féminin), l'adjectif 'gros' devient 'grosse'."
            },
            {
                type: "multiple-choice",
                question: "15. Tous les soirs, M. Lampion passe dans la rue avec sa ________ lampe.",
                options: ["petit", "petite", "petits", "petites"],
                correct: 1,
                explanation: "Pour 'lampe' (féminin), l'adjectif 'petit' devient 'petite'."
            },
            {
                type: "multiple-choice",
                question: "16. Je vais à l'école _________ pied.",
                options: ["le", "la", "en", "à"],
                correct: 3,
                explanation: "L'expression correcte est 'à pied' (à + pied)."
            },
            {
                type: "multiple-choice",
                question: "17. Je ____________ à 6 heures du matin.",
                options: ["te lèves", "se lève", "nous levons", "me lève"],
                correct: 3,
                explanation: "Pour 'je', le verbe pronominal 'se lever' devient 'me lève'."
            },
            {
                type: "multiple-choice",
                question: "18. Elle aime __________ de la pizza.",
                options: ["manges", "mangeons", "mangent", "manger"],
                correct: 3,
                explanation: "Après le verbe 'aimer', on utilise l'infinitif, donc 'manger'."
            },
            {
                type: "multiple-choice",
                question: "19. Nous ____________ l'avion pour aller à Paris.",
                options: ["prennent", "prendre", "prenons", "prennons"],
                correct: 2,
                explanation: "Avec 'nous', la forme correcte du verbe 'prendre' au présent est 'prenons'."
            },
            {
                type: "multiple-choice",
                question: "20. Les enfants mangent _________ viande et boivent _________ lait.",
                options: ["de/de", "la/le", "de la/du", "le/la"],
                correct: 2,
                explanation: "Pour les noms non comptables, on utilise 'de la' pour le féminin (viande) et 'du' pour le masculin (lait)."
            }
        ]
    },
    {
        id: 14,
        title: "Phát âm - Phát âm",
        pronunciation: {
            title: "Phát âm tiếng Pháp cơ bản",
            sections: [
                {
                    title: "Âm 'r' tiếng Pháp",
                    explanation: "Âm 'r' trong tiếng Pháp được phát âm từ phía sau họng, khác với âm 'r' trong tiếng Việt. Khi phát âm, hãy cố gắng tạo âm thanh rung nhẹ ở cuống họng.",
                    examples: ["bonjour", "au revoir", "merci", "français"]
                },
                {
                    title: "Nguyên âm mũi",
                    explanation: "Tiếng Pháp có những nguyên âm mũi đặc biệt, khi phát âm, không khí đi qua cả mũi và miệng.",
                    examples: ["bonjour", "enchanté", "en", "un", "on"]
                },
                {
                    title: "Âm cuối câu",
                    explanation: "Trong tiếng Pháp, thường không phát âm các phụ âm cuối từ, trừ khi từ tiếp theo bắt đầu bằng nguyên âm.",
                    examples: ["comment", "s'il vous plaît", "petit"]
                },
                {
                    title: "Ngữ điệu chào hỏi",
                    explanation: "Khi chào hỏi, ngữ điệu tiếng Pháp thường cao lên ở cuối câu khi hỏi và giảm xuống khi khẳng định.",
                    examples: ["Bonjour!", "Comment allez-vous?", "Comment vas-tu?", "Ça va bien?"]
                }
            ]
        },
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
    
    // Display tabs for navigation
    displayUnitTabs();
    
    // Mặc định hiển thị phần từ vựng
    showSection('vocabulary');
}

// Function to display unit tabs
function displayUnitTabs() {
    const tabsContainer = document.getElementById('tabsContainer');
    tabsContainer.innerHTML = '';
    
    // Define default sections
    let sections = ['grammar', 'vocabulary', 'exercises', 'quiz'];
    
    // Use unit-specific sections if available
    if (currentUnit.sections && currentUnit.sections.length > 0) {
        sections = currentUnit.sections;
    }
    
    // Create tab for each section
    sections.forEach(section => {
        const tabButton = document.createElement('button');
        tabButton.className = 'tab-button';
        tabButton.dataset.section = section;
        
        // Set tab text based on section type
        let tabText = '';
        switch(section) {
            case 'grammar':
                tabText = 'Ngữ pháp';
                break;
            case 'vocabulary':
                tabText = 'Từ vựng';
                break;
            case 'exercises':
                tabText = 'Bài tập';
                break;
            case 'quiz':
                tabText = 'Kiểm tra';
                break;
            case 'listening':
                tabText = 'Nghe hiểu';
                break;
            case 'reading':
                tabText = 'Đọc hiểu';
                break;
            case 'writing':
                tabText = 'Viết';
                break;
            case 'speaking':
                tabText = 'Nói';
                break;
            case 'pronunciation':
                tabText = 'Phát âm';
                break;
            default:
                tabText = section.charAt(0).toUpperCase() + section.slice(1);
        }
        
        tabButton.textContent = tabText;
        tabButton.onclick = () => showSection(section);
        tabsContainer.appendChild(tabButton);
    });
    
    // Highlight the first tab as active
    if (tabsContainer.firstChild) {
        tabsContainer.firstChild.classList.add('active');
    }
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
    
    // Update active tab
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => {
        if (tab.dataset.section === section) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Check if section exists in current unit
    if (!currentUnit) return;
    
    // Clear content area
    contentArea.innerHTML = '';
    
    // Display section content
    switch(section) {
        case 'grammar':
            if (currentUnit.grammar) {
                displayGrammar(currentUnit.grammar);
            } else {
                contentArea.innerHTML = '<p>Không có nội dung ngữ pháp cho bài học này.</p>';
            }
            break;
        case 'vocabulary':
            if (currentUnit.vocabulary && currentUnit.vocabulary.length > 0) {
                displayVocabulary(currentUnit.vocabulary);
            } else {
                contentArea.innerHTML = '<p>Không có nội dung từ vựng cho bài học này.</p>';
            }
            break;
        case 'exercises':
            if (currentUnit.exercises && currentUnit.exercises.length > 0) {
                displayExercises(currentUnit.exercises);
            } else {
                contentArea.innerHTML = '<p>Không có bài tập cho bài học này.</p>';
            }
            break;
        case 'quiz':
            if (currentUnit.vocabulary && currentUnit.vocabulary.length > 0) {
                displayQuiz(currentUnit.vocabulary);
            } else {
                contentArea.innerHTML = '<p>Không có nội dung kiểm tra cho bài học này.</p>';
            }
            break;
        case 'grammarReview':
            displayGrammarReview();
            break;
        case 'vocabularyReview':
            displayVocabularyReview();
            break;
        case 'listening':
            if (currentUnit.listening && currentUnit.listening.length > 0) {
                displayListening(currentUnit.listening);
            } else {
                contentArea.innerHTML = '<p>Không có nội dung nghe hiểu cho bài học này.</p>';
            }
            break;
        case 'reading':
            if (currentUnit.reading && currentUnit.reading.length > 0) {
                displayReading(currentUnit.reading);
            } else {
                contentArea.innerHTML = '<p>Không có nội dung đọc hiểu cho bài học này.</p>';
            }
            break;
        case 'writing':
            if (currentUnit.writing && currentUnit.writing.length > 0) {
                displayWriting(currentUnit.writing);
            } else {
                contentArea.innerHTML = '<p>Không có nội dung viết cho bài học này.</p>';
            }
            break;
        case 'speaking':
            if (currentUnit.speaking && currentUnit.speaking.length > 0) {
                displaySpeaking(currentUnit.speaking);
            } else {
                contentArea.innerHTML = '<p>Không có nội dung luyện nói cho bài học này.</p>';
            }
            break;
        case 'pronunciation':
            if (currentUnit.pronunciation) {
                displayPronunciation(currentUnit.pronunciation);
            } else {
                contentArea.innerHTML = '<p>Không có nội dung phát âm cho bài học này.</p>';
            }
            break;
        default:
            contentArea.innerHTML = '<p>Vui lòng chọn một phần để xem nội dung.</p>';
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
            <div class="word-item mb-4">
                <div class="row">
                    <div class="col-md-8">
                        <h4>${item.word}
                            <button onclick="speakWord('${item.word}')" class="btn btn-sm btn-primary ml-2">
                                <i class="fas fa-volume-up"></i> Écouter
                            </button>
                        </h4>
                        <p><strong>Nghĩa:</strong> ${item.meaning}</p>
                        <p><strong>Ví dụ:</strong> ${item.example}
                            <button onclick="speakWord('${item.example}')" class="btn btn-sm btn-outline-primary ml-2">
                                <i class="fas fa-volume-up"></i>
                            </button>
                        </p>
                        <p><strong>Nghĩa ví dụ:</strong> ${item.exampleMeaning}</p>
                    </div>
                </div>
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

// Function to speak text using Web Speech API
function speakWord(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'fr-FR'; // Set language to French
    speech.rate = 0.8; // Slightly slower speed for better pronunciation
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

// Show vocabulary content
function showVocabularyContent(contentArea) {
    const vocabulary = currentUnit.vocabulary;
    contentArea.innerHTML = `
        <h3>${vocabulary.title}</h3>
        <div class="vocabulary-list">
            ${vocabulary.words.map(word => `
                <div class="word-item mb-4">
                    <div class="row">
                        <div class="col-md-8">
                            <h4>${word.word} 
                                <button onclick="speakWord('${word.word}')" class="btn btn-sm btn-primary ml-2">
                                    <i class="fas fa-volume-up"></i> Écouter
                                </button>
                            </h4>
                            <p><strong>Prononciation:</strong> <span class="pronunciation">${word.pronunciation || ''}</span></p>
                            <p><strong>Signification:</strong> ${word.meaning}</p>
                            <p><strong>Exemple:</strong> ${word.example}</p>
                            <p><strong>Traduction de l'exemple:</strong> ${word.exampleMeaning}</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Display listening content
function displayListening(listening) {
    const contentArea = document.getElementById('contentArea');
    let html = '';
    
    if (!listening || listening.length === 0) {
        html = '<p>Không có nội dung nghe hiểu cho bài học này.</p>';
    } else {
        listening.forEach(section => {
            html += `
                <div class="listening-section mb-4">
                    <h3>${section.title}</h3>
                    <p>${section.content}</p>
                    
                    ${section.exercises.map((exercise, index) => `
                        <div class="exercise-container mb-4">
                            <h4>${exercise.title}</h4>
                            
                            ${exercise.dialogues ? `
                                <div class="dialogues-container">
                                    ${exercise.dialogues.map((dialogue, dIndex) => `
                                        <div class="dialogue-item mb-3">
                                            <h5>${dialogue.name}</h5>
                                            <div class="d-flex align-items-center mb-2">
                                                <button class="btn btn-sm btn-primary me-2" onclick="speakWord('${dialogue.text || ''}')">
                                                    <i class="fas fa-volume-up"></i> Écouter
                                                </button>
                                                <span class="text-muted small">(Click để nghe)</span>
                                            </div>
                                            
                                            ${dialogue.images ? `
                                                <div class="images-container d-flex flex-wrap">
                                                    ${dialogue.images.map((img, imgIndex) => `
                                                        <div class="image-option m-2 ${imgIndex === dialogue.correct ? 'border border-success' : ''}">
                                                            <img src="${img}" alt="Option ${imgIndex + 1}" class="img-fluid" style="max-height: 150px;">
                                                        </div>
                                                    `).join('')}
                                                </div>
                                            ` : ''}
                                            
                                            ${dialogue.options ? `
                                                <div class="options-container">
                                                    ${dialogue.options.map((opt, optIndex) => `
                                                        <div class="option-item ${optIndex === dialogue.correct ? 'text-success fw-bold' : ''}">
                                                            ${opt}
                                                        </div>
                                                    `).join('')}
                                                </div>
                                            ` : ''}
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                            
                            ${exercise.messages ? `
                                <div class="messages-container d-flex flex-wrap">
                                    ${exercise.messages.map((message, mIndex) => `
                                        <div class="message-item m-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <button class="btn btn-sm btn-primary me-2" onclick="speakWord('${message.text || ''}')">
                                                    <i class="fas fa-volume-up"></i> Message ${message.number}
                                                </button>
                                            </div>
                                            <div class="image-container">
                                                <img src="${message.image}" alt="Message ${message.number}" class="img-fluid" style="max-height: 150px;">
                                                <div class="text-center mt-2">Message ${message.number}</div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        });
    }
    
    contentArea.innerHTML = html;
}

// Display reading content
function displayReading(reading) {
    const contentArea = document.getElementById('contentArea');
    let html = '';
    
    if (!reading || reading.length === 0) {
        html = '<p>Không có nội dung đọc hiểu cho bài học này.</p>';
    } else {
        reading.forEach(section => {
            html += `
                <div class="reading-section mb-4">
                    <h3>${section.title}</h3>
                    <p>${section.content}</p>
                    
                    <div class="reading-text p-3 bg-light rounded mb-4">
                        <h4>Texte à lire:</h4>
                        <p style="white-space: pre-line;">${section.text}</p>
                    </div>
                    
                    <h4>Exercices:</h4>
                    <form id="readingForm">
                        ${section.exercises.map((exercise, index) => `
                            <div class="exercise-item mb-3">
                                <p><strong>${index + 1}. ${exercise.question}</strong></p>
                                <div class="options">
                                    ${exercise.options.map((option, optIndex) => `
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" 
                                                   name="r${index}" 
                                                   value="${option}" 
                                                   id="r${index}_${optIndex}">
                                            <label class="form-check-label" for="r${index}_${optIndex}">
                                                ${option}
                                            </label>
                                        </div>
                                    `).join('')}
                                </div>
                                <div class="explanation mt-2" id="r_explanation${index}" style="display: none;">
                                    <div class="alert alert-info">
                                        <strong>Explication:</strong> ${exercise.explanation || ''}
                                    </div>
                                </div>
                                <button type="button" class="btn btn-sm btn-outline-info mt-2" 
                                        onclick="document.getElementById('r_explanation${index}').style.display = 
                                                 document.getElementById('r_explanation${index}').style.display === 'none' ? 'block' : 'none'">
                                    Voir l'explication
                                </button>
                            </div>
                        `).join('')}
                        <button type="button" class="btn btn-primary" onclick="checkReadingAnswers()">Vérifier les réponses</button>
                    </form>
                    <div id="readingResults" class="mt-3"></div>
                </div>
            `;
        });
    }
    
    contentArea.innerHTML = html;
}

// Display writing content
function displayWriting(writing) {
    const contentArea = document.getElementById('contentArea');
    let html = '';
    
    if (!writing || writing.length === 0) {
        html = '<p>Không có nội dung viết cho bài học này.</p>';
    } else {
        writing.forEach(section => {
            html += `
                <div class="writing-section mb-4">
                    <h3>${section.title}</h3>
                    <p>${section.content}</p>
                    
                    <form id="writingForm">
                        ${section.exercises.map((exercise, exIndex) => `
                            <div class="exercise-group mb-4">
                                <h4>${exercise.title}</h4>
                                
                                ${exercise.items ? 
                                    exercise.items.map((item, itemIndex) => `
                                        <div class="writing-item mb-3">
                                            <p><strong>${itemIndex + 1}. ${item.question}</strong></p>
                                            ${item.image ? `<img src="${item.image}" alt="Image" class="img-fluid mb-2" style="max-height: 150px;">` : ''}
                                            ${item.hint ? `<p class="text-muted small">(Hint: ${item.hint})</p>` : ''}
                                            <div class="input-group">
                                                <input type="text" class="form-control" 
                                                       id="w_${exIndex}_${itemIndex}" 
                                                       placeholder="Ta réponse ici...">
                                                <button type="button" class="btn btn-outline-primary" 
                                                        onclick="checkWritingAnswer('w_${exIndex}_${itemIndex}', '${item.answer}')">
                                                    Vérifier
                                                </button>
                                            </div>
                                            <div id="w_feedback_${exIndex}_${itemIndex}" class="mt-2"></div>
                                            ${item.examples ? `
                                                <div class="mt-2">
                                                    <button type="button" class="btn btn-sm btn-outline-info" 
                                                            onclick="document.getElementById('w_examples_${exIndex}_${itemIndex}').style.display = 
                                                                     document.getElementById('w_examples_${exIndex}_${itemIndex}').style.display === 'none' ? 'block' : 'none'">
                                                        Voir des exemples
                                                    </button>
                                                    <div id="w_examples_${exIndex}_${itemIndex}" class="mt-2" style="display: none;">
                                                        <div class="alert alert-info">
                                                            <strong>Exemples:</strong>
                                                            <ul>
                                                                ${item.examples.map(ex => `<li>${ex}</li>`).join('')}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ` : ''}
                                        </div>
                                    `).join('') :
                                    
                                    `<div class="writing-item mb-3">
                                        <p><strong>${exercise.question}</strong></p>
                                        <textarea class="form-control" id="w_${exIndex}_text" rows="4" 
                                                  placeholder="Écris ta réponse ici..."></textarea>
                                        ${exercise.examples ? `
                                            <div class="mt-2">
                                                <button type="button" class="btn btn-sm btn-outline-info" 
                                                        onclick="document.getElementById('w_examples_${exIndex}').style.display = 
                                                                 document.getElementById('w_examples_${exIndex}').style.display === 'none' ? 'block' : 'none'">
                                                    Voir des exemples
                                                </button>
                                                <div id="w_examples_${exIndex}" class="mt-2" style="display: none;">
                                                    <div class="alert alert-info">
                                                        <strong>Exemples:</strong>
                                                        <ul>
                                                            ${exercise.examples.map(ex => `<li>${ex}</li>`).join('')}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>`
                                }
                            </div>
                        `).join('')}
                    </form>
                </div>
            `;
        });
    }
    
    contentArea.innerHTML = html;
}

// Function to check writing answer
function checkWritingAnswer(inputId, correctAnswer) {
    const input = document.getElementById(inputId);
    const feedback = document.getElementById('w_feedback_' + inputId.substring(2));
    
    if (!input || !feedback) return;
    
    const userAnswer = input.value.trim().toLowerCase();
    const answer = correctAnswer.toLowerCase();
    
    if (userAnswer === answer || (correctAnswer === "Variable" && userAnswer.length > 0)) {
        feedback.innerHTML = '<div class="alert alert-success">Correct! Bravo!</div>';
    } else if (userAnswer.length === 0) {
        feedback.innerHTML = '<div class="alert alert-warning">Écris ta réponse.</div>';
    } else {
        feedback.innerHTML = '<div class="alert alert-danger">Essaie encore. Vérifie ton orthographe.</div>';
    }
}

// Check all writing answers
function checkWritingAnswers() {
    const writingForm = document.getElementById('writingForm');
    const inputs = writingForm.querySelectorAll('input[type="text"]');
    
    inputs.forEach(input => {
        const id = input.id;
        const sections = id.split('_');
        const exIndex = parseInt(sections[1]);
        const itemIndex = parseInt(sections[2]);
        
        const correctAnswer = currentUnit.writing[0].exercises[exIndex].items[itemIndex].answer;
        checkWritingAnswer(id, correctAnswer);
    });
}

// Display speaking content
function displaySpeaking(speaking) {
    const contentArea = document.getElementById('contentArea');
    let html = '';
    
    if (!speaking || speaking.length === 0) {
        html = '<p>Không có nội dung luyện nói cho bài học này.</p>';
    } else {
        speaking.forEach(section => {
            html += `
                <div class="speaking-section mb-4">
                    <h3>${section.title}</h3>
                    <p>${section.content}</p>
                    
                    ${section.exercises.map((exercise, index) => `
                        <div class="exercise-container mb-4">
                            <h4>${exercise.title}</h4>
                            
                            ${exercise.text ? `
                                <div class="reading-text p-3 bg-light rounded mb-3">
                                    <p style="white-space: pre-line;">${exercise.text}</p>
                                    <button class="btn btn-primary mt-2" onclick="speakWord(\`${exercise.text}\`)">
                                        <i class="fas fa-volume-up"></i> Écouter
                                    </button>
                                </div>
                                <p>${exercise.instructions || ''}</p>
                            ` : ''}
                            
                            ${exercise.questions ? `
                                <div class="questions-container">
                                    <h5>Questions:</h5>
                                    <ol>
                                        ${exercise.questions.map((question, qIndex) => `
                                            <li class="mb-2">
                                                ${question}
                                                <button class="btn btn-sm btn-outline-primary ms-2" onclick="speakWord('${question}')">
                                                    <i class="fas fa-volume-up"></i>
                                                </button>
                                                ${exercise.sample_answers ? `
                                                    <div class="mt-2">
                                                        <button type="button" class="btn btn-sm btn-outline-info" 
                                                                onclick="document.getElementById('s_answer_${index}_${qIndex}').style.display = 
                                                                         document.getElementById('s_answer_${index}_${qIndex}').style.display === 'none' ? 'block' : 'none'">
                                                            Voir exemple de réponse
                                                        </button>
                                                        <div id="s_answer_${index}_${qIndex}" class="mt-2" style="display: none;">
                                                            <div class="alert alert-info">
                                                                ${exercise.sample_answers[qIndex]}
                                                                <button class="btn btn-sm btn-outline-primary ms-2" 
                                                                        onclick="speakWord('${exercise.sample_answers[qIndex]}')">
                                                                    <i class="fas fa-volume-up"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ` : ''}
                                            </li>
                                        `).join('')}
                                    </ol>
                                </div>
                            ` : ''}
                            
                            ${exercise.images ? `
                                <div class="images-container">
                                    <h5>Qu'est-ce qu'elle fait? / Que fait-elle?</h5>
                                    <div class="d-flex flex-wrap">
                                        ${exercise.images.map((img, imgIndex) => `
                                            <div class="image-item m-2 text-center">
                                                <img src="${img}" alt="Activity ${imgIndex + 1}" class="img-fluid mb-2" style="max-height: 150px;">
                                                ${exercise.sample_answers ? `
                                                    <div>
                                                        <button type="button" class="btn btn-sm btn-outline-info" 
                                                                onclick="document.getElementById('s_img_answer_${index}_${imgIndex}').style.display = 
                                                                         document.getElementById('s_img_answer_${index}_${imgIndex}').style.display === 'none' ? 'block' : 'none'">
                                                            Voir exemple
                                                        </button>
                                                        <div id="s_img_answer_${index}_${imgIndex}" class="mt-2" style="display: none;">
                                                            <div class="alert alert-info">
                                                                ${exercise.sample_answers[imgIndex]}
                                                                <button class="btn btn-sm btn-outline-primary ms-2" 
                                                                        onclick="speakWord('${exercise.sample_answers[imgIndex]}')">
                                                                    <i class="fas fa-volume-up"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ` : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        });
    }
    
    contentArea.innerHTML = html;
}

// Display pronunciation content
function displayPronunciation(pronunciation) {
    const contentArea = document.getElementById('contentArea');
    
    if (!pronunciation || !pronunciation.content) {
        contentArea.innerHTML = '<p>Không có nội dung phát âm cho bài học này.</p>';
        return;
    }
    
    let html = `
        <h3>${pronunciation.title || 'Phát âm'}</h3>
        <div class="pronunciation-content">
    `;
    
    // Add pronunciation content
    pronunciation.content.forEach((item, index) => {
        html += `<p>${item}</p>`;
    });
    
    // Add button to play all examples
    html += `
        <button class="btn btn-primary mt-3" onclick="speakPronunciationExamples()">
            <i class="fas fa-volume-up"></i> Nghe tất cả ví dụ
        </button>
    `;
    
    // If there are sections, display them
    if (pronunciation.sections && pronunciation.sections.length > 0) {
        pronunciation.sections.forEach(section => {
            html += `
                <div class="pronunciation-section mt-4">
                    <h4>${section.title}</h4>
                    <p>${section.explanation || ''}</p>
                    <div class="examples">
                        ${section.examples.map(example => `
                            <span class="pronunciation-example" onclick="speakWord('${example}')">
                                ${example} <i class="fas fa-volume-up"></i>
                            </span>
                        `).join('')}
                    </div>
                </div>
            `;
        });
    }
    
    html += '</div>';
    contentArea.innerHTML = html;
}

// Helper function to speak pronunciation examples
function speakPronunciationExamples() {
    if (!currentUnit.pronunciation || !currentUnit.pronunciation.content) return;
    
    // Extract example words from the content
    const content = currentUnit.pronunciation.content.join(' ');
    const exampleMatches = content.match(/:\s([a-zA-Z,\s]+)/g);
    
    if (exampleMatches && exampleMatches.length > 0) {
        // Get words from matches
        const words = exampleMatches
            .map(match => match.replace(/:\s/, '').split(','))
            .flat()
            .map(word => word.trim())
            .filter(word => word.length > 0);
        
        // Speak each word with a delay
        speakExampleGroup(words);
    }
}

// Helper function to speak a group of examples with delay
function speakExampleGroup(examples) {
    examples.forEach((word, index) => {
        setTimeout(() => {
            speakWord(word);
        }, index * 1200);
    });
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', initializeApp);
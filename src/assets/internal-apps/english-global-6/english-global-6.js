// Data structure for the units
const units = [
    {
        id: 1,
        title: "Bài 1: Trường học mới của tôi",
        grammar: {
            title: "Thì hiện tại đơn",
            content: [
                "Chúng ta sử dụng thì hiện tại đơn để nói về:",
                "- Hành động thường xuyên hoặc thói quen",
                "- Tình trạng cố định",
                "- Sự thật hiển nhiên",
                "Cấu trúc:",
                "Khẳng định: Chủ ngữ + V(s/es)",
                "Phủ định: Chủ ngữ + don't/doesn't + V",
                "Câu hỏi: Do/Does + Chủ ngữ + V?"
            ]
        },
        vocabulary: {
            title: "Cuộc sống học đường",
            words: [
                { 
                    word: "teacher", 
                    meaning: "giáo viên", 
                    example: "My English teacher is very kind. (Giáo viên tiếng Anh của tôi rất tốt bụng.)" 
                },
                { 
                    word: "student", 
                    meaning: "học sinh", 
                    example: "He is a good student. (Anh ấy là một học sinh giỏi.)" 
                },
                { 
                    word: "subject", 
                    meaning: "môn học", 
                    example: "Math is my favorite subject. (Toán là môn học yêu thích của tôi.)" 
                },
                { 
                    word: "classroom", 
                    meaning: "lớp học", 
                    example: "Our classroom is on the second floor. (Lớp học của chúng tôi ở tầng hai.)" 
                },
                { 
                    word: "library", 
                    meaning: "thư viện", 
                    example: "I often study in the library. (Tôi thường học trong thư viện.)" 
                },
                { 
                    word: "homework", 
                    meaning: "bài tập về nhà", 
                    example: "I need to finish my homework. (Tôi cần hoàn thành bài tập về nhà.)" 
                },
                { 
                    word: "pencil", 
                    meaning: "bút chì", 
                    example: "Can I borrow your pencil? (Tôi có thể mượn bút chì của bạn không?)" 
                },
                { 
                    word: "notebook", 
                    meaning: "vở", 
                    example: "I write notes in my notebook. (Tôi ghi chép vào vở.)" 
                },
                { 
                    word: "backpack", 
                    meaning: "ba lô", 
                    example: "My backpack is heavy today. (Ba lô của tôi hôm nay nặng.)" 
                },
                { 
                    word: "principal", 
                    meaning: "hiệu trưởng", 
                    example: "The principal gave a speech. (Hiệu trưởng đã có bài phát biểu.)" 
                }
            ]
        },
        exercises: [
            {
                question: "She _____ (go) to school by bus. (Cô ấy đi học bằng xe buýt.)",
                answer: "goes",
                options: ["go", "goes", "going", "went"]
            },
            {
                question: "_____ they study English every day? (Họ có học tiếng Anh mỗi ngày không?)",
                answer: "Do",
                options: ["Do", "Does", "Are", "Is"]
            },
            {
                question: "We _____ (not/like) homework. (Chúng tôi không thích bài tập về nhà.)",
                answer: "don't like",
                options: ["don't like", "doesn't like", "not like", "no like"]
            }
        ]
    },
    {
        id: 2,
        title: "Bài 2: Sở thích của tôi",
        grammar: {
            title: "Thì hiện tại tiếp diễn",
            content: [
                "Chúng ta sử dụng thì hiện tại tiếp diễn để nói về:",
                "- Hành động đang diễn ra",
                "- Hành động tạm thời",
                "- Kế hoạch trong tương lai gần",
                "Cấu trúc:",
                "Khẳng định: Chủ ngữ + am/is/are + V-ing",
                "Phủ định: Chủ ngữ + am/is/are + not + V-ing",
                "Câu hỏi: Am/Is/Are + Chủ ngữ + V-ing?"
            ]
        },
        vocabulary: {
            title: "Sở thích và hoạt động",
            words: [
                { 
                    word: "hobby", 
                    meaning: "sở thích", 
                    example: "Reading is my hobby. (Đọc sách là sở thích của tôi.)" 
                },
                { 
                    word: "collect", 
                    meaning: "sưu tập", 
                    example: "I collect stamps. (Tôi sưu tập tem.)" 
                },
                { 
                    word: "paint", 
                    meaning: "vẽ tranh", 
                    example: "She paints beautiful pictures. (Cô ấy vẽ những bức tranh đẹp.)" 
                },
                { 
                    word: "draw", 
                    meaning: "vẽ", 
                    example: "He draws comics. (Anh ấy vẽ truyện tranh.)" 
                },
                { 
                    word: "music", 
                    meaning: "âm nhạc", 
                    example: "I love listening to music. (Tôi thích nghe nhạc.)" 
                },
                { 
                    word: "dance", 
                    meaning: "nhảy múa", 
                    example: "They are dancing at the party. (Họ đang nhảy múa ở bữa tiệc.)" 
                },
                { 
                    word: "sing", 
                    meaning: "hát", 
                    example: "She sings beautifully. (Cô ấy hát hay.)" 
                },
                { 
                    word: "read", 
                    meaning: "đọc", 
                    example: "I read books every day. (Tôi đọc sách mỗi ngày.)" 
                },
                { 
                    word: "write", 
                    meaning: "viết", 
                    example: "He writes stories. (Anh ấy viết truyện.)" 
                },
                { 
                    word: "photography", 
                    meaning: "nhiếp ảnh", 
                    example: "Photography is her passion. (Nhiếp ảnh là đam mê của cô ấy.)" 
                }
            ]
        },
        exercises: [
            {
                question: "What _____ you _____ (do) right now? (Bạn đang làm gì vậy?)",
                answer: "are, doing",
                options: ["is, doing", "are, doing", "am, doing", "are, do"]
            },
            {
                question: "They _____ (play) football at the moment. (Họ đang chơi bóng đá.)",
                answer: "are playing",
                options: ["are playing", "is playing", "plays", "play"]
            },
            {
                question: "She _____ (not/study) now. (Cô ấy không học bây giờ.)",
                answer: "isn't studying",
                options: ["isn't studying", "aren't studying", "not studying", "doesn't study"]
            }
        ]
    },
    {
        id: 3,
        title: "Bài 3: Gia đình của tôi",
        grammar: {
            title: "Tính từ sở hữu",
            content: [
                "Chúng ta sử dụng tính từ sở hữu để chỉ sự sở hữu:",
                "- my (của tôi)",
                "- your (của bạn)",
                "- his (của anh ấy)",
                "- her (của cô ấy)",
                "- its (của nó)",
                "- our (của chúng tôi)",
                "- their (của họ)",
                "Ví dụ: This is my book. (Đây là sách của tôi.)"
            ]
        },
        vocabulary: {
            title: "Gia đình",
            words: [
                { 
                    word: "father", 
                    meaning: "bố", 
                    example: "My father works in a bank. (Bố tôi làm việc ở ngân hàng.)" 
                },
                { 
                    word: "mother", 
                    meaning: "mẹ", 
                    example: "My mother is a doctor. (Mẹ tôi là bác sĩ.)" 
                },
                { 
                    word: "sister", 
                    meaning: "chị/em gái", 
                    example: "I have two sisters. (Tôi có hai chị/em gái.)" 
                },
                { 
                    word: "brother", 
                    meaning: "anh/em trai", 
                    example: "My brother plays football. (Anh/em trai tôi chơi bóng đá.)" 
                },
                { 
                    word: "grandmother", 
                    meaning: "bà", 
                    example: "My grandmother lives with us. (Bà tôi sống với chúng tôi.)" 
                },
                { 
                    word: "grandfather", 
                    meaning: "ông", 
                    example: "My grandfather tells great stories. (Ông tôi kể chuyện hay.)" 
                },
                { 
                    word: "aunt", 
                    meaning: "cô/dì", 
                    example: "My aunt is a teacher. (Cô tôi là giáo viên.)" 
                },
                { 
                    word: "uncle", 
                    meaning: "chú/bác", 
                    example: "My uncle lives in America. (Chú tôi sống ở Mỹ.)" 
                },
                { 
                    word: "cousin", 
                    meaning: "anh/chị/em họ", 
                    example: "I play with my cousins on weekends. (Tôi chơi với anh chị em họ vào cuối tuần.)" 
                },
                { 
                    word: "family", 
                    meaning: "gia đình", 
                    example: "I love my family. (Tôi yêu gia đình tôi.)" 
                }
            ]
        },
        exercises: [
            {
                question: "This is _____ book. (Đây là sách của tôi.)",
                answer: "my",
                options: ["my", "your", "his", "her"]
            },
            {
                question: "_____ parents are very kind. (Bố mẹ của họ rất tốt bụng.)",
                answer: "Their",
                options: ["Their", "They", "Them", "There"]
            },
            {
                question: "She lives with _____ grandmother. (Cô ấy sống với bà của cô ấy.)",
                answer: "her",
                options: ["her", "his", "their", "its"]
            }
        ]
    },
    {
        id: 4,
        title: "Bài 4: Thể thao và Giải trí",
        grammar: {
            title: "Can/Cannot (Có thể/Không thể)",
            content: [
                "Chúng ta sử dụng can/cannot để nói về khả năng:",
                "- Khẳng định: Subject + can + V (nguyên thể)",
                "- Phủ định: Subject + cannot/can't + V (nguyên thể)",
                "- Câu hỏi: Can + Subject + V (nguyên thể)?",
                "Ví dụ: I can swim. (Tôi biết bơi.)"
            ]
        },
        vocabulary: {
            title: "Thể thao và Giải trí",
            words: [
                { 
                    word: "football", 
                    meaning: "bóng đá", 
                    example: "I play football every weekend. (Tôi chơi bóng đá mỗi cuối tuần.)" 
                },
                { 
                    word: "basketball", 
                    meaning: "bóng rổ", 
                    example: "He plays basketball well. (Anh ấy chơi bóng rổ giỏi.)" 
                },
                { 
                    word: "swimming", 
                    meaning: "bơi lội", 
                    example: "Swimming is good exercise. (Bơi lội là bài tập tốt.)" 
                },
                { 
                    word: "tennis", 
                    meaning: "quần vợt", 
                    example: "They play tennis together. (Họ chơi quần vợt cùng nhau.)" 
                },
                { 
                    word: "volleyball", 
                    meaning: "bóng chuyền", 
                    example: "We play volleyball at school. (Chúng tôi chơi bóng chuyền ở trường.)" 
                },
                { 
                    word: "movie", 
                    meaning: "phim", 
                    example: "I watch movies on weekends. (Tôi xem phim vào cuối tuần.)" 
                },
                { 
                    word: "game", 
                    meaning: "trò chơi", 
                    example: "Video games are fun. (Trò chơi điện tử rất vui.)" 
                },
                { 
                    word: "park", 
                    meaning: "công viên", 
                    example: "We go to the park on Sundays. (Chúng tôi đi công viên vào Chủ nhật.)" 
                },
                { 
                    word: "bicycle", 
                    meaning: "xe đạp", 
                    example: "I ride my bicycle to school. (Tôi đi xe đạp đến trường.)" 
                },
                { 
                    word: "run", 
                    meaning: "chạy", 
                    example: "She runs every morning. (Cô ấy chạy bộ mỗi sáng.)" 
                }
            ]
        },
        exercises: [
            {
                question: "He _____ play basketball very well. (Anh ấy có thể chơi bóng rổ rất giỏi.)",
                answer: "can",
                options: ["can", "cannot", "do", "does"]
            },
            {
                question: "_____ you swim? (Bạn có biết bơi không?)",
                answer: "Can",
                options: ["Can", "Do", "Are", "Is"]
            },
            {
                question: "They _____ play tennis. (Họ không thể chơi quần vợt.)",
                answer: "cannot",
                options: ["cannot", "can", "don't", "doesn't"]
            }
        ]
    },
    {
        id: 5,
        title: "Bài 5: Thời tiết và Mùa",
        grammar: {
            title: "So sánh hơn (Comparative)",
            content: [
                "Cấu trúc so sánh hơn với tính từ ngắn:",
                "- Tính từ + er + than",
                "Ví dụ: cold → colder than",
                "",
                "Cấu trúc so sánh hơn với tính từ dài:",
                "- more + tính từ + than",
                "Ví dụ: beautiful → more beautiful than",
                "",
                "Một số tính từ đặc biệt:",
                "- good → better than",
                "- bad → worse than"
            ]
        },
        vocabulary: {
            title: "Thời tiết và Mùa",
            words: [
                { 
                    word: "weather", 
                    meaning: "thời tiết", 
                    example: "What's the weather like today? (Thời tiết hôm nay thế nào?)" 
                },
                { 
                    word: "season", 
                    meaning: "mùa", 
                    example: "There are four seasons in a year. (Có bốn mùa trong một năm.)" 
                },
                { 
                    word: "summer", 
                    meaning: "mùa hè", 
                    example: "Summer is very hot. (Mùa hè rất nóng.)" 
                },
                { 
                    word: "winter", 
                    meaning: "mùa đông", 
                    example: "It snows in winter. (Tuyết rơi vào mùa đông.)" 
                },
                { 
                    word: "spring", 
                    meaning: "mùa xuân", 
                    example: "Flowers bloom in spring. (Hoa nở vào mùa xuân.)" 
                },
                { 
                    word: "autumn", 
                    meaning: "mùa thu", 
                    example: "Leaves fall in autumn. (Lá rụng vào mùa thu.)" 
                },
                { 
                    word: "sunny", 
                    meaning: "nắng", 
                    example: "It's sunny today. (Hôm nay trời nắng.)" 
                },
                { 
                    word: "rainy", 
                    meaning: "mưa", 
                    example: "It's rainy in the afternoon. (Trời mưa vào buổi chiều.)" 
                },
                { 
                    word: "cloudy", 
                    meaning: "nhiều mây", 
                    example: "The sky is cloudy. (Bầu trời nhiều mây.)" 
                },
                { 
                    word: "windy", 
                    meaning: "gió", 
                    example: "It's very windy today. (Hôm nay trời rất gió.)" 
                }
            ]
        },
        exercises: [
            {
                question: "Summer is _____ than winter. (Mùa hè nóng hơn mùa đông.)",
                answer: "hotter",
                options: ["hot", "hotter", "more hot", "hottest"]
            },
            {
                question: "Today is _____ than yesterday. (Hôm nay đẹp hơn hôm qua.)",
                answer: "more beautiful",
                options: ["beautiful", "more beautiful", "beautifuler", "most beautiful"]
            },
            {
                question: "The weather is _____ than last week. (Thời tiết tệ hơn tuần trước.)",
                answer: "worse",
                options: ["bad", "worse", "more bad", "worst"]
            }
        ]
    },
    {
        id: 6,
        title: "Bài 6: Món ăn và Đồ uống",
        grammar: {
            title: "Some/Any và Countable/Uncountable Nouns",
            content: [
                "Some: dùng trong câu khẳng định",
                "Any: dùng trong câu phủ định và câu hỏi",
                "",
                "Countable Nouns (Danh từ đếm được):",
                "- Có thể đếm được",
                "- Có dạng số ít và số nhiều",
                "Ví dụ: an apple, two apples",
                "",
                "Uncountable Nouns (Danh từ không đếm được):",
                "- Không thể đếm được",
                "- Không có dạng số nhiều",
                "Ví dụ: water, rice"
            ]
        },
        vocabulary: {
            title: "Món ăn và Đồ uống",
            words: [
                { 
                    word: "food", 
                    meaning: "thức ăn", 
                    example: "Vietnamese food is delicious. (Thức ăn Việt Nam rất ngon.)" 
                },
                { 
                    word: "drink", 
                    meaning: "đồ uống", 
                    example: "What would you like to drink? (Bạn muốn uống gì?)" 
                },
                { 
                    word: "rice", 
                    meaning: "cơm/gạo", 
                    example: "We eat rice every day. (Chúng tôi ăn cơm mỗi ngày.)" 
                },
                { 
                    word: "noodles", 
                    meaning: "mì", 
                    example: "I like eating noodles. (Tôi thích ăn mì.)" 
                },
                { 
                    word: "vegetables", 
                    meaning: "rau củ", 
                    example: "Vegetables are good for health. (Rau củ tốt cho sức khỏe.)" 
                },
                { 
                    word: "fruit", 
                    meaning: "trái cây", 
                    example: "I eat fruit every day. (Tôi ăn trái cây mỗi ngày.)" 
                },
                { 
                    word: "water", 
                    meaning: "nước", 
                    example: "Please give me some water. (Làm ơn cho tôi ít nước.)" 
                },
                { 
                    word: "juice", 
                    meaning: "nước ép", 
                    example: "I like orange juice. (Tôi thích nước cam.)" 
                },
                { 
                    word: "milk", 
                    meaning: "sữa", 
                    example: "I drink milk every morning. (Tôi uống sữa mỗi sáng.)" 
                },
                { 
                    word: "tea", 
                    meaning: "trà", 
                    example: "Would you like some tea? (Bạn có muốn uống trà không?)" 
                }
            ]
        },
        exercises: [
            {
                question: "Is there _____ milk in the fridge? (Có sữa trong tủ lạnh không?)",
                answer: "any",
                options: ["some", "any", "a", "an"]
            },
            {
                question: "I need _____ rice for dinner. (Tôi cần một ít gạo cho bữa tối.)",
                answer: "some",
                options: ["a", "an", "some", "any"]
            },
            {
                question: "There aren't _____ apples left. (Không còn táo nào.)",
                answer: "any",
                options: ["some", "any", "much", "many"]
            }
        ]
    },
    {
        id: 7,
        title: "Unit 7: Television",
        grammar: {
            title: "Grammar",
            content: [
                "1. Wh-questions:",
                "- When: hỏi về thời gian",
                "- What: hỏi về sự vật/việc",
                "- Where: hỏi về địa điểm",
                "- Who: hỏi về người",
                "- How often: hỏi về tần suất",
                "",
                "2. Conjunctions in compound sentences:",
                "- and: nối 2 ý cùng chiều",
                "- but: nối 2 ý trái ngược",
                "- so: nối 2 ý quan hệ nguyên nhân-kết quả",
                "",
                "Ví dụ:",
                "- I like watching cartoons, but my brother likes watching sports.",
                "- I enjoy sports, so I spend a lot of time outdoors.",
                "- I'm helping decorate the house, and my brother is busy cooking."
            ]
        },
        vocabulary: {
            title: "Television",
            words: [
                {
                    word: "talent show",
                    meaning: "chương trình tài năng",
                    example: "A competition to choose the best performer",
                    exampleMeaning: "Cuộc thi chọn người biểu diễn xuất sắc nhất"
                },
                {
                    word: "comedy",
                    meaning: "phim hài",
                    example: "A film/show which makes people laugh",
                    exampleMeaning: "Phim/chương trình làm cho người xem cười"
                },
                {
                    word: "educational programme",
                    meaning: "chương trình giáo dục",
                    example: "A programme which teaches maths, English, etc.",
                    exampleMeaning: "Chương trình dạy toán, tiếng Anh, v.v."
                },
                {
                    word: "character",
                    meaning: "nhân vật",
                    example: "An animal or a person in a film",
                    exampleMeaning: "Một con vật hoặc người trong phim"
                },
                {
                    word: "viewer",
                    meaning: "người xem",
                    example: "A person who watches TV",
                    exampleMeaning: "Người xem TV"
                },
                {
                    word: "animated films",
                    meaning: "phim hoạt hình",
                    example: "Movies made with animation",
                    exampleMeaning: "Phim được làm bằng hoạt hình"
                },
                {
                    word: "game show",
                    meaning: "chương trình trò chơi",
                    example: "A TV show where people play games and win prizes",
                    exampleMeaning: "Chương trình TV nơi người chơi tham gia các trò chơi và giành giải thưởng"
                },
                {
                    word: "channel",
                    meaning: "kênh",
                    example: "Different TV stations you can watch",
                    exampleMeaning: "Các kênh TV khác nhau có thể xem"
                },
                {
                    word: "popular",
                    meaning: "phổ biến",
                    example: "Liked by many people",
                    exampleMeaning: "Được nhiều người yêu thích"
                },
                {
                    word: "boring",
                    meaning: "nhàm chán",
                    example: "Not interesting",
                    exampleMeaning: "Không thú vị"
                }
            ]
        },
        exercises: [
            {
                question: "Complete the sentence: The most _____ channel for children is the Cartoon Network.",
                answer: "popular",
                options: ["popular", "boring", "educational", "funny"]
            },
            {
                question: "What do we call an animal or person in a film?",
                answer: "character",
                options: ["viewer", "character", "channel", "comedy"]
            },
            {
                question: "Which type of programme teaches subjects like maths and English?",
                answer: "educational programme",
                options: ["talent show", "comedy", "educational programme", "game show"]
            },
            {
                question: "Complete: I love _____ like Happy Feet and Coco.",
                answer: "animated films",
                options: ["game show", "animated films", "channel", "talent show"]
            },
            {
                question: "What do we call someone who watches TV?",
                answer: "viewer",
                options: ["character", "viewer", "channel", "comedy"]
            }
        ],
        pronunciation: {
            title: "Pronunciation",
            content: [
                "Sounds: /θ/ and /ð/",
                "Words with /θ/: theatre, earth, anything, both, through",
                "Words with /ð/: there, them, neither, weather, than"
            ]
        }
    },
    {
        id: 8,
        title: "Unit 8: Sports and Games",
        grammar: {
            title: "Grammar",
            content: [
                "1. Past Simple (Thì quá khứ đơn):",
                "Dùng để nói về hành động đã xảy ra trong quá khứ",
                "- Khẳng định: S + V-ed/V2",
                "- Phủ định: S + didn't + V",
                "- Câu hỏi: Did + S + V?",
                "",
                "Ví dụ:",
                "- I played football yesterday (Tôi đã chơi bóng đá hôm qua)",
                "- She didn't win the match (Cô ấy đã không thắng trận đấu)",
                "- Did you watch the game? (Bạn đã xem trận đấu chưa?)",
                "",
                "2. Imperatives (Câu mệnh lệnh):",
                "Dùng để đưa ra mệnh lệnh hoặc hướng dẫn",
                "- Khẳng định: V (nguyên thể)",
                "- Phủ định: Don't + V",
                "",
                "Ví dụ:",
                "- Pass the ball! (Chuyền bóng đi!)",
                "- Don't run in the pool! (Đừng chạy trong hồ bơi!)",
                "- Follow the rules! (Hãy tuân thủ luật chơi!)"
            ]
        },
        vocabulary: {
            title: "Sports and Games",
            words: [
                {
                    word: "ball",
                    meaning: "quả bóng",
                    example: "Kick the ball into the goal.",
                    exampleMeaning: "Sút bóng vào khung thành."
                },
                {
                    word: "boat",
                    meaning: "thuyền",
                    example: "They went boating on the lake.",
                    exampleMeaning: "Họ đi thuyền trên hồ."
                },
                {
                    word: "racket",
                    meaning: "vợt",
                    example: "You need a racket to play tennis.",
                    exampleMeaning: "Bạn cần một cây vợt để chơi tennis."
                },
                {
                    word: "goggles",
                    meaning: "kính bơi",
                    example: "Wear goggles when you swim.",
                    exampleMeaning: "Đeo kính bơi khi bạn bơi."
                },
                {
                    word: "sports shoes",
                    meaning: "giày thể thao",
                    example: "These sports shoes are comfortable.",
                    exampleMeaning: "Đôi giày thể thao này rất thoải mái."
                },
                {
                    word: "champion",
                    meaning: "nhà vô địch",
                    example: "He became the world tennis champion.",
                    exampleMeaning: "Anh ấy đã trở thành nhà vô địch tennis thế giới."
                },
                {
                    word: "competition",
                    meaning: "cuộc thi đấu",
                    example: "She won an international sports competition.",
                    exampleMeaning: "Cô ấy đã thắng một cuộc thi đấu thể thao quốc tế."
                },
                {
                    word: "sporty",
                    meaning: "năng động",
                    example: "My friend David is very sporty.",
                    exampleMeaning: "Bạn David của tôi rất năng động."
                },
                {
                    word: "marathon",
                    meaning: "cuộc chạy marathon",
                    example: "The first marathon took place in 1896.",
                    exampleMeaning: "Cuộc chạy marathon đầu tiên diễn ra vào năm 1896."
                },
                {
                    word: "congratulations",
                    meaning: "chúc mừng",
                    example: "Congratulations on winning the match!",
                    exampleMeaning: "Chúc mừng bạn đã thắng trận đấu!"
                },
                {
                    word: "cycling",
                    meaning: "đạp xe",
                    example: "I go cycling every weekend.",
                    exampleMeaning: "Tôi đi đạp xe mỗi cuối tuần."
                },
                {
                    word: "swimming",
                    meaning: "bơi lội",
                    example: "Swimming is good exercise.",
                    exampleMeaning: "Bơi lội là bài tập tốt."
                },
                {
                    word: "badminton",
                    meaning: "cầu lông",
                    example: "Let's play badminton after school.",
                    exampleMeaning: "Hãy chơi cầu lông sau giờ học."
                },
                {
                    word: "chess",
                    meaning: "cờ vua",
                    example: "We play chess every Saturday.",
                    exampleMeaning: "Chúng tôi chơi cờ vua mỗi thứ Bảy."
                },
                {
                    word: "match",
                    meaning: "trận đấu",
                    example: "They began the match very late.",
                    exampleMeaning: "Họ bắt đầu trận đấu rất muộn."
                }
            ]
        },
        exercises: [
            {
                question: "Complete the sentence: She won an international sports _____.",
                answer: "competition",
                options: ["champion", "competition", "sporty", "marathon"]
            },
            {
                question: "He _____ the world tennis champion when he was very young.",
                answer: "became",
                options: ["become", "became", "becomes", "becoming"]
            },
            {
                question: "Can you send my _____ to the winner of the contest?",
                answer: "congratulations",
                options: ["champion", "competition", "congratulations", "sporty"]
            },
            {
                question: "My friend David is very _____. He does exercise every day.",
                answer: "sporty",
                options: ["champion", "competition", "sporty", "marathon"]
            },
            {
                question: "The first _____ took place in 1896.",
                answer: "marathon",
                options: ["champion", "competition", "sporty", "marathon"]
            },
            {
                question: "What do you need to play tennis?",
                answer: "racket",
                options: ["ball", "boat", "racket", "goggles"]
            },
            {
                question: "_____ you play football yesterday?",
                answer: "Did",
                options: ["Do", "Did", "Does", "Done"]
            },
            {
                question: "Don't _____ in the swimming pool!",
                answer: "run",
                options: ["running", "runs", "run", "ran"]
            }
        ],
        pronunciation: {
            title: "Pronunciation",
            content: [
                "Sounds: /e/ and /æ/",
                "",
                "Words with /e/:",
                "- chess",
                "- tennis",
                "- exercise",
                "- contest",
                "",
                "Words with /æ/:",
                "- racket",
                "- match",
                "- marathon",
                "- active"
            ]
        }
    },
    {
        id: 9,
        title: "Unit 9: Cities of the World",
        grammar: {
            title: "Grammar",
            content: [
                "1. Possessive Adjectives (Tính từ sở hữu):",
                "Dùng để chỉ sự sở hữu của một người/vật nào đó",
                "- my (của tôi)",
                "- your (của bạn)",
                "- his (của anh ấy)",
                "- her (của cô ấy)",
                "- its (của nó)",
                "- our (của chúng tôi)",
                "- their (của họ)",
                "",
                "Ví dụ:",
                "- This is my city. (Đây là thành phố của tôi)",
                "- Their landmarks are famous. (Các địa danh của họ nổi tiếng)",
                "",
                "2. Possessive Pronouns (Đại từ sở hữu):",
                "Dùng để thay thế danh từ chỉ sự sở hữu",
                "- mine (của tôi)",
                "- yours (của bạn)",
                "- his (của anh ấy)",
                "- hers (của cô ấy)",
                "- its (của nó)",
                "- ours (của chúng tôi)",
                "- theirs (của họ)",
                "",
                "Ví dụ:",
                "- This postcard is mine. (Tấm bưu thiếp này là của tôi)",
                "- That city map is yours. (Bản đồ thành phố đó là của bạn)"
            ]
        },
        vocabulary: {
            title: "Cities and Landmarks",
            words: [
                {
                    word: "city",
                    meaning: "thành phố",
                    example: "London is a big city.",
                    exampleMeaning: "London là một thành phố lớn."
                },
                {
                    word: "palace",
                    meaning: "cung điện",
                    example: "The palace is very beautiful.",
                    exampleMeaning: "Cung điện rất đẹp."
                },
                {
                    word: "street food",
                    meaning: "đồ ăn đường phố",
                    example: "Ha Noi is famous for its street food.",
                    exampleMeaning: "Hà Nội nổi tiếng với đồ ăn đường phố."
                },
                {
                    word: "floating market",
                    meaning: "chợ nổi",
                    example: "There are many floating markets in the Mekong Delta.",
                    exampleMeaning: "Có nhiều chợ nổi ở đồng bằng sông Cửu Long."
                },
                {
                    word: "stall",
                    meaning: "quầy hàng",
                    example: "The market has many food stalls.",
                    exampleMeaning: "Chợ có nhiều quầy bán đồ ăn."
                },
                {
                    word: "landmark",
                    meaning: "địa danh",
                    example: "Big Ben is a famous landmark in London.",
                    exampleMeaning: "Big Ben là một địa danh nổi tiếng ở London."
                },
                {
                    word: "crowded",
                    meaning: "đông đúc",
                    example: "The streets are crowded at rush hour.",
                    exampleMeaning: "Đường phố đông đúc vào giờ cao điểm."
                },
                {
                    word: "exciting",
                    meaning: "thú vị",
                    example: "New York is an exciting city.",
                    exampleMeaning: "New York là một thành phố thú vị."
                },
                {
                    word: "friendly",
                    meaning: "thân thiện",
                    example: "The people in my city are friendly.",
                    exampleMeaning: "Người dân trong thành phố của tôi rất thân thiện."
                },
                {
                    word: "delicious",
                    meaning: "ngon",
                    example: "The food here is delicious.",
                    exampleMeaning: "Đồ ăn ở đây rất ngon."
                },
                {
                    word: "sunny",
                    meaning: "nắng",
                    example: "Sydney has many sunny days.",
                    exampleMeaning: "Sydney có nhiều ngày nắng."
                },
                {
                    word: "rainy",
                    meaning: "mưa",
                    example: "London is often rainy.",
                    exampleMeaning: "London thường hay mưa."
                },
                {
                    word: "helpful",
                    meaning: "hay giúp đỡ",
                    example: "The local people are very helpful.",
                    exampleMeaning: "Người dân địa phương rất hay giúp đỡ."
                },
                {
                    word: "old",
                    meaning: "cổ xưa",
                    example: "Edinburgh has many old buildings.",
                    exampleMeaning: "Edinburgh có nhiều tòa nhà cổ."
                },
                {
                    word: "tasty",
                    meaning: "ngon miệng",
                    example: "The street food is very tasty.",
                    exampleMeaning: "Đồ ăn đường phố rất ngon miệng."
                }
            ]
        },
        exercises: [
            {
                question: "Complete the sentence: The Eiffel Tower is _____ famous landmark.",
                answer: "a",
                options: ["a", "an", "the", "this"]
            },
            {
                question: "Is this _____ book about London?",
                answer: "your",
                options: ["you", "your", "yours", "you're"]
            },
            {
                question: "The lion has three cubs. _____ cubs are playing under a big tree.",
                answer: "Its",
                options: ["It's", "Its", "Their", "Theirs"]
            },
            {
                question: "This map is _____. I found it in my bag.",
                answer: "mine",
                options: ["my", "mine", "me", "I"]
            },
            {
                question: "We are from Switzerland. _____ country is famous for chocolate.",
                answer: "Our",
                options: ["We", "Our", "Ours", "Us"]
            },
            {
                question: "What's the weather like in Sydney in summer? It's _____ and dry.",
                answer: "sunny",
                options: ["sun", "sunny", "sunshine", "sunning"]
            },
            {
                question: "The people in my city are _____ and helpful.",
                answer: "friendly",
                options: ["friend", "friends", "friendly", "friendship"]
            },
            {
                question: "Ha Noi is famous for its _____ street food.",
                answer: "delicious",
                options: ["delicious", "deliciously", "delight", "delighting"]
            }
        ],
        pronunciation: {
            title: "Pronunciation",
            content: [
                "Sounds: /əʊ/ and /aʊ/",
                "",
                "Words with /əʊ/:",
                "- boat",
                "- coast",
                "- home",
                "- road",
                "",
                "Words with /aʊ/:",
                "- town",
                "- house",
                "- around",
                "- crowded"
            ]
        }
    },
    {
        id: 10,
        title: "Unit 10: Our Houses in the Future",
        grammar: {
            title: "Grammar",
            content: [
                "1. Future Simple (Will/'ll):",
                "Dùng để nói về dự đoán hoặc quyết định tức thời trong tương lai",
                "- Khẳng định: S + will/('ll) + V",
                "- Phủ định: S + won't + V",
                "- Câu hỏi: Will + S + V?",
                "",
                "Ví dụ:",
                "- It'll be a large house (Nó sẽ là một ngôi nhà lớn)",
                "- It'll have twenty rooms (Nó sẽ có hai mươi phòng)",
                "- My house will have solar energy (Nhà tôi sẽ có năng lượng mặt trời)",
                "",
                "2. Might for Future Possibility:",
                "Dùng để nói về khả năng có thể xảy ra trong tương lai",
                "- Khẳng định: S + might + V",
                "- Phủ định: S + might not + V",
                "",
                "Ví dụ:",
                "- My house might have some smart TVs (Nhà tôi có thể sẽ có vài TV thông minh)",
                "- It might be in the mountains (Nó có thể sẽ ở trên núi)",
                "- They might not come back today (Họ có thể sẽ không quay lại hôm nay)"
            ]
        },
        vocabulary: {
            title: "Houses and Appliances",
            words: [
                {
                    word: "electric cooker",
                    meaning: "bếp điện",
                    example: "The electric cooker helps us cook rice.",
                    exampleMeaning: "Bếp điện giúp chúng ta nấu cơm."
                },
                {
                    word: "dishwasher",
                    meaning: "máy rửa bát",
                    example: "The dishwasher can wash and dry dishes.",
                    exampleMeaning: "Máy rửa bát có thể rửa và làm khô bát đĩa."
                },
                {
                    word: "washing machine",
                    meaning: "máy giặt",
                    example: "The washing machine washes our clothes.",
                    exampleMeaning: "Máy giặt giặt quần áo của chúng ta."
                },
                {
                    word: "wireless TV",
                    meaning: "TV không dây",
                    example: "We can watch wireless TV anywhere.",
                    exampleMeaning: "Chúng ta có thể xem TV không dây ở bất cứ đâu."
                },
                {
                    word: "fridge",
                    meaning: "tủ lạnh",
                    example: "The fridge keeps food fresh.",
                    exampleMeaning: "Tủ lạnh giữ thức ăn tươi ngon."
                },
                {
                    word: "electric fan",
                    meaning: "quạt điện",
                    example: "Turn on the electric fan, please.",
                    exampleMeaning: "Hãy bật quạt điện lên."
                },
                {
                    word: "computer",
                    meaning: "máy tính",
                    example: "I use the computer to do homework.",
                    exampleMeaning: "Tôi dùng máy tính để làm bài tập."
                },
                {
                    word: "smart clock",
                    meaning: "đồng hồ thông minh",
                    example: "The smart clock can show the weather.",
                    exampleMeaning: "Đồng hồ thông minh có thể hiển thị thời tiết."
                },
                {
                    word: "robot",
                    meaning: "người máy",
                    example: "The robot helps me do the housework.",
                    exampleMeaning: "Người máy giúp tôi làm việc nhà."
                },
                {
                    word: "solar energy",
                    meaning: "năng lượng mặt trời",
                    example: "Our house uses solar energy.",
                    exampleMeaning: "Nhà chúng tôi sử dụng năng lượng mặt trời."
                },
                {
                    word: "bedroom",
                    meaning: "phòng ngủ",
                    example: "My bedroom is very comfortable.",
                    exampleMeaning: "Phòng ngủ của tôi rất thoải mái."
                },
                {
                    word: "living room",
                    meaning: "phòng khách",
                    example: "We watch TV in the living room.",
                    exampleMeaning: "Chúng tôi xem TV trong phòng khách."
                },
                {
                    word: "kitchen",
                    meaning: "nhà bếp",
                    example: "Mom is cooking in the kitchen.",
                    exampleMeaning: "Mẹ đang nấu ăn trong nhà bếp."
                },
                {
                    word: "smart TV",
                    meaning: "TV thông minh",
                    example: "We can watch YouTube on our smart TV.",
                    exampleMeaning: "Chúng ta có thể xem YouTube trên TV thông minh."
                },
                {
                    word: "housework",
                    meaning: "việc nhà",
                    example: "The robot helps with the housework.",
                    exampleMeaning: "Robot giúp làm việc nhà."
                }
            ]
        },
        exercises: [
            {
                question: "Complete the sentence: I think I _____ stay at home tonight.",
                answer: "'ll",
                options: ["'ll", "will", "won't", "might"]
            },
            {
                question: "My friends _____ go to the library this afternoon.",
                answer: "will",
                options: ["will", "won't", "might", "'ll"]
            },
            {
                question: "The computer _____ do my homework in the future.",
                answer: "will",
                options: ["will", "won't", "might", "'ll"]
            },
            {
                question: "Our family _____ move to the new house next week.",
                answer: "will",
                options: ["will", "won't", "might", "'ll"]
            },
            {
                question: "The robot _____ help us with housework.",
                answer: "might",
                options: ["will", "won't", "might", "'ll"]
            },
            {
                question: "Match the appliance with its function: What can an electric cooker help us to do?",
                answer: "cook rice",
                options: ["wash clothes", "cook rice", "keep food fresh", "wash dishes"]
            },
            {
                question: "Which appliance keeps food fresh?",
                answer: "fridge",
                options: ["electric cooker", "dishwasher", "fridge", "washing machine"]
            },
            {
                question: "What will houses use for energy in the future?",
                answer: "solar energy",
                options: ["electric energy", "solar energy", "wind energy", "water energy"]
            }
        ],
        pronunciation: {
            title: "Pronunciation",
            content: [
                "Stress in two-syllable words:",
                "",
                "Words with stress on first syllable:",
                "- 'picture",
                "- 'robot",
                "- 'bedroom",
                "- 'kitchen",
                "- 'housework",
                "",
                "Words with stress on second syllable:",
                "- ma'chine",
                "- e'lectric",
                "- ro'botic"
            ]
        }
    },
    {
        id: 11,
        title: "Unit 11: Our Greener World",
        grammar: {
            title: "Grammar",
            content: [
                "1. Articles (a/an/the):",
                "- Use 'a/an' with singular countable nouns when talking about them in general",
                "- Use 'the' with singular or plural nouns when they are specific",
                "Examples:",
                "- A reusable bag is better than a plastic one.",
                "- The Earth needs our protection.",
                "- The air will be cleaner if more people cycle.",
                "",
                "2. First Conditional:",
                "Used to talk about possible situations and their results in the present or future",
                "Structure: If + present simple, will/won't + verb",
                "Examples:",
                "- If we use reusable bags, we will help the environment.",
                "- If more people cycle, the air will be cleaner.",
                "- If we don't protect nature, many animals will disappear."
            ]
        },
        vocabulary: {
            title: "Environmental Protection",
            words: [
                {
                    word: "reduce",
                    meaning: "giảm thiểu",
                    example: "We should reduce the use of plastic bags.",
                    exampleMeaning: "Chúng ta nên giảm việc sử dụng túi nhựa."
                },
                {
                    word: "reuse",
                    meaning: "tái sử dụng",
                    example: "You can reuse glass bottles many times.",
                    exampleMeaning: "Bạn có thể tái sử dụng chai thủy tinh nhiều lần."
                },
                {
                    word: "recycle",
                    meaning: "tái chế",
                    example: "We recycle paper to save trees.",
                    exampleMeaning: "Chúng ta tái chế giấy để bảo vệ cây."
                },
                {
                    word: "environment",
                    meaning: "môi trường",
                    example: "We need to protect our environment.",
                    exampleMeaning: "Chúng ta cần bảo vệ môi trường."
                },
                {
                    word: "green",
                    meaning: "thân thiện với môi trường",
                    example: "Let's go green by using less plastic.",
                    exampleMeaning: "Hãy sống xanh bằng cách dùng ít nhựa hơn."
                },
                {
                    word: "rubbish",
                    meaning: "rác",
                    example: "Please don't throw rubbish on the street.",
                    exampleMeaning: "Xin đừng vứt rác ra đường."
                },
                {
                    word: "plant",
                    meaning: "trồng (cây)",
                    example: "We plant trees in our garden.",
                    exampleMeaning: "Chúng tôi trồng cây trong vườn."
                },
                {
                    word: "clean",
                    meaning: "sạch sẽ",
                    example: "We want clean air and water.",
                    exampleMeaning: "Chúng ta muốn không khí và nước sạch."
                },
                {
                    word: "pollution",
                    meaning: "ô nhiễm",
                    example: "Air pollution is a serious problem.",
                    exampleMeaning: "Ô nhiễm không khí là vấn đề nghiêm trọng."
                },
                {
                    word: "protect",
                    meaning: "bảo vệ",
                    example: "We must protect our planet.",
                    exampleMeaning: "Chúng ta phải bảo vệ hành tinh của mình."
                }
            ]
        },
        exercises: [
            {
                question: "If we _____ reusable bags, we will help the environment.",
                answer: "use",
                options: ["uses", "using", "use", "used"]
            },
            {
                question: "_____ Earth needs our protection.",
                answer: "The",
                options: ["A", "An", "The", ""]
            },
            {
                question: "We can _____ glass bottles many times.",
                answer: "reuse",
                options: ["reduce", "reuse", "recycle", "remove"]
            },
            {
                question: "If more people cycle, the air _____ cleaner.",
                answer: "will be",
                options: ["is", "are", "will be", "being"]
            },
            {
                question: "Which one is NOT a way to help the environment?",
                answer: "throw rubbish on streets",
                options: ["plant trees", "use reusable bags", "throw rubbish on streets", "reduce plastic use"]
            }
        ],
        pronunciation: {
            title: "Rhythm in sentences",
            content: [
                "In English sentences, some words are stressed and others are not.",
                "Examples of stressed syllables in environmental sentences:",
                "- If you CYcle, it'll HELP the EARTH.",
                "- WAter is GOOD for your BOdy.",
                "- The STUdents are PLANting TREES in the GARden."
            ]
        }
    },
    {
        id: "review3",
        title: "Review 3 (Units 7-8-9)",
        grammar: {
            title: "Grammar Review",
            content: [
                "1. Past Simple:",
                "- Dùng để nói về hành động đã xảy ra trong quá khứ",
                "- Khẳng định: S + V-ed/V2",
                "- Phủ định: S + didn't + V",
                "- Câu hỏi: Did + S + V?",
                "",
                "2. Imperatives:",
                "- Khẳng định: V (nguyên thể)",
                "- Phủ định: Don't + V",
                "",
                "3. Possessive Adjectives & Pronouns:",
                "- Tính từ sở hữu: my, your, his, her, its, our, their",
                "- Đại từ sở hữu: mine, yours, his, hers, its, ours, theirs"
            ]
        },
        vocabulary: {
            title: "Vocabulary Review",
            words: [
                {
                    word: "television",
                    meaning: "truyền hình",
                    example: "There are many educational programmes on television.",
                    exampleMeaning: "Có nhiều chương trình giáo dục trên truyền hình."
                },
                {
                    word: "sports",
                    meaning: "thể thao",
                    example: "Summer sports are very popular in countries with sunshine.",
                    exampleMeaning: "Các môn thể thao mùa hè rất phổ biến ở các nước có nắng."
                },
                {
                    word: "city",
                    meaning: "thành phố",
                    example: "The Eiffel Tower is a famous landmark in Paris.",
                    exampleMeaning: "Tháp Eiffel là một địa danh nổi tiếng ở Paris."
                }
            ]
        },
        exercises: [
            {
                section: "Language",
                title: "Pronunciation",
                questions: [
                    {
                        question: "Circle the word with the different underlined sound:",
                        type: "sound-identification",
                        groups: [
                            {
                                sounds: ["tower", "how", "snow"],
                                answer: "snow"
                            },
                            {
                                sounds: ["symbol", "opening", "postcard"],
                                answer: "postcard"
                            },
                            {
                                sounds: ["farther", "earth", "both"],
                                answer: "both"
                            },
                            {
                                sounds: ["Saturday", "racket", "game"],
                                answer: "game"
                            },
                            {
                                sounds: ["tennis", "prepare", "chess"],
                                answer: "chess"
                            }
                        ]
                    }
                ]
            },
            {
                section: "Vocabulary",
                title: "Fill in the gaps",
                text: "Most children love (1)_____ activities when the weather is good. They play football, go skateboarding or go (2)_____. In countries with a lot of snow like (3)_____, children go skiing with their parents to practise skiing. When they are not skiing, they can stay at home and watch interesting (4)_____ on TV or visit (5)_____ in the area.",
                options: [
                    {
                        id: 1,
                        choices: ["outdoor", "indoor", "school"],
                        answer: "outdoor"
                    },
                    {
                        id: 2,
                        choices: ["tennis", "karate", "swimming"],
                        answer: "swimming"
                    },
                    {
                        id: 3,
                        choices: ["Sweden", "India", "Brazil"],
                        answer: "Sweden"
                    },
                    {
                        id: 4,
                        choices: ["characters", "viewers", "programmes"],
                        answer: "programmes"
                    },
                    {
                        id: 5,
                        choices: ["sports", "city", "landmarks"],
                        answer: "landmarks"
                    }
                ]
            },
            {
                section: "Grammar",
                questions: [
                    {
                        question: "Choose the correct answer A, B, or C:",
                        items: [
                            {
                                question: "John, you are late. The match _____ ten minutes ago.",
                                options: ["starts", "started", "is starting"],
                                answer: "started"
                            },
                            {
                                question: "Ben wrote his parents a postcard _____ he was on holiday.",
                                options: ["because", "and", "while"],
                                answer: "while"
                            },
                            {
                                question: "Hong Kong is famous for _____ double-decker buses.",
                                options: ["its", "it", "it's"],
                                answer: "its"
                            },
                            {
                                question: "Sports and games _____ an important part in our lives.",
                                options: ["play", "plays", "played"],
                                answer: "play"
                            },
                            {
                                question: "The USA first _____ colour TV in 1953.",
                                options: ["has", "have", "had"],
                                answer: "had"
                            },
                            {
                                question: "We are now in the city museum. _____ any objects on display.",
                                options: ["Not touch", "Don't touch", "Don't touching"],
                                answer: "Don't touch"
                            }
                        ]
                    }
                ]
            },
            {
                section: "Communication",
                title: "Question Words Review",
                questions: [
                    {
                        question: "Correct these questions if needed:",
                        items: [
                            {
                                question: "Who sports do you like?",
                                answer: "What sports do you like?"
                            },
                            {
                                question: "What time do you have English class?",
                                answer: "What time do you have English class?"
                            },
                            {
                                question: "What do you like Hoi An?",
                                answer: "Why do you like Hoi An?"
                            },
                            {
                                question: "What tall are the Twin Towers in Kuala Lumpur?",
                                answer: "How tall are the Twin Towers in Kuala Lumpur?"
                            },
                            {
                                question: "When is the Great Wall in China or in Korea?",
                                answer: "Where is the Great Wall in China or in Korea?"
                            }
                        ]
                    }
                ]
            }
        ],
        skills: {
            reading: {
                title: "Strange Sports",
                content: [
                    {
                        title: "Toe Wrestling",
                        description: "A sport where players try to pin down their opponent's toes."
                    },
                    {
                        title: "Cheese Rolling",
                        description: "People chase a wheel of cheese down a steep hill."
                    }
                ]
            }
        }
    },
    {
        id: 12,
        title: "Unit 12: Robots",
        grammar: {
            title: "Superlative Adjectives",
            content: [
                "We use superlative adjectives to compare three or more people or things.",
                "",
                "1. For short adjectives (one syllable):",
                "- Add -est to the adjective",
                "Examples:",
                "- tall → tallest",
                "- fast → fastest",
                "- strong → strongest",
                "",
                "2. For long adjectives (two or more syllables):",
                "- Add 'the most' before the adjective",
                "Examples:",
                "- intelligent → the most intelligent",
                "- beautiful → the most beautiful",
                "",
                "3. Special cases:",
                "- good → the best",
                "- bad → the worst",
                "- far → the farthest/furthest"
            ]
        },
        vocabulary: {
            title: "Robots and Activities",
            words: [
                {
                    word: "robot",
                    meaning: "người máy",
                    example: "H8 is a home robot.",
                    exampleMeaning: "H8 là một người máy gia đình."
                },
                {
                    word: "useful",
                    meaning: "hữu ích",
                    example: "This robot is very useful in the house.",
                    exampleMeaning: "Người máy này rất hữu ích trong nhà."
                },
                {
                    word: "smart",
                    meaning: "thông minh",
                    example: "Shifa is the smartest robot in the show.",
                    exampleMeaning: "Shifa là người máy thông minh nhất trong buổi triển lãm."
                },
                {
                    word: "strong",
                    meaning: "mạnh mẽ",
                    example: "WB2 is the strongest robot here.",
                    exampleMeaning: "WB2 là người máy mạnh nhất ở đây."
                },
                {
                    word: "fast",
                    meaning: "nhanh",
                    example: "This robot is very fast at cleaning.",
                    exampleMeaning: "Người máy này dọn dẹp rất nhanh."
                },
                {
                    word: "do the dishes",
                    meaning: "rửa bát đĩa",
                    example: "The robot can do the dishes.",
                    exampleMeaning: "Người máy có thể rửa bát đĩa."
                },
                {
                    word: "iron clothes",
                    meaning: "ủi quần áo",
                    example: "H8 can iron clothes very well.",
                    exampleMeaning: "H8 có thể ủi quần áo rất tốt."
                },
                {
                    word: "make meals",
                    meaning: "nấu ăn",
                    example: "The robot can make delicious meals.",
                    exampleMeaning: "Người máy có thể nấu những bữa ăn ngon."
                },
                {
                    word: "repair",
                    meaning: "sửa chữa",
                    example: "WB2 can repair broken machines.",
                    exampleMeaning: "WB2 có thể sửa chữa máy móc hỏng."
                },
                {
                    word: "put toys away",
                    meaning: "dọn đồ chơi",
                    example: "The robot helps put toys away.",
                    exampleMeaning: "Người máy giúp dọn đồ chơi."
                }
            ]
        },
        exercises: [
            {
                question: "WB2 is _____ robot in the show. (strong)",
                answer: "the strongest",
                options: ["stronger", "the strongest", "most strong", "strongest"]
            },
            {
                question: "Shifa is _____ robot. It can help sick people. (smart)",
                answer: "the smartest",
                options: ["smarter", "the smartest", "most smart", "smartest"]
            },
            {
                question: "H8 is _____ home robot. It can do many things. (useful)",
                answer: "a very useful",
                options: ["the usefulest", "more useful", "a very useful", "the most useful"]
            },
            {
                question: "Which robot can _____ broken machines?",
                answer: "repair",
                options: ["repair", "make", "do", "put"]
            },
            {
                question: "The robot helps me _____ after dinner.",
                answer: "do the dishes",
                options: ["make meals", "iron clothes", "do the dishes", "put toys away"]
            }
        ],
        pronunciation: {
            title: "Tones in statements",
            content: [
                "In English statements, our voice often goes down at the end.",
                "Examples:",
                "- I often water plants after school.",
                "- Shifa can do many things like humans.",
                "- My dad makes delicious meals at weekends.",
                "- WB2 is the strongest of all the robots.",
                "- H8 is a home robot."
            ]
        }
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
    showSection('grammar'); // Default to grammar section
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
        <h3>Bài tập ngữ pháp</h3>
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
    
    // Lưu lại thứ tự các từ đã xáo trộn để kiểm tra
    currentUnit.shuffledQuizWords = shuffledWords;
    
    contentArea.innerHTML = `
        <h3>Kiểm tra từ vựng</h3>
        <form id="quizForm">
            ${shuffledWords.map((word, index) => {
                // Tạo các lựa chọn bao gồm đáp án đúng và 3 đáp án sai
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
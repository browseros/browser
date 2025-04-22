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
                    example: "My English teacher is very kind. (Giáo viên tiếng Anh của tôi rất tốt bụng.)",
                    pronunciation: "/ˈteɪtʃər/"
                },
                { 
                    word: "student", 
                    meaning: "học sinh", 
                    example: "He is a good student. (Anh ấy là một học sinh giỏi.)",
                    pronunciation: "/ˈstʌdənt/"
                },
                { 
                    word: "subject", 
                    meaning: "môn học", 
                    example: "Math is my favorite subject. (Toán là môn học yêu thích của tôi.)",
                    pronunciation: "/ˈmætʃ/"
                },
                { 
                    word: "classroom", 
                    meaning: "lớp học", 
                    example: "Our classroom is on the second floor. (Lớp học của chúng tôi ở tầng hai.)",
                    pronunciation: "/ˈklɑːsroʊm/"
                },
                { 
                    word: "library", 
                    meaning: "thư viện", 
                    example: "I often study in the library. (Tôi thường học trong thư viện.)",
                    pronunciation: "/ˈlaɪbrəri/"
                },
                { 
                    word: "homework", 
                    meaning: "bài tập về nhà", 
                    example: "I need to finish my homework. (Tôi cần hoàn thành bài tập về nhà.)",
                    pronunciation: "/ˈhoʊmwərk/"
                },
                { 
                    word: "pencil", 
                    meaning: "bút chì", 
                    example: "Can I borrow your pencil? (Tôi có thể mượn bút chì của bạn không?)",
                    pronunciation: "/ˈpɛnsəl/"
                },
                { 
                    word: "notebook", 
                    meaning: "vở", 
                    example: "I write notes in my notebook. (Tôi ghi chép vào vở.)",
                    pronunciation: "/ˈnəʊtbəʊk/"
                },
                { 
                    word: "backpack", 
                    meaning: "ba lô", 
                    example: "My backpack is heavy today. (Ba lô của tôi hôm nay nặng.)",
                    pronunciation: "/ˈbækˌpæk/"
                },
                { 
                    word: "principal", 
                    meaning: "hiệu trưởng", 
                    example: "The principal gave a speech. (Hiệu trưởng đã có bài phát biểu.)",
                    pronunciation: "/ˈprɪnsəpəl/"
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
                    example: "Reading is my hobby. (Đọc sách là sở thích của tôi.)",
                    pronunciation: "/ˈhɒbi/"
                },
                { 
                    word: "collect", 
                    meaning: "sưu tập", 
                    example: "I collect stamps. (Tôi sưu tập tem.)",
                    pronunciation: "/kəˈlekt/"
                },
                { 
                    word: "paint", 
                    meaning: "vẽ tranh", 
                    example: "She paints beautiful pictures. (Cô ấy vẽ những bức tranh đẹp.)",
                    pronunciation: "/peɪnt/"
                },
                { 
                    word: "draw", 
                    meaning: "vẽ", 
                    example: "He draws comics. (Anh ấy vẽ truyện tranh.)",
                    pronunciation: "/drɔː/"
                },
                { 
                    word: "music", 
                    meaning: "âm nhạc", 
                    example: "I love listening to music. (Tôi thích nghe nhạc.)",
                    pronunciation: "/ˈmjuːzɪk/"
                },
                { 
                    word: "dance", 
                    meaning: "nhảy múa", 
                    example: "They are dancing at the party. (Họ đang nhảy múa ở bữa tiệc.)",
                    pronunciation: "/ˈdɑːns/"
                },
                { 
                    word: "sing", 
                    meaning: "hát", 
                    example: "She sings beautifully. (Cô ấy hát hay.)",
                    pronunciation: "/sɪŋ/"
                },
                { 
                    word: "read", 
                    meaning: "đọc", 
                    example: "I read books every day. (Tôi đọc sách mỗi ngày.)",
                    pronunciation: "/riːd/"
                },
                { 
                    word: "write", 
                    meaning: "viết", 
                    example: "He writes stories. (Anh ấy viết truyện.)",
                    pronunciation: "/raɪt/"
                },
                { 
                    word: "photography", 
                    meaning: "nhiếp ảnh", 
                    example: "Photography is her passion. (Nhiếp ảnh là đam mê của cô ấy.)",
                    pronunciation: "/fəˈtɒɡrəfi/"
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
                    example: "My father works in a bank. (Bố tôi làm việc ở ngân hàng.)",
                    pronunciation: "/ˈfɑːtər/"
                },
                { 
                    word: "mother", 
                    meaning: "mẹ", 
                    example: "My mother is a doctor. (Mẹ tôi là bác sĩ.)",
                    pronunciation: "/ˈmʌðər/"
                },
                { 
                    word: "sister", 
                    meaning: "chị/em gái", 
                    example: "I have two sisters. (Tôi có hai chị/em gái.)",
                    pronunciation: "/ˈsɪstər/"
                },
                { 
                    word: "brother", 
                    meaning: "anh/em trai", 
                    example: "My brother plays football. (Anh/em trai tôi chơi bóng đá.)",
                    pronunciation: "/ˈbrʌðər/"
                },
                { 
                    word: "grandmother", 
                    meaning: "bà", 
                    example: "My grandmother lives with us. (Bà tôi sống với chúng tôi.)",
                    pronunciation: "/ˈɡrændmʌðər/"
                },
                { 
                    word: "grandfather", 
                    meaning: "ông", 
                    example: "My grandfather tells great stories. (Ông tôi kể chuyện hay.)",
                    pronunciation: "/ˈɡrændfɑːtər/"
                },
                { 
                    word: "aunt", 
                    meaning: "cô/dì", 
                    example: "My aunt is a teacher. (Cô tôi là giáo viên.)",
                    pronunciation: "/ˈɑːnt/"
                },
                { 
                    word: "uncle", 
                    meaning: "chú/bác", 
                    example: "My uncle lives in America. (Chú tôi sống ở Mỹ.)",
                    pronunciation: "/ˈʌnkl/"
                },
                { 
                    word: "cousin", 
                    meaning: "anh/chị/em họ", 
                    example: "I play with my cousins on weekends. (Tôi chơi với anh chị em họ vào cuối tuần.)",
                    pronunciation: "/ˈkʌzn/"
                },
                { 
                    word: "family", 
                    meaning: "gia đình", 
                    example: "I love my family. (Tôi yêu gia đình tôi.)",
                    pronunciation: "/ˈfæməli/"
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
                    example: "I play football every weekend. (Tôi chơi bóng đá mỗi cuối tuần.)",
                    pronunciation: "/ˈfʊtbɔːl/"
                },
                { 
                    word: "basketball", 
                    meaning: "bóng rổ", 
                    example: "He plays basketball well. (Anh ấy chơi bóng rổ giỏi.)",
                    pronunciation: "/ˈbɑːskɪtbɔːl/"
                },
                { 
                    word: "swimming", 
                    meaning: "bơi lội", 
                    example: "Swimming is good exercise. (Bơi lội là bài tập tốt.)",
                    pronunciation: "/ˈswɪmɪŋ/"
                },
                { 
                    word: "tennis", 
                    meaning: "quần vợt", 
                    example: "They play tennis together. (Họ chơi quần vợt cùng nhau.)",
                    pronunciation: "/ˈtenɪs/"
                },
                { 
                    word: "volleyball", 
                    meaning: "bóng chuyền", 
                    example: "We play volleyball at school. (Chúng tôi chơi bóng chuyền ở trường.)",
                    pronunciation: "/ˈvɑːliːbɔːl/"
                },
                { 
                    word: "movie", 
                    meaning: "phim", 
                    example: "I watch movies on weekends. (Tôi xem phim vào cuối tuần.)",
                    pronunciation: "/ˈmɪvi/"
                },
                { 
                    word: "game", 
                    meaning: "trò chơi", 
                    example: "Video games are fun. (Trò chơi điện tử rất vui.)",
                    pronunciation: "/ˈɡeɪm/"
                },
                { 
                    word: "park", 
                    meaning: "công viên", 
                    example: "We go to the park on Sundays. (Chúng tôi đi công viên vào Chủ nhật.)",
                    pronunciation: "/pɑːk/"
                },
                { 
                    word: "bicycle", 
                    meaning: "xe đạp", 
                    example: "I ride my bicycle to school. (Tôi đi xe đạp đến trường.)",
                    pronunciation: "/ˈbaɪsɪkl/"
                },
                { 
                    word: "run", 
                    meaning: "chạy", 
                    example: "She runs every morning. (Cô ấy chạy bộ mỗi sáng.)",
                    pronunciation: "/rʌn/"
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
                    example: "What's the weather like today? (Thời tiết hôm nay thế nào?)",
                    pronunciation: "/ˈweðər/"
                },
                { 
                    word: "season", 
                    meaning: "mùa", 
                    example: "There are four seasons in a year. (Có bốn mùa trong một năm.)",
                    pronunciation: "/ˈsiːzn/"
                },
                { 
                    word: "summer", 
                    meaning: "mùa hè", 
                    example: "Summer is very hot. (Mùa hè rất nóng.)",
                    pronunciation: "/ˈsʌmər/"
                },
                { 
                    word: "winter", 
                    meaning: "mùa đông", 
                    example: "It snows in winter. (Tuyết rơi vào mùa đông.)",
                    pronunciation: "/ˈwɪntər/"
                },
                { 
                    word: "spring", 
                    meaning: "mùa xuân", 
                    example: "Flowers bloom in spring. (Hoa nở vào mùa xuân.)",
                    pronunciation: "/ˈsprɪŋ/"
                },
                { 
                    word: "autumn", 
                    meaning: "mùa thu", 
                    example: "Leaves fall in autumn. (Lá rụng vào mùa thu.)",
                    pronunciation: "/ˈɔːtəm/"
                },
                { 
                    word: "sunny", 
                    meaning: "nắng", 
                    example: "It's sunny today. (Hôm nay trời nắng.)",
                    pronunciation: "/ˈsʌnɪ/"
                },
                { 
                    word: "rainy", 
                    meaning: "mưa", 
                    example: "It's rainy in the afternoon. (Trời mưa vào buổi chiều.)",
                    pronunciation: "/ˈreɪni/"
                },
                { 
                    word: "cloudy", 
                    meaning: "nhiều mây", 
                    example: "The sky is cloudy. (Bầu trời nhiều mây.)",
                    pronunciation: "/ˈklaʊdɪ/"
                },
                { 
                    word: "windy", 
                    meaning: "gió", 
                    example: "It's very windy today. (Hôm nay trời rất gió.)",
                    pronunciation: "/ˈwɪndɪ/"
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
                    example: "Vietnamese food is delicious. (Thức ăn Việt Nam rất ngon.)",
                    pronunciation: "/ˈfʊd/"
                },
                { 
                    word: "drink", 
                    meaning: "đồ uống", 
                    example: "What would you like to drink? (Bạn muốn uống gì?)",
                    pronunciation: "/ˈdrɪŋk/"
                },
                { 
                    word: "rice", 
                    meaning: "cơm/gạo", 
                    example: "We eat rice every day. (Chúng tôi ăn cơm mỗi ngày.)",
                    pronunciation: "/ˈraɪs/"
                },
                { 
                    word: "noodles", 
                    meaning: "mì", 
                    example: "I like eating noodles. (Tôi thích ăn mì.)",
                    pronunciation: "/ˈnoʊldz/"
                },
                { 
                    word: "vegetables", 
                    meaning: "rau củ", 
                    example: "Vegetables are good for health. (Rau củ tốt cho sức khỏe.)",
                    pronunciation: "/ˈvɛdʒəblz/"
                },
                { 
                    word: "fruit", 
                    meaning: "trái cây", 
                    example: "I eat fruit every day. (Tôi ăn trái cây mỗi ngày.)",
                    pronunciation: "/ˈfrut/"
                },
                { 
                    word: "water", 
                    meaning: "nước", 
                    example: "Please give me some water. (Làm ơn cho tôi ít nước.)",
                    pronunciation: "/ˈwɔːtər/"
                },
                { 
                    word: "juice", 
                    meaning: "nước ép", 
                    example: "I like orange juice. (Tôi thích nước cam.)",
                    pronunciation: "/ˈdʒuːs/"
                },
                { 
                    word: "milk", 
                    meaning: "sữa", 
                    example: "I drink milk every morning. (Tôi uống sữa mỗi sáng.)",
                    pronunciation: "/mɪlk/"
                },
                { 
                    word: "tea", 
                    meaning: "trà", 
                    example: "Would you like some tea? (Bạn có muốn uống trà không?)",
                    pronunciation: "/ˈtiː/"
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
                    word: "animated film",
                    meaning: "hoạt hình",
                    pronunciation: "/ˈænɪmeɪtɪd fɪlm/",
                    example: "My sister loves watching animated films.",
                    exampleMeaning: "Em gái tôi thích xem phim hoạt hình.",
                    image: "https://images.unsplash.com/photo-1534337621606-e3df5ee0e97f?w=500"
                },
                {
                    word: "cartoon",
                    meaning: "phim hoạt hình",
                    pronunciation: "/kɑːˈtuːn/",
                    example: "Tom and Jerry is a famous cartoon.",
                    exampleMeaning: "Tom và Jerry là một phim hoạt hình nổi tiếng.",
                    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500"
                },
                {
                    word: "channel",
                    meaning: "kênh (truyền hình)",
                    pronunciation: "/ˈtʃænl/",
                    example: "Which channel shows cartoons?",
                    exampleMeaning: "Kênh nào chiếu phim hoạt hình?",
                    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500"
                },
                {
                    word: "character",
                    meaning: "nhân vật",
                    pronunciation: "/ˈkærəktər/",
                    example: "Who is your favorite character?",
                    exampleMeaning: "Nhân vật yêu thích của bạn là ai?",
                    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=500"
                },
                {
                    word: "clip",
                    meaning: "đoạn phim ngắn",
                    pronunciation: "/klɪp/",
                    example: "I watched a funny clip on YouTube.",
                    exampleMeaning: "Tôi đã xem một đoạn phim hài trên YouTube.",
                    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500"
                },
                {
                    word: "comedy",
                    meaning: "phim hài",
                    pronunciation: "/ˈkɒmədi/",
                    example: "We watched a comedy last night.",
                    exampleMeaning: "Chúng tôi đã xem một bộ phim hài tối qua.",
                    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500"
                },
                {
                    word: "compete",
                    meaning: "thi đấu",
                    pronunciation: "/kəmˈpiːt/",
                    example: "Many singers compete in this show.",
                    exampleMeaning: "Nhiều ca sĩ thi đấu trong chương trình này.",
                    image: "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=500"
                },
                {
                    word: "documentary",
                    meaning: "phim tài liệu",
                    pronunciation: "/ˌdɒkjuˈmentəri/",
                    example: "We watched a documentary about wild animals.",
                    exampleMeaning: "Chúng tôi đã xem một bộ phim tài liệu về động vật hoang dã.",
                    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500"
                },
                {
                    word: "episode",
                    meaning: "tập phim",
                    pronunciation: "/ˈepɪsəʊd/",
                    example: "I missed the first episode of the series.",
                    exampleMeaning: "Tôi đã bỏ lỡ tập đầu tiên của bộ phim.",
                    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500"
                },
                {
                    word: "educational",
                    meaning: "mang tính giáo dục",
                    pronunciation: "/ˌedʒuˈkeɪʃənl/",
                    example: "Discovery Channel has many educational shows.",
                    exampleMeaning: "Kênh Discovery có nhiều chương trình mang tính giáo dục.",
                    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500"
                },
                {
                    word: "entertainment",
                    meaning: "giải trí",
                    pronunciation: "/ˌentəˈteɪnmənt/",
                    example: "Television provides entertainment for many people.",
                    exampleMeaning: "Truyền hình mang lại giải trí cho nhiều người.",
                    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500"
                },
                {
                    word: "live",
                    meaning: "trực tiếp",
                    pronunciation: "/laɪv/",
                    example: "The football match is live on TV.",
                    exampleMeaning: "Trận bóng đá được phát sóng trực tiếp trên TV.",
                    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=500"
                },
                {
                    word: "programme",
                    meaning: "chương trình",
                    pronunciation: "/ˈprəʊɡræm/",
                    example: "What's your favorite TV programme?",
                    exampleMeaning: "Chương trình TV yêu thích của bạn là gì?",
                    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500"
                },
                {
                    word: "talent show",
                    meaning: "cuộc thi tài năng",
                    pronunciation: "/ˈtælənt ʃəʊ/",
                    example: "She won the talent show last year.",
                    exampleMeaning: "Cô ấy đã thắng cuộc thi tài năng năm ngoái.",
                    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500"
                },
                {
                    word: "viewer",
                    meaning: "người xem",
                    pronunciation: "/ˈvjuːər/",
                    example: "This show has millions of viewers.",
                    exampleMeaning: "Chương trình này có hàng triệu người xem.",
                    image: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=500"
                }
            ]
        },
        exercises: [
            {
                question: "Complete the sentence: The most _____ channel for children is the Cartoon Network.",
                answer: "popular",
                options: ["popular", "boring", "educational", "funny"],
                explanation: "Cartoon Network là kênh được trẻ em yêu thích nhất, nên dùng 'popular' (phổ biến, được ưa thích). Các từ khác không phù hợp với ngữ cảnh: boring (nhàm chán), educational (giáo dục), funny (hài hước)"
            },
            {
                question: "What do we call an animal or person in a film?",
                answer: "character",
                options: ["viewer", "character", "channel", "comedy"],
                explanation: "Trong phim, người hoặc động vật được gọi là 'character' (nhân vật). Viewer (người xem), channel (kênh), comedy (hài kịch) không phù hợp với định nghĩa này"
            },
            {
                question: "Which type of programme teaches subjects like maths and English?",
                answer: "educational programme",
                options: ["talent show", "comedy", "educational programme", "game show"],
                explanation: "Chương trình dạy các môn học như toán và tiếng Anh là 'educational programme' (chương trình giáo dục). Các loại chương trình khác như talent show (cuộc thi tài năng), comedy (hài kịch), game show (chương trình trò chơi) không tập trung vào việc dạy học"
            },
            {
                question: "Complete: I love _____ like Happy Feet and Coco.",
                answer: "animated films",
                options: ["game show", "animated films", "channel", "talent show"],
                explanation: "Happy Feet và Coco là những bộ phim hoạt hình, nên đáp án là 'animated films'. Các lựa chọn khác không phải là thể loại của những bộ phim này"
            },
            {
                question: "What do we call someone who watches TV?",
                answer: "viewer",
                options: ["character", "viewer", "channel", "comedy"],
                explanation: "Người xem TV được gọi là 'viewer'. Character (nhân vật trong phim), channel (kênh), comedy (hài kịch) không chỉ người xem TV"
            },
            {
                question: "_____ do you usually watch TV? (Bạn thường xem TV khi nào?)",
                answer: "When",
                options: ["What", "When", "Where", "Who"],
                explanation: "Dùng 'When' để hỏi về thời gian"
            },
            {
                question: "_____ is your favorite TV show? (Chương trình TV yêu thích của bạn là gì?)",
                answer: "What",
                options: ["When", "What", "Where", "Who"],
                explanation: "Dùng 'What' để hỏi về sự vật/việc"
            },
            {
                question: "_____ presents the news program? (Ai dẫn chương trình tin tức?)",
                answer: "Who",
                options: ["When", "What", "Where", "Who"],
                explanation: "Dùng 'Who' để hỏi về người"
            },
            {
                question: "_____ do you watch movies? (Bạn xem phim ở đâu?)",
                answer: "Where",
                options: ["When", "What", "Where", "Who"],
                explanation: "Dùng 'Where' để hỏi về địa điểm"
            },
            {
                question: "_____ do you watch educational programs? (Bạn xem chương trình giáo dục thường xuyên như thế nào?)",
                answer: "How often",
                options: ["When", "How often", "Where", "Who"],
                explanation: "Dùng 'How often' để hỏi về tần suất"
            },
            {
                question: "I like documentaries _____ my sister prefers cartoons. (Tôi thích phim tài liệu nhưng chị tôi thích phim hoạt hình hơn.)",
                answer: "but",
                options: ["and", "but", "so", "or"],
                explanation: "Dùng 'but' để nối 2 ý trái ngược"
            },
            {
                question: "The show was interesting _____ I watched all episodes. (Chương trình rất hay nên tôi đã xem tất cả các tập.)",
                answer: "so",
                options: ["and", "but", "so", "or"],
                explanation: "Dùng 'so' để nối quan hệ nguyên nhân-kết quả"
            },
            {
                question: "We watch movies _____ play video games together. (Chúng tôi xem phim và chơi game cùng nhau.)",
                answer: "and",
                options: ["and", "but", "so", "or"],
                explanation: "Dùng 'and' để nối 2 ý cùng chiều"
            },
            {
                question: "Choose the correct sentence: (Chọn câu đúng)",
                answer: "What do you like watching, and when do you usually watch TV?",
                options: [
                    "What you like watching, and when you usually watch TV?",
                    "What do you like watching, and when do you usually watch TV?",
                    "What do you like watching, but when do you usually watch TV?",
                    "What you like watching, so when you usually watch TV?"
                ],
                explanation: "Câu hỏi WH cần có trợ động từ 'do/does' và dùng 'and' để nối 2 câu hỏi cùng chủ đề"
            },
            {
                question: "Arrange the words to make a question: (Sắp xếp từ để tạo câu hỏi)\n'watch / where / movies / you / do / ?'",
                answer: "Where do you watch movies?",
                options: [
                    "Where you watch movies do?",
                    "Where do you watch movies?",
                    "Where you do watch movies?",
                    "Where watch you do movies?"
                ],
                explanation: "Thứ tự từ trong câu hỏi WH: Wh-word + do/does + subject + verb"
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
                    word: "aerobics",
                    meaning: "thể dục nhịp điệu",
                    pronunciation: "/eəˈrəʊbɪks/",
                    example: "My mother does aerobics every morning.",
                    exampleMeaning: "Mẹ tôi tập thể dục nhịp điệu mỗi sáng.",
                    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500"
                },
                {
                    word: "career",
                    meaning: "nghề nghiệp, sự nghiệp",
                    pronunciation: "/kəˈrɪə/",
                    example: "He has a successful career in sports.",
                    exampleMeaning: "Anh ấy có sự nghiệp thành công trong thể thao.",
                    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500"
                },
                {
                    word: "competition",
                    meaning: "cuộc đua",
                    pronunciation: "/ˌkɒmpəˈtɪʃən/",
                    example: "The swimming competition starts tomorrow.",
                    exampleMeaning: "Cuộc thi bơi lội bắt đầu vào ngày mai.",
                    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500"
                },
                {
                    word: "congratulation",
                    meaning: "lời chúc mừng",
                    pronunciation: "/kənˌɡrætʃʊˈleɪʃən/",
                    example: "Congratulations on winning the race!",
                    exampleMeaning: "Chúc mừng bạn đã thắng cuộc đua!",
                    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500"
                },
                {
                    word: "equipment",
                    meaning: "thiết bị, dụng cụ",
                    pronunciation: "/ɪˈkwɪpmənt/",
                    example: "We need special equipment for this sport.",
                    exampleMeaning: "Chúng ta cần thiết bị đặc biệt cho môn thể thao này.",
                    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500"
                },
                {
                    word: "fantastic",
                    meaning: "tuyệt",
                    pronunciation: "/fænˈtæstɪk/",
                    example: "The game was fantastic!",
                    exampleMeaning: "Trận đấu thật tuyệt!",
                    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=500"
                },
                {
                    word: "fit",
                    meaning: "mạnh khoẻ",
                    pronunciation: "/fɪt/",
                    example: "Exercise helps you stay fit.",
                    exampleMeaning: "Tập thể dục giúp bạn khoẻ mạnh.",
                    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500"
                },
                {
                    word: "goggles",
                    meaning: "kính bơi",
                    pronunciation: "/ˈɡɒɡəlz/",
                    example: "Don't forget your goggles when swimming.",
                    exampleMeaning: "Đừng quên kính bơi khi đi bơi.",
                    image: "https://images.unsplash.com/photo-1560090995-01632a28895b?w=500"
                },
                {
                    word: "gym",
                    meaning: "trung tâm thể dục thể thao",
                    pronunciation: "/dʒɪm/",
                    example: "I go to the gym three times a week.",
                    exampleMeaning: "Tôi đi tập gym ba lần một tuần.",
                    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500"
                },
                {
                    word: "karate",
                    meaning: "võ karate",
                    pronunciation: "/kəˈrɑːti/",
                    example: "My brother learns karate.",
                    exampleMeaning: "Anh trai tôi học karate.",
                    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=500"
                },
                {
                    word: "marathon",
                    meaning: "cuộc đua marathon",
                    pronunciation: "/ˈmærəθən/",
                    example: "She ran in the city marathon.",
                    exampleMeaning: "Cô ấy đã chạy trong cuộc đua marathon của thành phố.",
                    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500"
                },
                {
                    word: "racket",
                    meaning: "vợt",
                    pronunciation: "/ˈrækɪt/",
                    example: "I need a new tennis racket.",
                    exampleMeaning: "Tôi cần một cây vợt tennis mới.",
                    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=500"
                }
            ]
        },
        exercises: [
            {
                question: "Complete the sentence: She won an international sports _____.",
                answer: "competition",
                options: ["champion", "competition", "sporty", "marathon"],
                explanation: "Câu này nói về một cuộc thi thể thao quốc tế, nên dùng 'competition' (cuộc thi). Champion (nhà vô địch), sporty (thích thể thao), marathon (cuộc đua marathon) không phù hợp với ngữ cảnh này."
            },
            {
                question: "He _____ the world tennis champion when he was very young.",
                answer: "became",
                options: ["become", "became", "becomes", "becoming"],
                explanation: "Câu này nói về sự kiện trong quá khứ (when he was very young), nên dùng quá khứ đơn 'became'. 'Become' là dạng nguyên thể, 'becomes' là hiện tại đơn, 'becoming' là hiện tại phân từ."
            },
            {
                question: "Can you send my _____ to the winner of the contest?",
                answer: "congratulations",
                options: ["champion", "competition", "congratulations", "sporty"],
                explanation: "Khi muốn gửi lời chúc mừng tới người chiến thắng, ta dùng từ 'congratulations' (lời chúc mừng). Các từ khác không phù hợp với ngữ cảnh gửi lời chúc."
            },
            {
                question: "My friend David is very _____. He does exercise every day.",
                answer: "sporty",
                options: ["champion", "competition", "sporty", "marathon"],
                explanation: "Để mô tả một người thích và thường xuyên tập thể thao, ta dùng tính từ 'sporty'. Các từ khác là danh từ và không dùng để mô tả tính cách/sở thích."
            },
            {
                question: "The first _____ took place in 1896.",
                answer: "marathon",
                options: ["champion", "competition", "sporty", "marathon"],
                explanation: "Câu này nói về sự kiện marathon đầu tiên, nên dùng 'marathon'. Đây là một sự kiện lịch sử cụ thể - Marathon hiện đại đầu tiên được tổ chức tại Olympic 1896."
            },
            {
                question: "What do you need to play tennis?",
                answer: "racket",
                options: ["ball", "boat", "racket", "goggles"],
                explanation: "Để chơi tennis, dụng cụ không thể thiếu là 'racket' (vợt tennis). Ball (bóng) cũng cần nhưng câu hỏi yêu cầu chọn một đáp án, và vợt là dụng cụ đặc trưng nhất."
            },
            {
                question: "_____ you play football yesterday?",
                answer: "Did",
                options: ["Do", "Did", "Does", "Done"],
                explanation: "Câu hỏi về hành động trong quá khứ (yesterday), nên dùng 'Did' để tạo câu hỏi ở thì quá khứ đơn. 'Do/Does' dùng cho hiện tại đơn, 'Done' là quá khứ phân từ."
            },
            {
                question: "Don't _____ in the swimming pool!",
                answer: "run",
                options: ["running", "runs", "run", "ran"],
                explanation: "Trong câu mệnh lệnh phủ định (Don't...), động từ phải ở dạng nguyên thể 'run'. Các dạng khác như running (V-ing), runs (V-s), ran (V2) không dùng sau 'don't'."
            },
            {
                question: "She _____ three gold medals in the last Olympics.",
                answer: "won",
                options: ["win", "won", "wins", "winning"],
                explanation: "Sự kiện xảy ra trong quá khứ (last Olympics), nên dùng quá khứ đơn 'won'. 'Win' là hiện tại, 'wins' là hiện tại với chủ ngữ số ít, 'winning' là hiện tại phân từ."
            },
            {
                question: "_____ your equipment before the game starts.",
                answer: "Check",
                options: ["Checking", "Checked", "Check", "Checks"],
                explanation: "Đây là câu mệnh lệnh (đưa ra chỉ dẫn), nên dùng động từ nguyên thể 'Check'. Không dùng các dạng khác trong câu mệnh lệnh."
            },
            {
                question: "The gym _____ at 6:00 AM every morning.",
                answer: "opens",
                options: ["open", "opens", "opened", "opening"],
                explanation: "Đây là thói quen/sự việc lặp lại (every morning), dùng hiện tại đơn. Với chủ ngữ số ít (the gym), động từ thêm 's': 'opens'."
            },
            {
                question: "They _____ basketball twice a week.",
                answer: "play",
                options: ["plays", "play", "played", "playing"],
                explanation: "Với chủ ngữ số nhiều (they) ở hiện tại đơn, dùng động từ nguyên thể 'play'. Không thêm 's' vì chủ ngữ không phải số ít."
            },
            {
                question: "_____ carefully when you ride a bicycle.",
                answer: "Go",
                options: ["Going", "Gone", "Go", "Goes"],
                explanation: "Đây là câu mệnh lệnh đưa ra lời khuyên, nên dùng động từ nguyên thể 'Go'. Câu mệnh lệnh luôn dùng động từ nguyên thể."
            },
            {
                question: "We _____ to the fitness center last week.",
                answer: "went",
                options: ["go", "went", "gone", "going"],
                explanation: "Hành động xảy ra trong quá khứ (last week), nên dùng quá khứ đơn 'went'. 'Go' là hiện tại, 'gone' là quá khứ phân từ, 'going' là hiện tại phân từ."
            },
            {
                question: "The swimming pool _____ for maintenance tomorrow.",
                answer: "will close",
                options: ["closes", "closed", "will close", "closing"],
                explanation: "Sự việc sẽ xảy ra trong tương lai (tomorrow), nên dùng 'will close'. Đây là cách diễn đạt kế hoạch đã được sắp xếp trước."
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
            title: "Places of Interest",
            words: [
                {
                    word: "bank",
                    meaning: "ngân hàng",
                    pronunciation: "/bæŋk/",
                    example: "There is a bank near my house.",
                    exampleMeaning: "Có một ngân hàng gần nhà tôi.",
                    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=500"
                },
                {
                    word: "crowded",
                    meaning: "đông đúc",
                    example: "The market is very crowded in the morning.",
                    exampleMeaning: "Chợ rất đông đúc vào buổi sáng.",
                    image: "https://cdn.pixabay.com/photo/2016/11/21/16/02/crowded-1846304_1280.jpg"
                },
                {
                    word: "floating market",
                    meaning: "chợ nổi",
                    example: "Tourists love visiting the floating market.",
                    exampleMeaning: "Du khách rất thích thăm chợ nổi.",
                    image: "https://cdn.pixabay.com/photo/2017/05/31/18/38/floating-market-2361912_1280.jpg"
                },
                {
                    word: "helpful",
                    meaning: "có ích",
                    example: "The tour guide was very helpful.",
                    exampleMeaning: "Hướng dẫn viên du lịch rất có ích.",
                    image: "https://cdn.pixabay.com/photo/2015/06/08/15/02/helpful-801837_1280.jpg"
                },
                {
                    word: "helmet",
                    meaning: "mũ bảo hiểm",
                    example: "You must wear a helmet when riding a motorbike.",
                    exampleMeaning: "Bạn phải đội mũ bảo hiểm khi đi xe máy.",
                    image: "https://cdn.pixabay.com/photo/2016/03/31/19/18/helmet-1294852_1280.png"
                },
                {
                    word: "landmark",
                    meaning: "địa danh",
                    example: "The Eiffel Tower is a famous landmark in Paris.",
                    exampleMeaning: "Tháp Eiffel là một địa danh nổi tiếng ở Paris.",
                    image: "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_1280.jpg"
                },
                {
                    word: "palace",
                    meaning: "cung điện",
                    example: "We visited the royal palace yesterday.",
                    exampleMeaning: "Chúng tôi đã thăm cung điện hoàng gia hôm qua.",
                    image: "https://cdn.pixabay.com/photo/2014/11/03/17/42/palace-516417_1280.jpg"
                },
                {
                    word: "postcard",
                    meaning: "bưu thiếp",
                    example: "I sent a postcard to my friend from Vietnam.",
                    exampleMeaning: "Tôi đã gửi một bưu thiếp cho bạn tôi từ Việt Nam.",
                    image: "https://cdn.pixabay.com/photo/2016/10/31/19/04/postcard-1786182_1280.jpg"
                },
                {
                    word: "rent",
                    meaning: "thuê",
                    example: "You can rent a bicycle to explore the city.",
                    exampleMeaning: "Bạn có thể thuê xe đạp để khám phá thành phố.",
                    image: "https://cdn.pixabay.com/photo/2016/11/18/12/49/bicycle-1834265_1280.jpg"
                },
                {
                    word: "shell",
                    meaning: "vỏ sò",
                    example: "We collected shells on the beach.",
                    exampleMeaning: "Chúng tôi đã nhặt vỏ sò trên bãi biển.",
                    image: "https://cdn.pixabay.com/photo/2017/08/07/22/57/shell-2608407_1280.jpg"
                },
                {
                    word: "stall",
                    meaning: "quầy hàng",
                    example: "There are many food stalls in the market.",
                    exampleMeaning: "Có nhiều quầy thức ăn trong chợ.",
                    image: "https://cdn.pixabay.com/photo/2016/03/27/21/34/market-1284363_1280.jpg"
                },
                {
                    word: "street food",
                    meaning: "đồ ăn đường phố",
                    example: "Vietnamese street food is delicious.",
                    exampleMeaning: "Đồ ăn đường phố Việt Nam rất ngon.",
                    image: "https://cdn.pixabay.com/photo/2019/04/06/14/58/street-food-4107179_1280.jpg"
                }
            ]
        },
        exercises: [
            {
                question: "Complete the sentence: The Eiffel Tower is _____ famous landmark.",
                answer: "a",
                options: ["a", "an", "the", "this"],
                explanation: "Chúng ta dùng mạo từ 'a' trước danh từ đếm được số ít bắt đầu bằng phụ âm (famous landmark). 'An' dùng trước nguyên âm, 'the' dùng cho vật cụ thể đã biết, 'this' không phù hợp ngữ cảnh"
            },
            {
                question: "Is this _____ book about London?",
                answer: "your",
                options: ["you", "your", "yours", "you're"],
                explanation: "Chúng ta cần tính từ sở hữu 'your' để chỉ sở hữu của người nghe. 'You' là đại từ nhân xưng, 'yours' là đại từ sở hữu, 'you're' là dạng viết tắt của 'you are'"
            },
            {
                question: "The lion has three cubs. _____ cubs are playing under a big tree.",
                answer: "Its",
                options: ["It's", "Its", "Their", "Theirs"],
                explanation: "Chúng ta dùng tính từ sở hữu 'Its' để chỉ sở hữu của con sư tử (it). 'It's' là viết tắt của 'it is', 'Their/Theirs' dùng cho số nhiều"
            },
            {
                question: "This map is _____. I found it in my bag.",
                answer: "mine",
                options: ["my", "mine", "me", "I"],
                explanation: "Chúng ta dùng đại từ sở hữu 'mine' vì nó đứng một mình thay thế cho danh từ. 'My' là tính từ sở hữu phải đi kèm danh từ, 'me/I' là đại từ nhân xưng"
            },
            {
                question: "We are from Switzerland. _____ country is famous for chocolate.",
                answer: "Our",
                options: ["We", "Our", "Ours", "Us"],
                explanation: "Chúng ta dùng tính từ sở hữu 'Our' vì nó đứng trước danh từ 'country'. 'We/Us' là đại từ nhân xưng, 'Ours' là đại từ sở hữu đứng một mình"
            },
            {
                question: "What's the weather like in Sydney in summer? It's _____ and dry.",
                answer: "sunny",
                options: ["sun", "sunny", "sunshine", "sunning"],
                explanation: "Chúng ta cần tính từ 'sunny' để mô tả thời tiết. 'Sun' là danh từ, 'sunshine' là danh từ, 'sunning' là động từ dạng -ing"
            },
            {
                question: "The people in my city are _____ and helpful.",
                answer: "friendly",
                options: ["friend", "friends", "friendly", "friendship"],
                explanation: "Chúng ta cần tính từ 'friendly' để mô tả tính cách của người dân. 'Friend' là danh từ số ít, 'friends' là danh từ số nhiều, 'friendship' là danh từ chỉ tình bạn"
            },
            {
                question: "Ha Noi is famous for its _____ street food.",
                answer: "delicious",
                options: ["delicious", "deliciously", "delight", "delighting"],
                explanation: "Chúng ta cần tính từ 'delicious' để mô tả đồ ăn đường phố. 'Deliciously' là trạng từ, 'delight' là danh từ, 'delighting' là động từ dạng -ing"
            },
            {
                question: "Choose the correct possessive adjective: _____ parents are from Tokyo. (Tom)",
                answer: "His",
                options: ["He", "His", "Him", "Himself"],
                explanation: "Khi nói về sở hữu của Tom (nam), chúng ta dùng tính từ sở hữu 'his'"
            },
            {
                question: "These are _____ tickets for the museum tour. (we)",
                answer: "our",
                options: ["we", "our", "ours", "us"],
                explanation: "Khi nói về sở hữu của 'we' (chúng tôi), chúng ta dùng tính từ sở hữu 'our'"
            },
            {
                question: "The red bicycle is _____. (Sarah)",
                answer: "hers",
                options: ["her", "hers", "she", "herself"],
                explanation: "Khi thay thế cho danh từ sở hữu của Sarah (nữ), chúng ta dùng đại từ sở hữu 'hers'"
            },
            {
                question: "That camera belongs to the tourists. It's _____.",
                answer: "theirs",
                options: ["they", "their", "theirs", "them"],
                explanation: "Khi thay thế cho danh từ sở hữu của 'the tourists', chúng ta dùng đại từ sở hữu 'theirs'"
            },
            {
                question: "Complete the sentence: The backpack is (I) _____.",
                answer: "mine",
                options: ["my", "mine", "me", "myself"],
                explanation: "Khi thay thế cho danh từ sở hữu của 'I' (tôi), chúng ta dùng đại từ sở hữu 'mine'"
            },
            {
                question: "Choose the correct form: This is _____ house, and that is _____. (we, they)",
                answer: "our, theirs",
                options: ["our, their", "ours, their", "our, theirs", "we, they"],
                explanation: "Câu thứ nhất cần tính từ sở hữu 'our', câu thứ hai cần đại từ sở hữu 'theirs'"
            },
            {
                question: "The blue car is (you) _____.",
                answer: "yours",
                options: ["your", "yours", "you", "yourself"],
                explanation: "Khi thay thế cho danh từ sở hữu của 'you' (bạn), chúng ta dùng đại từ sở hữu 'yours'"
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
            title: "Houses and Technology",
            words: [
                {
                    word: "smart home",
                    meaning: "nhà thông minh",
                    pronunciation: "/smɑːt həʊm/",
                    example: "We live in a smart home with many automatic devices.",
                    exampleMeaning: "Chúng tôi sống trong một ngôi nhà thông minh với nhiều thiết bị tự động.",
                    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500"
                },
                {
                    word: "robot vacuum",
                    meaning: "robot hút bụi",
                    pronunciation: "/ˈrəʊbɒt ˈvækjuːm/",
                    example: "The robot vacuum cleans the floor automatically.",
                    exampleMeaning: "Robot hút bụi tự động làm sạch sàn nhà.",
                    image: "https://images.unsplash.com/photo-1589433836287-3bf6c2ee91a6?w=500"
                },
                {
                    word: "solar panel",
                    meaning: "tấm pin năng lượng mặt trời",
                    pronunciation: "/ˈsəʊlə ˈpænl/",
                    example: "Solar panels are installed on the roof.",
                    exampleMeaning: "Các tấm pin năng lượng mặt trời được lắp đặt trên mái nhà.",
                    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500"
                },
                {
                    word: "security camera",
                    meaning: "camera an ninh",
                    pronunciation: "/sɪˈkjʊərəti ˈkæmərə/",
                    example: "Security cameras protect our house.",
                    exampleMeaning: "Camera an ninh bảo vệ ngôi nhà của chúng ta.",
                    image: "https://images.unsplash.com/photo-1557317035-edf777e71ecd?w=500"
                },
                {
                    word: "automatic door",
                    meaning: "cửa tự động",
                    pronunciation: "/ˌɔːtəˈmætɪk dɔː/",
                    example: "The automatic door opens when you approach.",
                    exampleMeaning: "Cửa tự động mở ra khi bạn đến gần.",
                    image: "https://images.unsplash.com/photo-1553779983-77f17fb9c9f5?w=500"
                },
                {
                    word: "smart lighting",
                    meaning: "hệ thống đèn thông minh",
                    example: "Smart lighting adjusts automatically.",
                    exampleMeaning: "Hệ thống đèn thông minh tự động điều chỉnh.",
                    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=500"
                },
                {
                    word: "voice control",
                    meaning: "điều khiển bằng giọng nói",
                    example: "You can control devices by voice.",
                    exampleMeaning: "Bạn có thể điều khiển thiết bị bằng giọng nói.",
                    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500"
                },
                {
                    word: "smart fridge",
                    meaning: "tủ lạnh thông minh",
                    example: "The smart fridge can order food automatically.",
                    exampleMeaning: "Tủ lạnh thông minh có thể tự động đặt thực phẩm.",
                    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500"
                },
                {
                    word: "energy efficient",
                    meaning: "tiết kiệm năng lượng",
                    example: "Future homes will be more energy efficient.",
                    exampleMeaning: "Nhà ở trong tương lai sẽ tiết kiệm năng lượng hơn.",
                    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500"
                },
                {
                    word: "wireless charging",
                    meaning: "sạc không dây",
                    example: "The house has wireless charging everywhere.",
                    exampleMeaning: "Ngôi nhà có sạc không dây ở khắp nơi.",
                    image: "https://images.unsplash.com/photo-1622043949694-d29df99f567f?w=500"
                }
            ]
        },
        exercises: [
            {
                question: "Complete the sentence: I think I _____ stay at home tonight.",
                answer: "'ll",
                options: ["'ll", "will", "won't", "might"],
                explanation: "Chúng ta dùng ''ll' (viết tắt của 'will') vì đây là quyết định được đưa ra ngay lúc nói ('I think'). Khi đưa ra quyết định tức thời, chúng ta thường dùng will hoặc dạng viết tắt 'll."
            },
            {
                question: "My friends _____ go to the library this afternoon.",
                answer: "will",
                options: ["will", "won't", "might", "'ll"],
                explanation: "Chúng ta dùng 'will' vì đây là một dự định chắc chắn cho tương lai gần (this afternoon). 'Will' thường được dùng khi nói về kế hoạch đã được quyết định."
            },
            {
                question: "The computer _____ do my homework in the future.",
                answer: "will",
                options: ["will", "won't", "might", "'ll"],
                explanation: "Chúng ta dùng 'will' vì đây là dự đoán về khả năng của công nghệ trong tương lai. 'Will' thường được dùng để nói về những dự đoán hoặc niềm tin về tương lai."
            },
            {
                question: "Our family _____ move to the new house next week.",
                answer: "will",
                options: ["will", "won't", "might", "'ll"],
                explanation: "Chúng ta dùng 'will' vì đây là kế hoạch đã được xác định rõ ràng với thời gian cụ thể (next week). 'Will' được dùng khi nói về quyết định đã được đưa ra."
            },
            {
                question: "The robot _____ help us with housework.",
                answer: "might",
                options: ["will", "won't", "might", "'ll"],
                explanation: "Chúng ta dùng 'might' vì đây là một khả năng không chắc chắn. 'Might' thể hiện sự không chắc chắn hoặc khả năng có thể xảy ra trong tương lai."
            },
            {
                question: "Match the appliance with its function: What can an electric cooker help us to do?",
                answer: "cook rice",
                options: ["wash clothes", "cook rice", "keep food fresh", "wash dishes"],
                explanation: "Nồi cơm điện (electric cooker) được dùng để nấu cơm (cook rice). Các chức năng khác như giặt quần áo (wash clothes), giữ thức ăn tươi (keep food fresh), và rửa bát đĩa (wash dishes) là của các thiết bị khác."
            },
            {
                question: "Which appliance keeps food fresh?",
                answer: "fridge",
                options: ["electric cooker", "dishwasher", "fridge", "washing machine"],
                explanation: "Tủ lạnh (fridge) có chức năng giữ thức ăn tươi. Các thiết bị khác có chức năng khác: nồi cơm điện (electric cooker) để nấu, máy rửa bát (dishwasher) để rửa bát, máy giặt (washing machine) để giặt quần áo."
            },
            {
                question: "What will houses use for energy in the future?",
                answer: "solar energy",
                options: ["electric energy", "solar energy", "wind energy", "water energy"],
                explanation: "Năng lượng mặt trời (solar energy) là nguồn năng lượng được dự đoán sẽ được sử dụng phổ biến trong tương lai vì đây là nguồn năng lượng sạch, tái tạo và thân thiện với môi trường."
            },
            {
                question: "Choose the correct form: Our house _____ have a robot vacuum cleaner next year.",
                answer: "is going to",
                options: ["will", "is going to", "might", "shall"],
                explanation: "Chúng ta dùng 'is going to' vì đây là một kế hoạch đã được quyết định cho tương lai (next year). Khi nói về kế hoạch hoặc ý định đã được định trước, chúng ta dùng 'be going to' thay vì 'will'."
            },
            {
                question: "In the future, houses _____ use more renewable energy.",
                answer: "will",
                options: ["going to", "will", "might", "shall"],
                explanation: "Chúng ta dùng 'will' vì đây là một dự đoán chung về tương lai, không phải kế hoạch cụ thể. 'Will' thường được dùng để nói về dự đoán hoặc xu hướng trong tương lai."
            },
            {
                question: "The weather _____ be suitable for installing solar panels tomorrow.",
                answer: "might",
                options: ["will", "is going to", "might", "shall"],
                explanation: "Chúng ta dùng 'might' vì đây là dự đoán không chắc chắn về thời tiết ngày mai. 'Might' thể hiện khả năng có thể xảy ra nhưng không chắc chắn."
            },
            {
                question: "We _____ move to a smart home next month. Everything is arranged.",
                answer: "are going to",
                options: ["will", "are going to", "might", "going"],
                explanation: "Chúng ta dùng 'are going to' vì đây là kế hoạch đã được sắp xếp ('Everything is arranged'). 'Be going to' được dùng cho kế hoạch đã được chuẩn bị trước."
            },
            {
                question: "Smart homes of the future _____ be controlled entirely by voice commands.",
                answer: "will",
                options: ["are going to", "will", "might", "shall"],
                explanation: "Chúng ta dùng 'will' vì đây là dự đoán chung về tính năng của nhà thông minh trong tương lai, không phải kế hoạch cụ thể."
            },
            {
                question: "Match the technology with its function: What does a smart thermostat do?",
                answer: "controls temperature",
                options: ["controls lights", "controls temperature", "controls security", "controls music"],
                explanation: "Bộ điều nhiệt thông minh (smart thermostat) có chức năng điều khiển nhiệt độ tự động trong nhà. Đây là một trong những tính năng cơ bản của nhà thông minh."
            },
            {
                question: "Which feature is NOT typically found in a smart home?",
                answer: "manual door locks",
                options: ["voice control", "automatic lighting", "manual door locks", "security cameras"],
                explanation: "Khóa cửa thủ công (manual door locks) không phải là tính năng điển hình của nhà thông minh, vì nhà thông minh thường sử dụng hệ thống khóa tự động hoặc khóa thông minh."
            },
            {
                question: "The builders _____ finish our smart home by December. The work has already started.",
                answer: "are going to",
                options: ["will", "are going to", "might", "shall"],
                explanation: "Chúng ta dùng 'are going to' vì công việc đã bắt đầu và có kế hoạch hoàn thành rõ ràng (by December). Đây là kế hoạch đang trong tiến trình thực hiện."
            },
            {
                question: "Which sentence shows a definite future plan?",
                answer: "We are going to install solar panels next week.",
                options: [
                    "We will probably have a smart home.",
                    "We are going to install solar panels next week.",
                    "We might buy a robot vacuum.",
                    "The house will be expensive."
                ],
                explanation: "Câu 'We are going to install solar panels next week' thể hiện kế hoạch chắc chắn trong tương lai gần với thời gian cụ thể (next week). Các câu khác thể hiện dự đoán ('will probably'), khả năng ('might') hoặc nhận định chung ('will be')."
            },
            {
                question: "Choose the most environmentally friendly feature:",
                answer: "solar energy system",
                options: ["traditional lighting", "solar energy system", "standard heating", "manual appliances"],
                explanation: "Hệ thống năng lượng mặt trời (solar energy system) là tính năng thân thiện với môi trường nhất vì sử dụng nguồn năng lượng tái tạo, không gây ô nhiễm và tiết kiệm tài nguyên thiên nhiên."
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
            title: "Environment and Conservation",
            words: [
                {
                    word: "renewable energy",
                    meaning: "năng lượng tái tạo",
                    pronunciation: "/rɪˈnjuːəbəl ˈenədʒi/",
                    example: "Solar power is a type of renewable energy.",
                    exampleMeaning: "Năng lượng mặt trời là một loại năng lượng tái tạo.",
                    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500"
                },
                {
                    word: "recycling bin",
                    meaning: "thùng tái chế",
                    pronunciation: "/riːˈsaɪklɪŋ bɪn/",
                    example: "Put plastic bottles in the recycling bin.",
                    exampleMeaning: "Bỏ chai nhựa vào thùng tái chế.",
                    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500"
                },
                {
                    word: "eco-friendly",
                    meaning: "thân thiện với môi trường",
                    pronunciation: "/ˈiːkəʊ ˈfrendli/",
                    example: "We use eco-friendly products.",
                    exampleMeaning: "Chúng tôi sử dụng các sản phẩm thân thiện với môi trường.",
                    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500"
                },
                {
                    word: "biodegradable",
                    meaning: "có thể phân hủy sinh học",
                    pronunciation: "/ˌbaɪəʊdɪˈɡreɪdəbl/",
                    example: "This bag is biodegradable.",
                    exampleMeaning: "Túi này có thể phân hủy sinh học.",
                    image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=500"
                },
                {
                    word: "conservation",
                    meaning: "bảo tồn",
                    example: "Wildlife conservation is important.",
                    exampleMeaning: "Bảo tồn động vật hoang dã là quan trọng.",
                    image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=500"
                },
                {
                    word: "greenhouse",
                    meaning: "nhà kính",
                    example: "Plants grow well in the greenhouse.",
                    exampleMeaning: "Cây cối phát triển tốt trong nhà kính.",
                    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=500"
                },
                {
                    word: "compost",
                    meaning: "phân ủ",
                    example: "We make compost from food waste.",
                    exampleMeaning: "Chúng tôi làm phân ủ từ rác thải thực phẩm.",
                    image: "https://images.unsplash.com/photo-1591913139335-6e73559e8f3c?w=500"
                },
                {
                    word: "sustainable",
                    meaning: "bền vững",
                    example: "We need sustainable development.",
                    exampleMeaning: "Chúng ta cần phát triển bền vững.",
                    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500"
                },
                {
                    word: "organic",
                    meaning: "hữu cơ",
                    example: "We grow organic vegetables.",
                    exampleMeaning: "Chúng tôi trồng rau hữu cơ.",
                    image: "https://images.unsplash.com/photo-1550828520-4cb496926fc9?w=500"
                },
                {
                    word: "clean energy",
                    meaning: "năng lượng sạch",
                    example: "Wind power is clean energy.",
                    exampleMeaning: "Năng lượng gió là năng lượng sạch.",
                    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=500"
                }
            ]
        },
        exercises: [
            {
                question: "If we _____ reusable bags, we will help the environment.",
                answer: "use",
                options: ["uses", "using", "use", "used"],
                explanation: "Trong câu điều kiện loại 1 (First Conditional), mệnh đề IF luôn dùng động từ ở thì hiện tại đơn (use). Chúng ta không dùng 'uses' vì chủ ngữ là 'we', không dùng 'using' vì không dùng V-ing, và không dùng 'used' vì không dùng quá khứ."
            },
            {
                question: "_____ Earth needs our protection.",
                answer: "The",
                options: ["A", "An", "The", ""],
                explanation: "Chúng ta dùng 'The' với từ 'Earth' vì đây là danh từ duy nhất chỉ hành tinh của chúng ta. Không dùng 'A/An' vì Earth không phải là một trong nhiều, và không thể bỏ trống mạo từ trong trường hợp này."
            },
            {
                question: "We can _____ glass bottles many times.",
                answer: "reuse",
                options: ["reduce", "reuse", "recycle", "remove"],
                explanation: "Động từ 'reuse' (tái sử dụng) phù hợp nhất vì nói về việc sử dụng lại chai thủy tinh nhiều lần. 'Reduce' là giảm thiểu, 'recycle' là tái chế (quy trình phức tạp hơn), và 'remove' là loại bỏ."
            },
            {
                question: "If more people cycle, the air _____ cleaner.",
                answer: "will be",
                options: ["is", "are", "will be", "being"],
                explanation: "Trong câu điều kiện loại 1, mệnh đề kết quả dùng 'will + V'. Ở đây, 'will be' diễn tả kết quả trong tương lai nếu điều kiện ở hiện tại được thực hiện."
            },
            {
                question: "If we plant more trees, they _____ absorb more CO2.",
                answer: "will",
                options: ["would", "will", "may", "might"],
                explanation: "Trong câu điều kiện loại 1 diễn tả điều có thể xảy ra trong tương lai, chúng ta dùng 'will' ở mệnh đề kết quả. 'Would' dùng cho điều kiện loại 2, còn 'may/might' thể hiện sự không chắc chắn."
            },
            {
                question: "Choose the correct article: I saw _____ interesting documentary about climate change.",
                answer: "an",
                options: ["a", "an", "the", ""],
                explanation: "Chúng ta dùng 'an' trước từ bắt đầu bằng nguyên âm 'interesting'. Đây là lần đầu nhắc đến documentary này nên không dùng 'the', và 'a' chỉ dùng trước phụ âm."
            },
            {
                question: "_____ ozone layer protects us from harmful UV rays.",
                answer: "The",
                options: ["A", "An", "The", ""],
                explanation: "Dùng 'The' vì tầng ozone là duy nhất. Đây là danh từ xác định, chỉ một thứ cụ thể và duy nhất, không dùng 'A/An' vì không phải là một trong nhiều."
            },
            {
                question: "If we don't reduce pollution, many species _____ extinct.",
                answer: "will become",
                options: ["become", "becomes", "will become", "becoming"],
                explanation: "Trong câu điều kiện loại 1, mệnh đề kết quả dùng 'will + V' (will become). 'Become/becomes' sai vì thiếu will, 'becoming' là dạng V-ing không phù hợp với cấu trúc."
            },
            {
                question: "Which action is most environmentally friendly?",
                answer: "Using public transport",
                options: ["Driving alone to work", "Using public transport", "Leaving lights on", "Using plastic bags"],
                explanation: "Sử dụng phương tiện công cộng (Using public transport) là lựa chọn thân thiện với môi trường nhất vì giảm lượng khí thải từ phương tiện cá nhân, tiết kiệm năng lượng và giảm ùn tắc."
            },
            {
                question: "If you turn off _____ lights when leaving a room, you will save energy.",
                answer: "the",
                options: ["a", "an", "the", ""],
                explanation: "Dùng 'the' vì đề cập đến những bóng đèn cụ thể trong phòng. Đây là trường hợp xác định rõ đối tượng nói đến."
            },
            {
                question: "What happens if we _____ too much water?",
                answer: "waste",
                options: ["wastes", "wasting", "waste", "wasted"],
                explanation: "Trong câu điều kiện loại 1, sau 'if' dùng động từ ở hiện tại đơn (waste). Chủ ngữ là 'we' nên không thêm -s, không dùng V-ing hoặc quá khứ."
            },
            {
                question: "Choose the best way to save energy:",
                answer: "Using LED light bulbs",
                options: ["Using old appliances", "Keeping windows open with AC on", "Using LED light bulbs", "Taking long showers"],
                explanation: "Sử dụng bóng đèn LED (Using LED light bulbs) là cách tốt nhất để tiết kiệm năng lượng vì LED tiêu thụ ít điện hơn, tuổi thọ cao hơn và hiệu quả năng lượng tốt hơn các loại bóng đèn khác."
            },
            {
                question: "If everyone _____ their part, the world will be cleaner.",
                answer: "does",
                options: ["do", "does", "doing", "done"],
                explanation: "Trong câu điều kiện loại 1, sau 'if' dùng động từ ở hiện tại đơn. Chủ ngữ 'everyone' là số ít nên động từ phải thêm -s (does). 'Do' dùng cho số nhiều, 'doing/done' không phù hợp với cấu trúc."
            },
            {
                question: "Which material takes the longest to decompose?",
                answer: "Plastic",
                options: ["Paper", "Food waste", "Plastic", "Leaves"],
                explanation: "Nhựa (Plastic) mất thời gian phân hủy lâu nhất, có thể lên đến hàng trăm năm. Giấy, rác thực phẩm và lá cây là các vật liệu hữu cơ, phân hủy tự nhiên nhanh hơn nhiều."
            },
            {
                question: "If we recycle paper, we will save _____ trees.",
                answer: "many",
                options: ["much", "many", "a lot", "lots"],
                explanation: "Dùng 'many' vì 'trees' là danh từ đếm được số nhiều. 'Much' dùng với danh từ không đếm được, 'a lot/lots' cũng đúng nhưng 'many' là lựa chọn chính xác và tự nhiên nhất trong ngữ cảnh này."
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
            title: "Robots and Automation",
            words: [
                {
                    word: "artificial intelligence",
                    meaning: "trí tuệ nhân tạo",
                    pronunciation: "/ˌɑːtɪˈfɪʃəl ɪnˈtelɪdʒəns/",
                    example: "The robot uses artificial intelligence.",
                    exampleMeaning: "Robot sử dụng trí tuệ nhân tạo.",
                    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500"
                },
                {
                    word: "automated",
                    meaning: "tự động hóa",
                    pronunciation: "/ˈɔːtəmeɪtɪd/",
                    example: "The factory has automated production lines.",
                    exampleMeaning: "Nhà máy có dây chuyền sản xuất tự động.",
                    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500"
                },
                {
                    word: "programming",
                    meaning: "lập trình",
                    pronunciation: "/ˈprəʊɡræmɪŋ/",
                    example: "Robot programming is complex.",
                    exampleMeaning: "Lập trình robot rất phức tạp.",
                    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500"
                },
                {
                    word: "sensor",
                    meaning: "cảm biến",
                    pronunciation: "/ˈsensə/",
                    example: "The robot has many sensors.",
                    exampleMeaning: "Robot có nhiều cảm biến.",
                    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df48?w=500"
                },
                {
                    word: "remote control",
                    meaning: "điều khiển từ xa",
                    example: "You can use remote control for the robot.",
                    exampleMeaning: "Bạn có thể sử dụng điều khiển từ xa cho robot.",
                    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=500"
                },
                {
                    word: "machine learning",
                    meaning: "học máy",
                    example: "The robot learns through machine learning.",
                    exampleMeaning: "Robot học thông qua học máy.",
                    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500"
                },
                {
                    word: "robotic arm",
                    meaning: "cánh tay robot",
                    example: "The robotic arm moves precisely.",
                    exampleMeaning: "Cánh tay robot di chuyển chính xác.",
                    image: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=500"
                },
                {
                    word: "automation",
                    meaning: "tự động hóa",
                    example: "Automation makes work easier.",
                    exampleMeaning: "Tự động hóa làm công việc dễ dàng hơn.",
                    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500"
                },
                {
                    word: "battery",
                    meaning: "pin",
                    example: "The robot needs to charge its battery.",
                    exampleMeaning: "Robot cần sạc pin.",
                    image: "https://images.unsplash.com/photo-1601706690188-a27a666ef291?w=500"
                },
                {
                    word: "digital",
                    meaning: "kỹ thuật số",
                    example: "Robots use digital technology.",
                    exampleMeaning: "Robot sử dụng công nghệ kỹ thuật số.",
                    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500"
                }
            ]
        },
        exercises: [
            {
                question: "WB2 is _____ robot in the show. (strong)",
                answer: "the strongest",
                options: ["stronger", "the strongest", "most strong", "strongest"],
                explanation: "Chúng ta dùng 'the strongest' vì đây là dạng so sánh nhất của tính từ ngắn 'strong'. Khi so sánh với tất cả, ta thêm 'the' và '-est'. 'Stronger' là dạng so sánh hơn, 'most strong' không đúng với tính từ ngắn, 'strongest' thiếu 'the'."
            },
            {
                question: "Shifa is _____ robot. It can help sick people. (smart)",
                answer: "the smartest",
                options: ["smarter", "the smartest", "most smart", "smartest"],
                explanation: "Dùng 'the smartest' vì đây là so sánh nhất của tính từ ngắn 'smart'. Câu ngụ ý Shifa là robot thông minh nhất trong số các robot. 'Smarter' là so sánh hơn, 'most smart' không dùng cho tính từ ngắn."
            },
            {
                question: "This is _____ advanced robot I have ever seen.",
                answer: "the most",
                options: ["more", "most", "the most", "the more"],
                explanation: "Dùng 'the most' vì đây là so sánh nhất của tính từ dài 'advanced'. Với tính từ nhiều hơn một âm tiết, ta dùng 'the most + tính từ'. 'More' dùng cho so sánh hơn, 'most' thiếu 'the'."
            },
            {
                question: "The AI system in this robot is _____ than the previous version.",
                answer: "better",
                options: ["good", "better", "best", "more good"],
                explanation: "Dùng 'better' vì đây là dạng so sánh hơn của tính từ bất quy tắc 'good'. Khi so sánh với một đối tượng (previous version), ta dùng dạng so sánh hơn. 'More good' không đúng vì 'good' là tính từ bất quy tắc."
            },
            {
                question: "Industrial robots are _____ efficient than human workers in repetitive tasks.",
                answer: "more",
                options: ["most", "more", "much", "very"],
                explanation: "Dùng 'more' vì đây là so sánh hơn với tính từ dài 'efficient'. Với tính từ dài, ta dùng 'more + tính từ' để so sánh hơn. 'Most' dùng cho so sánh nhất, 'much/very' không dùng trong cấu trúc so sánh."
            },
            {
                question: "The Mars rover is one of _____ successful space robots ever built.",
                answer: "the most",
                options: ["more", "most", "the most", "much"],
                explanation: "Dùng 'the most' trong cấu trúc 'one of the most + tính từ' để chỉ một trong những cái nhất. Đây là cách diễn đạt so sánh nhất nhưng không phải là duy nhất."
            },
            {
                question: "Modern robots are becoming _____ sophisticated every year.",
                answer: "more and more",
                options: ["more", "the more", "more and more", "most and most"],
                explanation: "Cấu trúc 'more and more + tính từ' diễn tả sự gia tăng dần dần theo thời gian. Đây là cách diễn đạt sự tiến bộ liên tục của robot hiện đại."
            },
            {
                question: "This robot vacuum is _____ expensive but also _____ efficient.",
                answer: "more, more",
                options: ["more, more", "the most, the most", "more, most", "most, more"],
                explanation: "Dùng 'more...more' trong cấu trúc song song để so sánh hai đặc điểm. Cả hai tính từ 'expensive' và 'efficient' đều là tính từ dài nên dùng 'more' để so sánh hơn."
            },
            {
                question: "The humanoid robot moves _____ naturally than the older models.",
                answer: "more",
                options: ["more", "most", "much", "very"],
                explanation: "Dùng 'more' với trạng từ 'naturally' vì đây là trạng từ dài (3 âm tiết). Khi so sánh hơn với trạng từ dài, ta dùng 'more + trạng từ'."
            },
            {
                question: "Which robot feature is the _____ important for factory work?",
                answer: "most",
                options: ["more", "most", "much", "very"],
                explanation: "Dùng 'most' trong cấu trúc so sánh nhất với tính từ dài 'important'. Câu hỏi tìm tính năng quan trọng nhất, nên dùng dạng so sánh nhất."
            },
            {
                question: "The latest robot model works _____ efficiently than its predecessor.",
                answer: "more",
                options: ["more", "most", "much", "the most"],
                explanation: "Dùng 'more' với trạng từ 'efficiently' trong so sánh hơn. So sánh với một đối tượng cụ thể (predecessor) nên dùng dạng so sánh hơn, không dùng so sánh nhất."
            },
            {
                question: "This is _____ complex robot we have designed so far.",
                answer: "the most",
                options: ["more", "most", "the most", "much"],
                explanation: "Dùng 'the most' với tính từ dài 'complex' trong cấu trúc so sánh nhất. 'So far' chỉ ra đây là so sánh với tất cả robot đã thiết kế đến nay."
            },
            {
                question: "The new AI system processes information _____ than before.",
                answer: "faster",
                options: ["fast", "faster", "fastest", "more fast"],
                explanation: "Dùng 'faster' vì đây là dạng so sánh hơn của trạng từ ngắn 'fast'. Với trạng từ một âm tiết, ta thêm '-er' để tạo dạng so sánh hơn. 'More fast' không đúng vì 'fast' là trạng từ ngắn."
            },
            {
                question: "Among all our robots, the cleaning robot is the _____ useful for daily tasks.",
                answer: "most",
                options: ["more", "most", "much", "very"],
                explanation: "Dùng 'most' trong cấu trúc so sánh nhất vì đang so sánh với tất cả robot ('among all our robots'). Tính từ 'useful' là tính từ dài nên dùng 'most' chứ không thêm '-est'."
            },
            {
                question: "The industrial robot arm is _____ precise than human hands.",
                answer: "more",
                options: ["more", "most", "the most", "much"],
                explanation: "Dùng 'more' với tính từ 'precise' vì đây là tính từ dài trong cấu trúc so sánh hơn. So sánh với 'human hands' nên dùng dạng so sánh hơn, không phải so sánh nhất."
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
    },
    {
        id: 15,
        title: "Ôn tập Học kỳ 2",
        grammar: {
            title: "Ôn tập Ngữ pháp",
            content: [
                "<h4>1. Câu hỏi WH</h4>",
                "- What: hỏi về vật, sự việc, công việc",
                "- When: hỏi về thời gian",
                "- Where: hỏi về địa điểm, nơi chốn",
                "- Who: hỏi về người",
                "- Why: hỏi về lý do",
                "- How: hỏi về cách thức, phương tiện",
                "- How often: hỏi về tần suất",
                "<h4>2. Thì hiện tại tiếp diễn</h4>",
                "- Cấu trúc: Subject + am/is/are + V-ing",
                "- Dùng để diễn tả hành động đang diễn ra ở hiện tại",
                "<h4>3. Thì quá khứ đơn</h4>",
                "- Cấu trúc: Subject + V-ed/V2",
                "- Dùng để diễn tả hành động đã xảy ra và kết thúc trong quá khứ",
                "<h4>4. Thì tương lai đơn</h4>",
                "- Cấu trúc: Subject + will + V",
                "- Cấu trúc: Subject + be going to + V",
                "- Dùng để diễn tả hành động sẽ xảy ra trong tương lai",
                "<h4>5. Mạo từ: a/an, the</h4>",
                "- a/an: dùng trước danh từ số ít, có thể đếm được (a trước phụ âm, an trước nguyên âm)",
                "- the: dùng trước danh từ đã được xác định rõ ràng",
                "<h4>6. Câu điều kiện loại 1</h4>",
                "- Cấu trúc: If + S + V (hiện tại đơn), S + will + V",
                "- Dùng để diễn tả điều kiện có thể xảy ra ở hiện tại hoặc tương lai",
                "<h4>7. Tính từ so sánh</h4>",
                "- So sánh hơn: adj-er/more + adj + than",
                "- So sánh nhất: the + adj-est/most + adj",
                "<h4>8. Động từ khiếm khuyết</h4>",
                "- must/mustn't: phải/không được",
                "- have to/don't have to: phải/không cần phải",
                "- should/shouldn't: nên/không nên",
                "<h4>9. Tính từ sở hữu và đại từ sở hữu</h4>",
                "- Tính từ sở hữu: my, your, his, her, its, our, their",
                "- Đại từ sở hữu: mine, yours, his, hers, its, ours, theirs",
                "<h4>10. Liên từ trong câu ghép</h4>",
                "- and: và, nối hai sự việc cùng chiều",
                "- but: nhưng, nối hai sự việc trái chiều",
                "- so: vì vậy, nối nguyên nhân và kết quả"
            ]
        },
        vocabulary: {
            title: "Ôn tập Từ vựng",
            words: [
                {
                    word: "television",
                    meaning: "ti vi",
                    example: "We watch television every evening.",
                    exampleMeaning: "Chúng tôi xem ti vi mỗi tối.",
                    pronunciation: "/ˈtelɪvɪʒən/",
                    image: "https://www.example.com/images/television.jpg"
                },
                {
                    word: "channel",
                    meaning: "kênh truyền hình",
                    example: "What channel is the news on?",
                    exampleMeaning: "Tin tức đang chiếu trên kênh nào?",
                    pronunciation: "/ˈtʃænl/",
                    image: "https://www.example.com/images/channel.jpg"
                },
                {
                    word: "match",
                    meaning: "trận đấu",
                    example: "I watched the football match last night.",
                    exampleMeaning: "Tôi đã xem trận đấu bóng đá tối qua.",
                    pronunciation: "/mætʃ/",
                    image: "https://www.example.com/images/match.jpg"
                },
                {
                    word: "badminton",
                    meaning: "cầu lông",
                    example: "They play badminton twice a week.",
                    exampleMeaning: "Họ chơi cầu lông hai lần một tuần.",
                    pronunciation: "/ˈbædmɪntən/",
                    image: "https://www.example.com/images/badminton.jpg"
                },
                {
                    word: "cycling",
                    meaning: "đạp xe",
                    example: "Cycling is good for your health.",
                    exampleMeaning: "Đạp xe có lợi cho sức khỏe của bạn.",
                    pronunciation: "/ˈsaɪklɪŋ/",
                    image: "https://www.example.com/images/cycling.jpg"
                },
                {
                    word: "landmark",
                    meaning: "địa danh nổi tiếng",
                    example: "The Eiffel Tower is a famous landmark in Paris.",
                    exampleMeaning: "Tháp Eiffel là một địa danh nổi tiếng ở Paris.",
                    pronunciation: "/ˈlændmɑːrk/",
                    image: "https://www.example.com/images/landmark.jpg"
                },
                {
                    word: "palace",
                    meaning: "cung điện",
                    example: "The royal family lives in the palace.",
                    exampleMeaning: "Gia đình hoàng gia sống trong cung điện.",
                    pronunciation: "/ˈpælɪs/",
                    image: "https://www.example.com/images/palace.jpg"
                },
                {
                    word: "capital city",
                    meaning: "thủ đô",
                    example: "Hanoi is the capital city of Vietnam.",
                    exampleMeaning: "Hà Nội là thủ đô của Việt Nam.",
                    pronunciation: "/ˈkæpɪtl ˈsɪti/",
                    image: "https://www.example.com/images/capital.jpg"
                },
                {
                    word: "robot",
                    meaning: "rô-bốt",
                    example: "The robot can do many tasks automatically.",
                    exampleMeaning: "Rô-bốt có thể thực hiện nhiều nhiệm vụ một cách tự động.",
                    pronunciation: "/ˈroʊbɒt/",
                    image: "https://www.example.com/images/robot.jpg"
                },
                {
                    word: "smart home",
                    meaning: "nhà thông minh",
                    example: "In a smart home, you can control devices with your voice.",
                    exampleMeaning: "Trong nhà thông minh, bạn có thể điều khiển thiết bị bằng giọng nói.",
                    pronunciation: "/smɑːrt hoʊm/",
                    image: "https://www.example.com/images/smart-home.jpg"
                },
                {
                    word: "solar panel",
                    meaning: "tấm năng lượng mặt trời",
                    example: "We installed solar panels on our roof last year.",
                    exampleMeaning: "Chúng tôi đã lắp đặt tấm năng lượng mặt trời trên mái nhà năm ngoái.",
                    pronunciation: "/ˈsoʊlər ˈpænl/",
                    image: "https://www.example.com/images/solar-panel.jpg"
                },
                {
                    word: "environment",
                    meaning: "môi trường",
                    example: "We need to protect the environment.",
                    exampleMeaning: "Chúng ta cần bảo vệ môi trường.",
                    pronunciation: "/ɪnˈvaɪrənmənt/",
                    image: "https://www.example.com/images/environment.jpg"
                }
            ]
        },
        pronunciation: {
            title: "Ôn tập Ngữ âm",
            sections: [
                {
                    title: "Âm /θ/",
                    examples: ["math", "bathroom", "birthday", "thirty", "think", "thank"],
                    explanation: "Đặt lưỡi giữa hai hàm răng và thổi khí nhẹ ra."
                },
                {
                    title: "Âm /ð/",
                    examples: ["the", "this", "mother", "brother", "father", "those"],
                    explanation: "Tương tự âm /θ/ nhưng có rung thanh quản."
                },
                {
                    title: "Âm /e/",
                    examples: ["bed", "leg", "pen", "desk", "letter", "many"],
                    explanation: "Mở miệng vừa phải, lưỡi đẩy về phía trước."
                },
                {
                    title: "Âm /æ/",
                    examples: ["cat", "map", "hat", "apple", "happy", "family"],
                    explanation: "Mở miệng khá rộng, lưỡi hạ thấp."
                },
                {
                    title: "Âm /əʊ/",
                    examples: ["go", "phone", "home", "know", "slow", "boat"],
                    explanation: "Bắt đầu với âm /ə/ và trượt đến /ʊ/."
                },
                {
                    title: "Âm /aʊ/",
                    examples: ["house", "now", "town", "brown", "cloud", "ground"],
                    explanation: "Bắt đầu với âm /a/ và trượt đến /ʊ/."
                },
                {
                    title: "Âm cuối -s",
                    examples: ["books", "maps", "beds", "pens", "cats", "dogs"],
                    explanation: "Phát âm /s/ sau âm vô thanh, /z/ sau âm hữu thanh và nguyên âm, /iz/ sau âm rít."
                },
                {
                    title: "Trọng âm trong từ hai âm tiết",
                    examples: ["teacher", "student", "robot", "mother", "window", "garden"],
                    explanation: "Trong tiếng Anh, trọng âm thường rơi vào âm tiết đầu tiên của từ hai âm tiết."
                }
            ]
        },
        exercises: [
            {
                question: "When _____ your family usually watch TV? (Khi nào gia đình bạn thường xem TV?)",
                answer: "does",
                options: ["do", "does", "is", "are"],
                explanation: "Sử dụng 'does' với chủ ngữ 'your family' (ngôi thứ 3 số ít) khi đặt câu hỏi WH- ở thì hiện tại đơn. Cấu trúc: WH-word + do/does + S + V?"
            },
            {
                question: "What _____ she doing now? (Cô ấy đang làm gì bây giờ?)",
                answer: "is",
                options: ["is", "are", "do", "does"],
                explanation: "Sử dụng 'is' với chủ ngữ 'she' khi đặt câu hỏi WH- ở thì hiện tại tiếp diễn. Cấu trúc: WH-word + be + S + V-ing?"
            },
            {
                question: "Where _____ you yesterday? (Hôm qua bạn ở đâu?)",
                answer: "were",
                options: ["was", "were", "did", "are"],
                explanation: "Sử dụng 'were' với chủ ngữ 'you' khi đặt câu hỏi WH- với to be ở thì quá khứ đơn. Cấu trúc: WH-word + was/were + S + ...?"
            },
            {
                question: "They _____ playing football when it started to rain. (Họ đang chơi bóng đá khi trời bắt đầu mưa.)",
                answer: "were",
                options: ["was", "were", "are", "is"],
                explanation: "Sử dụng 'were' với chủ ngữ 'they' trong thì quá khứ tiếp diễn. Cấu trúc: S + was/were + V-ing."
            },
            {
                question: "I _____ to the cinema last weekend. (Tôi đã đi xem phim cuối tuần trước.)",
                answer: "went",
                options: ["go", "goes", "went", "going"],
                explanation: "Sử dụng 'went' (quá khứ của 'go') trong thì quá khứ đơn. Cấu trúc: S + V2/V-ed."
            },
            {
                question: "They _____ badminton next week. (Họ sẽ chơi cầu lông vào tuần tới.)",
                answer: "will play",
                options: ["plays", "played", "are playing", "will play"],
                explanation: "Sử dụng 'will play' cho hành động sẽ xảy ra trong tương lai. Cấu trúc: S + will + V."
            },
            {
                question: "If the weather _____ fine, we _____ camping tomorrow. (Nếu thời tiết đẹp, chúng tôi sẽ đi cắm trại vào ngày mai.)",
                answer: "is, will go",
                options: ["is, will go", "will be, go", "is, go", "was, will go"],
                explanation: "Đây là câu điều kiện loại 1, diễn đạt điều kiện có thể xảy ra trong tương lai. Cấu trúc: If + S + V (hiện tại đơn), S + will + V."
            },
            {
                question: "I bought _____ new pencil case yesterday. _____ pencil case was blue. (Tôi đã mua một chiếc hộp bút mới hôm qua. Chiếc hộp bút đó màu xanh.)",
                answer: "a, The",
                options: ["a, A", "an, The", "a, The", "the, The"],
                explanation: "Sử dụng 'a' trước danh từ số ít lần đầu nhắc đến và 'the' khi nhắc lại lần thứ hai vì nó đã được xác định."
            },
            {
                question: "My sister's got _____ hair but my brother's got dark hair. (Chị gái tôi có mái tóc ___ nhưng em trai tôi có mái tóc đen.)",
                answer: "blonde",
                options: ["short", "curly", "wavy", "blonde"],
                explanation: "Từ 'blonde' (vàng hoe) đối lập với 'dark' (đen) khi nói về màu tóc, phù hợp với ngữ cảnh của câu."
            },
            {
                question: "Vietnam's population reached more than 99 million in 2022. (Từ nào trong câu có nghĩa là số dân?)",
                answer: "population",
                options: ["Vietnam", "population", "million", "reached"],
                explanation: "'Population' có nghĩa là 'dân số/số dân', là từ chính trong câu này nói về số lượng người dân."
            },
            {
                question: "The robot will _____ the flowers in the garden. (Robot sẽ ___ những bông hoa trong vườn.)",
                answer: "look after",
                options: ["look after", "look at", "look out", "look in"],
                explanation: "'Look after' có nghĩa là 'chăm sóc', phù hợp với ngữ cảnh chăm sóc hoa trong vườn."
            },
            {
                question: "_____ you have a test tomorrow morning? (_____ bạn có bài kiểm tra vào sáng mai không?)",
                answer: "Do",
                options: ["Will", "Do", "Are", "Is"],
                explanation: "Sử dụng 'Do' để đặt câu hỏi ở thì hiện tại đơn với chủ ngữ 'you'. Cấu trúc: Do/Does + S + V?"
            },
            {
                question: "I like cycling, _____ I will save money to buy a good bicycle. (Tôi thích đạp xe, _____ tôi sẽ tiết kiệm tiền để mua một chiếc xe đạp tốt.)",
                answer: "so",
                options: ["and", "but", "so", "because"],
                explanation: "Sử dụng 'so' để nối nguyên nhân (thích đạp xe) với kết quả (tiết kiệm tiền mua xe). 'So' có nghĩa là 'vì vậy'."
            },
            {
                question: "He wants to get high marks in the final exam, _____ he is trying his best. (Anh ấy muốn đạt điểm cao trong kỳ thi cuối kỳ, _____ anh ấy đang cố gắng hết sức.)",
                answer: "so",
                options: ["but", "so", "and", "because"],
                explanation: "Sử dụng 'so' để nối nguyên nhân (muốn đạt điểm cao) với kết quả (đang cố gắng hết sức). 'So' có nghĩa là 'vì vậy'."
            },
            {
                question: "My headache is _____ than it was last week. (Cơn đau đầu của tôi _____ so với tuần trước.)",
                answer: "better",
                options: ["good", "better", "worse", "worst"],
                explanation: "Sử dụng 'better' (tính từ so sánh hơn của 'good') để so sánh tình trạng hiện tại với quá khứ. Cấu trúc: S + V + adj-er + than."
            },
            {
                question: "Why don't you _____ karate? It can help you protect yourself.",
                answer: "play",
                options: ["jump", "play", "go", "do"],
                explanation: "In English, we typically use 'do' with martial arts, but among the options given, 'play' is the closest choice. The correct phrase would be 'do karate', but since that's not an option, 'play karate' is selected as the answer."
            },
            {
                question: "Vietnam's _____ reached more than 99 million in 2022.",
                answer: "population",
                options: ["capital city", "population", "flag", "language"],
                explanation: "The sentence is about a numerical figure (more than 99 million) associated with Vietnam. Among the options, 'population' is the only one that would be measured in millions of people."
            },
            {
                question: "My cousin doesn't like _____ Math and Chemistry.",
                answer: "studying",
                options: ["study", "studies", "studying", "studied"],
                explanation: "After 'like', 'enjoy', 'love', and similar verbs, we often use the gerund (verb + -ing). Therefore, 'studying' is the correct form after 'doesn't like'."
            },
            {
                question: "I'm really _____ on sport – especially volleyball.",
                answer: "keen",
                options: ["keen", "interested", "play", "like"],
                explanation: "The phrase 'keen on something' means to be very interested in or enthusiastic about it. This is a common collocation in English, making 'keen' the most appropriate choice for the blank."
            },
            {
                question: "I bought _____ pencil case yesterday. _____ pencil case was blue.",
                answer: "a/ The",
                options: ["some/ The", "an/ A", "a/ The", "the/ The"],
                explanation: "We use 'a' for the first mention of a singular countable noun (when introducing it). We use 'the' for subsequent mentions of the same noun (when it becomes specific). Therefore, 'a/The' is correct."
            },
            {
                question: "Nam often _____ TV in the evening.",
                answer: "watches",
                options: ["watch", "watches", "watched", "is watching"],
                explanation: "For the present simple tense with a third-person singular subject (he, she, it, or a name like Nam), we add -s or -es to the verb. Therefore, 'watches' is the correct form for a habitual action."
            },
            {
                question: "They _____ in Hanoi from 1970 to 1999.",
                answer: "lived",
                options: ["live", "lived", "are living", "were lived"],
                explanation: "For a completed action in the past with a specific time period that has ended ('from 1970 to 1999'), we use the past simple tense. Therefore, 'lived' is the correct form."
            },
            {
                question: "I need someone who can play _____ guitar, I'll sing a song now.",
                answer: "the",
                options: ["a", "an", "the", "Ø"],
                explanation: "We typically use 'the' with musical instruments when talking about playing them. Therefore, 'the guitar' is the correct form in this context."
            },
            {
                question: "They _____ badminton next week.",
                answer: "will play",
                options: ["play", "played", "playing", "will play"],
                explanation: "For a future action with a specific time reference ('next week'), we can use 'will + verb'. Therefore, 'will play' is the correct form to express a future action."
            },
            {
                question: "I think he _____ at home by 8 pm tonight.",
                answer: "will be",
                options: ["will be", "was", "is", "be"],
                explanation: "For a prediction about the future with a specific time reference ('by 8 pm tonight'), we use 'will + be'. Therefore, 'will be' is the correct form to express a future state."
            },
            {
                question: "If the weather _____ fine, we _____ camping tomorrow.",
                answer: "is/ will go",
                options: ["be/ will go", "is/ will go", "are/ go", "was/went"],
                explanation: "In first conditional sentences (for possible future situations), we use 'if + present simple, will + infinitive'. Therefore, 'is/will go' is the correct combination."
            },
            {
                question: "If I _____ a terrible headache, I _____ some medicines.",
                answer: "have/ will take",
                options: ["have/ take", "have/ will take", "am having/ take", "had/ took"],
                explanation: "In first conditional sentences (for possible future situations), we use 'if + present simple, will + infinitive'. Therefore, 'have/will take' is the correct combination."
            },
            {
                question: "Our school football team _____ the match with Nguyen Du school last Saturday.",
                answer: "won",
                options: ["wins", "won", "scores", "scored"],
                explanation: "For a completed action in the past with a specific time reference ('last Saturday'), we use the past simple tense. Therefore, 'won' is the correct form for a completed past action."
            },
            {
                question: "_____ do you do judo? - Twice a week.",
                answer: "How often",
                options: ["Why", "How often", "Where", "When"],
                explanation: "When asking about frequency (how many times something happens), we use 'How often'. The answer 'Twice a week' indicates frequency, making 'How often' the correct question word."
            },
            {
                question: "Music channel attracts millions of _____ throughout the country.",
                answer: "viewers",
                options: ["characters", "writers", "reporters", "viewers"],
                explanation: "People who watch television channels are called 'viewers'. Since we're talking about a TV channel (music channel), 'viewers' is the most appropriate term."
            },
            {
                question: "William is very _____ - he runs five kilometres every day.",
                answer: "fit",
                options: ["fit", "helpful", "smart", "shy"],
                explanation: "Someone who exercises regularly and is in good physical condition is described as 'fit'. Running five kilometers daily indicates physical fitness, making 'fit' the most appropriate term."
            },
            {
                question: "My father is playing _____ with his friend now.",
                answer: "chess",
                options: ["fishing", "exercise", "karate", "chess"],
                explanation: "Among the options, only 'chess' is a game that you can 'play' with one other person. 'Fishing' is an activity, not typically described as being 'played with a friend'."
            },
            {
                question: "It was _____ beautiful day. _____ sun shone brightly in _____ sky.",
                answer: "a/The/the",
                options: ["a/The/the", "the/The/the", "a/A/a", "the/A/a"],
                explanation: "We use 'a' for the first mention of a day (indefinite). We use 'the' for unique things like 'the sun' and 'the sky' (there's only one sun and one sky in our context)."
            },
            {
                question: "There is _____ umbrella in _____ corner of the house.",
                answer: "an/the",
                options: ["a/a", "a/the", "an/the", "an/a"],
                explanation: "We use 'an' before words beginning with a vowel sound (umbrella starts with a vowel sound). We use 'the' for a specific location ('the corner' specifies which corner we're talking about)."
            },
            {
                question: "Please give me _____ cup of _____ coffee with cream and less sugar.",
                answer: "a/ Ø",
                options: ["a/a", "a/the", "the/Ø", "a/ Ø"],
                explanation: "We use 'a' for a single, countable item (one cup). We use no article (Ø) for uncountable nouns in general (coffee in general, not a specific coffee)."
            },
            {
                question: "My headache is _____ than it was last week.",
                answer: "better",
                options: ["good", "better", "worst", "badder"],
                explanation: "When comparing two states (current headache vs. last week's headache), we use the comparative form. The comparative of 'good' is 'better', not 'gooder'."
            },
            {
                question: "The robot will _____ the flowers in the garden.",
                answer: "look after",
                options: ["look after", "look at", "look out", "look in"],
                explanation: "The phrasal verb 'look after' means to take care of or be responsible for something. This makes the most sense in the context of a robot tending to flowers."
            },
            {
                question: "_____ you have a test tomorrow morning?",
                answer: "Do",
                options: ["Will", "Do", "Are", "Is"],
                explanation: "To form a question in the present simple tense, we use 'Do' + subject + verb for the second person ('you'). Therefore, 'Do' is the correct auxiliary verb for this question."
            },
            {
                question: "The word CLOSEST in meaning to 'clever' is:",
                answer: "intelligent",
                options: ["stupid", "intelligent", "helpful", "kind"],
                explanation: "'Clever' means having or showing intelligence or skill. Among the options, 'intelligent' is closest in meaning to 'clever'."
            },
            {
                question: "The word CLOSEST in meaning to 'learning' is:",
                answer: "studying",
                options: ["studying", "changing", "joining", "building"],
                explanation: "'Learning' refers to acquiring knowledge or skills through study or experience. Among the options, 'studying' is closest in meaning to 'learning'."
            },
            {
                question: "The word CLOSEST in meaning to 'began' is:",
                answer: "started",
                options: ["sold", "started", "thought", "understood"],
                explanation: "'Began' means to start or initiate something. Among the options, 'started' is closest in meaning to 'began'."
            },
            {
                question: "The word CLOSEST in meaning to 'rude' is:",
                answer: "bad",
                options: ["strong", "bad", "dangerous", "polite"],
                explanation: "'Rude' means impolite or disrespectful. Among the options, 'bad' is closest in meaning to 'rude', although 'impolite' would be even closer."
            },
            {
                question: "The word CLOSEST in meaning to 'dangerous' is:",
                answer: "risky",
                options: ["risky", "normal", "brave", "usual"],
                explanation: "'Dangerous' means likely to cause harm or injury. Among the options, 'risky' is closest in meaning to 'dangerous'."
            },
            {
                question: "The word OPPOSITE in meaning to 'excellent' is:",
                answer: "terrible",
                options: ["good", "brilliant", "delicious", "terrible"],
                explanation: "'Excellent' means extremely good. Among the options, 'terrible' (extremely bad) is the opposite of 'excellent'."
            },
            {
                question: "The word OPPOSITE in meaning to 'outdoor' is:",
                answer: "indoor",
                options: ["outside", "underdoor", "indoor", "ondoor"],
                explanation: "'Outdoor' refers to activities or things that exist, happen, or are used outside a building. 'Indoor' (inside a building) is the opposite."
            },
            {
                question: "The word OPPOSITE in meaning to 'dangerous' is:",
                answer: "safe",
                options: ["risky", "unsafe", "scary", "safe"],
                explanation: "'Dangerous' means likely to cause harm or injury. Among the options, 'safe' (free from harm or risk) is the opposite of 'dangerous'."
            },
            {
                question: "The word OPPOSITE in meaning to 'buy' is:",
                answer: "sell",
                options: ["sell", "play", "wear", "take"],
                explanation: "'Buy' means to acquire something by paying money for it. 'Sell' (to give something in exchange for money) is the opposite."
            },
            {
                question: "The word OPPOSITE in meaning to 'send' is:",
                answer: "receive",
                options: ["order", "buy", "receive", "sell"],
                explanation: "'Send' means to cause something to go or be taken to a destination. 'Receive' (to get or be given something) is the opposite."
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
                <div class="word-item mb-4">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="${word.image}" alt="${word.word}" class="img-fluid rounded vocabulary-image" 
                                 style="max-height: 200px; object-fit: cover;">
                        </div>
                        <div class="col-md-8">
                            <h4>${word.word} 
                                <button onclick="speakWord('${word.word}')" class="btn btn-sm btn-primary ml-2">
                                    <i class="fas fa-volume-up"></i> Phát âm
                                </button>
                            </h4>
                            <p><strong>Phát âm:</strong> <span class="pronunciation">${word.pronunciation || ''}</span></p>
                            <p><strong>Nghĩa:</strong> ${word.meaning}</p>
                            <p><strong>Ví dụ:</strong> ${word.example}</p>
                            <p><strong>Nghĩa ví dụ:</strong> ${word.exampleMeaning}</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Function to speak the word using Web Speech API
function speakWord(word) {
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = 'en-US';
    speech.rate = 0.8; // Slightly slower speed for better pronunciation
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
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
                    <button type="button" class="btn btn-sm btn-outline-info mt-2" onclick="toggleSingleExplanation(${index})">Xem giải thích</button>
                    <div class="explanation mt-2" id="explanation${index}" style="display: none;">
                        <div class="alert alert-info">
                            <strong>Giải thích:</strong> ${exercise.explanation}
                        </div>
                    </div>
                </div>
            `).join('')}
            <div class="button-group">
                <button type="button" class="btn btn-primary me-2" onclick="checkExercises()">Kiểm tra đáp án</button>
                <button type="button" class="btn btn-info" onclick="toggleExplanations()">Hiện/Ẩn tất cả giải thích</button>
            </div>
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

// Add new function to toggle single explanation
function toggleSingleExplanation(index) {
    const explanation = document.getElementById(`explanation${index}`);
    explanation.style.display = explanation.style.display === 'none' ? 'block' : 'none';
}

// Rename the existing function to be clearer
function toggleExplanations() {
    const explanations = document.querySelectorAll('[id^="explanation"]');
    explanations.forEach(explanation => {
        explanation.style.display = explanation.style.display === 'none' ? 'block' : 'none';
    });
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', initializeApp); 
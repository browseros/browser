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
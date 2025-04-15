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
        title: "Bài 7: Du lịch và Phương tiện",
        grammar: {
            title: "Will và Be going to",
            content: [
                "Will: dùng để:",
                "- Dự đoán tương lai",
                "- Quyết định tức thì",
                "- Hứa hẹn",
                "",
                "Be going to: dùng để:",
                "- Kế hoạch đã định trước",
                "- Dự đoán dựa trên bằng chứng hiện tại",
                "",
                "Ví dụ:",
                "- I will help you. (Tôi sẽ giúp bạn.)",
                "- We are going to travel next week. (Chúng tôi sẽ đi du lịch tuần sau.)"
            ]
        },
        vocabulary: {
            title: "Du lịch và Phương tiện",
            words: [
                { 
                    word: "travel", 
                    meaning: "du lịch", 
                    example: "I love to travel. (Tôi thích du lịch.)" 
                },
                { 
                    word: "transport", 
                    meaning: "phương tiện giao thông", 
                    example: "What transport do you use? (Bạn đi phương tiện gì?)" 
                },
                { 
                    word: "airplane", 
                    meaning: "máy bay", 
                    example: "We will go by airplane. (Chúng tôi sẽ đi bằng máy bay.)" 
                },
                { 
                    word: "train", 
                    meaning: "tàu hỏa", 
                    example: "The train leaves at 9 AM. (Tàu khởi hành lúc 9 giờ sáng.)" 
                },
                { 
                    word: "bus", 
                    meaning: "xe buýt", 
                    example: "I take the bus to school. (Tôi đi xe buýt đến trường.)" 
                },
                { 
                    word: "taxi", 
                    meaning: "taxi", 
                    example: "Let's take a taxi. (Hãy đi taxi.)" 
                },
                { 
                    word: "ticket", 
                    meaning: "vé", 
                    example: "I need to buy a ticket. (Tôi cần mua vé.)" 
                },
                { 
                    word: "passport", 
                    meaning: "hộ chiếu", 
                    example: "Don't forget your passport. (Đừng quên hộ chiếu.)" 
                },
                { 
                    word: "luggage", 
                    meaning: "hành lý", 
                    example: "My luggage is heavy. (Hành lý của tôi nặng.)" 
                },
                { 
                    word: "map", 
                    meaning: "bản đồ", 
                    example: "I need a map of the city. (Tôi cần bản đồ thành phố.)" 
                }
            ]
        },
        exercises: [
            {
                question: "We _____ travel to Paris next month. (Chúng tôi sẽ du lịch Paris tháng sau.)",
                answer: "are going to",
                options: ["will", "are going to", "going to", "will to"]
            },
            {
                question: "The weather is bad. It _____ rain. (Thời tiết xấu. Trời sẽ mưa.)",
                answer: "is going to",
                options: ["will", "is going to", "going", "will to"]
            },
            {
                question: "I _____ help you with your luggage. (Tôi sẽ giúp bạn với hành lý.)",
                answer: "will",
                options: ["going to", "will", "am going to", "will to"]
            }
        ]
    },
    {
        id: 8,
        title: "Bài 8: Công nghệ và Internet",
        grammar: {
            title: "Must/Mustn't và Should/Shouldn't",
            content: [
                "Must: phải (bắt buộc)",
                "Mustn't: không được (cấm)",
                "",
                "Should: nên",
                "Shouldn't: không nên",
                "",
                "Cấu trúc:",
                "Subject + must/mustn't + V(nguyên thể)",
                "Subject + should/shouldn't + V(nguyên thể)",
                "",
                "Ví dụ:",
                "- You must finish your homework. (Bạn phải làm xong bài tập.)",
                "- You shouldn't play games too much. (Bạn không nên chơi game quá nhiều.)"
            ]
        },
        vocabulary: {
            title: "Công nghệ và Internet",
            words: [
                { 
                    word: "computer", 
                    meaning: "máy tính", 
                    example: "I use a computer every day. (Tôi sử dụng máy tính mỗi ngày.)" 
                },
                { 
                    word: "smartphone", 
                    meaning: "điện thoại thông minh", 
                    example: "Everyone has a smartphone nowadays. (Ngày nay ai cũng có điện thoại thông minh.)" 
                },
                { 
                    word: "internet", 
                    meaning: "mạng internet", 
                    example: "The internet is very fast. (Mạng internet rất nhanh.)" 
                },
                { 
                    word: "website", 
                    meaning: "trang web", 
                    example: "This is my favorite website. (Đây là trang web yêu thích của tôi.)" 
                },
                { 
                    word: "email", 
                    meaning: "thư điện tử", 
                    example: "I sent you an email. (Tôi đã gửi cho bạn một email.)" 
                },
                { 
                    word: "password", 
                    meaning: "mật khẩu", 
                    example: "Don't forget your password. (Đừng quên mật khẩu.)" 
                },
                { 
                    word: "download", 
                    meaning: "tải xuống", 
                    example: "I need to download this file. (Tôi cần tải tệp này xuống.)" 
                },
                { 
                    word: "upload", 
                    meaning: "tải lên", 
                    example: "Please upload your homework. (Hãy tải bài tập lên.)" 
                },
                { 
                    word: "social media", 
                    meaning: "mạng xã hội", 
                    example: "Facebook is a social media platform. (Facebook là một nền tảng mạng xã hội.)" 
                },
                { 
                    word: "online", 
                    meaning: "trực tuyến", 
                    example: "We can study online. (Chúng ta có thể học trực tuyến.)" 
                }
            ]
        },
        exercises: [
            {
                question: "You _____ protect your password. (Bạn phải bảo vệ mật khẩu.)",
                answer: "must",
                options: ["must", "should", "can", "may"]
            },
            {
                question: "Children _____ spend too much time online. (Trẻ em không nên dành quá nhiều thời gian online.)",
                answer: "shouldn't",
                options: ["mustn't", "shouldn't", "can't", "don't"]
            },
            {
                question: "You _____ share your personal information online. (Bạn không được chia sẻ thông tin cá nhân online.)",
                answer: "mustn't",
                options: ["must", "mustn't", "should", "shouldn't"]
            }
        ]
    },
    {
        id: 9,
        title: "Bài 9: Môi trường",
        grammar: {
            title: "Câu điều kiện loại 1 (First Conditional)",
            content: [
                "Cấu trúc: If + S + V(hiện tại đơn), S + will + V(nguyên thể)",
                "",
                "Dùng để nói về:",
                "- Điều kiện có thể xảy ra ở tương lai",
                "- Kết quả có thể xảy ra nếu điều kiện được thỏa mãn",
                "",
                "Ví dụ:",
                "- If we don't protect the environment, many animals will die.",
                "(Nếu chúng ta không bảo vệ môi trường, nhiều động vật sẽ chết.)"
            ]
        },
        vocabulary: {
            title: "Môi trường",
            words: [
                { 
                    word: "environment", 
                    meaning: "môi trường", 
                    example: "We must protect our environment. (Chúng ta phải bảo vệ môi trường.)" 
                },
                { 
                    word: "pollution", 
                    meaning: "ô nhiễm", 
                    example: "Air pollution is a serious problem. (Ô nhiễm không khí là vấn đề nghiêm trọng.)" 
                },
                { 
                    word: "recycle", 
                    meaning: "tái chế", 
                    example: "We should recycle paper and plastic. (Chúng ta nên tái chế giấy và nhựa.)" 
                },
                { 
                    word: "waste", 
                    meaning: "rác thải", 
                    example: "Don't throw waste on the street. (Đừng vứt rác ra đường.)" 
                },
                { 
                    word: "clean", 
                    meaning: "sạch sẽ", 
                    example: "We need clean water to live. (Chúng ta cần nước sạch để sống.)" 
                },
                { 
                    word: "plant", 
                    meaning: "trồng cây", 
                    example: "Let's plant more trees. (Hãy trồng thêm nhiều cây.)" 
                },
                { 
                    word: "energy", 
                    meaning: "năng lượng", 
                    example: "Solar energy is clean energy. (Năng lượng mặt trời là năng lượng sạch.)" 
                },
                { 
                    word: "forest", 
                    meaning: "rừng", 
                    example: "We must protect our forests. (Chúng ta phải bảo vệ rừng.)" 
                },
                { 
                    word: "climate", 
                    meaning: "khí hậu", 
                    example: "The climate is changing. (Khí hậu đang thay đổi.)" 
                },
                { 
                    word: "save", 
                    meaning: "tiết kiệm", 
                    example: "We should save water. (Chúng ta nên tiết kiệm nước.)" 
                }
            ]
        },
        exercises: [
            {
                question: "If we _____ trees, the air will be cleaner. (Nếu chúng ta trồng cây, không khí sẽ sạch hơn.)",
                answer: "plant",
                options: ["plant", "plants", "will plant", "planted"]
            },
            {
                question: "If people don't stop pollution, many animals _____ extinct. (Nếu người ta không ngừng ô nhiễm, nhiều động vật sẽ tuyệt chủng.)",
                answer: "will become",
                options: ["become", "will become", "becomes", "became"]
            },
            {
                question: "The environment _____ better if we recycle more. (Môi trường sẽ tốt hơn nếu chúng ta tái chế nhiều hơn.)",
                answer: "will be",
                options: ["is", "will be", "would be", "was"]
            }
        ]
    },
    {
        id: 10,
        title: "Bài 10: Nghề nghiệp",
        grammar: {
            title: "Be going to (Dự định tương lai)",
            content: [
                "Cấu trúc: Subject + be + going to + V(nguyên thể)",
                "",
                "Dùng để nói về:",
                "- Kế hoạch trong tương lai",
                "- Dự định đã được quyết định trước",
                "",
                "Ví dụ:",
                "- I am going to be a doctor. (Tôi sẽ trở thành bác sĩ.)",
                "- What are you going to do after school? (Bạn định làm gì sau khi học xong?)"
            ]
        },
        vocabulary: {
            title: "Nghề nghiệp",
            words: [
                { 
                    word: "job", 
                    meaning: "công việc", 
                    example: "She loves her job. (Cô ấy yêu công việc của mình.)" 
                },
                { 
                    word: "doctor", 
                    meaning: "bác sĩ", 
                    example: "My sister is a doctor. (Chị tôi là bác sĩ.)" 
                },
                { 
                    word: "teacher", 
                    meaning: "giáo viên", 
                    example: "Teachers help students learn. (Giáo viên giúp học sinh học.)" 
                },
                { 
                    word: "engineer", 
                    meaning: "kỹ sư", 
                    example: "He works as an engineer. (Anh ấy làm kỹ sư.)" 
                },
                { 
                    word: "police officer", 
                    meaning: "cảnh sát", 
                    example: "Police officers protect people. (Cảnh sát bảo vệ mọi người.)" 
                },
                { 
                    word: "chef", 
                    meaning: "đầu bếp", 
                    example: "The chef cooks delicious food. (Đầu bếp nấu đồ ăn ngon.)" 
                },
                { 
                    word: "artist", 
                    meaning: "nghệ sĩ", 
                    example: "She wants to be an artist. (Cô ấy muốn trở thành nghệ sĩ.)" 
                },
                { 
                    word: "businessman", 
                    meaning: "doanh nhân", 
                    example: "My father is a businessman. (Bố tôi là doanh nhân.)" 
                },
                { 
                    word: "nurse", 
                    meaning: "y tá", 
                    example: "Nurses work in hospitals. (Y tá làm việc trong bệnh viện.)" 
                },
                { 
                    word: "pilot", 
                    meaning: "phi công", 
                    example: "He dreams of becoming a pilot. (Anh ấy mơ ước trở thành phi công.)" 
                }
            ]
        },
        exercises: [
            {
                question: "What _____ you going to be in the future? (Bạn định làm gì trong tương lai?)",
                answer: "are",
                options: ["is", "are", "am", "be"]
            },
            {
                question: "She _____ going to work as a teacher. (Cô ấy sẽ làm giáo viên.)",
                answer: "is",
                options: ["is", "are", "am", "be"]
            },
            {
                question: "They _____ going to study medicine. (Họ sẽ học ngành y.)",
                answer: "are",
                options: ["is", "are", "am", "be"]
            }
        ]
    },
    {
        id: 11,
        title: "Bài 11: Thể thao và Sức khỏe",
        grammar: {
            title: "Have to/Has to (Phải)",
            content: [
                "Cấu trúc:",
                "- Khẳng định: Subject + have to/has to + V(nguyên thể)",
                "- Phủ định: Subject + don't/doesn't + have to + V(nguyên thể)",
                "- Câu hỏi: Do/Does + Subject + have to + V(nguyên thể)?",
                "",
                "Dùng để nói về:",
                "- Nghĩa vụ, bổn phận phải làm",
                "- Sự cần thiết phải làm gì đó",
                "",
                "Ví dụ:",
                "- I have to exercise every day. (Tôi phải tập thể dục mỗi ngày.)",
                "- She has to go to the doctor. (Cô ấy phải đi gặp bác sĩ.)"
            ]
        },
        vocabulary: {
            title: "Thể thao và Sức khỏe",
            words: [
                { 
                    word: "exercise", 
                    meaning: "tập thể dục", 
                    example: "Exercise is good for health. (Tập thể dục tốt cho sức khỏe.)" 
                },
                { 
                    word: "healthy", 
                    meaning: "khỏe mạnh", 
                    example: "Eating vegetables keeps you healthy. (Ăn rau củ giúp bạn khỏe mạnh.)" 
                },
                { 
                    word: "sports", 
                    meaning: "thể thao", 
                    example: "I love playing sports. (Tôi thích chơi thể thao.)" 
                },
                { 
                    word: "fitness", 
                    meaning: "thể hình", 
                    example: "He goes to the fitness center. (Anh ấy đi đến trung tâm thể hình.)" 
                },
                { 
                    word: "diet", 
                    meaning: "chế độ ăn", 
                    example: "A good diet is important. (Chế độ ăn tốt rất quan trọng.)" 
                },
                { 
                    word: "rest", 
                    meaning: "nghỉ ngơi", 
                    example: "You need to rest after exercise. (Bạn cần nghỉ ngơi sau khi tập thể dục.)" 
                },
                { 
                    word: "strength", 
                    meaning: "sức mạnh", 
                    example: "Swimming builds strength. (Bơi lội rèn luyện sức mạnh.)" 
                },
                { 
                    word: "team", 
                    meaning: "đội", 
                    example: "I play in a football team. (Tôi chơi trong một đội bóng đá.)" 
                },
                { 
                    word: "coach", 
                    meaning: "huấn luyện viên", 
                    example: "Our coach is very strict. (Huấn luyện viên của chúng tôi rất nghiêm khắc.)" 
                },
                { 
                    word: "practice", 
                    meaning: "luyện tập", 
                    example: "We practice every morning. (Chúng tôi luyện tập mỗi sáng.)" 
                }
            ]
        },
        exercises: [
            {
                question: "You _____ exercise regularly. (Bạn phải tập thể dục thường xuyên.)",
                answer: "have to",
                options: ["have to", "has to", "must", "should"]
            },
            {
                question: "She _____ go to the gym today. (Cô ấy phải đi phòng tập hôm nay.)",
                answer: "has to",
                options: ["have to", "has to", "must", "had to"]
            },
            {
                question: "_____ they have to practice every day? (Họ có phải luyện tập mỗi ngày không?)",
                answer: "Do",
                options: ["Do", "Does", "Are", "Is"]
            }
        ]
    },
    {
        id: 12,
        title: "Bài 12: Kỳ nghỉ",
        grammar: {
            title: "Past Simple (Thì quá khứ đơn)",
            content: [
                "Cấu trúc:",
                "- Khẳng định: Subject + V(quá khứ)",
                "- Phủ định: Subject + didn't + V(nguyên thể)",
                "- Câu hỏi: Did + Subject + V(nguyên thể)?",
                "",
                "Dùng để nói về:",
                "- Hành động đã xảy ra và kết thúc trong quá khứ",
                "- Thói quen trong quá khứ",
                "",
                "Ví dụ:",
                "- I visited my grandparents last summer. (Tôi đã thăm ông bà hè năm ngoái.)",
                "- We didn't go to the beach yesterday. (Chúng tôi đã không đi biển hôm qua.)"
            ]
        },
        vocabulary: {
            title: "Kỳ nghỉ",
            words: [
                { 
                    word: "holiday", 
                    meaning: "kỳ nghỉ", 
                    example: "We had a great holiday. (Chúng tôi có một kỳ nghỉ tuyệt vời.)" 
                },
                { 
                    word: "trip", 
                    meaning: "chuyến đi", 
                    example: "They planned a trip to the mountains. (Họ lên kế hoạch đi núi.)" 
                },
                { 
                    word: "beach", 
                    meaning: "bãi biển", 
                    example: "The beach was beautiful. (Bãi biển rất đẹp.)" 
                },
                { 
                    word: "hotel", 
                    meaning: "khách sạn", 
                    example: "We stayed in a nice hotel. (Chúng tôi ở một khách sạn đẹp.)" 
                },
                { 
                    word: "sightseeing", 
                    meaning: "tham quan", 
                    example: "We went sightseeing in the city. (Chúng tôi đi tham quan thành phố.)" 
                },
                { 
                    word: "souvenir", 
                    meaning: "quà lưu niệm", 
                    example: "I bought some souvenirs. (Tôi đã mua vài món quà lưu niệm.)" 
                },
                { 
                    word: "photograph", 
                    meaning: "ảnh", 
                    example: "We took many photographs. (Chúng tôi chụp nhiều ảnh.)" 
                },
                { 
                    word: "relax", 
                    meaning: "thư giãn", 
                    example: "I like to relax on holiday. (Tôi thích thư giãn trong kỳ nghỉ.)" 
                },
                { 
                    word: "enjoy", 
                    meaning: "thưởng thức", 
                    example: "We enjoyed our vacation. (Chúng tôi thích kỳ nghỉ của mình.)" 
                },
                { 
                    word: "return", 
                    meaning: "trở về", 
                    example: "We returned home yesterday. (Chúng tôi đã trở về nhà hôm qua.)" 
                }
            ]
        },
        exercises: [
            {
                question: "We _____ to the beach last weekend. (Chúng tôi đã đi biển cuối tuần trước.)",
                answer: "went",
                options: ["go", "went", "gone", "going"]
            },
            {
                question: "_____ you visit the museum? (Bạn có thăm bảo tàng không?)",
                answer: "Did",
                options: ["Do", "Did", "Does", "Done"]
            },
            {
                question: "They _____ like the hotel. (Họ đã không thích khách sạn.)",
                answer: "didn't",
                options: ["not", "didn't", "don't", "doesn't"]
            }
        ]
    },
    {
        id: 13,
        title: "Bài 13: Mua sắm",
        grammar: {
            title: "How much/How many",
            content: [
                "How much: dùng với danh từ không đếm được",
                "How many: dùng với danh từ đếm được",
                "",
                "Cấu trúc:",
                "- How much + danh từ không đếm được...?",
                "- How many + danh từ đếm được số nhiều...?",
                "",
                "Ví dụ:",
                "- How much money do you have? (Bạn có bao nhiêu tiền?)",
                "- How many books did you buy? (Bạn đã mua bao nhiêu quyển sách?)"
            ]
        },
        vocabulary: {
            title: "Mua sắm",
            words: [
                { 
                    word: "shop", 
                    meaning: "cửa hàng", 
                    example: "Let's go to the shop. (Hãy đi đến cửa hàng.)" 
                },
                { 
                    word: "price", 
                    meaning: "giá cả", 
                    example: "What's the price of this? (Cái này giá bao nhiêu?)" 
                },
                { 
                    word: "cheap", 
                    meaning: "rẻ", 
                    example: "These shoes are cheap. (Những đôi giày này rẻ.)" 
                },
                { 
                    word: "expensive", 
                    meaning: "đắt", 
                    example: "That bag is expensive. (Cái túi đó đắt.)" 
                },
                { 
                    word: "buy", 
                    meaning: "mua", 
                    example: "I want to buy a new shirt. (Tôi muốn mua áo mới.)" 
                },
                { 
                    word: "sell", 
                    meaning: "bán", 
                    example: "They sell fresh fruit. (Họ bán trái cây tươi.)" 
                },
                { 
                    word: "money", 
                    meaning: "tiền", 
                    example: "How much money do you need? (Bạn cần bao nhiêu tiền?)" 
                },
                { 
                    word: "discount", 
                    meaning: "giảm giá", 
                    example: "This shirt is on discount. (Cái áo này đang giảm giá.)" 
                },
                { 
                    word: "size", 
                    meaning: "kích cỡ", 
                    example: "What size do you wear? (Bạn mặc size nào?)" 
                },
                { 
                    word: "try on", 
                    meaning: "thử", 
                    example: "Can I try on these shoes? (Tôi có thể thử đôi giày này không?)" 
                }
            ]
        },
        exercises: [
            {
                question: "_____ money do you have? (Bạn có bao nhiêu tiền?)",
                answer: "How much",
                options: ["How many", "How much", "What", "How"]
            },
            {
                question: "_____ shirts did you buy? (Bạn đã mua bao nhiêu cái áo?)",
                answer: "How many",
                options: ["How much", "How many", "What", "How"]
            },
            {
                question: "_____ does this cost? (Cái này giá bao nhiêu?)",
                answer: "How much",
                options: ["How many", "How much", "What", "How"]
            }
        ]
    },
    {
        id: 14,
        title: "Bài 14: Động vật",
        grammar: {
            title: "So sánh nhất (Superlative)",
            content: [
                "Cấu trúc với tính từ ngắn:",
                "- the + tính từ + est",
                "Ví dụ: tall → the tallest",
                "",
                "Cấu trúc với tính từ dài:",
                "- the most + tính từ",
                "Ví dụ: beautiful → the most beautiful",
                "",
                "Một số tính từ đặc biệt:",
                "- good → the best",
                "- bad → the worst"
            ]
        },
        vocabulary: {
            title: "Động vật",
            words: [
                { 
                    word: "animal", 
                    meaning: "động vật", 
                    example: "I love animals. (Tôi yêu động vật.)" 
                },
                { 
                    word: "elephant", 
                    meaning: "voi", 
                    example: "The elephant is very big. (Con voi rất to.)" 
                },
                { 
                    word: "lion", 
                    meaning: "sư tử", 
                    example: "The lion is the king of the jungle. (Sư tử là chúa tể rừng xanh.)" 
                },
                { 
                    word: "tiger", 
                    meaning: "hổ", 
                    example: "Tigers are dangerous animals. (Hổ là động vật nguy hiểm.)" 
                },
                { 
                    word: "giraffe", 
                    meaning: "hươu cao cổ", 
                    example: "The giraffe has a long neck. (Hươu cao cổ có cổ dài.)" 
                },
                { 
                    word: "monkey", 
                    meaning: "khỉ", 
                    example: "Monkeys like bananas. (Khỉ thích chuối.)" 
                },
                { 
                    word: "penguin", 
                    meaning: "chim cánh cụt", 
                    example: "Penguins live in Antarctica. (Chim cánh cụt sống ở Nam Cực.)" 
                },
                { 
                    word: "dolphin", 
                    meaning: "cá heo", 
                    example: "Dolphins are very intelligent. (Cá heo rất thông minh.)" 
                },
                { 
                    word: "kangaroo", 
                    meaning: "chuột túi", 
                    example: "Kangaroos live in Australia. (Chuột túi sống ở Úc.)" 
                },
                { 
                    word: "panda", 
                    meaning: "gấu trúc", 
                    example: "Pandas eat bamboo. (Gấu trúc ăn tre.)" 
                }
            ]
        },
        exercises: [
            {
                question: "The elephant is _____ animal in the zoo. (Voi là động vật lớn nhất trong sở thú.)",
                answer: "the biggest",
                options: ["bigger", "the bigger", "the biggest", "biggest"]
            },
            {
                question: "The cheetah is _____ animal in the world. (Báo săn là động vật nhanh nhất thế giới.)",
                answer: "the fastest",
                options: ["fast", "faster", "the fastest", "fastest"]
            },
            {
                question: "The blue whale is _____ animal on Earth. (Cá voi xanh là động vật lớn nhất trên Trái Đất.)",
                answer: "the largest",
                options: ["large", "larger", "the largest", "largest"]
            }
        ]
    },
    {
        id: 15,
        title: "Bài 15: Lễ hội và Ngày lễ",
        grammar: {
            title: "Prepositions of Time (Giới từ chỉ thời gian)",
            content: [
                "in: dùng với:",
                "- Tháng (in January)",
                "- Mùa (in summer)",
                "- Năm (in 2024)",
                "",
                "on: dùng với:",
                "- Ngày cụ thể (on Monday)",
                "- Ngày lễ (on Christmas Day)",
                "",
                "at: dùng với:",
                "- Giờ cụ thể (at 8 o'clock)",
                "- Thời điểm trong ngày (at night)"
            ]
        },
        vocabulary: {
            title: "Lễ hội và Ngày lễ",
            words: [
                { 
                    word: "festival", 
                    meaning: "lễ hội", 
                    example: "We celebrate many festivals. (Chúng tôi tổ chức nhiều lễ hội.)" 
                },
                { 
                    word: "celebrate", 
                    meaning: "tổ chức", 
                    example: "How do you celebrate New Year? (Bạn đón năm mới như thế nào?)" 
                },
                { 
                    word: "holiday", 
                    meaning: "ngày lễ", 
                    example: "Christmas is a popular holiday. (Giáng sinh là một ngày lễ phổ biến.)" 
                },
                { 
                    word: "tradition", 
                    meaning: "truyền thống", 
                    example: "Every country has its traditions. (Mỗi quốc gia có truyền thống riêng.)" 
                },
                { 
                    word: "decoration", 
                    meaning: "trang trí", 
                    example: "The decorations are beautiful. (Những đồ trang trí rất đẹp.)" 
                },
                { 
                    word: "gift", 
                    meaning: "quà tặng", 
                    example: "We exchange gifts at Christmas. (Chúng tôi tặng quà vào dịp Giáng sinh.)" 
                },
                { 
                    word: "party", 
                    meaning: "tiệc", 
                    example: "Let's have a party! (Hãy tổ chức một bữa tiệc!)" 
                },
                { 
                    word: "costume", 
                    meaning: "trang phục", 
                    example: "Children wear costumes on Halloween. (Trẻ em mặc trang phục vào Halloween.)" 
                },
                { 
                    word: "firework", 
                    meaning: "pháo hoa", 
                    example: "There are fireworks on New Year's Eve. (Có pháo hoa vào đêm giao thừa.)" 
                },
                { 
                    word: "parade", 
                    meaning: "diễu hành", 
                    example: "We watched the parade. (Chúng tôi xem diễu hành.)" 
                }
            ]
        },
        exercises: [
            {
                question: "The festival is _____ July. (Lễ hội diễn ra vào tháng 7.)",
                answer: "in",
                options: ["in", "on", "at", "by"]
            },
            {
                question: "We celebrate Christmas _____ December 25th. (Chúng ta tổ chức Giáng sinh vào ngày 25 tháng 12.)",
                answer: "on",
                options: ["in", "on", "at", "by"]
            },
            {
                question: "The fireworks start _____ midnight. (Pháo hoa bắt đầu vào lúc nửa đêm.)",
                answer: "at",
                options: ["in", "on", "at", "by"]
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
// Dữ liệu các bài học Tin học 6
const lessons = [
    {
        id: 1,
        title: "Bài 1: Phần mềm máy tính",
        theory: {
            content: `
                <div class="theory-section">
                    <h3>Phần mềm máy tính là gì?</h3>
                    <p>Phần mềm máy tính là tập hợp các chương trình điều khiển máy tính hoạt động, giúp người dùng thực hiện các công việc khác nhau. Phần mềm máy tính được chia thành hai loại chính:</p>
                    
                    <h4>1. Phần mềm hệ thống (System Software)</h4>
                    <p>Đây là các phần mềm điều khiển hoạt động cơ bản của máy tính, bao gồm:</p>
                    <ul>
                        <li><strong>Hệ điều hành (Operating System)</strong>: Windows, macOS, Linux, Android, iOS...</li>
                        <li><strong>Trình điều khiển thiết bị (Device Drivers)</strong>: Điều khiển các thiết bị phần cứng như máy in, chuột, bàn phím...</li>
                        <li><strong>Tiện ích hệ thống (System Utilities)</strong>: Phần mềm quản lý tập tin, phần mềm sao lưu, phần mềm bảo mật...</li>
                    </ul>
                    
                    <h4>2. Phần mềm ứng dụng (Application Software)</h4>
                    <p>Đây là các phần mềm phục vụ nhu cầu cụ thể của người dùng, bao gồm:</p>
                    <ul>
                        <li><strong>Phần mềm văn phòng</strong>: Microsoft Office, Google Docs, LibreOffice...</li>
                        <li><strong>Phần mềm đồ họa</strong>: Adobe Photoshop, GIMP, CorelDraw...</li>
                        <li><strong>Phần mềm trình duyệt web</strong>: Google Chrome, Mozilla Firefox, Microsoft Edge...</li>
                        <li><strong>Phần mềm trò chơi</strong>: Các trò chơi máy tính</li>
                        <li><strong>Phần mềm giáo dục</strong>: Phần mềm học ngôn ngữ, toán học, khoa học...</li>
                    </ul>
                </div>
            `
        },
        exercise: [
            {
                question: "Phần mềm nào sau đây là phần mềm hệ thống?",
                answer: "A",
                options: [
                    { id: "A", text: "Windows 11" },
                    { id: "B", text: "Microsoft Word" },
                    { id: "C", text: "Adobe Photoshop" },
                    { id: "D", text: "Google Chrome" }
                ],
                explanation: "Windows 11 là một hệ điều hành, thuộc nhóm phần mềm hệ thống. Các phần mềm còn lại là phần mềm ứng dụng phục vụ các nhu cầu cụ thể của người dùng."
            },
            {
                question: "Đâu là chức năng chính của phần mềm ứng dụng?",
                answer: "C",
                options: [
                    { id: "A", text: "Quản lý bộ nhớ của máy tính" },
                    { id: "B", text: "Điều khiển các thiết bị phần cứng" },
                    { id: "C", text: "Đáp ứng nhu cầu cụ thể của người dùng" },
                    { id: "D", text: "Làm trung gian giữa phần cứng và người dùng" }
                ],
                explanation: "Phần mềm ứng dụng được thiết kế để đáp ứng các nhu cầu cụ thể của người dùng như soạn thảo văn bản, xử lý ảnh, duyệt web. Các chức năng như quản lý bộ nhớ, điều khiển thiết bị phần cứng thường là nhiệm vụ của phần mềm hệ thống."
            },
            {
                question: "Trong các phần mềm sau, phần mềm nào là phần mềm ứng dụng văn phòng?",
                answer: "B",
                options: [
                    { id: "A", text: "Windows Defender" },
                    { id: "B", text: "Microsoft PowerPoint" },
                    { id: "C", text: "Android" },
                    { id: "D", text: "Trình điều khiển máy in" }
                ],
                explanation: "Microsoft PowerPoint là phần mềm ứng dụng văn phòng dùng để tạo và trình chiếu bài thuyết trình. Windows Defender là phần mềm bảo mật hệ thống, Android là hệ điều hành (phần mềm hệ thống), và trình điều khiển máy in là phần mềm hệ thống."
            }
        ],
        fillin: [
            {
                instruction: "Điền từ thích hợp vào chỗ trống:",
                questions: [
                    {
                        question: "Phần mềm máy tính được chia thành hai loại chính là phần mềm ________ và phần mềm ________.",
                        answer: ["hệ thống", "ứng dụng"],
                        explanation: "Phần mềm máy tính được chia thành hai loại chính là phần mềm hệ thống (system software) và phần mềm ứng dụng (application software)."
                    },
                    {
                        question: "________ là hệ điều hành phổ biến nhất trên máy tính để bàn và laptop hiện nay.",
                        answer: ["Windows"],
                        explanation: "Windows là hệ điều hành phổ biến nhất trên máy tính để bàn và laptop hiện nay, do Microsoft phát triển."
                    }
                ]
            }
        ],
        practice: {
            content: `
                <div class="practice-section">
                    <h3>Thực hành nhận biết phần mềm</h3>
                    <p>Hãy thực hiện các bước sau để khám phá phần mềm trên máy tính của bạn:</p>
                    <ol>
                        <li>Mở "Control Panel" (Windows) hoặc "System Preferences" (macOS)</li>
                        <li>Tìm đến danh sách phần mềm đã cài đặt</li>
                        <li>Liệt kê 5 phần mềm ứng dụng và 2 phần mềm hệ thống bạn tìm thấy</li>
                        <li>Giải thích chức năng chính của mỗi phần mềm</li>
                    </ol>
                    <p>Lưu ý: Với phần mềm hệ thống, bạn có thể tìm thấy trong mục "Programs and Features" (Windows) hoặc "Security & Privacy" (macOS).</p>
                </div>
            `
        }
    },
    {
        id: 2,
        title: "Bài 2: Hệ điều hành",
        theory: {
            content: `
                <div class="theory-section">
                    <h3>Hệ điều hành là gì?</h3>
                    <p>Hệ điều hành (Operating System - OS) là phần mềm hệ thống quan trọng nhất của máy tính, đóng vai trò trung gian giữa người dùng và phần cứng máy tính. Hệ điều hành quản lý tài nguyên phần cứng và cung cấp các dịch vụ cho phần mềm ứng dụng.</p>
                    
                    <h4>Chức năng chính của hệ điều hành:</h4>
                    <ul>
                        <li><strong>Quản lý thiết bị phần cứng</strong>: Điều khiển bộ nhớ, CPU, thiết bị nhập/xuất...</li>
                        <li><strong>Quản lý tập tin</strong>: Tổ chức, lưu trữ và truy xuất dữ liệu</li>
                        <li><strong>Quản lý người dùng</strong>: Phân quyền và bảo mật</li>
                        <li><strong>Cung cấp giao diện</strong>: Giao diện đồ họa (GUI) hoặc dòng lệnh (CLI) cho người dùng</li>
                        <li><strong>Quản lý các ứng dụng</strong>: Cài đặt, chạy và gỡ bỏ phần mềm</li>
                    </ul>
                    
                    <h4>Các hệ điều hành phổ biến:</h4>
                    <div class="os-types">
                        <div class="os-type">
                            <h5>Hệ điều hành máy tính cá nhân:</h5>
                            <ul>
                                <li>Microsoft Windows (Windows 10, Windows 11)</li>
                                <li>macOS (của Apple)</li>
                                <li>Linux (Ubuntu, Fedora, Debian...)</li>
                            </ul>
                        </div>
                        <div class="os-type">
                            <h5>Hệ điều hành thiết bị di động:</h5>
                            <ul>
                                <li>Android (Google)</li>
                                <li>iOS (Apple)</li>
                                <li>HarmonyOS (Huawei)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        exercise: [
            {
                question: "Đâu là chức năng chính của hệ điều hành?",
                answer: "D",
                options: [
                    { id: "A", text: "Chỉnh sửa văn bản" },
                    { id: "B", text: "Xử lý đồ họa" },
                    { id: "C", text: "Lập trình ứng dụng" },
                    { id: "D", text: "Quản lý tài nguyên phần cứng" }
                ],
                explanation: "Hệ điều hành có chức năng chính là quản lý tài nguyên phần cứng của máy tính, bao gồm CPU, bộ nhớ, thiết bị nhập/xuất. Các chức năng như chỉnh sửa văn bản, xử lý đồ họa và lập trình ứng dụng thuộc về phần mềm ứng dụng."
            },
            {
                question: "Phần nào sau đây KHÔNG phải là một hệ điều hành?",
                answer: "C",
                options: [
                    { id: "A", text: "Windows 11" },
                    { id: "B", text: "Ubuntu" },
                    { id: "C", text: "Microsoft Excel" },
                    { id: "D", text: "Android" }
                ],
                explanation: "Microsoft Excel là một phần mềm ứng dụng văn phòng, không phải hệ điều hành. Windows 11, Ubuntu và Android đều là các hệ điều hành cho các thiết bị khác nhau."
            },
            {
                question: "Giao diện người dùng đồ họa (GUI) trong hệ điều hành có tác dụng gì?",
                answer: "A",
                options: [
                    { id: "A", text: "Giúp người dùng tương tác với máy tính thông qua các thành phần đồ họa trực quan" },
                    { id: "B", text: "Tăng tốc độ xử lý của CPU" },
                    { id: "C", text: "Mã hóa dữ liệu người dùng" },
                    { id: "D", text: "Kết nối máy tính với Internet" }
                ],
                explanation: "Giao diện người dùng đồ họa (GUI) giúp người dùng tương tác với máy tính thông qua các thành phần trực quan như cửa sổ, biểu tượng, menu thay vì sử dụng lệnh văn bản. GUI không liên quan trực tiếp đến việc tăng tốc CPU, mã hóa dữ liệu hay kết nối Internet."
            },
            {
                question: "Hệ điều hành nào được phát triển bởi Apple?",
                answer: "B",
                options: [
                    { id: "A", text: "Windows" },
                    { id: "B", text: "macOS và iOS" },
                    { id: "C", text: "Android" },
                    { id: "D", text: "Linux" }
                ],
                explanation: "macOS (cho máy tính) và iOS (cho iPhone, iPad) là các hệ điều hành được phát triển bởi Apple. Windows được phát triển bởi Microsoft, Android được phát triển bởi Google, và Linux là hệ điều hành mã nguồn mở được phát triển bởi cộng đồng."
            }
        ],
        fillin: [
            {
                instruction: "Điền từ thích hợp vào chỗ trống:",
                questions: [
                    {
                        question: "Hệ điều hành đóng vai trò ________ giữa người dùng và phần cứng máy tính.",
                        answer: ["trung gian"],
                        explanation: "Hệ điều hành đóng vai trò trung gian giữa người dùng và phần cứng máy tính, giúp người dùng có thể tương tác với phần cứng mà không cần hiểu biết chi tiết về cách thức hoạt động của phần cứng."
                    },
                    {
                        question: "________ là hệ điều hành phổ biến nhất trên các thiết bị di động hiện nay.",
                        answer: ["Android"],
                        explanation: "Android là hệ điều hành phổ biến nhất trên các thiết bị di động hiện nay, chiếm khoảng 70% thị phần toàn cầu."
                    },
                    {
                        question: "Giao diện dòng lệnh còn được gọi là ________ (viết tắt).",
                        answer: ["CLI"],
                        explanation: "Giao diện dòng lệnh còn được gọi là Command Line Interface (CLI), là cách thức tương tác với máy tính thông qua việc nhập lệnh văn bản."
                    }
                ]
            }
        ],
        practice: {
            content: `
                <div class="practice-section">
                    <h3>Thực hành tìm hiểu về hệ điều hành</h3>
                    <p>Hãy thực hiện các bước sau để tìm hiểu về hệ điều hành trên máy tính của bạn:</p>
                    <ol>
                        <li>Kiểm tra thông tin hệ điều hành:
                            <ul>
                                <li>Windows: Nhấn tổ hợp phím Windows + R, gõ "winver" và nhấn Enter</li>
                                <li>macOS: Nhấn vào biểu tượng Apple ở góc trên bên trái và chọn "About This Mac"</li>
                                <li>Linux: Mở Terminal và gõ lệnh "lsb_release -a" hoặc "cat /etc/os-release"</li>
                            </ul>
                        </li>
                        <li>Ghi lại các thông tin sau:
                            <ul>
                                <li>Tên hệ điều hành</li>
                                <li>Phiên bản</li>
                                <li>Ngày phát hành (nếu có)</li>
                                <li>Loại hệ thống (32-bit hay 64-bit)</li>
                            </ul>
                        </li>
                        <li>Tìm hiểu về 3 tính năng đặc biệt của hệ điều hành bạn đang sử dụng</li>
                    </ol>
                </div>
            `
        }
    },
    {
        id: 9,
        title: "Bài 9: An toàn thông tin trên Internet",
        theory: {
            content: `
                <div class="theory-section">
                    <h3>An toàn thông tin trên Internet</h3>
                    <p>Internet mang lại nhiều lợi ích nhưng cũng tiềm ẩn các nguy cơ về an toàn thông tin. Việc hiểu biết và áp dụng các biện pháp bảo vệ là rất quan trọng.</p>
                    
                    <h4>1. Các mối nguy hiểm trên Internet</h4>
                    <ul>
                        <li><strong>Virus, phần mềm độc hại</strong>: Các chương trình gây hại cho máy tính, đánh cắp thông tin</li>
                        <li><strong>Lừa đảo trực tuyến</strong>: Giả mạo website, email để lấy cắp thông tin cá nhân</li>
                        <li><strong>Nội dung không phù hợp</strong>: Thông tin sai lệch, nội dung bạo lực, không phù hợp với lứa tuổi</li>
                        <li><strong>Bắt nạt trực tuyến</strong>: Quấy rối, xúc phạm trên mạng xã hội</li>
                        <li><strong>Đánh cắp thông tin cá nhân</strong>: Lấy trộm mật khẩu, thông tin cá nhân</li>
                    </ul>
                    
                    <h4>2. Biện pháp bảo vệ thông tin cá nhân</h4>
                    <ul>
                        <li><strong>Sử dụng mật khẩu mạnh</strong>: Kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt</li>
                        <li><strong>Cập nhật phần mềm thường xuyên</strong>: Cài đặt các bản vá bảo mật mới nhất</li>
                        <li><strong>Cẩn trọng khi chia sẻ thông tin</strong>: Không chia sẻ thông tin cá nhân với người lạ</li>
                        <li><strong>Kiểm tra độ tin cậy của website</strong>: Chỉ truy cập các trang web an toàn, có https</li>
                        <li><strong>Sử dụng phần mềm diệt virus</strong>: Cài đặt và cập nhật thường xuyên</li>
                    </ul>
                    
                    <h4>3. Quy tắc ứng xử trên Internet</h4>
                    <ul>
                        <li><strong>Tôn trọng người khác</strong>: Không đăng nội dung xúc phạm, quấy rối</li>
                        <li><strong>Xác minh thông tin</strong>: Kiểm tra tính chính xác trước khi chia sẻ</li>
                        <li><strong>Bảo vệ quyền riêng tư</strong>: Của bản thân và người khác</li>
                        <li><strong>Tuân thủ bản quyền</strong>: Không chia sẻ nội dung vi phạm bản quyền</li>
                    </ul>
                </div>
            `
        },
        exercise: [
            {
                question: "Mật khẩu nào sau đây được coi là mạnh?",
                answer: "C",
                options: [
                    { id: "A", text: "123456" },
                    { id: "B", text: "password" },
                    { id: "C", text: "T@n1Hoc#6" },
                    { id: "D", text: "tenhocsinh" }
                ],
                explanation: "Mật khẩu mạnh cần kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt. 'T@n1Hoc#6' đáp ứng đủ các tiêu chí này, trong khi các mật khẩu khác quá đơn giản hoặc dễ đoán."
            },
            {
                question: "Khi nhận được email yêu cầu cung cấp thông tin cá nhân, bạn nên làm gì?",
                answer: "C",
                options: [
                    { id: "A", text: "Cung cấp thông tin ngay lập tức" },
                    { id: "B", text: "Chuyển tiếp email cho bạn bè" },
                    { id: "C", text: "Kiểm tra độ tin cậy của người gửi và không cung cấp thông tin nếu nghi ngờ" },
                    { id: "D", text: "Trả lời với thông tin giả" }
                ],
                explanation: "Khi nhận email yêu cầu thông tin cá nhân, cần kiểm tra độ tin cậy của người gửi trước khi quyết định. Không nên vội vàng cung cấp thông tin, chuyển tiếp hay trả lời với thông tin giả vì đều có thể gây hại."
            },
            {
                question: "Đâu KHÔNG phải là biện pháp bảo vệ thông tin cá nhân trên mạng xã hội?",
                answer: "D",
                options: [
                    { id: "A", text: "Thiết lập quyền riêng tư cho tài khoản" },
                    { id: "B", text: "Không đăng địa chỉ và số điện thoại cá nhân" },
                    { id: "C", text: "Cẩn thận khi kết bạn với người lạ" },
                    { id: "D", text: "Chấp nhận tất cả lời mời kết bạn để tăng số lượng bạn bè" }
                ],
                explanation: "Chấp nhận tất cả lời mời kết bạn để tăng số lượng bạn bè KHÔNG phải là biện pháp bảo vệ, ngược lại còn làm tăng nguy cơ bị đánh cắp thông tin. Các phương án khác đều là biện pháp hữu hiệu để bảo vệ thông tin cá nhân."
            },
            {
                question: "Tại sao nên thường xuyên cập nhật phần mềm và hệ điều hành?",
                answer: "B",
                options: [
                    { id: "A", text: "Để có giao diện mới" },
                    { id: "B", text: "Để vá các lỗ hổng bảo mật" },
                    { id: "C", text: "Để tăng tốc độ máy tính" },
                    { id: "D", text: "Để cài thêm trò chơi mới" }
                ],
                explanation: "Cập nhật phần mềm và hệ điều hành thường xuyên giúp vá các lỗ hổng bảo mật, ngăn chặn các cuộc tấn công mạng. Mặc dù đôi khi có thể cải thiện giao diện hay hiệu suất, nhưng mục đích chính là bảo mật."
            }
        ],
        fillin: [
            {
                instruction: "Điền từ thích hợp vào chỗ trống:",
                questions: [
                    {
                        question: "Một mật khẩu an toàn nên kết hợp chữ _________, chữ thường, ________ và ký tự đặc biệt.",
                        answer: ["hoa", "số"],
                        explanation: "Một mật khẩu an toàn nên kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt để tăng độ phức tạp, khó đoán và khó bị dò tìm."
                    },
                    {
                        question: "Website an toàn thường có địa chỉ bắt đầu bằng _________ thay vì http.",
                        answer: ["https"],
                        explanation: "Website an toàn thường có địa chỉ bắt đầu bằng https (Hypertext Transfer Protocol Secure), đây là giao thức truyền tải siêu văn bản an toàn, mã hóa dữ liệu giữa trình duyệt và máy chủ."
                    },
                    {
                        question: "Không nên chia sẻ _________ với người lạ trên Internet để tránh bị lừa đảo.",
                        answer: ["thông tin cá nhân"],
                        explanation: "Không nên chia sẻ thông tin cá nhân với người lạ trên Internet để tránh bị lừa đảo, đánh cắp danh tính hoặc sử dụng thông tin vào mục đích xấu."
                    }
                ]
            }
        ],
        practice: {
            content: `
                <div class="practice-section">
                    <h3>Thực hành an toàn thông tin</h3>
                    <p>Hãy thực hiện các bước sau để tăng cường an toàn thông tin của bạn:</p>
                    <ol>
                        <li>Kiểm tra độ mạnh của mật khẩu:
                            <ul>
                                <li>Truy cập trang web kiểm tra độ mạnh mật khẩu (có thể tìm trên Google)</li>
                                <li>Nhập các mật khẩu bạn thường dùng (lưu ý không nhập mật khẩu thật của tài khoản quan trọng)</li>
                                <li>Dựa vào kết quả, tạo các mật khẩu mạnh hơn</li>
                            </ul>
                        </li>
                        <li>Kiểm tra cài đặt quyền riêng tư:
                            <ul>
                                <li>Kiểm tra cài đặt quyền riêng tư trên một mạng xã hội bạn đang sử dụng</li>
                                <li>Điều chỉnh để đảm bảo thông tin cá nhân chỉ hiển thị với người bạn tin tưởng</li>
                            </ul>
                        </li>
                        <li>Nhận diện email lừa đảo:
                            <ul>
                                <li>Tìm hiểu các đặc điểm của email lừa đảo (lỗi chính tả, yêu cầu thông tin cá nhân, đường link đáng ngờ)</li>
                                <li>Tạo một bản mô tả cách phân biệt email thật và giả</li>
                            </ul>
                        </li>
                    </ol>
                    <p>Lưu ý: Luôn thận trọng khi chia sẻ thông tin trên Internet và định kỳ thay đổi mật khẩu quan trọng.</p>
                </div>
            `
        }
    },
    {
        id: 10,
        title: "Bài 10: Sơ đồ tư duy",
        theory: {
            content: `
                <div class="theory-section">
                    <h3>Sơ đồ tư duy là gì?</h3>
                    <p>Sơ đồ tư duy (Mind Map) là một công cụ ghi chép và tổ chức thông tin theo cách trực quan, giúp liên kết và phân tích các ý tưởng một cách hiệu quả.</p>
                    
                    <h4>1. Đặc điểm của sơ đồ tư duy</h4>
                    <ul>
                        <li><strong>Cấu trúc phân nhánh</strong>: Từ chủ đề trung tâm phân tách thành các nhánh, sau đó tiếp tục phân nhánh nhỏ hơn</li>
                        <li><strong>Sử dụng từ khóa</strong>: Thay vì câu dài, sơ đồ tư duy sử dụng từ khóa, cụm từ ngắn gọn</li>
                        <li><strong>Hình ảnh và màu sắc</strong>: Sử dụng để tăng khả năng ghi nhớ và phân biệt</li>
                        <li><strong>Liên kết giữa các ý tưởng</strong>: Thể hiện mối quan hệ giữa các khái niệm</li>
                    </ul>
                    
                    <h4>2. Cấu trúc của sơ đồ tư duy</h4>
                    <ul>
                        <li><strong>Chủ đề trung tâm</strong>: Đặt ở giữa sơ đồ, thường kèm hình ảnh minh họa</li>
                        <li><strong>Nhánh chính</strong>: Các ý tưởng chính liên quan đến chủ đề trung tâm</li>
                        <li><strong>Nhánh phụ</strong>: Thông tin chi tiết cho mỗi nhánh chính</li>
                        <li><strong>Liên kết</strong>: Đường nối thể hiện mối quan hệ giữa các ý tưởng</li>
                    </ul>
                    
                    <h4>3. Lợi ích của sơ đồ tư duy</h4>
                    <ul>
                        <li><strong>Tăng khả năng ghi nhớ</strong>: Tổ chức thông tin trực quan giúp dễ nhớ hơn</li>
                        <li><strong>Phát triển tư duy sáng tạo</strong>: Khuyến khích tạo liên kết giữa các ý tưởng</li>
                        <li><strong>Tổng hợp thông tin</strong>: Giúp thấy được bức tranh tổng thể của vấn đề</li>
                        <li><strong>Tiết kiệm thời gian</strong>: Ghi chép nhanh và hiệu quả hơn</li>
                    </ul>
                    
                    <h4>4. Ứng dụng của sơ đồ tư duy</h4>
                    <ul>
                        <li><strong>Học tập</strong>: Tóm tắt bài học, ôn thi</li>
                        <li><strong>Lập kế hoạch</strong>: Dự án, kế hoạch cá nhân</li>
                        <li><strong>Giải quyết vấn đề</strong>: Phân tích nguyên nhân, đề xuất giải pháp</li>
                        <li><strong>Thuyết trình</strong>: Chuẩn bị dàn ý cho bài thuyết trình</li>
                    </ul>
                </div>
            `
        },
        exercise: [
            {
                question: "Thông tin trong sơ đồ tư duy thường được tổ chức thành:",
                answer: "B",
                options: [
                    { id: "A", text: "Tiêu đề, đoạn văn" },
                    { id: "B", text: "Chủ đề chính, chủ đề nhánh" },
                    { id: "C", text: "Mở bài, thân bài, kết luận" },
                    { id: "D", text: "Chương, bài, mục" }
                ],
                explanation: "Sơ đồ tư duy thường tổ chức thông tin theo cấu trúc phân nhánh, gồm chủ đề chính ở trung tâm và các chủ đề nhánh phát triển từ đó. Đây là cách tổ chức khác với cấu trúc văn bản truyền thống như tiêu đề-đoạn văn hay mở bài-thân bài-kết luận."
            },
            {
                question: "Khi sử dụng hộp thoại Find and Replace, nếu tìm được một từ mà chúng ta không muốn thay thế, chúng ta có thể bỏ qua từ đó bằng cách chọn lệnh nào sau đây?",
                answer: "A",
                options: [
                    { id: "A", text: "Find next" },
                    { id: "B", text: "Replace All" },
                    { id: "C", text: "Replace" },
                    { id: "D", text: "Cancel" }
                ],
                explanation: "Khi tìm được một từ không muốn thay thế, ta có thể bỏ qua và tìm từ tiếp theo bằng cách chọn 'Find next'. 'Replace' sẽ thay thế từ hiện tại, 'Replace All' thay thế tất cả, và 'Cancel' sẽ hủy toàn bộ quá trình tìm kiếm."
            },
            {
                question: "Nhược điểm của việc tạo sơ đồ tư duy theo cách thủ công là gì?",
                answer: "D",
                options: [
                    { id: "A", text: "Khó sắp xếp, bố trí nội dung" },
                    { id: "B", text: "Hạn chế khả năng sáng tạo" },
                    { id: "C", text: "Không linh hoạt để có thể làm ở bất cứ đâu, đòi hỏi công cụ khó tìm kiếm" },
                    { id: "D", text: "Không dễ dàng trong việc mở rộng, sửa chữa và chia sẻ cho nhiều người" }
                ],
                explanation: "Nhược điểm chính của việc tạo sơ đồ tư duy thủ công là khó mở rộng, sửa chữa và chia sẻ. Khi cần thêm nội dung hoặc sửa đổi, việc phải vẽ lại toàn bộ sơ đồ rất tốn thời gian, và khó chia sẻ cho nhiều người cùng xem hoặc chỉnh sửa."
            },
            {
                question: "Phím tắt dùng để mở hộp thoại Find and Replace là:",
                answer: "C",
                options: [
                    { id: "A", text: "Ctrl + H" },
                    { id: "B", text: "Ctrl + E" },
                    { id: "C", text: "Ctrl + F" },
                    { id: "D", text: "Ctrl + A" }
                ],
                explanation: "Phím tắt Ctrl + F được sử dụng để mở hộp thoại Find (Tìm kiếm) trong hầu hết các phần mềm soạn thảo văn bản và trình duyệt web. Trong khi đó, Ctrl + H thường dùng cho Find and Replace (Tìm và Thay thế), Ctrl + A để chọn tất cả, và Ctrl + E không phải là phím tắt tìm kiếm phổ biến."
            },
            {
                question: "Hãy sắp xếp các bước thực hiện việc tìm kiếm một từ hoặc cụm từ trong văn bản:",
                answer: "C",
                options: [
                    { id: "A", text: "2-3-1" },
                    { id: "B", text: "3-1-2" },
                    { id: "C", text: "2-1-3" },
                    { id: "D", text: "3-2-1" }
                ],
                explanation: "Thứ tự đúng để tìm kiếm từ hoặc cụm từ trong văn bản là: 1. Trong nhóm lệnh Editing chọn Find (bước 2), 2. Gõ từ hoặc cụm từ cần tìm rồi nhấn phím Enter (bước 1), 3. Nhấy chuột chọn the Home (bước 3)."
            }
        ],
        fillin: [
            {
                instruction: "Điền từ thích hợp vào chỗ trống:",
                questions: [
                    {
                        question: "Sơ đồ tư duy giúp người dùng _________ và tổ chức thông tin một cách trực quan.",
                        answer: ["ghi nhớ"],
                        explanation: "Sơ đồ tư duy giúp người dùng ghi nhớ và tổ chức thông tin một cách trực quan thông qua việc sử dụng cấu trúc phân nhánh, từ khóa, hình ảnh và màu sắc."
                    },
                    {
                        question: "Để tìm kiếm một từ trong văn bản, em chọn lệnh _________ trong nhóm lệnh Editing.",
                        answer: ["Find"],
                        explanation: "Để tìm kiếm một từ trong văn bản, em chọn lệnh Find trong nhóm lệnh Editing hoặc sử dụng phím tắt Ctrl + F."
                    },
                    {
                        question: "Chủ đề chính của sơ đồ tư duy thường được đặt ở _________ của trang giấy.",
                        answer: ["trung tâm"],
                        explanation: "Chủ đề chính của sơ đồ tư duy thường được đặt ở trung tâm của trang giấy, từ đó phát triển các nhánh chính và nhánh phụ."
                    },
                    {
                        question: "Công cụ tìm kiếm và _________ giúp chúng ta tìm kiếm hoặc thay thế các từ hoặc cụm từ theo yêu cầu một cách nhanh chóng và chính xác.",
                        answer: ["thay thế"],
                        explanation: "Công cụ tìm kiếm và thay thế (Find and Replace) giúp chúng ta tìm kiếm hoặc thay thế các từ hoặc cụm từ trong văn bản một cách nhanh chóng và chính xác."
                    }
                ]
            }
        ],
        practice: {
            content: `
                <div class="practice-section">
                    <h3>Thực hành tạo sơ đồ tư duy</h3>
                    <p>Hãy thực hiện các bước sau để tạo một sơ đồ tư duy:</p>
                    <ol>
                        <li>Chọn một chủ đề bạn đang học (ví dụ: An toàn thông tin, Phần mềm máy tính...)</li>
                        <li>Chuẩn bị một tờ giấy trắng khổ A4 hoặc phần mềm vẽ sơ đồ tư duy:
                            <ul>
                                <li>Trên giấy: Bút màu, bút chì</li>
                                <li>Trên máy tính: Phần mềm như MindMaster, XMind, FreeMind...</li>
                            </ul>
                        </li>
                        <li>Thực hiện các bước tạo sơ đồ tư duy:
                            <ul>
                                <li>Viết chủ đề chính ở giữa trang và vẽ hình tròn bao quanh</li>
                                <li>Từ chủ đề chính, vẽ các nhánh chính đại diện cho các ý chính</li>
                                <li>Từ mỗi nhánh chính, vẽ các nhánh phụ cho thông tin chi tiết</li>
                                <li>Sử dụng màu sắc để phân biệt các nhánh</li>
                                <li>Thêm hình ảnh hoặc biểu tượng nếu cần</li>
                            </ul>
                        </li>
                        <li>Thực hành tìm kiếm và thay thế:
                            <ul>
                                <li>Mở một văn bản có sẵn</li>
                                <li>Sử dụng Ctrl + F để mở hộp thoại tìm kiếm</li>
                                <li>Thử tìm một từ xuất hiện nhiều lần trong văn bản</li>
                                <li>Sử dụng Find Next để di chuyển giữa các kết quả</li>
                                <li>Thử thay thế một từ bằng từ khác sử dụng Replace</li>
                            </ul>
                        </li>
                    </ol>
                    <p>Lưu ý: Sơ đồ tư duy hiệu quả nên đơn giản, rõ ràng và sử dụng từ khóa thay vì câu dài.</p>
                </div>
            `
        }
    },
    {
        id: 11,
        title: "Bài 11: Định dạng văn bản",
        theory: {
            content: `
                <div class="theory-section">
                    <h3>Định dạng văn bản</h3>
                    <p>Định dạng văn bản là việc thay đổi cách hiển thị của văn bản nhằm làm cho nội dung trở nên dễ đọc, hấp dẫn và nổi bật hơn. Định dạng văn bản đúng cách giúp người đọc hiểu rõ nội dung và cấu trúc của văn bản.</p>
                    
                    <h4>1. Định dạng ký tự (Character Formatting)</h4>
                    <ul>
                        <li><strong>Phông chữ (Font)</strong>: Kiểu chữ như Times New Roman, Arial, Calibri...</li>
                        <li><strong>Kích cỡ chữ (Font Size)</strong>: Kích thước của chữ, đo bằng point (pt)</li>
                        <li><strong>Kiểu chữ (Font Style)</strong>: Đậm (Bold), Nghiêng (Italic), Gạch chân (Underline)</li>
                        <li><strong>Màu chữ (Font Color)</strong>: Màu sắc của văn bản</li>
                        <li><strong>Hiệu ứng (Effects)</strong>: Gạch ngang, chỉ số trên, chỉ số dưới...</li>
                    </ul>
                    
                    <h4>2. Định dạng đoạn văn (Paragraph Formatting)</h4>
                    <ul>
                        <li><strong>Căn lề (Alignment)</strong>: Căn trái, căn phải, căn giữa, căn đều</li>
                        <li><strong>Khoảng cách dòng (Line Spacing)</strong>: Khoảng cách giữa các dòng trong đoạn văn</li>
                        <li><strong>Khoảng cách đoạn (Paragraph Spacing)</strong>: Khoảng cách trước và sau đoạn văn</li>
                        <li><strong>Thụt đầu dòng (Indentation)</strong>: Khoảng lề từ đầu đoạn văn</li>
                        <li><strong>Danh sách (Lists)</strong>: Danh sách có dấu đầu dòng hoặc đánh số</li>
                    </ul>
                    
                    <h4>3. Các công cụ định dạng văn bản phổ biến</h4>
                    <ul>
                        <li><strong>Thanh công cụ Home</strong>: Chứa các công cụ định dạng cơ bản</li>
                        <li><strong>Hộp thoại Font</strong>: Cung cấp các tùy chọn định dạng ký tự nâng cao</li>
                        <li><strong>Hộp thoại Paragraph</strong>: Cung cấp các tùy chọn định dạng đoạn văn nâng cao</li>
                        <li><strong>Styles</strong>: Tập hợp các định dạng được lưu lại để sử dụng nhanh</li>
                    </ul>
                    
                    <h4>4. Nguyên tắc định dạng văn bản</h4>
                    <ul>
                        <li><strong>Nhất quán</strong>: Sử dụng kiểu định dạng nhất quán trong cùng một văn bản</li>
                        <li><strong>Tiết chế</strong>: Không sử dụng quá nhiều kiểu chữ, màu sắc khác nhau</li>
                        <li><strong>Mục đích</strong>: Định dạng phải phục vụ mục đích làm nổi bật nội dung quan trọng</li>
                        <li><strong>Dễ đọc</strong>: Đảm bảo văn bản dễ đọc sau khi định dạng</li>
                    </ul>
                </div>
            `
        },
        exercise: [
            {
                question: "Lệnh Find được sử dụng khi nào?",
                answer: "B",
                options: [
                    { id: "A", text: "Khi muốn định dạng chữ in nghiêng cho một đoạn văn bản" },
                    { id: "B", text: "Khi muốn tìm kiếm một từ hoặc cụm từ trong văn bản" },
                    { id: "C", text: "Khi muốn thay thế một từ hoặc cụm từ trong văn bản" },
                    { id: "D", text: "Khi cần thay đổi phông chữ của văn bản" }
                ],
                explanation: "Lệnh Find trong phần mềm soạn thảo văn bản được sử dụng khi muốn tìm kiếm một từ hoặc cụm từ cụ thể trong văn bản, giúp người dùng nhanh chóng tìm thấy thông tin cần thiết mà không phải đọc toàn bộ tài liệu."
            },
            {
                question: "Để căn chỉnh lề, hướng của văn bản trong ô em cần sử dụng nhóm lệnh nào?",
                answer: "C",
                options: [
                    { id: "A", text: "Cell size" },
                    { id: "B", text: "Rows & columns" },
                    { id: "C", text: "Alignment" },
                    { id: "D", text: "Merge" }
                ],
                explanation: "Để căn chỉnh lề và hướng của văn bản trong ô (trong bảng), cần sử dụng nhóm lệnh Alignment. Nhóm lệnh này cho phép căn trái, căn phải, căn giữa, căn đều và các tùy chọn căn chỉnh khác, giúp văn bản được trình bày một cách ngăn nắp, dễ đọc."
            },
            {
                question: "Để tạo danh sách có dấu đầu dòng, bạn sử dụng nút lệnh nào?",
                answer: "B",
                options: [
                    { id: "A", text: "Numbering" },
                    { id: "B", text: "Bullets" },
                    { id: "C", text: "Indent" },
                    { id: "D", text: "Sort" }
                ],
                explanation: "Để tạo danh sách có dấu đầu dòng (bullet points), bạn sử dụng nút lệnh Bullets. Nút lệnh này sẽ thêm các ký hiệu như dấu chấm tròn, dấu gạch ngang, hoặc các ký hiệu khác vào đầu mỗi mục trong danh sách."
            },
            {
                question: "Để căn đều hai bên lề cho một đoạn văn bản, bạn sử dụng nút lệnh căn lề nào?",
                answer: "D",
                options: [
                    { id: "A", text: "Căn trái (Align Left)" },
                    { id: "B", text: "Căn phải (Align Right)" },
                    { id: "C", text: "Căn giữa (Center)" },
                    { id: "D", text: "Căn đều (Justify)" }
                ],
                explanation: "Để căn đều hai bên lề cho một đoạn văn bản, bạn sử dụng nút lệnh căn đều (Justify). Khi sử dụng lệnh này, văn bản sẽ được căn chỉnh sao cho cả lề trái và lề phải đều thẳng hàng, tạo ra một hình dạng khối chữ nhật đều đặn cho đoạn văn."
            },
            {
                question: "Mục đích chính của việc sử dụng bảng trong văn bản là gì?",
                answer: "B",
                options: [
                    { id: "A", text: "Để làm cho văn bản dài hơn" },
                    { id: "B", text: "Để trình bày thông tin một cách có cấu trúc và dễ so sánh" },
                    { id: "C", text: "Để thay thế hình ảnh" },
                    { id: "D", text: "Để làm cho văn bản khó đọc hơn" }
                ],
                explanation: "Mục đích chính của việc sử dụng bảng trong văn bản là để trình bày thông tin một cách có cấu trúc và dễ so sánh. Bảng giúp sắp xếp dữ liệu thành hàng và cột, làm cho thông tin trở nên rõ ràng, dễ hiểu và dễ dàng so sánh các giá trị với nhau."
            }
        ],
        fillin: [
            {
                instruction: "Điền từ thích hợp vào chỗ trống:",
                questions: [
                    {
                        question: "Để làm cho tiêu đề văn bản nổi bật, bạn có thể thay đổi _________ (phông chữ/cỡ chữ/màu chữ/kiểu chữ) và _________ (kiểu chữ/căn lề/khoảng cách dòng/số trang).",
                        answer: ["phông chữ", "kiểu chữ"],
                        explanation: "Để làm cho tiêu đề văn bản nổi bật, bạn có thể thay đổi phông chữ (font) và kiểu chữ (font style) như đậm, nghiêng, gạch chân. Điều này giúp tiêu đề trở nên thu hút và dễ nhận biết hơn so với nội dung thông thường."
                    },
                    {
                        question: "Để tạo danh sách các mục một cách rõ ràng, bạn có thể sử dụng _________ (dấu đầu dòng/số thứ tự/chữ nghiêng/gạch chân) hoặc _________ (số thứ tự/dấu đầu dòng/chữ gạch chân/màu nền).",
                        answer: ["dấu đầu dòng", "số thứ tự"],
                        explanation: "Để tạo danh sách các mục một cách rõ ràng, bạn có thể sử dụng dấu đầu dòng (bullets) hoặc số thứ tự (numbering). Cả hai cách này đều giúp tổ chức thông tin thành danh sách có cấu trúc, dễ đọc và dễ theo dõi."
                    },
                    {
                        question: "Để tạo sự cân đối cho văn bản, bạn có thể _________ (căn lề/chèn hình ảnh/thay đổi màu sắc/thêm hiệu ứng) trái, phải, giữa hoặc _________ (căn đều/kẻ bảng/tạo khung/thêm chữ thích).",
                        answer: ["căn lề", "căn đều"],
                        explanation: "Để tạo sự cân đối cho văn bản, bạn có thể căn lề (align) trái, phải, giữa hoặc căn đều (justify). Các tùy chọn căn lề này giúp văn bản trở nên ngăn nắp, cân đối và chuyên nghiệp hơn."
                    },
                    {
                        question: "Để văn bản dễ đọc hơn, bạn nên điều chỉnh _________ (khoảng cách dòng/cỡ chữ/phông chữ/màu chữ) và _________ (khoảng cách đoạn/lề trang/số trang/tên tác giả).",
                        answer: ["khoảng cách dòng", "khoảng cách đoạn"],
                        explanation: "Để văn bản dễ đọc hơn, bạn nên điều chỉnh khoảng cách dòng (line spacing) và khoảng cách đoạn (paragraph spacing). Khoảng cách phù hợp giúp văn bản không bị quá chật hoặc quá thưa, tạo ra một trang văn bản dễ đọc và thoải mái cho mắt người đọc."
                    }
                ]
            }
        ],
        practice: {
            content: `
                <div class="practice-section">
                    <h3>Thực hành định dạng văn bản</h3>
                    <p>Hãy thực hiện các bước sau để luyện tập kỹ năng định dạng văn bản:</p>
                    <ol>
                        <li>Tạo một văn bản mới với nội dung tự chọn (khoảng 3-4 đoạn văn)</li>
                        <li>Thực hành định dạng ký tự:
                            <ul>
                                <li>Thay đổi phông chữ cho tiêu đề và nội dung</li>
                                <li>Đặt kích cỡ chữ phù hợp (tiêu đề lớn hơn nội dung)</li>
                                <li>Làm đậm tiêu đề và các từ quan trọng</li>
                                <li>Tạo chữ nghiêng cho các thuật ngữ đặc biệt</li>
                            </ul>
                        </li>
                        <li>Thực hành định dạng đoạn văn:
                            <ul>
                                <li>Căn giữa cho tiêu đề chính</li>
                                <li>Căn trái cho nội dung chính</li>
                                <li>Tạo danh sách có dấu đầu dòng cho một số ý</li>
                                <li>Tạo danh sách có số thứ tự cho các bước thực hiện</li>
                                <li>Điều chỉnh khoảng cách dòng và khoảng cách đoạn</li>
                            </ul>
                        </li>
                        <li>Tạo một bảng đơn giản:
                            <ul>
                                <li>Bảng có ít nhất 3 cột và 4 hàng</li>
                                <li>Điều chỉnh chiều rộng cột phù hợp với nội dung</li>
                                <li>Căn lề nội dung trong các ô</li>
                                <li>Làm nổi bật hàng tiêu đề bằng màu nền hoặc chữ đậm</li>
                            </ul>
                        </li>
                    </ol>
                    <p>Lưu ý: Định dạng văn bản nên đảm bảo tính nhất quán và dễ đọc. Tránh sử dụng quá nhiều kiểu chữ, cỡ chữ và màu sắc khác nhau trong cùng một văn bản.</p>
                </div>
            `
        }
    },
    {
        id: 12,
        title: "Bài 12: Trình bày thông tin ở dạng bảng",
        theory: {
            content: `
                <div class="theory-section">
                    <h3>Trình bày thông tin ở dạng bảng</h3>
                    <p>Bảng là một công cụ hiệu quả để trình bày thông tin một cách có cấu trúc, dễ nhìn và dễ so sánh. Bảng được tổ chức thành các hàng và cột, tạo thành các ô chứa dữ liệu.</p>
                    
                    <h4>1. Cấu trúc của bảng</h4>
                    <ul>
                        <li><strong>Hàng (Row)</strong>: Các dòng ngang trong bảng</li>
                        <li><strong>Cột (Column)</strong>: Các dòng dọc trong bảng</li>
                        <li><strong>Ô (Cell)</strong>: Giao điểm giữa hàng và cột, chứa dữ liệu</li>
                        <li><strong>Tiêu đề bảng (Table Header)</strong>: Hàng đầu tiên thường dùng để mô tả nội dung của mỗi cột</li>
                        <li><strong>Đường viền (Border)</strong>: Đường kẻ xung quanh bảng và giữa các ô</li>
                    </ul>
                    
                    <h4>2. Ưu điểm của việc sử dụng bảng</h4>
                    <ul>
                        <li><strong>Trình bày thông tin có cấu trúc</strong>: Thông tin được tổ chức rõ ràng</li>
                        <li><strong>Dễ dàng so sánh dữ liệu</strong>: Người đọc có thể nhanh chóng so sánh các giá trị</li>
                        <li><strong>Tiết kiệm không gian</strong>: Trình bày nhiều thông tin trong không gian nhỏ</li>
                        <li><strong>Tăng tính trực quan</strong>: Thông tin dễ hiểu hơn so với văn bản thuần túy</li>
                    </ul>
                    
                    <h4>3. Các thao tác cơ bản với bảng</h4>
                    <ul>
                        <li><strong>Tạo bảng</strong>: Xác định số hàng, số cột cần thiết</li>
                        <li><strong>Chỉnh sửa cấu trúc</strong>: Thêm/xóa hàng, cột; trộn/tách ô</li>
                        <li><strong>Định dạng bảng</strong>: Thay đổi kiểu đường viền, màu nền, căn lề...</li>
                        <li><strong>Nhập dữ liệu</strong>: Điền thông tin vào các ô</li>
                        <li><strong>Sắp xếp dữ liệu</strong>: Sắp xếp theo thứ tự tăng/giảm dần</li>
                    </ul>
                    
                    <h4>4. Tạo bảng trong phần mềm soạn thảo văn bản</h4>
                    <ul>
                        <li><strong>Chọn Insert → Table</strong>: Mở công cụ tạo bảng</li>
                        <li><strong>Xác định kích thước</strong>: Chọn số hàng, số cột</li>
                        <li><strong>Tùy chỉnh thuộc tính</strong>: Định dạng bảng theo nhu cầu</li>
                        <li><strong>Điền nội dung</strong>: Nhập dữ liệu vào các ô</li>
                    </ul>
                    
                    <h4>5. Các lưu ý khi tạo bảng</h4>
                    <ul>
                        <li><strong>Đơn giản, rõ ràng</strong>: Tránh tạo bảng quá phức tạp</li>
                        <li><strong>Nhất quán về định dạng</strong>: Sử dụng định dạng đồng nhất</li>
                        <li><strong>Kích thước phù hợp</strong>: Đảm bảo bảng vừa với trang giấy</li>
                        <li><strong>Nội dung cô đọng</strong>: Tránh đưa quá nhiều thông tin vào một ô</li>
                    </ul>
                </div>
            `
        },
        exercise: [
            {
                question: "Để chuẩn bị lên kế hoạch cho buổi dã ngoại của lớp, cô giáo giao cho hai bạn An và Bình thu thập thông tin cho buổi dã ngoại. Theo em, những thông tin nào không nên trình bày dưới dạng bảng?",
                answer: "A",
                options: [
                    { id: "A", text: "Một đoạn văn mô tả ngắn gọn về địa điểm dã ngoại" },
                    { id: "B", text: "Phân công chuẩn bị" },
                    { id: "C", text: "Chương trình hoạt động" },
                    { id: "D", text: "Các đồ dùng cần mang theo" }
                ],
                explanation: "Đoạn văn mô tả ngắn gọn về địa điểm dã ngoại thường chứa thông tin mô tả, miêu tả chi tiết không có cấu trúc rõ ràng nên không phù hợp để trình bày dưới dạng bảng. Các thông tin như phân công chuẩn bị, chương trình hoạt động, danh sách đồ dùng cần mang theo đều có cấu trúc rõ ràng và có thể được tổ chức thành các hàng, cột một cách hiệu quả."
            },
            {
                question: "Để gộp nhiều ô dã chọn, ta dùng nút lệnh nào sau đây?",
                answer: "B",
                options: [
                    { id: "A", text: "Insert Cells" },
                    { id: "B", text: "Merge Cells" },
                    { id: "C", text: "Split Table" },
                    { id: "D", text: "Split Cells" }
                ],
                explanation: "Để gộp nhiều ô đã chọn trong bảng thành một ô lớn hơn, ta sử dụng lệnh 'Merge Cells' (Trộn ô). Lệnh này thường xuất hiện trong menu ngữ cảnh khi nhấp chuột phải vào các ô đã chọn hoặc trong thanh công cụ khi làm việc với bảng."
            },
            {
                question: "Ghép mỗi lệnh ở cột bên trái với ý nghĩa của chúng ở cột bên phải cho phù hợp:",
                answer: "B",
                options: [
                    { id: "A", text: "1-c, 2-a, 3-b" },
                    { id: "B", text: "1-b, 2-c, 3-a" },
                    { id: "C", text: "1-a, 2-c, 3-b" },
                    { id: "D", text: "1-a, 2-b, 3-c" }
                ],
                explanation: "Đáp án đúng là B với các ghép nối: 1. Delete Columns - b. Xóa cột đã chọn; 2. Delete Rows - c. Xóa hàng đã chọn; 3. Split cells - a. Tách một ô thành nhiều ô. Mỗi lệnh được ghép với chức năng tương ứng của nó trong bảng."
            },
            {
                question: "Nội dung của ô trong bảng có thể chứa:",
                answer: "D",
                options: [
                    { id: "A", text: "Kí tự (chữ, số, kí hiệu...)" },
                    { id: "B", text: "Hình ảnh, số liệu" },
                    { id: "C", text: "Bảng, hình ảnh" },
                    { id: "D", text: "Kí tự (chữ, số, kí hiệu...), hình ảnh, bảng" }
                ],
                explanation: "Ô trong bảng có thể chứa nhiều loại nội dung khác nhau, bao gồm kí tự (chữ, số, kí hiệu...), hình ảnh, và thậm chí là bảng lồng nhau. Điều này giúp bảng trở thành công cụ linh hoạt để trình bày thông tin đa dạng trong văn bản."
            },
            {
                question: "Phát biểu nào sau đây là sai?",
                answer: "C",
                options: [
                    { id: "A", text: "Bảng giúp trình bày thông tin một cách có động" },
                    { id: "B", text: "Bảng giúp tìm kiếm, so sánh và tổng hợp thông tin một cách dễ dàng hơn" },
                    { id: "C", text: "Bảng chỉ có thể biểu diễn dữ liệu là những con số" },
                    { id: "D", text: "Bảng có thể được dùng để ghi lại dữ liệu của công việc thống kê, điều tra, khảo sát,..." }
                ],
                explanation: "Phát biểu 'Bảng chỉ có thể biểu diễn dữ liệu là những con số' là sai. Bảng có thể chứa nhiều loại dữ liệu khác nhau như văn bản, số liệu, hình ảnh, biểu tượng, và thậm chí là bảng lồng nhau. Đây là một trong những ưu điểm của bảng - khả năng linh hoạt trong việc trình bày nhiều loại thông tin khác nhau."
            },
            {
                question: "Để đặt hướng cho trang văn bản, trên thẻ Page Layout vào nhóm lệnh Page Setup sử dụng lệnh:",
                answer: "A",
                options: [
                    { id: "A", text: "Orientation" },
                    { id: "B", text: "Size" },
                    { id: "C", text: "Margins" },
                    { id: "D", text: "Columns" }
                ],
                explanation: "Để đặt hướng cho trang văn bản (ngang hoặc dọc), trên thẻ Page Layout vào nhóm lệnh Page Setup, bạn sử dụng lệnh Orientation. Lệnh này cho phép chọn giữa hướng Portrait (dọc) hoặc Landscape (ngang) cho trang văn bản."
            }
        ],
        fillin: [
            {
                instruction: "Điền từ thích hợp vào chỗ trống:",
                questions: [
                    {
                        question: "Bảng bao gồm các _________ (hàng/cột/ô/nhánh) và _________ (cột/ô/trang/chương) để trình bày thông tin một cách có cấu trúc.",
                        answer: ["hàng", "cột"],
                        explanation: "Bảng bao gồm các hàng (dòng ngang) và cột (dòng dọc) để trình bày thông tin một cách có cấu trúc. Giao điểm của hàng và cột tạo thành các ô, nơi chứa nội dung của bảng."
                    },
                    {
                        question: "Để tạo tiêu đề cho bảng, bạn có thể _________ (gộp ô/chia ô/xóa ô/thêm ô) các ô ở hàng đầu tiên và _________ (in đậm/in nghiêng/gạch chân/tô màu) nội dung.",
                        answer: ["gộp ô", "in đậm"],
                        explanation: "Để tạo tiêu đề cho bảng, bạn có thể gộp ô (merge cells) các ô ở hàng đầu tiên để tạo một ô rộng cho tiêu đề và in đậm (bold) nội dung để làm nổi bật tiêu đề. Điều này giúp bảng trở nên chuyên nghiệp và dễ đọc hơn."
                    },
                    {
                        question: "Để điều chỉnh kích thước của cột và hàng, bạn có thể kéo _________ (đường viền/góc/nút/thanh trượt) của chúng hoặc nhập số liệu vào hộp thoại _________ (thuộc tính/định dạng/cài đặt/tùy chọn).",
                        answer: ["đường viền", "thuộc tính"],
                        explanation: "Để điều chỉnh kích thước của cột và hàng trong bảng, bạn có thể kéo đường viền của chúng (edge) hoặc nhập số liệu cụ thể vào hộp thoại thuộc tính (properties) của bảng. Cả hai cách đều cho phép bạn điều chỉnh kích thước chính xác theo nhu cầu."
                    },
                    {
                        question: "Để sắp xếp thông tin trong bảng theo thứ tự, bạn có thể sử dụng chức năng _________ (sắp xếp/lọc/tìm kiếm/thay thế) và chọn tiêu chí _________ (tăng dần/giảm dần/ngẫu nhiên/tùy chỉnh).",
                        answer: ["sắp xếp", "tăng dần"],
                        explanation: "Để sắp xếp thông tin trong bảng theo thứ tự, bạn có thể sử dụng chức năng sắp xếp (sort) và chọn tiêu chí tăng dần (ascending) hoặc các tiêu chí khác như giảm dần. Chức năng này giúp tổ chức dữ liệu một cách logic, dễ đọc và dễ tìm kiếm."
                    }
                ]
            }
        ],
        practice: {
            content: `
                <div class="practice-section">
                    <h3>Thực hành tạo và định dạng bảng</h3>
                    <p>Hãy thực hiện các bước sau để tạo và định dạng một bảng:</p>
                    <ol>
                        <li>Tạo một bảng thời khóa biểu:
                            <ul>
                                <li>Mở phần mềm soạn thảo văn bản</li>
                                <li>Chọn Insert → Table</li>
                                <li>Tạo bảng có 6 cột (Thứ Hai - Thứ Bảy) và 6 hàng (Tiết 1 - Tiết 5 và một hàng cho tiêu đề)</li>
                            </ul>
                        </li>
                        <li>Định dạng cấu trúc bảng:
                            <ul>
                                <li>Gộp các ô ở hàng đầu tiên để tạo tiêu đề "THỜI KHÓA BIỂU"</li>
                                <li>Điều chỉnh chiều rộng các cột để phù hợp với nội dung</li>
                                <li>Thêm đường viền cho bảng</li>
                            </ul>
                        </li>
                        <li>Định dạng nội dung:
                            <ul>
                                <li>Nhập tên các môn học vào các ô tương ứng</li>
                                <li>Căn giữa nội dung trong các ô</li>
                                <li>Làm nổi bật tiêu đề bằng cách sử dụng chữ đậm và màu nền</li>
                            </ul>
                        </li>
                        <li>Thực hiện các thao tác chỉnh sửa:
                            <ul>
                                <li>Thêm một hàng mới cho "Tiết 6"</li>
                                <li>Xóa một cột "Thứ Bảy" (nếu không học)</li>
                                <li>Tách một ô thành hai ô (ví dụ: cho môn học kéo dài 2 tiết)</li>
                            </ul>
                        </li>
                    </ol>
                    <p>Lưu ý: Bảng nên được thiết kế gọn gàng, dễ đọc và có tính thẩm mỹ. Hãy sử dụng màu sắc và định dạng một cách hợp lý để tăng tính trực quan nhưng không gây rối mắt.</p>
                </div>
            `
        }
    },
    {
        id: 13,
        title: "Bài 13: Thực hành: Tìm kiếm và thay thế",
        theory: {
            content: `
                <div class="theory-section">
                    <h3>Tìm kiếm và thay thế trong văn bản</h3>
                    <p>Tìm kiếm và thay thế là các công cụ hữu ích giúp bạn nhanh chóng tìm và thay đổi các từ hoặc cụm từ trong văn bản, tiết kiệm thời gian và công sức so với việc đọc và sửa thủ công.</p>
                    
                    <h4>1. Chức năng tìm kiếm (Find)</h4>
                    <ul>
                        <li><strong>Mục đích</strong>: Tìm các từ hoặc cụm từ cụ thể trong văn bản</li>
                        <li><strong>Phím tắt</strong>: Ctrl + F (Windows/Linux) hoặc Command + F (Mac)</li>
                        <li><strong>Cách sử dụng</strong>: Nhập từ cần tìm vào ô tìm kiếm, nhấn Enter hoặc Find Next</li>
                        <li><strong>Tìm kiếm nâng cao</strong>: Có thể tìm kiếm với sự phân biệt chữ hoa/thường, tìm toàn bộ từ, v.v.</li>
                    </ul>
                    
                    <h4>2. Chức năng thay thế (Replace)</h4>
                    <ul>
                        <li><strong>Mục đích</strong>: Thay thế từ hoặc cụm từ bằng một từ hoặc cụm từ khác</li>
                        <li><strong>Phím tắt</strong>: Ctrl + H (Windows/Linux) hoặc Command + H (Mac)</li>
                        <li><strong>Cách sử dụng</strong>: Nhập từ cần tìm và từ thay thế, nhấn Replace (thay thế từng từ) hoặc Replace All (thay thế tất cả)</li>
                        <li><strong>Lưu ý</strong>: Nên kiểm tra kỹ trước khi sử dụng Replace All để tránh thay đổi không mong muốn</li>
                    </ul>
                    
                    <h4>3. Tùy chọn tìm kiếm và thay thế</h4>
                    <ul>
                        <li><strong>Match case</strong>: Phân biệt chữ hoa/thường (vd: "Tin" khác với "tin")</li>
                        <li><strong>Find whole words only</strong>: Chỉ tìm toàn bộ từ (vd: tìm "học" sẽ không tìm thấy trong "học sinh")</li>
                        <li><strong>Use wildcards</strong>: Sử dụng ký tự đại diện (* hoặc ?) để tìm kiếm linh hoạt</li>
                        <li><strong>Search direction</strong>: Tìm kiếm từ vị trí con trỏ xuống dưới (Down) hoặc lên trên (Up)</li>
                    </ul>
                    
                    <h4>4. Lợi ích của việc sử dụng tìm kiếm và thay thế</h4>
                    <ul>
                        <li><strong>Tiết kiệm thời gian</strong>: Nhanh chóng tìm và thay đổi nhiều vị trí cùng lúc</li>
                        <li><strong>Tăng độ chính xác</strong>: Tránh bỏ sót khi thay đổi thủ công</li>
                        <li><strong>Sửa lỗi đồng loạt</strong>: Sửa lỗi chính tả xuất hiện nhiều lần trong văn bản</li>
                        <li><strong>Thay đổi định dạng</strong>: Kết hợp với định dạng để thay đổi kiểu hiển thị của văn bản</li>
                    </ul>
                </div>
            `
        },
        exercise: [
            {
                question: "Công cụ tìm kiếm và thay thế giúp bạn nhanh chóng _________ một từ hoặc cụm từ trong văn bản dài.",
                answer: "C",
                options: [
                    { id: "A", text: "xóa" },
                    { id: "B", text: "copy" },
                    { id: "C", text: "tìm kiếm" },
                    { id: "D", text: "thay thế" }
                ],
                explanation: "Công cụ tìm kiếm (Find) giúp bạn nhanh chóng tìm kiếm một từ hoặc cụm từ trong văn bản dài mà không cần phải đọc toàn bộ văn bản. Đây là chức năng cơ bản của công cụ này trước khi tiến hành các thao tác khác như thay thế hoặc xóa."
            },
            {
                question: "Khi muốn thay thế tất cả các từ tìm thấy trong văn bản, sau khi chọn lệnh Find and Replace, bạn nên sử dụng:",
                answer: "C",
                options: [
                    { id: "A", text: "Find Next" },
                    { id: "B", text: "Replace" },
                    { id: "C", text: "Replace All" },
                    { id: "D", text: "Cancel" }
                ],
                explanation: "Khi muốn thay thế tất cả các từ tìm thấy trong văn bản cùng một lúc, bạn nên sử dụng lệnh 'Replace All'. Lệnh này sẽ tự động thay thế tất cả các từ hoặc cụm từ khớp với từ cần tìm mà không cần phải xác nhận từng trường hợp một."
            },
            {
                question: "Phím tắt thường được sử dụng để mở hộp thoại Find and Replace trong hầu hết các phần mềm soạn thảo văn bản là:",
                answer: "C",
                options: [
                    { id: "A", text: "Ctrl + A" },
                    { id: "B", text: "Ctrl + R" },
                    { id: "C", text: "Ctrl + F" },
                    { id: "D", text: "Ctrl + S" }
                ],
                explanation: "Phím tắt Ctrl + F được sử dụng để mở hộp thoại tìm kiếm (Find) trong hầu hết các phần mềm soạn thảo văn bản và trình duyệt web. Đây là phím tắt phổ biến giúp người dùng nhanh chóng truy cập chức năng tìm kiếm."
            },
            {
                question: "Chức năng 'Match case' trong hộp thoại Find and Replace có tác dụng gì?",
                answer: "A",
                options: [
                    { id: "A", text: "Phân biệt chữ hoa và chữ thường khi tìm kiếm" },
                    { id: "B", text: "Tìm kiếm các từ có cùng định dạng" },
                    { id: "C", text: "Tìm kiếm các từ đồng nghĩa" },
                    { id: "D", text: "Tìm kiếm các từ cùng họ" }
                ],
                explanation: "Chức năng 'Match case' trong hộp thoại Find and Replace có tác dụng phân biệt chữ hoa và chữ thường khi tìm kiếm. Khi tùy chọn này được bật, từ khóa tìm kiếm phải khớp chính xác với cách viết hoa/thường (ví dụ: 'Tin học' sẽ khác với 'tin học')."
            },
            {
                question: "Bạn Lan đang viết về đặc sản cơm Làng Vòng để giới thiệu ẩm thực Hà Nội cho các bạn ở Tuyên Quang. Tuy nhiên, bạn muốn sửa lại văn bản, thay thế tất cả các từ 'món ngon' bằng từ 'đặc sản'. Bạn sẽ sử dụng lệnh nào trong hộp thoại 'Find and Replace'?",
                answer: "C",
                options: [
                    { id: "A", text: "Find Next" },
                    { id: "B", text: "Replace" },
                    { id: "C", text: "Replace All" },
                    { id: "D", text: "Cancel" }
                ],
                explanation: "Để thay thế tất cả các từ 'món ngon' bằng từ 'đặc sản' trong toàn bộ văn bản cùng một lúc, bạn Lan nên sử dụng lệnh 'Replace All'. Lệnh này sẽ tự động tìm và thay thế tất cả các từ khớp với yêu cầu mà không cần xác nhận từng trường hợp."
            }
        ],
        fillin: [
            {
                instruction: "Điền từ thích hợp vào chỗ trống:",
                questions: [
                    {
                        question: "Chức năng 'Find' giúp bạn nhanh chóng _________ một từ hoặc cụm từ trong văn bản dài.",
                        answer: ["tìm"],
                        explanation: "Chức năng 'Find' (Tìm kiếm) giúp bạn nhanh chóng tìm một từ hoặc cụm từ trong văn bản dài mà không cần phải đọc qua toàn bộ nội dung, tiết kiệm thời gian và công sức."
                    },
                    {
                        question: "Chức năng 'Replace' cho phép bạn _________ một từ hoặc cụm từ bằng một từ hoặc cụm từ _________ (khác/giống/tương tự/ngược nghĩa).",
                        answer: ["thay thế", "khác"],
                        explanation: "Chức năng 'Replace' (Thay thế) cho phép bạn thay thế một từ hoặc cụm từ bằng một từ hoặc cụm từ khác trong văn bản. Điều này đặc biệt hữu ích khi bạn cần thay đổi nhiều từ cùng một lúc hoặc sửa lỗi chính tả xuất hiện nhiều lần."
                    },
                    {
                        question: "Sổ lưu niệm là nơi bạn có thể _________ (lưu giữ/chia sẻ/khoe khoang/quên lãng) những kỷ niệm đáng nhớ thông qua _________ (hình ảnh/văn bản/âm thanh/video) và lời chúc.",
                        answer: ["lưu giữ", "hình ảnh"],
                        explanation: "Sổ lưu niệm là nơi bạn có thể lưu giữ những kỷ niệm đáng nhớ thông qua hình ảnh và lời chúc. Sổ lưu niệm có thể chứa các kỷ niệm dưới nhiều hình thức, nhưng phổ biến nhất là hình ảnh kèm theo lời nhắn, chữ ký hoặc lời chúc."
                    },
                    {
                        question: "Khi tạo sổ lưu niệm, bạn nên chú ý đến _________ (bản quyền/giá cả/kích thước/màu sắc) của hình ảnh và âm thanh để tránh vi phạm và _________ (ghi rõ nguồn/xóa bỏ/sửa đổi/tự tạo) nếu cần.",
                        answer: ["bản quyền", "ghi rõ nguồn"],
                        explanation: "Khi tạo sổ lưu niệm, bạn nên chú ý đến bản quyền của hình ảnh và âm thanh để tránh vi phạm và ghi rõ nguồn nếu cần. Đây là vấn đề đạo đức và pháp lý quan trọng khi sử dụng tài liệu của người khác trong công việc của mình."
                    }
                ]
            }
        ],
        practice: {
            content: `
                <div class="practice-section">
                    <h3>Thực hành tìm kiếm và thay thế</h3>
                    <p>Hãy thực hiện các bước sau để thực hành kỹ năng tìm kiếm và thay thế:</p>
                    <ol>
                        <li>Tìm kiếm cơ bản:
                            <ul>
                                <li>Mở một văn bản có sẵn hoặc tạo một văn bản mới với nội dung dài (khoảng 2-3 trang)</li>
                                <li>Nhấn Ctrl + F để mở hộp thoại tìm kiếm</li>
                                <li>Nhập một từ xuất hiện nhiều lần trong văn bản</li>
                                <li>Sử dụng nút "Find Next" để di chuyển giữa các kết quả tìm kiếm</li>
                            </ul>
                        </li>
                        <li>Thay thế từng phần:
                            <ul>
                                <li>Nhấn Ctrl + H để mở hộp thoại thay thế</li>
                                <li>Nhập từ cần tìm và từ thay thế</li>
                                <li>Sử dụng nút "Replace" để thay thế từng từ một và xác nhận mỗi trường hợp</li>
                                <li>Quan sát kết quả sau mỗi lần thay thế</li>
                            </ul>
                        </li>
                        <li>Thay thế toàn bộ:
                            <ul>
                                <li>Nhấn Ctrl + H để mở hộp thoại thay thế</li>
                                <li>Nhập từ cần tìm khác và từ thay thế tương ứng</li>
                                <li>Sử dụng nút "Replace All" để thay thế tất cả các trường hợp cùng lúc</li>
                                <li>Ghi lại số lượng thay thế đã được thực hiện</li>
                            </ul>
                        </li>
                        <li>Tìm kiếm nâng cao:
                            <ul>
                                <li>Thử sử dụng tùy chọn "Match case" để tìm kiếm phân biệt chữ hoa/thường</li>
                                <li>Thử sử dụng tùy chọn "Find whole words only" để tìm kiếm toàn bộ từ</li>
                                <li>So sánh kết quả tìm kiếm khi bật và tắt các tùy chọn này</li>
                            </ul>
                        </li>
                    </ol>
                    <p>Lưu ý: Luôn lưu bản sao của văn bản gốc trước khi thực hiện thay thế hàng loạt để tránh mất dữ liệu không mong muốn.</p>
                </div>
            `
        }
    },
    {
        id: 14,
        title: "Bài 14: Thực hành: Hoàn thành sổ lưu niệm",
        theory: {
            content: `
                <div class="theory-section">
                    <h3>Sổ lưu niệm điện tử</h3>
                    <p>Sổ lưu niệm điện tử là phiên bản hiện đại của sổ lưu niệm truyền thống, cho phép lưu trữ và chia sẻ kỷ niệm, hình ảnh, văn bản và các nội dung đa phương tiện khác một cách số hóa.</p>
                    
                    <h4>1. Đặc điểm của sổ lưu niệm điện tử</h4>
                    <ul>
                        <li><strong>Đa phương tiện</strong>: Kết hợp văn bản, hình ảnh, âm thanh, video</li>
                        <li><strong>Dễ dàng chỉnh sửa</strong>: Có thể điều chỉnh, cập nhật nội dung bất kỳ lúc nào</li>
                        <li><strong>Dễ dàng chia sẻ</strong>: Có thể chia sẻ trực tuyến với bạn bè, gia đình</li>
                        <li><strong>Bảo quản lâu dài</strong>: Không bị hư hỏng theo thời gian như sổ giấy</li>
                        <li><strong>Tính tương tác</strong>: Cho phép người xem tương tác với nội dung</li>
                    </ul>
                    
                    <h4>2. Các thành phần của sổ lưu niệm điện tử</h4>
                    <ul>
                        <li><strong>Trang bìa</strong>: Giới thiệu chủ đề, người sở hữu sổ lưu niệm</li>
                        <li><strong>Các trang nội dung</strong>: Chứa kỷ niệm, hình ảnh, nội dung cá nhân</li>
                        <li><strong>Hình ảnh</strong>: Ảnh chụp, ảnh quét, hình vẽ kỹ thuật số</li>
                        <li><strong>Văn bản</strong>: Lời nhắn, trích dẫn, chú thích cho hình ảnh</li>
                        <li><strong>Đa phương tiện</strong>: Nhạc nền, video clips, hoạt ảnh</li>
                    </ul>
                    
                    <h4>3. Công cụ tạo sổ lưu niệm điện tử</h4>
                    <ul>
                        <li><strong>Phần mềm soạn thảo văn bản</strong>: Microsoft Word, Google Docs</li>
                        <li><strong>Phần mềm trình chiếu</strong>: PowerPoint, Google Slides</li>
                        <li><strong>Ứng dụng chuyên dụng</strong>: Canva, Adobe Spark, Flipsnack</li>
                        <li><strong>Nền tảng web</strong>: Các trang blog, trang cá nhân, mạng xã hội</li>
                    </ul>
                    
                    <h4>4. Lưu ý khi tạo sổ lưu niệm điện tử</h4>
                    <ul>
                        <li><strong>Bản quyền</strong>: Tôn trọng quyền sở hữu trí tuệ khi sử dụng hình ảnh, âm nhạc</li>
                        <li><strong>Quyền riêng tư</strong>: Cân nhắc khi đăng tải thông tin cá nhân</li>
                        <li><strong>Thiết kế</strong>: Giữ sự cân đối, không quá rối rắm</li>
                        <li><strong>Dung lượng</strong>: Tối ưu kích thước file để dễ dàng chia sẻ</li>
                    </ul>
                </div>
            `
        },
        exercise: [
            {
                question: "Trong việc tạo sổ lưu niệm số, điều gì quan trọng để tạo nên một cuốn sổ ý nghĩa?",
                answer: "C",
                options: [
                    { id: "A", text: "Chỉ sử dụng ảnh chất lượng cao" },
                    { id: "B", text: "Chỉ tập trung vào thiết kế đẹp mắt" },
                    { id: "C", text: "Kết hợp hình ảnh, văn bản, và những kỷ niệm đáng nhớ" },
                    { id: "D", text: "Sử dụng càng nhiều hiệu ứng đặc biệt càng tốt" }
                ],
                explanation: "Một cuốn sổ lưu niệm ý nghĩa cần kết hợp hài hòa giữa hình ảnh, văn bản và những kỷ niệm đáng nhớ. Việc chỉ tập trung vào một yếu tố như chất lượng ảnh hay thiết kế đẹp mắt sẽ không đem lại giá trị đầy đủ, trong khi sử dụng quá nhiều hiệu ứng có thể làm rối mắt và làm mất đi ý nghĩa của nội dung."
            },
            {
                question: "Khi tạo sổ lưu niệm, bạn nên chú trọng điều gì về bản quyền?",
                answer: "C",
                options: [
                    { id: "A", text: "Không cần quan tâm đến bản quyền" },
                    { id: "B", text: "Sử dụng mọi hình ảnh và âm thanh trên mạng mà không cần xin phép" },
                    { id: "C", text: "Sử dụng tài liệu có bản quyền cần ghi rõ nguồn gốc hoặc xin phép tác giả" },
                    { id: "D", text: "Tự động có bản quyền khi bạn tạo ra nó" }
                ],
                explanation: "Khi tạo sổ lưu niệm, bạn nên chú trọng đến vấn đề bản quyền bằng cách sử dụng tài liệu có bản quyền cần ghi rõ nguồn gốc hoặc xin phép tác giả. Đây là nguyên tắc đạo đức và pháp lý quan trọng khi sử dụng tài liệu của người khác, giúp tránh vi phạm luật bản quyền và tôn trọng công sức của người sáng tạo."
            },
            {
                question: "Chức năng tìm kiếm và thay thế giúp Hà sửa lỗi chính tả một cách nhanh chóng.",
                answer: "A",
                options: [
                    { id: "A", text: "Đúng" },
                    { id: "B", text: "Sai" }
                ],
                explanation: "Phát biểu 'Chức năng tìm kiếm và thay thế giúp Hà sửa lỗi chính tả một cách nhanh chóng' là đúng. Chức năng tìm kiếm và thay thế (Find and Replace) cho phép người dùng nhanh chóng tìm và sửa lỗi chính tả xuất hiện nhiều lần trong văn bản, tiết kiệm thời gian so với việc sửa thủ công từng lỗi một."
            },
            {
                question: "Hà phải đọc toàn bộ văn bản để tìm và thay thế từng từ một.",
                answer: "B",
                options: [
                    { id: "A", text: "Đúng" },
                    { id: "B", text: "Sai" }
                ],
                explanation: "Phát biểu 'Hà phải đọc toàn bộ văn bản để tìm và thay thế từng từ một' là sai. Chức năng tìm kiếm và thay thế (Find and Replace) cho phép thay thế hàng loạt mà không cần phải đọc toàn bộ văn bản. Người dùng có thể sử dụng lệnh 'Replace All' để thay thế tất cả các từ cùng một lúc hoặc 'Replace' để thay thế từng từ một nhưng vẫn không cần phải đọc toàn bộ văn bản."
            },
            {
                question: "Khi tạo sổ lưu niệm, Hà có thể sử dụng ảnh và văn bản để ghi lại những kỷ niệm đáng nhớ.",
                answer: "A",
                options: [
                    { id: "A", text: "Đúng" },
                    { id: "B", text: "Sai" }
                ],
                explanation: "Phát biểu 'Khi tạo sổ lưu niệm, Hà có thể sử dụng ảnh và văn bản để ghi lại những kỷ niệm đáng nhớ' là đúng. Sổ lưu niệm chính là nơi để lưu giữ những kỷ niệm đáng nhớ, và việc sử dụng kết hợp giữa hình ảnh và văn bản là cách phổ biến và hiệu quả để ghi lại những khoảnh khắc đáng nhớ đó."
            },
            {
                question: "Hà không cần quan tâm đến bản quyền khi sử dụng hình ảnh và âm thanh trên mạng cho sổ lưu niệm của mình.",
                answer: "B",
                options: [
                    { id: "A", text: "Đúng" },
                    { id: "B", text: "Sai" }
                ],
                explanation: "Phát biểu 'Hà không cần quan tâm đến bản quyền khi sử dụng hình ảnh và âm thanh trên mạng cho sổ lưu niệm của mình' là sai. Ngay cả khi tạo sổ lưu niệm cá nhân, cần tuân thủ luật bản quyền khi sử dụng tài liệu từ nguồn khác. Điều này thể hiện sự tôn trọng đối với tác giả gốc và tuân thủ quy định pháp luật về sở hữu trí tuệ."
            }
        ],
        fillin: [
            {
                instruction: "Điền từ thích hợp vào chỗ trống:",
                questions: [
                    {
                        question: "Trong phần mềm soạn thảo văn bản, tổ hợp phím Ctrl + F thường được sử dụng để làm gì?",
                        answer: ["tìm kiếm"],
                        explanation: "Trong phần mềm soạn thảo văn bản, tổ hợp phím Ctrl + F thường được sử dụng để tìm kiếm văn bản. Đây là phím tắt phổ biến giúp người dùng nhanh chóng tìm kiếm các từ hoặc cụm từ trong tài liệu mà không cần phải đọc toàn bộ nội dung."
                    },
                    {
                        question: "Chức năng 'Tìm và thay thế' thường được sử dụng để làm gì trong phần mềm soạn thảo văn bản?",
                        answer: ["sửa lỗi chính tả"],
                        explanation: "Chức năng 'Tìm và thay thế' (Find and Replace) thường được sử dụng để sửa lỗi chính tả trong phần mềm soạn thảo văn bản. Nó cho phép người dùng tìm kiếm các từ được viết sai và thay thế chúng bằng từ đúng một cách nhanh chóng và hiệu quả."
                    },
                    {
                        question: "Cùng với các định dạng văn bản cơ bản, việc thêm _________ vào sổ lưu niệm giúp làm sinh động và lưu giữ kỷ niệm tốt hơn.",
                        answer: ["hình ảnh"],
                        explanation: "Cùng với các định dạng văn bản cơ bản, việc thêm hình ảnh vào sổ lưu niệm giúp làm sinh động và lưu giữ kỷ niệm tốt hơn. Hình ảnh có khả năng gợi nhớ mạnh mẽ và truyền tải cảm xúc, giúp sổ lưu niệm trở nên sinh động và mang tính cá nhân hơn."
                    }
                ]
            }
        ],
        practice: {
            content: `
                <div class="practice-section">
                    <h3>Thực hành tạo sổ lưu niệm điện tử</h3>
                    <p>Hãy thực hiện các bước sau để tạo một sổ lưu niệm điện tử đơn giản:</p>
                    <ol>
                        <li>Chuẩn bị nội dung:
                            <ul>
                                <li>Chọn chủ đề cho sổ lưu niệm (ví dụ: Kỷ niệm lớp học, Chuyến đi thực tế...)</li>
                                <li>Thu thập hình ảnh liên quan (5-10 ảnh)</li>
                                <li>Chuẩn bị văn bản mô tả, trích dẫn, lời chúc...</li>
                            </ul>
                        </li>
                        <li>Tạo sổ lưu niệm bằng Microsoft Word hoặc PowerPoint:
                            <ul>
                                <li>Tạo trang bìa với tiêu đề và hình ảnh đại diện</li>
                                <li>Tạo các trang nội dung, mỗi trang có thể chứa 1-2 hình ảnh và văn bản mô tả</li>
                                <li>Sắp xếp các trang theo trình tự thời gian hoặc chủ đề</li>
                            </ul>
                        </li>
                        <li>Định dạng nội dung:
                            <ul>
                                <li>Thêm hình ảnh vào các trang, điều chỉnh kích thước phù hợp</li>
                                <li>Định dạng văn bản: Chọn phông chữ, kích cỡ, màu sắc phù hợp</li>
                                <li>Thêm đường viền, khung, nền cho các trang để tăng tính thẩm mỹ</li>
                                <li>Áp dụng kỹ năng căn lề, khoảng cách để tạo bố cục hài hòa</li>
                            </ul>
                        </li>
                        <li>Hoàn thiện sổ lưu niệm:
                            <ul>
                                <li>Kiểm tra lỗi chính tả, định dạng bằng công cụ tìm kiếm và thay thế</li>
                                <li>Thêm số trang, mục lục (nếu cần)</li>
                                <li>Lưu file dưới dạng PDF để dễ dàng chia sẻ</li>
                            </ul>
                        </li>
                    </ol>
                    <p>Lưu ý: Đảm bảo tôn trọng bản quyền khi sử dụng hình ảnh từ internet và ghi rõ nguồn gốc hoặc chỉ sử dụng hình ảnh cá nhân. Sổ lưu niệm nên mang tính cá nhân và thể hiện được cảm xúc, kỷ niệm đặc biệt.</p>
                </div>
            `
        }
    }
];

// Biến toàn cục để theo dõi bài đang hiển thị
let currentUnit = null;

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

// Chức năng chính của ứng dụng

// Khởi tạo ứng dụng khi trang được tải
document.addEventListener('DOMContentLoaded', initializeApp);

/**
 * Khởi tạo ứng dụng
 */
function initializeApp() {
    console.log("Initializing application...");
    console.log("Total lessons:", lessons.length);
    
    createUnitGrid();
    setupEventListeners();
}

/**
 * Thiết lập các event listener cho các nút điều khiển
 */
function setupEventListeners() {
    console.log("Setting up event listeners...");
    
    // Gắn sự kiện cho nút quay lại
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', showUnitGrid);
        console.log("Back button event listener added");
    } else {
        console.warn("Back button not found");
    }
    
    // Gắn sự kiện cho các nút section
    const sectionButtons = document.querySelectorAll('.section-button');
    if (sectionButtons && sectionButtons.length > 0) {
        const sections = ['theory', 'exercise', 'fillin', 'practice'];
        
        sectionButtons.forEach((button, index) => {
            if (index < sections.length) {
                button.addEventListener('click', () => {
                    console.log(`Showing section: ${sections[index]}`);
                    showSection(sections[index]);
                });
            }
        });
        
        console.log(`${sectionButtons.length} section buttons event listeners added`);
    } else {
        console.warn("Section buttons not found");
    }
}

/**
 * Tạo lưới hiển thị các bài học
 */
function createUnitGrid() {
    console.log("Creating unit grid...");
    const unitGrid = document.getElementById('unitGrid');
    if (!unitGrid) {
        console.error("Unit grid element not found");
        return;
    }
    
    unitGrid.innerHTML = '';
    
    // Sắp xếp bài học theo thứ tự tăng dần của ID
    const sortedLessons = [...lessons].sort((a, b) => a.id - b.id);
    
    sortedLessons.forEach(unit => {
        const unitCard = document.createElement('div');
        unitCard.className = 'unit-card';
        unitCard.innerHTML = `<h3>Bài ${unit.id}</h3><p>${unit.title.replace(`Bài ${unit.id}: `, '')}</p>`;
        unitCard.addEventListener('click', () => {
            console.log(`Showing unit ${unit.id}: ${unit.title}`);
            showUnit(unit);
        });
        unitGrid.appendChild(unitCard);
    });
    
    console.log(`${sortedLessons.length} unit cards created`);
}

/**
 * Hiển thị nội dung của một bài học
 * @param {Object} unit - Bài học cần hiển thị
 */
function showUnit(unit) {
    console.log(`Displaying unit ${unit.id}`);
    currentUnit = unit;
    
    const unitGrid = document.getElementById('unitGrid');
    const unitContent = document.getElementById('unitContent');
    const unitTitle = document.getElementById('unitTitle');
    
    if (unitGrid) unitGrid.style.display = 'none';
    if (unitContent) unitContent.classList.add('active');
    if (unitTitle) unitTitle.textContent = unit.title;
    
    // Mặc định hiển thị phần lý thuyết
    showSection('theory');
}

/**
 * Quay lại màn hình danh sách bài học
 */
function showUnitGrid() {
    console.log("Returning to unit grid");
    const unitGrid = document.getElementById('unitGrid');
    const unitContent = document.getElementById('unitContent');
    
    if (unitGrid) unitGrid.style.display = 'grid';
    if (unitContent) unitContent.classList.remove('active');
    
    currentUnit = null;
} 
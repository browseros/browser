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
    // Tiếp tục với các bài học khác...
]; 
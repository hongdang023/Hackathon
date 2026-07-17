import { Playbook } from './types';

export const initialPlaybooks: Playbook[] = [
  {
    id: 'sonny-vu',
    name: 'Vũ Xuân Sơn (Sonny Vũ)',
    role: 'Judge',
    type: 'Senior Judge',
    company: 'Đại học Lund (Thụy Điển) / DeepTensor AB',
    title: 'Assistant Professor / Founder',
    linkedin: 'https://www.facebook.com/aiforvietnam/photos/dr-xuan-son-vu-chief-scientistdr-xuan-son-sonny-vu-is-a-leading-expert-in-privac/122136037766561179/',
    avatarUrl: '/images/vu-xuan-son.png',
    expertise: [
      'Privacy-preserving Machine Learning',
      'AI Safety & Trust',
      'Multimodal Learning',
      'Semantic Systems'
    ],
    mostCaresAbout: [
      'An toàn thông tin và quyền riêng tư dữ liệu người dùng (Privacy)',
      'Tính minh bạch và khả năng giải thích của quyết định AI (Explainability)',
      'Sự đột phá trong kiến trúc ứng dụng AI-Native'
    ],
    highlyValues: [
      'Có cơ chế bảo vệ quyền riêng tư dữ liệu học tập (VD: Anonymization, Encryption)',
      'Giải pháp AI giải quyết được các bài toán đa phương thức (hình ảnh, âm thanh, văn bản)',
      'Thiết kế kiến trúc hệ thống AI an toàn, tin cậy'
    ],
    deductions: [
      'Gửi dữ liệu cá nhân nhạy cảm của người học lên LLM cloud mà không có bộ lọc bảo mật',
      'Thu thập dữ liệu đa phương thức (camera, micro) nhưng không giải trình được tính an toàn riêng tư',
      'AI đưa ra quyết định đánh giá năng lực một cách thiên vị, thiếu minh bạch'
    ],
    likelyQuestions: [
      'Hệ thống của bạn dùng Bayesian Update để liên tục cập nhật Learner Model. Làm cách nào bạn nặc danh hóa (anonymize) các update log này ở gateway trước khi gọi API, đảm bảo tuân thủ quyền trẻ em mà không làm tăng Cost (Rubric 3) cho EduOne?',
      'Kiến trúc của bạn gom 2 vòng lặp (Learner Loop & Content Loop) dùng chung 1 AI Brain. Việc dùng chung này có nguy cơ nào dẫn đến Data Poisoning hoặc rò rỉ dữ liệu cá nhân của học sinh sang phần Content Generate không?',
      'Làm thế nào để hệ thống giải thích (explainability) cho học viên K-12 hiểu vì sao Bayesian Model lại đưa ra Recommendation này, mà giao diện vẫn đơn giản tự nhiên (UX/Rubric 4)?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Architecture',
      'Sau khi hoàn thành MVP'
    ],
    bestQuestionsToAsk: [
    ],
    actionForTeam: [
      { id: 'act-sonny-1', text: 'Thiết lập sơ đồ luồng dữ liệu (Data Flow) chú trọng bảo mật & nặc danh hóa', checked: false },
      { id: 'act-sonny-2', text: 'Chuẩn bị phần giải trình an toàn dữ liệu và quyền riêng tư (AI Safety/Privacy)', checked: false }
    ],
    insights: [
      'Đặc biệt khắt khe về vấn đề an toàn dữ liệu, quyền riêng tư người dùng và tính minh bạch của thuật toán AI.'
    ],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Privacy ML · AI Safety & Trust · Multimodal · Semantic Systems',
      likelyCaresAbout: 'Quyền riêng tư dữ liệu, Tính minh bạch AI, An toàn hệ thống',
      likelyQuestions: [
        'Bảo vệ dữ liệu học viên thế nào?',
        'Giải thích quyết định AI ra sao?',
        'Bảo mật đa phương thức ở đâu?'
      ],
      avoid: 'Lộ dữ liệu nhạy cảm, Blackbox AI thiếu minh bạch, Thiếu giải trình an toàn',
      bestMomentToAsk: 'Sau khi chốt Architecture, sau khi hoàn thành MVP.',
      actionForTeam: [
        'Thiết lập sơ đồ luồng dữ liệu bảo mật',
        'Chuẩn bị giải trình an toàn & quyền riêng tư'
      ]
    }
  },
  {
    id: 'hien-luu',
    name: 'Hien Luu',
    role: 'Judge',
    type: 'Technical Judge',
    company: 'LinkedIn (ex), DoorDash (ex), Zoox (ex)',
    title: 'AI Engineering, AI Agents, MLOps',
    linkedin: 'https://linkedin.com/in/hienluu',
    avatarUrl: '/images/hien-luu.png',
    expertise: [
      'AI Agents',
      'LLM Infrastructure',
      'MLOps',
      'Production Systems'
    ],
    mostCaresAbout: [
      'Production-ready Architecture',
      'Reliability',
      'Scalability',
      'Cost Efficiency',
      'Engineering Trade-offs'
    ],
    highlyValues: [
      'Có Architecture rõ ràng',
      'AI thực sự giải quyết bài toán',
      'Có Deployment thật',
      'Có giải thích Trade-off'
    ],
    deductions: [
      'Buzzwords',
      'Hardcode Demo',
      'Không có khả năng Scale',
      'Không giải thích lý do chọn Architecture'
    ],
    likelyQuestions: [
      'Kiến trúc Dual Closed-loop trông rất ổn trên lý thuyết, nhưng với ngân sách của một tổ chức phi lợi nhuận (Rubric 3), bạn tính toán Cost per Query như thế nào khi Learner Intelligence phải liên tục chạy Inference trên 50.000 học viên?',
      'Quá trình Backward Reasoning trên cấu trúc Competency Graph có thể rất tốn kém tài nguyên tính toán. Bạn thiết kế cơ chế caching nào để đảm bảo hệ thống phản hồi mượt mà (UX/Rubric 4) trong giờ cao điểm?',
      'Nếu mô hình sinh Content (Content Loop) quá tải và bị sập, cơ chế fallback của bạn có làm gián đoạn trải nghiệm học tập đang diễn ra ở Learner Loop không?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Architecture',
      'Trước khi Freeze MVP'
    ],
    bestQuestionsToAsk: [
    ],
    actionForTeam: [
      { id: 'act-1', text: 'Chuẩn bị sơ đồ Architecture', checked: true },
      { id: 'act-2', text: 'Chuẩn bị Fallback Flow', checked: true },
      { id: 'act-3', text: 'Chuẩn bị Cost Estimation', checked: true },
      { id: 'act-4', text: 'Chuẩn bị Deployment Diagram', checked: true },
      { id: 'act-5', text: 'Chuẩn bị Monitoring Flow', checked: true }
    ],
    insights: [
      'Rất coi trọng các quyết định thiết kế thực tế và phân tích chi phí vận hành lâu dài.'
    ],
    teamChanges: [
      { id: 'tc-1', text: 'Thêm module logging chi tiết cho AI Agent', checked: false }
    ],
    cheatSheet: {
      expertise: 'AI Agents · LLM Infrastructure · MLOps',
      likelyCaresAbout: 'Production-ready Architecture, Reliability, Scalability, Cost',
      likelyQuestions: [
        'Vì sao chọn kiến trúc này?',
        'Scale thế nào?',
        'Fallback ra sao?',
        'Cost bao nhiêu?',
        'Monitoring thế nào?'
      ],
      avoid: 'Buzzwords, Hardcode Demo, Không có Trade-off, Chỉ chứng minh "AI chạy được"',
      bestMomentToAsk: 'Sau khi chốt Architecture, trước khi Freeze MVP.',
      actionForTeam: [
        'Chuẩn bị sơ đồ Architecture',
        'Chuẩn bị Cost Estimation',
        'Chuẩn bị Fallback Flow',
        'Chuẩn bị Deployment Diagram'
      ]
    }
  },
  {
    id: 'nguyen-thi-ngoc-trang',
    name: 'Nguyễn Thị Ngọc Trang',
    role: 'Judge',
    type: 'Domain Expert',
    company: 'Viện Công nghệ số và Chuyển đổi số Quốc gia (NISCI)',
    title: 'Quyền Viện trưởng',
    linkedin: 'https://nisci.gov.vn',
    avatarUrl: '/images/nguyen-thi-ngoc-trang.png',
    expertise: [
      'National Digital Transformation',
      'Digital Technology Policy',
      'Digital Solutions',
      'Thúc đẩy đổi mới sáng tạo'
    ],
    mostCaresAbout: [
      'Mức độ thực tế & Khả năng ứng dụng diện rộng',
      'Sự phù hợp với định hướng Chuyển đổi số Quốc gia',
      'Quy chuẩn quản lý dữ liệu & Bảo mật thông tin hành chính'
    ],
    highlyValues: [
      'Giải pháp giải quyết đúng nỗi đau lớn của tổ chức/xã hội',
      'Lộ trình pilot thực tế, rõ ràng',
      'Tính khả thi cao trong triển khai thực tế'
    ],
    deductions: [
      'Giải pháp xa rời thực tiễn Việt Nam',
      'Vi phạm các quy định bảo vệ dữ liệu cá nhân',
      'Thiếu phân tích về chi phí và tài nguyên vận hành thực tế'
    ],
    likelyQuestions: [
      'Bạn nói Dual Closed-loop giúp tự động hóa quá trình học. Nhưng đứng ở góc độ chính sách chuyển đổi số (Rubric 3), làm sao đảm bảo các quyết định của AI Recommendation không đi ngược lại mục tiêu giáo dục K-12 cốt lõi của Bộ GD&ĐT?',
      'STEAM for Vietnam là tổ chức phi lợi nhuận. Kiến trúc Bayesian Learning của bạn có khả năng được mở rộng (scale) để chuyển giao như một giải pháp Digital Transformation cho các trường công lập không?',
      'Dữ liệu từ Learner Loop rất quan trọng. Bạn đã có phương án bảo mật dữ liệu nào để tuân thủ Nghị định 13 về bảo vệ dữ liệu cá nhân của trẻ em chưa?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Problem Framing',
      'Trước khi Pitch'
    ],
    bestQuestionsToAsk: [
    ],
    actionForTeam: [
      { id: 'act-trang-1', text: 'Nghiên cứu cơ chế bảo vệ dữ liệu cá nhân (Nghị định 13)', checked: false },
      { id: 'act-trang-2', text: 'Chuẩn bị Slide về Lộ trình Pilot chi tiết', checked: false }
    ],
    insights: [
      'Rất chú trọng vào tính tuân thủ pháp lý và tác động thực tế của giải pháp số lên người dùng đại chúng.'
    ],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Chuyển đổi số Quốc gia · Chính sách công nghệ số',
      likelyCaresAbout: 'Khả năng ứng dụng thực tế, Định hướng vĩ mô, Bảo mật dữ liệu',
      likelyQuestions: [
        'Giải quyết painpoint gì?',
        'Khả thi quy mô lớn ra sao?',
        'Có tuân thủ luật bảo mật không?'
      ],
      avoid: 'Xa rời thực tế, Vi phạm dữ liệu cá nhân',
      bestMomentToAsk: 'Sau khi chốt Problem Framing, trước khi Pitch.',
      actionForTeam: [
        'Nghiên cứu cơ chế bảo vệ dữ liệu cá nhân (Nghị định 13)',
        'Chuẩn bị Slide về Lộ trình Pilot chi tiết'
      ]
    }
  },
  {
    id: 'nguyen-truong-thang',
    name: 'Nguyễn Trường Thắng',
    role: 'Judge',
    type: 'Technical Judge',
    company: 'Viện Công nghệ thông tin - Viện Hàn lâm Khoa học & Công nghệ VN',
    title: 'Viện trưởng - PGS.TS',
    linkedin: 'https://danviet.vn/pgsts-nguyen-truong-thang-nhin-tu-my-va-trung-quoc-viet-nam-can-chien-luoc-ai-ro-rang-de-khong-bi-tut-lai-d1363218.html',
    avatarUrl: '/images/nguyen-truong-thang.png',
    expertise: [
      'Computer Science',
      'Cloud Computing',
      'Large-scale Software R&D',
      'National AI Strategy'
    ],
    mostCaresAbout: [
      'Tính logic và khoa học trong kiến trúc hệ thống',
      'Khả năng tự chủ công nghệ (hạn chế phụ thuộc tuyệt đối vào API ngoài)',
      'Độ ổn định, hiệu năng và tính tối ưu của hạ tầng'
    ],
    highlyValues: [
      'Có sơ đồ kiến trúc hệ thống chuẩn khoa học máy tính',
      'Có giải pháp dự phòng (fallback) rõ ràng',
      'Tự tối ưu được thuật toán thay vì chỉ gọi API có sẵn'
    ],
    deductions: [
      'Kiến trúc hệ thống chắp vá, thiếu khoa học',
      'Phụ thuộc 100% vào bên thứ ba (nếu mạng lỗi là sập hệ thống)',
      'Thiếu kiểm thử tải hoặc độ ổn định của API'
    ],
    likelyQuestions: [
      'Việc chạy Backward Reasoning trên một Knowledge Graph phức tạp đòi hỏi nhiều tài nguyên. Bạn phân bổ kiến trúc Cloud như thế nào để tối ưu chi phí (Rubric 3) cho tổ chức phi lợi nhuận?',
      'Bạn xử lý tính nhất quán dữ liệu (Data Consistency) giữa Learner Loop và Content Loop như thế nào khi 2 vòng lặp này hoạt động song song và chia sẻ chung một AI Brain?',
      'Hãy chứng minh kiến trúc Bayesian Update của bạn không phải là điểm nghẽn cổ chai (bottleneck) khi hệ thống scale lên 1 triệu học sinh K-12.'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Architecture',
      'Sau khi AI chạy được'
    ],
    bestQuestionsToAsk: [
    ],
    actionForTeam: [
      { id: 'act-thang-1', text: 'Thiết kế sơ đồ kiến trúc hệ thống chuẩn khoa học máy tính', checked: false },
      { id: 'act-thang-2', text: 'Thiết lập cơ chế Fallback (offline cache/local model)', checked: false }
    ],
    insights: [
      'Yêu cầu tính hệ thống cao, kiến trúc phải được suy nghĩ bài bản từ tầng cơ sở dữ liệu lên đến API.'
    ],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Khoa học máy tính · Hạ tầng số · R&D',
      likelyCaresAbout: 'Logic kiến trúc, Khả năng tự chủ công nghệ, Độ ổn định',
      likelyQuestions: [
        'Cấu trúc luồng dữ liệu thế nào?',
        'Tối ưu CSDL cho Learner Model ra sao?',
        'Phương án thay thế khi API ngoài fail?'
      ],
      avoid: 'Kiến trúc chắp vá, Phụ thuộc 100% API ngoài',
      bestMomentToAsk: 'Sau khi chốt Architecture, sau khi AI chạy được.',
      actionForTeam: [
        'Thiết kế sơ đồ kiến trúc hệ thống chuẩn',
        'Thiết lập cơ chế Fallback'
      ]
    }
  },
  {
    id: 'ho-tu-bao',
    name: 'Hồ Tú Bảo',
    role: 'Judge',
    type: 'Technical Judge',
    company: 'Phòng thí nghiệm Khoa học dữ liệu - Viện Nghiên cứu Cao cấp về Toán (VIASM)',
    title: 'Giám đốc PTN Khoa học dữ liệu - GS.TSKH',
    linkedin: 'https://viasm.edu.vn/hdkh/AIDSEconomyEducation2024?userkey=dien-gia',
    avatarUrl: '/images/ho-tu-bao.png',
    expertise: [
      'Data Science',
      'AI & Machine Learning',
      'Data Mining',
      'Scientific R&D Methodology'
    ],
    mostCaresAbout: [
      'Phương pháp luận toán học/khoa học đằng sau mô hình AI',
      'Sự logic của luồng: Dữ liệu (Evidence) -> Tri thức (Knowledge Graph) -> Đề xuất (Recommendation)',
      'Tính giải thích được (Explainability) của AI'
    ],
    highlyValues: [
      'Sử dụng các thuật toán/mô hình toán học tường minh để giải quyết bài toán',
      'Cấu trúc Knowledge Graph rõ ràng, chặt chẽ',
      'Trình bày phương pháp luận nghiên cứu nghiêm túc, khoa học'
    ],
    deductions: [
      'Đen tối hóa (Blackbox) quá mức mà không giải thích được lý do AI quyết định',
      'Gợi ý học tập mang tính ngẫu nhiên, không dựa trên cơ sở khoa học giáo dục',
      'Thiếu tính nhất quán trong các mô hình dữ liệu năng lực'
    ],
    likelyQuestions: [
      'Với mô hình Competency-Based Education (CBE), bạn sử dụng phương pháp thống kê nào để tính toán Confidence Score của AI khi đưa ra Recommendation, thay vì chỉ dựa vào LLM prompt?',
      'Mô hình Bayesian Learning của bạn cần bao nhiêu điểm dữ liệu (Evidence) từ Learner Loop để có thể hội tụ và phản ánh chính xác năng lực thực sự của một học sinh?',
      'Việc AI sinh ra Content mới liên tục có thể dẫn đến hiện tượng Model Drift hoặc thiên lệch (bias) đối với một số nhóm học sinh không? (Rubric 5)'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Problem Framing',
      'Sau khi chốt Solution'
    ],
    bestQuestionsToAsk: [
    ],
    actionForTeam: [
      { id: 'act-bao-1', text: 'Làm rõ cấu trúc Competency Framework & Knowledge Graph trong tài liệu/slide', checked: false },
      { id: 'act-bao-2', text: 'Mô tả chi tiết thuật toán cập nhật Learner Model (VD: Bayesian)', checked: false }
    ],
    insights: [
      'Cực kỳ nghiêm khắc với những giải pháp chỉ "gọi prompt LLM" mà không có mô hình dữ liệu/thuật toán kiểm soát phía sau.'
    ],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Data Science · AI & Học máy · Phương pháp luận khoa học',
      likelyCaresAbout: 'Phương pháp toán học, Logic luồng dữ liệu, Tính giải thích được',
      likelyQuestions: [
        'Mô hình toán cập nhật Learner Model?',
        'Cách cấu trúc Knowledge Graph?',
        'Cơ sở khoa học của gợi ý bài học?'
      ],
      avoid: 'Blackbox AI, Gọi prompt ngẫu nhiên, Thiếu cơ sở khoa học',
      bestMomentToAsk: 'Sau khi chốt Problem Framing, sau khi chốt Solution.',
      actionForTeam: [
        'Làm rõ cấu trúc Competency Framework & Knowledge Graph',
        'Mô tả chi tiết thuật toán cập nhật Learner Model'
      ]
    }
  },
  {
    id: 'william-tjhi',
    name: 'William Tjhi',
    role: 'Judge',
    type: 'Technical Judge',
    company: 'AI Singapore (AISG)',
    title: 'Head of AI Products / Applied Research - PhD',
    linkedin: 'https://www.linkedin.com/in/william-tjhi-353a0840/',
    avatarUrl: '/images/william-tjhi.png',
    expertise: [
      'Natural Language Processing (NLP)',
      'LLMs (SEA-LION Project)',
      'Applied AI Development',
      'AI Cost & Performance Optimization'
    ],
    mostCaresAbout: [
      'Độ chính xác và khả năng hiểu ngữ cảnh bản địa (tiếng Việt/Đông Nam Á)',
      'Sự sẵn sàng đưa vào sản xuất (Production-ready)',
      'Chi phí vận hành (Inference cost) và độ trễ phản hồi (Latency)'
    ],
    highlyValues: [
      'Sử dụng các mô hình ngôn ngữ tối ưu hóa cho tiếng Việt/khu vực',
      'Có cơ chế kiểm soát ảo giác (Hallucination Control) qua Grounding/RAG',
      'Đo lường cụ thể về chi phí vận hành trên quy mô lớn'
    ],
    deductions: [
      'Mô hình AI bị ảo giác nặng khi sinh câu hỏi hoặc đánh giá năng lực',
      'Chi phí token quá cao, không khả thi khi thương mại hóa',
      'Độ trễ quá lớn ảnh hưởng nghiêm trọng đến trải nghiệm người dùng'
    ],
    likelyQuestions: [
      'Với học sinh Việt Nam, việc dùng RAG cho Content Loop có thể gặp rào cản về tiếng Việt. Bạn xử lý vấn đề tokenization và retrieval tiếng Việt như thế nào để tối ưu Cost (Rubric 3)?',
      'Bạn có cân nhắc dùng các SLM (Small Language Models) tối ưu hóa riêng cho giáo dục thay vì phụ thuộc 100% vào các mô hình thương mại đắt tiền cho tính năng AI Content Draft không?',
      'Kỹ thuật prompt nào bạn đang dùng để ép LLM không bị Hallucinate kiến thức sai lệch khi sinh đề thi toán cho học sinh K-12 (Rubric 5)?'
    ],
    bestMomentToAsk: [
      'Sau khi AI chạy được',
      'Trước khi Freeze MVP'
    ],
    bestQuestionsToAsk: [
    ],
    actionForTeam: [
      { id: 'act-william-1', text: 'Tối ưu hóa và kiểm thử Prompt tiếng Việt của RAG', checked: false },
      { id: 'act-william-2', text: 'Lập bảng ước tính chi phí Token (Cost Estimation)', checked: false }
    ],
    insights: [
      'Rất coi trọng tính ứng dụng thực tiễn, tối ưu hóa chi phí vận hành (inference cost) và độ trễ (latency).'
    ],
    teamChanges: [],
    cheatSheet: {
      expertise: 'NLP · LLM (SEA-LION) · AI Products · Cost Optimization',
      likelyCaresAbout: 'Hiểu ngữ cảnh tiếng Việt, Sẵn sàng đưa vào sản xuất, Chi phí & Độ trễ',
      likelyQuestions: [
        'Độ chính xác tiếng Việt ra sao?',
        'Kiểm soát ảo giác thế nào?',
        'Inference cost cho mỗi user?'
      ],
      avoid: 'Mô hình bị ảo giác, Chi phí token quá cao, Độ trễ phản hồi lớn',
      bestMomentToAsk: 'Sau khi AI chạy được, trước khi Freeze MVP.',
      actionForTeam: [
        'Tối ưu và kiểm thử Prompt tiếng Việt',
        'Lập bảng ước tính chi phí Token'
      ]
    }
  },
  {
    id: 'nguyen-hung-viet',
    name: 'Nguyễn Hùng Việt',
    role: 'Mentor',
    type: 'Domain Expert',
    company: 'Đại học Kinh tế Quốc dân (NEU) / Việt Nguyễn AI',
    title: 'Giảng viên CNTT, cựu AI/ML Engineer tại Munich & Berlin',
    linkedin: 'https://www.facebook.com/photo?fbid=122117998677310881&set=pcb.122118000123310881',
    avatarUrl: '/images/nguyen-hung-viet.png',
    expertise: [
      'AI/ML Engineering',
      'AI & Robotics',
      'Machine Learning & Deep Learning',
      'Technology Product Roadmap'
    ],
    mostCaresAbout: [
      'Tính logic và cơ sở khoa học của mô hình học máy',
      'Khả năng tự chủ công nghệ, giảm phụ thuộc vào API bên ngoài',
      'Sự tối ưu hóa cấu trúc dữ liệu và giải trình thuật toán'
    ],
    highlyValues: [
      'Có hiểu biết sâu sắc về toán học đằng sau mô hình',
      'Giải pháp AI được thiết kế bài bản, có nghiên cứu nghiêm túc',
      'Khả năng tự tối ưu thuật toán thay vì chỉ gọi API có sẵn'
    ],
    deductions: [
      'Mô hình Blackbox không giải trình được cơ chế hoạt động',
      'Chỉ đơn thuần gọi prompt API ngẫu nhiên mà không có logic kiểm soát',
      'Giải pháp chắp vá, thiếu cơ sở khoa học máy tính'
    ],
    likelyQuestions: [
      'Làm thế nào để hệ thống Recommendation phản ứng theo thời gian thực (real-time) với độ trễ thấp (UX/Rubric 4) khi cập nhật Learner Model thông qua Bayesian Update?',
      'Khi Content Loop sinh ra bài tập bị lỗi, cơ chế Human Review có đủ công cụ kỹ thuật để bắt lỗi nhanh chóng mà không làm tăng tải cho giáo viên không?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Solution',
      'Sau khi AI chạy được'
    ],
    bestQuestionsToAsk: [
      'Theo anh, bọn em nên chọn kiến trúc Vector Database nào phù hợp nhất để lưu trữ Competency Graph của 50.000 học sinh mà chi phí vận hành vẫn ở mức tối thiểu?',
      'Với kinh nghiệm làm AI Product, anh thấy bọn em nên xây dựng pipeline ML nào để tự động hóa việc test chất lượng của các AI Content Draft trước khi đưa cho giáo viên duyệt?'
    ],
    actionForTeam: [
      { id: 'act-viet-1', text: 'Chuẩn bị giải trình chi tiết về thuật toán AI cốt lõi', checked: false },
      { id: 'act-viet-2', text: 'Thiết lập phương án dự phòng (fallback/offline) cho mô hình', checked: false },
      { id: 'act-viet-3', text: 'Tài liệu hóa cấu trúc mô hình dữ liệu (Learner Model, Knowledge Graph)', checked: false }
    ],
    insights: [],
    teamChanges: [],
    cheatSheet: {
      expertise: 'AI/ML Engineering · AI & Robotics · Học máy · Việt Nguyễn AI',
      likelyCaresAbout: 'Tính logic thuật toán, Khả năng tự chủ công nghệ, Cơ sở khoa học',
      likelyQuestions: [
        'Thuật toán AI cốt lõi là gì?',
        'Tối ưu hóa mô hình ra sao?',
        'Cơ chế fallback khi API sập?'
      ],
      avoid: 'Blackbox AI không giải thích được, Gọi API prompt ngẫu nhiên, Thiếu logic toán học',
      bestMomentToAsk: 'Sau khi chốt Solution, sau khi AI chạy được.',
      actionForTeam: [
        'Làm rõ thuật toán AI cốt lõi',
        'Thiết lập phương án fallback',
        'Tài liệu hóa cấu trúc mô hình dữ liệu'
      ]
    }
  },
  {
    id: 'nguyen-thi-thu-hien',
    name: 'Nguyễn Thị Thu Hiền',
    role: 'Mentor',
    type: 'Domain Expert',
    company: 'KidsEdu STEM Vietnam',
    title: 'Giám đốc Chương trình, Master Trainer STEM.org (Mỹ), Thạc sĩ Khoa học Giáo dục',
    linkedin: 'https://www.facebook.com/photo?fbid=122117998857310881&set=pcb.122118000123310881',
    avatarUrl: '/images/nguyen-thi-thu-hien.png',
    expertise: [
      'K-12 STEM Education',
      'Curriculum Design & 5E Pedagogy',
      'Teacher Training'
    ],
    mostCaresAbout: [
      'Tính sư phạm và hiệu quả thực tế của ứng dụng giáo dục',
      'Trải nghiệm học tập của người dùng cuối (học sinh và giáo viên)',
      'Khả năng áp dụng thực tiễn của giáo án STEM vào trường học Việt Nam'
    ],
    highlyValues: [
      'Giải pháp lấy người học làm trung tâm (Learner-centered design)',
      'Giao diện trực quan, lôi cuốn, phù hợp với lứa tuổi học sinh',
      'Giáo án, luồng bài học được thiết kế khoa học, dễ tiếp cận'
    ],
    deductions: [
      'Công nghệ phức tạp nhưng không mang lại giá trị sư phạm thực chất',
      'Giao diện và luồng tương tác quá khó đối với trẻ em hoặc giáo viên mầm non',
      'Thiếu nghiên cứu về tâm lý học lứa tuổi và phương pháp giáo dục STEM chuẩn hóa'
    ],
    likelyQuestions: [
      'Hệ thống Backward Reasoning của AI có phù hợp với chuẩn sư phạm 5E và năng lực nhận thức của học sinh cấp 1, cấp 2 không (Rubric 4)?',
      'Giáo viên thường quá tải. Việc thêm luồng Human Review trong Content Loop có thực sự làm giảm tải cho họ không, hay lại tạo ra một gánh nặng mới?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Problem Framing',
      'Sau khi hoàn thành MVP'
    ],
    bestQuestionsToAsk: [
      'Với tư cách là chuyên gia sư phạm, cô đánh giá cách chia nhỏ Competency thành các Indicators của hệ thống đã đủ để đo lường chính xác tiến độ học tập của học sinh K-12 chưa?',
      'Làm sao để giao diện (UX) của luồng Human Review thực sự thân thiện, khiến các giáo viên tình nguyện muốn dùng tính năng này thay vì quay lại cách soạn bài truyền thống?'
    ],
    actionForTeam: [
      { id: 'act-hien-1', text: 'Nghiên cứu phương pháp giảng dạy STEM chuẩn (mô hình 5E, EDP)', checked: false },
      { id: 'act-hien-2', text: 'Tối ưu hóa UI/UX thân thiện với đối tượng trẻ em và giáo viên', checked: false },
      { id: 'act-hien-3', text: 'Chuẩn bị kịch bản demo mang tính tương tác giáo dục cao', checked: false }
    ],
    insights: [],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Giáo dục STEM · Phương pháp sư phạm (5E/EDP) · STEM.org',
      likelyCaresAbout: 'Tính sư phạm thực chất, Trải nghiệm người dùng, Tính ứng dụng giáo án',
      likelyQuestions: [
        'Giá trị giáo dục khác biệt là gì?',
        'Giáo viên có dễ sử dụng không?',
        'Áp dụng lý thuyết giáo dục nào?'
      ],
      avoid: 'Lạm dụng công nghệ phức tạp vô ích, Giao diện rối rắm khó dùng, Thiếu chuẩn sư phạm',
      bestMomentToAsk: 'Sau khi chốt Problem Framing, sau khi hoàn thành MVP.',
      actionForTeam: [
        'Nghiên cứu mô hình 5E & EDP',
        'Tối ưu UI/UX thân thiện với trẻ em',
        'Chuẩn bị kịch bản demo sư phạm'
      ]
    }
  },
  {
    id: 'nguyen-linh-khang',
    name: 'Nguyễn Linh Khang',
    role: 'Mentor',
    type: 'Domain Expert',
    company: 'Freelance Tech / Tech Enterprises',
    title: 'Software Developer, BrSE, PM, BA (6+ năm kinh nghiệm)',
    linkedin: 'https://www.facebook.com/photo?fbid=122117999157310881&set=pcb.122118000123310881',
    avatarUrl: '/images/nguyen-linh-khang.png',
    expertise: [
      'Software Development Lifecycle (SDLC)',
      'Digital Transformation & UX/UI',
      'Project Management & BrSE',
      'Applied AI in Software'
    ],
    mostCaresAbout: [
      'Quy trình vận hành và triển khai thực tế của dự án phần mềm',
      'Sự hợp lý trong luồng trải nghiệm người dùng (User Journey/Flow)',
      'Tính thực tiễn của giải pháp chuyển đổi số cho doanh nghiệp/cơ quan nhà nước'
    ],
    highlyValues: [
      'Sản phẩm giải quyết trực tiếp nỗi đau vận hành (operation painpoints)',
      'User Flow mượt mà, tối ưu trải nghiệm và dễ chuyển giao',
      'Tài liệu hóa dự án rõ ràng, chuyên nghiệp (PRD, System Design)'
    ],
    deductions: [
      'Giải pháp kỹ thuật quá hàn lâm nhưng không giải quyết được bài toán thực tế',
      'Giao diện tương tác phức tạp, khó thao tác cho người dùng phổ thông',
      'Thiếu nghiên cứu về luồng hoạt động thực tế của khách hàng mục tiêu'
    ],
    likelyQuestions: [
      'Luồng trải nghiệm của người dùng (User Journey) được thiết kế thế nào để đảm bảo tính tối ưu?',
      'Giải pháp chuyển đổi số của bạn giúp doanh nghiệp tiết kiệm bao nhiêu chi phí hoặc thời gian?',
      'Bạn đã áp dụng AI vào phần nào để tối ưu quy trình phát triển sản phẩm này?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Solution',
      'Sau khi hoàn thành MVP'
    ],
    bestQuestionsToAsk: [
      'Làm thế nào để chúng em thiết kế User Flow cho các đối tượng người dùng khối nhà nước hoặc doanh nghiệp truyền thống sao cho mượt mà nhất?',
      'Anh có gợi ý gì để tối ưu hóa việc phân tích và thiết kế hệ thống (System Analysis) trước khi coding?'
    ],
    actionForTeam: [
      { id: 'act-khang-1', text: 'Phác thảo chi tiết sơ đồ User Flow và User Journey', checked: false },
      { id: 'act-khang-2', text: 'Lập danh sách tính năng tối giản để tập trung hoàn thiện MVP', checked: false },
      { id: 'act-khang-3', text: 'Chuẩn bị tài liệu mô tả luồng chuyển đổi số thực tế của giải pháp', checked: false }
    ],
    insights: [],
    teamChanges: [],
    cheatSheet: {
      expertise: 'SDLC · Chuyển đổi số · UX/UI Optimization · PM/BA/BrSE',
      likelyCaresAbout: 'Luồng trải nghiệm người dùng, Giải quyết nỗi đau vận hành, Quy trình SDLC',
      likelyQuestions: [
        'Thiết kế User Journey ra sao?',
        'Tiết kiệm chi phí/thời gian vận hành thế nào?',
        'AI tối ưu hóa phần nào của quy trình?'
      ],
      avoid: 'Giải pháp kỹ thuật thiếu thực tế, UX/UI phức tạp không thân thiện, Thiếu phân tích vận hành',
      bestMomentToAsk: 'Sau khi chốt Solution, sau khi hoàn thành MVP.',
      actionForTeam: [
        'Phác thảo sơ đồ User Flow/Journey',
        'Tối ưu Scope cho MVP',
        'Chuẩn bị tài liệu luồng vận hành thực tế'
      ]
    }
  },
  {
    id: 'duong-tran',
    name: 'Dương Trần',
    role: 'Mentor',
    type: 'Technical Judge',
    company: 'Viettel Group',
    title: 'Senior Backend Engineer, Chuyên gia AI Agent, RAG, Cloud Native (CKAD & AWS)',
    linkedin: 'https://www.facebook.com/photo?fbid=122117999169310881&set=pcb.122118000123310881',
    avatarUrl: '/images/duong-tran.png',
    expertise: [
      'Large-scale Backend & Real-time Systems',
      'AI-Native, Agent & RAG Systems',
      'Cloud Infrastructure (AWS/Kubernetes)',
      'Tech Talent Mentorship'
    ],
    mostCaresAbout: [
      'Khả năng chịu tải (High Throughput) và tính sẵn sàng cao của Backend',
      'Thiết kế tối ưu cho kiến trúc RAG (Vector DB, chunking strategy) và AI Agent',
      'Tính hiệu quả về chi phí tài nguyên cloud và quản lý cơ sở dữ liệu'
    ],
    highlyValues: [
      'Hệ thống được thiết kế theo hướng Microservices hoặc Cloud-Native chuẩn chỉnh',
      'Có giải pháp tối ưu hóa độ trễ (latency mitigation) cho các API gọi AI',
      'Có các cơ chế caching và tối ưu truy vấn dữ liệu hiệu quả'
    ],
    deductions: [
      'Thiết kế backend chắp vá, dễ nghẽn cổ chai (bottleneck) khi có tải lớn',
      'Gọi trực tiếp API LLM một cách lỏng lẻo mà không có hệ thống quản lý/fallback',
      'Vector Database thiết kế không tối ưu, làm tăng độ trễ truy xuất dữ liệu RAG'
    ],
    likelyQuestions: [
      'Mô hình Dual Closed-loop yêu cầu giao tiếp liên tục giữa các microservices. Bạn thiết kế luồng xử lý bất đồng bộ (asynchronous) như thế nào để đảm bảo hệ thống không sập khi có lượng tải đột biến (Rubric 1)?',
      'Mỗi lần Learner Loop ghi nhận một Evidence, hệ thống phải cập nhật Bayesian Model. Việc này sẽ tốn rất nhiều I/O. Phương án Database Optimization của bạn là gì?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Architecture',
      'Sau khi AI chạy được'
    ],
    bestQuestionsToAsk: [
      'Anh Dương có thể gợi ý cho bọn em một mô hình caching strategy nào hiệu quả nhất để giảm số lượng API call tới LLM trong luồng Recommendation Engine không?',
      'Bọn em nên chọn stack hạ tầng nào trên Cloud để Pilot (Rubric 3) vừa đảm bảo hiệu năng nhưng vẫn nằm trong ngân sách của một dự án phi lợi nhuận?'
    ],
    actionForTeam: [
      { id: 'act-duong-1', text: 'Vẽ sơ đồ kiến trúc Backend chi tiết (Backend Architecture Diagram)', checked: false },
      { id: 'act-duong-2', text: 'Thiết lập cơ chế cache (Redis/Local cache) cho các truy vấn RAG', checked: false },
      { id: 'act-duong-3', text: 'Chuẩn bị phương án monitor hiệu năng hệ thống (Latency, API Gateway logs)', checked: false }
    ],
    insights: [],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Backend lớn · AI Agent & RAG · Kubernetes (CKAD) · AWS · ITS',
      likelyCaresAbout: 'Khả năng chịu tải, Độ trễ (Latency) của AI, Tối ưu RAG & Vector DB, Cloud Native',
      likelyQuestions: [
        'Xử lý latency và rate limit của RAG ra sao?',
        'Cách scale backend khi tải lớn?',
        'Quản lý bộ nhớ ngữ cảnh của AI Agent thế nào?'
      ],
      avoid: 'Backend không tối ưu dễ nghẽn tải, Gọi API AI trực tiếp không qua fallback/caching, Thiết kế Vector DB cẩu thả',
      bestMomentToAsk: 'Sau khi chốt Architecture, sau khi AI chạy được.',
      actionForTeam: [
        'Vẽ sơ đồ kiến trúc Backend chi tiết',
        'Tích hợp caching cho RAG',
        'Chuẩn bị phương án monitor hiệu năng'
      ]
    }
  },
  {
    id: 'hailey-nguyen',
    name: 'Hailey Nguyễn',
    role: 'Mentor',
    type: 'Non-tech Industry Judge',
    company: 'Samsung Electronics Vietnam',
    title: 'Product Marketing Manager (Galaxy Z Series), Thạc sĩ Thiết kế Chiến lược & Khởi nghiệp (CBS)',
    linkedin: 'https://www.facebook.com/photo?fbid=122117998977310881&set=pcb.122118000123310881',
    avatarUrl: '/images/hailey-nguyen.png',
    expertise: [
      'Product Strategy & Branding',
      'Product Marketing & GTM Strategy',
      'Entrepreneurship',
      'STEAM for Vietnam Projects'
    ],
    mostCaresAbout: [
      'Mô hình kinh doanh (Business Model) và tiềm năng thương mại hóa sản phẩm',
      'Sự rõ ràng trong chiến lược tiếp cận thị trường (Go-To-Market)',
      'Tính độc đáo và định vị thương hiệu so với các giải pháp hiện hữu'
    ],
    highlyValues: [
      'Slide Pitch chuyên nghiệp, câu chuyện thương hiệu (brand story) lôi cuốn và mạch lạc',
      'Có phân tích thị trường, đối thủ cạnh tranh và chân dung khách hàng rõ nét',
      'Sản phẩm giải quyết nhu cầu thực tế với chi phí hợp lý'
    ],
    deductions: [
      'Quá tập trung vào kỹ thuật nhưng không chỉ ra được sản phẩm sẽ tạo ra doanh thu thế nào',
      'Kế hoạch Go-To-Market chung chung, thiếu tính thực tế và tính khả thi',
      'Bài thuyết trình lan man, không nêu bật được giá trị độc bản (Unique Value Proposition)'
    ],
    likelyQuestions: [
      'Mô hình kinh doanh cốt lõi của bạn là gì? Làm thế nào để sản phẩm tự nuôi sống chính nó?',
      'Kế hoạch Go-To-Market cụ thể để đạt được 10.000 người dùng đầu tiên là gì?',
      'Điểm khác biệt lớn nhất (UVP) giúp sản phẩm của bạn chiến thắng các đối thủ cạnh tranh là gì?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Solution',
      'Trước khi Pitch'
    ],
    bestQuestionsToAsk: [
      'Làm thế nào để chúng em truyền tải một giải pháp kỹ thuật AI phức tạp thành một câu chuyện sản phẩm đơn giản, dễ thuyết phục các giám khảo phi kỹ thuật trong 3 phút?',
      'Theo kinh nghiệm của chị, đâu là sai lầm lớn nhất khi các startup công nghệ EdTech Việt Nam xây dựng chiến lược Go-To-Market?'
    ],
    actionForTeam: [
      { id: 'act-hailey-1', text: 'Hoàn thiện slide Pitch theo cấu trúc chuẩn (Problem -> Solution -> Market -> Product -> Business Model -> GTM -> Team)', checked: false },
      { id: 'act-hailey-2', text: 'Xác định rõ Unique Value Proposition (UVP) của sản phẩm', checked: false },
      { id: 'act-hailey-3', text: 'Tập dượt trước bài Pitch và chuẩn bị Q&A cho các câu hỏi kinh tế/marketing', checked: false }
    ],
    insights: [],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Product Strategy · Go-To-Market · Brand Positioning · Samsung · STEAM',
      likelyCaresAbout: 'Mô hình kinh doanh, Kế hoạch GTM, Đóng gói sản phẩm thương mại, Pitch Deck lôi cuốn',
      likelyQuestions: [
        'Mô hình kinh doanh là gì?',
        'Kế hoạch Go-To-Market tiếp cận người dùng thế nào?',
        'Điểm khác biệt độc bản (UVP) là gì?'
      ],
      avoid: 'Thuyết trình quá thuần kỹ thuật, Thiếu định hướng kinh doanh/kiếm tiền, Kế hoạch tiếp cận thị trường sáo rỗng',
      bestMomentToAsk: 'Sau khi chốt Solution, trước khi Pitch.',
      actionForTeam: [
        'Xây dựng slide Pitch & Storytelling chuẩn',
        'Làm rõ Unique Value Proposition (UVP)',
        'Luyện tập Pitching & Q&A Marketing'
      ]
    }
  },
  {
    id: 'thinh-ngo',
    name: 'Thịnh Ngô',
    role: 'Mentor',
    type: 'Technical Judge',
    company: 'Xero (Úc) & SkillPixel',
    title: 'Senior Software Engineer tại Xero (Úc), CTO tại SkillPixel',
    linkedin: 'https://www.facebook.com/photo/?fbid=122117998689310881&set=pcb.122118000123310881',
    avatarUrl: '/images/thinh-ngo.png',
    expertise: [
      'Software Engineering & System Architecture',
      'SaaS Product Development',
      'CTO & Tech Leadership',
      'Cloud Infrastructure & DevOps'
    ],
    mostCaresAbout: [
      'Chất lượng mã nguồn và tính vững chắc của kiến trúc phần mềm',
      'Quy trình phát triển sản phẩm SaaS bài bản',
      'Khả năng tự động hóa kiểm thử và tích hợp liên tục (CI/CD)'
    ],
    highlyValues: [
      'Thiết kế hệ thống dễ bảo trì (maintainable) và mở rộng (scalable)',
      'Có quy trình kiểm thử (automated testing) rõ ràng',
      'Cấu trúc CI/CD hoàn chỉnh, sử dụng Cloud Services hiệu quả'
    ],
    deductions: [
      'Mã nguồn cẩu thả, không theo các quy chuẩn kỹ nghệ phần mềm',
      'Thiếu kiến trúc mở rộng khi sản phẩm tăng trưởng',
      'Hệ thống chạy không ổn định hoặc deploy thủ công thiếu tin cậy'
    ],
    likelyQuestions: [
      'Kiến trúc phần mềm của bạn có dễ bảo trì và mở rộng khi số lượng lập trình viên tăng lên không?',
      'Bạn quản lý cơ sở hạ tầng cloud thế nào để tối ưu hóa chi phí vận hành cho sản phẩm SaaS này?',
      'Quy trình deploy và kiểm thử tự động của bạn được thiết lập ra sao?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Architecture',
      'Trước khi Freeze MVP'
    ],
    bestQuestionsToAsk: [
      'Từ kinh nghiệm tại Xero, anh khuyên chúng em nên tổ chức cấu trúc source code và cơ chế CI/CD như thế nào cho một dự án hackathon để phát triển nhanh mà không bị xung đột?',
      'Làm thế nào để xây dựng một kiến trúc backend chuẩn chỉnh cho SaaS ngay từ đầu với ít tài nguyên nhất?'
    ],
    actionForTeam: [
      { id: 'act-thinh-1', text: 'Thiết lập quy chuẩn viết code và phân chia branch rõ ràng trong team', checked: false },
      { id: 'act-thinh-2', text: 'Thiết kế cơ chế CI/CD cơ bản (VD: GitHub Actions)', checked: false },
      { id: 'act-thinh-3', text: 'Tối ưu hóa cấu trúc cơ sở dữ liệu và API cho sản phẩm SaaS', checked: false }
    ],
    insights: [],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Software Engineering · SaaS Development · CTO & Tech Leadership',
      likelyCaresAbout: 'Chất lượng mã nguồn, Kiến trúc phần mềm vững chắc, Quy trình phát triển SaaS',
      likelyQuestions: [
        'Kiến trúc dễ mở rộng ra sao?',
        'Tối ưu hóa chi phí cloud thế nào?',
        'Quy trình deploy và test tự động như thế nào?'
      ],
      avoid: 'Viết code cẩu thả, Kiến trúc chắp vá khó mở rộng, Quy trình deploy thủ công dễ lỗi',
      bestMomentToAsk: 'Sau khi chốt Architecture, trước khi Freeze MVP.',
      actionForTeam: [
        'Thiết lập quy chuẩn code & branch',
        'Cấu hình CI/CD tự động cơ bản',
        'Tối ưu hóa API & CSDL cho SaaS'
      ]
    }
  },
  {
    id: 'nhu-do',
    name: 'Như Đỗ',
    role: 'Mentor',
    type: 'Non-tech Industry Judge',
    company: 'SaaS Marketing Lead',
    title: 'Marketing Lead - 5+ năm phát triển SaaS (Global SaaS 1M+ users)',
    linkedin: 'https://www.facebook.com/photo/?fbid=122117999307310881&set=pcb.122118000123310881',
    avatarUrl: '',
    expertise: [
      'SaaS Marketing & Growth Hacking',
      'GM Optimization & Branding',
      'AI Marketing Operations'
    ],
    mostCaresAbout: [
      'Chiến lược tiếp cận thị trường và thu hút người dùng (Growth Strategy)',
      'Cách tối ưu hóa Gross Margin trong vận hành SaaS',
      'Ứng dụng AI thực tế vào vận hành để tăng hiệu suất mà không tăng nhân sự'
    ],
    highlyValues: [
      'Kế hoạch tăng trưởng người dùng thực tế và có tính khả thi cao',
      'Khai thác AI tối đa để tự động hóa các hoạt động marketing và nội dung',
      'Định vị thương hiệu rõ ràng, tập trung vào vòng đời khách hàng (customer lifecycle)'
    ],
    deductions: [
      'Không có chiến lược thu hút người dùng cụ thể hoặc quá chung chung',
      'Sản phẩm có biên lợi nhuận thấp mà không có phương án tối ưu chi phí API AI',
      'Thiếu phân tích về chân dung khách hàng và vòng đời sử dụng sản phẩm'
    ],
    likelyQuestions: [
      'Chiến lược cụ thể của bạn để đưa sản phẩm SaaS này tiếp cận 1 triệu người dùng là gì?',
      'Khi chi phí chạy API AI khá cao, bạn làm thế nào để tối ưu hóa Gross Margin cho sản phẩm?',
      'Hệ thống nội dung tự động bằng AI của bạn hoạt động thế nào để đảm bảo chất lượng thương hiệu?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Solution',
      'Trước khi Pitch'
    ],
    bestQuestionsToAsk: [
      'Với sản phẩm EdTech/SaaS này, làm thế nào để chúng em thiết kế phễu chuyển đổi (conversion funnel) hiệu quả nhất từ dùng thử sang trả phí?',
      'Chị có gợi ý gì về việc ứng dụng AI để tối ưu hóa quy trình marketing và vận hành nội dung cho một startup quy mô nhỏ?'
    ],
    actionForTeam: [
      { id: 'act-nhudo-1', text: 'Xây dựng mô hình tài chính cơ bản ước tính Gross Margin (doanh thu vs chi phí API)', checked: false },
      { id: 'act-nhudo-2', text: 'Phác thảo phễu chuyển đổi người dùng (User Acquisition Funnel)', checked: false },
      { id: 'act-nhudo-3', text: 'Tích hợp tính năng AI hỗ trợ người dùng chia sẻ/viral sản phẩm', checked: false }
    ],
    insights: [],
    teamChanges: [],
    cheatSheet: {
      expertise: 'SaaS Marketing · Growth Hacking · Gross Margin · AI Content',
      likelyCaresAbout: 'Chiến lược thu hút người dùng, Tối ưu hóa biên lợi nhuận, Ứng dụng AI',
      likelyQuestions: [
        'Chiến lược đạt 1M+ users là gì?',
        'Tối ưu Gross Margin ra sao?',
        'Tự động hóa nội dung bằng AI thế nào?'
      ],
      avoid: 'Thiếu chiến lược tăng trưởng, Biên lợi nhuận thấp do chi phí API, Thiếu phễu chuyển đổi',
      bestMomentToAsk: 'Sau khi chốt Solution, trước khi Pitch.',
      actionForTeam: [
        'Ước tính Gross Margin kỹ càng',
        'Phác thảo phễu chuyển đổi người dùng',
        'Thiết kế tính năng viral sản phẩm'
      ]
    }
  },
  {
    id: 'le-dinh-duy',
    name: 'Lê Đình Duy',
    role: 'Mentor',
    type: 'Technical Judge',
    company: 'FPT Smart Cloud',
    title: 'Product Manager Foundation Model, Nghiên cứu ứng dụng & phát triển AI/NLP (7+ năm kinh nghiệm)',
    linkedin: 'https://www.facebook.com/photo/?fbid=122117998635310881&set=pcb.122118000123310881',
    avatarUrl: '/images/le-dinh-duy.png',
    expertise: [
      'Foundation Models',
      'Natural Language Processing (NLP)',
      'Applied AI Research'
    ],
    mostCaresAbout: [
      'Chất lượng và độ tin cậy của các mô hình ngôn ngữ được sử dụng',
      'Kiến trúc xử lý ngôn ngữ tự nhiên (NLP) tối ưu cho tiếng Việt',
      'Tính khoa học và thực tiễn của giải pháp AI'
    ],
    highlyValues: [
      'Sử dụng hoặc fine-tune các mô hình AI nền tảng một cách thông minh và tối ưu',
      'Giải quyết tốt các bài toán ngôn ngữ phức tạp (như sắc thái, ngữ cảnh tiếng Việt)',
      'Có cơ sở khoa học máy tính và tài liệu nghiên cứu vững chắc'
    ],
    deductions: [
      'Sử dụng mô hình AI sai mục đích hoặc không tối ưu hóa prompt',
      'Prompt engineering cẩu thả dẫn đến kết quả AI bị ảo giác nặng',
      'Không giải trình được cơ chế hoạt động chi tiết của mô hình NLP'
    ],
    likelyQuestions: [
      'Mô hình nền tảng (Foundation Model) nào được sử dụng và vì sao bạn chọn mô hình đó cho bài toán NLP này?',
      'Làm thế nào bạn giải quyết vấn đề hiểu ngữ cảnh và thuật ngữ chuyên ngành tiếng Việt?',
      'Bạn đánh giá độ chính xác và hiệu năng của mô hình AI này bằng những metrics nào?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Architecture',
      'Sau khi AI chạy được'
    ],
    bestQuestionsToAsk: [
      'Để fine-tune hoặc tối ưu hóa prompt cho một mô hình tiếng Việt chuyên ngành, anh khuyên chúng em nên bắt đầu từ việc chuẩn bị dataset thế nào?',
      'Làm thế nào để đánh giá một cách khoa học độ chính xác của mô hình NLP mà chúng em xây dựng trong khuôn khổ hackathon ngắn ngày?'
    ],
    actionForTeam: [
      { id: 'act-leduy-1', text: 'Lựa chọn và giải trình rõ lý do chọn Foundation Model', checked: false },
      { id: 'act-leduy-2', text: 'Xây dựng bộ testcase (evaluation dataset) nhỏ để đánh giá độ chính xác của prompt/mô hình', checked: false },
      { id: 'act-leduy-3', text: 'Tối ưu hóa prompt để giảm thiểu hiện tượng ảo giác (hallucination)', checked: false }
    ],
    insights: [],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Foundation Models · NLP · Tiếng Việt chuyên sâu · Applied AI Research',
      likelyCaresAbout: 'Chất lượng mô hình AI, Kiến trúc NLP tối ưu, Tính khoa học của giải pháp',
      likelyQuestions: [
        'Vì sao chọn Foundation Model này?',
        'Xử lý ngữ cảnh tiếng Việt thế nào?',
        'Đánh giá mô hình bằng metrics gì?'
      ],
      avoid: 'Prompt engineering cẩu thả, AI bị ảo giác do thiếu grounding, Không giải thích được cơ chế NLP',
      bestMomentToAsk: 'Sau khi chốt Architecture, sau khi AI chạy được.',
      actionForTeam: [
        'Giải trình rõ lý do chọn mô hình',
        'Xây dựng tập dữ liệu đánh giá mô hình',
        'Tối ưu hóa prompt tránh ảo giác'
      ]
    }
  },
  {
    id: 'nguyen-gia-hy',
    name: 'Nguyễn Gia Hy',
    role: 'Mentor',
    type: 'Domain Expert',
    company: 'Swinburne University (Úc) & SkillPixel',
    title: 'Giảng viên ĐH Swinburne, Box Hill Institute, Founder SkillPixel',
    linkedin: 'https://www.facebook.com/photo/?fbid=122117998749310881&set=pcb.122118000123310881',
    avatarUrl: '/images/nguyen-gia-hy.png',
    expertise: [
      'Academic Teaching & Pedagogy',
      'Startup & Entrepreneurship',
      'Academy-Industry Link'
    ],
    mostCaresAbout: [
      'Tính ứng dụng giáo dục theo tiêu chuẩn sư phạm quốc tế',
      'Mô hình kinh doanh khởi nghiệp khả thi của sản phẩm',
      'Sự kết nối chặt chẽ giữa lý thuyết học thuật và thực tiễn sản phẩm'
    ],
    highlyValues: [
      'Định hướng giải pháp giáo dục chuẩn toàn cầu, thân thiện với người học',
      'Có lộ trình phát triển startup và thương mại hóa rõ ràng',
      'Phương pháp giáo dục hiện đại, đổi mới sáng tạo và cuốn hút'
    ],
    deductions: [
      'Sản phẩm mang nặng tính lý thuyết hàn lâm mà thiếu ứng dụng thực tế',
      'Thiếu nghiên cứu về mô hình kinh doanh hoặc cách vận hành bền vững',
      'Phương pháp sư phạm lồng ghép trong app bị tẻ nhạt hoặc thiếu khoa học'
    ],
    likelyQuestions: [
      'Điểm độc đáo trong giải pháp giáo dục của bạn so với phương pháp truyền thống là gì?',
      'Bạn có kế hoạch gì để mở rộng giải pháp này ra các môi trường giáo dục quốc tế không?',
      'Mô hình kinh doanh của dự án được thiết kế như thế nào để phát triển bền vững?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Problem Framing',
      'Trước khi Pitch'
    ],
    bestQuestionsToAsk: [
      'Làm thế nào để kết hợp giữa chuẩn học thuật hàn lâm và trải nghiệm học tập thực tế, cuốn hút cho học sinh trên một ứng dụng EdTech?',
      'Từ góc nhìn sáng lập SkillPixel, anh thấy đâu là điểm mấu chốt để một sản phẩm công nghệ giáo dục thu hút được sự quan tâm của các tổ chức giáo dục lớn?'
    ],
    actionForTeam: [
      { id: 'act-giahy-1', text: 'Thiết kế cơ chế gamification hoặc tương tác cuốn hút cho app giáo dục', checked: false },
      { id: 'act-giahy-2', text: 'Nghiên cứu và áp dụng các tiêu chuẩn giáo dục quốc tế vào bài học', checked: false },
      { id: 'act-giahy-3', text: 'Hoàn thiện slide mô hình kinh doanh và lộ trình khởi nghiệp bền vững', checked: false }
    ],
    insights: [],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Sư phạm quốc tế · Khởi nghiệp giáo dục · Kết nối học thuật',
      likelyCaresAbout: 'Tính sư phạm quốc tế, Mô hình kinh doanh khả thi, Trải nghiệm học tập cuốn hút',
      likelyQuestions: [
        'Điểm độc đáo giáo dục là gì?',
        'Khả năng scale ra môi trường quốc tế?',
        'Mô hình kinh doanh phát triển bền vững?'
      ],
      avoid: 'Hàn lâm giáo điều thiếu thực tế, Thiếu kế hoạch tài chính/kinh doanh, Thiết kế bài học nhàm chán',
      bestMomentToAsk: 'Sau khi chốt Problem Framing, trước khi Pitch.',
      actionForTeam: [
        'Thiết kế cơ chế gamification/tương tác',
        'Áp dụng chuẩn giáo dục quốc tế',
        'Hoàn thiện lộ trình khởi nghiệp'
      ]
    }
  },
  {
    id: 'duong-quang-tien',
    name: 'Dương Quang Tiến',
    role: 'Mentor',
    type: 'Technical Judge',
    company: 'FPT AI Factory',
    title: 'Developer Community Manager, Nghiên cứu phát triển AI Speech/NLP (5+ năm kinh nghiệm)',
    linkedin: 'https://www.facebook.com/photo/?fbid=122117999685310881&set=pcb.122118000123310881',
    avatarUrl: '/images/duong-quang-tien.png',
    expertise: [
      'Speech & NLP Models',
      'DevRel & Communities',
      'GPU Compute & AI Infrastructure'
    ],
    mostCaresAbout: [
      'Kỹ thuật xử lý âm thanh/giọng nói và NLP tối ưu',
      'Hiệu năng tính toán trên hạ tầng phần cứng (GPU/CPU optimization)',
      'Khả năng ứng dụng thực tế và độ trễ của mô hình Speech AI'
    ],
    highlyValues: [
      'Hệ thống xử lý âm thanh thời gian thực (real-time processing) với độ trễ cực thấp',
      'Có giải pháp xử lý tạp âm và nhận diện giọng nói vùng miền tốt',
      'Giải pháp sử dụng hạ tầng phần cứng một cách hiệu quả và tiết kiệm'
    ],
    deductions: [
      'Tích hợp Speech AI nhưng độ trễ (latency) phản hồi quá cao gây trải nghiệm tệ',
      'Xử lý tiếng ồn kém dẫn đến nhận diện sai thông tin đầu vào',
      'Kiến trúc phần cứng tính toán AI thiết lập lãng phí hoặc kém tối ưu'
    ],
    likelyQuestions: [
      'Mô hình Speech/NLP của bạn xử lý bài toán nhiễu âm thanh và giọng nói vùng miền thế nào?',
      'Làm thế nào để giảm thiểu tối đa độ trễ khi xử lý âm thanh thời gian thực?',
      'Giải pháp của bạn có thể vận hành hiệu quả trên hạ tầng GPU/phần cứng hạn chế không?'
    ],
    bestMomentToAsk: [
      'Sau khi AI chạy được',
      'Trước khi Freeze MVP'
    ],
    bestQuestionsToAsk: [
      'Với bài toán Speech-to-Text tiếng Việt, anh khuyên nhóm nên sử dụng mô hình mã nguồn mở nào (như Whisper) và làm sao để tối ưu hóa nó cho môi trường nhiều tạp âm?',
      'Làm thế nào để thiết lập một pipeline xử lý âm thanh thời gian thực hiệu quả nhất về mặt hạ tầng và độ trễ?'
    ],
    actionForTeam: [
      { id: 'act-quangtien-1', text: 'Lựa chọn pipeline xử lý Speech AI tối ưu (VD: Whisper + fine-tune hoặc API ngoài)', checked: false },
      { id: 'act-quangtien-2', text: 'Đo lường độ trễ (latency) của quá trình nhận diện âm thanh', checked: false },
      { id: 'act-quangtien-3', text: 'Thiết kế cơ chế lọc nhiễu âm thanh đầu vào cơ bản trước khi xử lý bằng mô hình', checked: false }
    ],
    insights: [],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Speech & NLP · Developer Relations · Hạ tầng GPU tính toán AI',
      likelyCaresAbout: 'Kỹ thuật Speech AI, Độ trễ thời gian thực, Tối ưu hóa hạ tầng tính toán',
      likelyQuestions: [
        'Xử lý nhiễu âm thanh & giọng vùng miền ra sao?',
        'Giảm thiểu độ trễ Speech AI thế nào?',
        'Tối ưu hóa hạ tầng tính toán GPU như thế nào?'
      ],
      avoid: 'Speech AI có độ trễ phản hồi quá lớn, Nhận diện âm thanh kém khi có tạp âm, Cấu hình hạ tầng phần cứng lãng phí',
      bestMomentToAsk: 'Sau khi AI chạy được, trước khi Freeze MVP.',
      actionForTeam: [
        'Lựa chọn pipeline Speech AI tối ưu',
        'Đo lường và tối ưu hóa độ trễ',
        'Tích hợp bộ lọc nhiễu âm thanh cơ bản'
      ]
    }
  },
  {
    id: 'phung-quang-dung',
    name: 'Phùng Quang Dũng',
    role: 'Mentor',
    type: 'Domain Expert',
    company: 'MB Bank',
    title: 'Product Coach, cựu CPO/Senior PM dẫn dắt Chuyển đổi số và Product Design mảng Viễn thông, Ngân hàng, SaaS',
    linkedin: 'https://www.facebook.com/photo/?fbid=122117999043310881&set=pcb.122118000123310881',
    avatarUrl: '/images/phung-quang-dung.png',
    expertise: [
      'Digital Transformation & Product Design',
      'Lean Product Systems',
      'Multi-Agent Business Optimization',
      'Enterprise AI Automation'
    ],
    mostCaresAbout: [
      'Tính thực chiến và tinh gọn trong vận hành sản phẩm từ vạch xuất phát',
      'Kiến trúc thiết kế sản phẩm (Product Design) và UX',
      'Khả năng ứng dụng Multi-Agent AI giải quyết bài toán kinh doanh thực tế'
    ],
    highlyValues: [
      'Giải pháp giải quyết rõ ràng bài toán kinh tế/sức lao động của doanh nghiệp',
      'Hệ thống Agent hoạt động kết hợp ăn ý (Hybrid Multi-Agent)',
      'Tư duy thiết kế sản phẩm tinh gọn, bám sát nhu cầu thực tế'
    ],
    deductions: [
      'Xây dựng sản phẩm cồng kềnh, quá nhiều tính năng thừa thãi',
      'Agent thiết kế thiếu liên kết hoặc không mang lại hiệu quả giải phóng sức lao động',
      'Thiếu phân tích bài toán kinh doanh và quy trình vận hành tinh gọn'
    ],
    likelyQuestions: [
      'Sản phẩm của bạn giải quyết bài toán giải phóng sức lao động doanh nghiệp cụ thể ra sao?',
      'Tại sao bạn lại chọn kiến trúc Hybrid Multi-Agent AI cho hệ thống này?',
      'Quy trình thiết kế sản phẩm tinh gọn của bạn được xây dựng từ những giả định nào?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Problem Framing',
      'Sau khi chốt Solution'
    ],
    bestQuestionsToAsk: [
      'Làm thế nào để thiết lập sự tương tác và phân chia vai trò (orchestration) giữa các AI Agent hiệu quả nhất để giải quyết bài toán doanh nghiệp phức tạp?',
      'Theo kinh nghiệm phát triển sản phẩm tại MB Bank, đâu là các bước quan trọng nhất để kiểm chứng (validate) sản phẩm tinh gọn trong 48 giờ?'
    ],
    actionForTeam: [
      { id: 'act-dung-1', text: 'Phác thảo chi tiết luồng phối hợp giữa các AI Agent (Agent Orchestration Flow)', checked: false },
      { id: 'act-dung-2', text: 'Tập trung hoàn thiện 1-2 core features giúp giải phóng sức lao động', checked: false },
      { id: 'act-dung-3', text: 'Chuẩn bị bài toán kinh tế (Business Case) chứng minh hiệu quả giảm tải công việc', checked: false }
    ],
    insights: [],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Product Design · Lean Product · Hybrid Multi-Agent AI · MB Bank',
      likelyCaresAbout: 'Bài toán kinh doanh, Multi-Agent Orchestration, Thiết kế sản phẩm tinh gọn',
      likelyQuestions: [
        'Tiết kiệm sức lao động thế nào?',
        'Tại sao dùng Hybrid Multi-Agent?',
        'Giả định thiết kế sản phẩm tinh gọn là gì?'
      ],
      avoid: 'Tính năng cồng kềnh thiếu tập trung, AI Agent rời rạc thiếu sự phối hợp, Thiếu bài toán kinh tế',
      bestMomentToAsk: 'Sau khi chốt Problem Framing, sau khi chốt Solution.',
      actionForTeam: [
        'Phác thảo luồng phối hợp AI Agents',
        'Tập trung vào tính năng lõi (Lean)',
        'Chuẩn bị Business Case rõ ràng'
      ]
    }
  },
  {
    id: 'dong-viet-hoang',
    name: 'Đồng Việt Hoàng',
    role: 'Mentor',
    type: 'Technical Judge',
    company: 'Singapore Management University (SMU) & Mavenpath',
    title: 'Nghiên cứu sinh Tiến sĩ tại SMU chuyên sâu về hệ thống gợi ý và tìm kiếm bằng LLM, Nhà điều hành Mavenpath',
    linkedin: 'https://www.facebook.com/photo/?fbid=122117999199310881&set=pcb.122118000123310881',
    avatarUrl: '/images/dong-viet-hoang.png',
    expertise: [
      'LLM-based Recommendation & Search',
      'Live E-learning Platform',
      'Fishery Data Digitization',
      'Advanced AI Academic Research'
    ],
    mostCaresAbout: [
      'Thuật toán tìm kiếm và gợi ý cá nhân hóa (Recommendation Engine)',
      'Tính tương tác trực tiếp (live/interactive) trong trải nghiệm học tập',
      'Giải pháp số hóa dữ liệu và khai thác thông tin từ thực tế cuộc sống'
    ],
    highlyValues: [
      'Hệ thống gợi ý học tập sử dụng LLM chính xác, hữu ích, không bị ngẫu nhiên',
      'Cơ chế tương tác trực tiếp giúp nâng cao hiệu quả e-learning',
      'Khả năng xử lý dữ liệu thực tế và số hóa quy trình (nhật ký khai thác)'
    ],
    deductions: [
      'Thuật toán gợi ý hoạt động không chính xác, thiếu logic toán học',
      'Nền tảng học trực tuyến thiếu tính tương tác trực tiếp hoặc tẻ nhạt',
      'Thiếu nghiên cứu về luồng thu thập và xử lý dữ liệu gốc'
    ],
    likelyQuestions: [
      'Thuật toán tìm kiếm hoặc hệ thống gợi ý học tập của bạn được tối ưu hóa như thế nào bằng LLM?',
      'Làm thế nào để giải pháp e-learning của bạn tạo ra tương tác trực tiếp hấp dẫn hơn các nền tảng khác?',
      'Bạn xử lý và chuẩn hóa dữ liệu đầu vào thế nào để phục vụ cho mô hình gợi ý?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Solution',
      'Sau khi AI chạy được'
    ],
    bestQuestionsToAsk: [
      'Làm thế nào để tối ưu hóa mô hình LLM nhằm đưa ra gợi ý học tập cá nhân hóa chính xác mà không vượt quá giới hạn token (rate limit)?',
      'Bí quyết để thiết kế một hệ thống live e-learning có tính tương tác cao và độ trễ thấp là gì?'
    ],
    actionForTeam: [
      { id: 'act-hoang-1', text: 'Thiết kế cơ chế lọc và gợi ý bài học cá nhân hóa cụ thể', checked: false },
      { id: 'act-hoang-2', text: 'Tích hợp các công cụ tương tác trực tiếp thời gian thực vào MVP học tập', checked: false },
      { id: 'act-hoang-3', text: 'Chuẩn hóa cấu trúc dữ liệu cho hệ thống tìm kiếm', checked: false }
    ],
    insights: [],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Hệ gợi ý LLM · Live E-learning · Số hóa dữ liệu thực tế · SMU / Mavenpath',
      likelyCaresAbout: 'Thuật toán gợi ý học tập, Tính tương tác trực tiếp, Xử lý & Chuẩn hóa dữ liệu',
      likelyQuestions: [
        'Tối ưu hệ gợi ý bằng LLM thế nào?',
        'Làm sao tăng tính tương tác trực tiếp?',
        'Quy trình xử lý dữ liệu đầu vào ra sao?'
      ],
      avoid: 'Gợi ý bài học ngẫu nhiên thiếu logic, E-learning tẻ nhạt thiếu tương tác, Cấu trúc dữ liệu lỏng lẻo',
      bestMomentToAsk: 'Sau khi chốt Solution, sau khi AI chạy được.',
      actionForTeam: [
        'Thiết kế module gợi ý cá nhân hóa',
        'Tích hợp công cụ tương tác thời gian thực',
        'Chuẩn hóa cấu trúc dữ liệu tìm kiếm'
      ]
    }
  },
  {
    id: 'nguyen-van-hien-sota',
    name: 'Nguyễn Văn Hiến',
    role: 'Mentor',
    type: 'Domain Expert',
    company: 'SOTATEK',
    title: 'Project Manager (12+ năm kinh nghiệm phần mềm rộng khắp Edutech, Healthcare, Fintech, Blockchain)',
    linkedin: 'https://www.facebook.com/photo/?fbid=122117998989310881&set=pcb.122118000123310881',
    avatarUrl: '/images/nguyen-van-hien-sota.png',
    expertise: [
      'Project Management',
      'Multidomain Product Deployment',
      'Agile/Scrum Management',
      'Cross-platform Software Architecture'
    ],
    mostCaresAbout: [
      'Quy trình quản lý và triển khai dự án (Project Delivery)',
      'Sự tương thích của giải pháp phần mềm đối với từng lĩnh vực cụ thể (Edutech, Fintech...)',
      'Tính thực tế và khả năng bàn giao sản phẩm đúng thời hạn (Agile delivery)'
    ],
    highlyValues: [
      'Kế hoạch phát triển dự án rõ ràng, quản trị rủi ro tốt',
      'Sự thấu hiểu sâu sắc nỗi đau của từng domain (y tế, giáo dục, tài chính)',
      'MVP chạy ổn định, hoàn thiện tốt các chức năng cốt lõi'
    ],
    deductions: [
      'Thiếu định hướng phát triển rõ ràng hoặc scope dự án quá rộng so với thời gian thi',
      'Sản phẩm có tính ứng dụng chung chung, không giải quyết được nỗi đau đặc thù của domain',
      'Quy trình làm việc nhóm lộn xộn, thiếu kiểm soát tiến độ'
    ],
    likelyQuestions: [
      'Làm thế nào để bạn đảm bảo bàn giao MVP đúng tiến độ trong vòng 48 giờ?',
      'Sản phẩm của bạn giải quyết nỗi đau đặc thù nào của lĩnh vực Edutech/Fintech mà các giải pháp khác chưa làm được?',
      'Phương án quản trị rủi ro của bạn là gì nếu tính năng AI cốt lõi không kịp hoàn thành?'
    ],
    bestMomentToAsk: [
      'Sau khi hiểu đề',
      'Trước khi Freeze MVP'
    ],
    bestQuestionsToAsk: [
      'Với 12 năm kinh nghiệm quản lý dự án Edutech và Fintech, anh thấy sai lầm lớn nhất về quản lý scope mà các đội thi hackathon thường mắc phải là gì?',
      'Làm thế nào để chúng em cấu trúc sản phẩm đáp ứng tốt nhất yêu cầu khắt khe về bảo mật dữ liệu của ngành Healthcare hay Fintech?'
    ],
    actionForTeam: [
      { id: 'act-hien-sota-1', text: 'Lập danh sách backlog tính năng ưu tiên (MVP Scope)', checked: false },
      { id: 'act-hien-sota-2', text: 'Phân chia vai trò rõ ràng trong team và kiểm tra tiến độ mỗi 4 giờ', checked: false },
      { id: 'act-hien-sota-3', text: 'Nghiên cứu quy chuẩn bảo mật cơ bản cho domain được chọn', checked: false }
    ],
    insights: [],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Project Management · Edutech/Healthcare/Fintech/Blockchain · Agile/Scrum',
      likelyCaresAbout: 'Quản lý Scope MVP, Giải quyết đúng nỗi đau domain, Tiến độ bàn giao sản phẩm',
      likelyQuestions: [
        'Làm sao đảm bảo tiến độ MVP?',
        'Nỗi đau đặc thù domain là gì?',
        'Phương án dự phòng rủi ro là gì?'
      ],
      avoid: 'Scope dự án quá rộng không khả thi, Giải pháp chung chung thiếu chiều sâu, Thiếu kiểm soát tiến độ',
      bestMomentToAsk: 'Sau khi hiểu đề, trước khi Freeze MVP.',
      actionForTeam: [
        'Thiết lập scope MVP tối giản',
        'Phân chia công việc & daily sync liên tục',
        'Đảm bảo tính bảo mật cơ bản của domain'
      ]
    }
  },
  {
    id: 'tran-bao-thi',
    name: 'Trần Bảo Thi',
    role: 'Mentor',
    type: 'Non-tech Industry Judge',
    company: 'ZaloPay',
    title: 'Senior Product Manager (5+ năm kinh nghiệm phát triển sản phẩm dịch vụ tài chính & đầu tư)',
    linkedin: 'https://www.facebook.com/photo/?fbid=122117999253310881&set=pcb.122118000123310881',
    avatarUrl: '/images/tran-bao-thi.png',
    expertise: [
      'Digital Product Management',
      'Data-driven Decision Making',
      'Cross-functional Leadership',
      'Financial Services & Payment Systems'
    ],
    mostCaresAbout: [
      'Các chỉ số đo lường hiệu quả kinh doanh của sản phẩm (Business Metrics)',
      'Phương pháp sử dụng dữ liệu để đưa ra các quyết định thiết kế tính năng',
      'Trải nghiệm người dùng (UX) trong các giao dịch tài chính/thanh toán'
    ],
    highlyValues: [
      'Sản phẩm có định hướng đo lường dữ liệu rõ ràng (data-driven tracking)',
      'Giải quyết bài toán tài chính/đầu tư một cách đơn giản, tin cậy và an toàn',
      'Khả năng phối hợp nhịp nhàng giữa công nghệ và giá trị kinh doanh'
    ],
    deductions: [
      'Quyết định tính năng sản phẩm dựa trên cảm tính thay vì dữ liệu hoặc nghiên cứu',
      'Giao diện thanh toán/giao dịch rườm rà, thiếu tin cậy cho người dùng',
      'Thiếu mô hình đo lường hiệu quả hoặc chỉ số sức khỏe của sản phẩm'
    ],
    likelyQuestions: [
      'Bạn sử dụng những dữ liệu hoặc chỉ số nào để chứng minh tính hiệu quả của giải pháp này?',
      'Giao dịch tài chính hoặc luồng đầu tư trong app của bạn được bảo mật và tối ưu trải nghiệm như thế nào?',
      'Làm thế nào để bạn đo lường được mức độ hài lòng và giữ chân khách hàng (retention)?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Solution',
      'Trước khi Pitch'
    ],
    bestQuestionsToAsk: [
      'Làm thế nào để thiết kế một hệ thống tracking dữ liệu hành vi người dùng tinh gọn nhất trong giai đoạn hackathon nhằm phục vụ cho bài Pitch?',
      'Từ góc nhìn tại ZaloPay, những yếu tố UX nào quan trọng nhất để tạo dựng niềm tin và sự an tâm cho người dùng khi sử dụng dịch vụ tài chính số?'
    ],
    actionForTeam: [
      { id: 'act-thi-1', text: 'Lập danh sách các Key Performance Indicators (KPIs) và chỉ số sản phẩm cần đo lường', checked: false },
      { id: 'act-thi-2', text: 'Thiết kế luồng giao dịch/thanh toán tối giản và đáng tin cậy', checked: false },
      { id: 'act-thi-3', text: 'Chuẩn bị phần trình bày về kế hoạch thu thập dữ liệu kiểm chứng (data tracking plan)', checked: false }
    ],
    insights: [],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Product Management · Data-driven decisions · Fintech/Payments · ZaloPay',
      likelyCaresAbout: 'Chỉ số đo lường dữ liệu, Trải nghiệm giao dịch tài chính an toàn, Data-driven UX',
      likelyQuestions: [
        'Đo lường hiệu quả bằng số liệu gì?',
        'Bảo mật & tối ưu luồng giao dịch thế nào?',
        'Cách đo lường sự hài lòng/retention của user?'
      ],
      avoid: 'Thiết kế tính năng dựa trên cảm tính, Luồng thanh toán rườm rà thiếu tin cậy, Không có chỉ số đo lường',
      bestMomentToAsk: 'Sau khi chốt Solution, trước khi Pitch.',
      actionForTeam: [
        'Xác định các KPIs sản phẩm cốt lõi',
        'Tối ưu hóa UI/UX luồng giao dịch',
        'Thiết lập kế hoạch data tracking'
      ]
    }
  },
  {
    id: 'viet-pham',
    name: 'Việt Phạm',
    role: 'Mentor',
    type: 'Technical Judge',
    company: 'DopikAI',
    title: 'AI Engineer, cựu Research Engineer tại SMU & tốt nghiệp Thạc sĩ tại University College Cork (Ireland)',
    linkedin: 'https://www.facebook.com/photo/?fbid=122117998785310881&set=pcb.122118000123310881',
    avatarUrl: '/images/viet-pham.png',
    expertise: [
      'Multi-agent LLM Systems',
      'Tool-use Orchestration',
      'Automated Data Pipelines',
      'Autonomous AI Agents'
    ],
    mostCaresAbout: [
      'Thiết kế kiến trúc và cơ chế điều phối của hệ thống Multi-Agent',
      'Cách thức AI Agent gọi và tương tác với các công cụ bên ngoài (Tool-use/Function Calling)',
      'Sự tự động hóa và độ ổn định của data pipeline'
    ],
    highlyValues: [
      'Hệ thống AI tự hành hoạt động chính xác với cơ chế error handling tốt',
      'Sử dụng function calling/tool-use một cách mượt mà và logic',
      'Thiết kế hệ thống multi-agent có phân quyền và phân vai trò rõ ràng'
    ],
    deductions: [
      'Multi-agent hoạt động lỏng lẻo, dễ bị vòng lặp vô hạn (infinite loops)',
      'Thiết kế tool-use thiếu kiểm soát bảo mật hoặc không tối ưu hóa prompt gọi tool',
      'Data pipeline thủ công, dễ đứt gãy hoặc không có cơ chế tự động hóa'
    ],
    likelyQuestions: [
      'Cơ chế điều phối (orchestration) giữa các AI Agent của bạn được thiết kế thế nào để tránh xung đột hoặc lặp vô hạn?',
      'Bạn tối ưu hóa việc gọi công cụ (tool-use) cho Agent như thế nào để giảm latency và cost?',
      'Data pipeline tự động của bạn xử lý dữ liệu lỗi hoặc không cấu trúc thế nào?'
    ],
    bestMomentToAsk: [
      'Sau khi chốt Architecture',
      'Sau khi AI chạy được'
    ],
    bestQuestionsToAsk: [
      'Làm thế nào để thiết lập cơ chế giám sát (guardrails) hiệu quả nhằm ngăn chặn hành vi không mong muốn của các Autonomous AI Agent?',
      'Theo kinh nghiệm của anh, kiến trúc multi-agent nào là tối ưu nhất về mặt tài nguyên và hiệu năng khi triển khai thực tế?'
    ],
    actionForTeam: [
      { id: 'act-viet-pham-1', text: 'Vẽ sơ đồ luồng điều phối Multi-Agent (Agent Interaction Diagram)', checked: false },
      { id: 'act-viet-pham-2', text: 'Thiết lập cơ chế kiểm soát lỗi (fallback/error handling) khi Agent gọi tool', checked: false },
      { id: 'act-viet-pham-3', text: 'Cấu hình pipeline dữ liệu tự động cơ bản cho mô hình RAG', checked: false }
    ],
    insights: [],
    teamChanges: [],
    cheatSheet: {
      expertise: 'Multi-agent LLM · Tool-use Orchestration · Autonomous Agents · SMU/Ireland',
      likelyCaresAbout: 'Kiến trúc Multi-Agent, Cơ chế gọi Tool (Function Calling), Tự động hóa Data Pipeline',
      likelyQuestions: [
        'Làm sao tránh vòng lặp vô hạn của Agents?',
        'Tối ưu hóa tool-use như thế nào?',
        'Data pipeline tự động xử lý lỗi ra sao?'
      ],
      avoid: 'AI Agent bị loop vô hạn hoặc mất kiểm soát, Gọi tool cẩu thả tốn cost & latency, Pipeline dữ liệu đứt gãy thủ công',
      bestMomentToAsk: 'Sau khi chốt Architecture, sau khi AI chạy được.',
      actionForTeam: [
        'Vẽ sơ đồ luồng điều phối AI Agents',
        'Thiết lập error handling cho tool-use',
        'Cấu hình data pipeline tự động cơ bản'
      ]
    }
  }
];




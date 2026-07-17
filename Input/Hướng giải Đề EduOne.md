EduOne AI Platform – AI-First Architecture
Problem Statement

EduOne đang đối mặt với hai bottleneck lớn trong quá trình mở rộng nền tảng:

Learner Personalization: Mọi học viên đều học theo cùng một lộ trình, bất kể năng lực, tốc độ tiếp thu hay mục tiêu học tập khác nhau, dẫn đến tỷ lệ dropout cao (>50%).
Content Creation: Đội ngũ Curriculum và Content quá nhỏ để có thể sản xuất đủ học liệu chất lượng cao phục vụ nhu cầu cá nhân hóa ở quy mô lớn.

Thay vì xây dựng hai giải pháp riêng biệt, chúng tôi thiết kế một AI-First Learning Platform gồm hai vòng lặp thông minh (Learner Loop và Content Loop) cùng chia sẻ một lõi AI chung (Learner Intelligence).

AI không phải là một tính năng bổ sung, mà là trung tâm của toàn bộ hệ thống.

Design Philosophy

Toàn bộ hệ thống được xây dựng dựa trên một nguyên lý:

One AI Brain. Two Intelligent Loops.

Learner Loop tối ưu trải nghiệm học tập của từng học viên.
Content Loop tối ưu quy trình tạo và cải tiến học liệu.
Cả hai loop đều sử dụng chung Learner Intelligence và Content & Knowledge Base, giúp hệ thống liên tục học hỏi và tự cải thiện theo thời gian.
High-level Architecture
Learner Loop
│
▼
Evidence Collection
(Quiz, Coding, Feedback, Behavior...)
│
▼
Learner Intelligence (AI)
│
▼
Recommendation Engine (AI)
│
▼
Personalized Learning Experience
│
▼
New Learning Evidence
│
──────────────────────────────────────────

                 Content Loop

Learner Gaps / Curriculum Updates
│
▼
AI Content Draft
│
▼
Human Review
│
▼
Publish
│
▼
Content & Knowledge Base
▲
│
Recommendation Engine

1. Learner Loop

Learner Loop chịu trách nhiệm cá nhân hóa trải nghiệm học tập cho từng học viên.

Quá trình bắt đầu khi học viên tương tác với nền tảng:

Quiz
Coding Project
Exercises
Time on Content
Behavioral Signals
Teacher Feedback

Toàn bộ dữ liệu này trở thành Evidence để AI hiểu người học.

2. Learner Intelligence (AI)

Đây là "AI Brain" của toàn bộ hệ thống.

Learner Intelligence không chỉ lưu lịch sử học tập mà xây dựng một Learner Model dựa trên triết lý Competency-Based Education (CBE).

Thay vì chỉ đánh giá điểm số, AI mô hình hóa năng lực theo nhiều cấp:

Competency
│
├── Skill
│ ├── Indicator
│ ├── Indicator
│ └── Indicator
│
├── Skill
└── ...

Mỗi Skill được AI suy luận từ nhiều nguồn Evidence để xác định:

Current Mastery Level
Mastery Progress (%)
Knowledge Gaps
Strengths & Weaknesses
Learning Pace
Confidence Score
Learning Goals
Interests

Learner Model được cập nhật liên tục thông qua:

Bayesian Update
Bayesian Learning

Mỗi Evidence mới sẽ giúp AI điều chỉnh lại belief về năng lực thực sự của học viên.

Knowledge Gap Diagnosis

Knowledge Gap Diagnosis không chỉ xác định học viên yếu ở đâu.

AI còn thực hiện Backward Reasoning trên cấu trúc Competency để tìm nguyên nhân gốc.

Ví dụ:

Competency: Computational Thinking

Functions
│
▼
Loop
│
▼
Variables

Nếu học viên gặp khó khăn ở Functions, AI có thể phát hiện nguyên nhân thực sự nằm ở Variables và điều chỉnh lộ trình học phù hợp.

Điều này giúp Recommendation giải quyết root cause, thay vì chỉ xử lý symptom.

3. Recommendation Engine (AI)

Recommendation Engine sử dụng Learner Intelligence để lựa chọn Next Best Learning Experience cho từng học viên theo thời gian thực.

Việc Recommendation không chỉ dựa trên một yếu tố, mà tổng hợp nhiều tín hiệu:

Learner State
Competency Mastery
Knowledge Gaps
Difficulty & Pace
Learning Goals
Content Fit
AI Ranking

AI sẽ lựa chọn và xếp hạng nội dung phù hợp nhất từ Content & Knowledge Base.

Nếu nội dung phù hợp chưa tồn tại, Recommendation Engine sẽ kích hoạt Content Loop để tạo mới học liệu.

4. Content Loop

Content Loop chịu trách nhiệm mở rộng và cải tiến học liệu.

Nguồn yêu cầu tạo nội dung có thể đến từ:

Learner Gaps
New Topic Requests
Curriculum Updates
Teacher Feedback

AI sẽ sinh bản nháp đầu tiên bao gồm:

Lesson Outline
Exercises
Quiz
Explanation
Coding Examples
Rubrics
Answer Keys

AI đóng vai trò AI Copilot cho đội ngũ Curriculum thay vì thay thế giáo viên.

5. Human Review

Tất cả nội dung do AI tạo ra đều phải đi qua bước Human Review trước khi được sử dụng.

Giáo viên hoặc Curriculum Team sẽ:

Accuracy Check
Edit & Improve
Pedagogical Validation
Age-appropriate Review (K-12)
Language Review

Chỉ những nội dung đã được phê duyệt mới được phép xuất bản.

Điều này đảm bảo chất lượng học liệu và giữ con người là người chịu trách nhiệm cuối cùng.

6. Content & Knowledge Base

Toàn bộ học liệu đã được kiểm duyệt sẽ được lưu vào Content & Knowledge Base.

Bao gồm:

Lessons
Exercises
Quizzes
Videos
Coding Projects
Resources

Knowledge Base không chỉ là nơi lưu trữ nội dung mà còn là nguồn dữ liệu để Recommendation Engine lựa chọn nội dung phù hợp nhất cho từng học viên.

Điều này giúp hệ thống ngày càng phong phú mà không phải tạo lại từ đầu.

Closed-loop Intelligence

Điểm khác biệt lớn nhất của hệ thống là hai vòng lặp hoạt động đồng thời và hỗ trợ lẫn nhau.

Learner Loop liên tục tạo ra dữ liệu mới về người học.

↓

AI hiểu rõ hơn Competency của từng học viên.

↓

Recommendation Engine quyết định trải nghiệm học tập phù hợp nhất.

↓

Nếu thiếu học liệu phù hợp, AI kích hoạt Content Loop.

↓

Content Loop tạo học liệu mới.

↓

Giáo viên kiểm duyệt.

↓

Nội dung được bổ sung vào Knowledge Base.

↓

Recommendation Engine có thêm học liệu để phục vụ các học viên trong tương lai.

Hai vòng lặp này tạo thành một AI-native adaptive learning ecosystem, nơi hệ thống không chỉ cá nhân hóa việc học mà còn liên tục mở rộng năng lực của chính mình theo thời gian.

##Core Design Principles##

Giải pháp được xây dựng dựa trên 5 nguyên tắc:

1. Competency-Based Education – AI mô hình hóa người học theo Competency → Skills → Indicators thay vì chỉ dựa trên điểm số.
2. Evidence-driven Intelligence – Learner Model được xây dựng từ nhiều nguồn Evidence khác nhau như Quiz, Coding, Feedback và Behavioral Signals.
3. Continuous Bayesian Learning – Learner Model liên tục được cập nhật thông qua Bayesian Update và Bayesian Learning khi có dữ liệu mới.
4. Human-in-the-loop – AI hỗ trợ tạo và cá nhân hóa học liệu, trong khi giáo viên vẫn giữ vai trò kiểm duyệt và phê duyệt cuối cùng.
5. Dual Closed-loop Architecture – Learner Loop và Content Loop liên tục bổ sung dữ liệu cho nhau, giúp nền tảng ngày càng thông minh hơn, cá nhân hóa tốt hơn và mở rộng quy mô mà không cần tăng tương ứng nguồn lực vận hành.

# Tiêu chuẩn sinh câu hỏi cho Giám khảo & Mentor (A5_Questions Standards)

## Giới thiệu
Tài liệu này quy định các tiêu chuẩn và ma trận logic để sinh ra bộ câu hỏi dự đoán ("Các câu hỏi họ sẽ đặt ra") và câu hỏi gợi ý ("Câu hỏi chất lượng gợi ý hỏi họ") trong Playbook của từng Giám khảo/Mentor.

**Mặc định bối cảnh (Project Stage):** Demo MVP lúc Pitching chung kết.

---

## Ma trận Logic Sinh Câu hỏi
Thay vì chỉ dựa vào 1 luồng logic (Profile của giám khảo), bộ câu hỏi chất lượng cao phải được sinh ra từ sự giao thoa của 4 tiêu chí cốt lõi sau:

### 1. Dựa trên Profile Cá nhân (Chuyên môn của Giám khảo/Mentor)
Đây là nền tảng cốt lõi để cá nhân hóa câu hỏi cho từng người.
* **Expertise (Lĩnh vực chuyên sâu):** Câu hỏi đánh thẳng vào chuyên môn của họ (VD: Privacy ML, System Architecture, MLOps, Business Strategy).
* **Most Cares About & Highly Values:** Đặt câu hỏi xoay quanh những điều họ kỳ vọng nhìn thấy ở một sản phẩm xuất sắc.
* **Deductions:** Đặt các câu hỏi "bẫy" để kiểm tra xem team có mắc phải những sai lầm ngớ ngẩn (red flags) mà họ thường trừ điểm cực nặng hay không (VD: lộ dữ liệu cá nhân, kiến trúc chỉ chạy được trên slide).

### 2. Dựa trên Context Bài toán Cụ thể (Đề bài EduOne)
Các câu hỏi chuyên môn không được chung chung (stateless) mà phải được "gắn" trực tiếp vào ngữ cảnh đề bài mà team đang giải quyết.
* **Context đặc thù của dự án:** 
  * Tổ chức vận hành: STEAM for Vietnam (Phi lợi nhuận, nguồn lực hạn chế).
  * Nền tảng: EduOne.
  * Đối tượng End-user: Học sinh K-12 tại Việt Nam và Giáo viên tình nguyện.
  * Mục tiêu giải quyết: Cá nhân hóa lộ trình học & Tự động hóa sản xuất nội dung bài giảng bằng AI.
* **Ví dụ ứng dụng:**
  * ❌ *Câu hỏi chung chung:* "Bạn bảo mật dữ liệu thế nào?"
  * ✅ *Câu hỏi có Context:* "Với đối tượng học sinh K-12 trên EduOne, thuật toán của bạn nặc danh hóa dữ liệu hành vi học tập ra sao trước khi đưa qua API của bên thứ ba để đảm bảo tuân thủ quyền trẻ em?"

### 3. Dựa trên Rubrics Cuộc thi (Tiêu chí chấm điểm VAIC 2026)
Giám khảo không chỉ hỏi về chuyên môn sâu của họ, họ còn bị ràng buộc bởi bảng điểm chung của Ban tổ chức. Cần có các câu hỏi bọc lót chéo (cross-disciplinary) dựa trên 6 tiêu chí Rubrics.
* **6 Trụ cột Rubrics:**
  1. Technical Implementation & Engineering Depth
  2. AI-Native Architecture & Innovation
  3. Business Viability & Pilot Pathway
  4. AI-Native UX & Design Thinking
  5. AI Safety, Grounding & Trust
  6. Presentation, Demo & Defensibility
* **Ví dụ ứng dụng:**
  * Một giám khảo thuần Kỹ thuật (Technical) vẫn sẽ hỏi về Rubric #3 (Business/Cost): *"Kiến trúc multi-agent của bạn rất xịn, nhưng chi phí hạ tầng (cost per query) để scale cho 50.000 học sinh EduOne có khả thi với ngân sách của một tổ chức phi lợi nhuận không?"*
  * Một giám khảo thuần Business vẫn có thể hỏi về Rubric #4 (UX): *"Làm sao bạn chứng minh được giao diện AI-generated này thực sự giúp giảm thời gian soạn bài của giáo viên tình nguyện xuống một nửa?"*

### 4. Dựa trên Hướng giải đề (Solution Architecture) của Team
Câu hỏi của Giám khảo cần phải "xoáy" trực tiếp vào giải pháp công nghệ cụ thể mà team đang build để kiểm tra tính bảo vệ luận điểm (Defensibility).
* **Context Solution của Team:** 
  * Kiến trúc cốt lõi: AI-First Learning Platform với Dual Closed-loop (Learner Loop + Content Loop).
  * Công nghệ sử dụng: Bayesian Update, Bayesian Learning, Backward Reasoning dựa trên Competency-Based Education (CBE).
* **Ví dụ ứng dụng:**
  * ❌ *Câu hỏi bỏ qua Solution:* "Làm sao hệ thống xử lý được nghẽn mạng?"
  * ✅ *Câu hỏi bám sát Solution:* "Kiến trúc của bạn có tính năng Backward Reasoning trên Competency Graph. Thuật toán này có thể rất tốn kém tài nguyên tính toán, bạn giải quyết vấn đề Cost Optimization như thế nào khi lượng truy cập tăng vọt?"
  * ✅ *Câu hỏi bám sát Solution:* "Việc dùng chung 1 AI Brain cho cả Learner Loop và Content Loop có nguy cơ nào dẫn đến Data Poisoning (ô nhiễm dữ liệu) khi học sinh cố tình upload bài giải sai không?"

---

## Tiêu chuẩn đầu ra (Checklist)
Mỗi câu hỏi được đưa vào Playbook của Giám khảo/Mentor cần thỏa mãn các checklist sau:
- [ ] Phân loại rõ: Giám khảo (Judge) không có phần "Câu nên hỏi họ", chỉ Mentor mới có.
- [ ] Câu hỏi có sử dụng từ khóa liên quan trực tiếp đến đề bài (EduOne, học sinh, giáo viên, K-12, phi lợi nhuận) chưa?
- [ ] Câu hỏi có nhắc đến ít nhất 1 keyword trong Hướng giải đề của team (Dual Closed-loop, Bayesian Update, Competency Graph...) chưa?
- [ ] Câu hỏi có khớp với ít nhất 1 tiêu chí trong Rubric chính thức chưa?
- [ ] Câu hỏi có phản ánh đúng "Tone & Voice" chuyên môn (Expertise) của vị giám khảo/mentor đó chưa?
- [ ] (Đối với câu hỏi gợi ý cho team hỏi Mentor) Câu hỏi có phù hợp để hỏi ở giai đoạn Demo MVP/Pitching chung kết không (tập trung vào tối ưu, scale, bảo vệ luận điểm thay vì đi tìm ý tưởng)?

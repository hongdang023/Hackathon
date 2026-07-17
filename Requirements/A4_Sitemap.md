# 🗺️ Conan School Hackathon Workspace Sitemap

Hệ thống sitemap định hướng cấu trúc các trang và luồng luân chuyển thông tin của ứng dụng website quản lý thông tin nội bộ của đội thi tại **VAIC 2026**.

---

## 📐 Kiến trúc Sitemap Tổng quan

```mermaid
graph TD
    Home["🏠 Dashboard (/)"] --> JudgesPlaybookList["⚖️ Judges Playbooks (/judges)"]
    Home --> MentorsPlaybookList["🤝 Mentors Playbooks (/mentors)"]
    Home --> TimelinePage["📅 Timeline (/timeline)"]
    Home --> CopilotPage["🧠 AI Copilot (/copilot)"]

    JudgesPlaybookList --> JudgeDetail["🔍 Chi tiết Judge (/judges/:id)"]
    JudgesPlaybookList --> JudgeAdd["➕ Thêm mới Judge (/judges/new)"]
    JudgeDetail --> JudgeEdit["✏️ Chỉnh sửa & Notes (/judges/:id/edit)"]

    MentorsPlaybookList --> MentorDetail["🔍 Chi tiết Mentor (/mentors/:id)"]
    MentorsPlaybookList --> MentorAdd["➕ Thêm mới Mentor (/mentors/new)"]
    MentorDetail --> MentorEdit["✏️ Chỉnh sửa & Notes (/mentors/:id/edit)"]
```

---

## 📂 Chi tiết cấu trúc các trang & Chức năng

### 1. 🏠 Dashboard (Trang chủ)

- **Đường dẫn:** `/` hoặc `/dashboard`
- **Chức năng:**
  - Countdown timer đếm ngược 48 giờ.
  - Hiển thị 01 công việc đang làm hiện tại và 01 Checkpoint sắp tới giúp team tập trung tối đa.
  - Cung cấp shortcut truy cập nhanh đến phân tích chiến lược của AI Copilot.

### 2. ⚖️ Judges Playbook

- **Đường dẫn:** `/judges`
- **Chức năng:**
  - **Danh sách (`/judges`):** Hiển thị danh sách giám khảo, bộ lọc (filter) chỉ dành riêng cho các nhóm giám khảo (Technical Judge, Non-tech Industry Judge, Senior Judge) để tránh mix với mentor.
  - **Thêm mới (`/judges/new`):** Giao diện thêm mới và phân loại giám khảo.
  - **Chi tiết (`/judges/:id`):** Giao diện hiển thị biểu mẫu Winning Playbook theo đúng template chuẩn của giám khảo.
  - **Cập nhật (`/judges/:id/edit`):** Cho phép ghi chú nhanh (After Meeting Notes, Insights).

### 3. 🤝 Mentors Playbook

- **Đường dẫn:** `/mentors`
- **Chức năng:**
  - **Danh sách (`/mentors`):** Hiển thị danh sách mentor, bộ lọc (filter) chỉ dành riêng cho các nhóm mentor (Domain Expert, Technical Mentor) độc lập hoàn toàn với giám khảo.
  - **Thêm mới (`/mentors/new`):** Giao diện thêm mới và phân loại mentor.
  - **Chi tiết (`/mentors/:id`):** Giao diện hiển thị biểu mẫu Winning Playbook theo đúng template chuẩn của mentor.
  - **Cập nhật (`/mentors/:id/edit`):** Cho phép ghi chú nhanh sau khi nhận tư vấn.

### 4. 📅 Timeline (Lịch trình thực tế)

- **Đường dẫn:** `/timeline`
- **Chức năng:**
  - Hiển thị lịch trình đầy đủ từ ngày 17/07 đến 19/07.
  - Đánh dấu mốc thời gian thực hiện các Checkpoint quan trọng của BTC (màu cam) và nội bộ Team (màu xanh dương).
  - Liệt kê các yêu cầu tài liệu cần nộp ở từng mốc.

### 5. 🧠 AI Copilot (Strategy Copilot)

- **Đường dẫn:** `/copilot`
- **Chức năng:**
  - **Rubric Gap Analyzer:** Nhập/Đánh giá điểm tự đánh giá (self-assessment) của team cho 6 tiêu chí Rubric để xác định tiêu chí yếu nhất.
  - **Mentor Matcher:** Đề xuất tự động mentor phù hợp nhất trong danh sách Playbook dựa trên kỹ năng của họ giúp giải quyết tiêu chí yếu nhất.
  - **Judge Simulator:** Mô phỏng phản biện của các giám khảo đã nhập, đưa ra các câu hỏi khó và khuyến nghị hành động tương ứng để bảo vệ giải pháp.

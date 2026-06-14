# Hệ Thống Website Xem Phim Trực Tuyến (MovieWeb)

Dự án là một hệ thống website xem phim trực tuyến hiện đại, cho phép người dùng tìm kiếm, xem phim chất lượng cao, quản lý danh sách yêu thích và bình luận. Hệ thống cũng tích hợp trang quản trị (Admin) dành cho người quản lý để cập nhật phim, thể loại và người dùng.

* **Backend:** Node.js, Express, MongoDB
* **Frontend:** React (Vite), Zustand, Tailwind CSS, Axios

---

## 1. Yêu cầu hệ thống

### 1.1. Yêu cầu phần cứng
* **CPU:** Dual-core 2.0 GHz trở lên.
* **RAM:** Tối thiểu 4GB (Khuyến nghị 8GB để khởi chạy mượt mà cả Backend, Frontend và Database cùng lúc).
* **Ổ cứng:** Còn trống tối thiểu 5GB để chứa mã nguồn, các thư viện (`node_modules`).

### 1.2. Yêu cầu phần mềm
* **Hệ điều hành:** Windows, macOS, hoặc Linux.
* **Node.js:** Phiên bản 18.x trở lên.
* **Cơ sở dữ liệu:** MongoDB (hoặc PostgreSQL tùy thuộc vào cấu hình của bạn).
* **Công cụ quản lý phiên bản:** Git.
* **Trình duyệt web:** Google Chrome, Edge, Firefox.
* **IDE/Text Editor:** Visual Studio Code.

---

## 2. Cài đặt môi trường

1. **Cài đặt Node.js:** Tải và cài đặt tại [Node.js Official Website](https://nodejs.org/).
2. **Cài đặt Git:** Tải và cài đặt tại [Git Official Website](https://git-scm.com/).
3. **Cài đặt Database:** Khởi chạy MongoDB Local hoặc chuẩn bị chuỗi kết nối MongoDB Atlas.

---

## 3. Bản sao dự án (Clone) từ GitHub

Mở Terminal (hoặc Command Prompt, Git Bash) trên máy tính và chạy các lệnh sau:

```bash
git clone [https://github.com/Mahntri/MovieWeb.git](https://github.com/Mahntri/MovieWeb.git)
cd MovieWeb
4. Cài đặt và Cấu hình Backend
Bước 4.1: Di chuyển vào thư mục backend và cài đặt thư viện
Bash
cd be
npm install
Bước 4.2: Cấu hình biến môi trường
Tạo một file .env nằm trong thư mục be và cấu hình các thông số cần thiết:

Đoạn mã
PORT=5000
DATABASE_URL="mongodb://localhost:27017/movieweb_db"
JWT_SECRET="your_super_secret_jwt_key"
Bước 4.3: Khởi chạy Backend
Bash
npm run dev
Backend sẽ khởi chạy tại cổng 5000 (http://localhost:5000).

5. Cài đặt và Cấu hình Frontend
Mở một cửa sổ Terminal mới (giữ Terminal của backend tiếp tục chạy), từ thư mục gốc của dự án MovieWeb, di chuyển vào thư mục fe:

Bước 5.1: Di chuyển và cài đặt thư viện
Bash
cd fe
npm install
Bước 5.2: Khởi chạy Frontend
Bash
npm run dev
Frontend sẽ khởi chạy thành công (thường là tại http://localhost:5173).

6. Hướng dẫn sử dụng & Các tính năng chính
6.1. Giao diện Người dùng (Client)
Trang chủ: Hiển thị danh sách phim mới, phim xem nhiều, hot banner đề xuất.

Tìm kiếm & Lọc: Tìm kiếm phim theo tên, lọc phim theo Thể loại, Năm phát hành.

Trang chi tiết phim: Xem thông tin phim, danh sách tập, đánh giá/bình luận.

Trình phát phim (Player): Trình phát video mượt mà, hỗ trợ chuyển tập nhanh.

Cá nhân: Đăng ký, Đăng nhập và Lưu lại danh sách phim yêu thích.

6.2. Giao diện Quản trị (Admin Dashboard)
Quản lý Phim: Thêm, sửa, xóa phim, cập nhật các tập phim và link video.

Quản lý Thể loại: Quản lý các phân loại phim (Hành động, Tình cảm...).

Quản lý Người dùng: Quản lý tài khoản và phân quyền hệ thống (Admin / User).

Chúc bạn phát triển và vận hành ứng dụng xem phim hiệu quả!

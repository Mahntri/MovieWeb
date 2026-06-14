# MovieWeb - Hệ Thống Website Xem Phim Trực Tuyến

MovieWeb là hệ thống website xem phim trực tuyến hiện đại, cho phép người dùng tìm kiếm, xem phim chất lượng cao, quản lý danh sách yêu thích và tham gia bình luận. Hệ thống cũng cung cấp trang quản trị (Admin Dashboard) giúp quản lý phim, thể loại và người dùng một cách dễ dàng.

## Công Nghệ Sử Dụng

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication

### Frontend

* React (Vite)
* Zustand
* Tailwind CSS
* Axios

---

# Yêu Cầu Hệ Thống

## 1. Yêu Cầu Phần Cứng

| Thành phần | Yêu cầu                         |
| ---------- | ------------------------------- |
| CPU        | Dual-core 2.0 GHz trở lên       |
| RAM        | Tối thiểu 4GB (Khuyến nghị 8GB) |
| Ổ cứng     | Tối thiểu 5GB dung lượng trống  |

## 2. Yêu Cầu Phần Mềm

* Windows, macOS hoặc Linux
* Node.js 18.x trở lên (khuyến nghị phiên bản LTS mới nhất)
* MongoDB 4.x trở lên hoặc MongoDB Atlas
* Git
* Google Chrome, Firefox hoặc Microsoft Edge
* Visual Studio Code (khuyến nghị)

---

# Cài Đặt Môi Trường

## Cài Đặt Node.js

Tải tại:

https://nodejs.org

## Cài Đặt MongoDB

Có thể sử dụng:

* MongoDB Community Server (Local)
* MongoDB Atlas (Cloud)

## Cài Đặt Git

Tải tại:

https://git-scm.com

---

# Clone Dự Án

```bash
git clone https://github.com/Mahntri/MovieWeb.git
cd MovieWeb
```

> **Lưu ý:** Thay URL trên bằng repository GitHub của bạn nếu đã fork hoặc clone từ nguồn khác.

---

# Cấu Hình Database

Khởi động MongoDB trên máy tính hoặc chuẩn bị sẵn MongoDB Atlas.

Di chuyển vào thư mục Backend:

```bash
cd be
```

Tạo file môi trường:

```bash
cp .env.example .env
```

Nếu chưa có `.env.example`, hãy tạo thủ công file `.env`.

Cấu hình nội dung:

```env
PORT=5000
DATABASE_URL=mongodb://localhost:27017/db_movieweb
JWT_SECRET=your_super_secret_jwt_key
```

> Thay đổi `DATABASE_URL` và `JWT_SECRET` phù hợp với môi trường của bạn.

Cài đặt dependencies cho Backend:

```bash
npm install
```

---

# Chạy Backend

Từ thư mục `be`:

```bash
npm run dev
```

Backend sẽ chạy tại:

```text
http://localhost:5000
```

---

# Chạy Frontend

Mở Terminal mới và di chuyển tới thư mục Frontend:

```bash
cd fe
```

Cài đặt dependencies:

```bash
npm install
```

Khởi chạy ứng dụng:

```bash
npm run dev
```

Frontend sẽ chạy tại:

```text
http://localhost:5173
```

---

# Hướng Dẫn Sử Dụng

## Người Dùng

### Đăng Ký & Đăng Nhập

* Tạo tài khoản mới.
* Đăng nhập để đồng bộ dữ liệu cá nhân.

### Xem Phim

* Xem phim trực tuyến chất lượng cao.
* Tìm kiếm phim theo tên.
* Lọc phim theo thể loại.

### Tương Tác

* Bình luận và đánh giá phim.
* Thêm phim vào danh sách yêu thích (Bookmark).

---

## Quản Trị Viên (Admin)

### Quản Lý Phim

* Thêm phim mới.
* Chỉnh sửa thông tin phim.
* Quản lý tập phim.
* Cập nhật nguồn video.

### Quản Lý Thể Loại

* Thêm, sửa, xóa thể loại phim.

### Quản Lý Người Dùng

* Xem danh sách người dùng.
* Quản lý tài khoản và quyền truy cập.

---

# Cấu Trúc Thư Mục

```text
MovieWeb
├── be/                 # Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── ...
│
├── fe/                 # Frontend
│   ├── src/
│   ├── public/
│   └── ...
│
└── README.md
```

---

Chúc bạn cài đặt và sử dụng phần mềm hiệu quả!

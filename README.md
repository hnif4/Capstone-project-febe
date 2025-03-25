# Trash to Cash - Backend

Backend API untuk aplikasi Trash to Cash. Kami mengembangkan proyek Trash to cash berdasarkan keterkaitan antara Green Economy dan Green Jobs,yaitu pertumbuhan ekonomi yang ramah lingkungan dan berkelanjutan untuk menciptakan lapangan kerja yang layak sekaligus menjaga kelestarian lingkungan.

## 🚀 Fitur
- Autentikasi pengguna (JWT)
- CRUD sampah (trash)
- Manajemen tantangan (challenges)
- Notifikasi pengguna
- Manajemen pesanan (orders)

## 📂 Struktur Folder
trash-to-cash-be/
│── config/          # Koneksi database
│── controllers/     # Logic API
│── models/          # Database Schema
│── routes/          # Routing API
│── middleware/      # Authentication & Authorization
│── utils/           # Template response
│── .env.example     # Contoh env (jangan commit yang asli!)
│── postman_collection.json  # Dokumentasi API
│── db_trashtocash.sql  # Dump database
│── server.js        # Main file
│── package.json     # Dependencies


## 🔧 Cara Menjalankan
1. **Clone repository**
   ```sh
   git clone https://github.com/hnif4/Capstone-project-febe
2. **Masuk ke folder backend**
   cd trash-to-cash-be

3. **install dependencies**
    npm install

4. **Buat file .env dari contoh**
    cp .env.example .env

5. **Jalankan server**
    -  npm start
    -  atau pakai nodemon npm run dev

## 🛠 Teknologi yang Digunakan
-  Node.js
- Express.js
- MySQL
- JWT untuk autentikasi
- Postman untuk uji API

## 📜 Dokumentasi API
Dokumentasi API tersedia dalam Postman Collection:
-  File: Trashtocash Api Tes.postman_collection.json
-  Bisa diimpor langsung ke Postman

© 2025 Trash to Cash CC25-SF039 Team 🚀


### **🔄 Cara Commit & Push ke GitHub**
```sh
git add README.md
git commit -m "Add README.md sesuai struktur folder"
git push origin development

# 🌐 Dynamic Portfolio Website (Full-Stack)

A complete personal portfolio website built using **Laravel (API)** and **React (Frontend)** with Tailwind CSS and content managed via **Filament Admin Panel**. It allows you to showcase your personal info, projects, skills, and contact details dynamically through an admin dashboard.

---

## 👨‍💻 Developed By

**Md. Sabbih Sarker**  
Department of CSE  
Khwaja Yunus Ali University

---

## 🚀 Features

- Dynamic content management (via Filament Admin)
- Laravel REST API for all content
- React frontend using Axios
- Tailwind CSS for clean UI
- Sections: Hero, About, Projects, Contact, Footer
- WhatsApp & Social links
- Fully responsive design

---

## 🧰 Technologies Used

| Backend         | Frontend     | Admin Panel     |
| --------------- | ------------ | ----------------|
| Laravel 12      | React 19     | Filament PHP     |
| PHP 8.x         | Axios        | Jetstream (optional) |
| MySQL           | React Hooks  | Laravel Media Library (optional) |

---

## 📸 Project Screenshots

<p align="center">
  <img src="https://raw.githubusercontent.com/skrsabbih/sabbih_portfolio_project/main/myportfolio_backend/public/assets/images/1.png" alt="Hero Section" width="250"/>
  <img src="https://raw.githubusercontent.com/skrsabbih/sabbih_portfolio_project/main/myportfolio_backend/public/assets/images/2.png" alt="About Section" width="250"/>
  <img src="https://raw.githubusercontent.com/skrsabbih/sabbih_portfolio_project/main/myportfolio_backend/public/assets/images/3.png" alt="Project Section" width="250"/>
</p>

---

## 🛠️ How to Run This Project

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/portfolio-project.git
cd sabbih_portfolio-project

### Step 2: Backend Setup (Laravel API)
cd backend  
composer install  
cp .env.example .env  
php artisan key:generate  
# Now configure your database credentials in `.env`  
php artisan migrate  
php artisan serve  
➡️ Laravel API will run at: http://127.0.0.1:8000

### Step 3: Frontend Setup (React)
cd ../frontend  
npm install  
npm run dev  
➡️ React frontend will run at: http://localhost:5173

---

## 📁 Image and CV Storage

Put your images and CV here:  
`backend/public/images/`


---

## ✅ Technologies Used

- Laravel 12 (REST API)
- React 19 (Frontend)
- Tailwind CSS (Styling)
- Axios (API Request)
- MySQL / MariaDB
- Vite (React bundler)

---

## 📌 Notes

- Ensure PHP, Composer, Node.js, npm, and MySQL are installed
- Push only required folders (e.g., `public/images/`) if needed for live server
- To stop the servers, press `Ctrl + C` in terminal

---

🙏 Thank You!

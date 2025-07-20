<h1 align="center">🛒 BuyNest — MERN E-Commerce Platform</h1>

<p align="center">
  <img src="https://img.shields.io/badge/stack-MERN-informational?style=flat&logo=javascript&color=4CAF50" />
  <img src="https://img.shields.io/badge/frontend-React-blue?logo=react" />
  <img src="https://img.shields.io/badge/backend-Express-black?logo=express" />
  <img src="https://img.shields.io/badge/database-MongoDB-green?logo=mongodb" />
  <img src="https://img.shields.io/badge/status-In%20Progress-blue" />
</p>

<p align="center"><i>A full-featured, responsive E-Commerce application built with the MERN stack. It includes a robust customer experience, an intuitive admin dashboard, and powerful product and order management tools.</i></p>

---

## 🌐 Live Demo

🚀 Deployment coming soon  

---

## ✨ Features

### 👥 Customer Side
- 🏠 **Home Page** — Featured products and responsive design
- 🛍️ **Browse Products** — Category filters, sorting, and search
- 📄 **Product Details** — Ratings, reviews, and variant options
- 🛒 **Shopping Cart** — Add/remove items, quantity updates
- 🚚 **Shipping Info** — Collect and validate delivery address
- 💳 **Checkout** — Confirm order and simulate payment

### 🔐 Admin Panel
- 📊 **Dashboard** — Order analytics and user overview
- ➕ **Add Product** — Form for title, pricing, images, variants
- 🛠️ **Edit/Delete Products** — Full CRUD operations
- 📑 **Manage Orders** — View all customer orders & statuses

---

## 📸 Screenshots

> Real interface previews of BuyNest. Theme: **Blue**

<div align="center">

### 🧠 Admin Dashboard
<img src="https://github.com/user-attachments/assets/dc9e594c-f63f-4824-8405-291e37b99dcc" alt="Dashboard" width="80%" />

### ➕ Add Product
<img src="https://github.com/user-attachments/assets/d2584615-d9aa-4e21-a157-f421765864cd" alt="Add Product" width="80%" />

### 🏠 Home Page
<img src="https://github.com/user-attachments/assets/91ec72e2-cfbf-4d3b-82ad-3adbf2563f32" alt="Home" width="80%" />

### 🛍️ Product Listing
<img src="https://github.com/user-attachments/assets/7662e533-bd6e-4601-acc9-a81d66c9de5c" alt="Products" width="80%" />

</div>

---

## ⚙️ Tech Stack

| Layer       | Tools & Frameworks                           |
|-------------|-----------------------------------------------|
| **Frontend**| React, Tailwind CSS, Axios                   |
| **Backend** | Node.js, Express.js                          |
| **Database**| MongoDB (MongoDB Atlas), Mongoose            |
| **Auth**    | JSON Web Tokens (JWT)                        |
| **Cloud**   | Cloudinary (image upload), Vercel (planned)  |
| **Dev Tools**| Git, VS Code, Postman, Concurrently         |

---

## 🛠️ Getting Started

### 📁 Project Structure

```
BuyNest/
│
├── frontend/         # React client
├── backend/          # Node.js + Express API
├── .env.example      # Environment variables
├── package.json      # Root scripts (dev, start)
└── README.md
```

### 🚀 Installation Steps

```bash
# Clone the repository
git clone https://github.com/your-username/buynest.git
cd buynest

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Setup .env file
cp ../.env.example ../.env  # Or manually add your config

# Run the app (root level, with concurrently)
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 📚 What I Learned

- Designing real-world REST APIs with Express & Mongoose
- Handling secure role-based access (User vs Admin)
- React state management with global stores
- Uploading files with Cloudinary
- Creating reusable components with Tailwind CSS
- Building multi-step forms (shipping, checkout)
- MongoDB queries for filtering, pagination, and relations

---

## 🐞 Known Issues

- Stripe integration pending (no account yet)
- Email notification system not implemented

---

## 🧑‍🎓 About Me

I'm **Umar Farooq**, a 20-year-old CS undergraduate from Pakistan (UET Faisalabad), currently holding a 3.8 CGPA. I'm deeply passionate about web development and eager to contribute to real-world projects.

This project is a demonstration of my MERN full-stack skills and my ambition to build scalable, production-level applications from scratch.

---

## 🎓 Looking for Opportunities

I’m actively seeking:

- 💼 Remote internships in web development
- 🌐 Global mentorship or coding scholarships
- 🤝 Collaborations on open-source or startup MVPs

If you're hiring, mentoring, or supporting students — I'd love to connect. 🙏

---

## 📬 Contact

- 📧 Email: umarfarooq.sudo@gmail.com  
- 💼 LinkedIn: [linkedin.com/in/umar-farooq-329947371](https://www.linkedin.com/in/umar-farooq-329947371/)
- 🐙 GitHub: [github.com/umarmaqsood](https://github.com/umarmaqsood)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

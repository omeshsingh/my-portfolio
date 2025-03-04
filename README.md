🚀 Personal Portfolio Website
A fully responsive and animated personal portfolio website built using React, React-Bootstrap, and Animate.css.

🔹 Features
✔️ Modern & Responsive Design
✔️ Interactive UI with CSS animations
✔️ Dynamic Banner Section with Rotating Text
✔️ Skills Showcase with Auto-Scrolling Carousel
✔️ Projects Section with Categorization Tabs
✔️ Contact Form with Email Functionality
✔️ Fun Facts Section for an Engaging Experience

🛠 Built With
React (Frontend Framework)
React-Bootstrap (CSS Framework for UI Components)
Animate.css (CSS Animations Library)
React-Multi-Carousel (For Skills Section)
React-On-Screen (For Scroll-Based Animations)
Nodemailer (Backend) – (For sending emails via contact form)


📂 Folder Structure

personal-portfolio/
│── src/                   # Main React Source Code  
│   ├── assets/            # Images & SVGs  
│   ├── components/        # React Components (Navbar, Banner, Skills, etc.)  
│   ├── styles/            # CSS & Styling Files  
│   ├── App.js             # Main Application Entry  
│   ├── index.js           # React Root File  
│── public/                # Static Files (index.html, favicon)  
│── backend/               # Node.js Backend (Handles Emails)  
│── package.json           # Project Dependencies  
│── README.md              # Project Documentation  


🚀 Getting Started
1️⃣ Clone This Repository
sh
Copy
Edit
git clone https://github.com/your-username/your-portfolio.git
cd personal-portfolio


2️⃣ Install Dependencies
sh
Copy
Edit
npm install


3️⃣ Start the React App
sh
Copy
Edit
npm start
Runs the app in development mode at http://localhost:3000.

4️⃣ Start the Backend Server (For Contact Form)
Navigate to the backend folder and run:

sh
Copy
Edit
cd backend
node server.js
This will start the backend at http://localhost:5000.

🛠 Available Scripts
🔹 Run Tests
sh
Copy
Edit
npm test
Launches the test runner in interactive watch mode.

🔹 Build for Production
sh
Copy
Edit
npm run build
Creates a production-ready optimized build in the build folder.

🌐 Deployment
🔹 Frontend Deployment
Host on Vercel, Netlify, GitHub Pages, or Firebase Hosting
sh
Copy
Edit
npm run build
Upload the /build folder to your hosting platform.

🔹 Backend Deployment (For Contact Form)
Deploy the Node.js backend on Render, Railway, DigitalOcean, or AWS.

# Job Portal

## 📌 Project Overview

Job Portal is a modern web application built using React and Vite. It facilitates job listings and applications, providing an intuitive interface for job seekers and employers, ensuring a seamless hiring process.

## 🖼️ Preview

![Job Portal Screenshot](public/landing-page.png)

## 🚀 Features

- **User authentication** using Clerk for secure login and access control
- **Job listing** with detailed descriptions and categories
- **Search and filter functionality** to find relevant job postings
- **Employer dashboard** to manage job postings and applications
- **Applicant tracking system** for seamless hiring management
- **Responsive design** with Tailwind CSS ensuring accessibility across all devices
- **React Router** for seamless navigation

## 🔗 Live Demo

Check out the live version of Job Portal here: [Live Site](https://job-portal-five-iota.vercel.app/)

## 🛠 Installation & Setup

To set up and run the project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (Latest LTS version recommended)
- **npm** or **yarn** for package management

### Steps to Run

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/job-portal.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd job-portal
   ```
3. **Install dependencies:**
   ```sh
   npm install  # or yarn install
   ```
4. **Configure environment variables:**
   Create a `.env` file in the root directory and define the necessary environment variables:
   ```sh
   VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
   VITE_SUPABASE_URL=<your-supabase-url>
   VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>
   ```
5. **Run the development server:**
   ```sh
   npm run dev  # or yarn dev
   ```
6. Open `http://localhost:5173` in your browser to view the application.

## 📂 Project Structure

```
job-portal/               
   ├── src/               # Main application source code
       ├── api/          # API-related functions
       ├── assets/       # Static assets (images, icons, etc.)
       ├── components/   # Reusable UI components
       ├── data/         # Mock data and utility functions
       ├── hooks/        # Custom React hooks
       ├── layouts/      # Layout components
       ├── lib/          # Utility functions and helpers
       ├── pages/        # Application pages
       ├── utils/        # General utility functions
       ├── App.jsx       # Main application component
       ├── main.jsx      # Entry point for React
   ├── public/            # Public assets
   ├── index.html         # Main HTML file
   ├── package.json       # Project metadata and dependencies
   ├── vite.config.js     # Vite configuration
   ├── tailwind.config.js # Tailwind CSS configuration
   ├── .env               # Environment variables (excluded from Git)
```

## 🏰 Technologies Used

- **React** - JavaScript library for building user interfaces
- **Vite** - Fast development build tool
- **Clerk** - User authentication and management
- **Supabase** - Backend services for authentication and database management
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **React Hook Form** - Form handling
- **Lucide Icons** - Icon library for UI enhancement

## 🤝 Contributing

We welcome contributions to enhance the project! To contribute:

1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Implement your changes and commit.
4. Push to your forked repository and submit a pull request.

## 📜 License

This project is licensed under the MIT License.


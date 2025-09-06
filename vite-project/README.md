# 🖼️ Image Enhancer

An AI-powered web application built with **React + Tailwind CSS** that allows users to upload an image and enhance it using an external **AI Image Enhancer API**.  
It provides a smooth user experience with **real-time previews**, **loading indicators**, and **dark/light mode toggle**.

---

## 📸 Screenshot

![App Screenshot](./Screenshot(989).png)

---

## 🚀 Features

- 📤 Upload an image (instant local preview).  
- ⚡ Enhance the image using AI via API integration.  
- 🌓 Dark/Light mode with persistence via `localStorage`.  
- ⏳ Loading spinner while processing.  
- 📊 Side-by-side comparison of original vs. enhanced image.  
- ✅ Error handling for API failures.  

---

## 🛠️ Tech Stack

- **React (Vite)** — Frontend framework  
- **Tailwind CSS** — Styling  
- **Axios** — API requests  
- **Lucide-React** — Icons  

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/image-enhancer.git
   cd image-enhancer

Install dependencies:

npm install


Create a .env file in the root folder and add your API key:

VITE_IMAGE_ENHANCER_API_KEY=your_api_key_here


Run the development server:

npm run dev


Build for production:

npm run build

src/
├── App.jsx                 # Main layout & theme handling
├── main.jsx                # App entry point
├── index.css               # Tailwind base styles
├── components/
│   ├── Home.jsx            # Main logic, manages states
│   ├── ImageUpload.jsx     # Upload component
│   ├── ImagePreview.jsx    # Original + enhanced display
│   ├── Loading.jsx         # Spinner
│   ├── ThemeToggle.jsx     # Dark/Light toggle
├── utilities/
│   └── enhancedImageAPI.js # API integration


👨‍💻 Author

Developed with ❤️ by Ansh Gupta
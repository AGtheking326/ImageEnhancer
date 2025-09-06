# 🖼️ Image Enhancer

An AI-powered web application built with **React + Tailwind CSS** that allows users to upload an image and enhance it using an external **AI Image Enhancer API**.  
It provides a smooth user experience with **real-time previews**, **loading indicators**, and **dark/light mode toggle**.

---

live preview-> 

## 📸 Screenshot

![App Screenshot](./vite-project/public/Screenshot(989).png)

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

## ⚙️ Installation & Setup (Local)

1. Clone the repository:
   ```bash

Install dependencies:

npm install


Create a .env file inside the vite-project folder and add your API key:

VITE_IMAGE_ENHANCER_API_KEY=your_api_key_here


Run the development server:

npm run dev


Build for production:

npm run build

🔗 API Workflow

Upload Image → User selects an image (preview shown instantly).

Send to API → Image is uploaded, returns a task_id.

Polling → App checks API every 3s until result is ready.

Enhanced Image → Final image URL is returned.

Display → Original + Enhanced images shown side by side.

📂 Project Structure
vite-project/
├── public/                 # Static assets
├── src/
│   ├── App.jsx             # Main layout & theme handling
│   ├── main.jsx            # App entry point
│   ├── index.css           # Tailwind base styles
│   ├── components/
│   │   ├── Home.jsx        # Main logic, manages states
│   │   ├── ImageUpload.jsx # Upload component
│   │   ├── ImagePreview.jsx# Original + enhanced display
│   │   ├── Loading.jsx     # Spinner
│   │   ├── ThemeToggle.jsx # Dark/Light toggle
│   └── utilities/
│       └── enhancedImageAPI.js # API integration

🌐 Deployment on Vercel

Since the app is inside a vite-project/ subfolder, configure Vercel as follows:

Push your repo to GitHub.

Go to Vercel
, import your repo.

In Project Settings → set:

Root Directory: vite-project

Build Command: npm run build

Output Directory: dist

Add Environment Variable in Vercel:

VITE_IMAGE_ENHANCER_API_KEY=your_api_key_here


Click Deploy → get your live app link 🎉

📌 Future Improvements

🔑 Secure API key with backend proxy.

🖱️ Drag & drop image upload.

🖼️ Multiple image uploads.

🔄 Before/after comparison slider.

📶 Show processing progress.

♿ Better accessibility (ARIA, live regions).

👨‍💻 Author

Developed with ❤️ by Ansh Gupta
   git clone https://github.com/AGtheking326/ImageEnhancer.git
   cd ImageEnhancer/vite-project

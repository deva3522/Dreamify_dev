# 🎨 Dreamify

**Turn your doodles into stunning AI-generated art using Stable Diffusion.**

## 🚀 Overview

**Dreamify** is an AI-powered web application that allows users to draw simple sketches on a canvas and magically transform them into professional-looking artworks using **Stable Diffusion**. Just sketch, select a style, and watch the AI paint your imagination!

---

## 🧠 Inspiration

We wanted to create a fun and creative tool that empowers anyone — regardless of artistic skill — to generate beautiful artwork. Whether you're a doodler, designer, or just bored, Dreamify turns your imagination into visual reality.

---

## 🔧 Tech Stack

| Layer       | Technology                             |
|-------------|-----------------------------------------|
| 💻 Frontend | HTML, CSS, JavaScript / React.js, TailwindCSS |
| 🧠 AI Model | Stable Diffusion (via Hugging Face or Replicate) |
| 🎨 Canvas   | HTML Canvas API / Fabric.js             |
| 🔙 Backend  | Python (Flask/FastAPI) or Node.js       |
| ☁️ Hosting  | Vercel / Netlify (Frontend), Railway / Render (Backend) |

---

## ✨ Features

- 🎨 Draw freehand sketches on a digital canvas
- 🖌️ Choose from multiple art styles (e.g. watercolor, cyberpunk, Van Gogh)
- 🤖 Convert sketches into high-quality AI artwork using Stable Diffusion
- 📥 Download or share the generated artwork
- 🧠 (Optional) AI-generated prompts for creative inspiration

---

## 🛠️ How It Works

1. **Draw** a doodle or sketch on the web-based canvas.
2. **Select** a desired art style from the available presets.
3. **Click Generate** – your sketch is sent to the backend with a style prompt.
4. **Stable Diffusion** (img2img or ControlNet) generates the artwork.
5. **Download or share** your AI masterpiece!

---

## 📦 Installation (for local dev)

```bash
# Clone the repo
git clone https://github.com/yourusername/dreamify.git
cd dreamify

# Install frontend dependencies
cd frontend
npm install
npm run dev

# Set up backend
cd ../backend
pip install -r requirements.txt
python app.py

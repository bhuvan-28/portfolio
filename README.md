# Bhuvan's Portfolio — Dark Luxury Minimalist Template

A modern, high-performance personal portfolio template inspired by the [Agenciy Framer Template](https://agenciy.framer.website/). Built with zero external build dependencies using clean, semantic HTML5, modern CSS3 (with luxury obsidian aesthetics, subtle glassmorphism, and Playfair serif accents), and lightweight vanilla JavaScript.

---

## ⚡ Highlights & Features

- **Agenciy Visual Identity**: Deep obsidian background (`#0a0a0c`), translucent card borders, ambient radial glows, and typography blending `Inter` with italic `Playfair Display`.
- **Zero-Dependency Architecture**: Runs directly in any web browser without needing `npm install` or complex build configurations.
- **Interactive Code & Metrics Terminal**: Live simulated neural inference console in the hero section.
- **Dynamic Projects Showcase & Modal**:
  - Filterable by **All**, **AI & Machine Learning**, **Full-Stack Web**, and **Creative Systems**.
  - Interactive "View Details" modal showing problem statement, architecture breakdown, metrics, and repo links.
- **Animated Infinite Ticker**: Smooth marquee showcasing your core technical stack (PyTorch, Next.js, Python, Docker, etc.).
- **Experience & Education Timeline**: Chronological milestones and research background.
- **1-Click Copy Email & Toast Notification**: Smooth feedback when visitors copy your direct contact email.
- **Working Interactive Contact Form**: Instant validation and asynchronous dispatch simulation.
- **Fully Responsive**: Flawlessly adapts to ultra-wide desktops, laptops, tablets, and mobile screens with a dedicated mobile drawer menu.

---

## 📂 Project Structure

```text
Portfolio/
├── .env.example       # Template for optional email API keys
├── .gitignore          # Ignores sensitive keys, OS artifacts, and editor cache
├── index.html          # Main page markup, SEO meta tags, and semantic sections
├── README.md           # Customization guide and deployment notes
├── assets/
│   └── Photo.png       # Studio portrait for the About Me section
├── css/
│   └── style.css       # Design tokens, variables, typography, animations, responsive layout
└── js/
    ├── credentials.js  # Centralized profile config, contact email, and social links
    └── main.js         # Project data array, category filtering, modal, and interactions
```

---

## 🛠️ How to Customize for Yourself

### 1. Updating Your Personal Credentials & Links (Easiest)
Open [js/credentials.js](file:///c:/BHUVAN/Portfolio/js/credentials.js):
Here you can update all your details in one clean place:
- **Contact Email & Phone**: Used for the click-to-copy button and mailto actions.
- **Social Profiles**: Update your GitHub, LinkedIn, Twitter/X, Kaggle, and Hugging Face URLs.
- **Certifications & Education**: List of your certifications and academic credentials.
- **Real Form Delivery (Optional)**: Simply paste a free [Web3Forms](https://web3forms.com) key or [Formspree](https://formspree.io) ID to receive contact form submissions straight into your email inbox!

### 2. Updating Projects
Open [js/main.js](file:///c:/BHUVAN/Portfolio/js/main.js). At the top, you will see the `PORTFOLIO_PROJECTS` array:
```javascript
const PORTFOLIO_PROJECTS = [
  {
    id: "your-project-id",
    title: "Your Project Name",
    year: "2025",
    category: "ai-ml", // "ai-ml", "fullstack", or "creative"
    categoryLabel: "AI & Deep Learning",
    summary: "Brief 1-sentence summary...",
    description: "Detailed architecture and problem solved...",
    techStack: ["PyTorch", "FastAPI", "Docker"],
    featured: true,
    badge: "Featured AI Project",
    demoUrl: "https://your-demo.com",
    githubUrl: "https://github.com/your-username/repo",
    metrics: {
      "Accuracy": "99.2%",
      "Inference": "14ms",
      "Uptime": "99.9%"
    }
  },
  // Add as many projects as you want!
];
```
Any changes you make here will automatically reflect in the grid and modal with zero HTML editing required.

### 3. Updating Work Experience & Education
In [index.html](file:///c:/BHUVAN/Portfolio/index.html), navigate to section `#experience` (around line 440) to change your university, degree, job titles, or dates.

### 4. Updating the Hero Headline or Bio
In [index.html](file:///c:/BHUVAN/Portfolio/index.html), search for `<h1 class="hero-title">` to modify the hero statement or bio paragraph.

---

## 🚀 How to Preview and Deploy

### Local Preview
Simply double-click `index.html` to open it in your browser (Chrome, Edge, Firefox, Brave, Safari).

Alternatively, if you use VS Code, right-click `index.html` and choose **"Open with Live Server"**, or run a local Python server:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

### Free Deployment in 1 Minute
1. **GitHub Pages**:
   - Push this folder to a GitHub repository.
   - Go to **Settings** > **Pages** > Select branch `main` and root `/` > Click **Save**.
2. **Vercel / Netlify**:
   - Drag and drop this folder onto [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com) for instant free global SSL hosting.

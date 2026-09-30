/**
 * ==========================================================================
 * BHUVAN PORTFOLIO - CREDENTIALS & PROFILE CONFIGURATION
 * ==========================================================================
 * 
 * Edit this file to update your personal credentials, contact info,
 * social links, resume, and external service keys in ONE place!
 * The website will automatically read this data and populate everywhere.
 */

const PROFILE_CONFIG = {
  // --------------------------------------------------------------------------
  // 1. PERSONAL CREDENTIALS & INFO
  // --------------------------------------------------------------------------
  personal: {
    name: "Bhuvan",
    fullName: "Bhuvan S", // Your full name
    monogram: "B",
    role: "AI/ML Engineer & Full-Stack Developer",
    tagline: "Building Intelligent Systems & Impactful Digital Products",
    location: "Bengaluru, India (Available Worldwide & Remotely)",
    timezone: "IST (UTC+5:30)",
    statusText: "Available for AI / ML & Full-Stack Opportunities",
    statusActive: true, // Shows green pulsing dot
  },

  // --------------------------------------------------------------------------
  // 2. CONTACT CREDENTIALS
  // --------------------------------------------------------------------------
  contact: {
    // Your public contact email (used for click-to-copy and messages)
    email: "bhuvans2801@gmail.com",
    phone: "", // Optional (leave empty if not needed)

    // Optional Form Delivery:
    // If you want contact form messages sent straight to your email inbox for free:
    // Option A: Formspree (https://formspree.io) -> Put your Form ID here (e.g. "xyzygqzw")
    formspreeId: "",

    // Option B: Web3Forms (https://web3forms.com) -> Put your free Access Key here
    web3FormsAccessKey: "",
  },

  // --------------------------------------------------------------------------
  // 3. SOCIAL & DEVELOPER PROFILES
  // --------------------------------------------------------------------------
  socials: {
    github: "https://github.com/bhuvan-28",
    linkedin: "https://linkedin.com/in/bhuvan-s-28j06",
    leetcode: "https://leetcode.com/u/s_bhuvan/",
    kaggle: "",       // Optional
    huggingface: "", // Optional
    resumeUrl: "assets/Resume.pdf", // Place your resume PDF in the assets/ folder
  },

  // --------------------------------------------------------------------------
  // 4. CERTIFICATIONS & ACADEMIC CREDENTIALS
  // --------------------------------------------------------------------------
  certifications: [
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      year: "2024",
      credentialId: "DL-AI-2024-001",
      credentialUrl: "https://coursera.org",
      skills: ["PyTorch", "CNNs", "RNNs", "Transformers"]
    },
    {
      title: "Full-Stack Web Development",
      issuer: "Meta",
      year: "2024",
      credentialId: "META-FS-2024-002",
      credentialUrl: "https://coursera.org",
      skills: ["React", "Next.js", "Node.js", "PostgreSQL"]
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2024",
      credentialId: "TF-DEV-2024-003",
      credentialUrl: "https://certificate.google.com",
      skills: ["TensorFlow", "Computer Vision", "Transfer Learning"]
    }
  ],

  // --------------------------------------------------------------------------
  // 5. EDUCATION CREDENTIALS
  // --------------------------------------------------------------------------
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Your University / Institute",
    period: "2022 — 2026",
    details: "Core focus on Deep Learning, Algorithms, System Design, and Scalable Web Technologies."
  }
};

// Export for module environments if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = PROFILE_CONFIG;
}

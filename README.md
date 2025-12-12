# 🌐 Markos Ioannou — Personal Website & Portfolio

This repository contains the source code for my personal website:  
➡️ **https://markos-ioannou.com**

Built with **GitHub Pages** — clean, minimal, fast, and intentionally lightweight.

---

## 🚀 About the Website

The website serves as a professional portfolio and includes:

- 🧑‍💻 Professional background & profile  
- 📄 Downloadable CV  
- 🛠 Selected projects (data science, analytics, machine learning)  
- 🌱 Skills, tools, and technologies  
- ✉️ A secure contact form  

The focus is on **clarity, performance, and reliability**.

---

## ✉️ Contact Form (How It Works)

Although the site itself is fully static, the contact form uses a **serverless backend** to safely handle submissions.

### 🔄 High-level flow

1. The form runs on a static page (GitHub Pages).
2. Submissions are sent via `fetch()` to a **Cloudflare Worker**.
3. The Worker:
   - 🔒 Verifies request origin
   - ⏱ Applies rate limiting
   - 📧 Validates email format
   - 🚫 Blocks disposable email domains (Workers KV)
   - 🌐 Performs DNS checks (MX / A / AAAA)
   - 🛡 Verifies Cloudflare Turnstile (anti-spam)
4. If all checks pass, the message is delivered via **Resend** to my inbox.

### ✅ Why this approach

- No backend server to maintain  
- No exposed API keys  
- Strong spam protection  
- Fully compatible with GitHub Pages  
- Privacy-friendly (no message storage)  

---

## 🛠 Tech Stack

### Frontend
- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **GitHub Pages**

### Backend (Serverless)
- **Cloudflare Workers**
- **Cloudflare Workers KV**
- **Cloudflare Turnstile**
- **Resend**

### Other
- **Custom Email Domain**
- **Minimal Google Analytics**

---

## 📁 Repository Structure

```text
/
├── index.html
├── contact.html
├── styles.css
├── assets/
│   ├── images/
│   ├── icons/
│   │   └── favicon.png
│   └── documents/
│       └── cv.pdf
└── README.md
```

---

## 🌟 How to Use Locally

```bash
git clone https://github.com/markosioannou/markosioannou.github.io.git
cd markosioannou.github.io
open index.html
```

---

## 📬 Contact

**Markos Ioannou**  
📧 Email: **markos@markos-ioannou.com**  
🌐 Website: **https://markos-ioannou.com**  
🔗 LinkedIn: **https://www.linkedin.com/in/markos-ioannou**

---

Thanks for visiting this repository 👋  
Yes — the contact form is intentionally over-engineered.

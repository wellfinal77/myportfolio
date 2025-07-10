# 🚀 Wellington Queiroz Costa - Portfolio

Personal portfolio with cyberpunk/futuristic design, optimized for mobile and desktop.

## ✨ Features

- 🎨 Cyberpunk design with neon effects
- 📱 Fully responsive (mobile-first)
- ⚡ Optimized performance
- 🔧 PWA (Progressive Web App)
- ♿ Improved accessibility
- 🌐 SEO optimized

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Styles with CSS variables and animations
- **JavaScript** - Interactivity and functionality
- **AOS** - Animate On Scroll
- **Font Awesome** - Icons
- **Google Fonts** - Orbitron

## 📱 How to Access

### 🖥️ **PC (Local)**
```bash
# Navigate to the project folder
cd myportfolio

# Start a local server
python -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000
```

**Access:** `http://localhost:8000`

### 📱 **Mobile (Same Wi-Fi Network)**
1. Find your PC's IP address:
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig
   ```

2. On your mobile device, access:
   ```
   http://[PC_IP]:8000
   ```
   Example: `http://192.168.1.100:8000`

### 🌐 **Public Access (GitHub Pages)**
**URL:** `https://wellfinal77.github.io/myportfolio`

### 🔗 **Other Deployment Options**
- **Netlify**: Drag the folder to netlify.com
- **Vercel**: Connect with GitHub
- **Firebase Hosting**: Deploy via Firebase CLI

## 📋 Project Structure

```
myportfolio/
├── index.html          # Main page
├── styles.css          # CSS styles
├── scripts.js          # JavaScript
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker
├── README.md          # This file
└── assets/            # Images and resources
    ├── myportfolioweb.png
    ├── cyberpunk-city-background-1p2r1bpxk5lmd0k2.jpg
    ├── generative-ai.jpg
    └── other files...
```

## 🎯 Implemented Improvements

### ✅ **Mobile Optimization**
- Optimized viewport
- 44px minimum touch targets
- Zoom prevention in inputs (iOS)
- Touch gestures detected
- Performance optimized for slow connections

### ✅ **Accessibility**
- ARIA labels
- Keyboard navigation
- Improved contrast
- Support for `prefers-reduced-motion`
- Focus indicators

### ✅ **Performance**
- Lazy loading of images
- Optimized CSS with variables
- Modular JavaScript
- Service Worker for caching
- Preload of critical resources

### ✅ **SEO & PWA**
- Complete meta tags
- Open Graph tags
- Twitter Cards
- Manifest.json
- Service Worker
- PWA icons

## 🔧 Advanced Configuration

### **Customize Colors**
Edit CSS variables in `styles.css`:
```css
:root {
  --primary-color: #39ff14;
  --secondary-color: #ff00ff;
  --accent-color: #00ffff;
}
```

### **Add New Projects**
Edit the portfolio section in `index.html`:
```html
<div class="portfolio-item">
  <img src="assets/your-project.png" alt="Description" class="portfolio-img">
  <div>
    <h3>Project Name</h3>
    <p>Project description</p>
    <a href="project-link" target="_blank" class="btn">View Project</a>
  </div>
</div>
```

### **Configure Contact Form**
The form uses Formspree. To configure:
1. Go to [formspree.io](https://formspree.io)
2. Create an account and a new form
3. Replace `mzzrvpoq` in the form's `action`

## 🚀 Deploy to GitHub Pages

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Updated portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

3. **Access:** `https://wellfinal77.github.io/myportfolio`

## 📞 Contact

- **Email:** fina202402@st.forum.ac.jp
- **GitHub:** [wellfinal77](https://github.com/wellfinal77)
- **LinkedIn:** [Wellington Queiroz Costa](https://linkedin.com/in/seuusuario)

## 📄 License

© 2025 Wellington Queiroz Costa. All rights reserved.

---

**Developed with ❤️ and ☕ by Wellington Queiroz Costa** 
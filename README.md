# 🚀 Wellington Queiroz Costa - Portfolio

Portfolio pessoal com design cyberpunk/futurista, otimizado para mobile e desktop.

## ✨ Características

- 🎨 Design cyberpunk com efeitos neon
- 📱 Totalmente responsivo (mobile-first)
- ⚡ Performance otimizada
- 🔧 PWA (Progressive Web App)
- ♿ Acessibilidade melhorada
- 🌐 SEO otimizado

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos com variáveis CSS e animações
- **JavaScript** - Interatividade e funcionalidades
- **AOS** - Animate On Scroll
- **Font Awesome** - Ícones
- **Google Fonts** - Orbitron

## 📱 Como Acessar

### 🖥️ **PC (Local)**
```bash
# Navegue até a pasta do projeto
cd myportfolio

# Inicie um servidor local
python -m http.server 8000
# ou
npx serve .
# ou
php -S localhost:8000
```

**Acesse:** `http://localhost:8000`

### 📱 **Celular (Mesma Rede Wi-Fi)**
1. Descubra o IP do seu PC:
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig
   ```

2. No celular, acesse:
   ```
   http://[IP_DO_PC]:8000
   ```
   Exemplo: `http://192.168.1.100:8000`

### 🌐 **Acesso Público (GitHub Pages)**
**URL:** `https://wellfinal77.github.io/myportfolio`

### 🔗 **Outras Opções de Deploy**
- **Netlify**: Arraste a pasta para netlify.com
- **Vercel**: Conecte com GitHub
- **Firebase Hosting**: Deploy via Firebase CLI

## 📋 Estrutura do Projeto

```
myportfolio/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── scripts.js          # JavaScript
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker
├── README.md          # Este arquivo
└── assets/            # Imagens e recursos
    ├── myportfolioweb.png
    ├── cyberpunk-city-background-1p2r1bpxk5lmd0k2.jpg
    ├── generative-ai.jpg
    └── outros arquivos...
```

## 🎯 Melhorias Implementadas

### ✅ **Mobile Optimization**
- Viewport otimizado
- Touch targets de 44px mínimo
- Prevenção de zoom em inputs (iOS)
- Gestos touch detectados
- Performance otimizada para conexões lentas

### ✅ **Acessibilidade**
- ARIA labels
- Navegação por teclado
- Contraste melhorado
- Suporte a `prefers-reduced-motion`
- Focus indicators

### ✅ **Performance**
- Lazy loading de imagens
- CSS otimizado com variáveis
- JavaScript modular
- Service Worker para cache
- Preload de recursos críticos

### ✅ **SEO & PWA**
- Meta tags completas
- Open Graph tags
- Twitter Cards
- Manifest.json
- Service Worker
- Ícones PWA

## 🔧 Configurações Avançadas

### **Personalizar Cores**
Edite as variáveis CSS em `styles.css`:
```css
:root {
  --primary-color: #39ff14;
  --secondary-color: #ff00ff;
  --accent-color: #00ffff;
}
```

### **Adicionar Novos Projetos**
Edite a seção portfolio em `index.html`:
```html
<div class="portfolio-item">
  <img src="assets/seu-projeto.png" alt="Descrição" class="portfolio-img">
  <div>
    <h3>Nome do Projeto</h3>
    <p>Descrição do projeto</p>
    <a href="link-do-projeto" target="_blank" class="btn">Ver Projeto</a>
  </div>
</div>
```

### **Configurar Formulário de Contato**
O formulário usa Formspree. Para configurar:
1. Acesse [formspree.io](https://formspree.io)
2. Crie uma conta e um novo formulário
3. Substitua `mzzrvpoq` no `action` do formulário

## 🚀 Deploy no GitHub Pages

1. **Faça push para o GitHub:**
   ```bash
   git add .
   git commit -m "Portfolio atualizado"
   git push origin main
   ```

2. **Ative GitHub Pages:**
   - Vá para Settings > Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

3. **Acesse:** `https://wellfinal77.github.io/myportfolio`

## 📞 Contato

- **Email:** fina202402@st.forum.ac.jp
- **GitHub:** [wellfinal77](https://github.com/wellfinal77)
- **LinkedIn:** [Wellington Queiroz Costa](https://linkedin.com/in/seuusuario)

## 📄 Licença

© 2025 Wellington Queiroz Costa. Todos os direitos reservados.

---

**Desenvolvido com ❤️ e ☕ por Wellington Queiroz Costa** 
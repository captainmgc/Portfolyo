# 🌟 Kişisel Portfolyo Web Sitesi

Modern, responsive ve kullanıcı dostu bir kişisel portfolyo web sitesi. React.js, Vite ve Tailwind CSS teknolojileri kullanılarak geliştirilmiştir.

![Ana Sayfa](ss/ss%20(1).png)

## 🚀 Özellikler

- ✨ **Modern ve Sade Tasarım** - Minimalist ve profesyonel görünüm
- 📱 **Tamamen Responsive** - Tüm cihazlarda mükemmel görünüm
- 🌓 **Dark/Light Mode** - Tema değiştirme desteği
- ⚡ **Hızlı Performans** - Vite ile optimize edilmiş
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📝 **İletişim Formu** - Netlify Forms entegrasyonu
- 🔍 **SEO Optimizasyonu** - Arama motorları için optimize
- ♿ **Erişilebilirlik** - WCAG standartlarına uygun

## 📸 Ekran Görüntüleri

### Ana Sayfa
![Ana Sayfa](ss/ss%20(1).png)
*Modern tasarım ve kolay navigasyon*

### Projeler Sayfası
![Projeler](ss/ss%20(3).png)
*Proje kartları ve teknoloji etiketleri*

### Hakkımda Sayfası
![Hakkımda](ss/ss%20(4).png)
*Kişisel bilgiler ve teknik beceriler*

### İletişim Sayfası
![İletişim](ss/ss%20(2).png)
*İletişim formu ve sosyal medya bağlantıları*

## 🛠️ Teknolojiler

- **Frontend:** React.js 19
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS 3.4
- **Routing:** React Router DOM 7.6
- **Language:** TypeScript
- **Package Manager:** npm
- **Deployment:** Netlify (hazır)

## 📁 Proje Yapısı

```
portfolyo/
├── public/
│   ├── placeholder-profile.svg      # Profil görseli
│   ├── placeholder-project.svg      # Proje görselleri
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigasyon bileşeni
│   │   ├── Footer.jsx              # Alt bilgi bileşeni
│   │   ├── ThemeToggle.jsx         # Tema değiştirici
│   │   ├── ProjectCard.jsx         # Proje kartı bileşeni
│   │   └── ContactForm.jsx         # İletişim formu bileşeni
│   ├── pages/
│   │   ├── Home.jsx                # Ana sayfa
│   │   ├── About.jsx               # Hakkımda sayfası
│   │   ├── Projects.jsx            # Projeler sayfası
│   │   └── Contact.jsx             # İletişim sayfası
│   ├── assets/                     # Statik dosyalar
│   ├── App.jsx                     # Ana uygulama bileşeni
│   ├── main.jsx                    # Uygulama giriş noktası
│   └── index.css                   # Global stiller
├── ss/                             # Ekran görüntüleri
├── package.json                    # Proje bağımlılıkları
├── tailwind.config.js              # Tailwind konfigürasyonu
├── vite.config.js                  # Vite konfigürasyonu
└── README.md                       # Proje dokümantasyonu
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v18 veya üzeri)
- npm veya yarn

### Kurulum

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/kullanici-adi/portfolyo.git
   cd portfolyo
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

4. **Tarayıcınızda açın:**
   ```
   http://localhost:5173
   ```

### Build ve Deploy

```bash
# Production build oluşturma
npm run build

# Build önizlemesi
npm run preview
```

## ⚙️ Konfigürasyon

### Kişiselleştirme

1. **Kişisel Bilgiler:** `src/pages/` klasöründeki dosyalarda kendi bilgilerinizi güncelleyin
2. **Projeler:** `src/pages/Projects.jsx` dosyasında proje verilerinizi düzenleyin
3. **İletişim:** `src/pages/Contact.jsx` dosyasında iletişim bilgilerinizi güncelleyin
4. **Görseller:** `public/` klasöründe kendi görsellerinizi kullanın

### Theme Ayarları

Dark mode varsayılan olarak aktiftir. `tailwind.config.js` dosyasından özelleştirebilirsiniz:

```javascript
// tailwind.config.js
export default {
  darkMode: 'class', // 'media' veya 'class'
  // ... diğer ayarlar
}
```

### Netlify Forms Kurulumu

İletişim formu Netlify Forms ile çalışacak şekilde hazırlanmıştır:

1. Projeyi Netlify'a deploy edin
2. Forms bölümünden aktivasyon yapın
3. Form gönderimlerini Netlify panelinden takip edin

## 🎨 Kullanılan Renk Paleti

- **Primary:** Blue (600, 700)
- **Background Light:** Gray (100, 50)
- **Background Dark:** Gray (800, 900)
- **Text Light:** Gray (800, 600)
- **Text Dark:** White, Gray (300)

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Email:** ornek@email.com
- **LinkedIn:** [linkedin.com/in/username](https://linkedin.com/in/username)
- **GitHub:** [github.com/username](https://github.com/username)

## 🙏 Teşekkürler

- [React](https://reactjs.org/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React Router](https://reactrouter.com/) - Routing
- [Netlify](https://netlify.com/) - Hosting platform

---

⭐ Bu proje faydalıysa lütfen yıldız verin! 

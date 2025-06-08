# 📄 **Kişisel Web Sitesi PRD (Product Requirements Document)**

## 1. 🎯 **Proje Amacı**

\[ ] Modern, sade, hızlı ve kullanıcı dostus bir kişisel portfolyo web sitesi geliştirmek.
\[ ] Frontend geliştirme odaklı çalışmaların sergilendiği bir alan sunmak.

---

## 2. 🧱 **Kapsam ve Özellikler**

### 2.1 Genel Özellikler

\[x] React.js, Vite, Tailwind CSS teknolojileri kullanılacak
\[x] Site responsive olacak ve mobil uyumlu olacak
\[x] Karanlık mod desteği olacak
\[x] Sayfalar: Anasayfa, Hakkımda, Projeler, İletişim
\[x] SEO uyumu sağlanacak
\[x] Google Analytics entegre edilecek
\[x] Open Graph meta etiketleri eklenecek
\[x] Netlify Forms ile iletişim formu entegre edilecek
\[x] Erişilebilirlik (a11y) kurallarına uygun olacak
\[x] Performans optimizasyonları yapılacak:

* Lazy load
* Görsel optimizasyonu
* Bundle küçültme (code splitting)

---

## 3. 🎨 **Tasarım Aşaması**

### 3.1 Tasarım İlkeleri

\[ ] Sade, modern ve minimalist bir kullanıcı arayüzü
\[ ] Tailwind ile özelleştirilmiş tema (light/dark toggle)
\[ ] Her sayfa için wireframe çizimi:

* [ ] Anasayfa → Tanıtım + kısa öne çıkan projeler
* [ ] Hakkımda → Kısa özgeçmiş, teknoloji yığını
* [ ] Projeler → Kart görünümlü proje listesi
* [ ] İletişim → Form alanı + sosyal bağlantılar

---

## 4. ⚙️ **Geliştirme Aşaması**

### 4.1 Proje Kurulumu

\[ ] Vite ile React projesi başlat
\[ ] Tailwind CSS yapılandırması
\[ ] Dark mode için `dark:` sınıflarını aktif et
\[ ] `react-router-dom` ile sayfa yönlendirmesi kurulumu

### 4.2 Bileşen Yapısı

* [ ] `Navbar`
* [ ] `Footer`
* [ ] `ThemeToggle`
* [ ] `ProjectCard`
* [ ] `ContactForm`
* [ ] Sayfa bileşenleri: `Home.jsx`, `About.jsx`, `Projects.jsx`, `Contact.jsx`

### 4.3 Her Sayfanın Uygulanışı

#### Anasayfa

\[ ] Hoş geldin mesajı + profil görseli
\[ ] Hızlı bağlantılar (projeler, iletişim)

#### Hakkımda

\[ ] Frontend becerileri listesi
\[ ] Kısa özgeçmiş ve deneyimler

#### Projeler

\[ ] Dinamik veri üzerinden proje kartları
\[ ] Her kartta: başlık, kısa açıklama, tech stack, canlı demo & GitHub linki

#### İletişim

\[ ] İsim, e-posta, mesaj alanı
\[ ] Netlify Forms için `<form>` yapılandırması
\[ ] Gönderim sonrası onay mesajı

### 4.4 Performans ve Optimizasyon

\[ ] `React.lazy()` ve `Suspense` ile lazy load
\[ ] Görseller için `.webp` kullanımı + `loading="lazy"`
\[ ] Vite config ile bundle küçültme, tree shaking

### 4.5 SEO ve Meta Ayarları

\[ ] `react-helmet` ile dinamik `<title>`, `<meta>`
\[ ] Open Graph etiketleri: başlık, açıklama, görsel
\[ ] Sitemap.xml ve robots.txt dosyaları

### 4.6 Analytics

\[ ] Google Analytics script eklenmesi
\[ ] `<Helmet>` ya da direkt index.html'e yerleştirme

### 4.7 Erişilebilirlik

\[ ] HTML semantic yapıya dikkat
\[ ] Renk kontrast kontrolleri
\[ ] Form etiketlerinin doğru ilişkilendirilmesi
\[ ] Klavye navigasyon uyumluluğu

---

## 5. 📁 **Dizin Yapısı Önerisi**

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ThemeToggle.jsx
│   ├── ProjectCard.jsx
│   └── ContactForm.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── assets/
│   ├── images/
│   └── icons/
├── App.jsx
├── main.jsx
└── index.css
```

---

## 6. ✅ **Teslim Koşulları**

\[ ] Kodlar yorum satırlarıyla açıklamalı olacak
\[ ] Tüm bileşenler okunabilir ve modüler yapıda olacak
\[ ] Deploy: Netlify üzerinden canlıya alınacak
\[ ] README dosyasında kurulum ve kullanım bilgileri olacak

---


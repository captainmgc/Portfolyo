# Güneş Sistemi Portfolyo (Next.js + TypeScript + Tailwind)

Modern, erişilebilir ve yüksek performanslı kişisel portfolyo. Ortada profil, çevresinde dönen halkalar ve gezegenler (yetenek kartları).

## Hızlı Başlangıç

```bash
npm install
npm run dev
```

Uygulama: http://localhost:3000

## Üretim

```bash
npm run build
npm start
```

## Testler

- Unit: `npm test`
- E2E: `npm run test:e2e` (önce `npm run build && npm start` önerilir)

## Çevre Değişkenleri

`.env.local` içine:

```bash
SMTP_HOST=TODO_REPLACE
SMTP_PORT=587
SMTP_USER=TODO_REPLACE
SMTP_PASS=TODO_REPLACE
CONTACT_TO=you@example.com
RATE_LIMIT_WINDOW=60
RATE_LIMIT_MAX=10
RECAPTCHA_SECRET=TODO_OPTIONAL
```

Not: Varsayılan API iletişim uç noktası demo modunda e-postayı GERÇEKTEN göndermez; loglar ve 200 döner. Üretimde SMTP/3rd‑party ile değiştirin.

## Deployment (Vercel)

- Bu repoyu GitHub'a push edin
- Vercel'e import edin
- Environment vars ekleyin

## A11y ve Performans

- `prefers-reduced-motion` desteği
- Kontrast ve odak stilleri
- Jest + `jest-axe`, Playwright + `@axe-core/playwright`

## Alternatif Demo

Kökte `single-file-demo.html` hızlı demo içerir.

## Lisans

MIT — TODO: REPLACE WITH YOUR INFO 

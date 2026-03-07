# Emir Portfolio

Kişisel portfolyo sitesi. React + TypeScript + Vite ile geliştirilmiştir ve GitHub Pages'e deploy edilir.

## Teknoloji Yığını

- React 19
- TypeScript 5
- Vite 7
- ESLint 9

## Özellikler

- Profil ve iletişim bölümü
- Kategorize edilmiş teknik beceriler
- Proje kartları (teknoloji etiketleri ve dış bağlantılar)
- Mobil uyumlu, tek sayfa düzen

## Proje Yapısı

```text
src/
  assets/               Statik görseller
  components/
    Projects.tsx        Proje listesi arayüzü
    projects.css        Proje kartı stilleri
  data/
    projects.ts         Proje verisi
  App.tsx               Ana sayfa düzeni
  App.css               Uygulama stilleri
  index.css             Global stiller
```

## Kurulum

```bash
npm install
```

## Geliştirme Ortamı

```bash
npm run dev
```

Varsayılan adres: `http://localhost:5173`

## Build

```bash
npm run build
```

Build çıktısı `dist/` klasörüne yazılır.

## Lint

```bash
npm run lint
```

## Preview

```bash
npm run preview
```

## GitHub Pages Deploy

Bu proje `vite.config.ts` içinde `base: "/github-portfolio/"` ile yapılandırılmıştır.

```bash
npm run deploy
```

Deploy komutu `dist/` klasörünü `gh-pages` branch'ine gönderir.

## Notlar

- Portre görseli WebP formatına sıkıştırılmıştır.
- Proje metinleri UTF-8 olarak düzenlenmiştir.

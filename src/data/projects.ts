export type Project = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
};

export const projectsTr: Project[] = [
  {
    id: "emlak-katalog",
    title: "Emlak Katalog Platformu (SaaS)",
    description:
      "Emlak ofislerinin portföylerini yönetebildiği admin panelli multi-tenant SaaS platformu geliştirdim. İlan oluşturma, içerik düzenleme ve veri yönetimi süreçleri LLM destekli agent mimarisi ile otomatikleştirildi.",
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "LLM Agent"],
  },
  {
    id: "klinikapp",
    title: "KlinikApp Uygulaması (SaaS)",
    description:
      "Psikiyatri kliniklerinin mali ve reçete süreçlerini yöneten web tabanlı platform geliştirdim. Java Spring Boot backend servisleri ve React Vite arayüzü ile çalışan sistemde Sağlık Bakanlığı entegrasyonu sağlandı.",
    tags: [
      "React Vite",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "LLM Agent",
    ],
  },
  {
    id: "hr-bpm-platform",
    title:
      "İnsan Kaynakları + BPM Platformu (Multi-Tenant Süreç Yönetimi & Onay Akışları)",
    description:
      "Şirketlerin süreçlerini, formlarını ve onay akışlarını parametrik olarak yönetebileceği multi-tenant BPM platformu geliştirdim. Admin panelinde workflow tasarımı ve rol bazlı yetkilendirme, kullanıcı panelinde talep ve onay süreçleri yer aldı.",
    tags: ["React", "TypeScript", ".NET Core", "MS SQL Server", "BPM"],
  },
  {
    id: "ai-tour-recommender",
    title: "Yapay Zeka Destekli Kişisel Tur Öneri Sistemi",
    description:
      "Kullanıcının bölge, süre, bütçe ve ilgi alanı gibi tercihlerini analiz ederek dinamik seyahat planları oluşturan sistem geliştirdim. Gemini API ile rota önerileri ve konum bazlı planlama üretildi.",
    tags: ["AI", "Gemini API", ".NET", "Harita", "Kişiselleştirme"],
  },
  {
    id: "copytext",
    title: "CopyText Masaüstü Uygulaması",
    description:
      "Kullanıcıların metinleri hızlı şekilde kopyalayıp yönetmesini sağlayan masaüstü uygulaması geliştirdim. Tauri tabanlı hafif mimari ile çalışan uygulama sık kullanılan metinlerin kolay yönetilmesini sağlar.",
    tags: ["Tauri", "React", "TypeScript", "Desktop"],
  },
  {
    id: "ramex-vibro",
    title: "Ramex Vibro - Ekskavatör Ataşmanları için SEO Odaklı Kurumsal Web Sitesi",
    description:
      "React Vite ve TypeScript ile SEO odaklı kurumsal web sitesi geliştirdim. Ürün kategorileri ve teknik içerikler için performans odaklı modern bir arayüz oluşturuldu.",
    tags: ["React", "Vite", "TypeScript", "SEO"],
    link: "https://ramexvibro.com/",
  },
  {
    id: "prophet-weather-rn",
    title: "Prophet Hava Durumu Modelleri ve React Native Mobil Uygulaması",
    description:
      "Türkiye'nin 81 ili için sıcaklık, nem ve rüzgar tahmini yapan Prophet tabanlı modeller geliştirdim. FastAPI servisleri üzerinden model çıktıları yönetildi ve React Native uygulaması ile kullanıcıya sunuldu.",
    tags: ["Prophet", "FastAPI", "React Native", "Weather"],
    link: "https://github.com/emirhanak/HavaDurumuMobil",
  },
  {
    id: "n8n-event-planner",
    title: "n8n Etkinlik Planlama Otomasyonu",
    description:
      "Telegram tabanlı etkinlik planlama sürecini n8n workflow otomasyon sistemi ile kurguladım. Hava durumu kontrolü ve takvim entegrasyonu Google Sheets ve Google Calendar ile sağlandı.",
    tags: ["n8n", "Telegram", "Google Sheets", "Automation"],
    link: "https://github.com/emirhanak/n8n-etkinlikbot",
  },
  {
    id: "travel-agency-website",
    title: "Tur Şirketi Web Sitesi",
    description:
      "ASP.NET MVC mimarisi ile turizm şirketi için kişiselleştirilmiş tur önerileri sunan web uygulaması geliştirdim.",
    tags: ["ASP.NET MVC", "Web"],
    link: "https://github.com/emirhanak/AkTravel",
  },
  {
    id: "car-rental-automation",
    title: "Araç Kiralama Otomasyonu",
    description:
      "C# ve MS SQL Server kullanarak müşteri bilgileri ve araç envanterini yöneten araç kiralama otomasyon sistemi geliştirdim.",
    tags: ["C#", "SQL Server", "Automation"],
  },
  {
    id: "forestry-website",
    title: "Ormancılık Şirketi Web Sitesi",
    description:
      "React tabanlı kurumsal web sitesi geliştirerek içerik yönetimi ve duyuru sistemlerini admin panel üzerinden yönetilebilir hale getirdim.",
    tags: ["React", "Admin Panel"],
    link: "https://lacivertormancilik.com",
  },
  {
    id: "bruce-tr",
    title: "Bruce TR - Kurumsal Web Sitesi",
    description:
      "HTML ve CSS kullanarak mobil uyumlu kurumsal web sitesi geliştirdim.",
    tags: ["HTML", "CSS"],
    link: "https://bruce-tr.com",
  },
];

export const projectsEn: Project[] = [
  {
    id: "emlak-katalog",
    title: "Real Estate Catalog Platform (SaaS)",
    description:
      "I built a multi-tenant SaaS platform with an admin panel for real estate agencies to manage their portfolios. Listing creation, content editing, and data workflows were automated with an LLM-driven agent architecture.",
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "LLM Agent"],
  },
  {
    id: "klinikapp",
    title: "KlinikApp (SaaS)",
    description:
      "I built a web platform for psychiatry clinics to manage financial and prescription workflows. The system runs with Java Spring Boot backend services and a React Vite interface, including Ministry of Health integration.",
    tags: [
      "React Vite",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "LLM Agent",
    ],
  },
  {
    id: "hr-bpm-platform",
    title:
      "HR + BPM Platform (Multi-Tenant Process Management & Approval Flows)",
    description:
      "I developed a multi-tenant BPM platform where companies can manage processes, forms, and approval flows parametrically. It includes workflow design and role-based authorization on the admin side, and request/approval flows on the user side.",
    tags: ["React", "TypeScript", ".NET Core", "MS SQL Server", "BPM"],
  },
  {
    id: "ai-tour-recommender",
    title: "AI-Powered Personalized Tour Recommendation System",
    description:
      "I developed a system that analyzes user preferences such as region, duration, budget, and interests to generate dynamic travel plans. Route recommendations and location-based planning were generated via the Gemini API.",
    tags: ["AI", "Gemini API", ".NET", "Maps", "Personalization"],
  },
  {
    id: "copytext",
    title: "CopyText Desktop App",
    description:
      "I developed a desktop app that helps users quickly copy and manage text snippets. Built on Tauri with a lightweight architecture, it makes frequently used text easy to organize.",
    tags: ["Tauri", "React", "TypeScript", "Desktop"],
  },
  {
    id: "ramex-vibro",
    title: "Ramex Vibro - SEO-Focused Corporate Website for Excavator Attachments",
    description:
      "I developed an SEO-focused corporate website with React Vite and TypeScript. A modern, performance-oriented interface was created for product categories and technical content.",
    tags: ["React", "Vite", "TypeScript", "SEO"],
    link: "https://ramexvibro.com/",
  },
  {
    id: "prophet-weather-rn",
    title: "Prophet Weather Models and React Native Mobile App",
    description:
      "I developed Prophet-based models that forecast temperature, humidity, and wind for all 81 cities in Turkey. Model outputs were managed through FastAPI services and delivered to users via a React Native app.",
    tags: ["Prophet", "FastAPI", "React Native", "Weather"],
    link: "https://github.com/emirhanak/HavaDurumuMobil",
  },
  {
    id: "n8n-event-planner",
    title: "n8n Event Planning Automation",
    description:
      "I designed a Telegram-based event planning flow using n8n workflow automation. Weather checks and calendar integration were implemented with Google Sheets and Google Calendar.",
    tags: ["n8n", "Telegram", "Google Sheets", "Automation"],
    link: "https://github.com/emirhanak/n8n-etkinlikbot",
  },
  {
    id: "travel-agency-website",
    title: "Travel Agency Website",
    description:
      "I developed a web application with ASP.NET MVC that provides personalized tour recommendations for a travel company.",
    tags: ["ASP.NET MVC", "Web"],
    link: "https://github.com/emirhanak/AkTravel",
  },
  {
    id: "car-rental-automation",
    title: "Car Rental Automation",
    description:
      "I developed a car rental automation system with C# and MS SQL Server to manage customer data and vehicle inventory.",
    tags: ["C#", "SQL Server", "Automation"],
  },
  {
    id: "forestry-website",
    title: "Forestry Company Website",
    description:
      "I developed a React-based corporate website and made content management and announcements manageable through an admin panel.",
    tags: ["React", "Admin Panel"],
    link: "https://lacivertormancilik.com",
  },
  {
    id: "bruce-tr",
    title: "Bruce TR - Corporate Website",
    description:
      "I developed a mobile-friendly corporate website using HTML and CSS.",
    tags: ["HTML", "CSS"],
    link: "https://bruce-tr.com",
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "ai-tour-recommender",
    title: "Yapay Zeka Destekli Kişisel Tur Öneri Sistemi",
    description:
      "Kullanıcının bölge, süre, bütçe ve ilgi alanı gibi tercihlerini analiz ederek dinamik seyahat planları üreten etkileşimli bir platform geliştirdim. Gemini API ile tasarladığım promptlar sayesinde gün gün rota, uygun otel alternatifleri ve harita üzerinde görselleştirilen koordinatlar oluşturuldu. Çözüm, .NET tabanlı ana kurumsal platformla entegre şekilde çalışıyor.",
    tags: ["AI", "Gemini API", ".NET", "Harita", "Kişiselleştirme"],
  },
  {
    id: "forestry-website",
    title: "Ormancılık Şirketi Web Sitesi",
    description:
      "Bir ormancılık şirketinin dijital varlığını güçlendirmek için React tabanlı modern bir web uygulaması geliştirdim. Yönetim paneli üzerinden haber ve içerik yönetimini kolaylaştırdım; API entegrasyonlarıyla güncel duyurular ve içerikler canlı olarak yönetilebiliyor.",
    tags: ["React", "Admin Panel", "API", "Kurumsal"],
    link: "https://lacivertormancilik.com",
  },
  {
    id: "prophet-weather-rn",
    title: "Prophet Hava Durumu Modelleri ve React Native Mobil Uygulaması",
    description:
      "Türkiye’nin 81 ili için sıcaklık, nem, basınç ve rüzgar tahmini yapan Prophet tabanlı modelleri geliştirdim. FastAPI servisleriyle model çıktıları yönetildi, gerçek zamanlı hava durumu verileriyle doğrulama yapıldı. React Native uygulama üzerinden kullanıcılar tahminlere erişebiliyor.",
    tags: ["Prophet", "FastAPI", "React Native", "MCP", "Weather"],
    link: "https://github.com/emirhanak/HavaDurumuMobil",
  },
  {
    id: "n8n-event-planner",
    title: "n8n Etkinlik Planlama Otomasyonu",
    description:
      "Telegram tabanlı etkinlik planlama akışını n8n üzerinde kurguladım. Etkinlik tarihine göre hava durumu uygunluğu Prophet modelleriyle kontrol ediliyor; sonuçlar Google Sheets ve Calendar’a otomatik işleniyor. Cloudflare yönlendirme ve güvenlik ayarlarıyla sistem kesintisiz çalışıyor.",
    tags: ["n8n", "Telegram", "Google Sheets", "Google Calendar", "Otomasyon"],
    link: "https://github.com/emirhanak/n8n-etkinlikbot",
  },
  {
    id: "travel-agency-website",
    title: "Tur Şirketi Web Sitesi",
    description:
      "ASP.NET MVC mimarisi ile turizm şirketi için kişiselleştirilmiş tur önerileri sunan bir web uygulaması geliştirdim. Kullanıcı tercihlerini analiz eden öneri modülü sayesinde seçilebilir tur seçenekleri oluşturuldu.",
    tags: ["ASP.NET MVC", "Kişiselleştirme", "Web"],
    link: "https://github.com/emirhanak/AkTravel",
  },
  {
    id: "car-rental-automation",
    title: "Araç Kiralama Otomasyonu Projesi",
    description:
      "C# ile geliştirdiğim otomasyon sistemi, müşteri bilgileri ve araç envanterini yöneterek kiralama süreçlerini kolaylaştırıyor. Veritabanı olarak Microsoft SQL Server kullandım.",
    tags: ["C#", "SQL Server", "Otomasyon"],
  },
  {
    id: "hr-bpm-platform",
    title: "İK BPM Platformu (Multi-Tenant Süreç Yönetimi & Onay Akışları)",
    description:
      "Çok kiracılı BPM platformu geliştirerek şirketlerin süreçlerini, formlarını ve ekranlarını parametrik şekilde yönetebileceği bir yapı kurdum. Admin panelinde workflow tasarımı, görev atama ve RBAC yönetimi; kullanıcı panelinde ise talep açma, onay/red akışları ve durum takibini sağladım. Modüler servis mimarisi ve dinamik form altyapısıyla ölçeklenebilir bir kurumsal çözüm oluşturuldu.",
    tags: ["Full Stack", "BPM", "RBAC", "Multi-tenant", "MS SQL"],
  },
  {
    id: "ramex-vibro",
    title: "Ramex Vibro – Ekskavatör Ataşmanları için SEO Odaklı Kurumsal Web Sitesi",
    description:
      "React + Vite + TypeScript ile SEO odaklı kurumsal web sitesi geliştirdim. Ürün kategorileri, teknik tablolar ve animasyonlu arayüz bileşenleriyle modern bir deneyim oluşturuldu. Google Search Console uyumu ve performans iyileştirmeleriyle görünürlük artırıldı.",
    tags: ["React", "Vite", "TypeScript", "SEO", "Google Search Console"],
    link: "https://ramexvibro.com/",
  },
  {
    id: "bruce-tr",
    title: "Bruce TR – Ekskavatör Ataşmanları için Kurumsal Web Sitesi",
    description:
      "HTML ve CSS ile hazırladığım bu kurumsal web sitesinde ürün kategorilerini net bir mimariyle kurguladım. Hero, ürün katalogları ve teknik detay alanlarıyla markanın uzmanlığını vurgulayan sade ama güçlü bir arayüz tasarladım. Dönemin ihtiyaçlarına göre mobil uyumlu ve hızlı yüklenen bir yapı hedefledim.",
    tags: ["HTML", "CSS", "Kurumsal", "Web"],
    link: "https://bruce-tr.com",
  },
];

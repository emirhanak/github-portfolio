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
      "Kullanıcının seyahat bölgesi, süresi, bütçesi, ilgi alanları ve yaşı gibi kişisel tercihlerini analiz ederek dinamik seyahat planları üreten etkileşimli bir turizm platformu geliştirdim. Bu planlar, analiz edilen kullanıcı verilerine göre tasarladığım özel promptlar ile Gemini API'si kullanılarak üretilir ve kullanıcı için hazırlanan gün gün aktivite, profil kullanıcının seçebileceği uygun otel seçenekleri ile plandaki tur noktaları coğrafi koordinatlarından oluşturulur. Üretilen koordinat verisi, plandaki tüm konumların interaktif bir harita üzerinde gösterilmesini sağlayarak kullanıcıya rotasını görselleştirme imkanı sunar. Bu rota numaralandırılarak kullanıcının deneyimini kolaylaştırır. Geliştirdiğim bu akıllı öneri modülü, şirketin mevcut tur paketlerini sergileyen .NET tabanlı ana kurumsal platformu ile bütünleşik bir yapıda çalışarak hibrit bir çözüm ortaya koymaktadır.",
    tags: ["AI", "Gemini API", ".NET", "Harita", "Kişiselleştirme"],
  },
  {
    id: "forestry-website",
    title: "Ormancılık Şirketi Web Sitesi",
    description:
      "Bir ormancılık şirketinin dijital varlığını güçlendirmek amacıyla modern bir web uygulaması geliştirdim. Projede React teknolojisini kullanarak kullanıcıların şirket hakkında bilgi alabileceği, güncel duyuruları takip edebileceği ve içeriklerin kolayca yönetilebildiği dinamik bir sistem tasarladım. Arka planda oluşturduğum admin paneli üzerinden yöneticilerin haber ekleme, içerik güncelleme ve API entegrasyonlarını yönetebilmesini sağladım. Bu proje, kullanıcı dostu arayüzü, ölçeklenebilir altyapısı ve yönetim kolaylığı ile hem kullanıcı deneyimini hem de şirketin dijital operasyonlarını geliştirmektedir.",
    tags: ["React", "Admin Panel", "API", "Kurumsal"],
  },
  {
    id: "prophet-weather-rn",
    title: "Prophet Hava Durumu Modelleri ve React Native Mobil Uygulaması",
    description:
      "Türkiye’nin 81 ili için sıcaklık, nem, basınç, rüzgar hızı ve yağış tahminleri yapabilen yapay zeka tabanlı bir sistem geliştirdim. Prophet modelini kullanarak geçmiş 10 yıllık veriler üzerinden tahmin modelleri oluşturdum ve bu modelleri MCP server üzerinden çalışacak şekilde yapılandırdım. FastAPI tabanlı servislerle modellerin çıkarımlarını yönettim ve sonuçları doğrulamak için Hava Durumu API’si verileriyle karşılaştırdım. React Native kullanarak mobil bir uygulama geliştirdim; kullanıcılar tahmin sonuçlarını uygulama üzerinden görüntüleyebiliyor ve verilerle etkileşimde bulunabiliyor. Sistem, hem modelleme hem de mobil erişim açısından uçtan uca bir çözüm sunmaktadır.",
    tags: ["Prophet", "FastAPI", "React Native", "MCP", "Weather"],
  },
  {
    id: "n8n-event-planner",
    title: "n8n Etkinlik Planlama Otomasyonu",
    description:
      "n8n platformu üzerinde geliştirdiğim Telegram tabanlı etkinlik planlama akışı, kullanıcıların oluşturduğu etkinlikleri alıp tarih ve konum bilgilerini değerlendirir. Bu akış, önceki projemde geliştirdiğim Prophet modellerini kullanarak hava durumu uygunluğunu belirler ve etkinliği Google Sheets ile Calendar’a kaydeder. Böylece kullanıcılar etkinliklerinin hava koşullarına uygun olup olmadığını gerçek zamanlı olarak görebiliyor ve tüm süreç otomatik olarak yönetilebiliyor. Cloudflare üzerinde yapılandırılmış ağ yönlendirmeleri ve güvenlik ayarları ile sistemin kesintisiz ve güvenli çalışmasını sağladım.",
    tags: ["n8n", "Telegram", "Google Sheets", "Google Calendar", "Otomasyon"],
  },
  {
    id: "travel-agency-website",
    title: "Tur Şirketi Web Sitesi",
    description:
      "Bir turizm şirketinin süreçlerini dijital ortama taşımak amacıyla bir web uygulaması geliştirdim. ASP.NET MVC mimarisi kullanarak kullanıcıların kendilerine en uygun turu seçebilecekleri ve seyahat planlayabilecekleri bir sistem tasarladım. Uygulamada kullanıcı tercihlerini analiz eden tur öneri sistemi oluşturularak, kişiselleştirilmiş tur seçenekleri sunulmasını sağladım. Proje, kullanıcı dostu arayüzü ve işlevselliği ile hem müşterilere kolaylık sağlamaktadır hem de şirketin operasyonel verimliliğini artırmaktadır.",
    tags: ["ASP.NET MVC", "Kişiselleştirme", "Web"],
  },
  {
    id: "car-rental-automation",
    title: "Araç Kiralama Otomasyonu Projesi",
    description:
      "Araç kiralama şirketlerinin kullanabileceği bir otomasyon programı geliştirdim. C# diliyle hazırladığım bu sistem, gelen müşterilerin bilgilerini ve satıcının envanterinde bulunan araçları listeleyebilmekte ve araç satış işlemlerinin gerçekleştirilmesini sağlamaktadır. Veritabanı olarak Microsoft SQL Server kullandım.",
    tags: ["C#", "SQL Server", "Otomasyon"],
  },
  {
    id: "hr-bpm-platform",
    title: "İK BPM Platformu (Multi-Tenant Süreç Yönetimi & Onay Akışları) – Full Stack Proje",
    description:
      "İK süreçlerini uçtan uca dijitalleştiren çok kiracılı (multi-tenant) BPM platformu geliştirdim; hem Admin Paneli hem de Kullanıcı Paneli olacak şekilde kurgulayarak şirketin kendi süreçlerini, formlarını ve ekranlarını ayrı ayrı düzenleyebileceği parametrik bir yapı oluşturdum. Admin tarafında dinamik workflow/süreç tasarımı (adım bazlı onay akışları), görev atama, SLA mantığı, rol-bazlı yetkilendirme (RBAC), şirket bazlı konfigürasyonlar ve MS SQL Server (SSMS) üzerinden veri yönetimi/denetimi için kontrol katmanlarını tasarladım; kullanıcı panelinde ise kart tabanlı arayüzle taleplerin açılması, onay/red akışlarının yürütülmesi, durum takibi, log/aktivite geçmişi ve bildirim süreçlerini yönettim. Backend tarafında modüler servis mimarisiyle muhasebe, İK ve operasyonel süreçleri (izin, masraf, avans, satın alma vb.) tek merkezde toplayıp, dinamik form altyapısı + anket sistemi gibi modüllerle entegre ederek veritabanında şirket bazlı izolasyon ve parametrik tablolar üzerinden kişiselleştirilebilir, ölçeklenebilir ve kurumsal kullanım senaryolarına uygun bir BPM çözümü geliştirdim (aktif geliştirme sürecinde).",
    tags: ["Full Stack", "BPM", "RBAC", "Multi-tenant", "MS SQL"],
  },
  {
    id: "ramex-vibro",
    title: "Ramex Vibro – Ekskavatör Ataşmanları için SEO Odaklı Kurumsal Web Sitesi",
    description:
      "Ramex Vibro’nun ekskavatör ataşmanlarını dijitalde güçlü şekilde sunmak için React + Vite + TypeScript SWC ile SEO odaklı kurumsal web sitesini geliştirdim; ürün kategorizasyon yapısını ve kullanıcı panelini dostu bir tasarımla oluşturdum, her ürün için teknik tablo içeriklerini hazırlayıp sayfalara entegre ettim, slider ve animasyonlu arayüz öğeleri tasarlayarak modern bir kullanıcı deneyimi sağladım. Ayrıca Google optimizasyonu (Google Search Console uyumu, indeksleme ve görünürlük iyileştirmeleri) ile birlikte responsive uyumluluk, meta düzenlemeleri ve performans optimizasyonları yaparak arama motoru görünürlüğünü artırdım.",
    tags: ["React", "Vite", "TypeScript", "SEO", "Google Search Console"],
  },
];
# 🌌 Mistik Astroloji (Astrology World)

Mistik Astroloji, kullanıcıların doğum haritalarını hesaplamalarına, saklamalarına ve burç yorumlarını keşfetmelerine olanak tanıyan tam kapsamlı, full-stack bir astroloji platformudur.

<!-- SCREENSHOTS -->
<div align="center">
  <img src="https://github.com/user-attachments/assets/98a8882a-994d-4529-9882-a9c76e22a61b" width="800" alt="Ana Sayfa" />
</div>

## ✨ Özellikler

### 🔭 Astroloji & Hesaplama
*   **Doğum Haritası Hesaplama:** Swiss Ephemeris (İsviçre Efemerisleri) kullanılarak profesyonel hassasiyette gezegen konumları, evler ve akslar (Yükselen/MC) hesaplanır.
*   **Detaylı Analiz:** Güneş, Ay ve Yükselen burçlarınızın yanı sıra tüm gezegenlerin yerleşimlerini detaylı tablolarla inceleyin.
*   **Burç Rehberi:** 12 burcun tüm özellikleri, elementleri ve nitelikleri hakkında kütüphane.

### 👤 Üyelik & Kişiselleştirme
*   **Kullanıcı Sistemi:** Güvenli kayıt olma (Register) ve giriş yapma (Login) özellikleri.
*   **Harita Saklama:** Hesapladığınız doğum haritalarını isimlendirerek profilinize kaydedin.
*   **Haritalarım:** Kaydettiğiniz haritalara dilediğiniz zaman "Haritalarım" sayfasından ulaşın ve tekrar görüntüleyin.

### 🎨 Arayüz & Deneyim
*   **Premium Kozmik Tasarım:** Modern, karanlık tema, cam efektleri (glassmorphism) ve akıcı animasyonlar.
*   **Tamamen Duyarlı (Responsive):** Mobil, tablet ve masaüstü cihazlarda kusursuz deneyim.

---

## 📸 Ekran Görüntüleri (Screenshots)

| Giriş Ekranı (Login) | Hesaplama Alanı | Hesaplama Sonuçları |
| -------------------- | ------------------- | ------------------- |
| ![girisyap](https://github.com/user-attachments/assets/f0c2caa4-0412-4c43-9821-254619e7f03a) | ![2hero](https://github.com/user-attachments/assets/77ce7497-d01c-4e05-8dd9-b0521c122741) |![6dogumharitasi](https://github.com/user-attachments/assets/17b085cf-e672-411c-b803-473e492ea0e7)|

| Haritalarım (My Charts) | Burçlar | Burç Detayı |
| ----------------------- | ----------------------- |----------------------- |
|![haritalarım](https://github.com/user-attachments/assets/961e0017-5710-46a0-96a6-667dd5108a15)| ![4burclar](https://github.com/user-attachments/assets/9c2441d7-e48e-4d8e-8405-85e6d3e921a1)|![5burcdetay](https://github.com/user-attachments/assets/22d312a4-e04c-4e45-b0d5-069a87636959)|


---

## 🛠️ Teknolojiler

Proje, modern ve ölçeklenebilir bir mimari ile geliştirilmiştir:

### Frontend (İstemci)
*   **Framework:** [React](https://reactjs.org/) (Vite ile)
*   **Dil:** [TypeScript](https://www.typescriptlang.org/)
*   **Stil:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn/UI](https://ui.shadcn.com/)
*   **State Yönetimi:** React Context API & LocalStorage
*   **İkonlar:** [Lucide React](https://lucide.dev/)

### Backend (Sunucu)
*   **Platform:** [.NET 9.0](https://dotnet.microsoft.com/)
*   **API:** ASP.NET Core Web API
*   **Veritabanı:** SQL Server (Entity Framework Core ile)
*   **Kimlik Doğrulama:** JWT (JSON Web Token)
*   **Astroloji Motoru:** [SwissEphNet](https://github.com/SwissEph/SwissEphNet) (C# wrapper for Swiss Ephemeris)

---

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için hem Backend hem de Frontend'i ayağa kaldırmanız gerekir.

### Ön Koşullar
*   Node.js (v18+)
*   .NET 9.0 SDK
*   SQL Server (LocalDB veya tam sürüm)

### 1. Backend Kurulumu
1.  `backend` klasörüne gidin:
    ```bash
    cd backend
    ```
2.  `src/AstrologyChart.API/appsettings.json` dosyasındaki Veritabanı bağlantı dizesini (Connection String) kendi sisteminize göre düzenleyin.
3.  Veritabanını oluşturun (Migration):
    ```bash
    dotnet ef database update --project src/AstrologyChart.Infrastructure --startup-project src/AstrologyChart.API
    ```
4.  API'yi başlatın:
    ```bash
    dotnet run --project src/AstrologyChart.API
    ```
    *Backend `http://localhost:5243` adresinde çalışacaktır.*

### 2. Frontend Kurulumu
1.  Yeni bir terminal açıp `frontend` klasörüne gidin:
    ```bash
    cd frontend
    ```
2.  Paketleri yükleyin:
    ```bash
    npm install
    ```
3.  Uygulamayı başlatın:
    ```bash
    npm run dev
    ```
4.  Tarayıcıda `http://localhost:5173` adresine gidin.

---

## 🔮 Gelecek Planları (Roadmap)

- [ ] **Yapay Zeka Yorumu:** Harita verilerini AI ile analiz ederek kişiye özel detaylı yorumlar oluşturma.
- [ ] **PDF Rapor:** Harita analizini şık bir PDF raporu olarak indirme.
- [ ] **Sinastri (İlişki) Analizi:** İki harita arasındaki uyumu hesaplama.
- [ ] **Transitler:** Güncel gökyüzü hareketlerinin harita üzerindeki etkileri.

---

## 🤝 Katkıda Bulunma

1.  Bu depoyu forklayın (Fork).
2.  Yeni bir özellik dalı oluşturun (`git checkout -b feature/yeni-ozellik`).
3.  Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`).
4.  Dalınıza push yapın (`git push origin feature/yeni-ozellik`).
5.  Bir Pull Request (PR) oluşturun.


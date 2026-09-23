<div align="center">

# HEN Temizlik

### Temiz bir alan. Ferahlayan bir hayat.

Sakarya odaklı bir temizlik markası için hazırlanmış, mobil uyumlu tanıtım ve randevu talep arayüzü.

**React 19 · Vite 6 · React Router 7 · JavaScript · CSS**

[Ekran Görüntüleri](#ekran-goruntuleri) · [Kurulum](#kurulum) · [Yapılandırma](#yapilandirma) · [Randevu Akışı](#randevu-akisi)

</div>

![HEN Temizlik masaüstü ana sayfa görünümü](docs/screenshots/ana-sayfa-masaustu.png)

## Proje hakkında

HEN Temizlik; ziyaretçilerin temizlik hizmetlerini incelemesini, etkileşimli önce/sonra karşılaştırmalarını keşfetmesini ve üç adımda randevu talebi hazırlamasını sağlayan bir web arayüzüdür. Turuncu-kırmızı geçişler, geniş boşluklar ve Manrope yazı tipi tasarımın görsel dilini oluşturur.

> **Mevcut durum:** Proje bir ön yüz uygulamasıdır. Randevu API adresi tanımlanmadığında form **demo modunda** çalışır; bilgiler kaydedilmez ve işletmeye gönderilmez. Depoda bir sunucu uygulaması veya veritabanı bulunmaz.

## Öne çıkan özellikler

- **Mobil uyumlu tasarım:** Masaüstü ve telefon ekranlarına uyarlanan yerleşimler, mobil menü ve hızlı iletişim alanları.
- **8 hizmet kategorisi:** Ev, ofis, bina/apartman, inşaat sonrası, boş daire, taşınma, detaylı temizlik ve cam temizliği.
- **Hizmete özel sayfalar:** Hizmet açıklamasından ilgili seçeneğin önceden seçildiği randevu formuna geçiş.
- **Etkileşimli karşılaştırmalar:** Fare, dokunmatik ekran ve klavyeyle kullanılabilen önce/sonra kaydırıcıları.
- **Üç adımlı randevu formu:** Hizmet seçimi, tarih ve konum, iletişim bilgileri; seçimlerle güncellenen talep özeti.
- **Form doğrulama:** Zorunlu alanlar, metrekare aralığı, tarih/saat, cep telefonu, isteğe bağlı e-posta ve onay kontrolü.
- **Gönderim durumları:** Yükleniyor, hata, başarı ve açıkça belirtilen demo sonucu; tekrarlı gönderimi engelleyen arayüz kontrolü.
- **İletişim bağlantıları:** Ortam değişkenleriyle yönetilen telefon, WhatsApp, e-posta ve Instagram bilgileri.
- **İçerik bölümleri:** Çalışma süreci, hakkımızda, yorumlar, sık sorulan sorular ve yasal metin sayfaları.
- **Erişilebilirlik desteği:** İçeriğe geç bağlantısı, klavye kontrolleri, form hata ilişkilendirmeleri ve azaltılmış hareket tercihine uyum.
- **Sayfa bazlı yükleme:** Randevu, hizmet detayı, yasal metin ve bulunamayan sayfalar için `React.lazy` / `Suspense`.

<a id="ekran-goruntuleri"></a>

## Ekran görüntüleri

Aşağıdaki görseller uygulamanın yerel olarak çalışan sürümünden alınmıştır. Masaüstü görüntüleri **1440 px**, mobil görüntüler **390 px** ekran genişliğinde hazırlanmıştır. Tam boyutlu dosyaya ulaşmak için görsele tıklayabilirsiniz.

### Randevu oluşturma

![Hizmet seçimi ve talep özetiyle masaüstü randevu sayfası](docs/screenshots/randevu-masaustu.png)

### Önce / sonra galerisi

![Salon, mutfak ve banyo için etkileşimli önce ve sonra karşılaştırmaları](docs/screenshots/oncesi-sonrasi.png)

### Hizmet detay sayfası

![Ev temizliği hizmet açıklaması ve randevuya geçiş](docs/screenshots/hizmet-detayi.png)

<details>
<summary><strong>Ana sayfanın tamamını görüntüle</strong></summary>

![HEN Temizlik ana sayfasının tüm bölümleri](docs/screenshots/ana-sayfa-tam.png)

</details>

<details>
<summary><strong>Mobil ekran görüntülerini görüntüle</strong></summary>

### Mobil ana sayfa — tam sayfa

<a href="docs/screenshots/ana-sayfa-mobil.png"><img src="docs/screenshots/ana-sayfa-mobil.png" alt="HEN Temizlik mobil ana sayfasının tamamı" width="390" /></a>

### Mobil randevu sayfası — tam sayfa

<a href="docs/screenshots/randevu-mobil.png"><img src="docs/screenshots/randevu-mobil.png" alt="HEN Temizlik mobil randevu formu ve talep özeti" width="390" /></a>

</details>

Tüm ekran görüntüleri [`docs/screenshots/`](docs/screenshots/) klasöründedir. Arayüzdeki temizlik fotoğrafları yapay zekâ ile hazırlanmış temsili örneklerdir; gerçek müşteri çalışması olarak sunulmaz.

## Teknolojiler

| Teknoloji | Kullanım amacı |
| --- | --- |
| React 19 | Bileşenler, form durumu ve kullanıcı etkileşimleri |
| Vite 6 | Geliştirme sunucusu ve üretim derlemesi |
| React Router DOM 7 | Sayfa yönlendirmeleri ve sorgu parametreleri |
| Lucide React | Arayüz ikonları |
| Manrope Variable / Fontsource | Projeye paketlenmiş yazı tipi |
| CSS | Tasarım değişkenleri, duyarlı yerleşimler ve animasyonlar |
| Playwright | Tarayıcı otomasyonu için kurulu geliştirme bağımlılığı |

Kesin bağımlılık sürümleri `package-lock.json` dosyasında sabitlenir.

<a id="kurulum"></a>

## Kurulum

**Gereksinimler:** Node.js 22 veya üzeri, npm ve Git. Üretim derlemesi Node.js `24.11.1` ve npm `11.6.2` ile doğrulanmıştır.

```bash
git clone https://github.com/NihatKadirli/HEN.git
cd HEN
npm ci
npm run dev
```

Geliştirme sunucusu varsayılan olarak `http://localhost:5173` adresinde açılır. Port doluysa terminalde gösterilen adresi kullanın. Demo sürümünü çalıştırmak için `.env` dosyası oluşturmanız gerekmez.

### Komutlar

| Komut | Açıklama |
| --- | --- |
| `npm ci` | Kilit dosyasındaki bağımlılıkları yükler. |
| `npm run dev` | Vite geliştirme sunucusunu başlatır. |
| `npm run build` | Üretim dosyalarını `dist/` klasörüne oluşturur. |
| `npm run preview` | Üretim derlemesini yerelde önizler; varsayılan port `4173` olur. |
| `npm test` | Playwright test çalıştırıcısını başlatır. Henüz test senaryosu bulunmadığı için mevcut durumda test bulunamadı hatası verir. |

<a id="yapilandirma"></a>

## Yapılandırma

Özel iletişim bilgileri veya bir randevu API'si kullanmak için kök dizindeki `.env.example` dosyasını `.env` adıyla kopyalayın ve değerleri düzenleyin:

```dotenv
# Boş bırakılırsa randevu formu demo modunda çalışır.
VITE_APPOINTMENT_API_URL=

# İşletmenize ait iletişim bilgilerini girin.
VITE_CONTACT_PHONE=
VITE_CONTACT_EMAIL=
VITE_WHATSAPP_PHONE=
VITE_INSTAGRAM_URL=
```

| Değişken | Açıklama |
| --- | --- |
| `VITE_APPOINTMENT_API_URL` | Randevu taleplerinin JSON olarak gönderileceği `POST` adresi. |
| `VITE_CONTACT_PHONE` | Görünen telefon ve arama bağlantısı; örnek biçim: `05XX XXX XX XX`. |
| `VITE_CONTACT_EMAIL` | İletişim e-posta adresi. |
| `VITE_WHATSAPP_PHONE` | Ülke koduyla WhatsApp numarası; örnek biçim: `905XXXXXXXXX`. |
| `VITE_INSTAGRAM_URL` | İşletmenin tam Instagram profil adresi. |

Değerler boş bırakıldığında `src/config/site.js` içindeki örnek iletişim bilgileri kullanılır. Ortam değişkenlerini değiştirdikten sonra geliştirme sunucusunu yeniden başlatın; üretim için yeniden derleme yapın. `VITE_` değişkenleri tarayıcıya gönderilen pakete dahil edilir; bu alanlara gizli anahtar yazmayın.

<a id="randevu-akisi"></a>

## Randevu akışı

1. **Hizmet:** Temizlik hizmeti, alan türü ve yaklaşık metrekare seçilir.
2. **Tarih ve konum:** Açık adres, tercih edilen tarih ve saat girilir.
3. **Bilgileriniz:** Ad soyad, cep telefonu, isteğe bağlı e-posta/notlar ve gerekli onay tamamlanır.

Form her adımda alanları doğrular. Talep özeti seçimlerle birlikte güncellenir. Hizmet detayındaki bağlantı, örneğin `/randevu?hizmet=ev`, ilgili hizmeti önceden seçer.

### Demo modu

`VITE_APPOINTMENT_API_URL` boşken gönderim kısa bir bekleme ile simüle edilir. Sonuç ekranı işlemin demo olduğunu ve bilgilerin kaydedilmediğini açıkça belirtir.

### API bağlantısı

API adresi tanımlandığında `src/services/appointmentService.js` şu sözleşmeyle istek gönderir:

- **Yöntem:** `POST`
- **Başlıklar:** `Content-Type: application/json` ve `Idempotency-Key`
- **Gövde alanları:** `service`, `area`, `squareMeters`, `address`, `date`, `time`, `name`, `phone`, `email`, `notes`, `consent`
- **Dönüşüm:** Ad ve e-posta başındaki/sonundaki boşluklar temizlenir; telefon `05XXXXXXXXX` biçimine normalize edilir. `squareMeters`, formdan gelen metin değeriyle iletilir.
- **Yanıt:** Başarılı bir HTTP yanıtı ve geçerli JSON gövdesi beklenir; örneğin `{ "id": "talep-123", "status": "received" }`.

Sunucu uygulamasını ayrıca sağlamanız gerekir. Veri kaydı, sunucu tarafında doğrulama ve `Idempotency-Key` ile yinelenen taleplerin yönetimi sunucunun sorumluluğundadır. Farklı bir alan adı kullanılıyorsa API, uygulama kaynağından gelen `POST` isteklerini ve bu başlıkları CORS üzerinden kabul etmelidir.

Randevu formu bir **talep** oluşturur; uygunluk ve fiyat görüşmesi yapılmadan kesinleşmiş rezervasyon anlamına gelmez.

## Sayfalar

| Yol | İçerik |
| --- | --- |
| `/` | Ana sayfa ve tanıtım bölümleri |
| `/hizmetler/:id` | Hizmet detay sayfası |
| `/randevu` | Üç adımlı randevu talep formu |
| `/kvkk` | KVKK metni taslağı |
| `/gizlilik` | Gizlilik politikası taslağı |
| `/kullanim-kosullari` | Kullanım koşulları taslağı |
| Diğer yollar | Sayfa bulunamadı ekranı |

Hizmet kimlikleri: `ev`, `ofis`, `bina`, `insaat`, `bos-daire`, `tasinma`, `detayli`, `cam`. Geçersiz bir hizmet kimliği, ana sayfadaki hizmetler bölümüne yönlendirilir.

## Proje yapısı

```text
HEN/
├── docs/screenshots/           # README ekran görüntüleri
├── public/
│   ├── favicon.svg
│   └── images/                 # Önce / sonra görseli
├── src/
│   ├── components/             # Arayüz bileşenleri ve randevu formu
│   ├── config/site.js          # Marka, iletişim ve demo modu ayarları
│   ├── data/                   # Hizmetler, galeri, SSS, yorumlar ve metinler
│   ├── hooks/                  # Kaydırmayla görünürlük animasyonu
│   ├── pages/                  # Ana sayfa, randevu, detay ve yasal sayfalar
│   ├── services/               # Randevu API / demo gönderim katmanı
│   ├── styles/                 # Genel stiller ve tasarım değişkenleri
│   ├── utils/                  # Form doğrulama ve tarih/telefon yardımcıları
│   ├── App.jsx                 # Sayfa rotaları ve ortak yerleşim
│   └── main.jsx                # Uygulama giriş noktası
├── .env.example                # Örnek ortam değişkenleri
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## İçerik ve tasarımı düzenleme

| Düzenlemek istediğiniz alan | Dosya |
| --- | --- |
| Marka adı, konum ve iletişim varsayılanları | `src/config/site.js` |
| Hizmet başlıkları ve açıklamaları | `src/data/services.js` |
| Galeri görselleri ve kırpma bölgeleri | `src/data/gallery.js` |
| Sık sorulan sorular | `src/data/faq.js` |
| Örnek yorumlar ve istatistikler | `src/data/testimonials.js`, `src/data/stats.js` |
| Yasal metin taslakları | `src/data/legal.js` |
| Renk, yazı tipi, boşluk ve köşe değişkenleri | `src/styles/variables.css` |
| Sayfa ve bileşen stilleri | `src/styles/global.css` |

İletişim bilgileri, istatistikler ve yorumlar örnek içeriklerdir; yasal metinler taslaktır. İşletme yayınına hazırlanırken bu alanları gerçek içeriklerle güncelleyin.

## Üretim derlemesi

```bash
npm run build
npm run preview
```

Yayımlanacak statik dosyalar `dist/` klasöründedir. Uygulama `BrowserRouter` kullandığından barındırma ortamı, `/randevu` gibi doğrudan açılan sayfa yollarını `index.html` dosyasına yönlendirmelidir. Mevcut yapılandırma alan adının kök dizininde çalışacak şekilde hazırlanmıştır; alt dizine yayın için Vite `base`, yönlendirici `basename` ve `/images/...` gibi kökten başlayan varlık yolları birlikte düzenlenmelidir.

## Lisans

Depoda henüz bir `LICENSE` dosyası bulunmamaktadır. Kullanım ve dağıtım koşulları için proje sahibiyle iletişime geçin.

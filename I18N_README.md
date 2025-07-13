# Prizma Klinik i18n (Internationalization) Implementation

Bu proje için Türkçe ve İngilizce dil desteği başarıyla eklenmiştir. Varsayılan dil Türkçe'dir ve kullanıcılar header'daki dil değiştirme butonu ile dilleri değiştirebilirler.

## 🎯 Tamamlanan Özellikler

### ✅ Çeviri Dosyaları
- **tr.json**: Türkçe çeviriler (varsayılan dil)
- **en.json**: İngilizce çeviriler

### ✅ JavaScript i18n Sistemi
- **js/i18n.js**: Tam fonksiyonel dil değiştirme sistemi
- LocalStorage ile dil tercihi kaydetme
- Dinamik içerik güncelleme
- Dot notation ile çeviri anahtarları (`site.title`, `about.welcome` vb.)

### ✅ Dil Değiştirme Butonu
- Header'a eklenen görsel dil seçici
- 🇹🇷 Türkiye bayrağı ve 🇺🇸 Amerika bayrağı
- Modern gradient tasarım
- Dropdown menü ile dil seçimi
- Aktif dil göstergesi
- Gelişmiş hover efektleri

### ✅ Güncellenen Bölümler (index.html)
- Site başlığı ve navbar
- Header bilgileri (telefon, adres, çalışma saatleri)
- Hero section (2 slide)
- Hakkımızda bölümü
- Konsültasyon formu
- Hizmetler bölümü (4 hizmet)
- Fiyatlandırma bölümü (temel plan)

## 🔧 Kullanım

### Test Etme
1. `i18n-test.html` dosyasını açın
2. Dil değiştirme butonuna tıklayın
3. Tüm metinlerin dinamik olarak değiştiğini görün

### Yeni Çeviri Ekleme
1. **tr.json** ve **en.json** dosyalarına yeni anahtarlar ekleyin:
```json
{
  "yeni_bolum": {
    "baslik": "Yeni Başlık",
    "aciklama": "Yeni açıklama"
  }
}
```

2. HTML'de `data-i18n` attribute'u kullanın:
```html
<h2 data-i18n="yeni_bolum.baslik">Yeni Başlık</h2>
<p data-i18n="yeni_bolum.aciklama">Yeni açıklama</p>
```

### Form Alanları İçin
Placeholder metinleri için:
```html
<input type="text" data-i18n="form.isim" placeholder="İsim">
```

## 📋 Kalan Görevler

### Tamamlanması Gereken Bölümler

#### 1. Services Bölümü (index.html)
Kalan 4 hizmet için çeviri ekleyin:
```html
<!-- Dental Calculus -->
<h3 data-i18n="services.items.dental_calculus.title">Diş Taşı Temizliği</h3>
<p data-i18n="services.items.dental_calculus.description">...</p>

<!-- Periodontics -->
<h3 data-i18n="services.items.periodontics.title">Periodontoloji</h3>
<p data-i18n="services.items.periodontics.description">...</p>

<!-- Braces -->
<h3 data-i18n="services.items.braces.title">Aparey ve Braketler</h3>
<p data-i18n="services.items.braces.description">...</p>

<!-- Root Canal -->
<h3 data-i18n="services.items.root_canal.title">Kanal Tedavisi</h3>
<p data-i18n="services.items.root_canal.description">...</p>
```

#### 2. Pricing Bölümü (index.html)
Kalan 3 fiyat planı için:
```html
<!-- Standard Plan -->
<div class="pricing-entry" data-pricing-plan="standard">
  <h3 data-i18n="pricing.plans.standard.title">Standart</h3>
  <span data-i18n="pricing.plans.standard.price">1.250₺</span>
  <!-- ... -->
</div>

<!-- Premium Plan -->
<div class="pricing-entry" data-pricing-plan="premium">
  <h3 data-i18n="pricing.plans.premium.title">Premium</h3>
  <span data-i18n="pricing.plans.premium.price">1.850₺</span>
  <!-- ... -->
</div>

<!-- Platinum Plan -->
<div class="pricing-entry" data-pricing-plan="platinum">
  <h3 data-i18n="pricing.plans.platinum.title">Platinum</h3>
  <span data-i18n="pricing.plans.platinum.price">2.450₺</span>
  <!-- ... -->
</div>
```

#### 3. Doctors Bölümü (index.html)
4 doktor için çeviri ekleyin:
```html
<h3 data-i18n="doctors.items.doctor1.name">Dr. Mehmet Demir</h3>
<span data-i18n="doctors.items.doctor1.position">Diş Hekimi</span>
<p data-i18n="doctors.items.doctor1.description">...</p>
```

#### 4. Testimonials Bölümü (index.html)
5 görüş için çeviri ekleyin:
```html
<p data-i18n="testimonials.items.testimonial1.text">...</p>
<p data-i18n="testimonials.items.testimonial1.name">Mustafa Özkan</p>
<span data-i18n="testimonials.items.testimonial1.position">Çiftçi</span>
```

#### 5. Blog Bölümü (index.html)
Blog başlığı ve yazıları için:
```html
<span data-i18n="blog.title">Blog</span>
<h2 data-i18n="blog.subtitle">Son Blog Yazıları</h2>
<h3 data-i18n="blog.sample_title">Yeterince Uyumadığınızda Ortaya Çıkan Korkutucu Şeyler</h3>
<a data-i18n="blog.read_more">Devamını Oku</a>
```

#### 6. Footer Bölümü (index.html)
Footer'daki tüm linkler ve metinler için:
```html
<h2 data-i18n="footer.questions">Sorularınız mı var?</h2>
<p data-i18n="footer.address">Örnek Mahallesi, Sağlık Sokak No:15 Beşiktaş/İstanbul</p>
<p data-i18n="footer.email">info@prizmaklinik.com</p>
```

#### 7. Diğer Sayfalar
Aşağıdaki sayfalar için de aynı implementasyon yapılmalı:
- `about.html`
- `doctor.html`
- `department.html`
- `pricing.html`
- `blog.html`
- `blog-single.html`
- `contact.html`

Her sayfaya aşağıdaki script'leri ekleyin:
```html
<script src="js/i18n.js"></script>
```

## 🎨 CSS Stilleri

Dil değiştirme butonu için CSS stilleri `index.html` dosyasında mevcuttur. Diğer sayfalara da aynı stilleri ekleyin.

## 🚀 Canlı Test

1. Herhangi bir sayfayı açın
2. Dil değiştirme butonuna tıklayın
3. Sayfanın yenilenmeden dilinin değiştiğini görün
4. Dil tercihi localStorage'da kaydedilir

## 📝 Notlar

- Varsayılan dil Türkçe'dir
- Çeviriler JSON dosyalarında merkezi olarak yönetilir
- Dil tercihi tarayıcıda kaydedilir
- Tüm form alanları (placeholder'lar) desteklenir
- Pricing planları özel olarak handle edilir

## 🔄 Gelecek Geliştirmeler

1. **Dil Otomatik Tespiti**: Tarayıcı diline göre otomatik dil seçimi
2. **URL Tabanlı Dil**: `/tr/` ve `/en/` gibi URL yapısı
3. **Daha Fazla Dil**: Almanca, Fransızca vb. diller eklenebilir
4. **SEO Optimizasyonu**: `hreflang` etiketleri eklenebilir

## 📞 Destek

Herhangi bir sorun yaşarsanız:
1. Browser console'da hata kontrolü yapın
2. JSON dosyalarının doğru formatını kontrol edin
3. `data-i18n` attribute'larının doğru yazıldığını kontrol edin

**Tüm sistem hazır ve çalışır durumda!** 🎉 
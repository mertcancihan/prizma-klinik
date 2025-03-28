// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    // Dil tercihini localStorage'a kaydet
    localStorage.setItem('language', lang);
    
    // HTML lang özelliğini güncelle
    document.documentElement.lang = lang;
    
    // Tüm çevrilebilir elementleri güncelle
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getTranslation(key, lang);
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.tagName === 'META') {
                element.content = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Aktif dil butonunu vurgula
    document.querySelectorAll('.language-button').forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('text-white', 'font-bold');
        } else {
            button.classList.remove('text-white', 'font-bold');
        }
    });
    
    // Özel bir olay tetikle
    const languageChangedEvent = new Event('languageChanged');
    window.dispatchEvent(languageChangedEvent);
}

// Çeviri alma fonksiyonu
function getTranslation(key, lang) {
    const keys = key.split('.');
    let translation = languages[lang];
    
    for (const k of keys) {
        if (translation && translation[k]) {
            translation = translation[k];
        } else {
            return null;
        }
    }
    
    return translation;
}

document.addEventListener('DOMContentLoaded', function() {
    // NOT: Mobil Menü işlevselliği header.js içinde yönetiliyor
    // Bu bölüm çakışmalara neden olduğu için kaldırıldı

    // Sayfa Geçişleri için Animasyon
    document.body.classList.add('page-transition');

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sayfayı Yüklerken Animasyon
    window.addEventListener('load', function() {
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.classList.add('animate-fade-in');
        }
    });

    // Randevu Formu Doğrulama (Eğer randevu sayfası varsa)
    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form doğrulama
            let isValid = true;
            const requiredFields = appointmentForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                } else {
                    field.classList.remove('border-red-500');
                }
            });
            
            if (isValid) {
                // Form gönderme işlemi burada yapılabilir
                alert('Randevunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.');
                appointmentForm.reset();
            } else {
                alert('Lütfen tüm zorunlu alanları doldurun.');
            }
        });
    }

    // Sayfa Kaydırma Olayı
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (header) {
            if (scrollTop > 50) {
                header.classList.add('bg-white', 'shadow-md');
                header.classList.remove('bg-transparent');
            } else {
                if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                    header.classList.remove('bg-white', 'shadow-md');
                    header.classList.add('bg-transparent');
                }
            }
        }
    });

    // Sayfa yüklendiğinde son seçilen dili yükle
    const savedLanguage = localStorage.getItem('language') || 'tr';
    changeLanguage(savedLanguage);
}); 
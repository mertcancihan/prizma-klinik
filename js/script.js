document.addEventListener('DOMContentLoaded', function() {
    // Mobil Menü Açma/Kapama
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Mobil Dropdown Menüler
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
    
    mobileDropdowns.forEach(dropdown => {
        const dropdownButton = dropdown.querySelector('button');
        const dropdownContent = dropdown.querySelector('.mobile-dropdown-content');
        const dropdownIcon = dropdown.querySelector('.mobile-dropdown-icon');
        
        if (dropdownButton && dropdownContent && dropdownIcon) {
            dropdownButton.addEventListener('click', function() {
                dropdownContent.classList.toggle('hidden');
                dropdownContent.classList.toggle('active');
                dropdownIcon.classList.toggle('active');
            });
        }
    });

    // Mobil dropdown menü
    const mobileDropdownButton = document.getElementById('mobile-dropdown-button');
    const mobileDropdownContent = document.getElementById('mobile-dropdown-content');
    
    if (mobileDropdownButton && mobileDropdownContent) {
        mobileDropdownButton.addEventListener('click', function() {
            mobileDropdownContent.classList.toggle('hidden');
        });
    }

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
}); 